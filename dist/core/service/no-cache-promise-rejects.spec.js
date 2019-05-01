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
var method_cache_service_1 = require("./method-cache.service");
var msg = "error msg";
var err = function () { return new Error(msg); };
var returnValue = "return value";
var Target = /** @class */ (function () {
    function Target() {
        this.nonThrowingCalled = 0;
        this.throwingCalled = 0;
        this.asyncNonThrowingCalled = 0;
        this.asyncThrowingCalled = 0;
        this.asyncNonThrowingNoCacheCalled = 0;
        this.asyncThrowingNoCacheCalled = 0;
        this.nonImmediateAsyncThrowingNoCacheCalled = 0;
        this.rejects = [];
    }
    Target.prototype.nonThrowingMethod = function () {
        this.nonThrowingCalled++;
        return returnValue;
    };
    Target.prototype.throwingMethod = function () {
        this.throwingCalled++;
        throw err();
    };
    Target.prototype.asyncNonThrowingMethod = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.asyncNonThrowingCalled++;
                return [2 /*return*/, returnValue];
            });
        });
    };
    Target.prototype.asyncThrowingMethod = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.asyncThrowingCalled++;
                throw err();
            });
        });
    };
    Target.prototype.asyncNonThrowingNoCacheMethod = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.asyncNonThrowingNoCacheCalled++;
                return [2 /*return*/, returnValue];
            });
        });
    };
    Target.prototype.asyncThrowingNoCacheMethod = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.asyncThrowingNoCacheCalled++;
                throw err();
            });
        });
    };
    Target.prototype.nonImmediateAsyncThrowingNoCacheMethod = function () {
        var _this = this;
        this.nonImmediateAsyncThrowingNoCacheCalled++;
        return new Promise(function (resolve, reject) { return _this.rejects.push(reject); });
    };
    __decorate([
        memory_cache_decorator_1.MemoryCache()
    ], Target.prototype, "nonThrowingMethod", null);
    __decorate([
        memory_cache_decorator_1.MemoryCache()
    ], Target.prototype, "throwingMethod", null);
    __decorate([
        memory_cache_decorator_1.MemoryCache()
    ], Target.prototype, "asyncNonThrowingMethod", null);
    __decorate([
        memory_cache_decorator_1.MemoryCache()
    ], Target.prototype, "asyncThrowingMethod", null);
    __decorate([
        memory_cache_decorator_1.MemoryCache({ cacheUntilRejected: true })
    ], Target.prototype, "asyncNonThrowingNoCacheMethod", null);
    __decorate([
        memory_cache_decorator_1.MemoryCache({ cacheUntilRejected: true })
    ], Target.prototype, "asyncThrowingNoCacheMethod", null);
    __decorate([
        memory_cache_decorator_1.MemoryCache({ cacheUntilRejected: true })
    ], Target.prototype, "nonImmediateAsyncThrowingNoCacheMethod", null);
    return Target;
}());
describe("Method cache clears on promise reject", function () {
    var cacheService = new method_cache_service_1.MethodCacheService();
    var runMethods = function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, e_1, _b, e_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    expect(target.nonThrowingMethod()).toEqual(returnValue);
                    expect(function () { return target.throwingMethod(); }).toThrowError(msg);
                    _a = expect;
                    return [4 /*yield*/, target.asyncNonThrowingMethod()];
                case 1:
                    _a.apply(void 0, [_c.sent()]).toEqual(returnValue);
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, target.asyncThrowingMethod()];
                case 3:
                    _c.sent();
                    fail();
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _c.sent();
                    expect(e_1).toEqual(err());
                    return [3 /*break*/, 5];
                case 5:
                    _b = expect;
                    return [4 /*yield*/, target.asyncNonThrowingNoCacheMethod()];
                case 6:
                    _b.apply(void 0, [_c.sent()]).toEqual(returnValue);
                    _c.label = 7;
                case 7:
                    _c.trys.push([7, 9, , 10]);
                    return [4 /*yield*/, target.asyncThrowingNoCacheMethod()];
                case 8:
                    _c.sent();
                    fail();
                    return [3 /*break*/, 10];
                case 9:
                    e_2 = _c.sent();
                    expect(e_2).toEqual(err());
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    }); };
    var target;
    it("should re-call throwing methods", function () { return __awaiter(_this, void 0, void 0, function () {
        var i, promises, e_3, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cacheService.clearAllCache();
                    target = new Target();
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 5)) return [3 /*break*/, 4];
                    return [4 /*yield*/, runMethods()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    expect([
                        target.nonThrowingCalled,
                        target.throwingCalled,
                        target.asyncNonThrowingCalled,
                        target.asyncThrowingCalled,
                        target.asyncNonThrowingNoCacheCalled,
                        target.asyncThrowingNoCacheCalled
                    ]).toEqual([1, 5, 1, 1, 1, 5]);
                    cacheService.clearAllCache();
                    promises = [];
                    promises.push(target.nonImmediateAsyncThrowingNoCacheMethod());
                    promises.push(target.nonImmediateAsyncThrowingNoCacheMethod());
                    promises.push(target.nonImmediateAsyncThrowingNoCacheMethod());
                    expect(target.nonImmediateAsyncThrowingNoCacheCalled).toEqual(1);
                    target.rejects.forEach(function (reject) { return reject(msg); });
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, Promise.all(promises)];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 7:
                    e_3 = _a.sent();
                    expect(e_3).toEqual(msg);
                    return [3 /*break*/, 8];
                case 8:
                    promises = [];
                    promises.push(target.nonImmediateAsyncThrowingNoCacheMethod());
                    promises.push(target.nonImmediateAsyncThrowingNoCacheMethod());
                    promises.push(target.nonImmediateAsyncThrowingNoCacheMethod());
                    expect(target.nonImmediateAsyncThrowingNoCacheCalled).toEqual(2);
                    target.rejects.forEach(function (reject) { return reject(msg); });
                    _a.label = 9;
                case 9:
                    _a.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, Promise.all(promises)];
                case 10:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 11:
                    e_4 = _a.sent();
                    expect(e_4).toEqual(msg);
                    return [3 /*break*/, 12];
                case 12: return [2 /*return*/];
            }
        });
    }); });
});
