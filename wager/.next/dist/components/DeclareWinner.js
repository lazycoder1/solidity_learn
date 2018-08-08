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

var _jsxFileName = "/home/gautam/projects/solidity_learn/wager/components/DeclareWinner.js";


var options = [{ key: "y", text: "yes", value: "yes" }, { key: "n", text: "no", value: "no" }];

var DeclareWinner = function (_Component) {
    (0, _inherits3.default)(DeclareWinner, _Component);

    function DeclareWinner() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DeclareWinner);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DeclareWinner.__proto__ || (0, _getPrototypeOf2.default)(DeclareWinner)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            choose: "yes",
            errorMessage: "",
            loading: false
        }, _this.handleChange = function (e, _ref2) {
            var value = _ref2.value;
            return _this.setState({ choose: value });
        }, _this.onSubmit = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var eventOccured, wager, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                eventOccured = false;

                                console.log(_this.state.choose);
                                if (_this.state.choose == "yes") {
                                    eventOccured = true;
                                } else {
                                    eventOccured = false;
                                }
                                wager = (0, _wager2.default)(_this.props.address);

                                console.log(eventOccured);
                                _context.prev = 6;
                                _context.next = 9;
                                return _web2.default.eth.getAccounts();

                            case 9:
                                accounts = _context.sent;
                                _context.next = 12;
                                return wager.methods.declareWinner(eventOccured).send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei("0.0001", "ether")
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
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[6, 15]]);
            }));

            return function (_x) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DeclareWinner, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Select, {
                value: this.state.choose,
                onChange: this.handleChange,
                fluid: true,
                label: "Did the event occur ?",
                options: options,
                placeholder: "0.0001 ether will be charged",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }))), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: "Oops!",
                content: this.state.errorMessage,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, "Declare"));
        }
    }]);

    return DeclareWinner;
}(_react.Component);

exports.default = DeclareWinner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGVjbGFyZVdpbm5lci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJCdXR0b24iLCJDYXJkIiwiSW1hZ2UiLCJXYWdlciIsIndlYjMiLCJSb3V0ZXIiLCJvcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwiRGVjbGFyZVdpbm5lciIsInN0YXRlIiwiY2hvb3NlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsImhhbmRsZUNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV2ZW50T2NjdXJlZCIsImNvbnNvbGUiLCJsb2ciLCJ3YWdlciIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZGVjbGFyZVdpbm5lciIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUyxBQUFRLEFBQU07O0FBQzdDLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0FBRXZCLElBQU0sVUFBVSxDQUNaLEVBQUUsS0FBRixBQUFPLEtBQUssTUFBWixBQUFrQixPQUFPLE9BRGIsQUFDWixBQUFnQyxTQUNoQyxFQUFFLEtBQUYsQUFBTyxLQUFLLE1BQVosQUFBa0IsTUFBTSxPQUY1QixBQUFnQixBQUVaLEFBQStCOztJLEFBRzdCOzs7Ozs7Ozs7Ozs7Ozs7OE5BQ0YsQTtvQkFBUSxBQUNJLEFBQ1I7MEJBRkksQUFFVSxBQUNkO3FCQUhJLEFBR0ssQTtBQUhMLEFBQ0osaUJBS0osQSxlQUFlLFVBQUEsQUFBQyxVQUFEO2dCQUFBLEFBQU0sY0FBTixBQUFNO21CQUFZLE1BQUEsQUFBSyxTQUFTLEVBQUUsUUFBbEMsQUFBa0IsQUFBYyxBQUFVO0EsaUJBRXpELEE7aUdBQVcsaUJBQUEsQUFBTSxPQUFOO3lDQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFDRjtBQUZHLCtDQUFBLEFBRVksQUFDbkI7O3dDQUFBLEFBQVEsSUFBSSxNQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7b0NBQUksTUFBQSxBQUFLLE1BQUwsQUFBVyxVQUFmLEFBQXlCLE9BQU8sQUFDNUI7bURBQUEsQUFBZSxBQUNsQjtBQUZELHVDQUVPLEFBQ0g7bURBQUEsQUFBZSxBQUNsQjtBQUNLO0FBVEMsd0NBU08scUJBQU0sTUFBQSxBQUFLLE1BVGxCLEFBU08sQUFBaUIsQUFDL0I7O3dDQUFBLEFBQVEsSUFWRCxBQVVQLEFBQVk7Z0RBVkw7Z0RBQUE7dUNBWW9CLGNBQUEsQUFBSyxJQVp6QixBQVlvQixBQUFTOztpQ0FBMUI7QUFaSCxvREFBQTtnREFBQTs2Q0FhRyxBQUFNLFFBQU4sQUFBYyxjQUFkLEFBQTRCLGNBQTVCLEFBQTBDOzBDQUN0QyxTQUQyQyxBQUMzQyxBQUFTLEFBQ2Y7MkNBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFVBZnpCLEFBYUcsQUFBK0MsQUFFMUMsQUFBMkI7QUFGZSxBQUNqRCxpQ0FERTs7aUNBSU47K0NBQUEsQUFBTywwQkFBd0IsTUFBQSxBQUFLLE1BakJqQyxBQWlCSCxBQUEwQztnREFqQnZDO0FBQUE7O2lDQUFBO2dEQUFBO2dFQW1CSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQW5CM0IsQUFtQkgsQUFBYyxBQUFvQjs7aUNBbkIvQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQXVCRixBQUNMO21DQUNJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLDZDQUNJLEFBQUMsc0JBQUQsQUFBTTt1QkFDSyxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUsS0FGZCxBQUVtQixBQUNmO3VCQUhKLEFBSUk7dUJBSkosQUFJVSxBQUNOO3lCQUxKLEFBS2EsQUFDVDs2QkFOSixBQU1nQjs7OEJBTmhCO2dDQUhaLEFBQ0ksQUFDSSxBQUNJLEFBV1I7QUFYUTtBQUNJLGtDQVVaLEFBQUM7dUJBQUQsQUFFSTt3QkFGSixBQUVXLEFBQ1A7eUJBQVMsS0FBQSxBQUFLLE1BSGxCLEFBR3dCOzs4QkFIeEI7Z0NBZEosQUFjSSxBQUtBO0FBTEE7QUFDSSxnQ0FJSixBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7OEJBQXBDO2dDQUFBO0FBQUE7ZUFwQlIsQUFDSSxBQW1CSSxBQUtYOzs7OztBQTFEdUIsQSxBQTZENUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiRGVjbGFyZVdpbm5lci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9nYXV0YW0vcHJvamVjdHMvc29saWRpdHlfbGVhcm4vd2FnZXIifQ==