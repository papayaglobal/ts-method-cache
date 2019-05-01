"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var method_cache_provider_resolver_1 = require("../resolver/method-cache-provider.resolver");
var cache_container_decorator_1 = require("./cache-container.decorator");
describe('Cache container decorator is properly set', function () {
    var key = 'test';
    var TestCache = /** @class */ (function () {
        function TestCache() {
        }
        TestCache = __decorate([
            cache_container_decorator_1.CacheContainer(key)
        ], TestCache);
        return TestCache;
    }());
    it("should have a cache container options where the key equals the passed key", function () {
        var options = method_cache_provider_resolver_1.getCacheContainer(TestCache);
        expect(options.key).toEqual(key);
    });
});
