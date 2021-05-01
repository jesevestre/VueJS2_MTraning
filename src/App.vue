<template>
  <div id="app">

    <!-- NavBar Bootstrap --> 
      <Header></Header>
    <!-- Fin NavBar Bootstrap -->
  

  <transition name="router-anim">
    <router-view></router-view>
  </transition>


    <!-- Footer Bootstrap -->
      <Footer></Footer>
    <!-- Fin Footer Bootstrap -->


  </div>
</template>


<script>
import Footer from "./header/Footer"
import Header from "./header/Header"

export default {
  components: { Footer, Header },
  name: 'app',
    data: function () {
        return {
            app: 0
        }
    },
    methods: { }
}
</script>


<style>
/*CSS pour les transitions entre les pages*/
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.page {
  position: fixed;
  width: inherit;
}

.router-anim-enter-active {
  animation: coming 2s;
  animation-delay: 0.8s;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 0.8s;
}

@keyframes going {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

</style>