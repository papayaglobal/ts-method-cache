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
var persistent_cache_provider_1 = require("../../persistent-cache.provider");
var persistent_storage_1 = require("../../persistent-storage");
var session_cache_object_1 = require("../object/session-cache.object");
var SessionCacheProvider = /** @class */ (function (_super) {
    __extends(SessionCacheProvider, _super);
    function SessionCacheProvider() {
        var _this = _super.call(this) || this;
        _this.cache = [];
        _this.cacheObjectType = session_cache_object_1.SessionCacheObject;
        _this.cacheType = cache_type_enum_1.CacheType.Session;
        _this.storage = new persistent_storage_1.PersistentStorage(_this.cacheType);
        _this.restoreCacheObjects();
        return _this;
    }
    return SessionCacheProvider;
}(persistent_cache_provider_1.PersistentCacheProvider));
exports.SessionCacheProvider = SessionCacheProvider;
