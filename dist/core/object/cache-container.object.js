"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CacheContainerObject = /** @class */ (function () {
    function CacheContainerObject(options) {
        this.options = options;
        this.cacheObjects = [];
    }
    Object.defineProperty(CacheContainerObject.prototype, "key", {
        get: function () {
            return this.options.key;
        },
        enumerable: true,
        configurable: true
    });
    CacheContainerObject.prototype.addCache = function (cacheObject) {
        if (this.cacheObjects.indexOf(cacheObject) === -1) {
            this.cacheObjects.push(cacheObject);
            cacheObject.inheritContainerOptions(this.options);
        }
    };
    CacheContainerObject.prototype.clear = function (cacheType) {
        this.cacheObjects.filter(function (cache) { return !cacheType || cache.cacheType === cacheType; }).forEach(function (cache) { return cache.clear(); });
    };
    return CacheContainerObject;
}());
exports.CacheContainerObject = CacheContainerObject;
