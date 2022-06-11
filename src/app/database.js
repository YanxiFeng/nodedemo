const mysql = require('mysql2');

const config = require('./config');

// 创建数据库连接池
const pool = mysql.createPool({
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    database: config.MYSQL_DATABASE,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    charset:config.MYSQL_CHARSET
});

// 数据库连接
pool.getConnection((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log('数据库连接失败:', err);
    } else {
      console.log('数据库连接成功');
    }
  });
});

module.exports = pool.promise();

