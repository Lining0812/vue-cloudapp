<template>
    <div class="intro"></div>
    <div class="container">
        <div class="panels">
            <div class="panel" style="background-color: green">1</div>
            <div class="panel" style="background-color: blue">2</div>
            <div class="panel" style="background-color: red">3</div>
        </div>
    </div>
    <div class="outro"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    let panels = gsap.utils.toArray('.panel');

    gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.container',
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1)
        }
    })
})
</script>

<style scoped>
.intro {
    width: 100%;
    height: 100vh;
    background-color: tomato;
}

.container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.panels {
    width: 300%;
    height: 100%;
    display: flex;
}

.panel {
    width: 100%;
    height: 100%;
}

.outro {
    width: 100%;
    height: 100vh;
    background-color: black;
}
</style>