<template>
    <div>
        <h1>Album</h1>
    </div>
    <ul>
        <li v-for="(item,index) in value" :key="index">{{ item.专辑名 }}</li>
    </ul>
    <button @click="getData">获取数据</button>
</template>

<script>
import instance from '@/axios/index'

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
    }
}
</script>