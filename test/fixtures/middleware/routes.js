'use strict'



exports.routeA = () => {
    return async(ctx, next) => {
        ctx.res.locals.routeA = true
        await next()
    }
}


exports.routeB = () => {
    return async(ctx, next) => {
        ctx.res.locals.routeB = true
        await next()
    }
}


exports.routeC = () => {
    return async(ctx, next) {
        ctx.res.locals.routeC = true
        await next()
    }
}

exports.routeD = () => {
    return async(ctx, next) {
        ctx.res.locals.routeD = true
        await next()
    }
}
