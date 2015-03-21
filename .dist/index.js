"use strict";

module.exports = function promise(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return new Promise(function (resolve, reject) {
    fn.apply(undefined, args.concat([function (error) {
      for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      if (error) reject({ error: error, args: rest });else resolve(rest.length === 1 ? rest[0] : rest);
    }]));
  });
};
//# sourceMappingURL=index.js.map