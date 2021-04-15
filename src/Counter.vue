<template>
    <div class="counter">
        {{ count }}
        <div class="counter__button" @click="increment">+</div>
        <div class="counter__button" @click="decrement">-</div>
        <div class="counter__button" @click="raz">R.A.Z</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            count: 0
        }
    },
    methods: {
        increment () {
            this.count++
        },
        decrement () {
            this.count--
        },
        raz () {
            this.count=0
        }
    }
}
</script>

<style scoped>
.counter{
    font-weight: bold;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40px;
    height: 100px;
    background-color: #dfdfdf;
    margin-top: 30px;
    margin-bottom: 30px;
}

.counter__button{
    cursor: pointer;
}
</style>