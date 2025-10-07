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
]
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 

.navbar{
    width: 100%;
    padding: 24px;
    background-color: aqua;
    margin-bottom: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo{

}
.nav_links{
    list-style: none; /*去除列表样式*/
    display: flex;
    gap: 2rem; /*间距*/
    margin: 0 auto;
}

.nav_links li a{
    position: relative;
    font-size: 1.05rem;
    font-weight: 500;
    text-decoration: none; /*去除下划线*/
    color: black;
}

.nav_links li a:hover{
    color: red;
}

.nav_links li a.router-link-active,
.nav_links li a.router-link-exact-active {
    color: #4361ee;
    font-weight: 600;
}

</style>