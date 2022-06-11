const md5password = require('../utils/password');

const handlePassword = async (ctx, next) => {
    const { password } = ctx.request.body;
    ctx.request.body.password = md5password(password)

    await next();
}

module.exports = {
    handlePassword
}