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
var cache_type_enum_1 = require("../enum/cache-type.enum");
var base_cache_decorator_1 = require("./base-cache.decorator");
var increment = 5;
var TestCache = /** @class */ (function () {
    function TestCache() {
        this.called = 0;
        this.getterCalled = 0;
    }
    Object.defineProperty(TestCache.prototype, "testGetter", {
        get: function () {
            this.getterCalled++;
            return 'testGetter';
        },
        enumerable: true,
        configurable: true
    });
    TestCache.prototype.testMethod = function (test, decrement) {
        if (test === void 0) { test = 0; }
        if (decrement === void 0) { decrement = 0; }
        this.called++;
        return test + increment - decrement;
    };
    __decorate([
        base_cache_decorator_1.baseCacheDecorator(cache_type_enum_1.CacheType.Memory)
    ], TestCache.prototype, "testGetter", null);
    __decorate([
        base_cache_decorator_1.baseCacheDecorator(cache_type_enum_1.CacheType.Memory)
    ], TestCache.prototype, "testMethod", null);
    return TestCache;
}());
describe('Cache decorator is properly set', function () {
    var testCache = new TestCache();
    it("should only call the test method once per argument(s)", function () {
        testCache.testMethod();
        testCache.testMethod();
        testCache.testMethod(1);
        testCache.testMethod(1);
        testCache.testMethod(1, 1);
        testCache.testMethod(1, 1);
        expect(testCache.called).toEqual(3);
    });
    it("should work for a getter", function () {
        testCache.testGetter;
        testCache.testGetter;
        expect(testCache.getterCalled).toEqual(1);
    });
    it("should not work for a setter", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () {
                        var TestSetter = /** @class */ (function () {
                            function TestSetter() {
                            }
                            Object.defineProperty(TestSetter.prototype, "setter", {
                                set: function (set) {
                                    this._setter = set;
                                },
                                enumerable: true,
                                configurable: true
                            });
                            __decorate([
                                base_cache_decorator_1.baseCacheDecorator(cache_type_enum_1.CacheType.Memory)
                            ], TestSetter.prototype, "setter", null);
                            return TestSetter;
                        }());
                        new TestSetter();
                    }).toThrowError("Can't set cache decorator on a setter")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should return the right value for the right argument(s)", function () {
        var value1 = 5;
        var value2 = 10;
        var noCache1 = testCache.testMethod(value1);
        var cache1 = testCache.testMethod(value1);
        var noCache2 = testCache.testMethod(value2);
        var cache2 = testCache.testMethod(value2);
        var noCache3 = testCache.testMethod(value1, value2);
        var cache3 = testCache.testMethod(value1, value2);
        expect(noCache1).toEqual(cache1);
        expect(noCache1).toEqual(value1 + increment);
        expect(noCache2).toEqual(cache2);
        expect(noCache2).toEqual(value2 + increment);
        expect(noCache3).toEqual(cache3);
        expect(noCache3).toEqual(value1 + increment - value2);
    });
});
