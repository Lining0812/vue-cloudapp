<template>
    <nav class="navbar">
        <!-- Logo -->
        <div class="logo">
            <h1>Cloud</h1>
        </div>

        <!-- 导航栏 -->
        <div class="nav_links">
            <router-link v-for="(route,index) in routes" :key="index" :to="{name:route.name}">{{ route.title }}</router-link>
        </div>
    </nav>
</template>

<script setup>
const routes = [
    {
        name:"home",
        title:"主页|Home",
    },
    {
        name:"albumlist",
        title:"专辑|Album",
    },
        {
        name:"concertlist",
        title:"演唱会|Concert",
    },
    {
        name:"origins",
        title:"起源|Origins",
    },
    {
        name:"test",
        title:"测试|test",
    },
    {
        name:"testupload",
        title:"testupload",
    },
]
</script>

<style>
.navbar{
    width: 100%;
    height: 70px;
    padding: 15px 100px;
    background-color: transparent;
    /* margin-bottom: 2rem; */

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}

.logo{
    position: absolute;
    left: 70px;
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.nav_links{
    display: flex;
    gap: 2rem; /*间距*/
    margin: 0 auto;
}

.nav_links a{
    font-size: 1.05rem;
    font-weight: 500;
    text-decoration: none; /*去除下划线*/
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.nav_links a:hover{
    color: var(--color-hover);
}

.nav_links .router-link-active,
.nav_links .router-link-exact-active {
    color: var(--color-hover);
    font-weight: 600;
}
</style>