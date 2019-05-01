"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cache_type_enum_1 = require("../../../core/enum/cache-type.enum");
var base_cache_object_1 = require("../../../core/object/base-cache.object");
var MemoryCacheObject = /** @class */ (function (_super) {
    __extends(MemoryCacheObject, _super);
    function MemoryCacheObject(options) {
        var _this = _super.call(this, options) || this;
        _this.cacheType = cache_type_enum_1.CacheType.Memory;
        return _this;
    }
    return MemoryCacheObject;
}(base_cache_object_1.BaseCacheObject));
exports.MemoryCacheObject = MemoryCacheObject;
