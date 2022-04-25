<template>
  <div class="liked">
    <h1>Liked posts page</h1>
    <h2 id="txtName"></h2>
    <div v-for="(post, index) in liked" :key="index">
      <h1>---------------</h1>
      <h2>{{ post.username }}</h2>
      <h3>{{ post.description}}</h3>
      <h3>{{ post.location}}</h3>
      <button @click="deleteData(post.id)" post.type="button">Dislike</button>
    </div>
  </div>
</template>
<script>
import { auth } from '../firebase'
import { db } from '../firebase'
import router from '../router'

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
                  username: doc.data().username,
                  description: doc.data().description,
                  location: doc.data().location,
                }
                this.liked.push(Post)
                //console.log(Post)
                //console.log(doc.data())
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
                console.log("Post Disliked!");
                router.push('/liked')

              })
            }
          })
        })
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