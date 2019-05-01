"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("../../");
var storage_keys_constant_1 = require("../../core/constant/storage-keys.constant");
var cache_type_enum_1 = require("../../core/enum/cache-type.enum");
var promise_util_1 = require("../../core/util/promise.util");
var persistent_storage_1 = require("./persistent-storage");
var session_cache_provider_1 = require("./session/provider/session-cache.provider");
var storage_cache_provider_1 = require("./storage/provider/storage-cache.provider");
describe('Persistent cache provider', function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    var checkCache;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                checkCache = function (provider, key) { return __awaiter(_this, void 0, void 0, function () {
                    var containerKey, cacheModel, containerModel;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                containerKey = "cacheContainer" + key;
                                provider.setCache({ key: key, returnType: _1.CacheReturnType.Static }, '[]', 'test');
                                provider.addToContainer({ key: containerKey }, provider.getCacheObject(key));
                                return [4 /*yield*/, promise_util_1.wait()];
                            case 1:
                                _a.sent();
                                provider['restoreCacheObjects']();
                                cacheModel = provider['storage'].getStorageItems(storage_keys_constant_1.LocalStorageCacheKey).find(function (item) { return item.options.key === key; });
                                containerModel = provider['storage'].getContainerItems(storage_keys_constant_1.LocalStorageContainerKey).find(function (item) { return item.options.key === containerKey; });
                                expect(cacheModel.items['[]']).toEqual('test');
                                expect(cacheModel.options.key).toEqual(key);
                                expect(cacheModel.options.returnType).toEqual(_1.CacheReturnType.Static);
                                expect(containerModel.cacheObjects.find(function (item) { return item === key; })).toEqual(key);
                                return [2 /*return*/];
                        }
                    });
                }); };
                return [4 /*yield*/, it('should store in the appropriate storage', function () { return __awaiter(_this, void 0, void 0, function () {
                        var now, sessionCache, storageCache;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    now = Date.now();
                                    sessionCache = new session_cache_provider_1.SessionCacheProvider();
                                    storageCache = new storage_cache_provider_1.StorageCacheProvider();
                                    return [4 /*yield*/, Promise.all([
                                            checkCache(sessionCache, "T" + now),
                                            checkCache(storageCache, "T" + (now + 10))
                                        ])];
                                case 1:
                                    _a.sent();
                                    sessionCache['storage'] = new persistent_storage_1.PersistentStorage(cache_type_enum_1.CacheType.Memory);
                                    sessionCache['restoreCacheObjects']();
                                    return [4 /*yield*/, checkCache(sessionCache, "T" + (now + 20))];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
