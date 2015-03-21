"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var promise = _interopRequire(require("../"));

promise(function (arg, callback) {
  console.log("arg", arg, "callback", callback);
  callback(undefined, "arg1");
}, "an arg").then(function (value) {
  return console.log("value", value);
}, function (error) {
  return console.log("error", error);
});