const app = require('./app/index');
require('./app/database');

const config = require('./app/config');

app.listen(config.APP_PORT, () => {
    console.log('服务器启动成功', config.APP_PORT);
});