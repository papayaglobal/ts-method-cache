"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var memory_cache_decorator_1 = require("../../cache/memory/decorator/memory-cache.decorator");
var session_cache_decorator_1 = require("../../cache/persistent/session/decorator/session-cache.decorator");
var storage_cache_decorator_1 = require("../../cache/persistent/storage/decorator/storage-cache.decorator");
var cache_container_decorator_1 = require("../decorator/cache-container.decorator");
var promise_util_1 = require("../util/promise.util");
var method_cache_service_1 = require("./method-cache.service");
var testCacheContainer = 'testCacheContainer';
var testMemoryMethod = 'testMemoryMethod';
var testSessionMethod = 'testSessionMethod';
var testStorageMethod = 'testStorageMethod';
var TestCache = /** @class */ (function () {
    function TestCache() {
        this.testMemoryMethodCalled = 0;
        this.testSessionMethodCalled = 0;
        this.testStorageMethodCalled = 0;
    }
    TestCache.prototype.testMemoryMethod = function () {
        this.testMemoryMethodCalled++;
    };
    TestCache.prototype.testSessionMethod = function () {
        this.testSessionMethodCalled++;
    };
    TestCache.prototype.testStorageMethod = function () {
        this.testStorageMethodCalled++;
    };
    __decorate([
        memory_cache_decorator_1.MemoryCache(testMemoryMethod)
    ], TestCache.prototype, "testMemoryMethod", null);
    __decorate([
        session_cache_decorator_1.SessionCache(testSessionMethod)
    ], TestCache.prototype, "testSessionMethod", null);
    __decorate([
        storage_cache_decorator_1.StorageCache(testStorageMethod)
    ], TestCache.prototype, "testStorageMethod", null);
    TestCache = __decorate([
        cache_container_decorator_1.CacheContainer(testCacheContainer)
    ], TestCache);
    return TestCache;
}());
describe('Method cache service can clear cache', function () {
    var cacheService = new method_cache_service_1.MethodCacheService();
    var runTestMethodsExpect = function (memoryCount, sessionCount, storageCount) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testCache.testMemoryMethod();
                    testCache.testSessionMethod();
                    testCache.testStorageMethod();
                    expect(testCache.testMemoryMethodCalled).toEqual(memoryCount);
                    expect(testCache.testSessionMethodCalled).toEqual(sessionCount);
                    return [4 /*yield*/, promise_util_1.wait()];
                case 1:
                    _a.sent();
                    expect(testCache.testStorageMethodCalled).toEqual(storageCount);
                    return [4 /*yield*/, promise_util_1.wait()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    cacheService.clearAllCache();
    var testCache;
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cacheService.clearAllCache();
                    testCache = new TestCache();
                    return [4 /*yield*/, runTestMethodsExpect(1, 1, 1)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("it should just clear the memory cache", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cacheService.clearMemoryCache();
                    return [4 /*yield*/, runTestMethodsExpect(2, 1, 1)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("it should just clear the session cache", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cacheService.clearSessionCache();
                    return [4 /*yield*/, runTestMethodsExpect(1, 2, 1)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("it should just clear the storage cache", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cacheService.clearStorageCache();
                    return [4 /*yield*/, runTestMethodsExpect(1, 1, 2)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("it should clear cache of an entire container", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cacheService.clearContainer(testCacheContainer);
                    return [4 /*yield*/, runTestMethodsExpect(2, 2, 2)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("it should just clear cache of a certain method from memory", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cacheService.clearMemoryKeyCache(testMemoryMethod);
                    return [4 /*yield*/, runTestMethodsExpect(2, 1, 1)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("it should just clear cache of a certain method from session", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cacheService.clearSessionKeyCache(testSessionMethod);
                    return [4 /*yield*/, runTestMethodsExpect(1, 2, 1)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("it should just clear cache of a certain method from storage", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cacheService.clearStorageKeyCache(testStorageMethod);
                    return [4 /*yield*/, runTestMethodsExpect(1, 1, 2)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
