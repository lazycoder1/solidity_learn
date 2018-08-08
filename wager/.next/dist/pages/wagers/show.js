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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _wager = require("../../ethereum/wager");

var _wager2 = _interopRequireDefault(_wager);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _WagerForm = require("../../components/WagerForm");

var _WagerForm2 = _interopRequireDefault(_WagerForm);

var _DeclareWinner = require("../../components/DeclareWinner");

var _DeclareWinner2 = _interopRequireDefault(_DeclareWinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/gautam/projects/solidity_learn/wager/pages/wagers/show.js?entry";


var WagerShow = function (_Component) {
    (0, _inherits3.default)(WagerShow, _Component);

    function WagerShow() {
        (0, _classCallCheck3.default)(this, WagerShow);

        return (0, _possibleConstructorReturn3.default)(this, (WagerShow.__proto__ || (0, _getPrototypeOf2.default)(WagerShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(WagerShow, [{
        key: "renderDescCard",
        value: function renderDescCard() {
            var _props = this.props,
                description = _props.description,
                end = _props.end;

            var status = "Its over";
            if (!end) {
                status = "On Going";
            }
            var item = [{
                header: description,
                meta: "desc",
                description: "What is this wager about ?"
            }, {
                header: status,
                meta: "status",
                description: "Has the wager ended ?"
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: item, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            });
        }
    }, {
        key: "renderCards",
        value: function renderCards() {
            var _props2 = this.props,
                description = _props2.description,
                bet_admin = _props2.bet_admin,
                balance = _props2.balance,
                willOccurList = _props2.willOccurList,
                willNotOccurList = _props2.willNotOccurList;

            var items = [{
                header: bet_admin,
                meta: "Address of Manager",
                description: "The Manager who created this wager and call the winning side!",
                style: { overflowWrap: "break-word" }
            }, {
                header: _web2.default.utils.fromWei(String(balance * 0.95), "ether"),
                meta: "Wager balance(ether)",
                description: "Total pool"
            }, {
                header: willOccurList.length,
                meta: "No of backs",
                description: "No of people backing the claim"
            }, {
                header: willNotOccurList.length,
                meta: "No of lays",
                description: "No of people laying the claim"
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            console.log("test");
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, "Wager Show"), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, this.renderDescCard(), this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement(_WagerForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }))), _react2.default.createElement(_DeclareWinner2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }));
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

                                return _context.abrupt("return", {
                                    address: props.query.address,
                                    description: summary[0],
                                    bet_admin: summary[1],
                                    balance: summary[2],
                                    willOccurList: summary[3],
                                    willNotOccurList: summary[4],
                                    end: summary[5]
                                });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dhZ2Vycy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJMYXlvdXQiLCJXYWdlciIsIndlYjMiLCJXYWdlckZvcm0iLCJEZWNsYXJlV2lubmVyIiwiV2FnZXJTaG93IiwicHJvcHMiLCJkZXNjcmlwdGlvbiIsImVuZCIsInN0YXR1cyIsIml0ZW0iLCJoZWFkZXIiLCJtZXRhIiwiYmV0X2FkbWluIiwiYmFsYW5jZSIsIndpbGxPY2N1ckxpc3QiLCJ3aWxsTm90T2NjdXJMaXN0IiwiaXRlbXMiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsIlN0cmluZyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJEZXNjQ2FyZCIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsIndhZ2VyIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0RGV0YWlscyIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFtQjs7Ozs7Ozs7O0ksQUFFcEI7Ozs7Ozs7Ozs7O3lDQW1CZTt5QkFDZ0IsS0FEaEIsQUFDcUI7Z0JBRHJCLEFBQ0wscUJBREssQUFDTDtnQkFESyxBQUNRLGFBRFIsQUFDUSxBQUNyQjs7Z0JBQUksU0FBSixBQUFhLEFBQ2I7Z0JBQUksQ0FBSixBQUFLLEtBQUssQUFDTjt5QkFBQSxBQUFTLEFBQ1o7QUFDRDtnQkFBTTt3QkFDRixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQUpLLEFBQ1QsQUFHaUI7QUFIakIsQUFDSSxhQUZLO3dCQU1ULEFBQ1ksQUFDUjtzQkFGSixBQUVVLEFBQ047NkJBVFIsQUFBYSxBQU1ULEFBR2lCLEFBR3JCO0FBTkksQUFDSTtpREFLRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O3NDQUdHOzBCQU9OLEtBUE0sQUFPRDtnQkFQQyxBQUVOLHNCQUZNLEFBRU47Z0JBRk0sQUFHTixvQkFITSxBQUdOO2dCQUhNLEFBSU4sa0JBSk0sQUFJTjtnQkFKTSxBQUtOLHdCQUxNLEFBS047Z0JBTE0sQUFNTiwyQkFOTSxBQU1OLEFBR0o7O2dCQUFNO3dCQUNGLEFBQ1ksQUFDUjtzQkFGSixBQUVVLEFBQ047NkJBSEosQUFJUSxBQUNKO3VCQUFPLEVBQUUsY0FOSCxBQUNWLEFBS1csQUFBZ0I7QUFMM0IsQUFDSSxhQUZNO3dCQVNFLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxPQUFPLFVBQTFCLEFBQW1CLEFBQWlCLE9BRGhELEFBQ1ksQUFBMkMsQUFDbkQ7c0JBRkosQUFFVSxBQUNOOzZCQVhNLEFBUVYsQUFHaUI7QUFIakIsQUFDSTt3QkFLUSxjQURaLEFBQzBCLEFBQ3RCO3NCQUZKLEFBRVUsQUFDTjs2QkFoQk0sQUFhVixBQUdpQjtBQUhqQixBQUNJO3dCQUtRLGlCQURaLEFBQzZCLEFBQ3pCO3NCQUZKLEFBRVUsQUFDTjs2QkFyQlIsQUFBYyxBQWtCVixBQUdpQixBQUlyQjtBQVBJLEFBQ0k7O2lEQU1ELEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0YsQUFDTDtvQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLCtCQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0s7QUFETDtvQkFBQSxBQUNLLEFBQUssQUFDTCx1QkFIVCxBQUNJLEFBRUssQUFBSyxBQUVWLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLHFDQUFVLFNBQVMsS0FBQSxBQUFLLE1BQXpCLEFBQStCOzhCQUEvQjtnQ0FSWixBQUVJLEFBS0ksQUFDSSxBQUdSO0FBSFE7a0NBR1IsQUFBQyx5Q0FBYyxTQUFTLEtBQUEsQUFBSyxNQUE3QixBQUFtQzs4QkFBbkM7Z0NBWlIsQUFDSSxBQVdJLEFBR1g7QUFIVzs7Ozs7O2lILEFBMUZpQjs7Ozs7aUNBQ25CO0Esd0NBQVEscUJBQU0sTUFBQSxBQUFNLE1BQVosQUFBa0IsQTs7dUNBRVYsTUFBQSxBQUFNLFFBQU4sQUFBYyxhQUFkLEFBQTJCLEE7O2lDQUEzQztBLG1EQUVOOzt3Q0FBQSxBQUFRLElBQVIsQUFBWTs7OzZDQUdDLE1BQUEsQUFBTSxNQURaLEFBQ2tCLEFBQ3JCO2lEQUFhLFFBRlYsQUFFVSxBQUFRLEFBQ3JCOytDQUFXLFFBSFIsQUFHUSxBQUFRLEFBQ25COzZDQUFTLFFBSk4sQUFJTSxBQUFRLEFBQ2pCO21EQUFlLFFBTFosQUFLWSxBQUFRLEFBQ3ZCO3NEQUFrQixRQU5mLEFBTWUsQUFBUSxBQUMxQjt5Q0FBSyxRQVBGLEFBT0UsQUFBUSxBO0FBUFYsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVRZLEEsQUFpR3hCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvZ2F1dGFtL3Byb2plY3RzL3NvbGlkaXR5X2xlYXJuL3dhZ2VyIn0=