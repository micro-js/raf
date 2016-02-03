
# raf

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Request animation frame (polyfilled if it doesn&#x27;t exist)

## Installation

    $ npm install @f/raf

## Usage

```js
var raf = require('@f/raf')

raf(function () {
  element.scrollIntoView()
})
```

## API

### raf(fn)

- `fn` - The function to be executed on the next animation frame

**Returns:** An integer id. Pass this to `raf.cancel(id)` if you want to cancel the frame before it happens.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/raf.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/raf
[git-image]: https://img.shields.io/github/tag/micro-js/raf.svg
[git-url]: https://github.com/micro-js/raf
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/raf.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/raf
