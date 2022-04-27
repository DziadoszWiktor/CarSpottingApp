<template>
  <div class="home mb-4">
    <h1 style="margin-top:120px" id="test-home">Home Page</h1>
    <h2 id="txtName" ></h2>
    <button class="btn" style="background-color:#7EA3F1;color:black;height:50px;width:150px;" @click="$router.push('post')" >Post</button>
    
    <div v-for="(post, index) in posts" :key="index">
      <div  class="border border-primary p-5" style="margin-top:20px;background-color:#a9c2f7;margin-left:10%;margin-right:10%;border-radius:15px;">
        <img :id="'heart'+post.id" src="img/heart-empty.png" alt="Heart button" width="50" height="50" @click="likePost(post.id)" style="float:right"><br>
        <h2>{{ post.post_name }} by: {{ post.username }}</h2>
        <h3>{{ post.description }}</h3>
        <h3 @click="initMap(post.location)">{{ post.location }}</h3>

        <img :id="'pictureFromStorage2'+post.id" width="500" height="500" src="----"><br>

        <input style="height:50px;width:60%; margin:10px;border-radius:5px;padding:5px;" type="text" :id="'comment'+post.id" placeholder="Write a comment...">
        <button class="btn" style="background-color:#7EA3F1;color:black;height:50px;width:150px;" @click="commentPost(post.id, post.uid, post.post_name)" post.type="button">Comment</button><br>
        <a :id="'showComments'+post.id" @click="fetchComments(post.id)">Show comments</a>

        <div :id="'comments'+post.id" style="display:none;margin-top:20px">
          <img src="img/delete.png" alt="X button" width="50" height="50" @click="closeComments(post.id)" style="float:right">
          <div class="my-4" v-for="(comment, index) in comments" :key="index" >
            <h3>{{ comment.username }}: {{ comment.comment }}</h3>
          </div>
        </div>
      </div>
    </div>
      <div id="map" style="display:none; witdth: 100%; height: 40vh; margin-left:10%; margin-right:10%; margin-top:20px; margin-bottom:20px; border-radius:15px"></div>
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
    name: "HomeView",
    
    data:() => ({
      description: "",
      location: "",
      uid: "",
      username: "",
      posts: [],
      comments:[]
    }),
   
    methods: {
      //Posts
      fetchData(){
        db.collection("posts").get().then(docs => {
          docs.forEach(doc => {
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
              this.sleep(500);
              const receivedimg = document.getElementById("pictureFromStorage2"+post_id).src = url;
              //receivedimg.setAttribute('src',url);
            })

            //console.log(Post)

            //div.value = "hehe"
            //div.setAttribute("value", "hehe")
            //console.log(doc.data())
            //console.log(doc.data().uid)
            //console.log(doc.id)

          })
          // JEST 7.29 I NIE MAM POMYSŁU JAK UGRYŹĆ TEN WSPANIAY POMYSŁ
         //if(db.collection("liked").where("uid", "==", doc.data().uid) && db.collection("liked").where("post_id", "==", doc.id)){
         //    document.getElementById("heart"+doc.id).src = "img/heart-full.png"
         //    }
        });
      },
      //Like
      likePost(post_id) {
        const uid = auth.currentUser.uid
        const likedPost = {
          uid: uid,
          post_id: post_id
        }
        
        db.collection('liked').add(likedPost).then(() => {
        window.console.log('Post liked!')
        document.getElementById("heart"+post_id).src = "img/heart-filled.png"
          })
          
          
          
          //router.push('/liked')
        
        },
        //Comments
        commentPost(post_id,posters_uid,post_name) {
          if (document.getElementById('comment'+post_id).value != "") {
            const uid = auth.currentUser.uid
            const user = auth.currentUser
            const name = user.email;
            const username = name.substring(0, name.indexOf('@'));
            const comment = document.getElementById('comment'+post_id).value
            const newComment = {
              uid: uid,
              posters_uid: posters_uid,
              comment: comment,
              post_id: post_id,
              username: username,
              post_name: post_name
            }

            db.collection('comments').add(newComment).then(() => {
              window.console.log('Post commetned!')
            })
            document.getElementById('comment'+post_id).value = ""
            router.push('/')
          }else{
            alert("Cannot post an empty comment!")
          }
        },
        
        fetchComments(post_id){

        this.comments = []
        db.collection("comments").get().then(docs => {
          docs.forEach(doc => {
            if (doc.data().post_id == post_id) {
              //document.getElementById('comments'+post_id).innerHTML=""
              const Comment = {
                id: doc.id,
                username: doc.data().username,
                comment: doc.data().comment,
              }
               this.comments.push(Comment)
             }

          })
          window.console.log(post_id);
          if(this.comments.length == 0){
                alert("No comments yet!")
             }else{
                document.getElementById('showComments'+post_id).style.display = "none"
                document.getElementById('comments'+post_id).style.display = "block"
             }
        });
      },
      closeComments(post_id) {
        document.getElementById('comments'+post_id).style.display = "none";
        document.getElementById('showComments'+post_id).style.display = "block";
      },
       //Mapa
      initMap(loc) {
        //router.push('/map')
         let map = null;
        const place = {
          lat: parseFloat(loc.substring(0, loc.indexOf(','))),
          lng: parseFloat(loc.substring(loc.indexOf(' ')+1))

          // lat: 44.4001,
          // lng: -79.666
        };
        window.console.log(place)
        map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: place
        });
        new google.maps.Marker({
          position: place,
          map,
        });
        document.getElementById("map").style.display = "block";
        document.getElementById("map").scrollIntoView({behavior: 'smooth'});
      },
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    },
    mounted() {
      var user = auth.currentUser;
      var name, output,  username;
      output = document.getElementById("txtName");

      if (user != null) {
        name = user.email;
        username = name.substring(0, name.indexOf('@'));
        output.innerHTML= "Welcome " + username;
      }
      this.fetchData()
    }
  }
</script>