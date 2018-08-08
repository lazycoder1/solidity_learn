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

var _semanticUiReact = require("semantic-ui-react");

var _wager = require("../ethereum/wager");

var _wager2 = _interopRequireDefault(_wager);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/gautam/projects/solidity_learn/wager/components/WagerForm.js";


var options = [{ key: "y", text: "back", value: "back" }, { key: "n", text: "lay", value: "lay" }];

var WagerForm = function (_Component) {
    (0, _inherits3.default)(WagerForm, _Component);

    function WagerForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, WagerForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WagerForm.__proto__ || (0, _getPrototypeOf2.default)(WagerForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: "",
            side: "back",
            errorMessage: "",
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var participate, wager, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                participate = false;

                                console.log(_this.state.side);
                                if (_this.state.side == "back") {
                                    participate = true;
                                } else {
                                    participate = false;
                                }
                                wager = (0, _wager2.default)(_this.props.address);

                                _this.setState({ loading: true, errorMessage: "" });

                                _context.prev = 6;
                                _context.next = 9;
                                return _web2.default.eth.getAccounts();

                            case 9:
                                accounts = _context.sent;
                                _context.next = 12;
                                return wager.methods.participate(participate).send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, "ether")
                                });

                            case 12:
                                _routes.Router.replaceRoute("/wagers/" + _this.props.address);
                                _context.next = 18;
                                break;

                            case 15:
                                _context.prev = 15;
                                _context.t0 = _context["catch"](6);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 18:

                                _this.setState({ loading: false, value: "" });

                            case 19:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[6, 15]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.handleChange = function (e, _ref3) {
            var value = _ref3.value;
            return _this.setState({ side: value });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(WagerForm, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, "Amount to Contribute"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                label: "ether",
                labelPosition: "right",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Select, {
                value: this.state.side,
                onChange: this.handleChange,
                fluid: true,
                label: "Side",
                options: options,
                placeholder: "Side",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }))), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: "Oops!",
                content: this.state.errorMessage,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, "Bet"));
        }
    }]);

    return WagerForm;
}(_react.Component);

exports.default = WagerForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvV2FnZXJGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhcmQiLCJJbWFnZSIsIldhZ2VyIiwid2ViMyIsIlJvdXRlciIsIm9wdGlvbnMiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJXYWdlckZvcm0iLCJzdGF0ZSIsInNpZGUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhdGUiLCJjb25zb2xlIiwibG9nIiwid2FnZXIiLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUyxBQUFRLEFBQU07O0FBQzdDLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0FBRXZCLElBQU0sVUFBVSxDQUNaLEVBQUUsS0FBRixBQUFPLEtBQUssTUFBWixBQUFrQixRQUFRLE9BRGQsQUFDWixBQUFpQyxVQUNqQyxFQUFFLEtBQUYsQUFBTyxLQUFLLE1BQVosQUFBa0IsT0FBTyxPQUY3QixBQUFnQixBQUVaLEFBQWdDOztJLEFBRzlCOzs7Ozs7Ozs7Ozs7Ozs7c04sQUFDRjttQkFBUSxBQUNHLEFBQ1A7a0JBRkksQUFFRSxBQUNOOzBCQUhJLEFBR1UsQUFDZDtxQkFKSSxBQUlLLEE7QUFKTCxBQUNKLGlCLEFBTUo7aUdBQVcsaUJBQUEsQUFBTSxPQUFOO3dDQUFB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