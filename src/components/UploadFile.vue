<template>
<form @submit.prevent="handleSubmit" enctype="multipart/form-data">
    <div v-for="file in formFields" :key="file.id" class="form-group">
        <label :for="file.id">{{ file.label }}：</label>
        <input 
            :type="file.type"
            :id="file.id"
            :name="file.name"
            :placeholder="file.placeholder"
            v-model="formData[file.modelKey]"
        >
    </div>
    <button type="submit" id="submitbtn">提交</button>
</form>

</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import albumApi from '../services/albumApi.js';

// 表单数据
const formData = reactive({
    title: '',
    artist: '',
    releaseDate: '',
    description: '',
    coverImageUrl: '',
    coverImage: null,
});

// 表单字段配置数组
const formFields = ref([
    {
      id: 'title',
      name: 'Title',
      modelKey: 'title',
      type: 'text',
      label: '标题',
      placeholder: '标题'
    },
    {
      id: 'artist',
      name: 'Artist',
      modelKey: 'artist',
      type: 'text',
      label: '演唱者',
      placeholder: '艺术家'
    },
    {
      id: 'releaseDate',
      name: 'ReleaseDate',
      modelKey: 'releaseDate',
      type: 'date',
      label: '发行日期',
      placeholder: '发行日期'
    },
    {
      id: 'description',
      name: 'Description',
      modelKey: 'description',
      type: 'text',
      label: '专辑描述',
      placeholder: '专辑描述'
    },
    {
      id: 'coverimage',
      name: 'CoverImageUrl',
      modelKey: 'coverImageUrl',
      type: 'text',
      label: '专辑封面',
      placeholder: '专辑封面链接'
    }
    ]);

const router = useRouter();
    
const handleSubmit = async () => {
  const result = await albumApi.addAlbum(formData);
};

// 重置表单
const resetForm = () => {
    formData.title = '';
    formData.artist = '';
    formData.releaseDate = '';
    formData.description = '';
    formData.coverImageUrl = '';
    formData.coverImage = null;
    
    // 重置文件输入框
    const fileInput = document.getElementById('coverImage');
    if (fileInput) {
      fileInput.value = '';
    }
};
</script>
