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
                var eventOccured, wager, err, accounts;
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

                                if (!_this.props.end) {
                                    _context.next = 10;
                                    break;
                                }

                                err = new Error("This wager has ended !");
                                throw err;

                            case 10:
                                _context.next = 12;
                                return _web2.default.eth.getAccounts();

                            case 12:
                                accounts = _context.sent;
                                _context.next = 15;
                                return wager.methods.declareWinner(eventOccured).send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei("0.0001", "ether")
                                });

                            case 15:
                                _routes.Router.replaceRoute("/wagers/" + _this.props.address);
                                _context.next = 21;
                                break;

                            case 18:
                                _context.prev = 18;
                                _context.t0 = _context["catch"](6);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 21:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[6, 18]]);
            }));

            return function (_x) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DeclareWinner, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage }, _react2.default.createElement(_semanticUiReact.Form.Group, null, _react2.default.createElement(_semanticUiReact.Form.Field, null, _react2.default.createElement(_semanticUiReact.Form.Select, {
                value: this.state.choose,
                onChange: this.handleChange,
                fluid: true,
                label: "Did the event occur ?",
                options: options,
                placeholder: "0.0001 ether will be charged"
            }))), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: "Oops!",
                content: this.state.errorMessage
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading }, "Declare"));
        }
    }]);

    return DeclareWinner;
}(_react.Component);

exports.default = DeclareWinner;