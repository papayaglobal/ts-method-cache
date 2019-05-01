"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var memory_cache_object_1 = require("../../cache/memory/object/memory-cache.object");
var session_cache_object_1 = require("../../cache/persistent/session/object/session-cache.object");
var cache_return_type_enum_1 = require("../enum/cache-return-type.enum");
describe('Cache Object', function () {
    var key = 'key';
    var args = 'args';
    var cache = 'cache';
    var ttl = 50;
    describe('default', function () {
        var cacheObject = new memory_cache_object_1.MemoryCacheObject({ key: key });
        it('should have cache after set', function () {
            cacheObject.setCache(args, cache);
            expect(cacheObject.hasCache(args)).toBeTruthy();
        });
        it('should have the same cache as set', function () {
            expect(cacheObject.getCache(args)).toEqual(cache);
        });
        it('should have no cache after clear', function () {
            cacheObject.setCache(args, cache);
            cacheObject.clearArgs(args);
            expect(cacheObject.hasCache(args)).toBeFalsy();
            cacheObject.setCache(args, cache);
            cacheObject.clear();
            expect(cacheObject.hasCache(args)).toBeFalsy();
        });
        it('should not be expired', function () {
            cacheObject.setCache(args, cache);
            expect(cacheObject.isExpired(args)).toBeFalsy();
        });
    });
    describe('TTL', function () {
        describe('using seconds', function () {
            var cacheObject = new memory_cache_object_1.MemoryCacheObject({ key: key, ttl: ttl / 1000 });
            beforeEach(function () {
                cacheObject.setCache(args, cache);
            });
            it('should not be expired', function () {
                expect(cacheObject.isExpired(args)).toBeFalsy();
            });
            it('should be expired', function (done) {
                setTimeout(function () {
                    expect(cacheObject.isExpired(args)).toBeTruthy();
                    done();
                }, ttl + 1);
            });
        });
        describe('using date object', function () {
            var cacheObject;
            beforeEach(function () {
                cacheObject = new memory_cache_object_1.MemoryCacheObject({ key: key, ttl: new Date(Date.now() + ttl) });
                cacheObject.setCache(args, cache);
            });
            it('should not be expired', function () {
                expect(cacheObject.isExpired(args)).toBeFalsy();
            });
            it('should be expired', function (done) {
                setTimeout(function () {
                    expect(cacheObject.isExpired(args)).toBeTruthy();
                    done();
                }, ttl + 1);
            });
        });
        describe('using date string', function () {
            var timestamp = Date.now() + ttl;
            var cacheObject;
            beforeEach(function () {
                timestamp = Date.now() + ttl;
                var dateString = new Date(timestamp).toLocaleString();
                cacheObject = new memory_cache_object_1.MemoryCacheObject({ key: key, ttl: dateString });
                cacheObject.setCache(args, cache);
            });
            it('should have close to the same timestamp as the date string given', function () {
                expect(cacheObject['ttl'][args] - timestamp).toBeLessThan(2000);
            });
            it('should not be expired', function () {
                expect(cacheObject.isExpired(args)).toBeFalsy();
            });
            it('should be expired', function (done) {
                setTimeout(function () {
                    expect(cacheObject.isExpired(args)).toBeTruthy();
                    done();
                }, ttl + 1);
            });
        });
    });
    describe('inherit Cache Container Options', function () {
        var options = {
            key: key,
            returnType: cache_return_type_enum_1.CacheReturnType.Promise,
            ttl: ttl
        };
        it('should inherit the returnType', function () {
            var cacheObject = new memory_cache_object_1.MemoryCacheObject({ key: key });
            cacheObject.inheritContainerOptions(options);
            expect(cacheObject.options.returnType).toEqual(cache_return_type_enum_1.CacheReturnType.Promise);
        });
        it('should inherit the ttl', function () {
            var cacheObject = new memory_cache_object_1.MemoryCacheObject({ key: key });
            cacheObject.inheritContainerOptions(options);
            expect(cacheObject.options.ttl).toEqual(ttl);
        });
        it('should not override the returnType', function () {
            var cacheObject = new session_cache_object_1.SessionCacheObject({ key: key, returnType: cache_return_type_enum_1.CacheReturnType.Promise });
            cacheObject.inheritContainerOptions(options);
            expect(cacheObject.options.returnType).toEqual(cache_return_type_enum_1.CacheReturnType.Promise);
        });
        it('should not override the ttl', function () {
            var cacheObject = new memory_cache_object_1.MemoryCacheObject({ key: key, ttl: ttl * 10 });
            cacheObject.inheritContainerOptions(options);
            expect(cacheObject.options.ttl).toEqual(ttl * 10);
        });
    });
});
