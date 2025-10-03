<template>
    <div class="navbar">
        <div class="logo">
            <h1>Cloud App</h1>
        </div>
            <ul class="nav_links">
                <li><RouterLink to="/">主页|Home</RouterLink></li>
                <li><RouterLink to="/album">专辑|Album</RouterLink></li>
                <li><RouterLink to="/concert">演唱会|Concert</RouterLink></li>
                <li><RouterLink to="/albumInfo">起源|Origins</RouterLink></li>
                <li><RouterLink to="/dynamic/30">动态路由</RouterLink></li>
            </ul>
        <div></div>
    </div>
</template>

<script>

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