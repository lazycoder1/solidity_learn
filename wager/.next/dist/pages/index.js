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

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/gautam/projects/solidity_learn/wager/pages/index.js?entry";


var WagerIndex = function (_Component) {
    (0, _inherits3.default)(WagerIndex, _Component);

    function WagerIndex() {
        (0, _classCallCheck3.default)(this, WagerIndex);

        return (0, _possibleConstructorReturn3.default)(this, (WagerIndex.__proto__ || (0, _getPrototypeOf2.default)(WagerIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(WagerIndex, [{
        key: "renderWagers",
        value: function renderWagers() {
            var items = this.props.wagers.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: "/wagers/" + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }, _react2.default.createElement("a", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    }, "View Wager")),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, "Open Wagers"), _react2.default.createElement(_routes.Link, { route: "/wagers/new", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement("a", { className: "item", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: "right",
                content: "Create Wager",
                icon: "add",
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }))), this.renderWagers()));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var wagers;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getAllCampaigns().call();

                            case 2:
                                wagers = _context.sent;
                                return _context.abrupt("return", { wagers: wagers });

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return WagerIndex;
}(_react.Component);

exports.default = WagerIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiV2FnZXJJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJ3YWdlcnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlcldhZ2VycyIsIm1ldGhvZHMiLCJnZXRBbGxDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O3VDQU9hLEFBQ1g7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLElBQUksbUJBQVcsQUFDM0M7OzRCQUFPLEFBQ0ssQUFDUjtpREFDSSxBQUFDLDhCQUFLLG9CQUFOLEFBQXdCO3NDQUF4Qjt3Q0FBQSxBQUNJO0FBREo7cUJBQUEsa0JBQ0ksY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHVCQUpMLEFBR0MsQUFDSSxBQUdSOzJCQVBKLEFBQU8sQUFPSSxBQUVkO0FBVFUsQUFDSDtBQUZSLEFBQWMsQUFZZCxhQVpjOztpREFZUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUdGLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsZ0NBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsT0FBRyxXQUFILEFBQWE7OEJBQWI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7eUJBQUQsQUFDWSxBQUNSO3lCQUZKLEFBRVksQUFDUjtzQkFISixBQUdTLEFBQ0w7eUJBSkosQUFJYTs7OEJBSmI7Z0NBSlosQUFFSSxBQUNJLEFBQ0ksQUFTUDtBQVRPO0FBQ0ksdUJBUHhCLEFBQ0ksQUFDSSxBQWFLLEFBQUssQUFJckI7Ozs7Ozs7Ozs7Ozt1Q0F6Q3dCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixrQkFBaEIsQUFBa0MsQTs7aUNBQWpEO0E7aUVBRUMsRUFBRSxRQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKVSxBLEFBOEN6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9nYXV0YW0vcHJvamVjdHMvc29saWRpdHlfbGVhcm4vd2FnZXIifQ==