# ampelog

Simple, pretty, traffic-light logger

ampelog is an incredably lightweight traffic-light pattern logger, only a single, 7-element object in memory.

## Example

```js
ampelog=require('ampelog');

ampelog.err('This is an error');
ampelog.inf('The process ran succesfully');
ampelog.wrn('You forgot to brush your teeth.');
```

## Commands
### inf
Prints green, bold INF: next to the output. It's intended use is successful processes.

### wrn
Prints yellow, bold `WRN:` next to the output. It's intended use is non-fatal errors and warnings.

### err
Prints red, bold `ERR:` next to the output. It's intended use is fatal errors.

