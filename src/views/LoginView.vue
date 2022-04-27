<template>

<!--
<section class="vh-100" style="margin-top:;">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13">Email address</label>
          </div>
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example23">Password</label>
          </div>
          <button type="submit" class="btn btn-dark btn-lg btn-block" style="background-color:#000000">Log in</button>
        </form>
      </div>
    </div>
  </div>
</section>  

-->

    <div class="container py-5 h-100 border border-primary p-5" style="margin-top:200px;background-color:#a9c2f7;border-radius:15px;">
        <div class="login">
            <section class="forms">
                <form class="login" @submit.prevent="login">
                    <h2><b>Login</b></h2>
                    <input style="height:50px;width:60%; margin:10px;border-radius:5px;padding:5px;" type="email" placeholder="E-mail" v-model="login_form.email"/><br/>
                    <input style="height:50px;width:60%; margin:10px;border-radius:5px;padding:5px;" type="password" placeholder="Password" v-model="login_form.password"/><br/>
                    <input class="btn" style="background-color:#7EA3F1;color:black;height:50px;width:150px;" type="submit" value="Login"/><br/><br/>
                </form>
            </section>
            <button class="btn" style="background-color:#7EA3F1;color:black;height:50px;width:150px;" @click="$router.push('welcome')">Go back</button><br>
        </div>
    </div>

    <!--

        
<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
         
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13">Email address</label>
          </div>

          
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
           
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!" style="color:rgb(0, 0, 0)">Forgot password?</a>
          </div>

         
          <button type="submit" class="btn btn-dark btn-lg btn-block" style="background-color:#000000">Log in</button>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">or log in through...</p>
          </div>

          <a class="btn btn-dark btn-lg btn-block" style="background-color: #000000" href="#!"
            role="button">
            <i class="fab fa-facebook-f me-2"></i>Facebook
          </a>
          <br>
          <a class="btn btn-dark btn-lg btn-block" style="background-color: #000000" href="#!"
            role="button">
            <i class="fab fa-twitter me-2"></i>Twitter</a>

        </form>
      </div>
    </div>
  </div>
</section>  


    -->

</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    setup () {
        const login_form = ref({});
        const store = useStore();

        const login = () => {
            store.dispatch('login', login_form.value);
        }

        return {
            login_form,
            login
        }
    }

}
</script>
<style>
</style>