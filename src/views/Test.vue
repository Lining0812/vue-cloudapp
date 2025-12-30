<template>
    <div class="testview">
        <!-- 加载中提示 -->
        <div v-if="isLoading" style="text-align: center;">
            加载中...
        </div>

        <div v-else>
            <h1 style="text-align: center;">Test View</h1>
            <!-- 错误提示 -->
            <div v-if="error" style="text-align: center; color: red; margin: 20px;">
                {{ error }}
            </div>

            <h2 style="text-align: center;">单曲列表</h2>
            <div class="tracks-container">
                <div v-for="(track,index) in t_track" :key="index" class="track-item">
                    <h3>{{ track.title || '未知标题' }}</h3>
                    <!-- 修复图片绑定语法，使用v-bind或简写: -->
                    <img v-if="track.coverImageUrl" :src="`https://localhost:7066/images/${track.coverImageUrl}`" :alt="track.title" class="track-image">
                    <!-- 添加默认图片或提示 -->
                    <div v-else class="no-image">暂无图片</div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script setup>
import albumApi from '@/services/albumApi'

import { ref,onMounted } from 'vue';

const t_track = ref([])
const isLoading = ref(true);
const error = ref(null);

onMounted(
    async ()=>{
        console.log('执行查找专辑函数');
        try {
            const result = await albumApi.getAllTracks();
            console.log('API返回结果:', result);
            
            // 处理API返回结果
            if (result && result.error) {
                // API返回了错误
                error.value = result.error;
                t_track.value = [];
            } else if (result && Array.isArray(result)) {
                // API直接返回了数据数组
                t_track.value = result;
            } else if (result && result.data) {
                // API返回了包含data字段的对象
                t_track.value = result.data;
            } else {
                // 未知的数据格式
                error.value = '获取的数据格式不正确';
                t_track.value = [];
            }
        } catch (err) {
            // 捕获其他可能的错误
            console.error('执行过程中发生错误:', err);
            error.value = '执行过程中发生未知错误';
            t_track.value = [];
        } finally {
            isLoading.value = false;
        }
    }
)
</script>

<style>
.testview{
    background-color: #000;
    width: 100vw;
    min-height: 100vh;
    padding: 20px;
    color: #fff;
    box-sizing: border-box;
}

/* 曲目列表容器 */
.tracks-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

/* 单个曲目项 */
.track-item{
    background-color: #222;
    padding: 15px;
    border-radius: 8px;
    width: 250px;
    text-align: center;
}

/* 曲目标题 */
.track-item h3{
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #fff;
}

/* 曲目图片 */
.track-image{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
}

/* 无图片提示 */
.no-image{
    width: 100%;
    height: 200px;
    background-color: #444;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    font-size: 0.9rem;
}

/* 标题样式 */
h1{
    font-size: 2rem;
    margin-bottom: 20px;
    color: #fff;
}

h2{
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #fff;
}
</style>