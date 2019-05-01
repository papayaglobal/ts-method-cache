"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cache_type_enum_1 = require("../enum/cache-type.enum");
var method_cache_provider_resolver_1 = require("../resolver/method-cache-provider.resolver");
var MethodCacheService = /** @class */ (function () {
    function MethodCacheService() {
    }
    MethodCacheService.prototype.clearAllCache = function () {
        this.clearMemoryCache();
        this.clearStorageCache();
        this.clearSessionCache();
    };
    MethodCacheService.prototype.clearContainer = function (container) {
        this.clearMemoryContainer(container);
        this.clearSessionContainer(container);
        this.clearStorageContainer(container);
    };
    MethodCacheService.prototype.clearMemoryCache = function () {
        this.clearCache(cache_type_enum_1.CacheType.Memory);
    };
    MethodCacheService.prototype.clearMemoryContainer = function (container) {
        this.clearContainerType(cache_type_enum_1.CacheType.Memory, container);
    };
    MethodCacheService.prototype.clearMemoryKeyCache = function (key) {
        this.clearKeyCache(cache_type_enum_1.CacheType.Memory, key);
    };
    MethodCacheService.prototype.clearSessionCache = function () {
        this.clearCache(cache_type_enum_1.CacheType.Session);
    };
    MethodCacheService.prototype.clearSessionContainer = function (container) {
        this.clearContainerType(cache_type_enum_1.CacheType.Session, container);
    };
    MethodCacheService.prototype.clearSessionKeyCache = function (key) {
        this.clearKeyCache(cache_type_enum_1.CacheType.Session, key);
    };
    MethodCacheService.prototype.clearStorageCache = function () {
        this.clearCache(cache_type_enum_1.CacheType.Storage);
    };
    MethodCacheService.prototype.clearStorageContainer = function (container) {
        this.clearContainerType(cache_type_enum_1.CacheType.Storage, container);
    };
    MethodCacheService.prototype.clearStorageKeyCache = function (key) {
        this.clearKeyCache(cache_type_enum_1.CacheType.Storage, key);
    };
    MethodCacheService.prototype.clearCache = function (type) {
        method_cache_provider_resolver_1.getMethodCacheProvider(type).clearCache();
    };
    MethodCacheService.prototype.clearContainerType = function (type, container) {
        method_cache_provider_resolver_1.getMethodCacheProvider(type).clearKeyContainer(container);
    };
    MethodCacheService.prototype.clearKeyCache = function (type, key) {
        method_cache_provider_resolver_1.getMethodCacheProvider(type).clearKeyCache(key);
    };
    return MethodCacheService;
}());
exports.MethodCacheService = MethodCacheService;
