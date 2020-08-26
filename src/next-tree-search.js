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
