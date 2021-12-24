interface ast {
  readonly inf: string
  readonly wrn: string
  readonly err: string
}
export enum status { nil,inf,wrn,error }
export var str:ast = {
 inf: "\x1B[1;32mINF\x1B[0m: ",
 wrn: "\x1B[1;93mWRN\x1B[0m: ",
 err: "\x1B[1;31mERR\x1B[0m: "
}
export function wrn(s:string):void {
  console.error(str.wrn+s);
};
export function error(s:string):void {
  console.error(str.err+s);
};
export function inf(s:string):void {
  console.error(str.inf+s);
};
