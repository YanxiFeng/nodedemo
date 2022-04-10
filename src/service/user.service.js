class UserService {
    async create(user) {
        console.log('-----user----',user);
        return "用户创建成功";
    }
}

module.exports = new UserService();