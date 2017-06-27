"use strict";

module.exports = {
    thisMustBeingFoundByMeddleware: () => {
        return async (ctx, next) {
            res.locals.selfWasCalled = true
            await next(null)
        };
    },
    run: function () {
        for (var p in this) {
            console.log(p)
        }
        return this.thisMustBeingFoundByMeddleware()
    }
};
