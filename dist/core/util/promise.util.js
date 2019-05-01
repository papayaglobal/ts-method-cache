"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wait(time) {
    if (time === void 0) { time = 0; }
    return new Promise(function (resolve) { return setTimeout(resolve, time); });
}
exports.wait = wait;
