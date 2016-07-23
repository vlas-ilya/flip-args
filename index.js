;(function () {

	"use strict";

	function _toConsumableArray(arr) { 
		if (Array.isArray(arr)) { 
			for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { 
				arr2[i] = arr[i]; 
			} 
			return arr2;
		} else {
			return Array.from(arr);
		}
	}

	var flip = function flip(fn) {
		return function () {
			for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
				params[_key] = arguments[_key];
			}
			return fn.apply(undefined, _toConsumableArray(params.reverse()));
		};
	};

	if (typeof module == 'object') {
		module.exports = flip
	} else {
		window.flip = flip
	}
})();
