<template>
    <div class="menu-overlay">
        <div class="menu-content">
            <div class="menu-items">
                <div class="col-lg">
                    <div class="menu-preview-img"><img src="../assets/T1.jpg" alt=""></div>
                </div>
                <div class="col-sm">
                    <div class="menu-links">
                        <div class="link" v-for="(route,index) in routes" :key="index">
                            <router-link :to="{name:route.name}" data-img="../assets/T1.jpg">{{ route.title }}</router-link>
                        </div>
                    </div>
                    <div class="menu-socials">
                        <div class="social"><a href="#">Home1</a></div>
                        <div class="social"><a href="#">Home2</a></div>
                        <div class="social"><a href="#">Home3</a></div>
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

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    overflow-x: hidden;
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

.menu-links,.menu-socials{
    display: flex;
    flex-direction: column;
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

</style>
