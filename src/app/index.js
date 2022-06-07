const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const userRouter = require('../router/user.router');

// 基于koa创建app
const app = new Koa();

app.use(bodyParser());
// 注册用户路由router
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

module.exports = app;