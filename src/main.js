import { createApp } from 'vue'
import App from './App.vue'

// 引入并使用路由
import router from './routers/index'

const app = createApp(App);
app.use(router);
app.mount('#app');
