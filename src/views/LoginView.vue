<template>



    <div class="login container py-5 h-100 border border-primary p-5" style="margin-top:200px;background-color:#a9c2f7;border-radius:15px;">
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