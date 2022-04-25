<template>
  <div class="post">
    <h1>Add a new post</h1>
    <h2 id="txtName"></h2>
    <div>
    <form id="form">
        <div>
          <label for="name" class="form-label">Post name</label><br>
          <input type="text" name="name" id="name" placeholder="Give your post a name"><br>
          <label for="desc" class="form-label">Description</label><br>
          <textarea name="desc" id="desc" placeholder="Add a descreption"></textarea><br>
        </div>
        <div>
          <h1>Your location: </h1>
          <p>{{ currPos.lat.toFixed(2) }} latitude, {{ currPos.lng.toFixed(2) }} longitude</p>
        </div>
        <div ref="mapDiv" style="witdth: 100%; height: 40vh; margin-left:20%; margin-right:20%;">

        </div>
        <div>
          <h3 id="location"></h3>
        </div>
        <button @click = "submit" type="button" id="add">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { auth} from '../firebase'
import { useGeolocation } from '../useGeolocation'
import { sleep } from '../useGeolocation'
import { computed, onMounted, ref } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'
import router from '../router'
//import { watch } from 'vue'
import { db } from '../firebase'

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
        console.log("Awaiting Coords")
        await sleep(500)
      }
      console.log("Centering Lat: " + currPos.value.lat)
      console.log("Centering Lng: " + currPos.value.lng)
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
      var user = auth.currentUser;
      var name, output,  username;
      output = document.getElementById("txtName");
      //console.log(user.email);
      if (user != null) {
        name = user.email;
        username = name.substring(0, name.indexOf('@'));
        output.innerHTML= "Welcome " + username;
      }
      
    },
  methods: { 
    submit() {
      const desc = document.getElementById('desc').value
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
        username: username
      }
      
      db.collection('posts').add(newPost).then(() => {
        console.log('Post added!')
      })
      router.push('/')
    }
  }
};
</script>