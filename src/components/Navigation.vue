<template>
<nav>
    <div class="logo">
        <a href="#">Yun雲</a>
    </div>
    <div class="menu-toggle" @click="handleClick">
        <p id="menu-open">Menu</p>
        <p id="menu-close">Close</p>
    </div>
</nav>
</template>

<script setup>
import { onMounted,watch } from 'vue';
import gsap from 'gsap';

const props = defineProps({
    isOpen:{
        type:Boolean,
        default:false,
    },
    isAnimating:{
        type:Boolean,
        default:false,
    },
});

const emit = defineEmits(['menu-toggle']);

// 处理点击事件
function handleClick() {
  if (props.isAnimating) return;
  emit('menu-toggle');
}

// 动画函数
function animateMenuToggle(isOpening) {
  const open = document.querySelector('p#menu-open');
  const close = document.querySelector('p#menu-close');

  gsap.to(isOpening ? open : close, {
    x: isOpening ? -5 : 5,
    y: isOpening ? -10 : 10,
    rotation: isOpening ? -5 : 5,
    opacity: 0,
    delay: 0.25,
    duration: 0.5,
    ease: 'power2.out',
  });

  gsap.to(isOpening ? close : open, {
    x: 0,
    y: 0,
    rotation: 0,
    opacity: 1,
    delay: 0.5,
    duration: 0.5,
    ease: 'power2.out',
  });
}

// 监听 isOpen 变化并执行相应动画
watch(() => props.isOpen, (newVal) => {
    animateMenuToggle(newVal);
});

// 初始化状态（根据父组件初始isOpen值）
onMounted(() => {
  const close = document.querySelector('p#menu-close');
  gsap.set(close, {
    opacity: props.isOpen ? 1 : 0,
    x: props.isOpen ? 0 : -5,
    y: props.isOpen ? 0 : 10,
    rotation: props.isOpen ? 0 : 5,
  });

  const open = document.querySelector('p#menu-open');
  gsap.set(open, {
    opacity: props.isOpen ? 0 : 1,
    x: props.isOpen ? 5 : 0,
    y: props.isOpen ? 10 : 0,   
    rotation: props.isOpen ? 5 : 0,
  });
});
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a,p{
    position: relative;
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 300;
    user-select: none;
}

nav{
    position: fixed;
    width: 100vw;
    padding: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
}

.logo a{
    font-weight: 600;
}

.menu-toggle{
    position: relative;
    width: 3rem;
    height: 1.5rem;
    cursor: pointer;
}

.menu-toggle p{
    position: absolute;
    transform-origin: top left;
    will-change: transform,opacity;
}

.menu-toggle p#menu-close{
    opacity: 0;
    transform: translateX(-5px) translateY(10px) rotate(5deg);
}
</style>