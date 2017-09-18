webpackJsonp([2],{

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(7);

var _StoresPool = __webpack_require__(9);

var _StoresPool2 = _interopRequireDefault(_StoresPool);

var _TestModule2Store = __webpack_require__(82);

var _TestModule2Store2 = _interopRequireDefault(_TestModule2Store);

var _TestModule2Actions = __webpack_require__(80);

var _TestModule2Actions2 = _interopRequireDefault(_TestModule2Actions);

var _DevProps = __webpack_require__(23);

var _DevProps2 = _interopRequireDefault(_DevProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestModule2 = function (_React$Component) {
	_inherits(TestModule2, _React$Component);

	function TestModule2(props) {
		_classCallCheck(this, TestModule2);

		var _this = _possibleConstructorReturn(this, (TestModule2.__proto__ || Object.getPrototypeOf(TestModule2)).call(this, props));

		_StoresPool2.default.create("TestModule2_" + props.num, _TestModule2Store2.default, props.num, "mytest");
		return _this;
	}

	_createClass(TestModule2, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var n = "state1",
			    v = 2;
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"div",
					{ className: "margin_bottom" },
					_react2.default.createElement(
						"button",
						{
							onClick: function onClick(evt) {
								return _TestModule2Actions2.default.setTestState(_this2.props.num, n, v, evt);
							}
						},
						"\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u201C",
						n,
						"\u201D \u043D\u0430 ",
						v
					)
				),
				_react2.default.createElement(
					"h3",
					null,
					"TestModule2[",
					this.props.num,
					"].state:"
				),
				_react2.default.createElement(_DevProps2.default, { data: this.state.TestModule2Store._root.entries, store: true }),
				_react2.default.createElement(
					"h3",
					null,
					"TestModule2[",
					this.props.num,
					"].props:"
				),
				_react2.default.createElement(_DevProps2.default, { data: this.props })
			);
		}
	}], [{
		key: "getStores",
		value: function getStores(props) {
			return _StoresPool2.default.arr("TestModule2_" + props.num);
		}
	}, {
		key: "calculateState",
		value: function calculateState(prevState, props) {
			return {
				TestModule2Store: _StoresPool2.default.item("TestModule2_" + props.num).getState()
			};
		}
	}]);

	return TestModule2;
}(_react2.default.Component);

exports.default = _utils.Container.create(TestModule2, { withProps: true });

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var TestModule2ActionTypes = {
	SET_STATE: "SET_STATE"
};

exports.default = TestModule2ActionTypes;

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _TestModule2ActionTypes = __webpack_require__(78);

var _TestModule2ActionTypes2 = _interopRequireDefault(_TestModule2ActionTypes);

var _Dispatcher = __webpack_require__(3);

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _ServerApi = __webpack_require__(12);

