<template>
  <div class="welcome">
    <h1 id="test-home">Welocme to CarSpotting App</h1><br>
    <button @click="$router.push('login')">Log In</button><br><br>
    <button @click="$router.push('register')">Create Account</button><br><br>

    <button @click="googleLogin">Google</button>
    <button @click="facebookLogin">Facebook</button>
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

