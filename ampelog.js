"use strict";
exports.__esModule = true;
exports.inf = exports.err = exports.wrn = void 0;
var ast = require('ampelstatus');
function wrn(out) {
    process.stderr.write(ast.wrn + out);
}
exports.wrn = wrn;
;
function err(out) {
    process.stderr.write(err + out);
}
exports.err = err;
;
function inf(out) {
    process.stderr.write(ast.inf + out);
}
exports.inf = inf;
;