var _ServerApi2 = _interopRequireDefault(_ServerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestModule2Actions = {
	setTestState: function setTestState(num, name, value, evt) {
		_Dispatcher2.default.dispatch({
			type: _TestModule2ActionTypes2.default.SET_STATE,
			num: num,
			name: name,
			value: value
		});
	}
};

exports.default = TestModule2Actions;

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _immutable = __webpack_require__(13);

var _immutable2 = _interopRequireDefault(_immutable);

var _utils = __webpack_require__(7);

var _TestModule2ActionTypes = __webpack_require__(78);

var _TestModule2ActionTypes2 = _interopRequireDefault(_TestModule2ActionTypes);

var _Dispatcher = __webpack_require__(3);

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestModule2Store = function (_ReduceStore) {
	_inherits(TestModule2Store, _ReduceStore);

	function TestModule2Store(num, optional) {
		_classCallCheck(this, TestModule2Store);

		var _this = _possibleConstructorReturn(this, (TestModule2Store.__proto__ || Object.getPrototypeOf(TestModule2Store)).call(this, _Dispatcher2.default));

		_this.num = num;
		return _this;
	}

	_createClass(TestModule2Store, [{
		key: "getInitialState",
		value: function getInitialState() {
			return _immutable2.default.Map({
				state1: 0
			});
		}
	}, {
		key: "reduce",
		value: function reduce(state, action) {
			if (action.num !== this.num) return state;
			switch (action.type) {
				case _TestModule2ActionTypes2.default.SET_STATE:
					return state.update(action.name, function (i) {
						return i + action.value;
					});
				default:
					return state;
			}
		}
	}]);

	return TestModule2Store;
}(_utils.ReduceStore);

exports.default = TestModule2Store;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGVzdC9UZXN0TW9kdWxlMi5qc3g/ZTU0NSIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvVGVzdE1vZHVsZTJBY3Rpb25UeXBlcy5qc3g/ODJlNCIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL1Rlc3RNb2R1bGUyQWN0aW9ucy5qc3g/NzY0MSIsIndlYnBhY2s6Ly8vLi9zdG9yZXMvVGVzdE1vZHVsZTJTdG9yZS5qc3g/NWY5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiZmx1eC91dGlsc1wiKTtcblxudmFyIF9TdG9yZXNQb29sID0gcmVxdWlyZShcIi4uLy4uL1N0b3Jlc1Bvb2wuanN4XCIpO1xuXG52YXIgX1N0b3Jlc1Bvb2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3RvcmVzUG9vbCk7XG5cbnZhciBfVGVzdE1vZHVsZTJTdG9yZSA9IHJlcXVpcmUoXCIuLi8uLi9zdG9yZXMvVGVzdE1vZHVsZTJTdG9yZS5qc3hcIik7XG5cbnZhciBfVGVzdE1vZHVsZTJTdG9yZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXN0TW9kdWxlMlN0b3JlKTtcblxudmFyIF9UZXN0TW9kdWxlMkFjdGlvbnMgPSByZXF1aXJlKFwiLi4vLi4vYWN0aW9ucy9UZXN0TW9kdWxlMkFjdGlvbnMuanN4XCIpO1xuXG52YXIgX1Rlc3RNb2R1bGUyQWN0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXN0TW9kdWxlMkFjdGlvbnMpO1xuXG52YXIgX0RldlByb3BzID0gcmVxdWlyZShcIi4uL3NlcnZpY2UvRGV2UHJvcHMuanN4XCIpO1xuXG52YXIgX0RldlByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RldlByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVGVzdE1vZHVsZTIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoVGVzdE1vZHVsZTIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIFRlc3RNb2R1bGUyKHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RNb2R1bGUyKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUZXN0TW9kdWxlMi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRlc3RNb2R1bGUyKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdFx0X1N0b3Jlc1Bvb2wyLmRlZmF1bHQuY3JlYXRlKFwiVGVzdE1vZHVsZTJfXCIgKyBwcm9wcy5udW0sIF9UZXN0TW9kdWxlMlN0b3JlMi5kZWZhdWx0LCBwcm9wcy5udW0sIFwibXl0ZXN0XCIpO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhUZXN0TW9kdWxlMiwgW3tcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBfdGhpczIgPSB0aGlzO1xuXG5cdFx0XHR2YXIgbiA9IFwic3RhdGUxXCIsXG5cdFx0XHQgICAgdiA9IDI7XG5cdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwibWFyZ2luX2JvdHRvbVwiIH0sXG5cdFx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2dCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVGVzdE1vZHVsZTJBY3Rpb25zMi5kZWZhdWx0LnNldFRlc3RTdGF0ZShfdGhpczIucHJvcHMubnVtLCBuLCB2LCBldnQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XCJcXHUwNDIzXFx1MDQzMlxcdTA0MzVcXHUwNDNCXFx1MDQzOFxcdTA0NDdcXHUwNDM4XFx1MDQ0MlxcdTA0NEMgXFx1MDQ0MlxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0M0VcXHUwNDMyXFx1MDQzRVxcdTA0MzUgXFx1MDQ0MVxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0M0VcXHUwNDRGXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTIwMUNcIixcblx0XHRcdFx0XHRcdG4sXG5cdFx0XHRcdFx0XHRcIlxcdTIwMUQgXFx1MDQzRFxcdTA0MzAgXCIsXG5cdFx0XHRcdFx0XHR2XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImgzXCIsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcIlRlc3RNb2R1bGUyW1wiLFxuXHRcdFx0XHRcdHRoaXMucHJvcHMubnVtLFxuXHRcdFx0XHRcdFwiXS5zdGF0ZTpcIlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRGV2UHJvcHMyLmRlZmF1bHQsIHsgZGF0YTogdGhpcy5zdGF0ZS5UZXN0TW9kdWxlMlN0b3JlLl9yb290LmVudHJpZXMsIHN0b3JlOiB0cnVlIH0pLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImgzXCIsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcIlRlc3RNb2R1bGUyW1wiLFxuXHRcdFx0XHRcdHRoaXMucHJvcHMubnVtLFxuXHRcdFx0XHRcdFwiXS5wcm9wczpcIlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRGV2UHJvcHMyLmRlZmF1bHQsIHsgZGF0YTogdGhpcy5wcm9wcyB9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dLCBbe1xuXHRcdGtleTogXCJnZXRTdG9yZXNcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0U3RvcmVzKHByb3BzKSB7XG5cdFx0XHRyZXR1cm4gX1N0b3Jlc1Bvb2wyLmRlZmF1bHQuYXJyKFwiVGVzdE1vZHVsZTJfXCIgKyBwcm9wcy5udW0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJjYWxjdWxhdGVTdGF0ZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjYWxjdWxhdGVTdGF0ZShwcmV2U3RhdGUsIHByb3BzKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRUZXN0TW9kdWxlMlN0b3JlOiBfU3RvcmVzUG9vbDIuZGVmYXVsdC5pdGVtKFwiVGVzdE1vZHVsZTJfXCIgKyBwcm9wcy5udW0pLmdldFN0YXRlKClcblx0XHRcdH07XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFRlc3RNb2R1bGUyO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX3V0aWxzLkNvbnRhaW5lci5jcmVhdGUoVGVzdE1vZHVsZTIsIHsgd2l0aFByb3BzOiB0cnVlIH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy90ZXN0L1Rlc3RNb2R1bGUyLmpzeFxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbnZhciBUZXN0TW9kdWxlMkFjdGlvblR5cGVzID0ge1xuXHRTRVRfU1RBVEU6IFwiU0VUX1NUQVRFXCJcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RNb2R1bGUyQWN0aW9uVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb25zdGFudHMvVGVzdE1vZHVsZTJBY3Rpb25UeXBlcy5qc3hcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfVGVzdE1vZHVsZTJBY3Rpb25UeXBlcyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvVGVzdE1vZHVsZTJBY3Rpb25UeXBlcy5qc3hcIik7XG5cbnZhciBfVGVzdE1vZHVsZTJBY3Rpb25UeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXN0TW9kdWxlMkFjdGlvblR5cGVzKTtcblxudmFyIF9EaXNwYXRjaGVyID0gcmVxdWlyZShcIi4uL0Rpc3BhdGNoZXIuanN4XCIpO1xuXG52YXIgX0Rpc3BhdGNoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGlzcGF0Y2hlcik7XG5cbnZhciBfU2VydmVyQXBpID0gcmVxdWlyZShcIi4uL1NlcnZlckFwaS5qc3hcIik7XG5cbnZhciBfU2VydmVyQXBpMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NlcnZlckFwaSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUZXN0TW9kdWxlMkFjdGlvbnMgPSB7XG5cdHNldFRlc3RTdGF0ZTogZnVuY3Rpb24gc2V0VGVzdFN0YXRlKG51bSwgbmFtZSwgdmFsdWUsIGV2dCkge1xuXHRcdF9EaXNwYXRjaGVyMi5kZWZhdWx0LmRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IF9UZXN0TW9kdWxlMkFjdGlvblR5cGVzMi5kZWZhdWx0LlNFVF9TVEFURSxcblx0XHRcdG51bTogbnVtLFxuXHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUZXN0TW9kdWxlMkFjdGlvbnM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hY3Rpb25zL1Rlc3RNb2R1bGUyQWN0aW9ucy5qc3hcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfaW1tdXRhYmxlID0gcmVxdWlyZShcImltbXV0YWJsZVwiKTtcblxudmFyIF9pbW11dGFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW1tdXRhYmxlKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCJmbHV4L3V0aWxzXCIpO1xuXG52YXIgX1Rlc3RNb2R1bGUyQWN0aW9uVHlwZXMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL1Rlc3RNb2R1bGUyQWN0aW9uVHlwZXMuanN4XCIpO1xuXG52YXIgX1Rlc3RNb2R1bGUyQWN0aW9uVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGVzdE1vZHVsZTJBY3Rpb25UeXBlcyk7XG5cbnZhciBfRGlzcGF0Y2hlciA9IHJlcXVpcmUoXCIuLi9EaXNwYXRjaGVyLmpzeFwiKTtcblxudmFyIF9EaXNwYXRjaGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Rpc3BhdGNoZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBUZXN0TW9kdWxlMlN0b3JlID0gZnVuY3Rpb24gKF9SZWR1Y2VTdG9yZSkge1xuXHRfaW5oZXJpdHMoVGVzdE1vZHVsZTJTdG9yZSwgX1JlZHVjZVN0b3JlKTtcblxuXHRmdW5jdGlvbiBUZXN0TW9kdWxlMlN0b3JlKG51bSwgb3B0aW9uYWwpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVzdE1vZHVsZTJTdG9yZSk7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVGVzdE1vZHVsZTJTdG9yZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRlc3RNb2R1bGUyU3RvcmUpKS5jYWxsKHRoaXMsIF9EaXNwYXRjaGVyMi5kZWZhdWx0KSk7XG5cblx0XHRfdGhpcy5udW0gPSBudW07XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFRlc3RNb2R1bGUyU3RvcmUsIFt7XG5cdFx0a2V5OiBcImdldEluaXRpYWxTdGF0ZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG5cdFx0XHRyZXR1cm4gX2ltbXV0YWJsZTIuZGVmYXVsdC5NYXAoe1xuXHRcdFx0XHRzdGF0ZTE6IDBcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJyZWR1Y2VcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVkdWNlKHN0YXRlLCBhY3Rpb24pIHtcblx0XHRcdGlmIChhY3Rpb24ubnVtICE9PSB0aGlzLm51bSkgcmV0dXJuIHN0YXRlO1xuXHRcdFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdFx0XHRjYXNlIF9UZXN0TW9kdWxlMkFjdGlvblR5cGVzMi5kZWZhdWx0LlNFVF9TVEFURTpcblx0XHRcdFx0XHRyZXR1cm4gc3RhdGUudXBkYXRlKGFjdGlvbi5uYW1lLCBmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGkgKyBhY3Rpb24udmFsdWU7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdFx0fVxuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBUZXN0TW9kdWxlMlN0b3JlO1xufShfdXRpbHMuUmVkdWNlU3RvcmUpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUZXN0TW9kdWxlMlN0b3JlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3RvcmVzL1Rlc3RNb2R1bGUyU3RvcmUuanN4XG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9