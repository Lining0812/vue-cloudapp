<template>
    <div class="banner">
        <img src="../assets/test.jpg" alt="背景"/>
        <div class="content">
            <h1>黄霄雲</h1>
            <p>黄霄雲，1998年12月22日出生于贵州省黔南布依族苗族自治州，中国内地流行乐女歌手、影视演员，毕业于中央音乐学院。</p>
        </div>
    </div>

</template>

<style>
.banner{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    position: relative
}

.banner img{
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.content{
    position: relative;
    z-index: 10;
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);

    padding: 100px;
    max-width: 900px;
}
</style>

<script>

</script>