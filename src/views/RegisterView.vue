<template>
    <div class="register container py-5 h-100 border border-primary p-5" style="margin-top:200px;background-color:#a9c2f7;border-radius:15px;">
        <div class="register">
            <section class="forms">
                <form class="register" @submit.prevent="register">
                    <h2>Register</h2>
                    <input style="height:50px;width:60%; margin:10px;border-radius:5px;padding:5px;" type="email" placeholder="Email" v-model="register_form.email"/><br/>
                    <input id="password" style="height:50px;width:60%; margin:10px;border-radius:5px;padding:5px;" type="password" placeholder="Password" /><br/>
                    <input id="password_repeat" style="height:50px;width:60%; margin:10px;border-radius:5px;padding:5px;" type="password" placeholder="Repeat password" v-model="register_form.password"/><br/>
                    <input type="submit" class="btn" style="background-color:#7EA3F1;color:black;height:50px;width:150px;margin:10px" value="Register"/><br/>
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
        const register_form = ref({});
        const store = useStore();
        const register = () => {
            const pass1=document.getElementById("password").value;
            const pass2=register_form.value.password;
            if(pass1!=pass2){
                alert("Passwords do not match");
                return;
            }else{
            store.dispatch('register', register_form.value);
            }
        }

        return {
            register_form,
            register
        }
    }

}
</script>
<style>
</style>