<template>
  <div class="home">
    <h1 id="test-home">Home Page</h1>
    <h2 id="txtName"></h2>
    <button @click="$router.push('post')" >Post</button>
    
    <div v-for="(post, index) in posts" :key="index">
      <h1>---------------</h1>
      <h2>{{ post.post_name }} by: {{ post.username }}</h2>
      <h3>{{ post.description }}</h3>
      <h3 @click="initMap(post.location)">{{ post.location }}</h3>
      
      <button @click="likePost(post.id)" post.type="button">Like</button>
      
      <input type="text" :id="'comment'+post.id" placeholder="Write a comment...">
      <button @click="commentPost(post.id, post.uid, post.post_name)" post.type="button">Comment</button><br>
      <a  @click="fetchComments(post.id)">Show comments</a>
      
      <div :id="'comments'+post.id" style="display:none">
        <button type="button" @click="closeComments(post.id)">x</button>
        <div v-for="(comment, index) in comments" :key="index" >
          <h1>---------------</h1>
          <h3>{{ comment.username }}: {{ comment.comment }}</h3>
        </div>
      </div>
      
      </div>
      <div id="map" style="display:none; witdth: 100%; height: 30vh; margin-left:30%; margin-right:30%; margin-top:20px; margin-bottom:20px"></div>
  </div>

  
</template>
<script>
/* eslint-disable no-undef */
import { auth } from '../firebase'
import { db } from '../firebase'
import router from '../router'


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
            //console.log(Post)

            //div.value = "hehe"
            //div.setAttribute("value", "hehe")
            //console.log(doc.data())
          })
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
          console.log('Post liked!')
        })
        router.push('/liked')
        },
        //Comments
        commentPost(post_id,posters_uid,post_name) {
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
            console.log('Post commetned!')
          })
          document.getElementById('comment'+post_id).value = ""
          router.push('/')
        },
        
        fetchComments(post_id){
        //if (document.getElementById('comments'+post_id).innerHTML !=""){
        //  document.getElementById('comments'+post_id).innerHTML=""
        //}
        //else{
        //  console.log('Comment section empty!')
        //}
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
               //console.log(Post)
               //console.log(doc.data())
             }
          })
          console.log(post_id)

          document.getElementById('comments'+post_id).style.display = "block";
        });
      },
      closeComments(post_id) {
        document.getElementById('comments'+post_id).style.display = "none";
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
        console.log(place)
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
      this.fetchData()
    }
  }
</script>