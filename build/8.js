webpackJsonp([8],{

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGVzdC9UZXN0TW9kdWxlMS5qc3g/OWNkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuU3RhdGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfRGV2UHJvcHMgPSByZXF1aXJlKFwiLi4vc2VydmljZS9EZXZQcm9wcy5qc3hcIik7XG5cbnZhciBfRGV2UHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGV2UHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBUZXN0TW9kdWxlMSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhUZXN0TW9kdWxlMSwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0LyoqXG4gICogMS4g0KXRjdGIINC60L7QvNC/0L7QvdC10L3RgtC+0LIgU3RhdGUgKNC/0L7Qu9GPINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0YHQvtGB0YLQvtGP0L3QuNC5INGN0YLQvtCz0L4g0LzQvtC00YPQu9GPKVxuICAqICAgINCyINGB0LLQvtGOINC+0YfQtdGA0LXQtNGMINGB0LDQvCDRj9Cy0LvRj9C10YLRgdGPINGB0L7RgdGC0L7Rj9C90LjQtdC8INGN0YLQvtCz0L4g0LzQvtC00YPQu9GPLiDQn9C+0Y3RgtC+0LzRgzpcbiAgKiAgICAxLjEuINCV0YHQu9C4INCy0LLQtdGB0YLQuCDQsiDQtNCy0YPRhSDRgNCw0LfQvdGL0YUg0LrQvtC80L/QvtC90LXQvdGC0LDRhSBTdGF0ZSDQvtC00LjQvSDQuCDRgtC+0YIg0LbQtSDQutC70Y7RhyxcbiAgKiAgICAgICAgINGB0LDQvNC+INGB0L7RgdGC0L7Rj9C90LjQtSDQsdGD0LTQtdGCLCDRj9GB0LXQvSDQv9C10L3RjCwg0LIg0L7QtNC90L7QvCDRjdC60LfQtdC80L/Qu9GP0YDQtSwg0LAg0LfQvdCw0YfQtdC90LjQtSDQsdGD0LTQtdGCXG4gICogICAgICAgICDQsdGA0LDRgtGM0YHRjywg0LLQstC10LTRkdC90L3QvtC1INC/0L7RgdC70LXQtNC90LjQvDsg0YLQvtC20LUg0LvQvtCz0LjRh9C90L4sINGF0L7RgtGPINC4INCy0LjQt9GD0LDQu9GM0L3QviDRgdGC0YDQsNC90L3Qvi5cbiAgKiAyLiDQgdC70LrQuCDRgNCw0YHRgtGD0YIg0LjQs9C+0LvQutCw0LzQuCDQvdCw0YDRg9C20YMsINC90L4g0Y3RgtC+INC90LUg0Y/QstC70Y/QtdGC0YHRjyDQv9GA0L7Rj9Cy0LvQtdC90LjQtdC8INC60L7QvdGE0L7RgNC80LjQt9C80LAuXG4gICovXG5cdGZ1bmN0aW9uIFRlc3RNb2R1bGUxKHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RNb2R1bGUxKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUZXN0TW9kdWxlMS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRlc3RNb2R1bGUxKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdFx0X3RoaXMuc3RhdGUgPSB7XG5cdFx0XHRzdGF0ZXM6IHt9LFxuXHRcdFx0bGFzdElkOiAtMVxuXHRcdH07XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFRlc3RNb2R1bGUxLCBbe1xuXHRcdGtleTogXCJhZGRyZW1vdmVNb2R1bGVTdGF0ZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBhZGRyZW1vdmVNb2R1bGVTdGF0ZShwKSB7XG5cdFx0XHQvKlxuICAgXHRcdGxldCBzdGF0ZXMgPSB0aGlzLnN0YXRlLnN0YXRlcztcbiAgIFx0XHRpZih0eXBlb2YgcC5yZW1vdmUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgIFx0XHRcdGRlbGV0ZSBzdGF0ZXNbcC5yZW1vdmVdO1xuICAgXHRcdH0gZWxzZSB7XG4gICBcdFx0XHRzdGF0ZXNbdGhpcy5zdGF0ZS5sYXN0SWQgKyAxXSA9IDxTdGF0ZVxuICAgXHRcdFx0XHRpZD17dGhpcy5zdGF0ZS5sYXN0SWQgKyAxfVxuICAgXHRcdFx0XHRrZXk9e3RoaXMuc3RhdGUubGFzdElkICsgMX1cbiAgIFx0XHRcdFx0c2V0TW9kdWxlU3RhdGU9e3RoaXMuc2V0TW9kdWxlU3RhdGUuYmluZCh0aGlzKX1cbiAgIFx0XHRcdC8+O1xuICAgXHRcdH1cbiAgIFx0XHR0aGlzLnNldFN0YXRlKHtzdGF0ZXM6IHN0YXRlcywgbGFzdElkOiB0aGlzLnN0YXRlLmxhc3RJZCArIDF9KTtcbiAgICovXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgbGFzdElkOiB0aGlzLnN0YXRlLmxhc3RJZCArIDEgfSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInNldE1vZHVsZVN0YXRlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHNldE1vZHVsZVN0YXRlKHApIHtcblx0XHRcdGlmICh0eXBlb2YgcC5rZXkgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHAudmFsdWUgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZShfZGVmaW5lUHJvcGVydHkoe30sIHAua2V5LCBwLnZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHAub3JwaGFuZWQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0ZGVsZXRlIHRoaXMuc3RhdGVbcC5vcnBoYW5lZF07XG5cdFx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgcC5pZCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHR0aGlzLmFkZHJlbW92ZU1vZHVsZVN0YXRlKHsgcmVtb3ZlOiBwLmlkIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJjb21wb25lbnRXaWxsTW91bnRcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdFx0Ly9cdFx0dGhpcy5hZGRyZW1vdmVNb2R1bGVTdGF0ZSh7fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInJlbmRlclwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJoM1wiLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XCJUZXN0TW9kdWxlMS5wcm9wczpcIlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KF9EZXZQcm9wczIuZGVmYXVsdCwgeyBkYXRhOiB0aGlzLnByb3BzIH0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiaDNcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFwiXFx1MDQyMFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0M0FcXHUwNDQyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgVGVzdE1vZHVsZTEuc3RhdGU6XCJcblx0XHRcdFx0KSxcblx0XHRcdFx0T2JqZWN0LmtleXModGhpcy5zdGF0ZS5zdGF0ZXMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIF90aGlzMi5zdGF0ZS5zdGF0ZXNba2V5XTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIHZhbHVlOiBcIlxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0MzBcXHUwNDMyXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0MzVcXHUwNDQ5XFx1MDQ1MVwiLFxuXHRcdFx0XHRcdG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZ0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXMyLmFkZHJlbW92ZU1vZHVsZVN0YXRlKHsgZXZ0OiBldnQgfSk7XG5cdFx0XHRcdFx0fSB9KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImgzXCIsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcIlRlc3RNb2R1bGUxLnN0YXRlOlwiXG5cdFx0XHRcdCksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoX0RldlByb3BzMi5kZWZhdWx0LCB7IGRhdGE6IHRoaXMuc3RhdGUgfSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gVGVzdE1vZHVsZTE7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRlc3RNb2R1bGUxO1xuXG52YXIgU3RhdGUgPSBleHBvcnRzLlN0YXRlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQyKSB7XG5cdF9pbmhlcml0cyhTdGF0ZSwgX1JlYWN0JENvbXBvbmVudDIpO1xuXG5cdGZ1bmN0aW9uIFN0YXRlKHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRlKTtcblxuXHRcdHZhciBfdGhpczMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU3RhdGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdGF0ZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdF90aGlzMy5zdGF0ZSA9IHtcblx0XHRcdGtleTogXCJcIixcblx0XHRcdHZhbHVlOiBcIlwiXG5cdFx0fTtcblx0XHRyZXR1cm4gX3RoaXMzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFN0YXRlLCBbe1xuXHRcdGtleTogXCJjaGFuZ2VLZXlcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2hhbmdlS2V5KGV2dCkge1xuXHRcdFx0aWYgKGV2dC50YXJnZXQudmFsdWUgIT09IFwic3RhdGVzXCIpIHtcblx0XHRcdFx0Ly8gaWYg0LzQvtC20L3QviDQuCDRg9Cx0YDQsNGC0YwsINC/0LDRgdGF0LDQu9C+0YfQutCwINC/0L7Qu9GD0YfQuNGC0YHRjyA6KVxuXHRcdFx0XHR0aGlzLnByb3BzLnNldE1vZHVsZVN0YXRlKHtcblx0XHRcdFx0XHRrZXk6IGV2dC50YXJnZXQudmFsdWUsXG5cdFx0XHRcdFx0dmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXG5cdFx0XHRcdFx0b3JwaGFuZWQ6IHRoaXMuc3RhdGUua2V5XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsga2V5OiBldnQudGFyZ2V0LnZhbHVlIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJjaGFuZ2VWYWx1ZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjaGFuZ2VWYWx1ZShldnQpIHtcblx0XHRcdHRoaXMucHJvcHMuc2V0TW9kdWxlU3RhdGUoe1xuXHRcdFx0XHRrZXk6IHRoaXMuc3RhdGUua2V5LFxuXHRcdFx0XHR2YWx1ZTogZXZ0LnRhcmdldC52YWx1ZVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2dC50YXJnZXQudmFsdWUgfSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImRlbGV0ZVN0YXRlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZVN0YXRlKGV2dCkge1xuXHRcdFx0dGhpcy5wcm9wcy5zZXRNb2R1bGVTdGF0ZSh7XG5cdFx0XHRcdG9ycGhhbmVkOiB0aGlzLnN0YXRlLmtleSxcblx0XHRcdFx0aWQ6IHRoaXMucHJvcHMuaWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJyZW5kZXJcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogdGhpcy5zdGF0ZS5rZXksIHBsYWNlaG9sZGVyOiBcIlxcdTA0MThcXHUwNDNDXFx1MDQ0RiBcXHUwNDQxXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzRVxcdTA0NEZcXHUwNDNEXFx1MDQzOFxcdTA0NEZcIixcblx0XHRcdFx0XHRvbkNoYW5nZTogdGhpcy5jaGFuZ2VLZXkuYmluZCh0aGlzKSB9KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLCBwbGFjZWhvbGRlcjogXCJcXHUwNDE3XFx1MDQzRFxcdTA0MzBcXHUwNDQ3XFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQxXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzRVxcdTA0NEZcXHUwNDNEXFx1MDQzOFxcdTA0NEZcIixcblx0XHRcdFx0XHRvbkNoYW5nZTogdGhpcy5jaGFuZ2VWYWx1ZS5iaW5kKHRoaXMpIH0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImJ1dHRvblwiLCB2YWx1ZTogXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0NDFcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQ0RlxcdTA0M0RcXHUwNDM4XFx1MDQzNVwiLFxuXHRcdFx0XHRcdG9uQ2xpY2s6IHRoaXMuZGVsZXRlU3RhdGUuYmluZCh0aGlzKSB9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gU3RhdGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3Rlc3QvVGVzdE1vZHVsZTEuanN4XG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDYgOCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=