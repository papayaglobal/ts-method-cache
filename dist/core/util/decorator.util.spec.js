"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var decorator_util_1 = require("./decorator.util");
describe('Decorators Util', function () {
    describe('Proper CacheSetting normalization, normalizeCacheSettings', function () {
        var key = 'key';
        it('should make the options object always to have a key set', function () {
            var options = decorator_util_1.normalizeCacheSettings({});
            expect(options && options.key && options.key.length).toBeGreaterThan(0);
        });
        it('should make the options have the same key as passed as a string', function () {
            var options = decorator_util_1.normalizeCacheSettings(key);
            expect(options && options.key).toEqual(key);
        });
        it('should make the options have the same key as passed as a object', function () {
            var options = decorator_util_1.normalizeCacheSettings({ key: key });
            expect(options && options.key).toEqual(key);
        });
    });
});
