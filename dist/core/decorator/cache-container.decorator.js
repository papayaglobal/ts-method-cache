"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var decorator_util_1 = require("../util/decorator.util");
function CacheContainer(options) {
    options = decorator_util_1.normalizeCacheContainerSettings(options);
    return decorator_util_1.createCacheContainerDecorator(options);
}
exports.CacheContainer = CacheContainer;
