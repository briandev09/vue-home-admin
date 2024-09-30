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
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
    scrollBehavior(to,from,savedPosition){
        console.log(to,from)
        return savedPosition || {top:0}
    }
})

export default router