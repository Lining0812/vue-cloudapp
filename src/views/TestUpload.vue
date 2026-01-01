<template>
<div class="container">
    <h1>上传表单测试</h1>
    <UploadFile :fields="Track_Fields"></UploadFile>
</div>
</template>

<script setup>
import UploadFile from '@/components/UploadFile.vue';
import { Album_Fields } from '@/models/album';
import { Concert_Fields } from '@/models/concert';
import { Track_Fields } from '@/models/track';
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
