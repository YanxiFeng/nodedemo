// 基于koa创建app
const app = require('./app/index');
// 连接数据库
require('./app/database');

// 应用配置信息
const config = require('./app/config');

// 启动服务器
app.listen(config.APP_PORT, () => {
    console.log('服务器启动成功', config.APP_PORT);
});