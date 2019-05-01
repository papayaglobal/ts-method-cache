"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var memory_cache_object_1 = require("../../cache/memory/object/memory-cache.object");
var cache_container_object_1 = require("./cache-container.object");
describe('Cache Container Object', function () {
    var key = 'key';
    var args = 'args';
    var value = 'value';
    var container;
    var cache;
    beforeEach(function () {
        container = new cache_container_object_1.CacheContainerObject({ key: key });
        cache = new memory_cache_object_1.MemoryCacheObject({});
        container.addCache(cache);
    });
    it('should set the options key correctly', function () {
        expect(container.key).toEqual(key);
    });
    it('should contain the added cache object', function () {
        expect(container.cacheObjects.length).toEqual(1);
    });
    it('should not add doubles', function () {
        container.addCache(cache);
        expect(container.cacheObjects.length).toEqual(1);
    });
    it('should clear the contained cache objects', function () {
        cache.setCache(args, value);
        expect(cache.getCache(args)).toEqual(value);
        container.clear();
        expect(cache.hasCache(args)).toBeFalsy();
    });
});
