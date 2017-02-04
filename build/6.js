webpackJsonp([6,7,8],{

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.State = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DevProps = __webpack_require__(23);

var _DevProps2 = _interopRequireDefault(_DevProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestModule1 = function (_React$Component) {
	_inherits(TestModule1, _React$Component);

	/**
  * 1. Хэш компонентов State (поля редактирования состояний этого модуля)
  *    в свою очередь сам является состоянием этого модуля. Поэтому:
  *    1.1. Если ввести в двух разных компонентах State один и тот же ключ,
  *         само состояние будет, ясен пень, в одном экземпляре, а значение будет
  *         браться, введённое последним; тоже логично, хотя и визуально странно.
  * 2. Ёлки растут иголками наружу, но это не является проявлением конформизма.
  */
	function TestModule1(props) {
		_classCallCheck(this, TestModule1);

		var _this = _possibleConstructorReturn(this, (TestModule1.__proto__ || Object.getPrototypeOf(TestModule1)).call(this, props));

		_this.state = {
			states: {},
			lastId: -1
		};
		return _this;
	}

	_createClass(TestModule1, [{
		key: "addremoveModuleState",
		value: function addremoveModuleState(p) {
			/*
   		let states = this.state.states;
   		if(typeof p.remove !== "undefined") {
   			delete states[p.remove];
   		} else {
   			states[this.state.lastId + 1] = <State
   				id={this.state.lastId + 1}
   				key={this.state.lastId + 1}
   				setModuleState={this.setModuleState.bind(this)}
   			/>;
   		}
   		this.setState({states: states, lastId: this.state.lastId + 1});
   */
			this.setState({ lastId: this.state.lastId + 1 });
		}
	}, {
		key: "setModuleState",
		value: function setModuleState(p) {
			if (typeof p.key !== "undefined" && typeof p.value !== "undefined") {
				this.setState(_defineProperty({}, p.key, p.value));
			}
			if (typeof p.orphaned !== "undefined") {
				delete this.state[p.orphaned];
				this.forceUpdate();
			}
			if (typeof p.id !== "undefined") {
				this.addremoveModuleState({ remove: p.id });
			}
		}
	}, {
		key: "componentWillMount",
		value: function componentWillMount() {
			//		this.addremoveModuleState({});
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				null,
				React.createElement(
					"h3",
					null,
					"TestModule1.props:"
				),
				React.createElement(_DevProps2.default, { data: this.props }),
				React.createElement(
					"h3",
					null,
					"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 TestModule1.state:"
				),
				Object.keys(this.state.states).map(function (key) {
					return _this2.state.states[key];
				}),
				React.createElement("input", { type: "button", value: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451",
					onClick: function onClick(evt) {
						return _this2.addremoveModuleState({ evt: evt });
					} }),
				React.createElement(
					"h3",
					null,
					"TestModule1.state:"
				),
				React.createElement(_DevProps2.default, { data: this.state }),
				React.createElement("hr", null)
			);
		}
	}]);

	return TestModule1;
}(React.Component);

exports.default = TestModule1;

var State = exports.State = function (_React$Component2) {
	_inherits(State, _React$Component2);

	function State(props) {
		_classCallCheck(this, State);

		var _this3 = _possibleConstructorReturn(this, (State.__proto__ || Object.getPrototypeOf(State)).call(this, props));

		_this3.state = {
			key: "",
			value: ""
		};
		return _this3;
	}

	_createClass(State, [{
		key: "changeKey",
		value: function changeKey(evt) {
			if (evt.target.value !== "states") {
				// if можно и убрать, пасхалочка получится :)
				this.props.setModuleState({
					key: evt.target.value,
					value: this.state.value,
					orphaned: this.state.key
				});
				this.setState({ key: evt.target.value });
			}
		}
	}, {
		key: "changeValue",
		value: function changeValue(evt) {
			this.props.setModuleState({
				key: this.state.key,
				value: evt.target.value
			});
			this.setState({ value: evt.target.value });
		}
	}, {
		key: "deleteState",
		value: function deleteState(evt) {
			this.props.setModuleState({
				orphaned: this.state.key,
				id: this.props.id
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement("input", { type: "text", value: this.state.key, placeholder: "\u0418\u043C\u044F \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F",
					onChange: this.changeKey.bind(this) }),
				React.createElement("input", { type: "text", value: this.state.value, placeholder: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F",
					onChange: this.changeValue.bind(this) }),
				React.createElement("input", { type: "button", value: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435",
					onClick: this.deleteState.bind(this) })
			);
		}
	}]);

	return State;
}(React.Component);

/***/ }),

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

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TestModule = __webpack_require__(73);

var _TestModule2 = _interopRequireDefault(_TestModule);

var _TestModule3 = __webpack_require__(74);

var _TestModule4 = _interopRequireDefault(_TestModule3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestSwitcher = function (_React$Component) {
	_inherits(TestSwitcher, _React$Component);

	function TestSwitcher() {
		_classCallCheck(this, TestSwitcher);

		return _possibleConstructorReturn(this, (TestSwitcher.__proto__ || Object.getPrototypeOf(TestSwitcher)).apply(this, arguments));
	}

	_createClass(TestSwitcher, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				null,
				React.createElement(
					"p",
					null,
					"<\u0422\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440>"
				),
				React.createElement(
					"p",
					null,
					React.createElement(
						"button",
						{ onClick: function onClick(evt) {
								return _this2.props.setAppModule({
									id: "TestModule1_0",
									type: _TestModule2.default,
									props: {
										text: "Свойство text",
										someprop: "Свойство someprop",
										number: 3
									},
									evt: evt
								});
							} },
						"TestModule1",
						React.createElement("br", null),
						"\u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u043E\xA0\u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438",
						React.createElement("br", null),
						"(text: \"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E text\", someprop: \"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E someprop\", number: 3)",
						React.createElement("br", null),
						"\u0438\u043B\u0438 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u0435\u0441\u043B\u0438 \u0443\u0436\u0435 \u0441\u043E\u0437\u0434\u0430\u043D"
					),
					"\xA0\xA0",
					React.createElement(
						"button",
						{ onClick: function onClick(evt) {
								return _this2.props.setAppModule({
									id: "TestModule2_0",
									type: _TestModule4.default,
									props: {
										someprop1: "Свойство 1",
										array: [1, 2, 3],
										someprop2: "Свойство 2"
									},
									evt: evt
								});
							} },
						"TestModule2",
						React.createElement("br", null),
						"\u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u043E\xA0\u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438",
						React.createElement("br", null),
						"(someprop1: \"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E 1\", array: [1, 2, 3], someprop: \"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E 2\")",
						React.createElement("br", null),
						"\u0438\u043B\u0438 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u0435\u0441\u043B\u0438 \u0443\u0436\u0435 \u0441\u043E\u0437\u0434\u0430\u043D"
					)
				)
			);
		}
	}]);

	return TestSwitcher;
}(React.Component);

