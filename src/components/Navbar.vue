<template>
    <nav class="navbar">
        <!-- Logo -->
        <div class="logo">
            <h1>Cloud App</h1>
        </div>

        <!-- 导航栏 -->
        <ul class="nav_links">
            <li v-for="(route,index) in routes" :key="index">
                <router-link :to="{name:route.name}">{{ route.title }}</router-link>
            </li>
        </ul>
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
]
</script>

<style>
.navbar{
    width: 100%;
    height: 70px;
    padding: 20px 100px;
    background-color: transparent;
    margin-bottom: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}

.logo{
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.nav_links{
    list-style: none; /*去除列表样式*/
    display: flex;
    gap: 2rem; /*间距*/
    margin: 0 auto;
}

.nav_links li a{
    font-size: 1.05rem;
    font-weight: 500;
    text-decoration: none; /*去除下划线*/
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.nav_links li a:hover{
    color: var(--color-hover);
}

.nav_links li a.router-link-active,
.nav_links li a.router-link-exact-active {
    color: var(--color-hover);
    font-weight: 600;
}
</style>