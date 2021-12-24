"use strict";
exports.__esModule = true;
exports.inf = exports.error = exports.wrn = exports.str = exports.status = void 0;
var status;
(function (status) {
    status[status["nil"] = 0] = "nil";
    status[status["inf"] = 1] = "inf";
    status[status["wrn"] = 2] = "wrn";
    status[status["error"] = 3] = "error";
})(status = exports.status || (exports.status = {}));
exports.str = {
    inf: "\x1B[1;32mINF\x1B[0m: ",
    wrn: "\x1B[1;93mWRN\x1B[0m: ",
    err: "\x1B[1;31mERR\x1B[0m: "
};
function wrn(s) {
    console.error(exports.str.wrn + s);
}
exports.wrn = wrn;
;
function error(s) {
    console.error(exports.str.err + s);
}
exports.error = error;
;
function inf(s) {
    console.error(exports.str.inf + s);
}
exports.inf = inf;
;
