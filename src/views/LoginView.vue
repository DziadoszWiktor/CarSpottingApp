<template>
    <div class="login">
        <section class="forms">
            <form class="login" @submit.prevent="login">
                <h2>Login</h2>
                <input type="email" placeholder="Email" v-model="login_form.email"/><br/>
                <input type="password" placeholder="Password" v-model="login_form.password"/><br/>
                <input type="submit" value="Login"/><br/><br/>
            </form>
        </section>
        <button @click="$router.push('welcome')">Go back</button><br>
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