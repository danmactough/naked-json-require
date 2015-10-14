module.exports = function nakedJsonRequire (filename) {
  "use strict";
  var ctx = {};
  require.extensions['.json'](ctx, filename);
  return ctx.exports;
};
