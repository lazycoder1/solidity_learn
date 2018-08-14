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

var WagerShow = function (_Component) {
    (0, _inherits3.default)(WagerShow, _Component);

    function WagerShow() {
        (0, _classCallCheck3.default)(this, WagerShow);

        return (0, _possibleConstructorReturn3.default)(this, (WagerShow.__proto__ || (0, _getPrototypeOf2.default)(WagerShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(WagerShow, [{
        key: "renderCards",
        value: function renderCards() {
            var _props = this.props,
                description = _props.description,
                bet_admin = _props.bet_admin,
                balance = _props.balance,
                willOccurList = _props.willOccurList,
                willNotOccurList = _props.willNotOccurList,
                end = _props.end;

            var status = "Its over";
            var backgroundColor = "red";
            if (!end) {
                status = "On Going";
                backgroundColor = "green";
            }

            var items = [{
                header: description,
                meta: "desc",
                description: "What is this wager about ?",
                fluid: true
            }, {
                header: bet_admin,
                meta: "Address of Manager",
                description: "The Manager who created this wager and call the winning side!",
                style: { overflowWrap: "break-word" },
                fluid: true
            }, {
                header: status,
                meta: "status",
                description: "Has the wager ended ?",
                style: { backgroundColor: backgroundColor }
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

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items });
        }
    }, {
        key: "render",
        value: function render() {
            var end = this.props.end;

            console.log("test");
            return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement("h3", null, "Wager Show"), _react2.default.createElement(_semanticUiReact.Grid, null, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10 }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6 }, _react2.default.createElement(_WagerForm2.default, { address: this.props.address, end: end }))), _react2.default.createElement(_DeclareWinner2.default, { address: this.props.address, end: end }));
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