<template>
    <!-- <h1>404 Not Found</h1> -->
     <div class="intro"></div>

     <div ref="racesWrapper" class="racesWrapper">
        <div ref="races" class="races">
            <div><h2>Monaco</h2></div>
            <div><h2>Austria</h2></div>
            <div ref="hungray" class="hungray"><h2>Hungary</h2></div>
            <div><h2>Netherlands</h2></div>
            <div><h2>China</h2></div>
        </div>
     </div>

     <div class="outro"></div>
</template>

<style scoped>
.intro{
    width: 100%;
    height: 50vh;
    background-color: gray;
}

.racesWrapper{
    overflow: hidden;
}

.races{
    width: fit-content;
    display: flex;
    flex-direction: row;
    gap: 10rem;
    font-size: 80px;
    font-weight: 800;
    color: tomato;
}

.outro{
    width: 100%;
    height: 100vh;
    background-color: gray;
}
</style>

<script setup>
import { ref,onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const races = ref(null);
const hungray = ref(null);

onMounted(()=>{
    gsap.registerPlugin(ScrollTrigger);

    console.log(races);

    const tween = gsap.to(races.value,{
    x:getScrollAmount(),
    duration:3,
    ease:'none',
 });

 ScrollTrigger.create({
    trigger:'.racesWrapper',
    start:'top 20%',
    end:()=>`+=${Math.abs(getScrollAmount())}`,
    pin:true,
    animation:tween,
    scrub:1,
    markers:true
 })

 ScrollTrigger.create({
    trigger:'.hungray',
    start:'left center',
    animation:gsap.to('.hungray h2',{scale:0.5, opacity:0.5}),
    containerAnimation:tween,
    scrub:true,
    markers:true
 })
})

function getScrollAmount(){
    return -(races.value.offsetWidth - window.innerWidth);
}
</script>
