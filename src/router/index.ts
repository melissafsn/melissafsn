import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', component: () => import('../views/Main.vue') },
    { path: '/score', component: () => import('../views/Score.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;