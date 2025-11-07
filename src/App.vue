<template>
  <Navigation :is-open="isOpen" :is-animating="isAnimating" @menu-toggle="handleMenuToggle"></Navigation>
  <MenuOverlay :is-open="isOpen" :is-animating="isAnimating"></MenuOverlay>
  <router-view></router-view>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';
import MenuOverlay from '@/components/MenuOverlay.vue';
import { ref } from 'vue';
import router from './routers/index'

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

// 路由跳转后自动关闭菜单
router.afterEach(() => {
  if (isOpen.value) { 
    handleMenuToggle();
  }
});

</script>

<style scoped>

</style>