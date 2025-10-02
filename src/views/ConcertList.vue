<template>
    <div style="text-align: center;color: #121212; margin-bottom: 2rem;">
        <h1>Concert</h1>
    </div>

    <div class="concertlist">
        <cardcomponent/>
        <cardcomponent/>
        <cardcomponent/>
        <cardcomponent/>
        <cardcomponent/>
    </div>
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
    }
}
</script>

<style>

.concertlist{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

</style>