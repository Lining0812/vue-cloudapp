<template>
    <!-- 加载中提示 -->
    <div v-if="isLoading" style="text-align: center; margin: 2rem 0;">
        加载中...
    </div>

    <!-- <Navbar></Navbar> -->
    <div class="contanier" v-else>
        <h1 style="text-align: center;">Test View</h1>

        <h2 style="text-align: center;">单曲列表</h2>
        <ul>
            <li v-for="(track,index) in t_track" :key="index">
                <router-link :to="{name:'dytest',params:{id:index}}">
                    {{ track.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>
 
<script setup>
import albumApi from '@/services/albumApi'

import { ref,onMounted } from 'vue';

const t_track = ref([])
const isLoading = ref(true);

onMounted(
    async ()=>{
        
        t_track.value = await albumApi.getTracksByAlbumId(1);
        console.log(t_track.value);
        console.log('执行查找专辑函数');

        isLoading.value = false;
    }
)
</script>

<style>
</style>