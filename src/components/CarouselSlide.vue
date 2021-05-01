<template>
    <transition :name="transition">
        <div v-show="visible">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    data (){
        return{
            index: 0
        }
    },
    computed: {
        transition(){
            if (this.$parent.direction) {
                return "slide-" + this.$parent.direction
            }
        },
        visible (){
            return this.index === this.$parent.index
        }
    }

}
</script>

<style src="./../css/style.css" lang="scss"></style>