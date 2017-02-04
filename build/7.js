webpackJsonp([7],{

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

		_StoresPool2.default.create("TestModule2" + props.caffe_id, _TestModule2Store2.default, props.caffe_id, "mytest");
		return _this;
	}

	_createClass(TestModule2, [{
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			_StoresPool2.default.remove("TestModule2" + this.props.caffe_id);
		}
	}, {
		key: "render",
		value: function render() {
			var n = "state1",
			    v = 2;
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"button",
					{
						onClick: function onClick(evt) {
							return _TestModule2Actions2.default.setTestState(n, v, evt);
						}
					},
					"\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u201C",
					n,
					"\u201D \u043D\u0430 ",
					v
				),
				_react2.default.createElement(
					"h3",
					null,
					"TestModule2[",
					this.props.num,
					"].state:"
				),
				_react2.default.createElement(_DevProps2.default, { data: this.state.TestModule2Store._root.entries }),
				_react2.default.createElement(
					"h3",
					null,
					"TestModule2[",
					this.props.num,
					"].props:"
				),
				_react2.default.createElement(_DevProps2.default, { data: this.props }),
				_react2.default.createElement("hr", null)
			);
		}
	}], [{
		key: "getStores",
		value: function getStores(props) {
			return _StoresPool2.default.arr("TestModule2" + props.caffe_id);
		}
	}, {
		key: "calculateState",
		value: function calculateState(prevState, props) {
			return {
				TestModule2Store: _StoresPool2.default.item("TestModule2" + props.caffe_id).getState()
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
	setTestState: function setTestState(name, value, evt) {
		_Dispatcher2.default.dispatch({
			type: _TestModule2ActionTypes2.default.SET_STATE,
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

	function TestModule2Store(caffe_id, desc) {
		_classCallCheck(this, TestModule2Store);

		var _this = _possibleConstructorReturn(this, (TestModule2Store.__proto__ || Object.getPrototypeOf(TestModule2Store)).call(this, _Dispatcher2.default));

		console.log(caffe_id);
		console.log(desc);
		_this.caffe_id = caffe_id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGVzdC9UZXN0TW9kdWxlMi5qc3g/ZTU0NSIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvVGVzdE1vZHVsZTJBY3Rpb25UeXBlcy5qc3g/ODJlNCIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL1Rlc3RNb2R1bGUyQWN0aW9ucy5qc3g/NzY0MSIsIndlYnBhY2s6Ly8vLi9zdG9yZXMvVGVzdE1vZHVsZTJTdG9yZS5qc3g/NWY5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiZmx1eC91dGlsc1wiKTtcblxudmFyIF9TdG9yZXNQb29sID0gcmVxdWlyZShcIi4uLy4uL1N0b3Jlc1Bvb2wuanN4XCIpO1xuXG52YXIgX1N0b3Jlc1Bvb2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3RvcmVzUG9vbCk7XG5cbnZhciBfVGVzdE1vZHVsZTJTdG9yZSA9IHJlcXVpcmUoXCIuLi8uLi9zdG9yZXMvVGVzdE1vZHVsZTJTdG9yZS5qc3hcIik7XG5cbnZhciBfVGVzdE1vZHVsZTJTdG9yZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXN0TW9kdWxlMlN0b3JlKTtcblxudmFyIF9UZXN0TW9kdWxlMkFjdGlvbnMgPSByZXF1aXJlKFwiLi4vLi4vYWN0aW9ucy9UZXN0TW9kdWxlMkFjdGlvbnMuanN4XCIpO1xuXG52YXIgX1Rlc3RNb2R1bGUyQWN0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXN0TW9kdWxlMkFjdGlvbnMpO1xuXG52YXIgX0RldlByb3BzID0gcmVxdWlyZShcIi4uL3NlcnZpY2UvRGV2UHJvcHMuanN4XCIpO1xuXG52YXIgX0RldlByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RldlByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVGVzdE1vZHVsZTIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoVGVzdE1vZHVsZTIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIFRlc3RNb2R1bGUyKHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RNb2R1bGUyKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUZXN0TW9kdWxlMi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRlc3RNb2R1bGUyKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdFx0X1N0b3Jlc1Bvb2wyLmRlZmF1bHQuY3JlYXRlKFwiVGVzdE1vZHVsZTJcIiArIHByb3BzLmNhZmZlX2lkLCBfVGVzdE1vZHVsZTJTdG9yZTIuZGVmYXVsdCwgcHJvcHMuY2FmZmVfaWQsIFwibXl0ZXN0XCIpO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhUZXN0TW9kdWxlMiwgW3tcblx0XHRrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0XHRfU3RvcmVzUG9vbDIuZGVmYXVsdC5yZW1vdmUoXCJUZXN0TW9kdWxlMlwiICsgdGhpcy5wcm9wcy5jYWZmZV9pZCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInJlbmRlclwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgbiA9IFwic3RhdGUxXCIsXG5cdFx0XHQgICAgdiA9IDI7XG5cdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gb25DbGljayhldnQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9UZXN0TW9kdWxlMkFjdGlvbnMyLmRlZmF1bHQuc2V0VGVzdFN0YXRlKG4sIHYsIGV2dCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcIlxcdTA0MjNcXHUwNDMyXFx1MDQzNVxcdTA0M0JcXHUwNDM4XFx1MDQ0N1xcdTA0MzhcXHUwNDQyXFx1MDQ0QyBcXHUwNDQyXFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQzRVxcdTA0MzJcXHUwNDNFXFx1MDQzNSBcXHUwNDQxXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzRVxcdTA0NEZcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MjAxQ1wiLFxuXHRcdFx0XHRcdG4sXG5cdFx0XHRcdFx0XCJcXHUyMDFEIFxcdTA0M0RcXHUwNDMwIFwiLFxuXHRcdFx0XHRcdHZcblx0XHRcdFx0KSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJoM1wiLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XCJUZXN0TW9kdWxlMltcIixcblx0XHRcdFx0XHR0aGlzLnByb3BzLm51bSxcblx0XHRcdFx0XHRcIl0uc3RhdGU6XCJcblx0XHRcdFx0KSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0RldlByb3BzMi5kZWZhdWx0LCB7IGRhdGE6IHRoaXMuc3RhdGUuVGVzdE1vZHVsZTJTdG9yZS5fcm9vdC5lbnRyaWVzIH0pLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImgzXCIsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcIlRlc3RNb2R1bGUyW1wiLFxuXHRcdFx0XHRcdHRoaXMucHJvcHMubnVtLFxuXHRcdFx0XHRcdFwiXS5wcm9wczpcIlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRGV2UHJvcHMyLmRlZmF1bHQsIHsgZGF0YTogdGhpcy5wcm9wcyB9KSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dLCBbe1xuXHRcdGtleTogXCJnZXRTdG9yZXNcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0U3RvcmVzKHByb3BzKSB7XG5cdFx0XHRyZXR1cm4gX1N0b3Jlc1Bvb2wyLmRlZmF1bHQuYXJyKFwiVGVzdE1vZHVsZTJcIiArIHByb3BzLmNhZmZlX2lkKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiY2FsY3VsYXRlU3RhdGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2FsY3VsYXRlU3RhdGUocHJldlN0YXRlLCBwcm9wcykge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0VGVzdE1vZHVsZTJTdG9yZTogX1N0b3Jlc1Bvb2wyLmRlZmF1bHQuaXRlbShcIlRlc3RNb2R1bGUyXCIgKyBwcm9wcy5jYWZmZV9pZCkuZ2V0U3RhdGUoKVxuXHRcdFx0fTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gVGVzdE1vZHVsZTI7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfdXRpbHMuQ29udGFpbmVyLmNyZWF0ZShUZXN0TW9kdWxlMiwgeyB3aXRoUHJvcHM6IHRydWUgfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3Rlc3QvVGVzdE1vZHVsZTIuanN4XG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xudmFyIFRlc3RNb2R1bGUyQWN0aW9uVHlwZXMgPSB7XG5cdFNFVF9TVEFURTogXCJTRVRfU1RBVEVcIlxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdE1vZHVsZTJBY3Rpb25UeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnN0YW50cy9UZXN0TW9kdWxlMkFjdGlvblR5cGVzLmpzeFxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDciLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9UZXN0TW9kdWxlMkFjdGlvblR5cGVzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9UZXN0TW9kdWxlMkFjdGlvblR5cGVzLmpzeFwiKTtcblxudmFyIF9UZXN0TW9kdWxlMkFjdGlvblR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rlc3RNb2R1bGUyQWN0aW9uVHlwZXMpO1xuXG52YXIgX0Rpc3BhdGNoZXIgPSByZXF1aXJlKFwiLi4vRGlzcGF0Y2hlci5qc3hcIik7XG5cbnZhciBfRGlzcGF0Y2hlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EaXNwYXRjaGVyKTtcblxudmFyIF9TZXJ2ZXJBcGkgPSByZXF1aXJlKFwiLi4vU2VydmVyQXBpLmpzeFwiKTtcblxudmFyIF9TZXJ2ZXJBcGkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2VydmVyQXBpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRlc3RNb2R1bGUyQWN0aW9ucyA9IHtcblx0c2V0VGVzdFN0YXRlOiBmdW5jdGlvbiBzZXRUZXN0U3RhdGUobmFtZSwgdmFsdWUsIGV2dCkge1xuXHRcdF9EaXNwYXRjaGVyMi5kZWZhdWx0LmRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IF9UZXN0TW9kdWxlMkFjdGlvblR5cGVzMi5kZWZhdWx0LlNFVF9TVEFURSxcblx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdE1vZHVsZTJBY3Rpb25zO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYWN0aW9ucy9UZXN0TW9kdWxlMkFjdGlvbnMuanN4XG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2ltbXV0YWJsZSA9IHJlcXVpcmUoXCJpbW11dGFibGVcIik7XG5cbnZhciBfaW1tdXRhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltbXV0YWJsZSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiZmx1eC91dGlsc1wiKTtcblxudmFyIF9UZXN0TW9kdWxlMkFjdGlvblR5cGVzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9UZXN0TW9kdWxlMkFjdGlvblR5cGVzLmpzeFwiKTtcblxudmFyIF9UZXN0TW9kdWxlMkFjdGlvblR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rlc3RNb2R1bGUyQWN0aW9uVHlwZXMpO1xuXG52YXIgX0Rpc3BhdGNoZXIgPSByZXF1aXJlKFwiLi4vRGlzcGF0Y2hlci5qc3hcIik7XG5cbnZhciBfRGlzcGF0Y2hlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EaXNwYXRjaGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVGVzdE1vZHVsZTJTdG9yZSA9IGZ1bmN0aW9uIChfUmVkdWNlU3RvcmUpIHtcblx0X2luaGVyaXRzKFRlc3RNb2R1bGUyU3RvcmUsIF9SZWR1Y2VTdG9yZSk7XG5cblx0ZnVuY3Rpb24gVGVzdE1vZHVsZTJTdG9yZShjYWZmZV9pZCwgZGVzYykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXN0TW9kdWxlMlN0b3JlKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUZXN0TW9kdWxlMlN0b3JlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGVzdE1vZHVsZTJTdG9yZSkpLmNhbGwodGhpcywgX0Rpc3BhdGNoZXIyLmRlZmF1bHQpKTtcblxuXHRcdGNvbnNvbGUubG9nKGNhZmZlX2lkKTtcblx0XHRjb25zb2xlLmxvZyhkZXNjKTtcblx0XHRfdGhpcy5jYWZmZV9pZCA9IGNhZmZlX2lkO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhUZXN0TW9kdWxlMlN0b3JlLCBbe1xuXHRcdGtleTogXCJnZXRJbml0aWFsU3RhdGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuXHRcdFx0cmV0dXJuIF9pbW11dGFibGUyLmRlZmF1bHQuTWFwKHtcblx0XHRcdFx0c3RhdGUxOiAwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicmVkdWNlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlZHVjZShzdGF0ZSwgYWN0aW9uKSB7XG5cdFx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRcdGNhc2UgX1Rlc3RNb2R1bGUyQWN0aW9uVHlwZXMyLmRlZmF1bHQuU0VUX1NUQVRFOlxuXHRcdFx0XHRcdHJldHVybiBzdGF0ZS51cGRhdGUoYWN0aW9uLm5hbWUsIGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaSArIGFjdGlvbi52YWx1ZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFRlc3RNb2R1bGUyU3RvcmU7XG59KF91dGlscy5SZWR1Y2VTdG9yZSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RNb2R1bGUyU3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdG9yZXMvVGVzdE1vZHVsZTJTdG9yZS5qc3hcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=