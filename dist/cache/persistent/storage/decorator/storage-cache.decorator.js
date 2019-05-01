"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_cache_decorator_1 = require("../../../../core/decorator/base-cache.decorator");
var cache_type_enum_1 = require("../../../../core/enum/cache-type.enum");
function StorageCache(options) {
    return base_cache_decorator_1.baseCacheDecorator(cache_type_enum_1.CacheType.Storage, options);
}
exports.StorageCache = StorageCache;
