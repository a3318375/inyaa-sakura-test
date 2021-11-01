import {RouteRecordRaw} from "vue-router";

const Login: Array<RouteRecordRaw> = [
    {
        name: 'index',
        path: '/',
        alias: "/index",
        component: () => import("@/views/post.vue"),
        meta: {
            title: '博客titlepost'
        }
    },
    {
        name: 'article',
        path: '/article/:id',
        component: () => import("@/views/article.vue"),
        meta: {
            title: ':title'
        }
    },
    {
        name: 'me',
        path: '/me',
        component: () => import("@/views/me.vue"),
        meta: {
            title: '博客titleme'
        }
    },
    {
        name: 'archive',
        path: '/archive',
        component: () => import("@/views/archive.vue"),
        meta: {
            title: '博客titlearchive'
        }
    },
    {
        name: 'type',
        path: '/type/:id',
        component: () => import("@/views/type.vue"),
        meta: {
            title: '博客titletype'
        }
    },
    {
        name: '404',
        path: '/404',
        component: () => import("@/views/404.vue"),
        meta: {
            title: '404'
        }
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        redirect: '/404',
    }
];

let Common = [...Login];

export default Common;
