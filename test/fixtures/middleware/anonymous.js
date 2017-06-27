'use strict';


module.exports = () => {
    return function (ctx, next) {
        await next()
    }
}
