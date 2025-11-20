<template>
    <nav>
        <div class="logo">
            <router-link :to="{ name: 'home' }">Yun雲</router-link>
        </div>
        <NavButton :is-open="isOpen" @click="handleClick"/>
    </nav>
</template>

<script setup>
import NavButton from './Button/NavButton.vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
    isAnimating: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['menu-toggle']);

// 处理点击事件
function handleClick() {
    if (props.isAnimating) return;
    emit('menu-toggle');
}
</script>

<style scoped>
a,
p {
    position: relative;
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 300;
    user-select: none;
}

nav {
    position: fixed;
    width: 100vw;
    padding: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
}

.logo a {
    font-weight: 700;
}
</style>