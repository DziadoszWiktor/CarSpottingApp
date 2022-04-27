<template>
  <div id='nav' v-if="$store.state.user">
    <nav class="navbar navbar-expand-lg fixed-top navbar-light" style="background-color: #7EA3F1;">
      <router-link class="navbar-brand" to="/"><img src="img/header-transparent2-small.png" class="d-inline-block align-top" alt=""></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" >
          <router-link class="nav-item nav-link" to="/">Home</router-link>
          <router-link class="nav-item nav-link" to="/liked">Liked Posts</router-link>
          <router-link class="nav-item nav-link" to="/comments">Comments</router-link>
          <router-link class="nav-item nav-link" to="/profile">Profile Page</router-link>
          <router-link class="nav-item nav-link" to="/camera">Camera</router-link>
          <button class="btn btn-primary" style ="margin-left:10px"  @click="$store.dispatch('logout')">Logout</button>
        </div>
      </div>
    </nav>
  </div>

  <!-- 

<div id='nav' v-if="$store.state.user">
    <router-link to="/">Home</router-link> |
    <router-link to="/liked">Liked Posts</router-link> |
    <router-link to="/comments">Comments</router-link> |
    <router-link to="/profile">Profile Page</router-link> |
    <router-link to="/camera">Camera</router-link> |
    <button style ="margin-left:10px"  @click="$store.dispatch('logout')">Logout</button>
  </div>

  -->
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default {
   setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })

}

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
