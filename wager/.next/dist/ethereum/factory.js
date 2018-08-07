"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _WagerFactory = require("./build/WagerFactory.json");

var _WagerFactory2 = _interopRequireDefault(_WagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_WagerFactory2.default.interface), "0x08833c7d475b21f784f0ca5bf5fc7e23ce0bb7bb");

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIldhZ2VyRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUF5QixBQUF6Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNiLEtBQUssQUFBTCxNQUFXLHVCQUFhLEFBQXhCLEFBRGEsWUFFYixBQUZhLEFBQWpCLEFBS0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9nYXV0YW0vcHJvamVjdHMvc29saWRpdHlfbGVhcm4vd2FnZXIifQ==