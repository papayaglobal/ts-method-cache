"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var string_util_1 = require("./string.util");
describe('String Util', function () {
    describe('GUID generator, createGuide', function () {
        var guid = string_util_1.createGUID();
        it('generates a string of 36 characters', function () {
            expect(guid.length).toBe(36);
        });
        it('generates a string which has a dash at position [8], [13], [18] and [23]', function () {
            expect(guid[8]).toBe('-');
            expect(guid[13]).toBe('-');
            expect(guid[18]).toBe('-');
            expect(guid[23]).toBe('-');
        });
        it('generates a string that has the character \'4\' at position [14]', function () {
            expect(guid[14]).toBe('4');
        });
        it('generates a string that only consists of lowercase hexadecimal characters, without the dashes', function () {
            expect(/^[0-9a-f]{32}$/.test(guid.replace(/-/g, ''))).toBeTruthy();
        });
        it('it generates two different strings', function () {
            expect(guid !== string_util_1.createGUID()).toBeTruthy();
        });
    });
});
