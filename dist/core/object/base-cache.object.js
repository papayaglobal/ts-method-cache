"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cache_return_type_enum_1 = require("../enum/cache-return-type.enum");
var BaseCacheObject = /** @class */ (function () {
    function BaseCacheObject(options) {
        this.options = options;
        this.items = {};
        this.ttl = {};
    }
    Object.defineProperty(BaseCacheObject.prototype, "key", {
        get: function () {
            return this.options.key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCacheObject.prototype, "returnType", {
        get: function () {
            return this.options.returnType || cache_return_type_enum_1.CacheReturnType.Static;
        },
        enumerable: true,
        configurable: true
    });
    BaseCacheObject.prototype.clear = function () {
        var _this = this;
        Object.keys(this.items).forEach(function (args) { return _this.clearArgs(args); });
    };
    BaseCacheObject.prototype.clearArgs = function (args) {
        delete this.items[args];
        delete this.ttl[args];
    };
    BaseCacheObject.prototype.getCache = function (args) {
        return this.items[args];
    };
    BaseCacheObject.prototype.hasCache = function (args) {
        return this.items.hasOwnProperty(args);
    };
    BaseCacheObject.prototype.inheritContainerOptions = function (options) {
        if (!this.options.returnType) {
            this.options.returnType = options.returnType;
        }
        if (!this.options.ttl) {
            this.options.ttl = options.ttl;
        }
        if (!this.options.cacheUntilRejected) {
            this.options.cacheUntilRejected = options.cacheUntilRejected;
        }
    };
    BaseCacheObject.prototype.isExpired = function (args) {
        return this.ttl.hasOwnProperty(args) && this.ttl[args] < Date.now();
    };
    BaseCacheObject.prototype.setCache = function (args, cache) {
        this.items[args] = cache;
        this.setArgsTtl(args);
    };
    BaseCacheObject.prototype.getTtlFromOptions = function () {
        var ttl = this.options.ttl;
        if (typeof ttl === 'string' && ttl.length > 0) {
            return new Date(ttl).getTime() + new Date().getMilliseconds();
        }
        if (typeof ttl === 'number' && ttl > 0) {
            return Date.now() + 1000 * ttl;
        }
        if (ttl instanceof Date) {
            return ttl.getTime();
        }
    };
    BaseCacheObject.prototype.setArgsTtl = function (args) {
        var ttl = this.getTtlFromOptions();
        if (ttl) {
            this.ttl[args] = ttl;
        }
    };
    return BaseCacheObject;
}());
exports.BaseCacheObject = BaseCacheObject;
