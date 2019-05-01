"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../../");
var memory_cache_provider_1 = require("../../cache/memory/provider/memory-cache.provider");
var session_cache_provider_1 = require("../../cache/persistent/session/provider/session-cache.provider");
var storage_cache_provider_1 = require("../../cache/persistent/storage/provider/storage-cache.provider");
var cache_type_enum_1 = require("../enum/cache-type.enum");
var method_cache_provider_resolver_1 = require("./method-cache-provider.resolver");
describe('Method cache provider resolver', function () {
    var memoryProvider = method_cache_provider_resolver_1.getMethodCacheProvider(cache_type_enum_1.CacheType.Memory);
    var sessionProvider = method_cache_provider_resolver_1.getMethodCacheProvider(cache_type_enum_1.CacheType.Session);
    var storageProvider = method_cache_provider_resolver_1.getMethodCacheProvider(cache_type_enum_1.CacheType.Storage);
    it('should create a memory cache provider', function () {
        expect(memoryProvider instanceof memory_cache_provider_1.MemoryCacheProvider).toBeTruthy();
    });
    it('should create a session cache provider', function () {
        expect(sessionProvider instanceof session_cache_provider_1.SessionCacheProvider).toBeTruthy();
    });
    it('should create a storage cache provider', function () {
        expect(storageProvider instanceof storage_cache_provider_1.StorageCacheProvider).toBeTruthy();
    });
    it('should only create one provider singleton per type', function () {
        expect(memoryProvider).toEqual(method_cache_provider_resolver_1.getMethodCacheProvider(cache_type_enum_1.CacheType.Memory));
        expect(sessionProvider).toEqual(method_cache_provider_resolver_1.getMethodCacheProvider(cache_type_enum_1.CacheType.Session));
        expect(storageProvider).toEqual(method_cache_provider_resolver_1.getMethodCacheProvider(cache_type_enum_1.CacheType.Storage));
    });
    it('should throw when multiple containers have the same name', function () {
        expect(function () {
            var Container1 = /** @class */ (function () {
                function Container1() {
                }
                Container1 = __decorate([
                    _1.CacheContainer('testSameName')
                ], Container1);
                return Container1;
            }());
            var Container2 = /** @class */ (function () {
                function Container2() {
                }
                Container2 = __decorate([
                    _1.CacheContainer('testSameName')
                ], Container2);
                return Container2;
            }());
        }).toThrowError();
    });
});
