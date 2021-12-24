# `3.0.0`
* Wrapped `ampelog-node`, `ampelog-deno` & `ampelstatus` into `ampelog-js`, basing
  `ampelog-js` on `ampelog-node`.
* used `console.err` to print to `stdout` on both node & deno instead of the previous
  platform-specific functions before.
