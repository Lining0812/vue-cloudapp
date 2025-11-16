<template>
    <div class="intro"></div>
    <div class="container">
        <div class="text">
            Break apart HTML text into characters, words, and/or lines for easy animation.
        </div>
    </div>
    <div class="outro"></div>
</template>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

import { onMounted, onUnmounted, ref } from 'vue';

const split = ref(null);
const splitTrigger = ref(null);
const scrollTriggers = ref([]);

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    split.value = SplitText.create('.text', { type: 'lines', linesClass: 'split-line' });
    splitTrigger.value = SplitText.create('.text', { type: 'lines', linesClass: 'split-trigger' });

    split.value.lines.forEach((line, index) => {
        const trigger = ScrollTrigger.create({
            trigger: splitTrigger.value.lines[index],
            start: 'top 80%',
            end: 'end end',
            markers: true,
            animation: gsap.from(line, { duration: 0.5, opacity: 0, y: 100 }),
            toggleActions: 'restart none none reverse',
        });
        scrollTriggers.value.push(trigger);
    });
});

onUnmounted(() => {
    // 清理所有ScrollTrigger实例
    scrollTriggers.value.forEach(trigger => trigger.kill());
    scrollTriggers.value = [];
    
    // 清理SplitText实例
    if (split.value) {
        split.value.revert();
        split.value = null;
    }
    if (splitTrigger.value) {
        splitTrigger.value.revert();
        splitTrigger.value = null;
    }
})
</script>

<style scoped>
.intro,
.container,
.outro {
    width: 100vw;
    height: 100vh;
}

.intro,
.outro {
    background-color: #000;
}

.container {
    background-color: tomato;
}

.text {
    color: #dfdcff;
    font-size: clamp(2rem, 12rem, 5vw);
    line-height: 1.2;
    box-sizing: border-box;
    padding: 5%;
    width: 100%;
    text-align: center;
    perspective: 500px;
}
</style>