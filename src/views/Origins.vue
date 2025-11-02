<template>
    <!-- <div class="origins">
        <h1 style="text-align: center;">起源</h1>
        <p>AAAA</p>
    </div> -->
    <Navigation :is-open="isOpen" :is-animating="isAnimating" @menu-toggle="handleMenuToggle"></Navigation>
    <MenuOverlay :is-open="isOpen" :is-animating="isAnimating"></MenuOverlay>
    <div class="container" style="background-color: tomato; width: 100vw; height: 100vh;"></div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';
import MenuOverlay from '@/components/MenuOverlay.vue';
import { onMounted, ref } from 'vue';

const isOpen = ref(false);
const isAnimating = ref(false);

function handleMenuToggle(){
    if(isAnimating.value)return;

    isAnimating.value = true;
    isOpen.value = !isOpen.value;

    setTimeout(() => {
        isAnimating.value = false;
    }, 1250);
}

</script>

<style scoped>

</style>