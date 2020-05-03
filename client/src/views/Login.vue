<template>
    <div id="login">
        <div class="login-card">

            <div class="card-title">
                <h1> WELCOME! </h1>
            </div>

            <div class="content">
                <form name="login" @submit.prevent="login">
                    <input id="email" type="email" v-model="user.email" placeholder="Email" required>
                    <input id="password" type="password" v-model="user.password" minlength="6" placeholder="Password" required>
                    <div class="level options">
                        <router-link class="btn btn-link level-right" to="/forgetpassword">Forgot Password? </router-link>
                    </div>
                    <button type="submit" class="button is-dark is-large is-fullwidth has-text-centered">Login</button><br>
                    <div class="has-text-centered">
                        <div class=".has-margin-top-5"> Don't have an account? </div>
                        <div> Click <router-link to="/register"> here </router-link> to register</div> 
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Login",
    props: {
        apiUrl: {
            type: String,
            default: "http://localhost:3000/"
        }
    },

    data(){
        return {
            user:{
                email: "",
                password: ""
            },
            error: '',
            isLogin: localStorage.getItem("isLogin")
        }
    },
    created() {
        if (this.isLogin === "true") {
            this.$router.push("/home");
        }
    },
    methods: {
        login(){
        axios.post(`${this.apiUrl}user/login`, this.user)
            .then(res => {
                if (res.statusText === "OK") {
                    localStorage.setItem("user", JSON.stringify(res.data));
                    localStorage.setItem("isLogin", "true");
                    this.$router.push("/index");
                    this.$router.go()
                } else {
                }
            })
            .catch(err => console.log(err));
        }
    }
}
</script>