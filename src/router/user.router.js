const Router = require('koa-router');

const {
    createDiner,
    getDiner
} = require('../controller/user.controller');

const {
    handlePassword
} = require('../middleware/user.middleware')

const userRouter = new Router({prefix: '/users'});

userRouter.post('/', handlePassword, createDiner);
userRouter.get('/', getDiner);

module.exports = userRouter;