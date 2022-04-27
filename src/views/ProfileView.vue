<template>
<div class="profile mb-4">
    <div style="text-align:center; margin-top:120px;padding:20%;height:500px;background-color:#000000;color:pink">
    <h1>W sumie nie wiem co tu damy <br>\o/</h1>
    </div>
    <h1>Profile page</h1>
    <h2 id="txtName"></h2>
    <div v-for="(post, index) in posts" :key="index">
      <div class="border border-primary p-5" style="margin-top:20px;background-color:#a9c2f7;margin-left:10%;margin-right:10%;border-radius:15px;">
        <h2>{{ post.post_name }} by: {{ post.username }}</h2>
        <h3>{{ post.description }}</h3>
        <h3>{{ post.location }}</h3>
        <img :id="'pictureFromStorage3'+post.id" class="img-fluid" src="----"><br>
      </div>
    </div>
</div>
<!--
<section class="h-100 gradient-custom-2">
        <div class="row justify-content-center align-items-center ">
          <div class="col col-lg-9 col-xl-7">
            <div class="card">
              <div class="rounded-top text-white d-flex flex-row" style="background-color: #2b2b2b; height:300px;margin-top:20px;">
                <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px; margin-left: 12px">
                  <img src="#"
                    alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                    style="width: 150px; height:150px;z-index:1;">
                  <a class="btn btn-dark" href="user-info.html" role="button" 
                    style="z-index: 1;margin-top:10px;">
                   User Information
                  </a>
                </div>
                <div class="container ms-3" style="margin-top: 130px;">
                  <h2 id="txtName"><b></b></h2>
                </div>
              </div>
              <div class="p-4 text-black" style="background-color: #f8f9fa;">

                <div class="profile mb-4" style="margin-top:10px;">
                  <h1>Your posts..</h1>
                  <h2 id="txtName"></h2>
                  <div v-for="(post, index) in posts" :key="index">
                    <div class="border border-primary p-5" style="margin-top:20px;background-color:#a9c2f7;margin-left:10%;margin-right:10%;border-radius:15px;">
                      <h2>{{ post.post_name }} by: {{ post.username }}</h2>
                      <h3>{{ post.description }}</h3>
                      <h3>{{ post.location }}</h3>
                      <img :id="'pictureFromStorage3'+post.id" class="img-fluid" src="----"><br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
-->
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
    name: "CommentsView",
    data:() => ({
      description: "",
      location: "",
      uid: "",
      username: "",
      posts: [],
    }),

    methods: {
      fetchComments(){
        db.collection("posts").get().then(docs => {
          docs.forEach(doc => {
            if (doc.data().uid == auth.currentUser.uid) {
            const Post = {
              id: doc.id,
              post_name: doc.data().post_name,
              username: doc.data().username,
              description: doc.data().description,
              location: doc.data().location,
              uid: doc.data().uid
            }
            this.posts.push(Post)
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
              const receivedimg = document.getElementById("pictureFromStorage3"+post_id).src = url;
              //receivedimg.setAttribute('src',url);
            })
          }
        })
      });
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
        output.innerHTML= "Welcome " + username;
      }
      this.fetchComments()
    }
}
</script>