<template>
    <div class="register">
        <section class="forms">
            <form class="register" @submit.prevent="register">
                <h2>Register</h2>
                <input type="email" placeholder="Email" v-model="register_form.email"/><br/>
                <input type="password" placeholder="Password" v-model="register_form.password"/><br/>
                <input type="submit" value="Register"/><br/><br/>
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
        const register_form = ref({});
        const store = useStore();
        const register = () => {
            store.dispatch('register', register_form.value);
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