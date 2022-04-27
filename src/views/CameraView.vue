<template>
  <div class="camera">
    <h1>{{ text }}</h1>
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

    <!-- displays the picture uploaded from the native camera width:800px;heigh:800px; -->
    <img id="pictureFromCamera" width="800" heigh="500"/><br>
    <button class="btn btn-primary" @click="Upload()">Upload</button>
    <br>
    <h1>-----------------------</h1>
    <img id="pictureFromStorage" style="width:800px;heigh:800px;object-fit: scale-down;"/>
  </div>
</template>

<script>
/* eslint-disable */
/*
import { uploadString } from '@firebase/storage';
//import { refImg } from '../firebase';
//import { base64StringToBlob } from 'blob-util';
import { storage } from '../firebase';
import { ref } from '../firebase';
//import { getDownloadURL } from '../firebase';*/

export default {
  name: 'CameraComponent',
  data() {
      return {
          text: 'this is a camera',
      }
  },
  mounted() {
    //this.openCamera();
  },
  methods: {
    Upload () {
      console.log("hej");
      var image = document.getElementById('pictureFromCamera');
      image.src = URL.createObjectURL(event.target.files[0]);
        /*
        this.tab = []
        document
        .getElementById("cameraFileInput")
        .addEventListener("change", function () {
          var FR= new FileReader();
          FR.addEventListener("load", function(e) {
            document.getElementById("pictureFromCamera").src = e.target.result;
            //window.console.log("this is: "+e.target.result);
            const base64img = e.target.result;
            this.tab.push(base64img);
            //return base64img;
            window.console.log("this is a base64 var: "+ this.base64img);
            var uuid = require("uuid");
            var id = uuid.v4();
            //console.log(id);
            const refImg = ref(storage, 'cars/'+id+'.jpg');
            uploadString(refImg,base64img,'data_url').then((snapshot) =>{
              console.log("The photo has been sent in path cars/"+id+".jpg");``
            })
          }); 
          FR.readAsDataURL( this.files[0] );
          //console.log(this.tab[0]);
        });*/
    },
    /*
    uploadFire(){
            var uuid = require("uuid");
            var id = uuid.v4();
            console.log(id);
            console.log(this.base64img);
            const refImg = ref(storage, 'cars/'+id+'.jpg');
            uploadString(refImg,this.base64img,'data_url').then((snapshot) =>{
              console.log("The photo has been sent in path cars/"+id+".jpg");``
            })
    }*/
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


<!--


-->