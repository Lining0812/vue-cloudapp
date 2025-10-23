<template>
    <div class="box2"></div>
</template>

<script setup>
import { gsap } from "gsap"
import { onMounted, ref } from 'vue'

onMounted(()=>{
    gsap.to('.box2',{duration:1,x:200})
})

</script>
<style>
.box2{
    width: 200px;
    height: 200px;
    background-color: blueviolet;
}
</style>