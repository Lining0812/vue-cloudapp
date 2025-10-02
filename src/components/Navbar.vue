<template>
    <div class="navbar">
        <div class="logo">
            <span>Cloud App</span>
        </div>
            <ul class="nav_links">
                <li><a href="#">主页|Home</a></li>
                <li><a href="#">专辑|Album</a></li>
                <li><a href="#">演唱会|Concert</a></li>
            </ul>
        <button>Click Me</button>
    </div>
</template>

<script>

</script>

<style>
/* *{
    margin: 0;
    padding: 0;
} */

.navbar{
    background-color: aqua;

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

</style>