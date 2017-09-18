webpackJsonp([1,3],{

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Компонент для добавления, редактирования и удаления состояний родительского
 * компонента — по одному State на каждое состояние родительского компонента.
 * При создании (родителем) ему должны передаваться свойства (как минимум):
 * k={ключ_состояния}, v={значение_состояния}, parentModuleNum={ID_родителя},
 * setModuleState={функция_родителя_которая_меняет_сами_родительские_состояния}
 */
var State = function (_React$Component) {
	_inherits(State, _React$Component);

	function State() {
		_classCallCheck(this, State);

		return _possibleConstructorReturn(this, (State.__proto__ || Object.getPrototypeOf(State)).apply(this, arguments));
	}

	_createClass(State, [{
		key: "changeKey",
		value: function changeKey(evt) {
			this.props.setModuleState(this.props.parentModuleNum, {
				key: evt.target.value,
				value: this.props.v,
				orphaned: this.props.k
			});
		}
	}, {
		key: "changeValue",
		value: function changeValue(evt) {
			this.props.setModuleState(this.props.parentModuleNum, {
				key: this.props.k,
				value: evt.target.value
			});
		}
	}, {
		key: "deleteState",
		value: function deleteState() {
			this.props.setModuleState(this.props.parentModuleNum, {
				orphaned: this.props.k
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ className: "col-5" },
					React.createElement("input", { type: "text", value: this.props.k, placeholder: "\u0418\u043C\u044F \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F",
						onChange: this.changeKey.bind(this),
						className: "fieldwidth_100"
					})
				),
				React.createElement(
					"div",
					{ className: "col-5" },
					React.createElement("input", { type: "text", value: this.props.v, placeholder: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F",
						onChange: this.changeValue.bind(this),
						className: "fieldwidth_100"
					})
				),
				React.createElement(
					"div",
					{ className: "col-2" },
					React.createElement("input", { type: "button", value: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
						onClick: this.deleteState.bind(this),
						className: "fieldwidth_100"
					})
				)
			);
		}
	}]);

	return State;
}(React.Component);

exports.default = State;

/***/ }),

/***/ 73:
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

var _TestModule1Store = __webpack_require__(81);

var _TestModule1Store2 = _interopRequireDefault(_TestModule1Store);

var _TestModule1Actions = __webpack_require__(79);

var _TestModule1Actions2 = _interopRequireDefault(_TestModule1Actions);

var _State = __webpack_require__(72);

var _State2 = _interopRequireDefault(_State);

var _DevProps = __webpack_require__(23);

var _DevProps2 = _interopRequireDefault(_DevProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestModule1 = function (_React$Component) {
	_inherits(TestModule1, _React$Component);

	/**
  * Расколбас. Опишу позже.
  */
	function TestModule1(props) {
		_classCallCheck(this, TestModule1);

		var _this = _possibleConstructorReturn(this, (TestModule1.__proto__ || Object.getPrototypeOf(TestModule1)).call(this, props));

		_StoresPool2.default.create("TestModule1_" + props.num, _TestModule1Store2.default, props.num);
		return _this;
	}

	_createClass(TestModule1, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var states = {},
			    im = this.state.TestModule1Store._root,
			    keyIdx = -1;
			if (typeof im !== "undefined") {
				Object.keys(im.entries).map(function (idx) {
					states[im.entries[idx][0]] = im.entries[idx][1];
				});
			}
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h3",
					null,
					"TestModule1[",
					this.props.num,
					"].props:"
				),
				_react2.default.createElement(_DevProps2.default, { data: this.props }),
				_react2.default.createElement(
					"h3",
					null,
					"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 TestModule1[",
					this.props.num,
					"].state:"
				),
				_react2.default.createElement(
					"div",
					{ className: "row offset_1 margin_bottom" },
					Object.keys(states).map(function (key) {
						keyIdx++;
						return _react2.default.createElement(_State2.default, {
							key: keyIdx,
							k: key,
							v: states[key],
							parentModuleNum: _this2.props.num,
							setModuleState: _TestModule1Actions2.default.setModuleState
						});
					})
				),
				_react2.default.createElement(
					"div",
					{ className: "margin_bottom" },
					_react2.default.createElement("input", { type: "button", value: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451",
						onClick: function onClick(evt) {
							return _TestModule1Actions2.default.addModuleState(_this2.props.num);
						} })
				),
				_react2.default.createElement(
					"h3",
					null,
					"TestModule1[",
					this.props.num,
					"].state:"
				),
				typeof im !== "undefined" && _react2.default.createElement(_DevProps2.default, { data: im.entries, store: true, hide: "states" })
			);
		}
	}], [{
		key: "getStores",
		value: function getStores(props) {
			return _StoresPool2.default.arr("TestModule1_" + props.num);
		}
	}, {
		key: "calculateState",
		value: function calculateState(prevState, props) {
			return {
				TestModule1Store: _StoresPool2.default.item("TestModule1_" + props.num).getState()
			};
		}
	}]);

	return TestModule1;
}(_react2.default.Component);

