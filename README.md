# flip-args.js

Flip arguments of function

## Usage

```js
var flip = require('flip')

var testFunc = (a1, a2) => a1 - a2;

var flipTestFunc = flip(testFunc);

console.log(flipTestFunc(2, 3) == testFunc(3, 2)); // true
```