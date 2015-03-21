"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var promise = _interopRequire(require("../"));

promise(function (arg, callback) {
  console.log("arg", arg, "callback", callback);
  callback(undefined, "arg1", "arg2");
}, "an arg").then(function (value) {
  return console.log("value", value);
}, function (error) {
  return console.log("error", error);
});

promise(function (arg, callback) {
  console.log("arg", arg, "callback", callback);
  callback("error", "arg1", "arg2");
}, "an arg").then(function (value) {
  return console.log("value", value);
}, function (error) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return console.log.apply(console, ["error", error].concat(rest));
});
//# sourceMappingURL=../tests/index.js.map