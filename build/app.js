!function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=r(1),a=_interopRequireDefault(o),u=r(2),i=_interopRequireDefault(u),l=r(3),s=_interopRequireDefault(l),c=r(5),p=_interopRequireDefault(c),f=function(e){function App(e){_classCallCheck(this,App);var t=_possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).call(this,e));return t.state={destURL:"/agate.php",session:"",modules:{},moduleActiveId:""},t}return _inherits(App,e),n(App,[{key:"componentWillMount",value:function componentWillMount(){this.setAppModule({id:"TestModule1_0",type:s.default,props:{prop1:"Какое-то свойство",prop2:"Ещё какое-то свойство"}})}},{key:"setAppModule",value:function setAppModule(e){var t=this.state.modules;this.state.modules[e.id]||(t[e.id]=React.createElement(e.type,e.props)),this.setState({modules:t,moduleActiveId:e.id})}},{key:"render",value:function render(){var e=this.state.modules[this.state.moduleActiveId];return React.createElement("div",null,React.createElement(a.default,{module:e,moduleId:this.state.moduleActiveId}),e,React.createElement(i.default,{setAppModule:this.setAppModule.bind(this)}))}}]),App}(React.Component);ReactDOM.render(React.createElement(f,null),document.getElementById("ewaiter-app"))},function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),n=function(e){function Header(){return _classCallCheck(this,Header),_possibleConstructorReturn(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments))}return _inherits(Header,e),r(Header,[{key:"render",value:function render(){return React.createElement("div",null,React.createElement("div",null,"<Header>"),React.createElement("h2",null,this.props.module.type.name," (текущий модуль App, ID: ",this.props.moduleId,")"),React.createElement("hr",null))}}]),Header}(React.Component);t.default=n},function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=r(3),a=_interopRequireDefault(o),u=r(5),i=_interopRequireDefault(u),l=function(e){function TestSwitcher(){return _classCallCheck(this,TestSwitcher),_possibleConstructorReturn(this,(TestSwitcher.__proto__||Object.getPrototypeOf(TestSwitcher)).apply(this,arguments))}return _inherits(TestSwitcher,e),n(TestSwitcher,[{key:"render",value:function render(){var e=this;return React.createElement("div",null,React.createElement("p",null,"<Тестовый селектор>"),React.createElement("p",null,React.createElement("button",{onClick:function onClick(t){return e.props.setAppModule({id:"TestModule1_0",type:a.default,props:{text:"Свойство text",someprop:"Свойство someprop",number:3},evt:t})}},"TestModule1",React.createElement("br",null),"создать со свойствами",React.createElement("br",null),'(text: "Свойство text", someprop: "Свойство someprop", number: 3)',React.createElement("br",null),"или активировать, если уже создан"),"  ",React.createElement("button",{onClick:function onClick(t){return e.props.setAppModule({id:"TestModule2_0",type:i.default,props:{someprop1:"Свойство 1",array:[1,2,3],someprop2:"Свойство 2"},evt:t})}},"TestModule2",React.createElement("br",null),"создать со свойствами",React.createElement("br",null),'(someprop1: "Свойство 1", array: [1, 2, 3], someprop: "Свойство 2")',React.createElement("br",null),"или активировать, если уже создан")))}}]),TestSwitcher}(React.Component);t.default=l},function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.State=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=r(4),a=_interopRequireDefault(o),u=function(e){function TestModule1(e){_classCallCheck(this,TestModule1);var t=_possibleConstructorReturn(this,(TestModule1.__proto__||Object.getPrototypeOf(TestModule1)).call(this,e));return t.state={states:{},lastId:-1},t}return _inherits(TestModule1,e),n(TestModule1,[{key:"addremoveModuleState",value:function addremoveModuleState(e){var t=this.state.states;"undefined"!=typeof e.remove?delete t[e.remove]:t[this.state.lastId+1]=React.createElement(i,{id:this.state.lastId+1,key:this.state.lastId+1,setModuleState:this.setModuleState.bind(this)}),this.setState({states:t,lastId:this.state.lastId+1})}},{key:"setModuleState",value:function setModuleState(e){"undefined"!=typeof e.key&&"undefined"!=typeof e.value&&this.setState(_defineProperty({},e.key,e.value)),"undefined"!=typeof e.orphaned&&(delete this.state[e.orphaned],this.forceUpdate()),"undefined"!=typeof e.id&&this.addremoveModuleState({remove:e.id})}},{key:"componentWillMount",value:function componentWillMount(){this.addremoveModuleState({})}},{key:"render",value:function render(){var e=this;return React.createElement("div",null,React.createElement("div",null,"<Активный модуль>"),React.createElement("h3",null,"TestModule1.props:"),React.createElement(a.default,{data:this.props}),React.createElement("h3",null,"Редактирование TestModule1.state:"),Object.keys(this.state.states).map(function(t){return e.state.states[t]}),React.createElement("input",{type:"button",value:"Добавить ещё",onClick:function onClick(t){return e.addremoveModuleState({evt:t})}}),React.createElement("h3",null,"TestModule1.state:"),React.createElement(a.default,{data:this.state}),React.createElement("hr",null))}}]),TestModule1}(React.Component);t.default=u;var i=t.State=function(e){function State(e){_classCallCheck(this,State);var t=_possibleConstructorReturn(this,(State.__proto__||Object.getPrototypeOf(State)).call(this,e));return t.state={key:"",value:""},t}return _inherits(State,e),n(State,[{key:"changeKey",value:function changeKey(e){"states"!==e.target.value&&(this.props.setModuleState({key:e.target.value,value:this.state.value,orphaned:this.state.key}),this.setState({key:e.target.value}))}},{key:"changeValue",value:function changeValue(e){this.props.setModuleState({key:this.state.key,value:e.target.value}),this.setState({value:e.target.value})}},{key:"deleteState",value:function deleteState(e){this.props.setModuleState({orphaned:this.state.key,id:this.props.id})}},{key:"render",value:function render(){return React.createElement("div",null,React.createElement("input",{type:"text",value:this.state.key,placeholder:"Имя состояния",onChange:this.changeKey.bind(this)}),React.createElement("input",{type:"text",value:this.state.value,placeholder:"Значение состояния",onChange:this.changeValue.bind(this)}),React.createElement("input",{type:"button",value:"Удалить состояние",onClick:this.deleteState.bind(this)}))}}]),State}(React.Component)},function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=function(e){function DevProps(){return _classCallCheck(this,DevProps),_possibleConstructorReturn(this,(DevProps.__proto__||Object.getPrototypeOf(DevProps)).apply(this,arguments))}return _inherits(DevProps,e),n(DevProps,[{key:"render",value:function render(){var e=this;return React.createElement("ul",null,Object.keys(this.props.data).map(function(t){return React.createElement("li",{key:t},t,": ","object"!==r(e.props.data[t])?e.props.data[t]:React.createElement("b",null,"Object"))}))}}]),DevProps}(React.Component);t.default=o},function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=r(4),a=_interopRequireDefault(o),u=function(e){function TestModule2(){return _classCallCheck(this,TestModule2),_possibleConstructorReturn(this,(TestModule2.__proto__||Object.getPrototypeOf(TestModule2)).apply(this,arguments))}return _inherits(TestModule2,e),n(TestModule2,[{key:"render",value:function render(){return React.createElement("div",null,React.createElement("div",null,"<Активный модуль>"),React.createElement("h3",null,"TestModule2.props:"),React.createElement(a.default,{data:this.props}),React.createElement("hr",null))}}]),TestModule2}(React.Component);t.default=u}]);