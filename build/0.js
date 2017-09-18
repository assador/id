webpackJsonp([0,1,2,3],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VydmljZS9TdGF0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXN0L1Rlc3RNb2R1bGUxLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rlc3QvVGVzdE1vZHVsZTIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGVzdC9UZXN0U3dpdGNoZXIuanN4Iiwid2VicGFjazovLy8uL2NvbnN0YW50cy9UZXN0TW9kdWxlMUFjdGlvblR5cGVzLmpzeCIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvVGVzdE1vZHVsZTJBY3Rpb25UeXBlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9UZXN0TW9kdWxlMUFjdGlvbnMuanN4Iiwid2VicGFjazovLy8uL2FjdGlvbnMvVGVzdE1vZHVsZTJBY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zdG9yZXMvVGVzdE1vZHVsZTFTdG9yZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmVzL1Rlc3RNb2R1bGUyU3RvcmUuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICog0JrQvtC80L/QvtC90LXQvdGCINC00LvRjyDQtNC+0LHQsNCy0LvQtdC90LjRjywg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQuCDRg9C00LDQu9C10L3QuNGPINGB0L7RgdGC0L7Rj9C90LjQuSDRgNC+0LTQuNGC0LXQu9GM0YHQutC+0LPQvlxuICog0LrQvtC80L/QvtC90LXQvdGC0LAg4oCUINC/0L4g0L7QtNC90L7QvNGDIFN0YXRlINC90LAg0LrQsNC20LTQvtC1INGB0L7RgdGC0L7Rj9C90LjQtSDRgNC+0LTQuNGC0LXQu9GM0YHQutC+0LPQviDQutC+0LzQv9C+0L3QtdC90YLQsC5cbiAqINCf0YDQuCDRgdC+0LfQtNCw0L3QuNC4ICjRgNC+0LTQuNGC0LXQu9C10LwpINC10LzRgyDQtNC+0LvQttC90Ysg0L/QtdGA0LXQtNCw0LLQsNGC0YzRgdGPINGB0LLQvtC50YHRgtCy0LAgKNC60LDQuiDQvNC40L3QuNC80YPQvCk6XG4gKiBrPXvQutC70Y7Rh1/RgdC+0YHRgtC+0Y/QvdC40Y99LCB2PXvQt9C90LDRh9C10L3QuNC1X9GB0L7RgdGC0L7Rj9C90LjRj30sIHBhcmVudE1vZHVsZU51bT17SURf0YDQvtC00LjRgtC10LvRj30sXG4gKiBzZXRNb2R1bGVTdGF0ZT170YTRg9C90LrRhtC40Y9f0YDQvtC00LjRgtC10LvRj1/QutC+0YLQvtGA0LDRj1/QvNC10L3Rj9C10YJf0YHQsNC80Lhf0YDQvtC00LjRgtC10LvRjNGB0LrQuNC1X9GB0L7RgdGC0L7Rj9C90LjRj31cbiAqL1xudmFyIFN0YXRlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0X2luaGVyaXRzKFN0YXRlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBTdGF0ZSgpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdGUpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTdGF0ZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFN0YXRlKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoU3RhdGUsIFt7XG5cdFx0a2V5OiBcImNoYW5nZUtleVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjaGFuZ2VLZXkoZXZ0KSB7XG5cdFx0XHR0aGlzLnByb3BzLnNldE1vZHVsZVN0YXRlKHRoaXMucHJvcHMucGFyZW50TW9kdWxlTnVtLCB7XG5cdFx0XHRcdGtleTogZXZ0LnRhcmdldC52YWx1ZSxcblx0XHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudixcblx0XHRcdFx0b3JwaGFuZWQ6IHRoaXMucHJvcHMua1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImNoYW5nZVZhbHVlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNoYW5nZVZhbHVlKGV2dCkge1xuXHRcdFx0dGhpcy5wcm9wcy5zZXRNb2R1bGVTdGF0ZSh0aGlzLnByb3BzLnBhcmVudE1vZHVsZU51bSwge1xuXHRcdFx0XHRrZXk6IHRoaXMucHJvcHMuayxcblx0XHRcdFx0dmFsdWU6IGV2dC50YXJnZXQudmFsdWVcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJkZWxldGVTdGF0ZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBkZWxldGVTdGF0ZSgpIHtcblx0XHRcdHRoaXMucHJvcHMuc2V0TW9kdWxlU3RhdGUodGhpcy5wcm9wcy5wYXJlbnRNb2R1bGVOdW0sIHtcblx0XHRcdFx0b3JwaGFuZWQ6IHRoaXMucHJvcHMua1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInJlbmRlclwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBcImNvbC01XCIgfSxcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgdmFsdWU6IHRoaXMucHJvcHMuaywgcGxhY2Vob2xkZXI6IFwiXFx1MDQxOFxcdTA0M0NcXHUwNDRGIFxcdTA0NDFcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQ0RlxcdTA0M0RcXHUwNDM4XFx1MDQ0RlwiLFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U6IHRoaXMuY2hhbmdlS2V5LmJpbmQodGhpcyksXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6IFwiZmllbGR3aWR0aF8xMDBcIlxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJjb2wtNVwiIH0sXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiB0aGlzLnByb3BzLnYsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MTdcXHUwNDNEXFx1MDQzMFxcdTA0NDdcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0NDFcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQ0RlxcdTA0M0RcXHUwNDM4XFx1MDQ0RlwiLFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U6IHRoaXMuY2hhbmdlVmFsdWUuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJmaWVsZHdpZHRoXzEwMFwiXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBcImNvbC0yXCIgfSxcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImJ1dHRvblwiLCB2YWx1ZTogXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIsXG5cdFx0XHRcdFx0XHRvbkNsaWNrOiB0aGlzLmRlbGV0ZVN0YXRlLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6IFwiZmllbGR3aWR0aF8xMDBcIlxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFN0YXRlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTdGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvc2VydmljZS9TdGF0ZS5qc3hcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiZmx1eC91dGlsc1wiKTtcblxudmFyIF9TdG9yZXNQb29sID0gcmVxdWlyZShcIi4uLy4uL1N0b3Jlc1Bvb2wuanN4XCIpO1xuXG52YXIgX1N0b3Jlc1Bvb2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3RvcmVzUG9vbCk7XG5cbnZhciBfVGVzdE1vZHVsZTFTdG9yZSA9IHJlcXVpcmUoXCIuLi8uLi9zdG9yZXMvVGVzdE1vZHVsZTFTdG9yZS5qc3hcIik7XG5cbnZhciBfVGVzdE1vZHVsZTFTdG9yZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXN0TW9kdWxlMVN0b3JlKTtcblxudmFyIF9UZXN0TW9kdWxlMUFjdGlvbnMgPSByZXF1aXJlKFwiLi4vLi4vYWN0aW9ucy9UZXN0TW9kdWxlMUFjdGlvbnMuanN4XCIpO1xuXG52YXIgX1Rlc3RNb2R1bGUxQWN0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXN0TW9kdWxlMUFjdGlvbnMpO1xuXG52YXIgX1N0YXRlID0gcmVxdWlyZShcIi4uL3NlcnZpY2UvU3RhdGUuanN4XCIpO1xuXG52YXIgX1N0YXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0YXRlKTtcblxudmFyIF9EZXZQcm9wcyA9IHJlcXVpcmUoXCIuLi9zZXJ2aWNlL0RldlByb3BzLmpzeFwiKTtcblxudmFyIF9EZXZQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EZXZQcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFRlc3RNb2R1bGUxID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0X2luaGVyaXRzKFRlc3RNb2R1bGUxLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHQvKipcbiAgKiDQoNCw0YHQutC+0LvQsdCw0YEuINCe0L/QuNGI0YMg0L/QvtC30LbQtS5cbiAgKi9cblx0ZnVuY3Rpb24gVGVzdE1vZHVsZTEocHJvcHMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVzdE1vZHVsZTEpO1xuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRlc3RNb2R1bGUxLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGVzdE1vZHVsZTEpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cblx0XHRfU3RvcmVzUG9vbDIuZGVmYXVsdC5jcmVhdGUoXCJUZXN0TW9kdWxlMV9cIiArIHByb3BzLm51bSwgX1Rlc3RNb2R1bGUxU3RvcmUyLmRlZmF1bHQsIHByb3BzLm51bSk7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFRlc3RNb2R1bGUxLCBbe1xuXHRcdGtleTogXCJyZW5kZXJcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdHZhciBzdGF0ZXMgPSB7fSxcblx0XHRcdCAgICBpbSA9IHRoaXMuc3RhdGUuVGVzdE1vZHVsZTFTdG9yZS5fcm9vdCxcblx0XHRcdCAgICBrZXlJZHggPSAtMTtcblx0XHRcdGlmICh0eXBlb2YgaW0gIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0T2JqZWN0LmtleXMoaW0uZW50cmllcykubWFwKGZ1bmN0aW9uIChpZHgpIHtcblx0XHRcdFx0XHRzdGF0ZXNbaW0uZW50cmllc1tpZHhdWzBdXSA9IGltLmVudHJpZXNbaWR4XVsxXTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiaDNcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFwiVGVzdE1vZHVsZTFbXCIsXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5udW0sXG5cdFx0XHRcdFx0XCJdLnByb3BzOlwiXG5cdFx0XHRcdCksXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9EZXZQcm9wczIuZGVmYXVsdCwgeyBkYXRhOiB0aGlzLnByb3BzIH0pLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImgzXCIsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcIlxcdTA0MjBcXHUwNDM1XFx1MDQzNFxcdTA0MzBcXHUwNDNBXFx1MDQ0MlxcdTA0MzhcXHUwNDQwXFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFRlc3RNb2R1bGUxW1wiLFxuXHRcdFx0XHRcdHRoaXMucHJvcHMubnVtLFxuXHRcdFx0XHRcdFwiXS5zdGF0ZTpcIlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBcInJvdyBvZmZzZXRfMSBtYXJnaW5fYm90dG9tXCIgfSxcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhzdGF0ZXMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRrZXlJZHgrKztcblx0XHRcdFx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfU3RhdGUyLmRlZmF1bHQsIHtcblx0XHRcdFx0XHRcdFx0a2V5OiBrZXlJZHgsXG5cdFx0XHRcdFx0XHRcdGs6IGtleSxcblx0XHRcdFx0XHRcdFx0djogc3RhdGVzW2tleV0sXG5cdFx0XHRcdFx0XHRcdHBhcmVudE1vZHVsZU51bTogX3RoaXMyLnByb3BzLm51bSxcblx0XHRcdFx0XHRcdFx0c2V0TW9kdWxlU3RhdGU6IF9UZXN0TW9kdWxlMUFjdGlvbnMyLmRlZmF1bHQuc2V0TW9kdWxlU3RhdGVcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCksXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwibWFyZ2luX2JvdHRvbVwiIH0sXG5cdFx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIHZhbHVlOiBcIlxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0MzBcXHUwNDMyXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0MzVcXHUwNDQ5XFx1MDQ1MVwiLFxuXHRcdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gb25DbGljayhldnQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9UZXN0TW9kdWxlMUFjdGlvbnMyLmRlZmF1bHQuYWRkTW9kdWxlU3RhdGUoX3RoaXMyLnByb3BzLm51bSk7XG5cdFx0XHRcdFx0XHR9IH0pXG5cdFx0XHRcdCksXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiaDNcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFwiVGVzdE1vZHVsZTFbXCIsXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5udW0sXG5cdFx0XHRcdFx0XCJdLnN0YXRlOlwiXG5cdFx0XHRcdCksXG5cdFx0XHRcdHR5cGVvZiBpbSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRGV2UHJvcHMyLmRlZmF1bHQsIHsgZGF0YTogaW0uZW50cmllcywgc3RvcmU6IHRydWUsIGhpZGU6IFwic3RhdGVzXCIgfSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSwgW3tcblx0XHRrZXk6IFwiZ2V0U3RvcmVzXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldFN0b3Jlcyhwcm9wcykge1xuXHRcdFx0cmV0dXJuIF9TdG9yZXNQb29sMi5kZWZhdWx0LmFycihcIlRlc3RNb2R1bGUxX1wiICsgcHJvcHMubnVtKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiY2FsY3VsYXRlU3RhdGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2FsY3VsYXRlU3RhdGUocHJldlN0YXRlLCBwcm9wcykge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0VGVzdE1vZHVsZTFTdG9yZTogX1N0b3Jlc1Bvb2wyLmRlZmF1bHQuaXRlbShcIlRlc3RNb2R1bGUxX1wiICsgcHJvcHMubnVtKS5nZXRTdGF0ZSgpXG5cdFx0XHR9O1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBUZXN0TW9kdWxlMTtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF91dGlscy5Db250YWluZXIuY3JlYXRlKFRlc3RNb2R1bGUxLCB7IHdpdGhQcm9wczogdHJ1ZSB9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvdGVzdC9UZXN0TW9kdWxlMS5qc3hcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcImZsdXgvdXRpbHNcIik7XG5cbnZhciBfU3RvcmVzUG9vbCA9IHJlcXVpcmUoXCIuLi8uLi9TdG9yZXNQb29sLmpzeFwiKTtcblxudmFyIF9TdG9yZXNQb29sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0b3Jlc1Bvb2wpO1xuXG52YXIgX1Rlc3RNb2R1bGUyU3RvcmUgPSByZXF1aXJlKFwiLi4vLi4vc3RvcmVzL1Rlc3RNb2R1bGUyU3RvcmUuanN4XCIpO1xuXG52YXIgX1Rlc3RNb2R1bGUyU3RvcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGVzdE1vZHVsZTJTdG9yZSk7XG5cbnZhciBfVGVzdE1vZHVsZTJBY3Rpb25zID0gcmVxdWlyZShcIi4uLy4uL2FjdGlvbnMvVGVzdE1vZHVsZTJBY3Rpb25zLmpzeFwiKTtcblxudmFyIF9UZXN0TW9kdWxlMkFjdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGVzdE1vZHVsZTJBY3Rpb25zKTtcblxudmFyIF9EZXZQcm9wcyA9IHJlcXVpcmUoXCIuLi9zZXJ2aWNlL0RldlByb3BzLmpzeFwiKTtcblxudmFyIF9EZXZQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EZXZQcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFRlc3RNb2R1bGUyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0X2luaGVyaXRzKFRlc3RNb2R1bGUyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBUZXN0TW9kdWxlMihwcm9wcykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXN0TW9kdWxlMik7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVGVzdE1vZHVsZTIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUZXN0TW9kdWxlMikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdF9TdG9yZXNQb29sMi5kZWZhdWx0LmNyZWF0ZShcIlRlc3RNb2R1bGUyX1wiICsgcHJvcHMubnVtLCBfVGVzdE1vZHVsZTJTdG9yZTIuZGVmYXVsdCwgcHJvcHMubnVtLCBcIm15dGVzdFwiKTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoVGVzdE1vZHVsZTIsIFt7XG5cdFx0a2V5OiBcInJlbmRlclwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0dmFyIG4gPSBcInN0YXRlMVwiLFxuXHRcdFx0ICAgIHYgPSAyO1xuXHRcdFx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBcIm1hcmdpbl9ib3R0b21cIiB9LFxuXHRcdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XCJidXR0b25cIixcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gb25DbGljayhldnQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX1Rlc3RNb2R1bGUyQWN0aW9uczIuZGVmYXVsdC5zZXRUZXN0U3RhdGUoX3RoaXMyLnByb3BzLm51bSwgbiwgdiwgZXZ0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFwiXFx1MDQyM1xcdTA0MzJcXHUwNDM1XFx1MDQzQlxcdTA0MzhcXHUwNDQ3XFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQzMlxcdTA0M0VcXHUwNDM1IFxcdTA0NDFcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQ0RlxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUyMDFDXCIsXG5cdFx0XHRcdFx0XHRuLFxuXHRcdFx0XHRcdFx0XCJcXHUyMDFEIFxcdTA0M0RcXHUwNDMwIFwiLFxuXHRcdFx0XHRcdFx0dlxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJoM1wiLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XCJUZXN0TW9kdWxlMltcIixcblx0XHRcdFx0XHR0aGlzLnByb3BzLm51bSxcblx0XHRcdFx0XHRcIl0uc3RhdGU6XCJcblx0XHRcdFx0KSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0RldlByb3BzMi5kZWZhdWx0LCB7IGRhdGE6IHRoaXMuc3RhdGUuVGVzdE1vZHVsZTJTdG9yZS5fcm9vdC5lbnRyaWVzLCBzdG9yZTogdHJ1ZSB9KSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJoM1wiLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XCJUZXN0TW9kdWxlMltcIixcblx0XHRcdFx0XHR0aGlzLnByb3BzLm51bSxcblx0XHRcdFx0XHRcIl0ucHJvcHM6XCJcblx0XHRcdFx0KSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0RldlByb3BzMi5kZWZhdWx0LCB7IGRhdGE6IHRoaXMucHJvcHMgfSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSwgW3tcblx0XHRrZXk6IFwiZ2V0U3RvcmVzXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldFN0b3Jlcyhwcm9wcykge1xuXHRcdFx0cmV0dXJuIF9TdG9yZXNQb29sMi5kZWZhdWx0LmFycihcIlRlc3RNb2R1bGUyX1wiICsgcHJvcHMubnVtKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiY2FsY3VsYXRlU3RhdGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2FsY3VsYXRlU3RhdGUocHJldlN0YXRlLCBwcm9wcykge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0VGVzdE1vZHVsZTJTdG9yZTogX1N0b3Jlc1Bvb2wyLmRlZmF1bHQuaXRlbShcIlRlc3RNb2R1bGUyX1wiICsgcHJvcHMubnVtKS5nZXRTdGF0ZSgpXG5cdFx0XHR9O1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBUZXN0TW9kdWxlMjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF91dGlscy5Db250YWluZXIuY3JlYXRlKFRlc3RNb2R1bGUyLCB7IHdpdGhQcm9wczogdHJ1ZSB9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvdGVzdC9UZXN0TW9kdWxlMi5qc3hcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfVGVzdE1vZHVsZSA9IHJlcXVpcmUoXCIuL1Rlc3RNb2R1bGUxLmpzeFwiKTtcblxudmFyIF9UZXN0TW9kdWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rlc3RNb2R1bGUpO1xuXG52YXIgX1Rlc3RNb2R1bGUzID0gcmVxdWlyZShcIi4vVGVzdE1vZHVsZTIuanN4XCIpO1xuXG52YXIgX1Rlc3RNb2R1bGU0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGVzdE1vZHVsZTMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBUZXN0U3dpdGNoZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoVGVzdFN3aXRjaGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBUZXN0U3dpdGNoZXIoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RTd2l0Y2hlcik7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRlc3RTd2l0Y2hlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRlc3RTd2l0Y2hlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFRlc3RTd2l0Y2hlciwgW3tcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBfdGhpczIgPSB0aGlzO1xuXG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcInBcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFwiPFxcdTA0MjJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQzMlxcdTA0NEJcXHUwNDM5IFxcdTA0NDFcXHUwNDM1XFx1MDQzQlxcdTA0MzVcXHUwNDNBXFx1MDQ0MlxcdTA0M0VcXHUwNDQwPlwiXG5cdFx0XHRcdCksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJwXCIsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XCJidXR0b25cIixcblx0XHRcdFx0XHRcdHsgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldnQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXMyLnByb3BzLnNldEFwcE1vZHVsZSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZDogXCJUZXN0TW9kdWxlMV8wXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBfVGVzdE1vZHVsZTIuZGVmYXVsdCxcblx0XHRcdFx0XHRcdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IFwi0KHQstC+0LnRgdGC0LLQviB0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNvbWVwcm9wOiBcItCh0LLQvtC50YHRgtCy0L4gc29tZXByb3BcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0bnVtYmVyOiAzXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXZ0OiBldnRcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSB9LFxuXHRcdFx0XHRcdFx0XCJUZXN0TW9kdWxlMVwiLFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxuXHRcdFx0XHRcdFx0XCJcXHUwNDQxXFx1MDQzRVxcdTA0MzdcXHUwNDM0XFx1MDQzMFxcdTA0NDJcXHUwNDRDIFxcdTA0NDFcXHUwNDNFXFx4QTBcXHUwNDQxXFx1MDQzMlxcdTA0M0VcXHUwNDM5XFx1MDQ0MVxcdTA0NDJcXHUwNDMyXFx1MDQzMFxcdTA0M0NcXHUwNDM4XCIsXG5cdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXG5cdFx0XHRcdFx0XHRcIih0ZXh0OiBcXFwiXFx1MDQyMVxcdTA0MzJcXHUwNDNFXFx1MDQzOVxcdTA0NDFcXHUwNDQyXFx1MDQzMlxcdTA0M0UgdGV4dFxcXCIsIHNvbWVwcm9wOiBcXFwiXFx1MDQyMVxcdTA0MzJcXHUwNDNFXFx1MDQzOVxcdTA0NDFcXHUwNDQyXFx1MDQzMlxcdTA0M0Ugc29tZXByb3BcXFwiLCBudW1iZXI6IDMpXCIsXG5cdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXG5cdFx0XHRcdFx0XHRcIlxcdTA0MzhcXHUwNDNCXFx1MDQzOCBcXHUwNDMwXFx1MDQzQVxcdTA0NDJcXHUwNDM4XFx1MDQzMlxcdTA0MzhcXHUwNDQwXFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0NEMsIFxcdTA0MzVcXHUwNDQxXFx1MDQzQlxcdTA0MzggXFx1MDQ0M1xcdTA0MzZcXHUwNDM1IFxcdTA0NDFcXHUwNDNFXFx1MDQzN1xcdTA0MzRcXHUwNDMwXFx1MDQzRFwiXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcIlxceEEwXFx4QTBcIixcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XCJidXR0b25cIixcblx0XHRcdFx0XHRcdHsgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldnQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXMyLnByb3BzLnNldEFwcE1vZHVsZSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZDogXCJUZXN0TW9kdWxlMl8wXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBfVGVzdE1vZHVsZTQuZGVmYXVsdCxcblx0XHRcdFx0XHRcdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNvbWVwcm9wMTogXCLQodCy0L7QudGB0YLQstC+IDFcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJyYXk6IFsxLCAyLCAzXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c29tZXByb3AyOiBcItCh0LLQvtC50YHRgtCy0L4gMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXZ0OiBldnRcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSB9LFxuXHRcdFx0XHRcdFx0XCJUZXN0TW9kdWxlMlwiLFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxuXHRcdFx0XHRcdFx0XCJcXHUwNDQxXFx1MDQzRVxcdTA0MzdcXHUwNDM0XFx1MDQzMFxcdTA0NDJcXHUwNDRDIFxcdTA0NDFcXHUwNDNFXFx4QTBcXHUwNDQxXFx1MDQzMlxcdTA0M0VcXHUwNDM5XFx1MDQ0MVxcdTA0NDJcXHUwNDMyXFx1MDQzMFxcdTA0M0NcXHUwNDM4XCIsXG5cdFx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXG5cdFx0XHRcdFx0XHRcIihzb21lcHJvcDE6IFxcXCJcXHUwNDIxXFx1MDQzMlxcdTA0M0VcXHUwNDM5XFx1MDQ0MVxcdTA0NDJcXHUwNDMyXFx1MDQzRSAxXFxcIiwgYXJyYXk6IFsxLCAyLCAzXSwgc29tZXByb3A6IFxcXCJcXHUwNDIxXFx1MDQzMlxcdTA0M0VcXHUwNDM5XFx1MDQ0MVxcdTA0NDJcXHUwNDMyXFx1MDQzRSAyXFxcIilcIixcblx0XHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcblx0XHRcdFx0XHRcdFwiXFx1MDQzOFxcdTA0M0JcXHUwNDM4IFxcdTA0MzBcXHUwNDNBXFx1MDQ0MlxcdTA0MzhcXHUwNDMyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQ0QywgXFx1MDQzNVxcdTA0NDFcXHUwNDNCXFx1MDQzOCBcXHUwNDQzXFx1MDQzNlxcdTA0MzUgXFx1MDQ0MVxcdTA0M0VcXHUwNDM3XFx1MDQzNFxcdTA0MzBcXHUwNDNEXCJcblx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFRlc3RTd2l0Y2hlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdFN3aXRjaGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy90ZXN0L1Rlc3RTd2l0Y2hlci5qc3hcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xudmFyIFRlc3RNb2R1bGUxQWN0aW9uVHlwZXMgPSB7XG5cdEFERFJFTU9WRV9NT0RVTEVfU1RBVEU6IFwiQUREX01PRFVMRV9TVEFURVwiLFxuXHRTRVRfTU9EVUxFX1NUQVRFOiBcIlNFVF9NT0RVTEVfU1RBVEVcIlxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdE1vZHVsZTFBY3Rpb25UeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnN0YW50cy9UZXN0TW9kdWxlMUFjdGlvblR5cGVzLmpzeFxuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbnZhciBUZXN0TW9kdWxlMkFjdGlvblR5cGVzID0ge1xuXHRTRVRfU1RBVEU6IFwiU0VUX1NUQVRFXCJcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RNb2R1bGUyQWN0aW9uVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb25zdGFudHMvVGVzdE1vZHVsZTJBY3Rpb25UeXBlcy5qc3hcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfVGVzdE1vZHVsZTFBY3Rpb25UeXBlcyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvVGVzdE1vZHVsZTFBY3Rpb25UeXBlcy5qc3hcIik7XG5cbnZhciBfVGVzdE1vZHVsZTFBY3Rpb25UeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXN0TW9kdWxlMUFjdGlvblR5cGVzKTtcblxudmFyIF9EaXNwYXRjaGVyID0gcmVxdWlyZShcIi4uL0Rpc3BhdGNoZXIuanN4XCIpO1xuXG52YXIgX0Rpc3BhdGNoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGlzcGF0Y2hlcik7XG5cbnZhciBfU2VydmVyQXBpID0gcmVxdWlyZShcIi4uL1NlcnZlckFwaS5qc3hcIik7XG5cbnZhciBfU2VydmVyQXBpMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NlcnZlckFwaSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUZXN0TW9kdWxlMUFjdGlvbnMgPSB7XG5cdGFkZE1vZHVsZVN0YXRlOiBmdW5jdGlvbiBhZGRNb2R1bGVTdGF0ZShudW0pIHtcblx0XHRfRGlzcGF0Y2hlcjIuZGVmYXVsdC5kaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBfVGVzdE1vZHVsZTFBY3Rpb25UeXBlczIuZGVmYXVsdC5BRERfTU9EVUxFX1NUQVRFLFxuXHRcdFx0bnVtOiBudW1cblx0XHR9KTtcblx0fSxcblx0c2V0TW9kdWxlU3RhdGU6IGZ1bmN0aW9uIHNldE1vZHVsZVN0YXRlKG51bSwgcCkge1xuXHRcdF9EaXNwYXRjaGVyMi5kZWZhdWx0LmRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IF9UZXN0TW9kdWxlMUFjdGlvblR5cGVzMi5kZWZhdWx0LlNFVF9NT0RVTEVfU1RBVEUsXG5cdFx0XHRudW06IG51bSxcblx0XHRcdHA6IHBcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdE1vZHVsZTFBY3Rpb25zO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYWN0aW9ucy9UZXN0TW9kdWxlMUFjdGlvbnMuanN4XG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1Rlc3RNb2R1bGUyQWN0aW9uVHlwZXMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL1Rlc3RNb2R1bGUyQWN0aW9uVHlwZXMuanN4XCIpO1xuXG52YXIgX1Rlc3RNb2R1bGUyQWN0aW9uVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGVzdE1vZHVsZTJBY3Rpb25UeXBlcyk7XG5cbnZhciBfRGlzcGF0Y2hlciA9IHJlcXVpcmUoXCIuLi9EaXNwYXRjaGVyLmpzeFwiKTtcblxudmFyIF9EaXNwYXRjaGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Rpc3BhdGNoZXIpO1xuXG52YXIgX1NlcnZlckFwaSA9IHJlcXVpcmUoXCIuLi9TZXJ2ZXJBcGkuanN4XCIpO1xuXG52YXIgX1NlcnZlckFwaTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TZXJ2ZXJBcGkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVGVzdE1vZHVsZTJBY3Rpb25zID0ge1xuXHRzZXRUZXN0U3RhdGU6IGZ1bmN0aW9uIHNldFRlc3RTdGF0ZShudW0sIG5hbWUsIHZhbHVlLCBldnQpIHtcblx0XHRfRGlzcGF0Y2hlcjIuZGVmYXVsdC5kaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBfVGVzdE1vZHVsZTJBY3Rpb25UeXBlczIuZGVmYXVsdC5TRVRfU1RBVEUsXG5cdFx0XHRudW06IG51bSxcblx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdE1vZHVsZTJBY3Rpb25zO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYWN0aW9ucy9UZXN0TW9kdWxlMkFjdGlvbnMuanN4XG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2ltbXV0YWJsZSA9IHJlcXVpcmUoXCJpbW11dGFibGVcIik7XG5cbnZhciBfaW1tdXRhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltbXV0YWJsZSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiZmx1eC91dGlsc1wiKTtcblxudmFyIF9EaXNwYXRjaGVyID0gcmVxdWlyZShcIi4uL0Rpc3BhdGNoZXIuanN4XCIpO1xuXG52YXIgX0Rpc3BhdGNoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGlzcGF0Y2hlcik7XG5cbnZhciBfVGVzdE1vZHVsZTFBY3Rpb25UeXBlcyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvVGVzdE1vZHVsZTFBY3Rpb25UeXBlcy5qc3hcIik7XG5cbnZhciBfVGVzdE1vZHVsZTFBY3Rpb25UeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXN0TW9kdWxlMUFjdGlvblR5cGVzKTtcblxudmFyIF9TdGF0ZSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL3NlcnZpY2UvU3RhdGUuanN4XCIpO1xuXG52YXIgX1N0YXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0YXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVGVzdE1vZHVsZTFTdG9yZSA9IGZ1bmN0aW9uIChfUmVkdWNlU3RvcmUpIHtcblx0X2luaGVyaXRzKFRlc3RNb2R1bGUxU3RvcmUsIF9SZWR1Y2VTdG9yZSk7XG5cblx0ZnVuY3Rpb24gVGVzdE1vZHVsZTFTdG9yZShudW0sIG9wdGlvbmFsKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RNb2R1bGUxU3RvcmUpO1xuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRlc3RNb2R1bGUxU3RvcmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUZXN0TW9kdWxlMVN0b3JlKSkuY2FsbCh0aGlzLCBfRGlzcGF0Y2hlcjIuZGVmYXVsdCkpO1xuXG5cdFx0X3RoaXMubnVtID0gbnVtO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhUZXN0TW9kdWxlMVN0b3JlLCBbe1xuXHRcdGtleTogXCJnZXRJbml0aWFsU3RhdGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuXHRcdFx0cmV0dXJuIF9pbW11dGFibGUyLmRlZmF1bHQuTWFwKHt9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicmVkdWNlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlZHVjZShzdGF0ZSwgYWN0aW9uKSB7XG5cdFx0XHRpZiAoYWN0aW9uLm51bSAhPT0gdGhpcy5udW0pIHJldHVybiBzdGF0ZTtcblx0XHRcdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBfVGVzdE1vZHVsZTFBY3Rpb25UeXBlczIuZGVmYXVsdC5BRERfTU9EVUxFX1NUQVRFOlxuXHRcdFx0XHRcdHJldHVybiBzdGF0ZSA9IHN0YXRlLnNldChcIlwiLCBcIlwiKTtcblx0XHRcdFx0Y2FzZSBfVGVzdE1vZHVsZTFBY3Rpb25UeXBlczIuZGVmYXVsdC5TRVRfTU9EVUxFX1NUQVRFOlxuXHRcdFx0XHRcdGlmICh0eXBlb2YgYWN0aW9uLnAua2V5ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBhY3Rpb24ucC52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBzdGF0ZS5zZXQoYWN0aW9uLnAua2V5LCBhY3Rpb24ucC52YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0eXBlb2YgYWN0aW9uLnAub3JwaGFuZWQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRcdHN0YXRlID0gc3RhdGUuZGVsZXRlKGFjdGlvbi5wLm9ycGhhbmVkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gVGVzdE1vZHVsZTFTdG9yZTtcbn0oX3V0aWxzLlJlZHVjZVN0b3JlKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGVzdE1vZHVsZTFTdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0b3Jlcy9UZXN0TW9kdWxlMVN0b3JlLmpzeFxuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9pbW11dGFibGUgPSByZXF1aXJlKFwiaW1tdXRhYmxlXCIpO1xuXG52YXIgX2ltbXV0YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbW11dGFibGUpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcImZsdXgvdXRpbHNcIik7XG5cbnZhciBfVGVzdE1vZHVsZTJBY3Rpb25UeXBlcyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvVGVzdE1vZHVsZTJBY3Rpb25UeXBlcy5qc3hcIik7XG5cbnZhciBfVGVzdE1vZHVsZTJBY3Rpb25UeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXN0TW9kdWxlMkFjdGlvblR5cGVzKTtcblxudmFyIF9EaXNwYXRjaGVyID0gcmVxdWlyZShcIi4uL0Rpc3BhdGNoZXIuanN4XCIpO1xuXG52YXIgX0Rpc3BhdGNoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGlzcGF0Y2hlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFRlc3RNb2R1bGUyU3RvcmUgPSBmdW5jdGlvbiAoX1JlZHVjZVN0b3JlKSB7XG5cdF9pbmhlcml0cyhUZXN0TW9kdWxlMlN0b3JlLCBfUmVkdWNlU3RvcmUpO1xuXG5cdGZ1bmN0aW9uIFRlc3RNb2R1bGUyU3RvcmUobnVtLCBvcHRpb25hbCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXN0TW9kdWxlMlN0b3JlKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUZXN0TW9kdWxlMlN0b3JlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGVzdE1vZHVsZTJTdG9yZSkpLmNhbGwodGhpcywgX0Rpc3BhdGNoZXIyLmRlZmF1bHQpKTtcblxuXHRcdF90aGlzLm51bSA9IG51bTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoVGVzdE1vZHVsZTJTdG9yZSwgW3tcblx0XHRrZXk6IFwiZ2V0SW5pdGlhbFN0YXRlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcblx0XHRcdHJldHVybiBfaW1tdXRhYmxlMi5kZWZhdWx0Lk1hcCh7XG5cdFx0XHRcdHN0YXRlMTogMFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInJlZHVjZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZWR1Y2Uoc3RhdGUsIGFjdGlvbikge1xuXHRcdFx0aWYgKGFjdGlvbi5udW0gIT09IHRoaXMubnVtKSByZXR1cm4gc3RhdGU7XG5cdFx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRcdGNhc2UgX1Rlc3RNb2R1bGUyQWN0aW9uVHlwZXMyLmRlZmF1bHQuU0VUX1NUQVRFOlxuXHRcdFx0XHRcdHJldHVybiBzdGF0ZS51cGRhdGUoYWN0aW9uLm5hbWUsIGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaSArIGFjdGlvbi52YWx1ZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFRlc3RNb2R1bGUyU3RvcmU7XG59KF91dGlscy5SZWR1Y2VTdG9yZSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RNb2R1bGUyU3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdG9yZXMvVGVzdE1vZHVsZTJTdG9yZS5qc3hcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9