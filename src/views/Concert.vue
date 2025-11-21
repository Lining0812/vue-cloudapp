<template>
    <div class="concert_slide">
        <div class="slide" v-for="(slide, index) in slides" :key="index" ref="sections">
            <div class="slide-img">
                <img :src="slide.slideImg" :alt="slide.slideTitle">
            </div>
            <div class="slide-header">
                <div class="slide-title">
                    <h1>{{ slide.slideTitle }}</h1>
                </div>
                <div class="slide-description">
                    <p>{{ slide.slideDescription }}</p>
                </div>
                <div class="slide-link">
                    <a :href="slide.slideUrl">View Project</a>
                </div>
            </div>
            <div class="slide-info">
                <div class="slide-tags" v-for="(tag, index) in slide.slideTags" :key="index">
                    <p>{{ tag }}</p>
                </div>
                <div class="slide-index-wrapper">
                    <p id="slide-index">{{ (index + 1).toString().padStart(2, '0') }}</p>
                    <p>/</p>
                    <p id="total-slide-count">{{ slides.length.toString().padStart(2, '0') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

const slides = ref([
    {
        slideTitle: '没语季节1',
        slideDescription: 'A stripped-back visual experience blending luxury fashion with streetwear edge.Designed for blod statements and minimal distractions.',
        slideUrl: '/aaaa',
        slideTags: ['Monoohrome', 'Editorial', 'Fashion', 'Visual Identity'],
        slideImg: 'src/assets/images/T1.jpg',
    },
    {
        slideTitle: '没语季节2',
        slideDescription: 'A stripped-back visual experience blending luxury fashion with streetwear edge.Designed for blod statements and minimal distractions.',
        slideUrl: '/aaaa',
        slideTags: ['Monoohrome', 'Editorial', 'Fashion', 'Visual Identity'],
        slideImg: 'src/assets/images/T2.jpg',
    },
    {
        slideTitle: '没语季节3',
        slideDescription: 'A stripped-back visual experience blending luxury fashion with streetwear edge.Designed for blod statements and minimal distractions.',
        slideUrl: '/aaaa',
        slideTags: ['Monoohrome', 'Editorial', 'Fashion', 'Visual Identity'],
        slideImg: 'src/assets/images/T3.jpg',
    },
    {
        slideTitle: '没语季节4',
        slideDescription: 'A stripped-back visual experience blending luxury fashion with streetwear edge.Designed for blod statements and minimal distractions.',
        slideUrl: '/aaaa',
        slideTags: ['Monoohrome', 'Editorial', 'Fashion', 'Visual Identity'],
        slideImg: 'src/assets/images/T4.jpg',
    },
    {
        slideTitle: '没语季节5',
        slideDescription: 'A stripped-back visual experience blending luxury fashion with streetwear edge.Designed for blod statements and minimal distractions.',
        slideUrl: '/aaaa',
        slideTags: ['Monoohrome', 'Editorial', 'Fashion', 'Visual Identity'],
        slideImg: 'src/assets/images/T5.jpg',
    },
    {
        slideTitle: '没语季节6',
        slideDescription: 'A stripped-back visual experience blending luxury fashion with streetwear edge.Designed for blod statements and minimal distractions.',
        slideUrl: '/aaaa',
        slideTags: ['Monoohrome', 'Editorial', 'Fashion', 'Visual Identity'],
        slideImg: 'src/assets/images/T6.jpg',
    }
]);
const sections = ref(null);

onMounted(() => {
    gsap.registerPlugin(SplitText);

    console.log(sections.value.length)
})

function splitText(s) {
    const slideHeader = s.querySelector('.slide-title h1');
    if (slideHeader) {
        SplitText.create(slideHeader, {
            type: 'words',
            wordsClass: 'word',
            mask: 'words',
        });
    };
    const slideContent = s.querySelectorAll('p,a');
    slideContent.forEach((element) => {
        SplitText.create(element, {
            type: 'lines',
            linesClass: 'line',
            mask: 'lines',
            reduceWhiteSpace: false,
        });
    });
};

</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

h1,
a,
p {
    text-transform: uppercase;
    color: #fff;
}

h1 {
    font-size: 5rem;
    font-weight: 600;
    letter-spacing: -0.1rem;
}

p,
a {
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: -0.01rem;
}

.concert_slide {
    position: relative;
    width: 100vw;
    height: 100svh;
    background-color: #000;
    overflow: hidden;
}

.slide,
.slide-img {
    width: 100vw;
    height: 100svh;
    position: absolute;
    top: 0;
    left: 0;
}

.slide {
    will-change: transform;
}

.slide-header {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translate(-50%, 0);
    width: 75%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    z-index: 1;
}

.slide-description {
    width: 60%;
    text-align: center;
    margin-bottom: 1rem;
}

.slide-info {
    position: absolute;
    left: 0;
    bottom: 2rem;
    width: 100vw;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.slide-tags {
    display: flex;
    flex-direction: column;
}

.slide-index-wrapper {
    display: flex;
}

.slide-index-wrapper p {
    text-align: center;
    width: 2rem;
}

.slide-tags p:first-child {
    margin-bottom: 1rem;
}

.line,
.word {
    position: relative;
    display: inline-block;
    will-change: transform;
}

@media(max-width:1000px) {
    h1 {
        font-size: 2rem;
        letter-spacing: 0;
    }

    p {
        font-size: 0.8rem;
    }

    .slide-header {
        top: 50%;
        bottom: unset;
        transform: translate(-50%, -50%);
        width: 90%;
    }

    .slide-description {
        width: 100%;
    }
}
</style>