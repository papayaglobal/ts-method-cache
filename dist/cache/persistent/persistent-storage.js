"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var storage_keys_constant_1 = require("../../core/constant/storage-keys.constant");
var cache_type_enum_1 = require("../../core/enum/cache-type.enum");
var PersistentStorage = /** @class */ (function () {
    function PersistentStorage(cacheType) {
        this.cacheType = cacheType;
        this.cache = {};
        if (cacheType === cache_type_enum_1.CacheType.Session && typeof sessionStorage !== 'undefined') {
            this.storage = sessionStorage;
        }
        else if (cacheType === cache_type_enum_1.CacheType.Storage && typeof localStorage !== 'undefined') {
            this.storage = localStorage;
        }
    }
    PersistentStorage.prototype.getStorageItems = function () {
        return this.getItem(storage_keys_constant_1.LocalStorageCacheKey) || [];
    };
    PersistentStorage.prototype.setStorageItems = function (items) {
        this.setItem(storage_keys_constant_1.LocalStorageCacheKey, items);
    };
    PersistentStorage.prototype.getContainerItems = function () {
        return this.getItem(storage_keys_constant_1.LocalStorageContainerKey) || [];
    };
    PersistentStorage.prototype.setContainerItems = function (items) {
        this.setItem(storage_keys_constant_1.LocalStorageContainerKey, items);
    };
    PersistentStorage.prototype.setItem = function (key, data) {
        if (this.storage) {
            this.storage.setItem(key, JSON.stringify(data));
        }
        else {
            this.cache[key] = data;
        }
    };
    PersistentStorage.prototype.getItem = function (key) {
        if (this.storage) {
            return JSON.parse(this.storage.getItem(key));
        }
        else {
            return this.cache[key];
        }
    };
    return PersistentStorage;
}());
exports.PersistentStorage = PersistentStorage;
