import {createRouter,createWebHashHistory} from 'vue-router'
import Users from '@/views/UsersView.vue'
const routes=[
 {
    meta:{
        title:'Users'
    },
    path:'/',
    name:'users',
    component:Users
 }
] as any

const router = createRouter({
    history:createWebHashHistory(),
    routes,
    scrollBehavior(to,from,savedPosition){
        return savedPosition || {top:0}
    }
})

export default router