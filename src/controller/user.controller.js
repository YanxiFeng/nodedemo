const service = require('../service/user.service');

// 处理函数的控制器controller
class UserController {
    async create(ctx, next) {
        // 获取传过来的参数
        const user = {name: "yvan1", password: '123456'};

        // 查询数据库
        const result = await service.create(user);

        // 返回数据
        ctx.body = result;
    }
}

module.exports = new UserController();