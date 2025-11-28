<template>
    <!-- <div class="origins">
        <h1 style="text-align: center;">起源</h1>
        <p>AAAA</p>
    </div> -->
    <div class="panel" style="background-color: aquamarine;" ref="p1">
        <h1>One</h1>
    </div>
    <div class="panel" style="background-color: blueviolet;" ref="p2">
        <h1>Two</h1>
    </div>
    <div class="panel" style="background-color: brown;" ref="p3">
        <h1>Three</h1>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';

const p1 = ref(null);
const p2 = ref(null);
const p3 = ref(null);

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
        trigger: p1.value,
        start: 'top top',
        markers: true,
        pin: true,
        pinSpacing: false,
        onEnter:()=>console.log("start1")
    });
    ScrollTrigger.create({
        trigger: p2.value,
        start: 'top top',
        markers: true,
        pin: true,
        pinSpacing: false,
        onEnter:()=>console.log("start2")
    });
    ScrollTrigger.create({
        trigger: p3.value,
        start: 'top top',
        markers: true,
        pin: true,
        pinSpacing: false,
        onEnter:()=>console.log("start3")
    });
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

.panel {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5bcff;
    color: black;
}
</style>