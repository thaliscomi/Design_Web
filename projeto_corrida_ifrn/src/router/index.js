import { createRouter, createWebHistoy } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JogosView from '@/views/JogosView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/jogos',
        name: 'jogos',
        component: JogosView
    }
]

const router = createRouter({
    history: createWebHistoy(),
    routes
})

export default router