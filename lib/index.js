"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.isEmptyObj = void 0;
function isEmptyObj(Obj) {
    if (Object.keys(Obj).length === 0) {
        return true;
    }
    else
        return false;
}
exports.isEmptyObj = isEmptyObj;
function test() {
    alert("정상작동");
}
exports.test = test;
