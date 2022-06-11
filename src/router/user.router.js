const Router = require('koa-router');

const {
    createDiner,
    getDiner
} = require('../controller/user.controller');

const userRouter = new Router({prefix: '/users'});

userRouter.post('/', createDiner);
userRouter.get('/', getDiner);

module.exports = userRouter;