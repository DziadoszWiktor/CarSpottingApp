<template>
  <div class="post mb-4">
    <h1 style="margin-top:120px">Add a new post</h1>
    <h2 id="txtName" ></h2>
    <div>
    <form id="form">
        <div>
          <label for="name" class="form-label">Post name</label><br>
          <input style="height:50px;width:50%; margin:10px;border-radius:5px;padding:5px;" type="text" name="name" id="name" placeholder="Give your post a name"><br>
          <label for="desc" class="form-label">Description</label><br>
          <textarea style="height:100px;width:50%; margin:10px;border-radius:5px;padding:5px;" name="desc" id="desc" placeholder="Add a descreption"></textarea><br>
        </div>

        <label for="cameraFileInput">
          <span class="btn btn-primary">Open camera</span>
          <!-- The hidden file `input` for opening the native camera  type="file"  -->
          <input
            style="display:none"
            id="cameraFileInput"
            type="file"
            accept="image/*"
            capture="environment"
          />
        </label><br>
        <img id="pictureFromCamera" width="800" height="500"/>
        <br>
        <div>
          <h1>Your location: </h1>
          <p>{{ currPos.lat.toFixed(2) }} latitude, {{ currPos.lng.toFixed(2) }} longitude</p>
        </div>
        <div ref="mapDiv" style=" witdth: 100%; height: 40vh; margin-left:10%; margin-right:10%; margin-top:20px; margin-bottom:20px; border-radius:15px">

        </div>
        <div>
          <h3 id="location"></h3>
        </div>
        <button class="btn mt-4" style="background-color:#7EA3F1;color:black;height:50px;width:150px;" @click = "openCamera" type="button" id="add">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable */
import { auth} from '../firebase'
import { useGeolocation } from '../useGeolocation'
import { sleep } from '../useGeolocation'
import { computed, onMounted, ref } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'
import router from '../router'
//import { watch } from 'vue'
import { db } from '../firebase'
import { uploadString } from '@firebase/storage';
import { storage } from '../firebase';
import { ref as reff } from '../firebase';

const GOOGLE_MAPS_API_KEY = 'AIzaSyDyqHkcm_TuRmnxsHJ9k6GHRbGa1Tt0zpA'


export default {
  name: 'App',
  //data() {
  //    return {
  //        currPos: {
  //          lat: 0,
  //          lng: 0
  //        }
  //    }
  //}, 
  setup() { 
    const { coords } = useGeolocation()
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))
    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
    const mapDiv = ref(null)
    onMounted(async () => {
      await loader.load()
      while (currPos.value.lat == 50 && currPos.value.lng == 19 ) {
        window.console.log("Awaiting Coords")
        await sleep(500)
      }
      window.console.log("Centering Lat: " + currPos.value.lat)
      window.console.log("Centering Lng: " + currPos.value.lng)
      const map = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 18
      })
      new google.maps.Marker({
      position: currPos.value,
      map,
      title: "You are here!",
      });
    })
    
    return{ currPos, mapDiv }
  },
  mounted() {
      /*
      var user = auth.currentUser;
      var name, output,  username;
      output = document.getElementById("txtName");
      //console.log(user.email);
      if (user != null) {
        name = user.email;
        username = name.substring(0, name.indexOf('@'));
        output.innerHTML= "Welcome " + username;
      }*/
      //this.openCamera();
      
    },
  methods: { 
    submit() {
      const desc = document.getElementById('desc').value
            const path = ''
            const name = document.getElementById('name').value
            const uid = auth.currentUser.uid
            const location = this.currPos.lat.toFixed(4) + ', ' + this.currPos.lng.toFixed(4)
            const email = auth.currentUser.email
            const username = email.substring(0, email.indexOf('@'));
            const newPost = {
              post_name: name,
              description: desc,
              location: location,
              uid: uid,
              username: username,
              path:path
            }
            
            db.collection('posts').add(newPost).then(() => {
              window.console.log('Post added!')
            })
            router.push('/')
    },
    openCamera () {
        this.submit();
        document
        .getElementById("cameraFileInput")
        .addEventListener("change", function () {
          var FR= new FileReader();
          console.log("1");
          FR.addEventListener("load", function(e) {
            document.getElementById("pictureFromCamera").src = e.target.result;
            //window.console.log("this is: "+e.target.result);
            const base64img = e.target.result;
            window.console.log("this is a base64 var: "+ base64img);
            var uuid = require("uuid");
            var id = uuid.v4();
            console.log("2");
            console.log(id);
            const imagepath = 'cars/'+id+'.jpg';
            db.collection('posts').where("path", "==", "").update({path:imagepath});
            //this.submit(imagepath);
            const refImg = reff(storage, imagepath);
            uploadString(refImg,base64img,'data_url').then((snapshot) =>{
              console.log("The photo has been sent in path cars/"+id+".jpg");``
            })
          }); 
          FR.readAsDataURL( this.files[0] );
        });
    },
  }
};
</script>