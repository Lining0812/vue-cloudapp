<template>
    <div class="concert_container">
        <div class="concert_card" v-for="(data,index) in datas" :key="index">
            <div class="card_content">
                <h1>{{ data.title }}</h1>
            </div>

            <div class="card_bg" :style="{'background-image':`url(${data.url})`}">
                <h1>{{ data.dec }}<br>{{ data.dec2 }}</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import gsap from 'gsap';
import { SplitText,ScrollTrigger } from 'gsap/all';

const datas = ref([
    {
    title:"宇宙无敌号-成都站",
    dec:"宇宙无敌号-成都站",
    dec2:"如果说 倦过 又逃过 也爱过 也拥抱过 对了错了好似也成真过 是时候继续往前走！",
    url:'src/assets/test3.jpg'
    },
    {
    title:"宇宙无敌号-上海站",
    dec:"宇宙无敌号-上海站",
    dec2:"我是阿鬼，别怕别着急，接下来的十年，我们会有更多属于我们的星辰大海，love you！",
    url:'src/assets/test2.jpg'
    },
    {
    title:"宇宙无敌号-宁波站",
    dec:"宇宙无敌号-宁波站",
    dec2:"你要相信我会回来，即使我们的距离还在光年外！",
    url:'src/assets/test.jpg'
    },
])

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

let animation1,animation2;

function runAnimation1(){
    animation1 = SplitText.create('.card_content h1',{
        type:'chars',
        mask:'chars',
        autoSplit:true,
        onSplit(self){
            return gsap.from(self.chars,{
                y:-70,
                opacity:0,
                rotation:"random(-80, 80)",
                duration:1,
                ease: "back",
                stagger:0.15,
            })
        }
    })
}

function runAnimation2(){
    animation2 = SplitText.create('.card_bg h1',{
        type:'chars',
        mask: "chars",
        autoSplit:true,
        onSplit(self){
            return gsap.from(self.chars,{
                x:40,
                opacity:0,
                duration:1,
                ease: "power4",
                stagger:0.1,
                scrollTrigger:'.card_bg h1',
            })
        }
    })
}

onMounted(()=>{
    runAnimation1();
    runAnimation2();

    // gsap.set('.card_content h1',{y:-70,opacity:0})
    // gsap.to('.card_content h1',{y:0,opacity:1,duration:3})

    // gsap.set('.card_bg h1',{x:-70,opacity:0})
    // gsap.to('.card_bg h1',{x:0,opacity:1,duration:3})
})

</script>

<style>
.concert_container{
    margin-top: -100px;
    overflow-y: auto;
}

.concert_card{
    width: 100%;
    height: 100vh;

    background-color: blanchedalmond;
}

.card_content{
    height: 20vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.card_bg{
    width: 100%;
    height: 80vh;

    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;
    /* 移除fixed背景以提高性能 */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card_bg h1{
    max-width: 850px;
    text-align: center;

    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}
</style>