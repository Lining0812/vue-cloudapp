<template>
    <div class="container">
        <nav>
            <p id="logo">Voxel</p>
            <button>Download Now</button>
        </nav>
    </div>

    <section class="intro">
        <h1>专辑专辑单曲单曲</h1>
    </section>

    <section class="steps">
        <div class="step-counter">
            <div class="counter-title">
                <h1>专辑|Album</h1>
            </div>
            <!-- <div class="count">
                <div class="count-container">
                    <h1>01</h1>
                    <h1>02</h1>
                    <h1>03</h1>
                    <h1>04</h1>
                    <h1>05</h1>
                </div>
            </div> -->
        </div>
        <div class="cards" ref="cards">
            <div class="card">
                <div class="card-img">
                    <img src="/src/assets/images/T1.jpg" alt="aaa">
                </div>
                <div class="card-content">
                    <p>肥鹰卤果</p>
                </div>
            </div>
            <div class="card">
                <div class="card-img">
                    <img src="/src/assets/images/T2.jpg" alt="aaa">
                </div>
                <div class="card-content">
                    <p>没语季节</p>
                </div>
            </div>
            <div class="card">
                <div class="card-img">
                    <img src="/src/assets/images/T3.jpg" alt="aaa">
                </div>
                <div class="card-content">
                    <p>打开</p>
                </div>
            </div>
            <div class="card">
                <div class="card-img">
                    <img src="/src/assets/images/T4.jpg" alt="aaa">
                </div>
                <div class="card-content">
                    <p>Oracle</p>
                </div>
            </div>
            <div class="card">
                <div class="card-img">
                    <img src="/src/assets/images/T5.jpg" alt="aaa">
                </div>
                <div class="card-content">
                    <p>淬炼</p>
                </div>
            </div>
            <div class="card-empty"></div>
            <div class="card-empty"></div>
        </div>
    </section>

    <section class="outro">
        <p>This is <span>outro</span> content</p>
    </section>
</template>

<script setup>
import AlbumCard from '@/components/AlbumCard.vue'

import { onMounted, ref } from 'vue'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

/* // 测试数据
const testalbumlist = ref([
    {id:1,title:'没语季节',description:'个人首张专辑'},
    {id:2,title:'没语季节2',description:'个人第二张专辑'},
    {id:3,title:'没语季节3',description:'个人第三张专辑'},
    {id:4,title:'没语季节4',description:'个人第四张专辑'},
    {id:5,title:'没语季节5',description:'个人第五张专辑'},
    {id:6,title:'没语季节6',description:'个人第四张专辑'},
    {id:7,title:'没语季节7',description:'个人第五张专辑'},
    {id:8,title:'没语季节6',description:'个人第四张专辑'},
    {id:9,title:'没语季节7',description:'个人第五张专辑'},
]); */

const t_albums = ref([]);

const cards = ref(null);

const arcAngle = Math.PI * 0.4;
const startAngle = (Math.PI - arcAngle) / 2;
const endAngle = startAngle + arcAngle;

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    const radius = getRadius();
    const cardlst = gsap.utils.toArray(cards.value.querySelectorAll('.card'));
    const tl = gsap.timeline();

    // cardlst.forEach((card, i) => {
    //     tl.fromTo(card, {
    //         x: () => Math.cos(startAngle) * radius,
    //         y: () => Math.sin(startAngle) * radius * -1 + radius,
    //         rotation: (startAngle - Math.PI / 2) * (180 / Math.PI) * -1,
    //         transformOrigin: 'center center',
    //         duration:3
    //     }, {
    //         x: 0,
    //         y: 0,
    //         rotation: 0,
    //         transformOrigin: 'center center',
    //         duration: 2,
    //     }).to(card, {
    //         x: () => Math.cos(endAngle) * radius,
    //         y: () => Math.sin(endAngle) * radius * -1 + radius,
    //         rotation: (endAngle - Math.PI / 2) * (180 / Math.PI) * -1,
    //         transformOrigin: 'center center',
    //         duration: 3,
    //     })
    // });

    cardlst.forEach((card, i) => {
        tl.from(card, {
            x: () => Math.cos(startAngle) * radius,
            y: () => Math.sin(startAngle) * radius * -1 + radius,
            rotation: (startAngle - Math.PI / 2) * (180 / Math.PI) * -1,
            transformOrigin: 'center center',
            duration: 2
        },).to(card, {
            x: 0,
            y: 0,
            rotation: 0,
            transformOrigin: 'center center',
        },).to(card, {
            x: () => Math.cos(endAngle) * radius,
            y: () => Math.sin(endAngle) * radius * -1 + radius,
            rotation: (endAngle - Math.PI / 2) * (180 / Math.PI) * -1,
            transformOrigin: 'center center',
            duration: 2,
        },'<')
    });
}
)
const getRadius = () => {
    return window.innerWidth < 900 ? window.innerHeight * 5 : window.innerWidth * 2.5;
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    width: 100vw;
    height: 100vh;
    background-color: #000;
    color: #fff;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
}

p#logo {
    text-transform: uppercase;
    font-weight: 700;
}

button {
    border: none;
    outline: none;
    font-weight: 500;
    color: #000;
    padding: 0.75em 1em;
    background-color: #fff;
    border-radius: 0.25em;
}

section {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.intro {
    background: url('./src/assets/images/T6.jpg') no-repeat 50% 50%;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.intro h1 {
    width: 75%;
    text-align: center;
    color: #fff;
    font-size: 100px;
    font-weight: 700;
    line-height: 1.125;
}

.outro {
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 200% 200%;
}

.outro p {
    width: 75%;
    text-align: center;
    color: #fff;
    font-size: 52px;
    font-weight: 400;
    line-height: 1.125;
}

.outro p span {
    color: #75e1ff;
}

.cards {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150vw;
    height: 600px;
    will-change: transform;
}

.card {
    position: absolute;
    width: 500px;
    height: 550px;
    top: 50%;
    left: 50%;
    transform-origin: center center;
    margin-left: -250px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    will-change: transform;
}

.card-img {
    flex: 1;
    border-radius: 0.5em;
    overflow: hidden;
}

.card-content {
    width: 100%;
    height: 60px;
}

.card-content p {
    text-align: left;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
}

.step-counter {
    position: absolute;
    display: flex;
    flex-direction: column;
    margin: 2em;
}

.counter-title,
.count {
    position: relative;
    width: 1200px;
    height: 150px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    overflow: hidden;
}

.count {
    top: -10px;
}

.count-container {
    position: relative;
    transform: translate(150px);
    will-change: transform;
}

.step-counter h1 {
    width: 100%;
    position: relative;
    color: #fff;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 150px;
    line-height: 1;
    letter-spacing: -0.04em;
    will-change: transform;
}

.empty {
    opacity: 0;
}
</style>