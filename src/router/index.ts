import {createMemoryHistory, createRouter} from "vue-router";

const routes =[
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export  default router