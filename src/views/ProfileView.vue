<template>
  <div class="profile mb-4">
    <div style="text-align:center; margin-top:110px;height:300px;background-color:#7EA3F1;">
      <h1>Profile page</h1>
      <div style="display:inline-block;vertical-align:bottom;margin-right:25px;">
        <img  src="img/icon-user.png" alt="user-icon" width="100" height="100"  style="float:left; margin-left:15%">
      </div>
      <div style="display:inline-block;margin-bottom:30px;margin-right:25px">
       <h2 id="txtName"></h2>
      </div>
    </div>
    <div v-for="(post, index) in posts" :key="index">
      <div class="border border-primary p-5" style="margin-top:20px;background-color:#a9c2f7;margin-left:10%;margin-right:10%;border-radius:15px;">
        <h2>{{ post.post_name }} by: {{ post.username }}</h2>
        <h3>{{ post.description }}</h3>
        <h3>{{ post.location }}</h3>
        <img :id="'pictureFromStorage3'+post.id" class="img-fluid" src="----"><br>
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
        output.innerHTML= username;
        
      }
      this.fetchComments()
    }
}
</script>