import { Context } from 'koishi-core';

module.exports.name = 'plugin-ddnet';

module.exports.apply = (ctx: Context) => {
    ctx.on('message', session => {
        session.send('123');
    });
};
