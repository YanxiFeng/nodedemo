const service = require('../service/user.service');

class UserController {
    async create(ctx, next) {
        // 获取传过来的参数
        const user = {name: "yvan", password: '123456'};

        // 查询数据库
        const result = await service.create(user);

        // 返回数据
        ctx.body = result;
    }
}

module.exports = new UserController();