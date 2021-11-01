import {
    createWebHistory,
    createRouter as _createRouter,
    createMemoryHistory,
} from "vue-router";
import Common from "./modules/common"

const routes = [
    ...Common,
]


export function createRouter() {
    return _createRouter({
        // history: import.meta.env.SSR ? createMemoryHistory("/ssr") : createWebHistory("/ssr"),
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes,
    });
}
