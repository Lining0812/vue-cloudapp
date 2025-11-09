<template>
    <!-- <h1>404 Not Found</h1> -->
     <div class="intro"></div>

     <div class="racesWrapper">
        <div class="races">
            <h2>Monaco</h2>
            <h2>Austria</h2>
            <h2>Hungary</h2>
            <h2>Netherlands</h2>
            <h2>China</h2>
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
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

onMounted(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const races = document.querySelector('.races');
    const racesWidth = races.offsetWidth;
    let amountToScroll = racesWidth - window.innerWidth;

    console.log(window.innerWidth);
    console.log(racesWidth);

    const tween = gsap.to(races,{
    x:-amountToScroll,
    duration:3,
    ease:'none',
 });

 ScrollTrigger.create({
    trigger:'.racesWrapper',
    start:'top 20%',
    end:'+=' + amountToScroll,
    pin:true,
    animation:tween,
    scrub:1,
    markers:true
 })
})

function getScrollAmount(){
    
}
</script>
