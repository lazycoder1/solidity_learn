"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _wager = require("../../ethereum/wager");

var _wager2 = _interopRequireDefault(_wager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/gautam/projects/solidity_learn/wager/pages/wagers/show.js?entry";


var WagerShow = function (_Component) {
    (0, _inherits3.default)(WagerShow, _Component);

    function WagerShow() {
        (0, _classCallCheck3.default)(this, WagerShow);

        return (0, _possibleConstructorReturn3.default)(this, (WagerShow.__proto__ || (0, _getPrototypeOf2.default)(WagerShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(WagerShow, [{
        key: "render",
        value: function render() {
            console.log();
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, "Wager Show"));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var wager, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                wager = (0, _wager2.default)(props.query.address);
                                _context.next = 3;
                                return wager.methods.getDetails().call();

                            case 3:
                                summary = _context.sent;

                                console.log(summary);

                                return _context.abrupt("return", {});

                            case 6:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return WagerShow;
}(_react.Component);

exports.default = WagerShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dhZ2Vycy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiV2FnZXIiLCJXYWdlclNob3ciLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJ3YWdlciIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXREZXRhaWxzIiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7Ozs7Ozs7O0ksQUFFWjs7Ozs7Ozs7Ozs7aUNBV08sQUFDTDtvQkFBQSxBQUFRLEFBQ1I7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGUixBQUNJLEFBQ0ksQUFHWDs7Ozs7aUhBakI0QixBOzs7OztpQ0FDbkI7QSx3Q0FBUSxxQkFBTSxNQUFBLEFBQU0sTUFBWixBQUFrQixBOzt1Q0FFVixNQUFBLEFBQU0sUUFBTixBQUFjLGFBQWQsQUFBMkIsQTs7aUNBQTNDO0EsbURBRU47O3dDQUFBLEFBQVEsSUFBUixBQUFZOztpRUFFTCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUlMsQSxBQXFCeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9nYXV0YW0vcHJvamVjdHMvc29saWRpdHlfbGVhcm4vd2FnZXIifQ==