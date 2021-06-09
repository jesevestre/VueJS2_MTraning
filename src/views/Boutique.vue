<template>
    <div>
        <HeaderBoutique></HeaderBoutique>

    <div class="home-container">
        <h1 class="TitreGauche">Boutique</h1>

        <!-- Affichage recherche -->
        <input 
            v-model="searchKey" 
            type="search" 
            id="search" 
            placeholder="Rechercher..." 
            autocomplete="off"
        >

        <span v-if="searchKey && filteredList.length >= 1">
            {{ filteredList.length }} résultat<span v-if="filteredList.length >= 2">s</span>
        </span>

        <!-- Affichage carte icone -->
        <div class="card-cart-container">
            <div class="card-container">
                <div v-for="product in filteredList" v-bind:key="product.id" class="card">

                   <div class="img-container">
                        <img v-bind:src="product.img" alt="">
                    </div>

                    <div class="card-text">
                        <h3>{{ product.description }}</h3>
                        <span>{{ product.price }}€</span>
                    </div>

                    <div class="card-icons">
                        <div class="like-container">
                            <input 
                                type="checkbox" 
                                name="checkbox" 
                                v-bind:id="product.id" 
                                :value="product.id"
                                v-model="liked"
                                @click="setLikeCookie()"
                            />
                            <label v-bind:for="product.id">
                                <i class="fas fa-heart"></i>
                            </label>
                        </div>

                        <div class="add-to-cart">
                            <button v-on:click="addToCart(product)">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>

                    </div>
                </div>

                <div v-if="filteredList.length == []" class="no-result">
                    <h3>Désolé</h3>
                    <p>Aucun résultat trouvé</p>
                </div>
            </div>

            <!-- Affichage panier -->
            <transition name="cart-anim">
                <div v-if="cart.length > 0" class="shopping-cart" id="shopping-cart">
                    <h3 style="color: #333; font-weight: bold;">Panier</h3>

                    <transition-group name="item-anim" tag="div" class="item-group">
                        <div v-for="product, id in cart" v-bind:key="product.id" class="item">
                            
                            <div class="img-container">
                                <img v-bind:src="product.img" alt="">
                            </div>
                            <div class="item-description">
                                <h4 style="color: #333; font-size: 110%;">{{ product.description }}</h4>
                                <p style="color: #333;">{{ product.price }}€</p>
                            </div>
                            <div class="item-quantity">
                                <h6>Quantité : {{ product.quantity }}</h6>

                                <div class="cart-icons">
                                    <button v-on:click="cartPlusOne(product)">
                                        <i class="fa fa-plus"></i>
                                    </button>
                                    <button v-on:click="cartMinusOne(product, id)">
                                        <i class="fa fa-minus"></i>
                                    </button>
                                    <button @click="cartTrashOne(id)">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </transition-group>

                    <div class="grand-total">
                        <div class="total">
                            <h2>Total</h2>
                            <h2>{{ cartTotalAmount }}€</h2>
                        </div>
                        <h6>Total articles : {{ itemTotalAmount }}</h6>
                    </div>

                </div>
            </transition>

        </div>
        <br />
        <br />
    </div>

    </div>
</template>

<!--
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-cookies@1.7.4/vue-cookies.js"></script>-->

<script>
import HeaderBoutique from "./../header/headerBoutique"

// data boutique
const products = [
  { id: 1, description: "Quarz Luxe", price: 12, img: 'src/assets/boutique/quarz-luxe.JPG'},
  { id: 2, description: 'Curren Business', price: 20, img: 'src/assets/boutique/curren-business.JPG'},
  { id: 3, description: 'Curren Sport', price: 5, img: 'src/assets/boutique/curren-sport.JPG'},
  { id: 4, description: 'Jaragar Racing', price: 8, img: 'src/assets/boutique/jaragar-racing.JPG'},
  { id: 5, description: 'Liges Hommes', price: 3, img: 'src/assets/boutique/liges-hommes.JPG'},
  { id: 6, description: 'Maserati Mechanical', price: 65, img: 'src/assets/boutique/maserati-mechanical.JPG'},
  { id: 7, description: 'Montre Mecanique', price: 25, img: 'src/assets/boutique/montre-mecanique.JPG'},
  { id: 8, description: 'Brand Designer', price: 28, img: 'src/assets/boutique/brand-designer.JPG'},
  { id: 9, description: 'Relogio Masculino', price: 4, img: 'src/assets/boutique/relogio-masculino.JPG'},
  { id: 10, description: 'Tissot Multifunction', price: 29, img: 'src/assets/boutique/tissot-multifunction.JPG'},
  { id: 11, description: 'Hip Hop Gold', price: 87, img: 'src/assets/boutique/hiphop-gold.JPG'},
  { id: 12, description: 'Mesh Genova', price: 6, img: 'src/assets/boutique/mesh-genova.JPG'},
];

export default {
  components: { HeaderBoutique, },
  name: 'boutique',
    data: function () {
        return {
            boutique: 0,
            products,
            searchKey: "",
            liked: [],
            cart: [],
        }
    },
    computed: {
        filteredList(){
            return this.products.filter((product) => {
                return product.description.toLowerCase().includes(this.searchKey.toLowerCase());
            })
        },
        getLikeCookie(){
            let cookieValue = JSON.parse($cookies.get("like"));
            cookieValue == null ? this.liked = [] : this.liked = cookieValue;
        },
        cartTotalAmount(){
            let total = 0;
            for (let item in this.cart){
                total = total + (this.cart[item].quantity * this.cart[item].price); 
            }
            return total;
        },
        itemTotalAmount(){
            let itemTotal = 0;
            for (let item in this.cart){
                itemTotal = itemTotal + (this.cart[item].quantity);
            }
            return itemTotal;
        }
     },
     methods:{
         setLikeCookie(){
            document.addEventListener("input", () => {
                setTimeout(() => {
                    $cookies.set("like", JSON.stringify(this.liked));
                }, 300);
            })
         },
         addToCart(product){
             // Check if
             for (let i = 0; i < this.cart.length; i++){
                 if (this.cart[i].id === product.id){
                     return this.cart[i].quantity++;
                 }
             }
             this.cart.push({
                 id: product.id,
                 img: product.img,
                 description: product.description,
                 price: product.price,
                 quantity: 1,
             })
         },
         cartPlusOne(product){
             product.quantity = product.quantity + 1;
         },
         cartMinusOne(product, id){
             if (product.quantity == 1){
                 this.cartTrashOne(id);
             }else{
                 product.quantity = product.quantity - 1;
             }
         },
         cartTrashOne(id){
             this.$delete(this.cart, id);
         }
     },
     mounted: function () {
         this.getLikeCookie;
     }
}
</script>


<style src="./../css/boutique.css" rel="stylesheet"></style>