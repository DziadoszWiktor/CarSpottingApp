<template>
  <div class="liked mb-4">
    <h1 style="margin-top:120px">Liked posts page</h1>
    <h2 id="txtName" ></h2>
    <div v-for="(post, index) in liked" :key="index">
      <div  class="border border-primary p-5" style="margin-top:20px;background-color:#a9c2f7;margin-left:10%;margin-right:10%;border-radius:15px;">
        <h2>{{ post.username }}</h2>
        <h3>{{ post.description}}</h3>
        <img :id="'pictureFromStorage4'+post.id" class="img-fluid" src="----"><br>
      <img :id="'dislikeBtn'+post.id" src="img/heart-filled.png" alt="Heart button" width="50" height="50" @click="deleteData(post.id)" style="margin-top:25px;">
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-undef */
/* eslint-disable */
import { auth } from '../firebase'
import { db } from '../firebase'
import router from '../router'
import { ref as reff } from '../firebase';
import { storage } from '../firebase';
import { getDownloadURL } from '../firebase';

  export default {
    name: "LikedView",
    data:() => ({
      
      uid: "",
      post_id: "",
      liked: [],
      likes:[]
    }),
    methods: {
      fetchData(){
        db.collection("liked").get().then(docs => {
          docs.forEach(doc => {
            if (doc.data().uid == auth.currentUser.uid) {
              db.collection("posts").doc(doc.data().post_id).get().then(doc => {
                const Post = {
                  id: doc.id,
                  post_name: doc.data().post_name,
                  username: doc.data().username,
                  description: doc.data().description,
                  location: doc.data().location,
                }
                this.liked.push(Post)
                //console.log(Post)
                //console.log(doc.data())
                const username = Post.username;
                const name = Post.post_name;
                const desc = Post.description;
                const id = username+"-"+name+"-"+desc;
                const post_id = Post.id;
                console.log(id,post_id);
                const refImage = reff(storage, 'cars/'+id+'.jpg')
                getDownloadURL(refImage).then((url)=>{
                  const xhr = new XMLHttpRequest();
                  xhr.responseType = 'data_url';
                  xhr.onload = (event) => {
                    const imgurl = xhr.response;
                  }
                  xhr.open('GET', url)
                  xhr.send();
                  //this.sleep(500);
                  const receivedimg = document.getElementById("pictureFromStorage4"+post_id).src = url;
                  //receivedimg.setAttribute('src',url);
                })
              })
            }
          })
        });
      },
      deleteData(id){
        db.collection("liked").get().then(docs => {
          docs.forEach(doc => {
            if (doc.data().post_id == id) {
              const delPost = doc.id
              //console.log(doc.data().post_id)
              //console.log(id)
              db.collection("liked").doc(delPost).delete().then(() => {
                window.console.log("Post Disliked!");
                router.push('/liked')
              })
            }
          })
        })
        document.getElementById("dislikeBtn"+id).src = "img/broken-heart.png"
      }
    },
    mounted() {
      var user = auth.currentUser;
      var name, output,  username;
      output = document.getElementById("txtName");
      //console.log(user.email);
      if (user != null) {
        name = user.email;
        username = name.substring(0, name.indexOf('@'));
        output.innerHTML= "Welcome " + username + ", here you'll find post liked by you!";
      }
      this.fetchData()
    }
  }
</script>