<template>
  <div class="profile">
    <h1>Profile page</h1>
    <h2 id="txtName"></h2>
    <div v-for="(post, index) in posts" :key="index">
      <h1>---------------</h1>
      <h2>{{ post.post_name }} by: {{ post.username }}</h2>
      <h3>{{ post.description }}</h3>
      <h3 @click="initMap(post.location)">{{ post.location }}</h3>
    </div>
  </div>
</template>
<script>
import { auth } from '../firebase'
import { db } from '../firebase'

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
               //console.log(Post)
               //console.log(doc.data())
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