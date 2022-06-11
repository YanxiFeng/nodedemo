const service = require('../service/user.service');

// 处理函数的控制器controller
class UserController {
    // 用户注册
    async createDiner(ctx, next) {
        // 获取传过来的参数
        const user = ctx.request.body;

        // 查询数据库
        const result = await service.create(user);

        // 返回数据
        ctx.response.body = result;
    }

    // 获取用户信息
    async getDiner(ctx, next) {
        ctx.response.body = "<h1>用户页面!</h1>"
    }
}

module.exports = new UserController();