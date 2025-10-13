<template>
    <div class="concerts">
        <div class="concertcard" v-for="(data,index) in datas" :key="index">
            <div class="card_content">
                <h1>{{ data.title }}</h1>
            </div>

            <div class="card_bg" :style="{'background-image':`url(${data.url})`}">
                <h1>{{ data.dec }}</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const datas = ref([
    {
    title:"宇宙无敌号-成都站",
    dec:"宇宙无敌号-成都站",
    url:'src/assets/test3.jpg'
    },
    {
    title:"宇宙无敌号-上海站",
    dec:"宇宙无敌号-上海站",
    url:'src/assets/test2.jpg'
    },
    {
    title:"宇宙无敌号-宁波站",
    dec:"宇宙无敌号-宁波站",
    url:'src/assets/test.jpg'
    },
])

onMounted(()=>{
    gsap.set('.card_bg h1',{x:-40,opacity:0})
    gsap.to('.card_bg h1',{x:0,opacity:1,duration:3})
})

</script>

<style>
.concerts{
    margin-top: -100px;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
}

.concertcard{
    width: 100%;
    height: 100vh;

    background-color: blanchedalmond;
    scroll-snap-align: start;
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
    background-attachment: fixed;
}

.card_bg h1{
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}
</style>