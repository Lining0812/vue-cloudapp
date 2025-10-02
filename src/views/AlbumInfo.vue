<template>
    <div style="text-align: center;">
        <h1>Album</h1>
    </div>

    <div class="albumlist">
        <cardcomponent/>
        <cardcomponent/>
        <cardcomponent/>
    </div>

    <ul>
        <li v-for="(item,index) in value" :key="index">{{ item.专辑名 }}</li>
    </ul>
    <button @click="getData">获取数据</button>
    <btncomponent/>
</template>

<script>
import instance from '@/axios/index'

import cardcomponent from '@/components/TestCard.vue'
import btncomponent from '@/components/TestButton.vue'

export default{
    data(){
        return{
            value:null,
        }
    },
    methods:{
        async getData(){
            try {
                const response = await instance.get('/api/Album/GetAllAlbums');
                this.value = response.data;
                console.log('请求成功:', this.value);
            } catch (error) {
                console.error('请求失败:', error);
                this.value = { error: '数据加载失败' };
            }
        }
    },
    components:{
        cardcomponent,
        btncomponent,
    }
}
</script>

<style>

.albumlist{
    display: flex;
    justify-content: space-around;
}

</style>