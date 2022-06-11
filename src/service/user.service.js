const connection = require('../app/database');

// 操作数据库的service
class UserService {
    // 注册用户
    async create(user) {
        const { name, password } = user;
        const statement = `INSERT INTO user (name, password) VALUES (?, ?);`;
        const result = await connection.execute(statement, [name, password]);

        return result;
    }
    // 获取用户
    async getUsers() {
        const statement = `SELECT * FROM user WHERE name IS NOT NULL;`;
        const result = await connection.execute(statement);
        
        return result[0];
    }
}

module.exports = new UserService();