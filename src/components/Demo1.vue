<template>
    <div class="box"></div>
</template>

<script setup>
import { gsap } from "gsap"
import { onMounted, ref } from 'vue'

onMounted(()=>{
    gsap.to('.box',{duration:1,x:200})
})

</script>
<style>
.box{
    width: 200px;
    height: 200px;
    background-color: tomato;
}
</style>