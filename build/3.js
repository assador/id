webpackJsonp([3],{

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VydmljZS9TdGF0ZS5qc3g/NGQ5NioiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiDQmtC+0LzQv9C+0L3QtdC90YIg0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPLCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC4INGD0LTQsNC70LXQvdC40Y8g0YHQvtGB0YLQvtGP0L3QuNC5INGA0L7QtNC40YLQtdC70YzRgdC60L7Qs9C+XG4gKiDQutC+0LzQv9C+0L3QtdC90YLQsCDigJQg0L/QviDQvtC00L3QvtC80YMgU3RhdGUg0L3QsCDQutCw0LbQtNC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1INGA0L7QtNC40YLQtdC70YzRgdC60L7Qs9C+INC60L7QvNC/0L7QvdC10L3RgtCwLlxuICog0J/RgNC4INGB0L7Qt9C00LDQvdC40LggKNGA0L7QtNC40YLQtdC70LXQvCkg0LXQvNGDINC00L7Qu9C20L3RiyDQv9C10YDQtdC00LDQstCw0YLRjNGB0Y8g0YHQstC+0LnRgdGC0LLQsCAo0LrQsNC6INC80LjQvdC40LzRg9C8KTpcbiAqIGs9e9C60LvRjtGHX9GB0L7RgdGC0L7Rj9C90LjRj30sIHY9e9C30L3QsNGH0LXQvdC40LVf0YHQvtGB0YLQvtGP0L3QuNGPfSwgcGFyZW50TW9kdWxlTnVtPXtJRF/RgNC+0LTQuNGC0LXQu9GPfSxcbiAqIHNldE1vZHVsZVN0YXRlPXvRhNGD0L3QutGG0LjRj1/RgNC+0LTQuNGC0LXQu9GPX9C60L7RgtC+0YDQsNGPX9C80LXQvdGP0LXRgl/RgdCw0LzQuF/RgNC+0LTQuNGC0LXQu9GM0YHQutC40LVf0YHQvtGB0YLQvtGP0L3QuNGPfVxuICovXG52YXIgU3RhdGUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoU3RhdGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIFN0YXRlKCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0ZSk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFN0YXRlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3RhdGUpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhTdGF0ZSwgW3tcblx0XHRrZXk6IFwiY2hhbmdlS2V5XCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNoYW5nZUtleShldnQpIHtcblx0XHRcdHRoaXMucHJvcHMuc2V0TW9kdWxlU3RhdGUodGhpcy5wcm9wcy5wYXJlbnRNb2R1bGVOdW0sIHtcblx0XHRcdFx0a2V5OiBldnQudGFyZ2V0LnZhbHVlLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52LFxuXHRcdFx0XHRvcnBoYW5lZDogdGhpcy5wcm9wcy5rXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiY2hhbmdlVmFsdWVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2hhbmdlVmFsdWUoZXZ0KSB7XG5cdFx0XHR0aGlzLnByb3BzLnNldE1vZHVsZVN0YXRlKHRoaXMucHJvcHMucGFyZW50TW9kdWxlTnVtLCB7XG5cdFx0XHRcdGtleTogdGhpcy5wcm9wcy5rLFxuXHRcdFx0XHR2YWx1ZTogZXZ0LnRhcmdldC52YWx1ZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcImRlbGV0ZVN0YXRlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZVN0YXRlKCkge1xuXHRcdFx0dGhpcy5wcm9wcy5zZXRNb2R1bGVTdGF0ZSh0aGlzLnByb3BzLnBhcmVudE1vZHVsZU51bSwge1xuXHRcdFx0XHRvcnBoYW5lZDogdGhpcy5wcm9wcy5rXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwiY29sLTVcIiB9LFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogdGhpcy5wcm9wcy5rLCBwbGFjZWhvbGRlcjogXCJcXHUwNDE4XFx1MDQzQ1xcdTA0NEYgXFx1MDQ0MVxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0M0VcXHUwNDRGXFx1MDQzRFxcdTA0MzhcXHUwNDRGXCIsXG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogdGhpcy5jaGFuZ2VLZXkuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJmaWVsZHdpZHRoXzEwMFwiXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBcImNvbC01XCIgfSxcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgdmFsdWU6IHRoaXMucHJvcHMudiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxN1xcdTA0M0RcXHUwNDMwXFx1MDQ0N1xcdTA0MzVcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0MVxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0M0VcXHUwNDRGXFx1MDQzRFxcdTA0MzhcXHUwNDRGXCIsXG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogdGhpcy5jaGFuZ2VWYWx1ZS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBcImZpZWxkd2lkdGhfMTAwXCJcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwiY29sLTJcIiB9LFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIHZhbHVlOiBcIlxcdTA0MjNcXHUwNDM0XFx1MDQzMFxcdTA0M0JcXHUwNDM4XFx1MDQ0MlxcdTA0NENcIixcblx0XHRcdFx0XHRcdG9uQ2xpY2s6IHRoaXMuZGVsZXRlU3RhdGUuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJmaWVsZHdpZHRoXzEwMFwiXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gU3RhdGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN0YXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9zZXJ2aWNlL1N0YXRlLmpzeFxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=