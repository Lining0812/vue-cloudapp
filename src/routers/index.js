import { createRouter,createWebHistory } from 'vue-router'

// 配置路由和视图的对应关系
const routes = [
            {
                name:"home",
                path:"/", // http://localhost:5173/
                component:()=>import('@/views/Home.vue'),
            },
            {
                name:"albumlist",
                path:'/albums', // http://localhost:5173/albums
                component:()=>import('@/views/AlbumList.vue'),
            },
            {
                name:"albuminfo",
                path:'/album/:id',
                component:()=>import('@/views/AlbumInfo.vue'),
                props:true,
            },
            {
                name:'concertlist',
                path:'/concerts', // http://localhost:5173/concert
                component:()=>import('@/views/ConcertList.vue'),
            },
            {
                name:'origins',
                path:'/origins', // http://localhost:5173/origins
                component:()=>import('@/views/Origins.vue'),
            },
            {
                name:'test',
                path:'/test', // http://localhost:5173/test
                component:()=>import('@/views/Test.vue'),
            },
            {
                name:'dytest',
                path:'/test/:id', // http://localhost:5173/test/:id
                component:()=>import('@/views/Dytest.vue'),
                props:true,
            },
            {
                name:'testupload',
                path:'/testupload', // http://localhost:5173/testupload
                component:()=>import('@/views/TestUpload.vue'),
            },
        ]

// 创建路由实例
const router = createRouter(
    {
        // 历史模式有两种可选
        history: createWebHistory(),
        routes,
    }
)

// 导出路由实例
export default router
