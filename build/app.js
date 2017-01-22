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
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
				module: _this.props.moduleInitial
			};
			return _this;
		}
		// Пока просто играюсь


		_createClass(App, [{
			key: "setModule",
			value: function setModule(m) {
				this.setState({ module: m });
			}
		}, {
			key: "render",
			value: function render() {
				var currentModule = null;
				switch (this.state.module) {
					case 1:
						currentModule = React.createElement(TestModule1, { text: "App.state.module = 1" });
						break;
					case 2:
						currentModule = React.createElement(TestModule2, { text: "App.state.module = 2" });
						break;
					default:
						currentModule = React.createElement(TestModule3, { text: "App.state.module = 3" });
				}
				return React.createElement("div", {}, currentModule, React.createElement(TestSwitcher, { setModule: this.setModule.bind(this) }));
			}
		}]);

		return App;
	}(React.Component);

	var TestSwitcher = function (_React$Component2) {
		_inherits(TestSwitcher, _React$Component2);

		function TestSwitcher() {
			_classCallCheck(this, TestSwitcher);

			return _possibleConstructorReturn(this, (TestSwitcher.__proto__ || Object.getPrototypeOf(TestSwitcher)).apply(this, arguments));
		}

		_createClass(TestSwitcher, [{
			key: "render",
			value: function render() {
				var _this3 = this;

				return React.createElement(
					"div",
					null,
					React.createElement(
						"button",
						{ onClick: function onClick() {
								return _this3.props.setModule(1);
							} },
						"TestModule1"
					),
					React.createElement(
						"button",
						{ onClick: function onClick() {
								return _this3.props.setModule(2);
							} },
						"TestModule2"
					),
					React.createElement(
						"button",
						{ onClick: function onClick() {
								return _this3.props.setModule(3);
							} },
						"TestModule3"
					)
				);
			}
		}]);

		return TestSwitcher;
	}(React.Component);

	var TestModule1 = function (_React$Component3) {
		_inherits(TestModule1, _React$Component3);

		function TestModule1() {
			_classCallCheck(this, TestModule1);

			return _possibleConstructorReturn(this, (TestModule1.__proto__ || Object.getPrototypeOf(TestModule1)).apply(this, arguments));
		}

		_createClass(TestModule1, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"h1",
					null,
					"TestModule1, ",
					this.props.text
				);
			}
		}]);

		return TestModule1;
	}(React.Component);

	var TestModule2 = function (_React$Component4) {
		_inherits(TestModule2, _React$Component4);

		function TestModule2() {
			_classCallCheck(this, TestModule2);

			return _possibleConstructorReturn(this, (TestModule2.__proto__ || Object.getPrototypeOf(TestModule2)).apply(this, arguments));
		}

		_createClass(TestModule2, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"h1",
					null,
					"TestModule2, ",
					this.props.text
				);
			}
		}]);

		return TestModule2;
	}(React.Component);

	var TestModule3 = function (_React$Component5) {
		_inherits(TestModule3, _React$Component5);

		function TestModule3() {
			_classCallCheck(this, TestModule3);

			return _possibleConstructorReturn(this, (TestModule3.__proto__ || Object.getPrototypeOf(TestModule3)).apply(this, arguments));
		}

		_createClass(TestModule3, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"h1",
					null,
					"TestModule3, ",
					this.props.text
				);
			}
		}]);

		return TestModule3;
	}(React.Component);

	ReactDOM.render(React.createElement(App, {
		moduleInitial: 2
	}), document.getElementById("ewaiter-app"));

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDZhNzk1NjM0YmFjYWY3ZjIzNzA4Iiwid2VicGFjazovLy8uL2FwcC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmE3OTU2MzRiYWNhZjdmMjM3MDgiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQXBwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0X2luaGVyaXRzKEFwcCwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gQXBwKHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFwcCk7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXBwLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXBwKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdFx0X3RoaXMuc3RhdGUgPSB7XG5cdFx0XHRkZXN0VVJMOiBcIi9hZ2F0ZS5waHBcIixcblx0XHRcdHNlc3Npb246IFwiXCIsXG5cdFx0XHRtb2R1bGU6IF90aGlzLnByb3BzLm1vZHVsZUluaXRpYWxcblx0XHR9O1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXHQvLyDQn9C+0LrQsCDQv9GA0L7RgdGC0L4g0LjQs9GA0LDRjtGB0YxcblxuXG5cdF9jcmVhdGVDbGFzcyhBcHAsIFt7XG5cdFx0a2V5OiBcInNldE1vZHVsZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZXRNb2R1bGUobSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IG1vZHVsZTogbSB9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBjdXJyZW50TW9kdWxlID0gbnVsbDtcblx0XHRcdHN3aXRjaCAodGhpcy5zdGF0ZS5tb2R1bGUpIHtcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdGN1cnJlbnRNb2R1bGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRlc3RNb2R1bGUxLCB7IHRleHQ6IFwiQXBwLnN0YXRlLm1vZHVsZSA9IDFcIiB9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdGN1cnJlbnRNb2R1bGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRlc3RNb2R1bGUyLCB7IHRleHQ6IFwiQXBwLnN0YXRlLm1vZHVsZSA9IDJcIiB9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRjdXJyZW50TW9kdWxlID0gUmVhY3QuY3JlYXRlRWxlbWVudChUZXN0TW9kdWxlMywgeyB0ZXh0OiBcIkFwcC5zdGF0ZS5tb2R1bGUgPSAzXCIgfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7fSwgY3VycmVudE1vZHVsZSwgUmVhY3QuY3JlYXRlRWxlbWVudChUZXN0U3dpdGNoZXIsIHsgc2V0TW9kdWxlOiB0aGlzLnNldE1vZHVsZS5iaW5kKHRoaXMpIH0pKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQXBwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgVGVzdFN3aXRjaGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQyKSB7XG5cdF9pbmhlcml0cyhUZXN0U3dpdGNoZXIsIF9SZWFjdCRDb21wb25lbnQyKTtcblxuXHRmdW5jdGlvbiBUZXN0U3dpdGNoZXIoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RTd2l0Y2hlcik7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRlc3RTd2l0Y2hlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRlc3RTd2l0Y2hlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFRlc3RTd2l0Y2hlciwgW3tcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBfdGhpczMgPSB0aGlzO1xuXG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImJ1dHRvblwiLFxuXHRcdFx0XHRcdHsgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzMy5wcm9wcy5zZXRNb2R1bGUoMSk7XG5cdFx0XHRcdFx0XHR9IH0sXG5cdFx0XHRcdFx0XCJUZXN0TW9kdWxlMVwiXG5cdFx0XHRcdCksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJidXR0b25cIixcblx0XHRcdFx0XHR7IG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfdGhpczMucHJvcHMuc2V0TW9kdWxlKDIpO1xuXHRcdFx0XHRcdFx0fSB9LFxuXHRcdFx0XHRcdFwiVGVzdE1vZHVsZTJcIlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0eyBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXMzLnByb3BzLnNldE1vZHVsZSgzKTtcblx0XHRcdFx0XHRcdH0gfSxcblx0XHRcdFx0XHRcIlRlc3RNb2R1bGUzXCJcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gVGVzdFN3aXRjaGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgVGVzdE1vZHVsZTEgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudDMpIHtcblx0X2luaGVyaXRzKFRlc3RNb2R1bGUxLCBfUmVhY3QkQ29tcG9uZW50Myk7XG5cblx0ZnVuY3Rpb24gVGVzdE1vZHVsZTEoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RNb2R1bGUxKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVGVzdE1vZHVsZTEuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUZXN0TW9kdWxlMSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFRlc3RNb2R1bGUxLCBbe1xuXHRcdGtleTogXCJyZW5kZXJcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiaDFcIixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XCJUZXN0TW9kdWxlMSwgXCIsXG5cdFx0XHRcdHRoaXMucHJvcHMudGV4dFxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gVGVzdE1vZHVsZTE7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBUZXN0TW9kdWxlMiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50NCkge1xuXHRfaW5oZXJpdHMoVGVzdE1vZHVsZTIsIF9SZWFjdCRDb21wb25lbnQ0KTtcblxuXHRmdW5jdGlvbiBUZXN0TW9kdWxlMigpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVzdE1vZHVsZTIpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUZXN0TW9kdWxlMi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRlc3RNb2R1bGUyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoVGVzdE1vZHVsZTIsIFt7XG5cdFx0a2V5OiBcInJlbmRlclwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJoMVwiLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcIlRlc3RNb2R1bGUyLCBcIixcblx0XHRcdFx0dGhpcy5wcm9wcy50ZXh0XG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBUZXN0TW9kdWxlMjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxudmFyIFRlc3RNb2R1bGUzID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQ1KSB7XG5cdF9pbmhlcml0cyhUZXN0TW9kdWxlMywgX1JlYWN0JENvbXBvbmVudDUpO1xuXG5cdGZ1bmN0aW9uIFRlc3RNb2R1bGUzKCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXN0TW9kdWxlMyk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRlc3RNb2R1bGUzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGVzdE1vZHVsZTMpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhUZXN0TW9kdWxlMywgW3tcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcImgxXCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdFwiVGVzdE1vZHVsZTMsIFwiLFxuXHRcdFx0XHR0aGlzLnByb3BzLnRleHRcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFRlc3RNb2R1bGUzO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5SZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIHtcblx0bW9kdWxlSW5pdGlhbDogMlxufSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXdhaXRlci1hcHBcIikpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwLmpzeFxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Iiwic291cmNlUm9vdCI6IiJ9