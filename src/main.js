import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/custom.scss'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  el: '#app',
  render: h => h(App)
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