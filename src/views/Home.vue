<template>
    <div>
        <!-- Début Carousel -->
        <carousel>
            <carousel-slide class="carousel">
            <div class="inner">
                <img class="card-img-top" src="./../assets/Snapchat-163.jpg">
            </div>
            </carousel-slide>
            <carousel-slide class="carousel">
            <div class="inner">
                <img src="./../assets/Snapchat-164.jpg">
            </div>
            </carousel-slide>
            <carousel-slide class="carousel">
            <div class="inner">
                <img src="./../assets/Snapchat-165.png">
            </div>
            </carousel-slide>
            <carousel-slide class="carousel">
            <div class="inner">
                <img src="./../assets/Snapchat-166.png">
            </div>
            </carousel-slide>
            <carousel-slide class="carousel">
            <div class="inner">
                <img src="./../assets/Snapchat-167.png">
            </div>
            </carousel-slide>
        </carousel>
        <!-- Fin Carousel -->

        <img class="maxTraining" src="./../assets/Snapchat-142.jpg">
        <br />
        <br />

        <!-- Début présentation coachs -->
        <h2><span>LES COACHS</span></h2>
        <div class="profilCoach">
            <div class="row justify-content-center">

                <div class="col-md-4 col-lg-3 col-xl-1 mx-auto mt-3">
                <div class="card shadow" id="maxime">
                    <div class="inner">
                    <img class="card-img-top" src="./../assets/maximeprofil.jpg" alt="">
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
                    <img class="card-img-top" src="./../assets/tonyProfil.jpg" alt="">
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
    <!-- Fin présentation coachs -->
    </div>
</template>

<script>
import Carousel from "./../components/Carousel"
import CarouselSlide from "./../components/CarouselSlide"

export default {
  components: { Carousel, CarouselSlide, },
  name: 'app',
  data: function () {
        return {
            home: 0
        }
    },
    methods: { }
}
</script>

<style src="./../css/style.css" lang="scss"></style>