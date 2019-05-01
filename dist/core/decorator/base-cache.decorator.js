"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var decorator_util_1 = require("../util/decorator.util");
function baseCacheDecorator(cacheType, options) {
    options = decorator_util_1.normalizeCacheSettings(options);
    return function (target, method, descriptor) {
        if (descriptor.hasOwnProperty('get') && descriptor.get) {
            descriptor.get = decorator_util_1.createCacheDecorator(cacheType, target, descriptor.get, options);
        }
        else if (!descriptor.hasOwnProperty('set') && descriptor.value) {
            descriptor.value = decorator_util_1.createCacheDecorator(cacheType, target, descriptor.value, options);
        }
        else {
            throw new Error("Can't set cache decorator on a setter");
        }
        return descriptor;
    };
}
exports.baseCacheDecorator = baseCacheDecorator;
