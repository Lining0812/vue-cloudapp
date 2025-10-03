import { createRouter,createWebHistory } from 'vue-router'

import HomeView from '@/views/Home.vue'
import AlbumList from '@/views/AlbumList.vue'
import AlbumInfo from '@/views/AlbumInfo.vue'
import ConcertList from '@/views/ConcertList.vue'

const router = createRouter(
    {
        // 历史模式
        history: createWebHistory(),
        routes:[
            {
                name:"home",
                path:"/",
                component:HomeView
            },
            {
                name:"albumlist",
                path:'/album',
                component:AlbumList
            },
            {
                name:"albuminfo",
                path:'/albuminfo',
                component:AlbumInfo
            },
            {
                name:'concertlist',
                path:'/concert',
                component:ConcertList
            },
            {
                name:'dynamicroute',
                path:'/dynamic/:id',
                component:()=>import('@/views/Dynamic.vue'),
                props:true
            },
        ]
    }
)

export default router
