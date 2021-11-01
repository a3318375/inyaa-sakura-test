import {RouteRecordRaw} from "vue-router";

const Login: Array<RouteRecordRaw> = [
    {
        name: 'index',
        path: '/',
        alias: "/type",
        component: () => import("../../views/type.vue"),
        meta: {
            title: '博客titlepost'
        }
    },
];

let Common = [...Login];

export default Common;
