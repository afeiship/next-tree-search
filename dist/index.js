/*!
 * name: @jswork/next-tree-search
 * description: Tree search methods for next.
 * homepage: https://github.com/afeiship/next-tree-search
 * version: 1.0.0
 * date: 2020-11-20 13:39:45
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxTraverse = nx.traverse || require('@jswork/next-traverse');
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
