<template>
<div class="container">
    <h1>上传表单测试</h1>
    <UploadFile></UploadFile>
</div>
</template>

<script setup>
import UploadFile from '@/components/UploadFile.vue';
</script>

<style>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
    }
</style>
