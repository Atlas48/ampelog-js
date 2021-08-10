var ast = require('ampelstatus');
export function wrn(out:string):void {
  process.stderr.write(ast.wrn+out);
};
export function err(out:string):void {
  process.stderr.write(err+out);
};
export function inf(out:string):void {
  process.stderr.write(ast.inf+out);
};
