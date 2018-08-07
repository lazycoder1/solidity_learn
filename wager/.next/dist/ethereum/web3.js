'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	// We are in the browser and metamask is running.
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	// We are on the server *OR* the user is not running metamask
	var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/d7e5swDuBvhF53dyzUvx');
	web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7O0FBRUEsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBNUQsYUFBeUUsQUFDeEU7QUFDQTtRQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0E7QUFIRCxPQUdNLEFBQ0w7QUFDQTtLQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNoQixBQURnQixBQUFqQixBQUdBO1FBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNBO0FBR0Q7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9nYXV0YW0vcHJvamVjdHMvc29saWRpdHlfbGVhcm4vd2FnZXIifQ==