const Router = require('koa-router');

const homeRouter = new Router();

homeRouter.get('/', ctx => {
    ctx.response.body = "首页"
});

module.exports = homeRouter;