/*!
 * name: @feizheng/next-tree-search
 * description: Tree search methods for next.
 * homepage: https://github.com/afeiship/next-tree-search
 * version: 1.0.0
 * date: 2020-08-26T09:55:57.235Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nxTraverse = nx.traverse || require('@feizheng/next-traverse');
  var DEFAULT_OPTIONS = { itemsKey: 'children', inject: false };

  var NxTreeSearch = nx.declare('nx.TreeSearch', {
    statics: {
      find: function (inData, inCallback, inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        var target;
        nxTraverse(
          inData,
          function (_, item) {
            if (inCallback.apply(null, arguments)) {
              target = item;
              return nx.BREAKER;
            }
          },
          options
        );
        return target;
      },
      filter: function (inData, inCallback, inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        var target = [];
        nxTraverse(
          inData,
          function (_, item) {
            if (inCallback.apply(null, arguments)) {
              target.push(item);
            }
          },
          options
        );
        return target;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxTreeSearch;
  }
})();
