<template>
  <div id="app">

    <!-- NavBar Bootstrap --> 
    <div class="navbarwrap fixed-top bg-primary py-2">
      <div class="container">

        <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="index.html"><i class="fas fa-dumbbell"></i>
          <span class="font-weight-bold">M.Training</span>.free.fr</a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
          aria-expanded="false" aria-label="Toggle navigation">
          <div class="navbar-toggler-icon"></div>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                  <a class="nav-link" href="#">Nous contacter<span class="sr-only">(current)
                  </span></a>
              </li>

              <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
                role="button" data-bs-toggle="dropdown" aria-expanded="false"
                data-toggle="collapse">Les cours</a>

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Remise en forme</a>
                    <a class="dropdown-item" href="#">Musculation</a>
                    <a class="dropdown-item" href="#">Réduire les douleurs de dos</a>
                    <a class="dropdown-item" href="#">Abdo / fessier</a>
                </div>
              </li>

              <li class="nav-item active">
                  <a class="nav-link" href="#">Les disponibilités</a>
              </li>

              <li class="nav-item">
                  <a class="nav-link" href="#">Les tarifs</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <br />
    <!-- Fin NavBar Bootstrap -->

    <!-- Début Carousel -->
    <div>
      <carousel>
        <carousel-slide class="carousel">
          <div class="inner">
            <img class="card-img-top" src="./assets/Snapchat-163.jpg">
          </div>
        </carousel-slide>
        <carousel-slide class="carousel">
          <div class="inner">
            <img src="./assets/Snapchat-164.jpg">
          </div>
        </carousel-slide>
        <carousel-slide class="carousel">
          <div class="inner">
            <img src="./assets/Snapchat-165.png">
          </div>
        </carousel-slide>
        <carousel-slide class="carousel">
          <div class="inner">
            <img src="./assets/Snapchat-166.png">
          </div>
        </carousel-slide>
        <carousel-slide class="carousel">
          <div class="inner">
            <img src="./assets/Snapchat-167.png">
          </div>
        </carousel-slide>
      </carousel>
    </div>
    <!-- Fin Carousel -->

    <img class="maxTraining" src="./assets/Snapchat-142.jpg">
    <br />
    <br />

    <!-- Début présentation coatchs -->
    <h2><span>LES COACHS</span></h2>
    <div class="profilCoach">
      <div class="row justify-content-center">

        <div class="col-md-4 col-lg-3 col-xl-1 mx-auto mt-3">
          <div class="card shadow" id="maxime">
            <div class="inner">
              <img class="card-img-top" src="./assets/maximeprofil.jpg" alt="">
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">Maxime Thiel</h5>
              <p class="card-text">
                Créateur du programme et coach personnel à votre service, Maxime est
                un adolescent plein d'idées et de courage. Il saura vous conseiller,
                vous faire progresser dans vos objectifs et ceci de façon visible 
                et mesurable au fur et à mesure des séances.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <div class="card shadow" id="tony">
            <div class="inner">
              <img class="card-img-top" src="./assets/tonyProfil.jpg" alt="">
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">Tony Steinmetz</h5>
              <p class="card-text">
                Ayant rejoint comme coach le programme de coaching 
                personnel peu après sa création, Tony est comme le créateur 
                un footballeur de renom. Il connaît parfaitement le corps humain 
                ainsi que son métabolisme et saura cibler vos besoins.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- Fin présentation coatchs -->

<!--
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>

    <counter></counter>
    
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
-->

    <!-- Footer Bootstrap -->
    <footer class="bg-dark text-white pt-3 pb-2">

      <div class="container text-center text-md-left">

        <div class="row text-center text-md-left">

          <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">M.Training</h5>
            <p>Alors, tu attends quoi ? Rejoins l'équipe MTraining !<br /><br />
            Bilan gratuit réalisé par des professionnels du domaine du sport<br />
            <i class="fas fa-dumbbell mr-3"></i><i class="fas fa-futbol mr-3"></i>
            <i class="fab fa-spotify mr-3"></i></p>
          </div>

          <div class="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Plan du site</h5>
            <p>
              <a href="index.html" class="text-white" style="text-decoration: none;">Acceuil</a>
            </p>
            <p>
              <a href="#" class="text-white" style="text-decoration: none;">Nous contacter</a>
            </p>
            <p>
              <a href="#" class="text-white" style="text-decoration: none;">Les cours</a>
            </p>
            <p>
              <a href="#" class="text-white" style="text-decoration: none;">Les disponibilités</a>
            </p>
            <p>
              <a href="#" class="text-white" style="text-decoration: none;">Les tarifs</a>
            </p>
          </div>

          <div class="col-md-5 col-lg-4 col-xl-3 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p>
              <i class="fas fa-home mr-3"></i>Région Mouscron, Belgique
            </p>
            <p>
              <i class="fas fa-envelope mr-3"></i>mtraining17@gmail.com
            </p>
            <p>
              <i class="fas fa-phone mr-3"></i>+32 4 96 13 49 53
            </p>
            <p>
              <i class="fas fa-car mr-3"></i>Déplacement à domicile <i class="fas fa-check"></i>
            </p>
          </div>

        </div>

          <hr class="mb-4">
            <div class="row align-items-center">
              
              <div class="col-md-7 col-lg-8">
                <p>Copyright ©2021 Tout droits réservés par:
                  <a href="#" style="text-decoration: none;">
                    <strong class="text-warning"> M.Training</strong>
                  </a>
                </p>
              </div>
            
              <div class="col-mb-5 clo-lg-4">
                <div class="text-center text-md-right">

                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="https://www.facebook.com/MTraining-104021931772817" class="btn-floating btn-sm text-white" 
                      style="font-size: 23px;" target="_blank"><i class="fab fa-facebook"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="https://instagram.com/_mtraining?igshid=1l0zb1ibbuij" class="btn-floating btn-sm text-white" 
                      style="font-size: 23px;" target="_blank"><i class="fab fa-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
                    
            </div>
          
      </div>
    </footer>
    <!-- Fin Footer Bootstrap -->


  </div>
</template>


<script>
import Counter from "./Counter"
import Carousel from "./carousel/Carousel"
import CarouselSlide from "./carousel/CarouselSlide"

export default {
  components: { Counter, Carousel, CarouselSlide },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style src="./css/style.css" lang="scss"></style>