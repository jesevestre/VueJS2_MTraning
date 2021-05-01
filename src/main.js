import Vue from 'vue'
import App from './App.vue'
import './assets/custom.scss'
import VueRouter from "vue-router"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

import Home from "./views/Home"
import Cours from "./views/Cours"
import Tarifs from "./views/Tarifs"
import Contact from "./views/Contact"
import Disponibilite from "./views/Disponibilite"

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/cours', component: Cours },
    { path: '/tarifs', component: Tarifs, },
    { path: '/contact', component: Contact },
    { path: '/disponibilite', component: Disponibilite },
    { path: "*", redirect: '/', },
  ]
})
/*voir pour fermer la navbar quand on change de vue*/

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})


/* NavBar Bootstrap */
$(document).ready( $(function(){

  var navbtn = $(".navbar-toggler");
  var nav = $(".navbarwrap");

  $(navbtn).click(function(){
      $(navbtn).toggleClass("active");
  })

//Partie pour un en-tête avec l'effet dégradé
$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  if(scroll <= 82){
      nav.removeClass("nav-transparent py-0").addClass("nav-colored py-2");
  } else {
      nav.removeClass("nav-colored py-2").addClass("nav-transparent py-0");
  }
})
}))