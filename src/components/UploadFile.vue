<template>
  <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
    <div v-for="field in formFields" :key="field.id" class="form-group">
      <label :for="field.id">{{ field.label }}<span v-if="field.required" class="required">*</span></label>
      <input v-if="field.type !== 'file'" 
      :type="field.type" 
      :id="field.id" 
      :name="field.name"
      :placeholder="field.placeholder" 
      :required="field.required" 
      v-model="formData[field.name]">

      <!-- 文件类型使用@change事件处理 -->
      <input v-else 
      type="file" 
      :id="field.id" 
      :name="field.name" 
      :placeholder="field.placeholder"
      :required="field.required"
      :accept="field.accept"
      @change="handleFileChange($event, field.name)">
    </div>
    <button type="submit" id="submitbtn">提交</button>
    <button type="button" @click="resetForm">重置</button>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue';
import albumApi from '@/services/albumApi';

const props = defineProps({
  fields:{
    type:Object,
    required:true
  },
});

const formFields = ref(Object.values(props.fields));
const formData = reactive({});

const handleFileChange = (event, fieldName) => {
  formData[fieldName] = event.target.files[0];
};

const resetForm = () => {
  Object.keys(formData).forEach(key => {
    delete formData[key];
  });
  document.querySelectorAll('input[type="file"]').forEach(input => {
    input.value = '';
  });
};

// 处理表单提交
const handleSubmit = async () => {
  try {
    const result = await albumApi.addAlbum(formData);
    if (result.error) {
      console.error('添加专辑失败:', result.error);
      alert('添加专辑失败: ' + result.error);
    } else {
      console.log('添加专辑成功:', result.data);
      alert('添加专辑成功');
      resetForm();
    }
  } catch (error) {
    console.error('提交表单时发生错误:', error);
    alert('提交表单时发生错误');
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}

input[type="file"] {
  padding: 0.5rem;
  cursor: pointer;
  background-color: #f9f9f9;
}

input[type="file"]:hover {
  background-color: #f0f0f0;
}

button {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

button:hover {
  background-color: #357abd;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
}

button:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(74, 144, 226, 0.3);
}

form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

@media (max-width: 600px) {
  form {
    padding: 1.5rem;
    margin: 1rem;
  }

  .form-group {
    margin-bottom: 1.25rem;
  }

  input {
    padding: 0.625rem;
  }

  button {
    padding: 0.75rem 1.5rem;
  }
}
</style>