exports.default = _utils.Container.create(TestModule1, { withProps: true });

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var TestModule1ActionTypes = {
	ADDREMOVE_MODULE_STATE: "ADD_MODULE_STATE",
	SET_MODULE_STATE: "SET_MODULE_STATE"
};

exports.default = TestModule1ActionTypes;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _TestModule1ActionTypes = __webpack_require__(77);

var _TestModule1ActionTypes2 = _interopRequireDefault(_TestModule1ActionTypes);

var _Dispatcher = __webpack_require__(3);

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _ServerApi = __webpack_require__(12);

var _ServerApi2 = _interopRequireDefault(_ServerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestModule1Actions = {
	addModuleState: function addModuleState(num) {
		_Dispatcher2.default.dispatch({
			type: _TestModule1ActionTypes2.default.ADD_MODULE_STATE,
			num: num
		});
	},
	setModuleState: function setModuleState(num, p) {
		_Dispatcher2.default.dispatch({
			type: _TestModule1ActionTypes2.default.SET_MODULE_STATE,
			num: num,
			p: p
		});
	}
};

exports.default = TestModule1Actions;

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _immutable = __webpack_require__(13);

var _immutable2 = _interopRequireDefault(_immutable);

var _utils = __webpack_require__(7);

var _Dispatcher = __webpack_require__(3);

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _TestModule1ActionTypes = __webpack_require__(77);

var _TestModule1ActionTypes2 = _interopRequireDefault(_TestModule1ActionTypes);

var _State = __webpack_require__(72);

var _State2 = _interopRequireDefault(_State);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestModule1Store = function (_ReduceStore) {
	_inherits(TestModule1Store, _ReduceStore);

	function TestModule1Store(num, optional) {
		_classCallCheck(this, TestModule1Store);

		var _this = _possibleConstructorReturn(this, (TestModule1Store.__proto__ || Object.getPrototypeOf(TestModule1Store)).call(this, _Dispatcher2.default));

		_this.num = num;
		return _this;
	}

	_createClass(TestModule1Store, [{
		key: "getInitialState",
		value: function getInitialState() {
			return _immutable2.default.Map({});
		}
	}, {
		key: "reduce",
		value: function reduce(state, action) {
			if (action.num !== this.num) return state;
			switch (action.type) {
				case _TestModule1ActionTypes2.default.ADD_MODULE_STATE:
					return state = state.set("", "");
				case _TestModule1ActionTypes2.default.SET_MODULE_STATE:
					if (typeof action.p.key !== "undefined" && typeof action.p.value !== "undefined") {
						state = state.set(action.p.key, action.p.value);
					}
					if (typeof action.p.orphaned !== "undefined") {
						state = state.delete(action.p.orphaned);
					}
					return state;
				default:
					return state;
			}
		}
	}]);

	return TestModule1Store;
}(_utils.ReduceStore);

exports.default = TestModule1Store;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VydmljZS9TdGF0ZS5qc3g/NGQ5NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rlc3QvVGVzdE1vZHVsZTEuanN4PzljZGIiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL1Rlc3RNb2R1bGUxQWN0aW9uVHlwZXMuanN4PzU1ZmEiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9UZXN0TW9kdWxlMUFjdGlvbnMuanN4PzQzOGQiLCJ3ZWJwYWNrOi8vLy4vc3RvcmVzL1Rlc3RNb2R1bGUxU3RvcmUuanN4PzQzNDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiDQmtC+0LzQv9C+0L3QtdC90YIg0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPLCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC4INGD0LTQsNC70LXQvdC40Y8g0YHQvtGB0YLQvtGP0L3QuNC5INGA0L7QtNC40YLQtdC70YzRgdC60L7Qs9C+XG4gKiDQutC+0LzQv9C+0L3QtdC90YLQsCDigJQg0L/QviDQvtC00L3QvtC80YMgU3RhdGUg0L3QsCDQutCw0LbQtNC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1INGA0L7QtNC40YLQtdC70YzRgdC60L7Qs9C+INC60L7QvNC/0L7QvdC10L3RgtCwLlxuICog0J/RgNC4INGB0L7Qt9C00LDQvdC40LggKNGA0L7QtNC40YLQtdC70LXQvCkg0LXQvNGDINC00L7Qu9C20L3RiyDQv9C10YDQtdC00LDQstCw0YLRjNGB0Y8g0YHQstC+0LnRgdGC0LLQsCAo0LrQsNC6INC80LjQvdC40LzRg9C8KTpcbiAqIGs9e9C60LvRjtGHX9GB0L7RgdGC0L7Rj9C90LjRj30sIHY9e9C30L3QsNGH0LXQvdC40LVf0YHQvtGB0YLQvtGP0L3QuNGPfSwgcGFyZW50TW9kdWxlTnVtPXtJRF/RgNC+0LTQuNGC0LXQu9GPfSxcbiAqIHNldE1vZHVsZVN0YXRlPXvRhNGD0L3QutGG0LjRj1/RgNC+0LTQuNGC0LXQu9GPX9C60L7RgtC+0YDQsNGPX9C80LXQvdGP0LXRgl/RgdCw0LzQuF/RgNC+0LTQuNGC0LXQu9GM0YHQutC40LVf0YHQvtGB0YLQvtGP0L3QuNGPfVxuICovXG52YXIgU3RhdGUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoU3RhdGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIFN0YXRlKCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0ZSk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFN0YXRlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3RhdGUpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhTdGF0ZSwgW3tcblx0XHRrZXk6IFwiY2hhbmdlS2V5XCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNoYW5nZUtleShldnQpIHtcblx0XHRcdHRoaXMucHJvcHMuc2V0TW9kdWxlU3RhdGUodGhpcy5wcm9wcy5wYXJlbnRNb2R1bGVOdW0sIHtcblx0XHRcdFx0a2V5OiBldnQudGFyZ2V0LnZhbHVlLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52LFxuXHRcdFx0XHRvcnBoYW5lZDogdGhpcy5wcm9wcy5rXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiY2hhbmdlVmFsdWVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2hhbmdlVmFsdWUoZXZ0KSB7XG5cdFx0XHR0aGlzLnByb3BzLnNldE1vZHVsZVN0YXRlKHRoaXMucHJvcHMucGFyZW50TW9kdWxlTnVtLCB7XG5cdFx0XHRcdGtleTogdGhpcy5wcm9wcy5rLFxuXHRcdFx0XHR2YWx1ZTogZXZ0LnRhcmdldC52YWx1ZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImRlbGV0ZVN0YXRlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZVN0YXRlKCkge1xuXHRcdFx0dGhpcy5wcm9wcy5zZXRNb2R1bGVTdGF0ZSh0aGlzLnByb3BzLnBhcmVudE1vZHVsZU51bSwge1xuXHRcdFx0XHRvcnBoYW5lZDogdGhpcy5wcm9wcy5rXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwiY29sLTVcIiB9LFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogdGhpcy5wcm9wcy5rLCBwbGFjZWhvbGRlcjogXCJcXHUwNDE4XFx1MDQzQ1xcdTA0NEYgXFx1MDQ0MVxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0M0VcXHUwNDRGXFx1MDQzRFxcdTA0MzhcXHUwNDRGXCIsXG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogdGhpcy5jaGFuZ2VLZXkuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJmaWVsZHdpZHRoXzEwMFwiXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBcImNvbC01XCIgfSxcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgdmFsdWU6IHRoaXMucHJvcHMudiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxN1xcdTA0M0RcXHUwNDMwXFx1MDQ0N1xcdTA0MzVcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0MVxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0M0VcXHUwNDRGXFx1MDQzRFxcdTA0MzhcXHUwNDRGXCIsXG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogdGhpcy5jaGFuZ2VWYWx1ZS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBcImZpZWxkd2lkdGhfMTAwXCJcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwiY29sLTJcIiB9LFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIHZhbHVlOiBcIlxcdTA0MjNcXHUwNDM0XFx1MDQzMFxcdTA0M0JcXHUwNDM4XFx1MDQ0MlxcdTA0NENcIixcblx0XHRcdFx0XHRcdG9uQ2xpY2s6IHRoaXMuZGVsZXRlU3RhdGUuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJmaWVsZHdpZHRoXzEwMFwiXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gU3RhdGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN0YXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9zZXJ2aWNlL1N0YXRlLmpzeFxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCJmbHV4L3V0aWxzXCIpO1xuXG52YXIgX1N0b3Jlc1Bvb2wgPSByZXF1aXJlKFwiLi4vLi4vU3RvcmVzUG9vbC5qc3hcIik7XG5cbnZhciBfU3RvcmVzUG9vbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdG9yZXNQb29sKTtcblxudmFyIF9UZXN0TW9kdWxlMVN0b3JlID0gcmVxdWlyZShcIi4uLy4uL3N0b3Jlcy9UZXN0TW9kdWxlMVN0b3JlLmpzeFwiKTtcblxudmFyIF9UZXN0TW9kdWxlMVN0b3JlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rlc3RNb2R1bGUxU3RvcmUpO1xuXG52YXIgX1Rlc3RNb2R1bGUxQWN0aW9ucyA9IHJlcXVpcmUoXCIuLi8uLi9hY3Rpb25zL1Rlc3RNb2R1bGUxQWN0aW9ucy5qc3hcIik7XG5cbnZhciBfVGVzdE1vZHVsZTFBY3Rpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rlc3RNb2R1bGUxQWN0aW9ucyk7XG5cbnZhciBfU3RhdGUgPSByZXF1aXJlKFwiLi4vc2VydmljZS9TdGF0ZS5qc3hcIik7XG5cbnZhciBfU3RhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3RhdGUpO1xuXG52YXIgX0RldlByb3BzID0gcmVxdWlyZShcIi4uL3NlcnZpY2UvRGV2UHJvcHMuanN4XCIpO1xuXG52YXIgX0RldlByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RldlByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVGVzdE1vZHVsZTEgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoVGVzdE1vZHVsZTEsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdC8qKlxuICAqINCg0LDRgdC60L7Qu9Cx0LDRgS4g0J7Qv9C40YjRgyDQv9C+0LfQttC1LlxuICAqL1xuXHRmdW5jdGlvbiBUZXN0TW9kdWxlMShwcm9wcykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXN0TW9kdWxlMSk7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVGVzdE1vZHVsZTEuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUZXN0TW9kdWxlMSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdF9TdG9yZXNQb29sMi5kZWZhdWx0LmNyZWF0ZShcIlRlc3RNb2R1bGUxX1wiICsgcHJvcHMubnVtLCBfVGVzdE1vZHVsZTFTdG9yZTIuZGVmYXVsdCwgcHJvcHMubnVtKTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoVGVzdE1vZHVsZTEsIFt7XG5cdFx0a2V5OiBcInJlbmRlclwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0dmFyIHN0YXRlcyA9IHt9LFxuXHRcdFx0ICAgIGltID0gdGhpcy5zdGF0ZS5UZXN0TW9kdWxlMVN0b3JlLl9yb290LFxuXHRcdFx0ICAgIGtleUlkeCA9IC0xO1xuXHRcdFx0aWYgKHR5cGVvZiBpbSAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRPYmplY3Qua2V5cyhpbS5lbnRyaWVzKS5tYXAoZnVuY3Rpb24gKGlkeCkge1xuXHRcdFx0XHRcdHN0YXRlc1tpbS5lbnRyaWVzW2lkeF1bMF1dID0gaW0uZW50cmllc1tpZHhdWzFdO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJoM1wiLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XCJUZXN0TW9kdWxlMVtcIixcblx0XHRcdFx0XHR0aGlzLnByb3BzLm51bSxcblx0XHRcdFx0XHRcIl0ucHJvcHM6XCJcblx0XHRcdFx0KSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0RldlByb3BzMi5kZWZhdWx0LCB7IGRhdGE6IHRoaXMucHJvcHMgfSksXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiaDNcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFwiXFx1MDQyMFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0M0FcXHUwNDQyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgVGVzdE1vZHVsZTFbXCIsXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5udW0sXG5cdFx0XHRcdFx0XCJdLnN0YXRlOlwiXG5cdFx0XHRcdCksXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwicm93IG9mZnNldF8xIG1hcmdpbl9ib3R0b21cIiB9LFxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKHN0YXRlcykubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdGtleUlkeCsrO1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9TdGF0ZTIuZGVmYXVsdCwge1xuXHRcdFx0XHRcdFx0XHRrZXk6IGtleUlkeCxcblx0XHRcdFx0XHRcdFx0azoga2V5LFxuXHRcdFx0XHRcdFx0XHR2OiBzdGF0ZXNba2V5XSxcblx0XHRcdFx0XHRcdFx0cGFyZW50TW9kdWxlTnVtOiBfdGhpczIucHJvcHMubnVtLFxuXHRcdFx0XHRcdFx0XHRzZXRNb2R1bGVTdGF0ZTogX1Rlc3RNb2R1bGUxQWN0aW9uczIuZGVmYXVsdC5zZXRNb2R1bGVTdGF0ZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJtYXJnaW5fYm90dG9tXCIgfSxcblx0XHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJidXR0b25cIiwgdmFsdWU6IFwiXFx1MDQxNFxcdTA0M0VcXHUwNDMxXFx1MDQzMFxcdTA0MzJcXHUwNDM4XFx1MDQ0MlxcdTA0NEMgXFx1MDQzNVxcdTA0NDlcXHUwNDUxXCIsXG5cdFx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2dCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1Rlc3RNb2R1bGUxQWN0aW9uczIuZGVmYXVsdC5hZGRNb2R1bGVTdGF0ZShfdGhpczIucHJvcHMubnVtKTtcblx0XHRcdFx0XHRcdH0gfSlcblx0XHRcdFx0KSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJoM1wiLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XCJUZXN0TW9kdWxlMVtcIixcblx0XHRcdFx0XHR0aGlzLnByb3BzLm51bSxcblx0XHRcdFx0XHRcIl0uc3RhdGU6XCJcblx0XHRcdFx0KSxcblx0XHRcdFx0dHlwZW9mIGltICE9PSBcInVuZGVmaW5lZFwiICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9EZXZQcm9wczIuZGVmYXVsdCwgeyBkYXRhOiBpbS5lbnRyaWVzLCBzdG9yZTogdHJ1ZSwgaGlkZTogXCJzdGF0ZXNcIiB9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dLCBbe1xuXHRcdGtleTogXCJnZXRTdG9yZXNcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0U3RvcmVzKHByb3BzKSB7XG5cdFx0XHRyZXR1cm4gX1N0b3Jlc1Bvb2wyLmRlZmF1bHQuYXJyKFwiVGVzdE1vZHVsZTFfXCIgKyBwcm9wcy5udW0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJjYWxjdWxhdGVTdGF0ZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjYWxjdWxhdGVTdGF0ZShwcmV2U3RhdGUsIHByb3BzKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRUZXN0TW9kdWxlMVN0b3JlOiBfU3RvcmVzUG9vbDIuZGVmYXVsdC5pdGVtKFwiVGVzdE1vZHVsZTFfXCIgKyBwcm9wcy5udW0pLmdldFN0YXRlKClcblx0XHRcdH07XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFRlc3RNb2R1bGUxO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX3V0aWxzLkNvbnRhaW5lci5jcmVhdGUoVGVzdE1vZHVsZTEsIHsgd2l0aFByb3BzOiB0cnVlIH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy90ZXN0L1Rlc3RNb2R1bGUxLmpzeFxuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbnZhciBUZXN0TW9kdWxlMUFjdGlvblR5cGVzID0ge1xuXHRBRERSRU1PVkVfTU9EVUxFX1NUQVRFOiBcIkFERF9NT0RVTEVfU1RBVEVcIixcblx0U0VUX01PRFVMRV9TVEFURTogXCJTRVRfTU9EVUxFX1NUQVRFXCJcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RNb2R1bGUxQWN0aW9uVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb25zdGFudHMvVGVzdE1vZHVsZTFBY3Rpb25UeXBlcy5qc3hcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfVGVzdE1vZHVsZTFBY3Rpb25UeXBlcyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvVGVzdE1vZHVsZTFBY3Rpb25UeXBlcy5qc3hcIik7XG5cbnZhciBfVGVzdE1vZHVsZTFBY3Rpb25UeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXN0TW9kdWxlMUFjdGlvblR5cGVzKTtcblxudmFyIF9EaXNwYXRjaGVyID0gcmVxdWlyZShcIi4uL0Rpc3BhdGNoZXIuanN4XCIpO1xuXG52YXIgX0Rpc3BhdGNoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGlzcGF0Y2hlcik7XG5cbnZhciBfU2VydmVyQXBpID0gcmVxdWlyZShcIi4uL1NlcnZlckFwaS5qc3hcIik7XG5cbnZhciBfU2VydmVyQXBpMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NlcnZlckFwaSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUZXN0TW9kdWxlMUFjdGlvbnMgPSB7XG5cdGFkZE1vZHVsZVN0YXRlOiBmdW5jdGlvbiBhZGRNb2R1bGVTdGF0ZShudW0pIHtcblx0XHRfRGlzcGF0Y2hlcjIuZGVmYXVsdC5kaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBfVGVzdE1vZHVsZTFBY3Rpb25UeXBlczIuZGVmYXVsdC5BRERfTU9EVUxFX1NUQVRFLFxuXHRcdFx0bnVtOiBudW1cblx0XHR9KTtcblx0fSxcblx0c2V0TW9kdWxlU3RhdGU6IGZ1bmN0aW9uIHNldE1vZHVsZVN0YXRlKG51bSwgcCkge1xuXHRcdF9EaXNwYXRjaGVyMi5kZWZhdWx0LmRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IF9UZXN0TW9kdWxlMUFjdGlvblR5cGVzMi5kZWZhdWx0LlNFVF9NT0RVTEVfU1RBVEUsXG5cdFx0XHRudW06IG51bSxcblx0XHRcdHA6IHBcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdE1vZHVsZTFBY3Rpb25zO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYWN0aW9ucy9UZXN0TW9kdWxlMUFjdGlvbnMuanN4XG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2ltbXV0YWJsZSA9IHJlcXVpcmUoXCJpbW11dGFibGVcIik7XG5cbnZhciBfaW1tdXRhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltbXV0YWJsZSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiZmx1eC91dGlsc1wiKTtcblxudmFyIF9EaXNwYXRjaGVyID0gcmVxdWlyZShcIi4uL0Rpc3BhdGNoZXIuanN4XCIpO1xuXG52YXIgX0Rpc3BhdGNoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGlzcGF0Y2hlcik7XG5cbnZhciBfVGVzdE1vZHVsZTFBY3Rpb25UeXBlcyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvVGVzdE1vZHVsZTFBY3Rpb25UeXBlcy5qc3hcIik7XG5cbnZhciBfVGVzdE1vZHVsZTFBY3Rpb25UeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXN0TW9kdWxlMUFjdGlvblR5cGVzKTtcblxudmFyIF9TdGF0ZSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3NlcnZpY2UvU3RhdGUuanN4XCIpO1xuXG52YXIgX1N0YXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0YXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVGVzdE1vZHVsZTFTdG9yZSA9IGZ1bmN0aW9uIChfUmVkdWNlU3RvcmUpIHtcblx0X2luaGVyaXRzKFRlc3RNb2R1bGUxU3RvcmUsIF9SZWR1Y2VTdG9yZSk7XG5cblx0ZnVuY3Rpb24gVGVzdE1vZHVsZTFTdG9yZShudW0sIG9wdGlvbmFsKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RNb2R1bGUxU3RvcmUpO1xuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRlc3RNb2R1bGUxU3RvcmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUZXN0TW9kdWxlMVN0b3JlKSkuY2FsbCh0aGlzLCBfRGlzcGF0Y2hlcjIuZGVmYXVsdCkpO1xuXG5cdFx0X3RoaXMubnVtID0gbnVtO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhUZXN0TW9kdWxlMVN0b3JlLCBbe1xuXHRcdGtleTogXCJnZXRJbml0aWFsU3RhdGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuXHRcdFx0cmV0dXJuIF9pbW11dGFibGUyLmRlZmF1bHQuTWFwKHt9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicmVkdWNlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlZHVjZShzdGF0ZSwgYWN0aW9uKSB7XG5cdFx0XHRpZiAoYWN0aW9uLm51bSAhPT0gdGhpcy5udW0pIHJldHVybiBzdGF0ZTtcblx0XHRcdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBfVGVzdE1vZHVsZTFBY3Rpb25UeXBlczIuZGVmYXVsdC5BRERfTU9EVUxFX1NUQVRFOlxuXHRcdFx0XHRcdHJldHVybiBzdGF0ZSA9IHN0YXRlLnNldChcIlwiLCBcIlwiKTtcblx0XHRcdFx0Y2FzZSBfVGVzdE1vZHVsZTFBY3Rpb25UeXBlczIuZGVmYXVsdC5TRVRfTU9EVUxFX1NUQVRFOlxuXHRcdFx0XHRcdGlmICh0eXBlb2YgYWN0aW9uLnAua2V5ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBhY3Rpb24ucC52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBzdGF0ZS5zZXQoYWN0aW9uLnAua2V5LCBhY3Rpb24ucC52YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0eXBlb2YgYWN0aW9uLnAub3JwaGFuZWQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRcdHN0YXRlID0gc3RhdGUuZGVsZXRlKGFjdGlvbi5wLm9ycGhhbmVkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gVGVzdE1vZHVsZTFTdG9yZTtcbn0oX3V0aWxzLlJlZHVjZVN0b3JlKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdE1vZHVsZTFTdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0b3Jlcy9UZXN0TW9kdWxlMVN0b3JlLmpzeFxuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9