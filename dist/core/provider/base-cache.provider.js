"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cache_container_object_1 = require("../object/cache-container.object");
var BaseCacheProvider = /** @class */ (function () {
    function BaseCacheProvider() {
        this.cache = [];
        this.containers = [];
    }
    BaseCacheProvider.prototype.addToContainer = function (options, cacheObject) {
        var container = this.getCacheContainer(options.key) || this.initiateCacheContainer(options);
        container.addCache(cacheObject);
    };
    BaseCacheProvider.prototype.clearCache = function () {
        this.cache.forEach(function (cache) { return cache.clear(); });
        this.clearContainers();
    };
    BaseCacheProvider.prototype.clearContainer = function (container) {
        container.clear(this.cacheType);
    };
    BaseCacheProvider.prototype.clearContainers = function () {
        var _this = this;
        this.containers.forEach(function (container) { return _this.clearContainer(container); });
    };
    BaseCacheProvider.prototype.clearKeyCache = function (key) {
        var cacheObject = this.getCacheObject(key);
        cacheObject && cacheObject.clear();
    };
    BaseCacheProvider.prototype.clearKeyContainer = function (containerKey) {
        var container = this.getCacheContainer(containerKey);
        container && this.clearContainer(container);
    };
    BaseCacheProvider.prototype.createCacheObject = function (options) {
        return this.getCacheObject(options.key) || this.initiateCacheObject(options);
    };
    BaseCacheProvider.prototype.getCacheObject = function (key) {
        return this.cache.find(function (cache) { return cache.key === key; });
    };
    BaseCacheProvider.prototype.setCache = function (options, args, cache) {
        this.createCacheObject(options).setCache(args, cache);
    };
    BaseCacheProvider.prototype.getCacheContainer = function (containerKey) {
        return this.containers.filter(function (container) { return container.key === containerKey; })[0];
    };
    BaseCacheProvider.prototype.initiateCacheObject = function (options) {
        var cacheObject = new this.cacheObjectType(options);
        this.cache.push(cacheObject);
        return cacheObject;
    };
    BaseCacheProvider.prototype.initiateCacheContainer = function (options) {
        var container = new cache_container_object_1.CacheContainerObject(options);
        this.containers.push(container);
        return container;
    };
    return BaseCacheProvider;
}());
exports.BaseCacheProvider = BaseCacheProvider;
