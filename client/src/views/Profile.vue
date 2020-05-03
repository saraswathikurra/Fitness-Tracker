<template>
  <div>
    <section class="section">
      <div class="box">

        <header class="title has-text-centered is-info">
            Edit the profile
        </header>

        <form @submit.prevent="editprofile" autocomplete="off" v-for="profile in profiles" :key="profile.id">
            <div class="field">
                <label class="label"> First Name </label>
                <div class="control">
                    <input class="input" type="text" v-model="profile.firstname" placeholder="Enter the first name" autocomplete="off">
                </div>
            </div>
            <div class="field">
                <label class="label"> Last Name </label>
                <div class="control">
                    <input class="input" type="text" v-model="profile.lastname" placeholder="Enter the last name" autocomplete="off">
                </div>
            </div>
            <div class="field">
                <label class="label"> Email </label>
                <div class="control">
                    <input class="input" type="email" v-model="profile.email" placeholder="Enter the email" autocomplete="off">
                </div>
            </div>
            <div class="field">
                <label class="label"> Phone Number </label>
                <div class="control">
                    <input class="input" type="number" maxlength="10" minlength="10" v-model="profile.phoneNumber" placeholder="Enter the phone number" autocomplete="off">
                </div>
            </div>
            <div class="field">
                <label class="label"> Country </label>
                <div class="control">
                    <input class="input" type="text" v-model="profile.country" placeholder="Enter the country" autocomplete="off">
                </div>
            </div>
            <div class="field">
                <label class="label"> Password </label>
                <div class="control">
                    <input class="input" :type="passwordFieldType" v-model="profile.password" placeholder="Enter the password" autocomplete="off">
                    <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password" @click="switchVisibility"></span>
                </div>
            </div>
            <div class="control">
                <button type="submit" class="button is-info"> Submit </button>
            </div>
        </form>
      </div>
    </section>

  </div>
</template>

<script>
import axios from "axios";
    export default {
    data() {
        return {
            profiles: [],
            firstname: "",
            lastname: "",
            email: "",
            phoneNumber: "",
            country: "",
            password: "",
            passwordFieldType: "password"
        }
    },

    created(){
        this.getprofile();
    },

    methods:{

        //... password show & hidden
        switchVisibility(){
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
        },

        getprofile(){
            axios.get(`${this.url}user/getinfo`)
            .then(res => {
                console.log(res.data);
                this.profiles = res.data;
            })
        },

        editprofile(){
            const profile = {
                firstname: this.profiles[0].firstname,
                lastname : this.profiles[0].lastname,
                email : this.profiles[0].email,
                phoneNumber : this.profiles[0].phoneNumber,
                country : this.profiles[0].country,
                password : this.profiles[0].password,
            }
            axios.post(`${this.url}user/editprofile`,
            {
                profile:profile
            })
            
            .then(res => {
                console.log(res.data);
                this.profiles = res.data;
                this.getprofile();
            })
        },
    },

    props: {
        url: {
            type: String,
            default: "http://localhost:3000/"
        }
    },
}
</script>
<style scoped>
    .control{
        text-align: right;
    }
    .field-icon {
        float: right;
        margin-right: 12px;
        margin-top: -27px;
        position: relative;
        z-index: 2;
    }
    .field-icon:hover{
        cursor: pointer;
    }
</style>
