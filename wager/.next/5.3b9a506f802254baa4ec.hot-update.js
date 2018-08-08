webpackHotUpdate(5,{

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(436);

var _wager = __webpack_require__(528);

var _wager2 = _interopRequireDefault(_wager);

var _web = __webpack_require__(475);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(527);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/gautam/projects/solidity_learn/wager/components/DeclareWinner.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/gautam/projects/solidity_learn/wager/components/DeclareWinner.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zYjlhNTA2ZjgwMjI1NGJhYTRlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZWNsYXJlV2lubmVyLmpzPzM4YzkwMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIEJ1dHRvbiwgQ2FyZCwgSW1hZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBXYWdlciBmcm9tIFwiLi4vZXRoZXJldW0vd2FnZXJcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5cbmNvbnN0IG9wdGlvbnMgPSBbXG4gICAgeyBrZXk6IFwieVwiLCB0ZXh0OiBcInllc1wiLCB2YWx1ZTogXCJ5ZXNcIiB9LFxuICAgIHsga2V5OiBcIm5cIiwgdGV4dDogXCJub1wiLCB2YWx1ZTogXCJub1wiIH1cbl07XG5cbmNsYXNzIERlY2xhcmVXaW5uZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjaG9vc2U6IFwieWVzXCIsXG4gICAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUsIHsgdmFsdWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNob29zZTogdmFsdWUgfSk7XG5cbiAgICBvblN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGV2ZW50T2NjdXJlZCA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNob29zZSk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNob29zZSA9PSBcInllc1wiKSB7XG4gICAgICAgICAgICBldmVudE9jY3VyZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRPY2N1cmVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2FnZXIgPSBXYWdlcih0aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudE9jY3VyZWQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgYXdhaXQgd2FnZXIubWV0aG9kcy5kZWNsYXJlV2lubmVyKGV2ZW50T2NjdXJlZCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHdlYjMudXRpbHMudG9XZWkoXCIwLjAwMDFcIiwgXCJldGhlclwiKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvd2FnZXJzLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2hvb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlkIHRoZSBldmVudCBvY2N1ciA/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wMDAxIGV0aGVyIHdpbGwgYmUgY2hhcmdlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiT29wcyFcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgICBEZWNsYXJlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNsYXJlV2lubmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9EZWNsYXJlV2lubmVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTs7QUFGQTtBQUtBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBVEE7QUFDQTtBQVNBO0FBVkE7QUFBQTtBQVlBO0FBQ0E7QUFEQTtBQVpBO0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQWpCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBbUJBO0FBQ0E7QUFEQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBTkE7QUFXQTtBQVhBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFLQTs7Ozs7OztBQUdBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=