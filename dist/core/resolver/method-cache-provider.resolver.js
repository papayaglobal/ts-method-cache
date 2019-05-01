"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var memory_cache_provider_1 = require("../../cache/memory/provider/memory-cache.provider");
var session_cache_provider_1 = require("../../cache/persistent/session/provider/session-cache.provider");
var storage_cache_provider_1 = require("../../cache/persistent/storage/provider/storage-cache.provider");
var cache_type_enum_1 = require("../enum/cache-type.enum");
var cacheProviders = new Map([
    [cache_type_enum_1.CacheType.Memory, new memory_cache_provider_1.MemoryCacheProvider()],
    [cache_type_enum_1.CacheType.Session, new session_cache_provider_1.SessionCacheProvider()],
    [cache_type_enum_1.CacheType.Storage, new storage_cache_provider_1.StorageCacheProvider()]
]);
var containers = new Map();
function getMethodCacheProvider(type) {
    return cacheProviders.get(type);
}
exports.getMethodCacheProvider = getMethodCacheProvider;
function setCacheContainer(container, options) {
    containers.forEach(function (testContainer) {
        if (testContainer.key === options.key) {
            throw new Error("Cache container with name " + options.key + " already exists");
        }
    });
    containers.set(container, options);
}
exports.setCacheContainer = setCacheContainer;
function getCacheContainer(container) {
    return containers.get(container);
}
exports.getCacheContainer = getCacheContainer;
