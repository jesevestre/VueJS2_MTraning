<template>
    <div>
        <HeaderBoutique></HeaderBoutique>

    <h1 class="TitreGauche">Shopping</h1>

    </div>
</template>



<script>
import HeaderBoutique from "./../header/headerBoutique"

export default {
  components: { HeaderBoutique, },
  name: 'app',
    data: function () {
        return {
            list: 0
        }
    },
    methods: { }
}
</script>



<style src="./../css/boutique.css" rel="stylesheet"></style>