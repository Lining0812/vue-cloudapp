<template>
    <div class="album">
        <h1 style="text-align: center;margin-bottom: 1rem;">Album Info | {{ id }}</h1>

        <div class="albuminfo">
            <div class="left_img">
                <img src="/src/assets/test.jpg" alt="没语季节">
            </div>
            <div class="right_info" v-if="currentAlbum">
                <h2>{{ currentAlbum.title }}</h2>
                <p>{{ currentAlbum.description }}</p>
                <ul class="tracklist">
                    <li v-for="(track, index) in currentAlbum.tracklist" :key="index">
                        {{ track }}
                    </li>
                </ul>
             </div>
        </div>
    </div>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import albumApi from '@/services/albumApi'

const props = defineProps({
    id:{
        type:String
    }
})

const albumdata = [
    {
        id:1,
        title:'没语季节1',
        description:'《没语季节》是黄霄雲于2024年11月15日通过华纳音乐发行的普通话录音室专辑。该专辑由黄霄雲担任制作人与出品人，封面设计由文刀导演工作室与Daikonaut宇航员完成，封面摄影蔡菡颖儿。编曲由彭轩、黄霄雲、沈力合作完成，吉他手胡晨HUX、鼓手郝稷伦、贝斯手耿伟华Gengo及国际首席爱乐乐团弦乐参与演奏。专辑与词作者易家扬等创作人合作',
        tracklist:['没语季节','盲选','说谎动物','玫瑰星云','弦上生花'],
    },
    {
        id:2,
        title:'没语季节2',
        description:'《没语季节》是黄霄雲于2024年11月15日通过华纳音乐发行的普通话录音室专辑。该专辑由黄霄雲担任制作人与出品人，封面设计由文刀导演工作室与Daikonaut宇航员完成，封面摄影蔡菡颖儿。编曲由彭轩、黄霄雲、沈力合作完成，吉他手胡晨HUX、鼓手郝稷伦、贝斯手耿伟华Gengo及国际首席爱乐乐团弦乐参与演奏。专辑与词作者易家扬等创作人合作',
        tracklist:['回音如果','然后呢最后呢','觉醒时代','小云','没了我你依然拥有太阳'],
    },
        {
        id:3,
        title:'没语季节3',
        description:'《没语季节》是黄霄雲于2024年11月15日通过华纳音乐发行的普通话录音室专辑。该专辑由黄霄雲担任制作人与出品人，封面设计由文刀导演工作室与Daikonaut宇航员完成，封面摄影蔡菡颖儿。编曲由彭轩、黄霄雲、沈力合作完成，吉他手胡晨HUX、鼓手郝稷伦、贝斯手耿伟华Gengo及国际首席爱乐乐团弦乐参与演奏。专辑与词作者易家扬等创作人合作',
        tracklist:['没语季节','盲选','说谎动物','玫瑰星云','弦上生花'],
    },
    {
        id:4,
        title:'没语季节4',
        description:'《没语季节》是黄霄雲于2024年11月15日通过华纳音乐发行的普通话录音室专辑。该专辑由黄霄雲担任制作人与出品人，封面设计由文刀导演工作室与Daikonaut宇航员完成，封面摄影蔡菡颖儿。编曲由彭轩、黄霄雲、沈力合作完成，吉他手胡晨HUX、鼓手郝稷伦、贝斯手耿伟华Gengo及国际首席爱乐乐团弦乐参与演奏。专辑与词作者易家扬等创作人合作',
        tracklist:['回音如果','然后呢最后呢','觉醒时代','小云','没了我你依然拥有太阳'],
    },
        {
        id:5,
        title:'没语季节5',
        description:'《没语季节》是黄霄雲于2024年11月15日通过华纳音乐发行的普通话录音室专辑。该专辑由黄霄雲担任制作人与出品人，封面设计由文刀导演工作室与Daikonaut宇航员完成，封面摄影蔡菡颖儿。编曲由彭轩、黄霄雲、沈力合作完成，吉他手胡晨HUX、鼓手郝稷伦、贝斯手耿伟华Gengo及国际首席爱乐乐团弦乐参与演奏。专辑与词作者易家扬等创作人合作',
        tracklist:['回音如果','然后呢最后呢','觉醒时代','小云','没了我你依然拥有太阳'],
    },
]

// 计算属性：根据props中的id匹配对应的专辑数据
const currentAlbum = computed(() => {
    // 注意：props.id是字符串类型，需要转成数字才能和albumdata中的id（数字类型）匹配
    return albumdata.find(item => item.id === Number(props.id))
})

const t_album = ref([])

onMounted(
    ()=>{
        t_album.value = albumApi.getAlbumById(id)
    }
)

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