<template>
<!-- <UploadFile></UploadFile> -->

<div class="fullscreen">
    <button id="opennav" @click="isNavOpen=true">Click Me</button>
</div>
<Menu v-model:isActive="isNavOpen"></Menu>

</template>

<script setup>
// import UploadFile from '@/components/UploadFile.vue';
import Menu from '@/components/Menu.vue';
import { ref } from 'vue';

const isNavOpen = ref(false);

</script>

<style>
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