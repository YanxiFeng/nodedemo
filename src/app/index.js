const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');

const homeRouter = require('../router/home.router')
const userRouter = require('../router/user.router');

// 基于koa创建app
const app = new Koa();

app.use(bodyParser());
// 加载静态页面
app.use(serve(__dirname));

// 首页路由
app.use(homeRouter.routes());
// 注册用户路由router
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

module.exports = app;