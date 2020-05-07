<template>
  <div>
    <section class="section">
      <div class="box">

        <header class="title has-text-centered is-info">
            Edit the profile
        </header>

        <form @submit.prevent="editprofile" autocomplete="off">
            <div class="field">
                <label class="label"> First Name </label>
                <div class="control">
                    <input class="input" type="text" v-model="firstname" placeholder="Enter the first name" autocomplete="off">
                </div>
            </div>
            <div class="field">
                <label class="label"> Last Name </label>
                <div class="control">
                    <input class="input" type="text" v-model="lastname" placeholder="Enter the last name" autocomplete="off">
                </div>
            </div>
            <div class="field">
                <label class="label"> Email </label>
                <div class="control">
                    <input class="input" type="email" v-model="email" placeholder="Enter the email" autocomplete="off">
                </div>
            </div>
            <div class="field">
                <label class="label"> Phone Number </label>
                <div class="control">
                    <input class="input" type="number" maxlength="10" minlength="10" v-model="phoneNumber" placeholder="Enter the phone number" autocomplete="off">
                </div>
            </div>
            <div class="field">
                <label class="label"> Country </label>
                <div class="control">
                    <input class="input" type="text" v-model="country" placeholder="Enter the country" autocomplete="off">
                </div>
            </div>
            <div class="field">
                <label class="label"> Password </label>
                <div class="control">
                    <input class="input" :type="passwordFieldType" v-model="password" placeholder="Enter the password" autocomplete="off">
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
                this.profiles = res.data;
                this.firstname = res.data.firstname;
                this.lastname = res.data.lastname;
                this.email = res.data.email;
                this.phoneNumber = res.data.phoneNumber;
                this.country = res.data.country;
                this.password = res.data.password;
            })
        },

        editprofile(){ 
            const profile = {
                firstname: this.firstname,
                lastname : this.lastname,
                email : this.email,
                phoneNumber : this.phoneNumber,
                country : this.country,
                password : this.password,
            }
            axios.post(`${this.url}user/editprofile`,
            {
                profile:profile
            })
            .then(res => {
                this.profiles = res.data;
                this.getprofile();
                alert ("The profile is updated successfully.")
                history.go(0);
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
