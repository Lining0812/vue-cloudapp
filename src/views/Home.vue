<template>
    <div class="intro"></div>
    <div class="container">
        <div class="text">
            Break apart HTML text into characters, words, and/or lines for easy animation.
        </div>
        <!-- <button @click="onClick">Click Me</button> -->
    </div>
    <div class="outro"></div>
</template>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

import { onMounted, ref } from 'vue';

const split = ref(null);

onMounted(()=>{
    gsap.registerPlugin(ScrollTrigger,SplitText);

    split.value = SplitText.create('.text',{type:'lines',linesClass:'split-line'});

    split.value.lines.forEach((line,index) => {
    ScrollTrigger.create({
        trigger:line,
        start:'top 90%',
        end:'end end',
        markers:true,
        animation:gsap.from(line,{duration:1,opacity:0}),
        toggleActions:'restart none none reverse',
    })
});
})

// function onClick(){
//     gsap.from(split.value.lines,{
//         y:'100%',
//         opacity: 0,
//         duration: 1, 
//         ease: "power3",
//         stagger: 0.5,
//     })
// }

</script>

<style scoped>
.intro,.container,.outro{
    width: 100vw;
    height: 100vh;
}

.intro,.outro{
    background-color: #000;
}

.container{
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