<template>
    <div class="album">
        <h1 style="text-align: center;margin-bottom: 1rem;">Track Info</h1>

        <div class="albuminfo">
            <div class="left_img">
                <img src="/src/assets/test.jpg" alt="没语季节">
            </div>
            <div class="right_info">
                <h2>没语季节</h2>
                <p>《没语季节》是黄霄雲于2024年11月15日通过华纳音乐发行的普通话录音室专辑。该专辑由黄霄雲担任制作人与出品人，封面设计由文刀导演工作室与Daikonaut宇航员完成，封面摄影蔡菡颖儿。编曲由彭轩、黄霄雲、沈力合作完成，吉他手胡晨HUX、鼓手郝稷伦、贝斯手耿伟华Gengo及国际首席爱乐乐团弦乐参与演奏。专辑与词作者易家扬等创作人合作</p>
                <ul class="tracklist">
                    <li>没语季节</li>
                    <li>盲选</li>
                    <li>说谎动物</li>
                    <li>玫瑰星云</li>
                </ul>
             </div>
        </div>
    </div>

</template>

<script>
</script>

<style>

.album{
    background-color: aquamarine;
    padding: 2rem;
}

.albuminfo{
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    gap: 5rem;
}

.left_img {
    width: 100%;
    padding: 0 1rem;
}

.left_img img {
    max-width: 100%;
    height: auto;
    display: block;
}

.tracklist{
    margin-top: 2rem;
}

.tracklist li{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 3px;
    border-color: black;
}

</style>