# next-tree-search
> Tree search methods for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-tree-search
```

## apis
| api    | params                    | description         |
| ------ | ------------------------- | ------------------- |
| find   | (data, callback, options) | Find one element.   |
| filter | (data, callback, options) | Find list elements. |

## usage
```js
import NxTreeSearch from '@jswork/next-tree-search';

NxTreeSearch.find(data, (index, item)=>{});
NxTreeSearch.filter(data, (index, item)=>{});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-tree-search/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-tree-search
[version-url]: https://npmjs.org/package/@jswork/next-tree-search

[license-image]: https://img.shields.io/npm/l/@jswork/next-tree-search
[license-url]: https://github.com/afeiship/next-tree-search/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-tree-search
[size-url]: https://github.com/afeiship/next-tree-search/blob/master/dist/next-tree-search.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-tree-search
[download-url]: https://www.npmjs.com/package/@jswork/next-tree-search
