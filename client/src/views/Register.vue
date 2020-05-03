<template>
    <div id="login">
        <div class="login-card">
            <div class="card-title">
                <h1> WELCOME! </h1>
            </div>
            <div class="content">
                <form @submit.prevent="signup">
                    <input id="text" type="text" v-model="firstname" placeholder="First Name" required>
                    <input id="text" type="text" v-model="lastname" placeholder="Last Name" required>
                    <input id="email" type="email" v-model="email" placeholder="Email" required>
                    <input id="phoneNumber" type="number" v-model="phoneNumber" placeholder="Phone Number" required>
                    <input id="country" type="text" v-model="country" placeholder="Country" required>
                    <input id="password" type="password" v-model="password" minlength="6" placeholder="Password" required>
                    <input id="repassword" type="password" v-model="repassword" minlength="6" placeholder="Retype Your Password" required>
                     <button type="button" class="button is-dark is-large is-fullwidth has-text-centered"> Register </button><br>
                     <div class="has-text-centered">
                        <div class=".has-margin-top-5"> Have an account? </div>
                        <div> Click <router-link to="/login"> here </router-link> to login</div> 
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            firstname: '',
            lastname: '',
            email: '',
            phoneNumber: '',
            country: '',
            password: '',
            repassword: '',
        }
    },
    props: {
		url: {
			type: String,
			default: "http://localhost:3000/"
		}
	},
    methods: {
        signup(){
            const myinfo = {
                firstnam: this.firstname,
                lastname: this .lastname,
                email: this.email,
                phoneNumber: this.phoneNumber,
                country: this.country,
                password: this.password,                
            }
        }
    }
}
</script>

<style>

</style>