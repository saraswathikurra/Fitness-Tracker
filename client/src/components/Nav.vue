<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <router-link to="/home" v-if="isLogin!='true'"> <img class="logo" src="../assets/img/logo02.png"> </router-link>
      <router-link to="/index" v-if="isLogin=='true'"> <img class="logo" src="../assets/img/logo02.png"> </router-link>
    </a>

    <a :class="{ 'is-active':isOpen }" @click="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active':isOpen }" class="navbar-menu">
    <div class="navbar-start">
      <a v-for="navLeftItem in navLeftItems" class="navbar-item" v-if="isLogin!='true'" v-bind:href="navLeftItem.route" :key="navLeftItem.id">
        {{ navLeftItem.item }}
      </a>
      <a v-for="navMainItem in navMainItems" class="navbar-item" v-if="isLogin=='true'" v-bind:href="navMainItem.route" :key="navMainItem.id">
        {{ navMainItem.item }}
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link class="button is-dark is-fullwidth has-text-centered" v-if="isLogin!='true'" to="/login">
              Log in
          </router-link>
          <a class="button is-dark is-fullwidth has-text-centered" @click="logout" v-if="isLogin=='true'">
              Log out
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Nav',

  data() {
    // isOpen: false,
    return {
        isLogin: localStorage.getItem("isLogin"),
        active: false,
        isOpen: false,
        navLeftItems: [{
            "item": "Home",
            "route": "/home"
          },
          {
            "item": "About Us",
            "route": "/aboutus"
          },
          {
            "item": "Activities",
            "route": "/activities"
          },
          {
            "item": "Contact",
            "route": "/contact"
          }],  
        navMainItems: [{
          "item": "Index",
          "route": "/index"
        },
        {
          "item": "Exercise",
          "route": "/exercise"
        },
        {
          "item": "Diet",
          "route": "/diet"
        },
        {
          "item": "My Profile",
          "route": "/profile"
        }
      ],
    }
  },
  methods: {
      logout(event) {
        localStorage.clear();
        this.isLogin = false;
        this.$router.push("/login");
      },  
  } 
}
</script>

<style>
  .is-current {
    font-weight: bold;
    color: blueviolet
  }
  .logo{
    width: 100px;
    height: 50px;
    max-height: none!important;
  }
</style>