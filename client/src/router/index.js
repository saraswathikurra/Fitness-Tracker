import Vue from 'vue'
import VueRouter from 'vue-router'

/* frontend components */
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Activities from '../views/Activities.vue';

/* backend components */
import Index from '../views/Index.vue';
import { CurrentUser } from '../models/Users';
import Exercise from '../views/Exercise.vue';
import Diet from '../views/Diet.vue';
import Profile from '../views/Profile.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Index', component: Home },
    { path: '/home', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/aboutus', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/activities', name: 'Activities', component: Activities },
    { path: '/index', name: 'Index', component: Index },
    { path: '/diet', name: 'Diet', component: Diet },
    { path: '/exercise', name: 'Exercise', component: Exercise },
    { path: '/profile', name: 'Profile', component: Profile }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.isSecret && !CurrentUser) next('/login');
    else next();
});


export default router