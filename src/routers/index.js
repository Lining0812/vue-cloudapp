import { createRouter,createWebHistory } from 'vue-router'

import HomeView from '@/views/Home.vue'
import AlbumInfo from '@/views/AlbumInfo.vue'
import TrackInfo from '@/views/TrackInfo.vue'

const router = createRouter(
    {
        // 历史模式
        history: createWebHistory(),
        routes:[
            {name:"home",path:"/",component:HomeView},
            {name:"albuminfo",path:'/album',component:AlbumInfo},
            {name:"trackinfo",path:'/track',component:TrackInfo},
        ]
    }
)

export default router