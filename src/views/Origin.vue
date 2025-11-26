<template>
    <!-- <div class="origins">
        <h1 style="text-align: center;">起源</h1>
        <p>AAAA</p>
    </div> -->
    <div class="container">
        <div class="wrapper">
            <div class="box">1</div>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(()=>{

    gsap.fromTo('.wrapper', { 
        rotation: 45,
        transformOrigin: "bottom",
        duration: 3 
    },{
        rotation: -45,
        transformOrigin: "bottom",
        duration: 3 
    })
})

</script>

<style scoped>
.container {
    background-color: tomato;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrapper{
    background-color: blue;
    width: 200px;
    height: 500px;
}

.box {
    width: 200px;
    height: 200px;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 48px;
}
</style>