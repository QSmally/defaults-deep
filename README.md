
# defaults-deep

> Like `extend` but recursively copies only the missing properties/values to the target object.

Originally created by Jon Schlinkert. I do not take any credit for their work.

## Installation

Install with [NPM](https://www.npmjs.com/).
```sh
$ npm i QSmally/defaults-deep
```

## Usage

```js
const defaults = require("defaults-deep");
defaults({a: {one: 'one'}}, {a: {two: 'two'}});
//=> {a: {one: 'one', two: 'two'}};
```
