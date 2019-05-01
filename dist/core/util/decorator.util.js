"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var method_cache_provider_resolver_1 = require("../resolver/method-cache-provider.resolver");
var string_util_1 = require("./string.util");
function createCacheDecorator(type, target, method, options) {
    var provider = method_cache_provider_resolver_1.getMethodCacheProvider(type);
    var cacheObject = provider.getCacheObject(options.key) || provider.createCacheObject(options);
    var container = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var argsString = JSON.stringify(args);
        if (container === null) {
            container = method_cache_provider_resolver_1.getCacheContainer(target.constructor);
            if (container) {
                provider.addToContainer(container, cacheObject);
            }
        }
        if (!cacheObject.hasCache(argsString) || cacheObject.isExpired(argsString)) {
            var res = method.call.apply(method, [this].concat(args));
            provider.setCache(options, argsString, res);
            var isPromise = !!res && "function" === typeof res.then;
            if (isPromise && options.cacheUntilRejected) {
                res.catch(function (e) { return cacheObject.clearArgs(argsString); });
            }
        }
        return cacheObject.getCache(argsString);
    };
}
exports.createCacheDecorator = createCacheDecorator;
function createCacheContainerDecorator(options) {
    return function (target) {
        method_cache_provider_resolver_1.setCacheContainer(target, options);
        return target;
    };
}
exports.createCacheContainerDecorator = createCacheContainerDecorator;
function normalizeCacheSettings(options) {
    if (typeof options === 'string') {
        options = { key: options };
    }
    else if (!options) {
        options = { key: '' };
    }
    if (!options.key) {
        options.key = string_util_1.createGUID();
    }
    return options;
}
exports.normalizeCacheSettings = normalizeCacheSettings;
function normalizeCacheContainerSettings(options) {
    return normalizeCacheSettings(options);
}
exports.normalizeCacheContainerSettings = normalizeCacheContainerSettings;
