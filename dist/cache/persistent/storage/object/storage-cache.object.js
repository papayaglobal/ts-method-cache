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
var cache_type_enum_1 = require("../../../../core/enum/cache-type.enum");
var persistent_cache_object_1 = require("../../persistent-cache.object");
var StorageCacheObject = /** @class */ (function (_super) {
    __extends(StorageCacheObject, _super);
    function StorageCacheObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cacheType = cache_type_enum_1.CacheType.Storage;
        return _this;
    }
    return StorageCacheObject;
}(persistent_cache_object_1.PersistentCacheObject));
exports.StorageCacheObject = StorageCacheObject;
