<template>
  <div class="headerBoutique">
    <nav class="boutique">
      <div class="nav-container">
        <div id="logo">
          <router-link to="/boutique">
            <img src="./../assets/logoMTraining.png" alt="logo" />
          </router-link>
        </div>

        <ul id="icons">
          <li>
            <router-link to="/boutique/boutiqueParametre">
              <i class="fas fa-user"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/boutique/BoutiqueListe">
              <i class="fas fa-heart"></i>
              <span id="nav-not"></span>
            </router-link>
          </li>
          <li>
            <router-link to="/boutique/boutiqueShopping">
              <i class="fas fa-shopping-cart"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <br />
  </div>
</template>


<script src="https://cdn.jsdelivr.net/npm/vue/dist.vue.js"></script>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-cookies@1.7.4/vue-cookies.js"></script>
<script type="text/javascript" src="./../js/boutique.js"></script>


<style src="./../css/boutique.css" rel="stylesheet"></style>