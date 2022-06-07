const dotenv = require('dotenv');

// 1, 编写.env文件
// 2, 通过dotenv加载配置的变量
dotenv.config();

module.exports = {
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_CHARSET,
} = process.env //应用配置信息写到环境变量