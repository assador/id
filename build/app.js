/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _header = __webpack_require__(1);

	var _header2 = _interopRequireDefault(_header);

	var _switcher = __webpack_require__(2);

	var _switcher2 = _interopRequireDefault(_switcher);

	var _test = __webpack_require__(3);

	var _test2 = _interopRequireDefault(_test);

	var _test3 = __webpack_require__(5);

	var _test4 = _interopRequireDefault(_test3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App(props) {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

			_this.state = {
				destURL: "/agate.php",
				session: "",
				module: _this.props.initialModule,
				moduleProp: _this.props.initialModuleProp ? _this.props.initialModuleProp : {}
			};
			return _this;
		}

		_createClass(App, [{
			key: "setAppModule",
			value: function setAppModule(m, p) {
				this.setState({ module: m, moduleProp: p });
			}
		}, {
			key: "render",
			value: function render() {
				var Module = this.state.module;
				return React.createElement(
					"div",
					null,
					React.createElement(_header2.default, { module: this.state.module }),
					React.createElement(Module, this.state.moduleProp),
					React.createElement(_switcher2.default, { setAppModule: this.setAppModule.bind(this) })
				);
			}
		}]);

		return App;
	}(React.Component);

	ReactDOM.render(React.createElement(App, {
		initialModule: _test2.default,
		initialModuleProp: {
			prop1: "Какое-то свойство",
			prop2: "Ещё какое-то свойство"
		}
	}), document.getElementById("ewaiter-app"));

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
		_inherits(Header, _React$Component);

		function Header() {
			_classCallCheck(this, Header);

			return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
		}

		_createClass(Header, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"div",
						null,
						"<Header>"
					),
					React.createElement(
						"h2",
						null,
						this.props.module.name,
						" (\u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043C\u043E\u0434\u0443\u043B\u044C App)"
					),
					React.createElement("hr", null)
				);
			}
		}]);

		return Header;
	}(React.Component);

	exports.default = Header;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _test = __webpack_require__(3);

	var _test2 = _interopRequireDefault(_test);

	var _test3 = __webpack_require__(5);

	var _test4 = _interopRequireDefault(_test3);

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
						"button",
						{ onClick: function onClick() {
								return _this2.props.setAppModule(_test2.default, {
									text: "Свойство text",
									someprop: "Свойство someprop",
									number: 3
								});
							} },
						"TestModule1 (text: \"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E text\", someprop: \"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E someprop\", number: 3)"
					),
					React.createElement("br", null),
					React.createElement(
						"button",
						{ onClick: function onClick() {
								return _this2.props.setAppModule(_test4.default, {
									someprop1: "Свойство 1",
									array: [1, 2, 3],
									someprop2: "Свойство 2"
								});
							} },
						"TestModule2 (someprop1: \"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E 1\", array: [1, 2, 3], someprop: \"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E 2\")"
					)
				);
			}
		}]);

		return TestSwitcher;
	}(React.Component);

	exports.default = TestSwitcher;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.State = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dev_props = __webpack_require__(4);

	var _dev_props2 = _interopRequireDefault(_dev_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TestModule1 = function (_React$Component) {
		_inherits(TestModule1, _React$Component);

		/*
	  * 1. Массив компонентов State (поля редактирования состояний этого модуля)
	  *    в свою очередь сам является состоянием этого модуля. Поэтому:
	  *    1.1. Он также показывается (и даже тоже работает) в дебажном <DevProps />,
	  *         что смотрится диковато, но вполне логично (всё равно же лишь дебаг)
	  *    1.2. Если ввести в двух разных компонентах State один и тот же ключ,
	  *         само состояние будет, ясен пень, в одном экземпляре, а значение будет
	  *         браться, введённое последним; тоже логично, хотя и визуально странно.
	  * 2. Ёлки растут иголками наружу, но это не является проявлением конформизма.
	  */
		function TestModule1(props) {
			_classCallCheck(this, TestModule1);

			var _this = _possibleConstructorReturn(this, (TestModule1.__proto__ || Object.getPrototypeOf(TestModule1)).call(this, props));

			_this.state = {
				states: []
			};
			return _this;
		}

		_createClass(TestModule1, [{
			key: "addremoveModuleState",
			value: function addremoveModuleState(remove) {
				var states = this.state.states.slice();
				if (typeof remove !== "undefined") {
					for (var i = states.length - 1; i >= 0; i--) {
						if (states[i].props.id === remove) {
							states.splice(i, 1);
							break;
						}
					}
				} else {
					states.push(React.createElement(State, {
						setModuleState: this.setModuleState.bind(this),
						id: states.length,
						key: states.length
					}));
				}
				this.setState({ states: states });
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
					this.addremoveModuleState(p.id);
				}
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				this.addremoveModuleState();
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				return React.createElement(
					"div",
					null,
					React.createElement(
						"div",
						null,
						"<\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C>"
					),
					React.createElement(
						"h3",
						null,
						"TestModule1.props:"
					),
					React.createElement(_dev_props2.default, { data: this.props }),
					React.createElement(
						"h3",
						null,
						"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 TestModule1.state:"
					),
					this.state.states,
					React.createElement("input", { type: "button", value: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451",
						onClick: function onClick() {
							return _this2.addremoveModuleState();
						} }),
					React.createElement(
						"h3",
						null,
						"TestModule1.state:"
					),
					React.createElement(_dev_props2.default, { data: this.state }),
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
					// Можно и убрать, пасхалочка получится :)
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

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DevProps = function (_React$Component) {
		_inherits(DevProps, _React$Component);

		function DevProps() {
			_classCallCheck(this, DevProps);

			return _possibleConstructorReturn(this, (DevProps.__proto__ || Object.getPrototypeOf(DevProps)).apply(this, arguments));
		}

		_createClass(DevProps, [{
			key: "render",
			value: function render() {
				var propsList = [];
				for (var key in this.props.data) {
					propsList.push(React.createElement(
						"li",
						{ key: key },
						key,
						":\xA0",
						this.props.data[key]
					));
				}
				return React.createElement(
					"ul",
					null,
					propsList
				);
			}
		}]);

		return DevProps;
	}(React.Component);

	exports.default = DevProps;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dev_props = __webpack_require__(4);

	var _dev_props2 = _interopRequireDefault(_dev_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TestModule2 = function (_React$Component) {
		_inherits(TestModule2, _React$Component);

		function TestModule2() {
			_classCallCheck(this, TestModule2);

			return _possibleConstructorReturn(this, (TestModule2.__proto__ || Object.getPrototypeOf(TestModule2)).apply(this, arguments));
		}

		_createClass(TestModule2, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"div",
						null,
						"<\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C>"
					),
					React.createElement(
						"h3",
						null,
						"TestModule2.props:"
					),
					React.createElement(_dev_props2.default, { data: this.props }),
					React.createElement("hr", null)
				);
			}
		}]);

		return TestModule2;
	}(React.Component);

	exports.default = TestModule2;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGFjZDEzYjJhM2VkODk3NzU2NGNiIiwid2VicGFjazovLy8uL2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9oZWFkZXIuanN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvc3dpdGNoZXIuanN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvdGVzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc2VydmljZS9kZXZfcHJvcHMuanN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvdGVzdDIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGFjZDEzYjJhM2VkODk3NzU2NGNiIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfaGVhZGVyID0gcmVxdWlyZShcIi4vc2VydmljZS9oZWFkZXIuanN4XCIpO1xuXG52YXIgX2hlYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWFkZXIpO1xuXG52YXIgX3N3aXRjaGVyID0gcmVxdWlyZShcIi4vbW9kdWxlcy9zd2l0Y2hlci5qc3hcIik7XG5cbnZhciBfc3dpdGNoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3dpdGNoZXIpO1xuXG52YXIgX3Rlc3QgPSByZXF1aXJlKFwiLi9tb2R1bGVzL3Rlc3QuanN4XCIpO1xuXG52YXIgX3Rlc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGVzdCk7XG5cbnZhciBfdGVzdDMgPSByZXF1aXJlKFwiLi9tb2R1bGVzL3Rlc3QyLmpzeFwiKTtcblxudmFyIF90ZXN0NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rlc3QzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQXBwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0X2luaGVyaXRzKEFwcCwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gQXBwKHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFwcCk7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXBwLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXBwKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdFx0X3RoaXMuc3RhdGUgPSB7XG5cdFx0XHRkZXN0VVJMOiBcIi9hZ2F0ZS5waHBcIixcblx0XHRcdHNlc3Npb246IFwiXCIsXG5cdFx0XHRtb2R1bGU6IF90aGlzLnByb3BzLmluaXRpYWxNb2R1bGUsXG5cdFx0XHRtb2R1bGVQcm9wOiBfdGhpcy5wcm9wcy5pbml0aWFsTW9kdWxlUHJvcCA/IF90aGlzLnByb3BzLmluaXRpYWxNb2R1bGVQcm9wIDoge31cblx0XHR9O1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhBcHAsIFt7XG5cdFx0a2V5OiBcInNldEFwcE1vZHVsZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZXRBcHBNb2R1bGUobSwgcCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IG1vZHVsZTogbSwgbW9kdWxlUHJvcDogcCB9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBNb2R1bGUgPSB0aGlzLnN0YXRlLm1vZHVsZTtcblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KF9oZWFkZXIyLmRlZmF1bHQsIHsgbW9kdWxlOiB0aGlzLnN0YXRlLm1vZHVsZSB9KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChNb2R1bGUsIHRoaXMuc3RhdGUubW9kdWxlUHJvcCksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoX3N3aXRjaGVyMi5kZWZhdWx0LCB7IHNldEFwcE1vZHVsZTogdGhpcy5zZXRBcHBNb2R1bGUuYmluZCh0aGlzKSB9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQXBwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5SZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIHtcblx0aW5pdGlhbE1vZHVsZTogX3Rlc3QyLmRlZmF1bHQsXG5cdGluaXRpYWxNb2R1bGVQcm9wOiB7XG5cdFx0cHJvcDE6IFwi0JrQsNC60L7QtS3RgtC+INGB0LLQvtC50YHRgtCy0L5cIixcblx0XHRwcm9wMjogXCLQldGJ0ZEg0LrQsNC60L7QtS3RgtC+INGB0LLQvtC50YHRgtCy0L5cIlxuXHR9XG59KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJld2FpdGVyLWFwcFwiKSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAuanN4XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBIZWFkZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoSGVhZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBIZWFkZXIoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhlYWRlcik7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEhlYWRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEhlYWRlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEhlYWRlciwgW3tcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcIjxIZWFkZXI+XCJcblx0XHRcdFx0KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImgyXCIsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHR0aGlzLnByb3BzLm1vZHVsZS5uYW1lLFxuXHRcdFx0XHRcdFwiIChcXHUwNDQyXFx1MDQzNVxcdTA0M0FcXHUwNDQzXFx1MDQ0OVxcdTA0MzhcXHUwNDM5IFxcdTA0M0NcXHUwNDNFXFx1MDQzNFxcdTA0NDNcXHUwNDNCXFx1MDQ0QyBBcHApXCJcblx0XHRcdFx0KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImhyXCIsIG51bGwpXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBIZWFkZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEhlYWRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2UvaGVhZGVyLmpzeFxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF90ZXN0ID0gcmVxdWlyZShcIi4vdGVzdC5qc3hcIik7XG5cbnZhciBfdGVzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXN0KTtcblxudmFyIF90ZXN0MyA9IHJlcXVpcmUoXCIuL3Rlc3QyLmpzeFwiKTtcblxudmFyIF90ZXN0NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rlc3QzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVGVzdFN3aXRjaGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0X2luaGVyaXRzKFRlc3RTd2l0Y2hlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gVGVzdFN3aXRjaGVyKCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXN0U3dpdGNoZXIpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUZXN0U3dpdGNoZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUZXN0U3dpdGNoZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhUZXN0U3dpdGNoZXIsIFt7XG5cdFx0a2V5OiBcInJlbmRlclwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJwXCIsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcIjxcXHUwNDIyXFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQzRVxcdTA0MzJcXHUwNDRCXFx1MDQzOSBcXHUwNDQxXFx1MDQzNVxcdTA0M0JcXHUwNDM1XFx1MDQzQVxcdTA0NDJcXHUwNDNFXFx1MDQ0MD5cIlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0eyBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXMyLnByb3BzLnNldEFwcE1vZHVsZShfdGVzdDIuZGVmYXVsdCwge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IFwi0KHQstC+0LnRgdGC0LLQviB0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0c29tZXByb3A6IFwi0KHQstC+0LnRgdGC0LLQviBzb21lcHJvcFwiLFxuXHRcdFx0XHRcdFx0XHRcdG51bWJlcjogM1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gfSxcblx0XHRcdFx0XHRcIlRlc3RNb2R1bGUxICh0ZXh0OiBcXFwiXFx1MDQyMVxcdTA0MzJcXHUwNDNFXFx1MDQzOVxcdTA0NDFcXHUwNDQyXFx1MDQzMlxcdTA0M0UgdGV4dFxcXCIsIHNvbWVwcm9wOiBcXFwiXFx1MDQyMVxcdTA0MzJcXHUwNDNFXFx1MDQzOVxcdTA0NDFcXHUwNDQyXFx1MDQzMlxcdTA0M0Ugc29tZXByb3BcXFwiLCBudW1iZXI6IDMpXCJcblx0XHRcdFx0KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0eyBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXMyLnByb3BzLnNldEFwcE1vZHVsZShfdGVzdDQuZGVmYXVsdCwge1xuXHRcdFx0XHRcdFx0XHRcdHNvbWVwcm9wMTogXCLQodCy0L7QudGB0YLQstC+IDFcIixcblx0XHRcdFx0XHRcdFx0XHRhcnJheTogWzEsIDIsIDNdLFxuXHRcdFx0XHRcdFx0XHRcdHNvbWVwcm9wMjogXCLQodCy0L7QudGB0YLQstC+IDJcIlxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gfSxcblx0XHRcdFx0XHRcIlRlc3RNb2R1bGUyIChzb21lcHJvcDE6IFxcXCJcXHUwNDIxXFx1MDQzMlxcdTA0M0VcXHUwNDM5XFx1MDQ0MVxcdTA0NDJcXHUwNDMyXFx1MDQzRSAxXFxcIiwgYXJyYXk6IFsxLCAyLCAzXSwgc29tZXByb3A6IFxcXCJcXHUwNDIxXFx1MDQzMlxcdTA0M0VcXHUwNDM5XFx1MDQ0MVxcdTA0NDJcXHUwNDMyXFx1MDQzRSAyXFxcIilcIlxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBUZXN0U3dpdGNoZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RTd2l0Y2hlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZXMvc3dpdGNoZXIuanN4XG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5TdGF0ZSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZXZfcHJvcHMgPSByZXF1aXJlKFwiLi4vc2VydmljZS9kZXZfcHJvcHMuanN4XCIpO1xuXG52YXIgX2Rldl9wcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXZfcHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBUZXN0TW9kdWxlMSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhUZXN0TW9kdWxlMSwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0LypcbiAgKiAxLiDQnNCw0YHRgdC40LIg0LrQvtC80L/QvtC90LXQvdGC0L7QsiBTdGF0ZSAo0L/QvtC70Y8g0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDRgdC+0YHRgtC+0Y/QvdC40Lkg0Y3RgtC+0LPQviDQvNC+0LTRg9C70Y8pXG4gICogICAg0LIg0YHQstC+0Y4g0L7Rh9C10YDQtdC00Ywg0YHQsNC8INGP0LLQu9GP0LXRgtGB0Y8g0YHQvtGB0YLQvtGP0L3QuNC10Lwg0Y3RgtC+0LPQviDQvNC+0LTRg9C70Y8uINCf0L7RjdGC0L7QvNGDOlxuICAqICAgIDEuMS4g0J7QvSDRgtCw0LrQttC1INC/0L7QutCw0LfRi9Cy0LDQtdGC0YHRjyAo0Lgg0LTQsNC20LUg0YLQvtC20LUg0YDQsNCx0L7RgtCw0LXRgikg0LIg0LTQtdCx0LDQttC90L7QvCA8RGV2UHJvcHMgLz4sXG4gICogICAgICAgICDRh9GC0L4g0YHQvNC+0YLRgNC40YLRgdGPINC00LjQutC+0LLQsNGC0L4sINC90L4g0LLQv9C+0LvQvdC1INC70L7Qs9C40YfQvdC+ICjQstGB0ZEg0YDQsNCy0L3QviDQttC1INC70LjRiNGMINC00LXQsdCw0LMpXG4gICogICAgMS4yLiDQldGB0LvQuCDQstCy0LXRgdGC0Lgg0LIg0LTQstGD0YUg0YDQsNC30L3Ri9GFINC60L7QvNC/0L7QvdC10L3RgtCw0YUgU3RhdGUg0L7QtNC40L0g0Lgg0YLQvtGCINC20LUg0LrQu9GO0YcsXG4gICogICAgICAgICDRgdCw0LzQviDRgdC+0YHRgtC+0Y/QvdC40LUg0LHRg9C00LXRgiwg0Y/RgdC10L0g0L/QtdC90YwsINCyINC+0LTQvdC+0Lwg0Y3QutC30LXQvNC/0LvRj9GA0LUsINCwINC30L3QsNGH0LXQvdC40LUg0LHRg9C00LXRglxuICAqICAgICAgICAg0LHRgNCw0YLRjNGB0Y8sINCy0LLQtdC00ZHQvdC90L7QtSDQv9C+0YHQu9C10LTQvdC40Lw7INGC0L7QttC1INC70L7Qs9C40YfQvdC+LCDRhdC+0YLRjyDQuCDQstC40LfRg9Cw0LvRjNC90L4g0YHRgtGA0LDQvdC90L4uXG4gICogMi4g0IHQu9C60Lgg0YDQsNGB0YLRg9GCINC40LPQvtC70LrQsNC80Lgg0L3QsNGA0YPQttGDLCDQvdC+INGN0YLQviDQvdC1INGP0LLQu9GP0LXRgtGB0Y8g0L/RgNC+0Y/QstC70LXQvdC40LXQvCDQutC+0L3RhNC+0YDQvNC40LfQvNCwLlxuICAqL1xuXHRmdW5jdGlvbiBUZXN0TW9kdWxlMShwcm9wcykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXN0TW9kdWxlMSk7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVGVzdE1vZHVsZTEuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUZXN0TW9kdWxlMSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdF90aGlzLnN0YXRlID0ge1xuXHRcdFx0c3RhdGVzOiBbXVxuXHRcdH07XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFRlc3RNb2R1bGUxLCBbe1xuXHRcdGtleTogXCJhZGRyZW1vdmVNb2R1bGVTdGF0ZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBhZGRyZW1vdmVNb2R1bGVTdGF0ZShyZW1vdmUpIHtcblx0XHRcdHZhciBzdGF0ZXMgPSB0aGlzLnN0YXRlLnN0YXRlcy5zbGljZSgpO1xuXHRcdFx0aWYgKHR5cGVvZiByZW1vdmUgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IHN0YXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRcdGlmIChzdGF0ZXNbaV0ucHJvcHMuaWQgPT09IHJlbW92ZSkge1xuXHRcdFx0XHRcdFx0c3RhdGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3RhdGVzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChTdGF0ZSwge1xuXHRcdFx0XHRcdHNldE1vZHVsZVN0YXRlOiB0aGlzLnNldE1vZHVsZVN0YXRlLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0aWQ6IHN0YXRlcy5sZW5ndGgsXG5cdFx0XHRcdFx0a2V5OiBzdGF0ZXMubGVuZ3RoXG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzdGF0ZXM6IHN0YXRlcyB9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwic2V0TW9kdWxlU3RhdGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2V0TW9kdWxlU3RhdGUocCkge1xuXHRcdFx0aWYgKHR5cGVvZiBwLmtleSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgcC52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKF9kZWZpbmVQcm9wZXJ0eSh7fSwgcC5rZXksIHAudmFsdWUpKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgcC5vcnBoYW5lZCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRkZWxldGUgdGhpcy5zdGF0ZVtwLm9ycGhhbmVkXTtcblx0XHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBwLmlkICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdHRoaXMuYWRkcmVtb3ZlTW9kdWxlU3RhdGUocC5pZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImNvbXBvbmVudFdpbGxNb3VudFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0XHR0aGlzLmFkZHJlbW92ZU1vZHVsZVN0YXRlKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInJlbmRlclwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFwiPFxcdTA0MTBcXHUwNDNBXFx1MDQ0MlxcdTA0MzhcXHUwNDMyXFx1MDQzRFxcdTA0NEJcXHUwNDM5IFxcdTA0M0NcXHUwNDNFXFx1MDQzNFxcdTA0NDNcXHUwNDNCXFx1MDQ0Qz5cIlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiaDNcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFwiVGVzdE1vZHVsZTEucHJvcHM6XCJcblx0XHRcdFx0KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChfZGV2X3Byb3BzMi5kZWZhdWx0LCB7IGRhdGE6IHRoaXMucHJvcHMgfSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJoM1wiLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XCJcXHUwNDIwXFx1MDQzNVxcdTA0MzRcXHUwNDMwXFx1MDQzQVxcdTA0NDJcXHUwNDM4XFx1MDQ0MFxcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBUZXN0TW9kdWxlMS5zdGF0ZTpcIlxuXHRcdFx0XHQpLFxuXHRcdFx0XHR0aGlzLnN0YXRlLnN0YXRlcyxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJidXR0b25cIiwgdmFsdWU6IFwiXFx1MDQxNFxcdTA0M0VcXHUwNDMxXFx1MDQzMFxcdTA0MzJcXHUwNDM4XFx1MDQ0MlxcdTA0NEMgXFx1MDQzNVxcdTA0NDlcXHUwNDUxXCIsXG5cdFx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfdGhpczIuYWRkcmVtb3ZlTW9kdWxlU3RhdGUoKTtcblx0XHRcdFx0XHR9IH0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiaDNcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFwiVGVzdE1vZHVsZTEuc3RhdGU6XCJcblx0XHRcdFx0KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChfZGV2X3Byb3BzMi5kZWZhdWx0LCB7IGRhdGE6IHRoaXMuc3RhdGUgfSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gVGVzdE1vZHVsZTE7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RNb2R1bGUxO1xuXG52YXIgU3RhdGUgPSBleHBvcnRzLlN0YXRlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQyKSB7XG5cdF9pbmhlcml0cyhTdGF0ZSwgX1JlYWN0JENvbXBvbmVudDIpO1xuXG5cdGZ1bmN0aW9uIFN0YXRlKHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRlKTtcblxuXHRcdHZhciBfdGhpczMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU3RhdGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdGF0ZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdF90aGlzMy5zdGF0ZSA9IHtcblx0XHRcdGtleTogXCJcIixcblx0XHRcdHZhbHVlOiBcIlwiXG5cdFx0fTtcblx0XHRyZXR1cm4gX3RoaXMzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFN0YXRlLCBbe1xuXHRcdGtleTogXCJjaGFuZ2VLZXlcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2hhbmdlS2V5KGV2dCkge1xuXHRcdFx0aWYgKGV2dC50YXJnZXQudmFsdWUgIT09IFwic3RhdGVzXCIpIHtcblx0XHRcdFx0Ly8g0JzQvtC20L3QviDQuCDRg9Cx0YDQsNGC0YwsINC/0LDRgdGF0LDQu9C+0YfQutCwINC/0L7Qu9GD0YfQuNGC0YHRjyA6KVxuXHRcdFx0XHR0aGlzLnByb3BzLnNldE1vZHVsZVN0YXRlKHtcblx0XHRcdFx0XHRrZXk6IGV2dC50YXJnZXQudmFsdWUsXG5cdFx0XHRcdFx0dmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXG5cdFx0XHRcdFx0b3JwaGFuZWQ6IHRoaXMuc3RhdGUua2V5XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsga2V5OiBldnQudGFyZ2V0LnZhbHVlIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJjaGFuZ2VWYWx1ZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjaGFuZ2VWYWx1ZShldnQpIHtcblx0XHRcdHRoaXMucHJvcHMuc2V0TW9kdWxlU3RhdGUoe1xuXHRcdFx0XHRrZXk6IHRoaXMuc3RhdGUua2V5LFxuXHRcdFx0XHR2YWx1ZTogZXZ0LnRhcmdldC52YWx1ZVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2dC50YXJnZXQudmFsdWUgfSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImRlbGV0ZVN0YXRlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZVN0YXRlKGV2dCkge1xuXHRcdFx0dGhpcy5wcm9wcy5zZXRNb2R1bGVTdGF0ZSh7XG5cdFx0XHRcdG9ycGhhbmVkOiB0aGlzLnN0YXRlLmtleSxcblx0XHRcdFx0aWQ6IHRoaXMucHJvcHMuaWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJyZW5kZXJcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogdGhpcy5zdGF0ZS5rZXksIHBsYWNlaG9sZGVyOiBcIlxcdTA0MThcXHUwNDNDXFx1MDQ0RiBcXHUwNDQxXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzRVxcdTA0NEZcXHUwNDNEXFx1MDQzOFxcdTA0NEZcIixcblx0XHRcdFx0XHRvbkNoYW5nZTogdGhpcy5jaGFuZ2VLZXkuYmluZCh0aGlzKSB9KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLCBwbGFjZWhvbGRlcjogXCJcXHUwNDE3XFx1MDQzRFxcdTA0MzBcXHUwNDQ3XFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQxXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzRVxcdTA0NEZcXHUwNDNEXFx1MDQzOFxcdTA0NEZcIixcblx0XHRcdFx0XHRvbkNoYW5nZTogdGhpcy5jaGFuZ2VWYWx1ZS5iaW5kKHRoaXMpIH0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImJ1dHRvblwiLCB2YWx1ZTogXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0NDFcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQ0RlxcdTA0M0RcXHUwNDM4XFx1MDQzNVwiLFxuXHRcdFx0XHRcdG9uQ2xpY2s6IHRoaXMuZGVsZXRlU3RhdGUuYmluZCh0aGlzKSB9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gU3RhdGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tb2R1bGVzL3Rlc3QuanN4XG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBEZXZQcm9wcyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhEZXZQcm9wcywgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gRGV2UHJvcHMoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIERldlByb3BzKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRGV2UHJvcHMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEZXZQcm9wcykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKERldlByb3BzLCBbe1xuXHRcdGtleTogXCJyZW5kZXJcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIHByb3BzTGlzdCA9IFtdO1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIHRoaXMucHJvcHMuZGF0YSkge1xuXHRcdFx0XHRwcm9wc0xpc3QucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwibGlcIixcblx0XHRcdFx0XHR7IGtleToga2V5IH0sXG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdFwiOlxceEEwXCIsXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhW2tleV1cblx0XHRcdFx0KSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJ1bFwiLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRwcm9wc0xpc3Rcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIERldlByb3BzO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBEZXZQcm9wcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NlcnZpY2UvZGV2X3Byb3BzLmpzeFxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZXZfcHJvcHMgPSByZXF1aXJlKFwiLi4vc2VydmljZS9kZXZfcHJvcHMuanN4XCIpO1xuXG52YXIgX2Rldl9wcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXZfcHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBUZXN0TW9kdWxlMiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhUZXN0TW9kdWxlMiwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gVGVzdE1vZHVsZTIoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RNb2R1bGUyKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVGVzdE1vZHVsZTIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUZXN0TW9kdWxlMikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFRlc3RNb2R1bGUyLCBbe1xuXHRcdGtleTogXCJyZW5kZXJcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFwiPFxcdTA0MTBcXHUwNDNBXFx1MDQ0MlxcdTA0MzhcXHUwNDMyXFx1MDQzRFxcdTA0NEJcXHUwNDM5IFxcdTA0M0NcXHUwNDNFXFx1MDQzNFxcdTA0NDNcXHUwNDNCXFx1MDQ0Qz5cIlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiaDNcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFwiVGVzdE1vZHVsZTIucHJvcHM6XCJcblx0XHRcdFx0KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChfZGV2X3Byb3BzMi5kZWZhdWx0LCB7IGRhdGE6IHRoaXMucHJvcHMgfSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gVGVzdE1vZHVsZTI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RNb2R1bGUyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbW9kdWxlcy90ZXN0Mi5qc3hcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNqTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzsiLCJzb3VyY2VSb290IjoiIn0=