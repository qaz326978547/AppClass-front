import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/LoginView.vue')
        },
        {
            path: '/member',
            name: 'Member',
            component: () => import('@/views/Member/MemberView.vue')
        },
        {
            path: '/auth/callback',
            name: 'AuthCallback',
            component: () => import('@/views/Member/AuthCallbackView.vue')
        },
        {
            path: '/:pathMatch(.*)*', // 404
            name: 'not-found',
            component: () => import('@/views/NotFoundView.vue')
        }
    ]
});

export default router;

