<template>
    <h1>Home</h1>
    <div class="main">
        <div class="container">
            <div class="card">
                <div class="image">
                    <img src="/src/assets/test.jpg"></img>
                </div>
                <div class="title">
                    <span>我是一个标题</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.main{
    width: 100%;
    padding: 0 60px;
    box-sizing: border-box;
}

.container{
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 20px;
    width: 100%;
    background-color: beige;
}

.card{
    background-color: aqua;
}

.image{
    position: relative;
    border-radius: 6px;
    overflow:hidden;
}

</style>

<script>
</script>