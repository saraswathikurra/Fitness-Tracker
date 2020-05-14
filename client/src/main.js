import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import vSelect from "vue-select";
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css'

// Vue.component("v-select", vSelect);

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing); //... social share

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')