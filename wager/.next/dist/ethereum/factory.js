"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _WagerFactory = require("./build/WagerFactory.json");

var _WagerFactory2 = _interopRequireDefault(_WagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_WagerFactory2.default.interface), "0x75e456b49758eb72f6e5f327309a31e817e1f603");

exports.default = instance;