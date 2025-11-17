<template>
    <div class="menu-overlay" ref="menuOverlay">
        <div class="menu-content" ref="menuContent">
            <div class="menu-items">
                <div class="col-lg">
                    <div class="menu-preview-img"><img src="../assets/images/T1.jpg" alt=""></div>
                </div>
                <div class="col-sm">
                    <div class="menu-links">
                        <div class="link" v-for="(route,index) in routes" :key="index">
                            <router-link 
                            :to="{name:route.name}" 
                            data-img="../assets/images/T1.jpg">
                            {{ route.title }}
                        </router-link>
                        </div>
                    </div>
                    <div class="menu-socials">
                        <div class="social"><a href="https://weibo.com/n/%E9%BB%84%E9%9C%84%E9%9B%B2?from=feed&loc=at" target="_blank">Home1</a></div>
                        <div class="social"><a href="https://www.douyin.com/user/MS4wLjABAAAAjW0gMk6HfnozLjpBmla_Ad2igcU4EkqV6WwnkK0ZuNM?from_tab_name=main&is_search=1&list_name=follow&nt=0" target="_blank">Home2</a></div>
                        <div class="social"><a href="https://www.xiaohongshu.com/user/profile/5e6cc87f0000000001003f24?xsec_token=ABv83ps5rrhzyZOslpS79yphATmpcFcFLPhQtP_GRCaqQ%3D&xsec_source=pc_search" target="_blank">Home3</a></div>
                        <div class="social"><a href="#">Home4</a></div>
                    </div>
                </div>
            </div>
            <div class="menu-footer">
                <div class="col-lg">
                    <a href="#">Run Sequence</a>
                </div>
                <div class="col-sm">
                    <a href="#">Origin</a>
                    <a href="#">Join Single</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import { ref, watch } from 'vue';

const routes = [
    {name:"home",title:"主页|Home",},
    {name:"albumlist",title:"专辑|Album",},
    {name:"concertlist",title:"演唱会|Concert",},
    {name:"origins",title:"起源|Origins",},
    {name:"test",title:"测试|test",},
    {name:"testupload",title:"testupload",},
]

const props = defineProps({
    isOpen:{
        type:Boolean,
        default:false,
    }
});

const menuOverlay = ref(null);
const menuContent = ref(null);

// 监听属性并执行动画
watch(() => props.isOpen, (newVal) => {
    if(newVal) {
        openMenu();
    } else {
        closeMenu();
    }
});

// onMounted(() => {
//     // 初始隐藏链接
//     gsap.set(['.link a','.social a'],{
//         y:'120%',
//         opacity:0
//     });
// });

function openMenu(){
    // gsap.to(container,{
    //     rotation:10,
    //     x:300,
    //     y:450,
    //     scale:1.5,
    //     duration:1.25,
    //     ease:'power4.inOut',
    // });

    gsap.to(menuContent.value,{
        rotation:0,
        x:0,
        y:0,
        scale:1,
        duration:1.25,
        ease:'power4.inOut',
    });
    gsap.to(['.link a','.social a'],{
        y:"0%",
        opacity:1,
        duration:1,
        delay:0.75,
        stagger:0.1,
        ease:'power3.out',
    });
    gsap.to(menuOverlay.value,{
        clipPath:'polygon(0% 0%,100% 0%,100% 175%,0% 100%)',
        duration:1.25,
        ease:'power4.inOut',
    });
}

function closeMenu(){
    // gsap.to(container,{
    //     rotation:0,
    //     x:0,
    //     y:0,
    //     scale:1,
    //     duration:1.25,
    //     ease:'power4.inOut',
    // });
    gsap.to(menuContent.value,{
        rotation:-15,
        x:-100,
        y:-100,
        scale:1.5,
        // opacity:0.25,
        duration:1.25,
        ease:'power4.inOut',
    });
    gsap.to(menuOverlay.value,{
        clipPath:'polygon(0% 0%,100% 0%,100% 0%,0% 0%)',
        duration:1.25,
        ease:'power4.inOut',
        onComplete:()=>{
            gsap.set(['.link a','.social a'],{y:'120%'});
        },
    });
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

h1{
    color: #fff;
    font-size: 7rem;
    font-weight: 400;
    letter-spacing: -0.2rem;
    line-height: 1;
}

a,p{
    position: relative;
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 300;
    user-select: none;
}

.menu-overlay{
    position: fixed;
    width: 100vw;
    height: 100svh;
    background-color: #0f0f0f;
    z-index: 1;
}

.menu-content{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: bottom left;
    will-change: transform,opacity;
}

.menu-items, .menu-footer{
    width: 100%;
    padding: 2.5rem;
    display: flex;
    gap: 2.5em;
}

.col-lg{
    flex: 3;
}

.col-sm{
    flex: 2;
}

.menu-items .col-lg{
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-preview-img{
    position: relative; 
    width: 70%;
    height: 100%;
    overflow: hidden;
}

.menu-preview-img img{
    position: absolute;
    will-change: transform,opacity;
}

.menu-items .col-sm{
    padding: 2.5em 0;
    display: flex;
    flex-direction: column;
    gap: 2.5em;
}

.menu-links{
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}

.menu-socials{
    display: flex;
    flex-direction: row;
    gap: 0.5em;
}

.link,.social{
    padding: 6px;
    clip-path: polygon(0% 0%,100% 0%,100% 100%,0% 100%);
}

.link a,.social a{
    display: inline-block;
    will-change: transform;
    transition: color 0.5s;
}

.link a{
    font-size: 2.5rem;
    letter-spacing: -0.02rem;
}

.social a{
    color: #8f8f8f;
}

.social a:hover{
    color: #fff;
}

.menu-footer{
    position: absolute;
    bottom: 0;
}

.menu-footer .col-sm{
    display: flex;
    justify-content: space-between;
}

.link a::after,
.social a::after,
.menu-footer a::after{
    position: absolute;
    content: '';
    top: 102.5%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s cubic-bezier(0.6,0,0.4,1);
}

.link a:hover::after,
.social a:hover::after,
.menu-footer a:hover::after{
    transform: scaleX(1);
    transform-origin: left;
}

.link a,
.social a{
    transform: translateY(120%);
    /* opacity: 0.25; */
}
.menu-content{
    transform: translateX(-100px) translateY(-100px) scale(1.5) rotate(-15deg);
    /* opacity: 0.25; */
}
.menu-overlay{
    clip-path: polygon(0% 0%,100% 0%,100% 0%,0% 0%);
}

</style>
