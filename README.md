# defaults-deep [![NPM version](https://badge.fury.io/js/defaults-deep.svg)](http://badge.fury.io/js/defaults-deep)

> Like `extend` but recursively copies only the missing properties/values to the target object.

## Related

 - [object.defaults](https://github.com/jonschlinkert/object.defaults)
 - [object.filter](https://github.com/jonschlinkert/object.filter)
 - [object.map](https://github.com/jonschlinkert/object.map)
 - [object.mixin](https://github.com/jonschlinkert/object.mixin)
 - [object.omit](https://github.com/jonschlinkert/object.omit)
 - [object.pick](https://github.com/jonschlinkert/object.pick)
 - [object.reduce](https://github.com/jonschlinkert/object.reduce)


## Usage

```js
var defaults = require('defaults-deep');

defaults({a: {one: 'one'}}, {a: {two: 'two'}})
//=> {a: {one: 'one', two: 'two'}};
```

## Install
#### Install with [npm](npmjs.org)

```bash
npm i defaults-deep --save
```
#### Install with [bower](https://github.com/bower/bower)

```bash
bower install defaults-deep --save
```

## Run tests

```bash
npm test
```

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on October 12, 2014._