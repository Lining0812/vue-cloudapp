import { createApp } from 'vue'
import App from './App.vue'

// 使用路由
import router from './routers/index'

createApp(App).use(router).mount('#app')
