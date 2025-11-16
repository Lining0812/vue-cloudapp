import { createApp } from 'vue'
import { gsap } from "gsap"

import App from './App.vue'

// 引入并使用路由
import router from './routers/index'

import './assets/fonts/fonts.css'
import './assets/css/index.css'

const app = createApp(App);
app.use(router);
app.mount('#app');