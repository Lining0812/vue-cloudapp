import { createApp } from 'vue'
import App from './App.vue'

import gsap from 'gsap'

// 引入并使用路由
import router from './routers/index'

import './assets/css/index.css'

const app = createApp(App);
app.use(router);
app.mount('#app');
