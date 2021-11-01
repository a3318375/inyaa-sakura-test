const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const staticPath = require('koa-static');

const app = new Koa();
const resolve = (p) => path.resolve(__dirname, p);

let template = fs.readFileSync(resolve('./dist/client/index.html'), 'utf-8');
const manifest = require('./dist/client/ssr-manifest.json');
const {Logger} = require("./src/utils/logger");
const render = require('./dist/server/entry-server.js').render;

app.use(staticPath(resolve('./dist/client'), {index: false}));

app.use(async (ctx, next) => {
    const url = ctx.req.url;
    try {
        const {appHtml, state, preloadLinks} = await render(url, manifest);
        ``
        Logger.info(url)
        // 新加 + 将服务端预取数据的store，插入html模板文件
        let title = state.postInfo.title;
        let keyword = state.postInfo.title;
        let desc = state.postInfo.summary;
        if (!title) {
            title = '瑶瑶的梦中小屋'
        }
        if (!keyword) {
            keyword = '瑶瑶的梦中小屋'
        }
        if (!desc) {
            desc = '瑶瑶的梦中小屋,一个个人兴趣小站'
        }
        const html = template
            .replace('<!--meta-title-->', title)
            .replace('<!--meta-keywords-->', '<meta name="keywords" content="' + keyword + '" />')
            .replace('<!--meta-description-->', '<meta name="description" content="' + desc + '" />')
            .replace(`<!--preload-links-->`, preloadLinks)
            .replace(`<!--app-html-->`, appHtml)
            .replace(`'<!--vuex-state-->'`, JSON.stringify(state))
        ctx.body = html;
    } catch (error) {
        console.log(error);
        next();
    }
});

app.listen(5000, () => {
    console.log('http://localhost:5000');
});
