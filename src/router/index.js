import Vue from "vue";
import VueRouter from "vue-router";
import Navbar from "../components/Navbar.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Footer from "../components/Footer.vue";
import Portada from "../components/Portada.vue";


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { LayoutPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(LayoutPlugin)
Vue.use(BootstrapVue)
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/navbar",
    name: "Navbar",
    component: Navbar
  },
  {
    path: "/footer",
    name: "Footer",
    component: Footer
  },
  {
    path: "/portada",
    name: "Portada",
    component: Portada
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
