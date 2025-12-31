<template>
  <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
    <div v-for="field in formFields" :key="field.id" class="form-group">
      <label :for="field.id">{{ field.label }}：</label>

      <input v-if="field.type !== 'file'" 
             :type="field.type" 
             :id="field.id" 
             :name="field.name" 
             :placeholder="field.placeholder"
             v-model="formData[field.modelKey]">
      <!-- 文件类型使用v-model:file或@change事件 -->
      <input v-else 
             type="file" 
             :id="field.id" 
             :name="field.name" 
             :placeholder="field.placeholder"
             @change="handleFileChange($event, field.modelKey)">

    </div>
    <button type="submit" id="submitbtn">{{ submitButtonText }}</button>
    <button type="button" @click="resetForm">{{ resetButtonText }}</button>
  </form>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';

// 定义props，支持动态配置
const props = defineProps({
  // 表单字段配置数组
  formFields: {
    type: Array,
    required: true,
    default: () => []
  },
  // 提交按钮文本
  submitButtonText: {
    type: String,
    default: '提交'
  },
  // 重置按钮文本
  resetButtonText: {
    type: String,
    default: '重置'
  },
  // 初始表单数据
  initialFormData: {
    type: Object,
    default: () => {}
  }
});

// 定义事件
const emit = defineEmits(['submit', 'reset', 'fileChange']);

// 动态生成表单数据
const formData = reactive({});

// 初始化表单数据
const initFormData = () => {
  // 清空现有数据
  Object.keys(formData).forEach(key => delete formData[key]);
  
  // 根据formFields初始化数据
  props.formFields.forEach(field => {
    // 设置默认值
    let defaultValue = '';
    if (field.type === 'date') {
      // 如果是日期类型，默认使用当前日期
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      defaultValue = `${year}-${month}-${day}`;
    } else if (field.type === 'file') {
      // 文件类型默认值为null
      defaultValue = null;
    }
    
    // 使用初始数据或默认值
    formData[field.modelKey] = props.initialFormData[field.modelKey] || defaultValue;
  });
};

// 监听formFields变化，重新初始化表单数据
onMounted(() => {
  initFormData();
});

// 处理文件上传
const handleFileChange = (event, modelKey) => {
  const file = event.target.files[0];
  if (file) {
    formData[modelKey] = file;
    emit('fileChange', { modelKey, file });
  }
};

// 表单提交
const handleSubmit = async () => {
  emit('submit', { ...formData });
};

// 重置表单
const resetForm = () => {
  initFormData();
  
  // 重置所有文件输入框
  props.formFields.forEach(field => {
    if (field.type === 'file') {
      const fileInput = document.getElementById(field.id);
      if (fileInput) {
        fileInput.value = '';
      }
    }
  });
  
  emit('reset', { ...formData });
};
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
