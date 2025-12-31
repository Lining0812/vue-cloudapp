<template>
    <!-- <h1>404 Not Found</h1> -->
    <div class="intro"></div>

    <div ref="racesWrapper" class="racesWrapper">
        <div ref="races" class="races">
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
.intro {
    width: 100%;
    height: 50vh;
    background-color: gray;
}

.racesWrapper {
    overflow: hidden;
}

.races {
    width: fit-content;
    display: flex;
    flex-direction: row;
    /* gap: 10rem; */
    font-size: 80px;
    font-weight: 800;
    color: tomato;
}

.outro {
    width: 100%;
    height: 100vh;
    background-color: gray;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const races = ref(null);

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const elements = races.value.querySelectorAll('h2');
    const elements = gsap.utils.toArray('h2', races.value);

    const tween = gsap.fromTo(races.value, {
        x: () => window.innerWidth,
    },
        {
            x: getScrollAmount(),
            duration: 3,
            ease: 'none',
        });

    ScrollTrigger.create({
        trigger: '.racesWrapper',
        start: 'top 20%',
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: true,
        animation: tween,
        scrub: 1,
        markers: true
    })

    elements.forEach(element => {
        ScrollTrigger.create({
            trigger: element,
            start: 'left center',
            animation: gsap.to(element, { scale: 0.5, opacity: 0.5 }),
            containerAnimation: tween,
            scrub: true,
            markers: true
        });
    });
});

function getScrollAmount() {
    return -(races.value.offsetWidth - window.innerWidth / 2);
}
</script>
