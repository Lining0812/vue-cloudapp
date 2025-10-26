<template>

<div class="fullscreen">
    <button id="opennav" @click="isNavopen=true">Click Me</button>
</div>
<Menu v-model="isNavopen"></Menu>

</template>

<script setup>
import Menu from '@/components/Menu.vue';
import { ref } from 'vue';

const isNavopen = ref(false);

</script>

<style scoped>
.fullscreen{
    margin-top: -100px;
    width: 100%;
    height: 100vh;
    background-color: aquamarine;
}

button{
    margin-top: 500px;
}
</style>