exports.default = TestSwitcher;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGVzdC9UZXN0TW9kdWxlMS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXN0L1Rlc3RNb2R1bGUyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rlc3QvVGVzdFN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvVGVzdE1vZHVsZTJBY3Rpb25UeXBlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9UZXN0TW9kdWxlMkFjdGlvbnMuanN4Iiwid2VicGFjazovLy8uL3N0b3Jlcy9UZXN0TW9kdWxlMlN0b3JlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuU3RhdGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfRGV2UHJvcHMgPSByZXF1aXJlKFwiLi4vc2VydmljZS9EZXZQcm9wcy5qc3hcIik7XG5cbnZhciBfRGV2UHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGV2UHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBUZXN0TW9kdWxlMSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhUZXN0TW9kdWxlMSwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0LyoqXG4gICogMS4g0KXRjdGIINC60L7QvNC/0L7QvdC10L3RgtC+0LIgU3RhdGUgKNC/0L7Qu9GPINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0YHQvtGB0YLQvtGP0L3QuNC5INGN0YLQvtCz0L4g0LzQvtC00YPQu9GPKVxuICAqICAgINCyINGB0LLQvtGOINC+0YfQtdGA0LXQtNGMINGB0LDQvCDRj9Cy0LvRj9C10YLRgdGPINGB0L7RgdGC0L7Rj9C90LjQtdC8INGN0YLQvtCz0L4g0LzQvtC00YPQu9GPLiDQn9C+0Y3RgtC+0LzRgzpcbiAgKiAgICAxLjEuINCV0YHQu9C4INCy0LLQtdGB0YLQuCDQsiDQtNCy0YPRhSDRgNCw0LfQvdGL0YUg0LrQvtC80L/QvtC90LXQvdGC0LDRhSBTdGF0ZSDQvtC00LjQvSDQuCDRgtC+0YIg0LbQtSDQutC70Y7RhyxcbiAgKiAgICAgICAgINGB0LDQvNC+INGB0L7RgdGC0L7Rj9C90LjQtSDQsdGD0LTQtdGCLCDRj9GB0LXQvSDQv9C10L3RjCwg0LIg0L7QtNC90L7QvCDRjdC60LfQtdC80L/Qu9GP0YDQtSwg0LAg0LfQvdCw0YfQtdC90LjQtSDQsdGD0LTQtdGCXG4gICogICAgICAgICDQsdGA0LDRgtGM0YHRjywg0LLQstC10LTRkdC90L3QvtC1INC/0L7RgdC70LXQtNC90LjQvDsg0YLQvtC20LUg0LvQvtCz0LjRh9C90L4sINGF0L7RgtGPINC4INCy0LjQt9GD0LDQu9GM0L3QviDRgdGC0YDQsNC90L3Qvi5cbiAgKiAyLiDQgdC70LrQuCDRgNCw0YHRgtGD0YIg0LjQs9C+0LvQutCw0LzQuCDQvdCw0YDRg9C20YMsINC90L4g0Y3RgtC+INC90LUg0Y/QstC70Y/QtdGC0YHRjyDQv9GA0L7Rj9Cy0LvQtdC90LjQtdC8INC60L7QvdGE0L7RgNC80LjQt9C80LAuXG4gICovXG5cdGZ1bmN0aW9uIFRlc3RNb2R1bGUxKHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RNb2R1bGUxKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUZXN0TW9kdWxlMS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRlc3RNb2R1bGUxKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdFx0X3RoaXMuc3RhdGUgPSB7XG5cdFx0XHRzdGF0ZXM6IHt9LFxuXHRcdFx0bGFzdElkOiAtMVxuXHRcdH07XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFRlc3RNb2R1bGUxLCBbe1xuXHRcdGtleTogXCJhZGRyZW1vdmVNb2R1bGVTdGF0ZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBhZGRyZW1vdmVNb2R1bGVTdGF0ZShwKSB7XG5cdFx0XHQvKlxuICAgXHRcdGxldCBzdGF0ZXMgPSB0aGlzLnN0YXRlLnN0YXRlcztcbiAgIFx0XHRpZih0eXBlb2YgcC5yZW1vdmUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgIFx0XHRcdGRlbGV0ZSBzdGF0ZXNbcC5yZW1vdmVdO1xuICAgXHRcdH0gZWxzZSB7XG4gICBcdFx0XHRzdGF0ZXNbdGhpcy5zdGF0ZS5sYXN0SWQgKyAxXSA9IDxTdGF0ZVxuICAgXHRcdFx0XHRpZD17dGhpcy5zdGF0ZS5sYXN0SWQgKyAxfVxuICAgXHRcdFx0XHRrZXk9e3RoaXMuc3RhdGUubGFzdElkICsgMX1cbiAgIFx0XHRcdFx0c2V0TW9kdWxlU3RhdGU9e3RoaXMuc2V0TW9kdWxlU3RhdGUuYmluZCh0aGlzKX1cbiAgIFx0XHRcdC8+O1xuICAgXHRcdH1cbiAgIFx0XHR0aGlzLnNldFN0YXRlKHtzdGF0ZXM6IHN0YXRlcywgbGFzdElkOiB0aGlzLnN0YXRlLmxhc3RJZCArIDF9KTtcbiAgICovXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgbGFzdElkOiB0aGlzLnN0YXRlLmxhc3RJZCArIDEgfSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInNldE1vZHVsZVN0YXRlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNldE1vZHVsZVN0YXRlKHApIHtcblx0XHRcdGlmICh0eXBlb2YgcC5rZXkgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHAudmFsdWUgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZShfZGVmaW5lUHJvcGVydHkoe30sIHAua2V5LCBwLnZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHAub3JwaGFuZWQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0ZGVsZXRlIHRoaXMuc3RhdGVbcC5vcnBoYW5lZF07XG5cdFx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgcC5pZCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHR0aGlzLmFkZHJlbW92ZU1vZHVsZVN0YXRlKHsgcmVtb3ZlOiBwLmlkIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJjb21wb25lbnRXaWxsTW91bnRcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdFx0Ly9cdFx0dGhpcy5hZGRyZW1vdmVNb2R1bGVTdGF0ZSh7fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInJlbmRlclwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJoM1wiLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XCJUZXN0TW9kdWxlMS5wcm9wczpcIlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KF9EZXZQcm9wczIuZGVmYXVsdCwgeyBkYXRhOiB0aGlzLnByb3BzIH0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiaDNcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFwiXFx1MDQyMFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0M0FcXHUwNDQyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgVGVzdE1vZHVsZTEuc3RhdGU6XCJcblx0XHRcdFx0KSxcblx0XHRcdFx0T2JqZWN0LmtleXModGhpcy5zdGF0ZS5zdGF0ZXMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIF90aGlzMi5zdGF0ZS5zdGF0ZXNba2V5XTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIHZhbHVlOiBcIlxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0MzBcXHUwNDMyXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0MzVcXHUwNDQ5XFx1MDQ1MVwiLFxuXHRcdFx0XHRcdG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZ0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXMyLmFkZHJlbW92ZU1vZHVsZVN0YXRlKHsgZXZ0OiBldnQgfSk7XG5cdFx0XHRcdFx0fSB9KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImgzXCIsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcIlRlc3RNb2R1bGUxLnN0YXRlOlwiXG5cdFx0XHRcdCksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoX0RldlByb3BzMi5kZWZhdWx0LCB7IGRhdGE6IHRoaXMuc3RhdGUgfSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gVGVzdE1vZHVsZTE7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RNb2R1bGUxO1xuXG52YXIgU3RhdGUgPSBleHBvcnRzLlN0YXRlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQyKSB7XG5cdF9pbmhlcml0cyhTdGF0ZSwgX1JlYWN0JENvbXBvbmVudDIpO1xuXG5cdGZ1bmN0aW9uIFN0YXRlKHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRlKTtcblxuXHRcdHZhciBfdGhpczMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU3RhdGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdGF0ZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdF90aGlzMy5zdGF0ZSA9IHtcblx0XHRcdGtleTogXCJcIixcblx0XHRcdHZhbHVlOiBcIlwiXG5cdFx0fTtcblx0XHRyZXR1cm4gX3RoaXMzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFN0YXRlLCBbe1xuXHRcdGtleTogXCJjaGFuZ2VLZXlcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2hhbmdlS2V5KGV2dCkge1xuXHRcdFx0aWYgKGV2dC50YXJnZXQudmFsdWUgIT09IFwic3RhdGVzXCIpIHtcblx0XHRcdFx0Ly8gaWYg0LzQvtC20L3QviDQuCDRg9Cx0YDQsNGC0YwsINC/0LDRgdGF0LDQu9C+0YfQutCwINC/0L7Qu9GD0YfQuNGC0YHRjyA6KVxuXHRcdFx0XHR0aGlzLnByb3BzLnNldE1vZHVsZVN0YXRlKHtcblx0XHRcdFx0XHRrZXk6IGV2dC50YXJnZXQudmFsdWUsXG5cdFx0XHRcdFx0dmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXG5cdFx0XHRcdFx0b3JwaGFuZWQ6IHRoaXMuc3RhdGUua2V5XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsga2V5OiBldnQudGFyZ2V0LnZhbHVlIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJjaGFuZ2VWYWx1ZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjaGFuZ2VWYWx1ZShldnQpIHtcblx0XHRcdHRoaXMucHJvcHMuc2V0TW9kdWxlU3RhdGUoe1xuXHRcdFx0XHRrZXk6IHRoaXMuc3RhdGUua2V5LFxuXHRcdFx0XHR2YWx1ZTogZXZ0LnRhcmdldC52YWx1ZVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2dC50YXJnZXQudmFsdWUgfSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImRlbGV0ZVN0YXRlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZVN0YXRlKGV2dCkge1xuXHRcdFx0dGhpcy5wcm9wcy5zZXRNb2R1bGVTdGF0ZSh7XG5cdFx0XHRcdG9ycGhhbmVkOiB0aGlzLnN0YXRlLmtleSxcblx0XHRcdFx0aWQ6IHRoaXMucHJvcHMuaWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJyZW5kZXJcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogdGhpcy5zdGF0ZS5rZXksIHBsYWNlaG9sZGVyOiBcIlxcdTA0MThcXHUwNDNDXFx1MDQ0RiBcXHUwNDQxXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzRVxcdTA0NEZcXHUwNDNEXFx1MDQzOFxcdTA0NEZcIixcblx0XHRcdFx0XHRvbkNoYW5nZTogdGhpcy5jaGFuZ2VLZXkuYmluZCh0aGlzKSB9KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLCBwbGFjZWhvbGRlcjogXCJcXHUwNDE3XFx1MDQzRFxcdTA0MzBcXHUwNDQ3XFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQxXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzRVxcdTA0NEZcXHUwNDNEXFx1MDQzOFxcdTA0NEZcIixcblx0XHRcdFx0XHRvbkNoYW5nZTogdGhpcy5jaGFuZ2VWYWx1ZS5iaW5kKHRoaXMpIH0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImJ1dHRvblwiLCB2YWx1ZTogXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0NDFcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQ0RlxcdTA0M0RcXHUwNDM4XFx1MDQzNVwiLFxuXHRcdFx0XHRcdG9uQ2xpY2s6IHRoaXMuZGVsZXRlU3RhdGUuYmluZCh0aGlzKSB9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gU3RhdGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3Rlc3QvVGVzdE1vZHVsZTEuanN4XG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDYgOCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCJmbHV4L3V0aWxzXCIpO1xuXG52YXIgX1N0b3Jlc1Bvb2wgPSByZXF1aXJlKFwiLi4vLi4vU3RvcmVzUG9vbC5qc3hcIik7XG5cbnZhciBfU3RvcmVzUG9vbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdG9yZXNQb29sKTtcblxudmFyIF9UZXN0TW9kdWxlMlN0b3JlID0gcmVxdWlyZShcIi4uLy4uL3N0b3Jlcy9UZXN0TW9kdWxlMlN0b3JlLmpzeFwiKTtcblxudmFyIF9UZXN0TW9kdWxlMlN0b3JlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rlc3RNb2R1bGUyU3RvcmUpO1xuXG52YXIgX1Rlc3RNb2R1bGUyQWN0aW9ucyA9IHJlcXVpcmUoXCIuLi8uLi9hY3Rpb25zL1Rlc3RNb2R1bGUyQWN0aW9ucy5qc3hcIik7XG5cbnZhciBfVGVzdE1vZHVsZTJBY3Rpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rlc3RNb2R1bGUyQWN0aW9ucyk7XG5cbnZhciBfRGV2UHJvcHMgPSByZXF1aXJlKFwiLi4vc2VydmljZS9EZXZQcm9wcy5qc3hcIik7XG5cbnZhciBfRGV2UHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGV2UHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBUZXN0TW9kdWxlMiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhUZXN0TW9kdWxlMiwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gVGVzdE1vZHVsZTIocHJvcHMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVzdE1vZHVsZTIpO1xuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRlc3RNb2R1bGUyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGVzdE1vZHVsZTIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cblx0XHRfU3RvcmVzUG9vbDIuZGVmYXVsdC5jcmVhdGUoXCJUZXN0TW9kdWxlMlwiICsgcHJvcHMuY2FmZmVfaWQsIF9UZXN0TW9kdWxlMlN0b3JlMi5kZWZhdWx0LCBwcm9wcy5jYWZmZV9pZCwgXCJteXRlc3RcIik7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFRlc3RNb2R1bGUyLCBbe1xuXHRcdGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRcdF9TdG9yZXNQb29sMi5kZWZhdWx0LnJlbW92ZShcIlRlc3RNb2R1bGUyXCIgKyB0aGlzLnByb3BzLmNhZmZlX2lkKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBuID0gXCJzdGF0ZTFcIixcblx0XHRcdCAgICB2ID0gMjtcblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJidXR0b25cIixcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2dCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1Rlc3RNb2R1bGUyQWN0aW9uczIuZGVmYXVsdC5zZXRUZXN0U3RhdGUobiwgdiwgZXZ0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFwiXFx1MDQyM1xcdTA0MzJcXHUwNDM1XFx1MDQzQlxcdTA0MzhcXHUwNDQ3XFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQzMlxcdTA0M0VcXHUwNDM1IFxcdTA0NDFcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQ0RlxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUyMDFDXCIsXG5cdFx0XHRcdFx0bixcblx0XHRcdFx0XHRcIlxcdTIwMUQgXFx1MDQzRFxcdTA0MzAgXCIsXG5cdFx0XHRcdFx0dlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImgzXCIsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcIlRlc3RNb2R1bGUyW1wiLFxuXHRcdFx0XHRcdHRoaXMucHJvcHMubnVtLFxuXHRcdFx0XHRcdFwiXS5zdGF0ZTpcIlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRGV2UHJvcHMyLmRlZmF1bHQsIHsgZGF0YTogdGhpcy5zdGF0ZS5UZXN0TW9kdWxlMlN0b3JlLl9yb290LmVudHJpZXMgfSksXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiaDNcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFwiVGVzdE1vZHVsZTJbXCIsXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5udW0sXG5cdFx0XHRcdFx0XCJdLnByb3BzOlwiXG5cdFx0XHRcdCksXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9EZXZQcm9wczIuZGVmYXVsdCwgeyBkYXRhOiB0aGlzLnByb3BzIH0pLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImhyXCIsIG51bGwpXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0sIFt7XG5cdFx0a2V5OiBcImdldFN0b3Jlc1wiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRTdG9yZXMocHJvcHMpIHtcblx0XHRcdHJldHVybiBfU3RvcmVzUG9vbDIuZGVmYXVsdC5hcnIoXCJUZXN0TW9kdWxlMlwiICsgcHJvcHMuY2FmZmVfaWQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJjYWxjdWxhdGVTdGF0ZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjYWxjdWxhdGVTdGF0ZShwcmV2U3RhdGUsIHByb3BzKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRUZXN0TW9kdWxlMlN0b3JlOiBfU3RvcmVzUG9vbDIuZGVmYXVsdC5pdGVtKFwiVGVzdE1vZHVsZTJcIiArIHByb3BzLmNhZmZlX2lkKS5nZXRTdGF0ZSgpXG5cdFx0XHR9O1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBUZXN0TW9kdWxlMjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF91dGlscy5Db250YWluZXIuY3JlYXRlKFRlc3RNb2R1bGUyLCB7IHdpdGhQcm9wczogdHJ1ZSB9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvdGVzdC9UZXN0TW9kdWxlMi5qc3hcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfVGVzdE1vZHVsZSA9IHJlcXVpcmUoXCIuL1Rlc3RNb2R1bGUxLmpzeFwiKTtcblxudmFyIF9UZXN0TW9kdWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rlc3RNb2R1bGUpO1xuXG52YXIgX1Rlc3RNb2R1bGUzID0gcmVxdWlyZShcIi4vVGVzdE1vZHVsZTIuanN4XCIpO1xuXG52YXIgX1Rlc3RNb2R1bGU0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGVzdE1vZHVsZTMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBUZXN0U3dpdGNoZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoVGVzdFN3aXRjaGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBUZXN0U3dpdGNoZXIoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RTd2l0Y2hlcik7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRlc3RTd2l0Y2hlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRlc3RTd2l0Y2hlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFRlc3RTd2l0Y2hlciwgW3tcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBfdGhpczIgPSB0aGlzO1xuXG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcInBcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFwiPFxcdTA0MjJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQzMlxcdTA0NEJcXHUwNDM5IFxcdTA0NDFcXHUwNDM1XFx1MDQzQlxcdTA0MzVcXHUwNDNBXFx1MDQ0MlxcdTA0M0VcXHUwNDQwPlwiXG5cdFx0XHRcdCksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJwXCIsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XCJidXR0b25cIixcblx0XHRcdFx0XHRcdHsgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldnQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXMyLnByb3BzLnNldEFwcE1vZHVsZSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZDogXCJUZXN0TW9kdWxlMV8wXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBfVGVzdE1vZHVsZTIuZGVmYXVsdCxcblx0XHRcdFx0XHRcdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IFwi0KHQstC+0LnRgdGC0LLQviB0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNvbWVwcm9wOiBcItCh0LLQvtC50YHRgtCy0L4gc29tZXByb3BcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0bnVtYmVyOiAzXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXZ0OiBldnRcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSB9LFxuXHRcdFx0XHRcdFx0XCJUZXN0TW9kdWxlMVwiLFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxuXHRcdFx0XHRcdFx0XCJcXHUwNDQxXFx1MDQzRVxcdTA0MzdcXHUwNDM0XFx1MDQzMFxcdTA0NDJcXHUwNDRDIFxcdTA0NDFcXHUwNDNFXFx4QTBcXHUwNDQxXFx1MDQzMlxcdTA0M0VcXHUwNDM5XFx1MDQ0MVxcdTA0NDJcXHUwNDMyXFx1MDQzMFxcdTA0M0NcXHUwNDM4XCIsXG5cdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXG5cdFx0XHRcdFx0XHRcIih0ZXh0OiBcXFwiXFx1MDQyMVxcdTA0MzJcXHUwNDNFXFx1MDQzOVxcdTA0NDFcXHUwNDQyXFx1MDQzMlxcdTA0M0UgdGV4dFxcXCIsIHNvbWVwcm9wOiBcXFwiXFx1MDQyMVxcdTA0MzJcXHUwNDNFXFx1MDQzOVxcdTA0NDFcXHUwNDQyXFx1MDQzMlxcdTA0M0Ugc29tZXByb3BcXFwiLCBudW1iZXI6IDMpXCIsXG5cdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXG5cdFx0XHRcdFx0XHRcIlxcdTA0MzhcXHUwNDNCXFx1MDQzOCBcXHUwNDMwXFx1MDQzQVxcdTA0NDJcXHUwNDM4XFx1MDQzMlxcdTA0MzhcXHUwNDQwXFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0NEMsIFxcdTA0MzVcXHUwNDQxXFx1MDQzQlxcdTA0MzggXFx1MDQ0M1xcdTA0MzZcXHUwNDM1IFxcdTA0NDFcXHUwNDNFXFx1MDQzN1xcdTA0MzRcXHUwNDMwXFx1MDQzRFwiXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcIlxceEEwXFx4QTBcIixcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XCJidXR0b25cIixcblx0XHRcdFx0XHRcdHsgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldnQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXMyLnByb3BzLnNldEFwcE1vZHVsZSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZDogXCJUZXN0TW9kdWxlMl8wXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBfVGVzdE1vZHVsZTQuZGVmYXVsdCxcblx0XHRcdFx0XHRcdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNvbWVwcm9wMTogXCLQodCy0L7QudGB0YLQstC+IDFcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJyYXk6IFsxLCAyLCAzXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c29tZXByb3AyOiBcItCh0LLQvtC50YHRgtCy0L4gMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXZ0OiBldnRcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSB9LFxuXHRcdFx0XHRcdFx0XCJUZXN0TW9kdWxlMlwiLFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxuXHRcdFx0XHRcdFx0XCJcXHUwNDQxXFx1MDQzRVxcdTA0MzdcXHUwNDM0XFx1MDQzMFxcdTA0NDJcXHUwNDRDIFxcdTA0NDFcXHUwNDNFXFx4QTBcXHUwNDQxXFx1MDQzMlxcdTA0M0VcXHUwNDM5XFx1MDQ0MVxcdTA0NDJcXHUwNDMyXFx1MDQzMFxcdTA0M0NcXHUwNDM4XCIsXG5cdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXG5cdFx0XHRcdFx0XHRcIihzb21lcHJvcDE6IFxcXCJcXHUwNDIxXFx1MDQzMlxcdTA0M0VcXHUwNDM5XFx1MDQ0MVxcdTA0NDJcXHUwNDMyXFx1MDQzRSAxXFxcIiwgYXJyYXk6IFsxLCAyLCAzXSwgc29tZXByb3A6IFxcXCJcXHUwNDIxXFx1MDQzMlxcdTA0M0VcXHUwNDM5XFx1MDQ0MVxcdTA0NDJcXHUwNDMyXFx1MDQzRSAyXFxcIilcIixcblx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcblx0XHRcdFx0XHRcdFwiXFx1MDQzOFxcdTA0M0JcXHUwNDM4IFxcdTA0MzBcXHUwNDNBXFx1MDQ0MlxcdTA0MzhcXHUwNDMyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQ0QywgXFx1MDQzNVxcdTA0NDFcXHUwNDNCXFx1MDQzOCBcXHUwNDQzXFx1MDQzNlxcdTA0MzUgXFx1MDQ0MVxcdTA0M0VcXHUwNDM3XFx1MDQzNFxcdTA0MzBcXHUwNDNEXCJcblx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFRlc3RTd2l0Y2hlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdFN3aXRjaGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy90ZXN0L1Rlc3RTd2l0Y2hlci5qc3hcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xudmFyIFRlc3RNb2R1bGUyQWN0aW9uVHlwZXMgPSB7XG5cdFNFVF9TVEFURTogXCJTRVRfU1RBVEVcIlxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdE1vZHVsZTJBY3Rpb25UeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnN0YW50cy9UZXN0TW9kdWxlMkFjdGlvblR5cGVzLmpzeFxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDciLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9UZXN0TW9kdWxlMkFjdGlvblR5cGVzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9UZXN0TW9kdWxlMkFjdGlvblR5cGVzLmpzeFwiKTtcblxudmFyIF9UZXN0TW9kdWxlMkFjdGlvblR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rlc3RNb2R1bGUyQWN0aW9uVHlwZXMpO1xuXG52YXIgX0Rpc3BhdGNoZXIgPSByZXF1aXJlKFwiLi4vRGlzcGF0Y2hlci5qc3hcIik7XG5cbnZhciBfRGlzcGF0Y2hlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EaXNwYXRjaGVyKTtcblxudmFyIF9TZXJ2ZXJBcGkgPSByZXF1aXJlKFwiLi4vU2VydmVyQXBpLmpzeFwiKTtcblxudmFyIF9TZXJ2ZXJBcGkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2VydmVyQXBpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRlc3RNb2R1bGUyQWN0aW9ucyA9IHtcblx0c2V0VGVzdFN0YXRlOiBmdW5jdGlvbiBzZXRUZXN0U3RhdGUobmFtZSwgdmFsdWUsIGV2dCkge1xuXHRcdF9EaXNwYXRjaGVyMi5kZWZhdWx0LmRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IF9UZXN0TW9kdWxlMkFjdGlvblR5cGVzMi5kZWZhdWx0LlNFVF9TVEFURSxcblx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdE1vZHVsZTJBY3Rpb25zO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYWN0aW9ucy9UZXN0TW9kdWxlMkFjdGlvbnMuanN4XG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2ltbXV0YWJsZSA9IHJlcXVpcmUoXCJpbW11dGFibGVcIik7XG5cbnZhciBfaW1tdXRhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltbXV0YWJsZSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiZmx1eC91dGlsc1wiKTtcblxudmFyIF9UZXN0TW9kdWxlMkFjdGlvblR5cGVzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9UZXN0TW9kdWxlMkFjdGlvblR5cGVzLmpzeFwiKTtcblxudmFyIF9UZXN0TW9kdWxlMkFjdGlvblR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rlc3RNb2R1bGUyQWN0aW9uVHlwZXMpO1xuXG52YXIgX0Rpc3BhdGNoZXIgPSByZXF1aXJlKFwiLi4vRGlzcGF0Y2hlci5qc3hcIik7XG5cbnZhciBfRGlzcGF0Y2hlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EaXNwYXRjaGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVGVzdE1vZHVsZTJTdG9yZSA9IGZ1bmN0aW9uIChfUmVkdWNlU3RvcmUpIHtcblx0X2luaGVyaXRzKFRlc3RNb2R1bGUyU3RvcmUsIF9SZWR1Y2VTdG9yZSk7XG5cblx0ZnVuY3Rpb24gVGVzdE1vZHVsZTJTdG9yZShjYWZmZV9pZCwgZGVzYykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXN0TW9kdWxlMlN0b3JlKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUZXN0TW9kdWxlMlN0b3JlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGVzdE1vZHVsZTJTdG9yZSkpLmNhbGwodGhpcywgX0Rpc3BhdGNoZXIyLmRlZmF1bHQpKTtcblxuXHRcdGNvbnNvbGUubG9nKGNhZmZlX2lkKTtcblx0XHRjb25zb2xlLmxvZyhkZXNjKTtcblx0XHRfdGhpcy5jYWZmZV9pZCA9IGNhZmZlX2lkO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhUZXN0TW9kdWxlMlN0b3JlLCBbe1xuXHRcdGtleTogXCJnZXRJbml0aWFsU3RhdGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuXHRcdFx0cmV0dXJuIF9pbW11dGFibGUyLmRlZmF1bHQuTWFwKHtcblx0XHRcdFx0c3RhdGUxOiAwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicmVkdWNlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlZHVjZShzdGF0ZSwgYWN0aW9uKSB7XG5cdFx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRcdGNhc2UgX1Rlc3RNb2R1bGUyQWN0aW9uVHlwZXMyLmRlZmF1bHQuU0VUX1NUQVRFOlxuXHRcdFx0XHRcdHJldHVybiBzdGF0ZS51cGRhdGUoYWN0aW9uLm5hbWUsIGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaSArIGFjdGlvbi52YWx1ZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFRlc3RNb2R1bGUyU3RvcmU7XG59KF91dGlscy5SZWR1Y2VTdG9yZSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RNb2R1bGUyU3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdG9yZXMvVGVzdE1vZHVsZTJTdG9yZS5qc3hcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9