<template>
  <div class="welcome border border-primary p-5" style="margin-top:200px;background-color:#a9c2f7;margin-left:10%;margin-right:10%;border-radius:15px;">
    <h1 id="test-home"><b>Welcome to CarSpotting App</b></h1><br>
    <button class="btn" style="background-color:#7EA3F1;color:black;height:50px;width:150px;" @click="$router.push('login')">Log In</button><br><br>
    <button class="btn" style="background-color:#7EA3F1;color:black;height:50px;width:200px;" @click="googleLogin">Log In with Google</button><br><br>
    <p>or...</p>
    <button class="btn" style="background-color:#7EA3F1;color:black;height:50px;width:150px;" @click="$router.push('register')">Create Account</button><br><br>
  </div>
</template>
<script>
import { GoogleAuthProvider,FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import router from '../router';

export default {
    methods: {
    googleLogin(){
      window.console.log('google login');
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then(result => {
          window.console.log(result.user);
          router.push('/');
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    facebookLogin(){
      window.console.log('facebook login');
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider)
        .then(result => {
          window.console.log(result.user);
          router.push('/');
        })
        .catch(error => {
          window.console.log(error);
        });
    }
  }
}
</script>

<style>
li {
  background-color:#a9c2f7;
}
</style>
