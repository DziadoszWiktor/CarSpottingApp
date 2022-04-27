<template>
  <div class="comments mb-4">
    <h1 style="margin-top:120px">Posts comments page</h1>
    <h2 id="txtName" ></h2>
    <div v-for="(comment, index) in comments" :key="index">
      <div  class="border border-primary p-5" style="margin-top:20px;background-color:#a9c2f7;margin-left:10%;margin-right:10%;border-radius:15px;">
        <h2>{{ comment.username }} commented on {{ comment.post_name }}</h2>
        <h3>{{ comment.comment}}</h3>
      </div>
    </div>
  </div>
</template>
<script>
import { auth } from '../firebase'
import { db } from '../firebase'

  export default {
    name: "CommentsView",
    data:() => ({
      
      uid: "",
      post_id: "",
      username: "",
      comments:[]
    }),

    methods: {
      fetchComments(){
        db.collection("comments").get().then(docs => {
          docs.forEach(doc => {
            if (doc.data().posters_uid == auth.currentUser.uid) {
            const Comment = {
              id: doc.id,
              post_name: doc.data().post_name,
              username: doc.data().username,
              comment: doc.data().comment,
            }
               this.comments.push(Comment)
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
        output.innerHTML= "Welcome " + username + ", here are all the commetns you've received!";
      }
      this.fetchComments()
    }
}
</script>