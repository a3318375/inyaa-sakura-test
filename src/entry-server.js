import { createSSRApp } from 'vue';
import App from './App.vue';
import { renderToString } from '@vue/server-renderer';

import {createStore} from './store';
import {createRouter} from './router';
import { sync } from 'vuex-router-sync';
import Antd from 'ant-design-vue';

export async function render(url, manifest) {
    const router = createRouter();
    const store = createStore();
    sync(store, router);

    const app = createSSRApp(App);
    app.use(router).use(store);
    app.use(Antd);

    router.push(url);
    await router.isReady();

    const to = router.currentRoute;
    const matchedRoute = to.value.matched;
    if (to.value.matched.length === 0) {
        return '';
    }

    const matchedComponents = [];
    matchedRoute.map((route) => {
        matchedComponents.push(...Object.values(route.components));
    });

    const asyncDataFuncs = matchedComponents.map((component) => {
        const asyncData = component.asyncData || null;
        if (asyncData) {
            const config = {
                store,
                route: to
            };
            return asyncData(config);
        }
    });

    await Promise.all(asyncDataFuncs);

    const context = {};
    const appHtml = await renderToString(app, context);
    const preloadLinks = context.modules ? renderPreloadLinks(context.modules, manifest) : [];
    const state = store.state;
    return { appHtml, state, preloadLinks };
}

function renderPreloadLinks(modules, manifest) {
    let links = ''
    const seen = new Set()
    modules.forEach((id) => {
        const files = manifest[id]
        if (files) {
            files.forEach((file) => {
                if (!seen.has(file)) {
                    seen.add(file)
                    links += renderPreloadLink(file)
                }
            })
        }
    })
    return links
}


function renderPreloadLink(file) {
    if (file.endsWith('.js')) {
        return `<link rel="modulepreload" crossorigin href="${file}">`
    } else if (file.endsWith('.css')) {
        return `<link rel="stylesheet" href="${file}">`
    } else if (file.endsWith('.woff')) {
        return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`
    } else if (file.endsWith('.woff2')) {
        return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`
    } else if (file.endsWith('.gif')) {
        return ` <link rel="preload" href="${file}" as="image" type="image/gif">`
    } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`
    } else if (file.endsWith('.png')) {
        return ` <link rel="preload" href="${file}" as="image" type="image/png">`
    } else {
        // TODO
        return ''
    }
}
