<template>
  <div id="app">
    <MyNav></MyNav>
    <router-view/>
  </div>
</template>

<script>
import MyNav from "@/components/Nav.vue";

export default {
  components: {
    MyNav
  },
  mounted(){
    window.onunload = () => {
      // Clear the local storage
      window.MyStorage.clear()
    }
  }
}
</script>

<style lang="scss">
  @import '../src/assets/scss/fit.scss'
</style>
