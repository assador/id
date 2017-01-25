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

	var _App = __webpack_require__(1);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	ReactDOM.render(React.createElement(_App2.default, null), document.getElementById("ewaiter-app"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(2);

	var _AppStore = __webpack_require__(47);

	var _AppStore2 = _interopRequireDefault(_AppStore);

	var _AppActions = __webpack_require__(53);

	var _AppActions2 = _interopRequireDefault(_AppActions);

	var _Login = __webpack_require__(55);

	var _Login2 = _interopRequireDefault(_Login);

	var _Home = __webpack_require__(62);

	var _Home2 = _interopRequireDefault(_Home);

	var _StoresPool = __webpack_require__(61);

	var _StoresPool2 = _interopRequireDefault(_StoresPool);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* Это компонент рута */
	/*А так мы создаем ему Store, который не собираемся убивать*/
	_StoresPool2.default.create('App', _AppStore2.default);

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App() {
			_classCallCheck(this, App);

			return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
		}

		_createClass(App, [{
			key: "componentDidMount",

			/**
	   * Когда он видит, что его вставили в дерево — он делает запрос на сервер
	   * на cls = home. Это проверка прав. Если у юзера валидная session — сервер
	   * определит права, подключит нужный вариант home и скажет, что рисовать.
	   * Если session не валидна — сервер выдаст команду рисовать Login.
	  */
			value: function componentDidMount() {
				_AppActions2.default.loadModule("home");
			}
		}, {
			key: "render",
			value: function render() {
				var cls = this.state.appStore.get("cls");
				switch (cls) {
					case "Loading":
						return React.createElement(
							"div",
							null,
							"Loading\u2026"
						);
					case "":
						return React.createElement(
							"div",
							null,
							"Not inited yet."
						);
					case "Login":
						return React.createElement(_Login2.default, null);
					case "Home":
						return React.createElement(_Home2.default, { user: this.state.appStore.get("roles") });
					default:
						return React.createElement(
							"div",
							null,
							"Panic, there is no ",
							cls,
							" cather."
						);
				}
			}
		}], [{
			key: "getStores",

			/**
	   * Эти две функции — чёрная магия. Они обязательны, когда компонент является
	   * Container — т.e., берет своё state у Store. В данном случае — мы говорим,
	   * что использует AppStore и что наше state — забирается из AppState.getState()
	  */
			value: function getStores() {
				return _StoresPool2.default.arr('App');
			}
		}, {
			key: "calculateState",
			value: function calculateState(prevState) {
				return {
					appStore: _StoresPool2.default.item('App').getState()
				};
			}
		}]);

		return App;
	}(React.Component);

	exports.default = _utils.Container.create(App);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Container = __webpack_require__(3);
	module.exports.Mixin = __webpack_require__(38);
	module.exports.ReduceStore = __webpack_require__(39);
	module.exports.Store = __webpack_require__(40);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FluxContainer
	 * 
	 */

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FluxContainerSubscriptions = __webpack_require__(5);
	var React = __webpack_require__(8);

	var invariant = __webpack_require__(7);
	var shallowEqual = __webpack_require__(37);

	var Component = React.Component;

	var DEFAULT_OPTIONS = {
	  pure: true,
	  withProps: false,
	  withContext: false
	};

	/**
	 * A FluxContainer is used to subscribe a react component to multiple stores.
	 * The stores that are used must be returned from a static `getStores()` method.
	 *
	 * The component receives information from the stores via state. The state
	 * is generated using a static `calculateState()` method that each container
	 * must implement. A simple container may look like:
	 *
	 *   class FooContainer extends Component {
	 *     static getStores() {
	 *       return [FooStore];
	 *     }
	 *
	 *     static calculateState() {
	 *       return {
	 *         foo: FooStore.getState(),
	 *       };
	 *     }
	 *
	 *     render() {
	 *       return <FooView {...this.state} />;
	 *     }
	 *   }
	 *
	 *   module.exports = FluxContainer.create(FooContainer);
	 *
	 * Flux container also supports some other, more advanced use cases. If you need
	 * to base your state off of props as well:
	 *
	 *   class FooContainer extends Component {
	 *     ...
	 *
	 *     static calculateState(prevState, props) {
	 *       return {
	 *         foo: FooStore.getSpecificFoo(props.id),
	 *       };
	 *     }
	 *
	 *     ...
	 *   }
	 *
	 *   module.exports = FluxContainer.create(FooContainer, {withProps: true});
	 *
	 * Or if your stores are passed through your props:
	 *
	 *   class FooContainer extends Component {
	 *     ...
	 *
	 *     static getStores(props) {
	 *       const {BarStore, FooStore} = props.stores;
	 *       return [BarStore, FooStore];
	 *     }
	 *
	 *     statc calculateState(prevState, props) {
	 *       const {BarStore, FooStore} = props.stores;
	 *       return {
	 *         bar: BarStore.getState(),
	 *         foo: FooStore.getState(),
	 *       };
	 *     }
	 *
	 *     ...
	 *   }
	 *
	 *   module.exports = FluxContainer.create(FooContainer, {withProps: true});
	 */
	function create(Base, options) {
	  enforceInterface(Base);

	  // Construct the options using default, override with user values as necessary.
	  var realOptions = _extends({}, DEFAULT_OPTIONS, options || {});

	  var getState = function (state, maybeProps, maybeContext) {
	    var props = realOptions.withProps ? maybeProps : undefined;
	    var context = realOptions.withContext ? maybeContext : undefined;
	    return Base.calculateState(state, props, context);
	  };

	  var getStores = function (maybeProps, maybeContext) {
	    var props = realOptions.withProps ? maybeProps : undefined;
	    var context = realOptions.withContext ? maybeContext : undefined;
	    return Base.getStores(props, context);
	  };

	  // Build the container class.

	  var ContainerClass = (function (_Base) {
	    _inherits(ContainerClass, _Base);

	    function ContainerClass(props, context) {
	      var _this = this;

	      _classCallCheck(this, ContainerClass);

	      _Base.call(this, props, context);
	      this._fluxContainerSubscriptions = new FluxContainerSubscriptions();
	      this._fluxContainerSubscriptions.setStores(getStores(props));
	      this._fluxContainerSubscriptions.addListener(function () {
	        _this.setState(function (prevState, currentProps) {
	          return getState(prevState, currentProps, context);
	        });
	      });
	      var calculatedState = getState(undefined, props, context);
	      this.state = _extends({}, this.state || {}, calculatedState);
	    }

	    // Make sure we override shouldComponentUpdate only if the pure option is
	    // specified. We can't override this above because we don't want to override
	    // the default behavior on accident. Super works weird with react ES6 classes.

	    ContainerClass.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
	      if (_Base.prototype.componentWillReceiveProps) {
	        _Base.prototype.componentWillReceiveProps.call(this, nextProps, nextContext);
	      }

	      if (realOptions.withProps || realOptions.withContext) {
	        // Update both stores and state.
	        this._fluxContainerSubscriptions.setStores(getStores(nextProps, nextContext));
	        this.setState(function (prevState) {
	          return getState(prevState, nextProps, nextContext);
	        });
	      }
	    };

	    ContainerClass.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (_Base.prototype.componentWillUnmount) {
	        _Base.prototype.componentWillUnmount.call(this);
	      }

	      this._fluxContainerSubscriptions.reset();
	    };

	    return ContainerClass;
	  })(Base);

	  var container = realOptions.pure ? createPureComponent(ContainerClass) : ContainerClass;

	  // Update the name of the container before returning
	  var componentName = Base.displayName || Base.name;
	  container.displayName = 'FluxContainer(' + componentName + ')';
	  return container;
	}

	function createPureComponent(BaseComponent) {
	  var PureComponent = (function (_BaseComponent) {
	    _inherits(PureComponent, _BaseComponent);

	    function PureComponent() {
	      _classCallCheck(this, PureComponent);

	      _BaseComponent.apply(this, arguments);
	    }

	    PureComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	      return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
	    };

	    return PureComponent;
	  })(BaseComponent);

	  return PureComponent;
	}

	function enforceInterface(o) {
	  !o.getStores ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Components that use FluxContainer must implement `static getStores()`') : invariant(false) : undefined;
	  !o.calculateState ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Components that use FluxContainer must implement `static calculateState()`') : invariant(false) : undefined;
	}

	/**
	 * This is a way to connect stores to a functional stateless view. Here's a
	 * simple example:
	 *
	 *   // FooView.js
	 *
	 *   function FooView(props) {
	 *     return <div>{props.value}</div>;
	 *   }
	 *
	 *   module.exports = FooView;
	 *
	 *
	 *   // FooContainer.js
	 *
	 *   function getStores() {
	 *     return [FooStore];
	 *   }
	 *
	 *   function calculateState() {
	 *     return {
	 *       value: FooStore.getState();
	 *     };
	 *   }
	 *
	 *   module.exports = FluxContainer.createFunctional(
	 *     FooView,
	 *     getStores,
	 *     calculateState,
	 *   );
	 *
	 */
	function createFunctional(viewFn, _getStores, _calculateState, options) {
	  var FunctionalContainer = (function (_Component) {
	    _inherits(FunctionalContainer, _Component);

	    function FunctionalContainer() {
	      _classCallCheck(this, FunctionalContainer);

	      _Component.apply(this, arguments);
	    }

	    // Update the name of the component before creating the container.

	    FunctionalContainer.getStores = function getStores(props, context) {
	      return _getStores(props, context);
	    };

	    FunctionalContainer.calculateState = function calculateState(prevState, props, context) {
	      return _calculateState(prevState, props, context);
	    };

	    FunctionalContainer.prototype.render = function render() {
	      return viewFn(this.state);
	    };

	    return FunctionalContainer;
	  })(Component);

	  var viewFnName = viewFn.displayName || viewFn.name || 'FunctionalContainer';
	  FunctionalContainer.displayName = viewFnName;
	  return create(FunctionalContainer, options);
	}

	module.exports = { create: create, createFunctional: createFunctional };
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FluxContainerSubscriptions
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var FluxStoreGroup = __webpack_require__(6);

	var FluxContainerSubscriptions = (function () {
	  function FluxContainerSubscriptions() {
	    _classCallCheck(this, FluxContainerSubscriptions);

	    this._callbacks = [];
	  }

	  FluxContainerSubscriptions.prototype.setStores = function setStores(stores) {
	    var _this = this;

	    this._resetTokens();
	    this._resetStoreGroup();

	    var changed = false;
	    var changedStores = [];

	    if (process.env.NODE_ENV !== 'production') {
	      // Keep track of the stores that changed for debugging purposes only
	      this._tokens = stores.map(function (store) {
	        return store.addListener(function () {
	          changed = true;
	          changedStores.push(store);
	        });
	      });
	    } else {
	      (function () {
	        var setChanged = function () {
	          changed = true;
	        };
	        _this._tokens = stores.map(function (store) {
	          return store.addListener(setChanged);
	        });
	      })();
	    }

	    var callCallbacks = function () {
	      if (changed) {
	        _this._callbacks.forEach(function (fn) {
	          return fn();
	        });
	        changed = false;
	        if (process.env.NODE_ENV !== 'production') {
	          // Uncomment this to print the stores that changed.
	          // console.log(changedStores);
	          changedStores = [];
	        }
	      }
	    };
	    this._storeGroup = new FluxStoreGroup(stores, callCallbacks);
	  };

	  FluxContainerSubscriptions.prototype.addListener = function addListener(fn) {
	    this._callbacks.push(fn);
	  };

	  FluxContainerSubscriptions.prototype.reset = function reset() {
	    this._resetTokens();
	    this._resetStoreGroup();
	    this._resetCallbacks();
	  };

	  FluxContainerSubscriptions.prototype._resetTokens = function _resetTokens() {
	    if (this._tokens) {
	      this._tokens.forEach(function (token) {
	        return token.remove();
	      });
	      this._tokens = null;
	    }
	  };

	  FluxContainerSubscriptions.prototype._resetStoreGroup = function _resetStoreGroup() {
	    if (this._storeGroup) {
	      this._storeGroup.release();
	      this._storeGroup = null;
	    }
	  };

	  FluxContainerSubscriptions.prototype._resetCallbacks = function _resetCallbacks() {
	    this._callbacks = [];
	  };

	  return FluxContainerSubscriptions;
	})();

	module.exports = FluxContainerSubscriptions;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FluxStoreGroup
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(7);

	/**
	 * FluxStoreGroup allows you to execute a callback on every dispatch after
	 * waiting for each of the given stores.
	 */

	var FluxStoreGroup = (function () {
	  function FluxStoreGroup(stores, callback) {
	    var _this = this;

	    _classCallCheck(this, FluxStoreGroup);

	    this._dispatcher = _getUniformDispatcher(stores);

	    // Precompute store tokens.
	    var storeTokens = stores.map(function (store) {
	      return store.getDispatchToken();
	    });

	    // Register with the dispatcher.
	    this._dispatchToken = this._dispatcher.register(function (payload) {
	      _this._dispatcher.waitFor(storeTokens);
	      callback();
	    });
	  }

	  FluxStoreGroup.prototype.release = function release() {
	    this._dispatcher.unregister(this._dispatchToken);
	  };

	  return FluxStoreGroup;
	})();

	function _getUniformDispatcher(stores) {
	  !(stores && stores.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Must provide at least one store to FluxStoreGroup') : invariant(false) : undefined;
	  var dispatcher = stores[0].getDispatcher();
	  if (process.env.NODE_ENV !== 'production') {
	    for (var _iterator = stores, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var store = _ref;

	      !(store.getDispatcher() === dispatcher) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'All stores in a FluxStoreGroup must use the same dispatcher') : invariant(false) : undefined;
	    }
	  }
	  return dispatcher;
	}

	module.exports = FluxStoreGroup;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(9);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(10);

	var ReactChildren = __webpack_require__(11);
	var ReactComponent = __webpack_require__(23);
	var ReactPureComponent = __webpack_require__(26);
	var ReactClass = __webpack_require__(27);
	var ReactDOMFactories = __webpack_require__(29);
	var ReactElement = __webpack_require__(14);
	var ReactPropTypes = __webpack_require__(34);
	var ReactVersion = __webpack_require__(35);

	var onlyChild = __webpack_require__(36);
	var warning = __webpack_require__(16);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(30);
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;

	if (process.env.NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function () {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var PooledClass = __webpack_require__(12);
	var ReactElement = __webpack_require__(14);

	var emptyFunction = __webpack_require__(17);
	var traverseAllChildren = __webpack_require__(20);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(13);

	var invariant = __webpack_require__(7);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler
	};

	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(10);

	var ReactCurrentOwner = __webpack_require__(15);

	var warning = __webpack_require__(16);
	var canDefineProperty = __webpack_require__(18);
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var REACT_ELEMENT_TYPE = __webpack_require__(19);

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	function hasValidRef(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(17);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    // $FlowFixMe https://github.com/facebook/flow/issues/285
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.

	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	module.exports = REACT_ELEMENT_TYPE;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(13);

	var ReactCurrentOwner = __webpack_require__(15);
	var REACT_ELEMENT_TYPE = __webpack_require__(19);

	var getIteratorFn = __webpack_require__(21);
	var invariant = __webpack_require__(7);
	var KeyEscapeUtils = __webpack_require__(22);
	var warning = __webpack_require__(16);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * This is inlined from ReactElement since this file is shared between
	 * isomorphic and renderers. We could extract this to a
	 *
	 */

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(13);

	var ReactNoopUpdateQueue = __webpack_require__(24);

	var canDefineProperty = __webpack_require__(18);
	var emptyObject = __webpack_require__(25);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(16);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var warning = __webpack_require__(16);

	function warnNoop(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(10);

	var ReactComponent = __webpack_require__(23);
	var ReactNoopUpdateQueue = __webpack_require__(24);

	var emptyObject = __webpack_require__(25);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	module.exports = ReactPureComponent;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(13),
	    _assign = __webpack_require__(10);

	var ReactComponent = __webpack_require__(23);
	var ReactElement = __webpack_require__(14);
	var ReactPropTypeLocationNames = __webpack_require__(28);
	var ReactNoopUpdateQueue = __webpack_require__(24);

	var emptyObject = __webpack_require__(25);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(16);

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */


	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: 'DEFINE_MANY',

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: 'DEFINE_MANY',

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: 'DEFINE_MANY',

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: 'DEFINE_MANY_MERGED',

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: 'DEFINE_MANY_MERGED',

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: 'DEFINE_MANY_MERGED',

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: 'DEFINE_ONCE',

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: 'DEFINE_MANY',

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: 'DEFINE_MANY',

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: 'DEFINE_MANY',

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: 'DEFINE_ONCE',

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: 'DEFINE_MANY',

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: 'OVERRIDE_BASE'

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, 'childContext');
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, 'context');
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, 'prop');
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };

	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === 'OVERRIDE_BASE') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    if (process.env.NODE_ENV !== 'production') {
	      var typeofSpec = typeof spec;
	      var isMixinValid = typeofSpec === 'object' && spec !== null;

	      process.env.NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
	    }

	    return;
	  }

	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === 'DEFINE_MANY_MERGED') {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === 'DEFINE_MANY') {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactElement = __webpack_require__(14);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(30);
	  createDOMFactory = ReactElementValidator.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(15);
	var ReactComponentTreeHook = __webpack_require__(31);
	var ReactElement = __webpack_require__(14);

	var checkReactTypeSpec = __webpack_require__(32);

	var canDefineProperty = __webpack_require__(18);
	var getIteratorFn = __webpack_require__(21);
	var warning = __webpack_require__(16);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {

	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      if (typeof type !== 'function' && typeof type !== 'string') {
	        var info = '';
	        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	          info += ' You likely forgot to export your component from the file ' + 'it\'s defined in.';
	        }
	        info += getDeclarationErrorAddendum();
	        process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
	      }
	    }

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(13);

	var ReactCurrentOwner = __webpack_require__(15);

	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(16);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;

	if (canUseCollections) {
	  var itemMap = new Map();
	  var rootIDSet = new Set();

	  setItem = function (id, item) {
	    itemMap.set(id, item);
	  };
	  getItem = function (id) {
	    return itemMap.get(id);
	  };
	  removeItem = function (id) {
	    itemMap['delete'](id);
	  };
	  getItemIDs = function () {
	    return Array.from(itemMap.keys());
	  };

	  addRoot = function (id) {
	    rootIDSet.add(id);
	  };
	  removeRoot = function (id) {
	    rootIDSet['delete'](id);
	  };
	  getRootIDs = function () {
	    return Array.from(rootIDSet.keys());
	  };
	} else {
	  var itemByKey = {};
	  var rootByKey = {};

	  // Use non-numeric keys to prevent V8 performance issues:
	  // https://github.com/facebook/react/pull/7232
	  var getKeyFromID = function (id) {
	    return '.' + id;
	  };
	  var getIDFromKey = function (key) {
	    return parseInt(key.substr(1), 10);
	  };

	  setItem = function (id, item) {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  };
	  getItem = function (id) {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  };
	  removeItem = function (id) {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  };
	  getItemIDs = function () {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  };

	  addRoot = function (id) {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  };
	  removeRoot = function (id) {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  };
	  getRootIDs = function () {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  };
	}

	var unmountedIDs = [];

	function purgeDeep(id) {
	  var item = getItem(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    removeItem(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = getItem(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent id is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    var item = {
	      element: element,
	      parentID: parentID,
	      text: null,
	      childIDs: [],
	      isMounted: false,
	      updateCount: 0
	    };
	    setItem(id, item);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = getItem(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = getItem(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var name = getDisplayName(topElement);
	      var owner = topElement._owner;
	      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = getItem(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = getItem(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = getItem(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = getItem(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = getItem(id);
	    return item ? item.updateCount : 0;
	  },


	  getRootIDs: getRootIDs,
	  getRegisteredIDs: getItemIDs
	};

	module.exports = ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(13);

	var ReactPropTypeLocationNames = __webpack_require__(28);
	var ReactPropTypesSecret = __webpack_require__(33);

	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(16);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(31);
	}

	var loggedTypeFailures = {};

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var componentStackInfo = '';

	        if (process.env.NODE_ENV !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(31);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }

	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}

	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactElement = __webpack_require__(14);
	var ReactPropTypeLocationNames = __webpack_require__(28);
	var ReactPropTypesSecret = __webpack_require__(33);

	var emptyFunction = __webpack_require__(17);
	var getIteratorFn = __webpack_require__(21);
	var warning = __webpack_require__(16);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	  symbol: createPrimitiveTypeChecker('symbol'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/

	/**
	 * We use an Error-like object for backward compatibility as people may call
	 * PropTypes directly and inspect their output. However we don't use real
	 * Errors anymore. We don't inspect their stack anyway, and creating them
	 * is prohibitively expensive if they are created too often, such as what
	 * happens in oneOfType() for any type before the one that matched.
	 */
	function PropTypeError(message) {
	  this.message = message;
	  this.stack = '';
	}
	// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype = Error.prototype;

	function createChainableTypeChecker(validate) {
	  if (process.env.NODE_ENV !== 'production') {
	    var manualPropTypeCallCache = {};
	  }
	  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (process.env.NODE_ENV !== 'production') {
	      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
	        var cacheKey = componentName + ':' + propName;
	        if (!manualPropTypeCallCache[cacheKey]) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in production with the next major version. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName) : void 0;
	          manualPropTypeCallCache[cacheKey] = true;
	        }
	      }
	    }
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        if (props[propName] === null) {
	          return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	        }
	        return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName, secret) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!ReactElement.isValidElement(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }

	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }

	      return true;
	    default:
	      return false;
	  }
	}

	function isSymbol(propType, propValue) {
	  // Native Symbol.
	  if (propType === 'symbol') {
	    return true;
	  }

	  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	  if (propValue['@@toStringTag'] === 'Symbol') {
	    return true;
	  }

	  // Fallback for non-spec compliant Symbols which are polyfilled.
	  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	    return true;
	  }

	  return false;
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  if (isSymbol(propType, propValue)) {
	    return 'symbol';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	module.exports = '15.4.2';

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(13);

	var ReactElement = __webpack_require__(14);

	var invariant = __webpack_require__(7);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}

	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 37 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FluxMixinLegacy
	 * 
	 */

	'use strict';

	var FluxStoreGroup = __webpack_require__(6);

	var invariant = __webpack_require__(7);

	/**
	 * `FluxContainer` should be preferred over this mixin, but it requires using
	 * react with classes. So this mixin is provided where it is not yet possible
	 * to convert a container to be a class.
	 *
	 * This mixin should be used for React components that have state based purely
	 * on stores. `this.props` will not be available inside of `calculateState()`.
	 *
	 * This mixin will only `setState` not replace it, so you should always return
	 * every key in your state unless you know what you are doing. Consider this:
	 *
	 *   var Foo = React.createClass({
	 *     mixins: [
	 *       FluxMixinLegacy([FooStore])
	 *     ],
	 *
	 *     statics: {
	 *       calculateState(prevState) {
	 *         if (!prevState) {
	 *           return {
	 *             foo: FooStore.getFoo(),
	 *           };
	 *         }
	 *
	 *         return {
	 *           bar: FooStore.getBar(),
	 *         };
	 *       }
	 *     },
	 *   });
	 *
	 * On the second calculateState when prevState is not null, the state will be
	 * updated to contain the previous foo AND the bar that was just returned. Only
	 * returning bar will not delete foo.
	 *
	 */
	function FluxMixinLegacy(stores) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? { withProps: false } : arguments[1];

	  stores = stores.filter(function (store) {
	    return !!store;
	  });

	  return {
	    getInitialState: function () {
	      enforceInterface(this);
	      return options.withProps ? this.constructor.calculateState(null, this.props) : this.constructor.calculateState(null, undefined);
	    },

	    componentWillMount: function () {
	      var _this = this;

	      // This tracks when any store has changed and we may need to update.
	      var changed = false;
	      var setChanged = function () {
	        changed = true;
	      };

	      // This adds subscriptions to stores. When a store changes all we do is
	      // set changed to true.
	      this._fluxMixinSubscriptions = stores.map(function (store) {
	        return store.addListener(setChanged);
	      });

	      // This callback is called after the dispatch of the relevant stores. If
	      // any have reported a change we update the state, then reset changed.
	      var callback = function () {
	        if (changed) {
	          _this.setState(function (prevState) {
	            return options.withProps ? _this.constructor.calculateState(prevState, _this.props) : _this.constructor.calculateState(prevState, undefined);
	          });
	        }
	        changed = false;
	      };
	      this._fluxMixinStoreGroup = new FluxStoreGroup(stores, callback);
	    },

	    componentWillUnmount: function () {
	      this._fluxMixinStoreGroup.release();
	      for (var _iterator = this._fluxMixinSubscriptions, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        var _ref;

	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }

	        var subscription = _ref;

	        subscription.remove();
	      }
	      this._fluxMixinSubscriptions = [];
	    }
	  };
	}

	function enforceInterface(o) {
	  !o.constructor.calculateState ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Components that use FluxMixinLegacy must implement ' + '`calculateState()` on the statics object') : invariant(false) : undefined;
	}

	module.exports = FluxMixinLegacy;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FluxReduceStore
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FluxStore = __webpack_require__(40);

	var abstractMethod = __webpack_require__(46);
	var invariant = __webpack_require__(7);

	/**
	 * This is the basic building block of a Flux application. All of your stores
	 * should extend this class.
	 *
	 *   class CounterStore extends FluxReduceStore<number> {
	 *     getInitialState(): number {
	 *       return 1;
	 *     }
	 *
	 *     reduce(state: number, action: Object): number {
	 *       switch(action.type) {
	 *         case: 'add':
	 *           return state + action.value;
	 *         case: 'double':
	 *           return state * 2;
	 *         default:
	 *           return state;
	 *       }
	 *     }
	 *   }
	 */

	var FluxReduceStore = (function (_FluxStore) {
	  _inherits(FluxReduceStore, _FluxStore);

	  function FluxReduceStore(dispatcher) {
	    _classCallCheck(this, FluxReduceStore);

	    _FluxStore.call(this, dispatcher);
	    this._state = this.getInitialState();
	  }

	  /**
	   * Getter that exposes the entire state of this store. If your state is not
	   * immutable you should override this and not expose _state directly.
	   */

	  FluxReduceStore.prototype.getState = function getState() {
	    return this._state;
	  };

	  /**
	   * Constructs the initial state for this store. This is called once during
	   * construction of the store.
	   */

	  FluxReduceStore.prototype.getInitialState = function getInitialState() {
	    return abstractMethod('FluxReduceStore', 'getInitialState');
	  };

	  /**
	   * Used to reduce a stream of actions coming from the dispatcher into a
	   * single state object.
	   */

	  FluxReduceStore.prototype.reduce = function reduce(state, action) {
	    return abstractMethod('FluxReduceStore', 'reduce');
	  };

	  /**
	   * Checks if two versions of state are the same. You do not need to override
	   * this if your state is immutable.
	   */

	  FluxReduceStore.prototype.areEqual = function areEqual(one, two) {
	    return one === two;
	  };

	  FluxReduceStore.prototype.__invokeOnDispatch = function __invokeOnDispatch(action) {
	    this.__changed = false;

	    // Reduce the stream of incoming actions to state, update when necessary.
	    var startingState = this._state;
	    var endingState = this.reduce(startingState, action);

	    // This means your ending state should never be undefined.
	    !(endingState !== undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s returned undefined from reduce(...), did you forget to return ' + 'state in the default case? (use null if this was intentional)', this.constructor.name) : invariant(false) : undefined;

	    if (!this.areEqual(startingState, endingState)) {
	      this._state = endingState;

	      // `__emitChange()` sets `this.__changed` to true and then the actual
	      // change will be fired from the emitter at the end of the dispatch, this
	      // is required in order to support methods like `hasChanged()`
	      this.__emitChange();
	    }

	    if (this.__changed) {
	      this.__emitter.emit(this.__changeEvent);
	    }
	  };

	  return FluxReduceStore;
	})(FluxStore);

	module.exports = FluxReduceStore;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FluxStore
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _require = __webpack_require__(41);

	var EventEmitter = _require.EventEmitter;

	var invariant = __webpack_require__(7);

	/**
	 * This class represents the most basic functionality for a FluxStore. Do not
	 * extend this store directly; instead extend FluxReduceStore when creating a
	 * new store.
	 */

	var FluxStore = (function () {
	  function FluxStore(dispatcher) {
	    var _this = this;

	    _classCallCheck(this, FluxStore);

	    this.__className = this.constructor.name;

	    this.__changed = false;
	    this.__changeEvent = 'change';
	    this.__dispatcher = dispatcher;
	    this.__emitter = new EventEmitter();
	    this._dispatchToken = dispatcher.register(function (payload) {
	      _this.__invokeOnDispatch(payload);
	    });
	  }

	  FluxStore.prototype.addListener = function addListener(callback) {
	    return this.__emitter.addListener(this.__changeEvent, callback);
	  };

	  FluxStore.prototype.getDispatcher = function getDispatcher() {
	    return this.__dispatcher;
	  };

	  /**
	   * This exposes a unique string to identify each store's registered callback.
	   * This is used with the dispatcher's waitFor method to declaratively depend
	   * on other stores updating themselves first.
	   */

	  FluxStore.prototype.getDispatchToken = function getDispatchToken() {
	    return this._dispatchToken;
	  };

	  /**
	   * Returns whether the store has changed during the most recent dispatch.
	   */

	  FluxStore.prototype.hasChanged = function hasChanged() {
	    !this.__dispatcher.isDispatching() ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.hasChanged(): Must be invoked while dispatching.', this.__className) : invariant(false) : undefined;
	    return this.__changed;
	  };

	  FluxStore.prototype.__emitChange = function __emitChange() {
	    !this.__dispatcher.isDispatching() ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.__emitChange(): Must be invoked while dispatching.', this.__className) : invariant(false) : undefined;
	    this.__changed = true;
	  };

	  /**
	   * This method encapsulates all logic for invoking __onDispatch. It should
	   * be used for things like catching changes and emitting them after the
	   * subclass has handled a payload.
	   */

	  FluxStore.prototype.__invokeOnDispatch = function __invokeOnDispatch(payload) {
	    this.__changed = false;
	    this.__onDispatch(payload);
	    if (this.__changed) {
	      this.__emitter.emit(this.__changeEvent);
	    }
	  };

	  /**
	   * The callback that will be registered with the dispatcher during
	   * instantiation. Subclasses must override this method. This callback is the
	   * only way the store receives new data.
	   */

	  FluxStore.prototype.__onDispatch = function __onDispatch(payload) {
	     true ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s has not overridden FluxStore.__onDispatch(), which is required', this.__className) : invariant(false) : undefined;
	  };

	  return FluxStore;
	})();

	module.exports = FluxStore;

	// private

	// protected, available to subclasses
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	var fbemitter = {
	  EventEmitter: __webpack_require__(42),
	  EmitterSubscription : __webpack_require__(43)
	};

	module.exports = fbemitter;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BaseEventEmitter
	 * @typechecks
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var EmitterSubscription = __webpack_require__(43);
	var EventSubscriptionVendor = __webpack_require__(45);

	var emptyFunction = __webpack_require__(17);
	var invariant = __webpack_require__(7);

	/**
	 * @class BaseEventEmitter
	 * @description
	 * An EventEmitter is responsible for managing a set of listeners and publishing
	 * events to them when it is told that such events happened. In addition to the
	 * data for the given event it also sends a event control object which allows
	 * the listeners/handlers to prevent the default behavior of the given event.
	 *
	 * The emitter is designed to be generic enough to support all the different
	 * contexts in which one might want to emit events. It is a simple multicast
	 * mechanism on top of which extra functionality can be composed. For example, a
	 * more advanced emitter may use an EventHolder and EventFactory.
	 */

	var BaseEventEmitter = (function () {
	  /**
	   * @constructor
	   */

	  function BaseEventEmitter() {
	    _classCallCheck(this, BaseEventEmitter);

	    this._subscriber = new EventSubscriptionVendor();
	    this._currentSubscription = null;
	  }

	  /**
	   * Adds a listener to be invoked when events of the specified type are
	   * emitted. An optional calling context may be provided. The data arguments
	   * emitted will be passed to the listener function.
	   *
	   * TODO: Annotate the listener arg's type. This is tricky because listeners
	   *       can be invoked with varargs.
	   *
	   * @param {string} eventType - Name of the event to listen to
	   * @param {function} listener - Function to invoke when the specified event is
	   *   emitted
	   * @param {*} context - Optional context object to use when invoking the
	   *   listener
	   */

	  BaseEventEmitter.prototype.addListener = function addListener(eventType, listener, context) {
	    return this._subscriber.addSubscription(eventType, new EmitterSubscription(this._subscriber, listener, context));
	  };

	  /**
	   * Similar to addListener, except that the listener is removed after it is
	   * invoked once.
	   *
	   * @param {string} eventType - Name of the event to listen to
	   * @param {function} listener - Function to invoke only once when the
	   *   specified event is emitted
	   * @param {*} context - Optional context object to use when invoking the
	   *   listener
	   */

	  BaseEventEmitter.prototype.once = function once(eventType, listener, context) {
	    var emitter = this;
	    return this.addListener(eventType, function () {
	      emitter.removeCurrentListener();
	      listener.apply(context, arguments);
	    });
	  };

	  /**
	   * Removes all of the registered listeners, including those registered as
	   * listener maps.
	   *
	   * @param {?string} eventType - Optional name of the event whose registered
	   *   listeners to remove
	   */

	  BaseEventEmitter.prototype.removeAllListeners = function removeAllListeners(eventType) {
	    this._subscriber.removeAllSubscriptions(eventType);
	  };

	  /**
	   * Provides an API that can be called during an eventing cycle to remove the
	   * last listener that was invoked. This allows a developer to provide an event
	   * object that can remove the listener (or listener map) during the
	   * invocation.
	   *
	   * If it is called when not inside of an emitting cycle it will throw.
	   *
	   * @throws {Error} When called not during an eventing cycle
	   *
	   * @example
	   *   var subscription = emitter.addListenerMap({
	   *     someEvent: function(data, event) {
	   *       console.log(data);
	   *       emitter.removeCurrentListener();
	   *     }
	   *   });
	   *
	   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
	   *   emitter.emit('someEvent', 'def'); // does not log anything
	   */

	  BaseEventEmitter.prototype.removeCurrentListener = function removeCurrentListener() {
	    !!!this._currentSubscription ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Not in an emitting cycle; there is no current subscription') : invariant(false) : undefined;
	    this._subscriber.removeSubscription(this._currentSubscription);
	  };

	  /**
	   * Returns an array of listeners that are currently registered for the given
	   * event.
	   *
	   * @param {string} eventType - Name of the event to query
	   * @return {array}
	   */

	  BaseEventEmitter.prototype.listeners = function listeners(eventType) /* TODO: Array<EventSubscription> */{
	    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
	    return subscriptions ? subscriptions.filter(emptyFunction.thatReturnsTrue).map(function (subscription) {
	      return subscription.listener;
	    }) : [];
	  };

	  /**
	   * Emits an event of the given type with the given data. All handlers of that
	   * particular type will be notified.
	   *
	   * @param {string} eventType - Name of the event to emit
	   * @param {*} Arbitrary arguments to be passed to each registered listener
	   *
	   * @example
	   *   emitter.addListener('someEvent', function(message) {
	   *     console.log(message);
	   *   });
	   *
	   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
	   */

	  BaseEventEmitter.prototype.emit = function emit(eventType) {
	    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
	    if (subscriptions) {
	      var keys = Object.keys(subscriptions);
	      for (var ii = 0; ii < keys.length; ii++) {
	        var key = keys[ii];
	        var subscription = subscriptions[key];
	        // The subscription may have been removed during this event loop.
	        if (subscription) {
	          this._currentSubscription = subscription;
	          this.__emitToSubscription.apply(this, [subscription].concat(Array.prototype.slice.call(arguments)));
	        }
	      }
	      this._currentSubscription = null;
	    }
	  };

	  /**
	   * Provides a hook to override how the emitter emits an event to a specific
	   * subscription. This allows you to set up logging and error boundaries
	   * specific to your environment.
	   *
	   * @param {EmitterSubscription} subscription
	   * @param {string} eventType
	   * @param {*} Arbitrary arguments to be passed to each registered listener
	   */

	  BaseEventEmitter.prototype.__emitToSubscription = function __emitToSubscription(subscription, eventType) {
	    var args = Array.prototype.slice.call(arguments, 2);
	    subscription.listener.apply(subscription.context, args);
	  };

	  return BaseEventEmitter;
	})();

	module.exports = BaseEventEmitter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 * 
	 * @providesModule EmitterSubscription
	 * @typechecks
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EventSubscription = __webpack_require__(44);

	/**
	 * EmitterSubscription represents a subscription with listener and context data.
	 */

	var EmitterSubscription = (function (_EventSubscription) {
	  _inherits(EmitterSubscription, _EventSubscription);

	  /**
	   * @param {EventSubscriptionVendor} subscriber - The subscriber that controls
	   *   this subscription
	   * @param {function} listener - Function to invoke when the specified event is
	   *   emitted
	   * @param {*} context - Optional context object to use when invoking the
	   *   listener
	   */

	  function EmitterSubscription(subscriber, listener, context) {
	    _classCallCheck(this, EmitterSubscription);

	    _EventSubscription.call(this, subscriber);
	    this.listener = listener;
	    this.context = context;
	  }

	  return EmitterSubscription;
	})(EventSubscription);

	module.exports = EmitterSubscription;

/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventSubscription
	 * @typechecks
	 */

	'use strict';

	/**
	 * EventSubscription represents a subscription to a particular event. It can
	 * remove its own subscription.
	 */

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var EventSubscription = (function () {

	  /**
	   * @param {EventSubscriptionVendor} subscriber the subscriber that controls
	   *   this subscription.
	   */

	  function EventSubscription(subscriber) {
	    _classCallCheck(this, EventSubscription);

	    this.subscriber = subscriber;
	  }

	  /**
	   * Removes this subscription from the subscriber that controls it.
	   */

	  EventSubscription.prototype.remove = function remove() {
	    if (this.subscriber) {
	      this.subscriber.removeSubscription(this);
	      this.subscriber = null;
	    }
	  };

	  return EventSubscription;
	})();

	module.exports = EventSubscription;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 * 
	 * @providesModule EventSubscriptionVendor
	 * @typechecks
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(7);

	/**
	 * EventSubscriptionVendor stores a set of EventSubscriptions that are
	 * subscribed to a particular event type.
	 */

	var EventSubscriptionVendor = (function () {
	  function EventSubscriptionVendor() {
	    _classCallCheck(this, EventSubscriptionVendor);

	    this._subscriptionsForType = {};
	    this._currentSubscription = null;
	  }

	  /**
	   * Adds a subscription keyed by an event type.
	   *
	   * @param {string} eventType
	   * @param {EventSubscription} subscription
	   */

	  EventSubscriptionVendor.prototype.addSubscription = function addSubscription(eventType, subscription) {
	    !(subscription.subscriber === this) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'The subscriber of the subscription is incorrectly set.') : invariant(false) : undefined;
	    if (!this._subscriptionsForType[eventType]) {
	      this._subscriptionsForType[eventType] = [];
	    }
	    var key = this._subscriptionsForType[eventType].length;
	    this._subscriptionsForType[eventType].push(subscription);
	    subscription.eventType = eventType;
	    subscription.key = key;
	    return subscription;
	  };

	  /**
	   * Removes a bulk set of the subscriptions.
	   *
	   * @param {?string} eventType - Optional name of the event type whose
	   *   registered supscriptions to remove, if null remove all subscriptions.
	   */

	  EventSubscriptionVendor.prototype.removeAllSubscriptions = function removeAllSubscriptions(eventType) {
	    if (eventType === undefined) {
	      this._subscriptionsForType = {};
	    } else {
	      delete this._subscriptionsForType[eventType];
	    }
	  };

	  /**
	   * Removes a specific subscription. Instead of calling this function, call
	   * `subscription.remove()` directly.
	   *
	   * @param {object} subscription
	   */

	  EventSubscriptionVendor.prototype.removeSubscription = function removeSubscription(subscription) {
	    var eventType = subscription.eventType;
	    var key = subscription.key;

	    var subscriptionsForType = this._subscriptionsForType[eventType];
	    if (subscriptionsForType) {
	      delete subscriptionsForType[key];
	    }
	  };

	  /**
	   * Returns the array of subscriptions that are currently registered for the
	   * given event type.
	   *
	   * Note: This array can be potentially sparse as subscriptions are deleted
	   * from it when they are removed.
	   *
	   * TODO: This returns a nullable array. wat?
	   *
	   * @param {string} eventType
	   * @return {?array}
	   */

	  EventSubscriptionVendor.prototype.getSubscriptionsForType = function getSubscriptionsForType(eventType) {
	    return this._subscriptionsForType[eventType];
	  };

	  return EventSubscriptionVendor;
	})();

	module.exports = EventSubscriptionVendor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule abstractMethod
	 * 
	 */

	'use strict';

	var invariant = __webpack_require__(7);

	function abstractMethod(className, methodName) {
	   true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Subclasses of %s must override %s() with their own implementation.', className, methodName) : invariant(false) : undefined;
	}

	module.exports = abstractMethod;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _immutable = __webpack_require__(48);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _utils = __webpack_require__(2);

	var _AppActionTypes = __webpack_require__(49);

	var _AppActionTypes2 = _interopRequireDefault(_AppActionTypes);

	var _Dispatcher = __webpack_require__(50);

	var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppStore = function (_ReduceStore) {
		_inherits(AppStore, _ReduceStore);

		function AppStore() {
			_classCallCheck(this, AppStore);

			return _possibleConstructorReturn(this, (AppStore.__proto__ || Object.getPrototypeOf(AppStore)).call(this, _Dispatcher2.default));
		}

		_createClass(AppStore, [{
			key: "getInitialState",
			value: function getInitialState() {
				return _immutable2.default.Map({ cls: "", roles: [] });
			}
		}, {
			key: "reduce",
			value: function reduce(state, action) {
				switch (action.type) {
					case _AppActionTypes2.default.SET_APP_MODULE:
						return state.set("cls", action.cls);
					case _AppActionTypes2.default.SET_APP_ROLES:
						return state.set("roles", action.roles);
					default:
						return state;
				}
			}
		}]);

		return AppStore;
	}(_utils.ReduceStore);

	exports.default = AppStore;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Immutable = factory());
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }

	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }


	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }


	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }


	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }



	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }

	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }

	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }

	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }

	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }

	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;

	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;


	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';

	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;

	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};

	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };

	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }

	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }

	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}

	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }

	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }

	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }

	  function returnTrue() {
	    return true;
	  }

	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }

	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }

	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }

	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }

	  /* global Symbol */

	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;

	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';

	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


	  function Iterator(next) {
	      this.next = next;
	    }

	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };


	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;

	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };


	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }

	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }

	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }

	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }

	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }

	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }

	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }

	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };

	    Seq.prototype.toSeq = function() {
	      return this;
	    };

	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };

	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };

	    // abstract __iterateUncached(fn, reverse)

	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };

	    // abstract __iteratorUncached(type, reverse)

	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };



	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }

	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };



	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }

	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };

	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };

	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };

	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };

	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };



	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }

	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };

	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };



	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;

	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

	  Seq.prototype[IS_SEQ_SENTINEL] = true;



	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }

	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };

	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };



	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }

	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };

	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };

	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };

	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }

	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };

	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };



	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }

	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };

	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };




	  // # pragma Helper functions

	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }

	  var EMPTY_SEQ;

	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }

	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }

	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }

	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }

	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }

	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }

	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }

	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }

	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }

	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }

	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }

	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }

	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }

	    var notAssociative = !isAssociative(a);

	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }

	    var flipped = false;

	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }

	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });

	    return allEqual && a.size === bSize;
	  }

	  createClass(Repeat, IndexedSeq);

	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }

	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };

	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };

	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };

	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };

	    Repeat.prototype.reverse = function() {
	      return this;
	    };

	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };

	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };

	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };

	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };


	  var EMPTY_REPEAT;

	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }

	  createClass(Range, IndexedSeq);

	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }

	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step !== 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };

	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };

	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };

	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };

	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };

	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };

	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };

	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };

	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };


	  var EMPTY_RANGE;

	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }


	  createClass(KeyedCollection, Collection);function KeyedCollection() {}

	  createClass(IndexedCollection, Collection);function IndexedCollection() {}

	  createClass(SetCollection, Collection);function SetCollection() {}


	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;

	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };

	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }

	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      if (o !== o || o === Infinity) {
	        return 0;
	      }
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }

	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }

	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }

	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }

	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }

	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }

	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }

	    return hash;
	  }

	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;

	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());

	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }

	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }

	  var objHashUID = 0;

	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }

	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};

	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }

	  createClass(Map, KeyedCollection);

	    // @pragma Construction

	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
	      return emptyMap().withMutations(function(map ) {
	        for (var i = 0; i < keyValues.length; i += 2) {
	          if (i + 1 >= keyValues.length) {
	            throw new Error('Missing value for key: ' + keyValues[i]);
	          }
	          map.set(keyValues[i], keyValues[i + 1]);
	        }
	      });
	    };

	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };

	    // @pragma Access

	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };

	    // @pragma Modification

	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };

	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };

	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };

	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };

	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };

	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };

	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };

	    // @pragma Composition

	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };

	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };

	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };

	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };

	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };

	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };

	    // @pragma Mutability

	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };

	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };

	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };

	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };

	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };

	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };

	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };


	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }

	  Map.isMap = isMap;

	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;


	  // #pragma Trie Nodes



	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }

	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && entries.length === 1) {
	        return; // undefined
	      }

	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new ArrayMapNode(ownerID, newEntries);
	    };




	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }

	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };

	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;

	      if (!exists && value === NOT_SET) {
	        return this;
	      }

	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

	      if (newNode === node) {
	        return this;
	      }

	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }

	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }

	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };




	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }

	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };

	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];

	      if (removed && !node) {
	        return this;
	      }

	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }

	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };




	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }

	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }

	      var removed = value === NOT_SET;

	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };




	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }

	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };

	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }

	      SetRef(didAlter);

	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }

	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }

	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };



	  // #pragma Iterators

	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }

	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }

	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }

	  createClass(MapIterator, Iterator);

	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }

	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };


	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }

	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }

	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }

	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }

	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }

	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }

	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }

	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }

	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }

	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }

	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }

	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }

	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }

	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }

	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }

	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }

	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }

	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }

	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }

	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }

	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

	  createClass(List, IndexedCollection);

	    // @pragma Construction

	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }

	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };

	    // @pragma Access

	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };

	    // @pragma Modification

	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };

	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };

	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };

	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };

	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };

	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };

	    // @pragma Composition

	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };

	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };

	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };

	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };

	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };

	    // @pragma Iteration

	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };

	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };

	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };

	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };


	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }

	  List.isList = isList;

	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;



	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }

	    // TODO: seems like these methods are very similar

	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };

	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }

	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }

	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };



	  var DONE = {};

	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;

	    return iterateNodeOrLeaf(list._root, list._level, 0);

	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }

	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }

	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }

	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }

	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }

	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);

	    if (index !== index) {
	      return list;
	    }

	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }

	    index += list._origin;

	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }

	    if (!didAlter.value) {
	      return list;
	    }

	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }

	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }

	    var newNode;

	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }

	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }

	    SetRef(didAlter);

	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }

	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }

	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }

	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }

	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }

	    var newLevel = list._level;
	    var newRoot = list._root;

	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }

	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);

	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }

	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }

	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }

	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;

	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }

	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }

	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }

	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }

	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }

	  createClass(OrderedMap, Map);

	    // @pragma Construction

	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };

	    // @pragma Access

	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };

	    // @pragma Modification

	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };

	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };

	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };

	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };

	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };

	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };

	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };


	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }

	  OrderedMap.isOrderedMap = isOrderedMap;

	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }

	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }

	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }

	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }

	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };

	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };

	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };

	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };

	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };

	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };

	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };

	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };

	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };

	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };



	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };

	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };

	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };



	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }

	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };

	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };

	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };


	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;


	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }


	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }


	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }


	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }


	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }


	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }


	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;

	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      if (end === Infinity) {
	        end = originalSize;
	      } else {
	        end = end | 0;
	      }
	    }

	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }

	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);

	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }

	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }

	    var sliceSeq = makeSequence(iterable);

	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }

	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };

	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }

	    return sliceSeq;
	  }


	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }


	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }


	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});

	    if (iters.length === 0) {
	      return iterable;
	    }

	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }

	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }


	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }


	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }


	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }


	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }


	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }

	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }


	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }


	  // #pragma Helper Functions

	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }

	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }

	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }

	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }

	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }

	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }

	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }

	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }

	  createClass(Record, KeyedCollection);

	    function Record(defaultValues, name) {
	      var hasInitialized;

	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };

	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;

	      return RecordType;
	    }

	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };

	    // @pragma Access

	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };

	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };

	    // @pragma Modification

	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };

	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      if (this._map && !this._map.has(k)) {
	        var defaultVal = this._defaultValues[k];
	        if (v === defaultVal) {
	          return this;
	        }
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };

	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };

	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };


	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;


	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }

	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }

	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }

	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }

	  createClass(Set, SetCollection);

	    // @pragma Construction

	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };

	    // @pragma Access

	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };

	    // @pragma Modification

	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };

	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };

	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };

	    // @pragma Composition

	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };

	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };

	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };

	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };

	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };

	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };

	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };

	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };


	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }

	  Set.isSet = isSet;

	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;

	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;

	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }

	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }

	  createClass(OrderedSet, Set);

	    // @pragma Construction

	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };


	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }

	  OrderedSet.isOrderedSet = isOrderedSet;

	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;

	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }

	  createClass(Stack, IndexedCollection);

	    // @pragma Construction

	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }

	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };

	    // @pragma Access

	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };

	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };

	    // @pragma Modification

	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };

	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };

	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };

	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };

	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };

	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    // @pragma Mutability

	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };

	    // @pragma Iteration

	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };

	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };


	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }

	  Stack.isStack = isStack;

	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;


	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }

	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }

	  Iterable.Iterator = Iterator;

	  mixin(Iterable, {

	    // ### Conversion to other types

	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },

	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },

	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },

	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },

	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },

	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },

	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },

	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },

	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },

	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },


	    // ### Common JavaScript methods and properties

	    toString: function() {
	      return '[Iterable]';
	    },

	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },

	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },

	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },

	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },

	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },

	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },

	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },

	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },

	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },

	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },

	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },

	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },

	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },

	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },


	    // ### More sequential methods

	    butLast: function() {
	      return this.slice(0, -1);
	    },

	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },

	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },

	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },

	    equals: function(other) {
	      return deepEqual(this, other);
	    },

	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },

	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },

	    findEntry: function(predicate, context, notSetValue) {
	      var found = notSetValue;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },

	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },

	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },

	    findLastEntry: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
	    },

	    findLastKey: function(predicate, context) {
	      return this.toKeyedSeq().reverse().findKey(predicate, context);
	    },

	    first: function() {
	      return this.find(returnTrue);
	    },

	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },

	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },

	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },

	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },

	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },

	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },

	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },

	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },

	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },

	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },

	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },

	    last: function() {
	      return this.toSeq().reverse().first();
	    },

	    lastKeyOf: function(searchValue) {
	      return this.toKeyedSeq().reverse().keyOf(searchValue);
	    },

	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },

	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },

	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },

	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },

	    rest: function() {
	      return this.slice(1);
	    },

	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },

	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },

	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },

	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },

	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },

	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },

	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },

	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },

	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },


	    // ### Hashable Object

	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }


	    // ### Internal

	    // abstract __iterate(fn, reverse)

	    // abstract __iterator(type, reverse)
	  });

	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;

	  mixin(KeyedIterable, {

	    // ### More sequential methods

	    flip: function() {
	      return reify(this, flipFactory(this));
	    },

	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },

	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }

	  });

	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



	  mixin(IndexedIterable, {

	    // ### Conversion to other types

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },

	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    indexOf: function(searchValue) {
	      var key = this.keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    lastIndexOf: function(searchValue) {
	      var key = this.lastKeyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },

	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },


	    // ### More collection methods

	    findLastIndex: function(predicate, context) {
	      var entry = this.findLastEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    first: function() {
	      return this.get(0);
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },

	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },

	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },

	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },

	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },

	    keySeq: function() {
	      return Range(0, this.size);
	    },

	    last: function() {
	      return this.get(-1);
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },

	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },

	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }

	  });

	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



	  mixin(SetIterable, {

	    // ### ES6 Collection methods (ES6 Array and Map)

	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },

	    includes: function(value) {
	      return this.has(value);
	    },


	    // ### More sequential methods

	    keySeq: function() {
	      return this.valueSeq();
	    }

	  });

	  SetIterable.prototype.has = IterablePrototype.includes;
	  SetIterable.prototype.contains = SetIterable.prototype.includes;


	  // Mixin subclasses

	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);

	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);


	  // #pragma Helper functions

	  function keyMapper(v, k) {
	    return k;
	  }

	  function entryMapper(v, k) {
	    return [k, v];
	  }

	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }

	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }

	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : String(value);
	  }

	  function defaultZipper() {
	    return arrCopy(arguments);
	  }

	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }

	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }

	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }

	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }

	  var Immutable = {

	    Iterable: Iterable,

	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,

	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,

	    is: is,
	    fromJS: fromJS

	  };

	  return Immutable;

	}));

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var AppActionTypes = {
		SET_APP_MODULE: "SET_APP_MODULE",
		SET_APP_ROLES: "SET_APP_ROLES"
	};

	exports.default = AppActionTypes;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _flux = __webpack_require__(51);

	/**
	 * Это диспетчер, который рассылает Actions всем Store.
	 * Он дефолтный.
	*/
	exports.default = new _flux.Dispatcher();

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(52);


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 *
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(7);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _AppActionTypes = __webpack_require__(49);

	var _AppActionTypes2 = _interopRequireDefault(_AppActionTypes);

	var _Dispatcher = __webpack_require__(50);

	var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

	var _ServerApi = __webpack_require__(54);

	var _ServerApi2 = _interopRequireDefault(_ServerApi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppActions = {
		/**
	  * cls — is an ID of requested module
	  * data — is an Object with params to send {'param1': 'val1', 'param2': 'val2'...}
	 */
		loadModule: function loadModule(cls, data) {
			_ServerApi2.default.ask(cls, data);
			AppActions.setModule("Loading");
		},
		setModule: function setModule(cls, data) {
			_Dispatcher2.default.dispatch({
				type: _AppActionTypes2.default.SET_APP_MODULE,
				cls: cls,
				data: data
			});
		},
		logOut: function logOut() {
			_ServerApi2.default.ask("login", { action: "out" });
			AppActions.setModule("Loading");
		}
	};

	exports.default = AppActions;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Dispatcher = __webpack_require__(50);

	var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Это класс, через который происходит весь обмен с сервером.
	 * Он держит _session — и присобачивает её к каждому обмену.
	 * И он знает _URL — куда, собственно, коннектиться.
	 */

	var ServerApi = function () {
		function ServerApi() {
			_classCallCheck(this, ServerApi);

			this._URL = "agate.php";
			this._session = localStorage.getItem("session");
			this.onReceiveData = this.onReceiveData.bind(this);
		}
		/**
	  * Для обмена с сервером нужно сделать import (./ или ../ или ещё чего:
	  * зависит от того, откуда ты делаешь import, да? :)
	  * import ServerApi from "./ServerApi.jsx";
	  * ...
	  * ServerApi.ajax("cls для сервера", {объект с параметрами для отправки})
	 */


		_createClass(ServerApi, [{
			key: "ask",
			value: function ask(cls, params) {
				if (!params) params = {};
				params.cls = cls;
				params.ses = this._session;
				$.ajax({
					type: "POST",
					url: this._URL,
					data: params,
					success: this.onReceiveData
				});
			}
			/**
	   * Когда данные получены — они парсятся.
	   * Предполагается, что структура любого ответа сервера будет вроде:
	   * {
	   *     session: "111111", — ID сессии, опционально
	   *     [
	   *         {
	   *             action: "APP_MODULE", — ID aкции (см. ниже)
	   *             data: ....... — данные
	   *         },
	   *         ....
	   *     ]
	   * }
	   * Акции передаются Dispatcher-у:
	   * AppDispatcher.dispatch({
	   *     type: action,
	   *     item,
	   * });
	   * И все (все!) зарегистрированные Store их получают. И на нужные — реагируют.
	  */

		}, {
			key: "onReceiveData",
			value: function onReceiveData(data) {
				//console.log("DATA RECEIVED!");
				//console.log(data);
				if (data.session && data.session != this._session) {
					this._session = data.session;
					localStorage.setItem("session", this._session);
				}
				if (data.actions) {
					for (var action in data.actions) {
						var actionData = data.actions[action];
						if (action == "SYSTEM_INFO") {
							if (actionData.debug) console.log("DEBUG: " + actionData.debug);
							if (actionData.err) console.log("ERROR: " + actionData.err);
							continue;
						}
						var message = {};
						for (var fld in actionData) {
							message[fld] = actionData[fld];
						}
						message["type"] = action;
						_Dispatcher2.default.dispatch(message);
					}
				};
			}
		}]);

		return ServerApi;
	}();

	exports.default = new ServerApi();

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(2);

	var _LoginStore = __webpack_require__(56);

	var _LoginStore2 = _interopRequireDefault(_LoginStore);

	var _LoginForm = __webpack_require__(59);

	var _LoginForm2 = _interopRequireDefault(_LoginForm);

	var _LoginWait = __webpack_require__(60);

	var _LoginWait2 = _interopRequireDefault(_LoginWait);

	var _StoresPool = __webpack_require__(61);

	var _StoresPool2 = _interopRequireDefault(_StoresPool);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*
	Здесь мы создаем LoginStore динамически - при создании экземпляра
	Это имеет смысл поскольку мы хотим удалять LoginStore когда Login не будет активен
	*/

	var Login = function (_React$Component) {
		_inherits(Login, _React$Component);

		function Login(props) {
			_classCallCheck(this, Login);

			/*
	  Cоздаем Store
	  */
			var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

			_StoresPool2.default.create('Login', _LoginStore2.default);
			return _this;
		}

		_createClass(Login, [{
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				/*
	   Удаляем Store
	   */
				_StoresPool2.default.remove('Login');
			}
		}, {
			key: "render",
			value: function render() {
				var mode = this.state.loginStore.get("mode");
				switch (mode) {
					case "Form":
						var message = this.state.loginStore.get("message");
						var email = this.state.loginStore.get("email");
						return _react2.default.createElement(_LoginForm2.default, { message: message, email: email });
					case "Loading":
						return _react2.default.createElement(_LoginWait2.default, null);
					default:
						return _react2.default.createElement(
							"div",
							null,
							"Panic, there is no ",
							mode,
							" cather."
						);
				}
			}
		}], [{
			key: "getStores",
			value: function getStores() {
				return _StoresPool2.default.arr('Login');
			}
		}, {
			key: "calculateState",
			value: function calculateState(prevState) {
				return {
					loginStore: _StoresPool2.default.item('Login').getState()
				};
			}
		}]);

		return Login;
	}(_react2.default.Component);

	exports.default = _utils.Container.create(Login);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _immutable = __webpack_require__(48);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _utils = __webpack_require__(2);

	var _LoginActionTypes = __webpack_require__(57);

	var _LoginActionTypes2 = _interopRequireDefault(_LoginActionTypes);

	var _Dispatcher = __webpack_require__(50);

	var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginStore = function (_ReduceStore) {
		_inherits(LoginStore, _ReduceStore);

		function LoginStore() {
			_classCallCheck(this, LoginStore);

			return _possibleConstructorReturn(this, (LoginStore.__proto__ || Object.getPrototypeOf(LoginStore)).call(this, _Dispatcher2.default));
		}

		_createClass(LoginStore, [{
			key: "getInitialState",
			value: function getInitialState() {
				return _immutable2.default.Map({ mode: "Form", message: "", email: "" });
			}
		}, {
			key: "reduce",
			value: function reduce(state, action) {
				switch (action.type) {
					case _LoginActionTypes2.default.LOGIN_SET_DATA:
						var ret = state;
						var d = action.data;
						for (var o in d) {
							ret = ret.set(o, d[o]);
						}
						return ret;
					default:
						return state;
				}
			}
		}]);

		return LoginStore;
	}(_utils.ReduceStore);

	/*
	Здесь мы возвращаем класc, а не инстанс. Потому что собираемся использовать
	его в StoresPool
	*/

	exports.default = LoginStore;

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var LoginActionTypes = {
		LOGIN_SET_DATA: "LOGIN_SET_DATA",
		//	LOGIN_SET_MODE: "LOGIN_SET_MODE",
		//	LOGIN_SET_MESSAGE: "LOGIN_SET_MESSAGE",
		LOGIN_SEND_FORM: "LOGIN_SEND_FORM"
	};

	exports.default = LoginActionTypes;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _LoginActionTypes = __webpack_require__(57);

	var _LoginActionTypes2 = _interopRequireDefault(_LoginActionTypes);

	var _Dispatcher = __webpack_require__(50);

	var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

	var _ServerApi = __webpack_require__(54);

	var _ServerApi2 = _interopRequireDefault(_ServerApi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LoginActions = {
		setData: function setData(data) {
			_Dispatcher2.default.dispatch({
				type: _LoginActionTypes2.default.LOGIN_SET_DATA,
				data: data
			});
		},
		sendForm: function sendForm(login, password) {
			this.setData({
				mode: 'Loading',
				email: login
			});

			_ServerApi2.default.ask("login", {
				"action": "in",
				"login": login,
				"password": password
			});
		}
	};

	exports.default = LoginActions;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _LoginActions = __webpack_require__(58);

	var _LoginActions2 = _interopRequireDefault(_LoginActions);

	var _LoginMessage = __webpack_require__(67);

	var _LoginMessage2 = _interopRequireDefault(_LoginMessage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginForm = function (_React$Component) {
		_inherits(LoginForm, _React$Component);

		function LoginForm(props) {
			_classCallCheck(this, LoginForm);

			var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

			_this.state = {
				message: _this.props.message,
				email: _this.props.email
			};
			_this.handleSubmit = _this.handleSubmit.bind(_this);
			_this.handleChange = _this.handleChange.bind(_this);
			return _this;
		}

		_createClass(LoginForm, [{
			key: "handleSubmit",
			value: function handleSubmit() {
				if (!this.emailObj.value || !this.pasObj.value) {
					this.setState({ message: "Обязательно укажите E-mail и Пароль!" });
				} else {
					_LoginActions2.default.sendForm(this.emailObj.value, this.pasObj.value);
				}
			}
		}, {
			key: "handleChange",
			value: function handleChange() {
				if (this.state.message != "") {
					this.setState({ message: "" });
				}
				this.setState({ email: this.emailObj.value });
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				return _react2.default.createElement(
					"div",
					{ className: "container-fluid" },
					_react2.default.createElement(
						"div",
						{ className: "row" },
						_react2.default.createElement(
							"div",
							{ className: "col-lg-6 col-lg-offset-3" },
							_react2.default.createElement(
								"h1",
								null,
								"\u0412\u0445\u043E\u0434"
							),
							_react2.default.createElement(
								"form",
								{ className: "form-horizontal" },
								_react2.default.createElement(
									"div",
									{ className: "form-group" },
									_react2.default.createElement("input", {
										type: "email",
										className: "form-control",
										onChange: this.handleChange,
										ref: function ref(input) {
											return _this2.emailObj = input;
										},
										placeholder: "E-mail",
										value: this.state.email
									})
								),
								_react2.default.createElement(
									"div",
									{ className: "form-group" },
									_react2.default.createElement("input", {
										type: "password",
										className: "form-control",
										onChange: this.handleChange,
										ref: function ref(input) {
											return _this2.pasObj = input;
										},
										placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C"
									})
								),
								_react2.default.createElement(_LoginMessage2.default, { message: this.state.message }),
								_react2.default.createElement(
									"div",
									{ className: "form-group" },
									_react2.default.createElement(
										"button",
										{
											type: "button",
											className: "btn btn-primary",
											onClick: this.handleSubmit
										},
										"\u0412\u043E\u0439\u0442\u0438"
									)
								)
							)
						)
					)
				);
			}
		}]);

		return LoginForm;
	}(_react2.default.Component);

	exports.default = LoginForm;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginWait = function (_React$Component) {
		_inherits(LoginWait, _React$Component);

		function LoginWait(props) {
			_classCallCheck(this, LoginWait);

			return _possibleConstructorReturn(this, (LoginWait.__proto__ || Object.getPrototypeOf(LoginWait)).call(this, props));
		}

		_createClass(LoginWait, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					{ className: "container-fluid" },
					_react2.default.createElement(
						"div",
						{ className: "row" },
						_react2.default.createElement(
							"div",
							{ className: "col-lg-6 col-lg-offset-3" },
							_react2.default.createElement(
								"h1",
								null,
								"\u0412\u0445\u043E\u0434"
							),
							_react2.default.createElement(
								"h3",
								null,
								"\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435\u2026"
							)
						)
					)
				);
			}
		}]);

		return LoginWait;
	}(_react2.default.Component);

	exports.default = LoginWait;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(2);

	var _Dispatcher = __webpack_require__(50);

	var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	Это вроде бы полезная штука
	Здесь мы создаем и храним Storages
	удобство в том, что мы их можем убивать, отключать, включать и создавать
	Что хорошо
	*/
	var StoresPool = function () {
	  function StoresPool() {
	    _classCallCheck(this, StoresPool);

	    this._stores = {};
	  }

	  _createClass(StoresPool, [{
	    key: "create",
	    value: function create(id, storeCls) {
	      var o = this._stores[id];
	      if (o) return o.store;
	      this._stores[id] = {
	        registered: true,
	        store: new storeCls()
	      };
	    }
	  }, {
	    key: "remove",
	    value: function remove(id) {
	      var o = this._stores[id];
	      if (o) {
	        this.off(id);
	        o.store = null;
	        this._stores[id] = null;
	        delete this._stores[id];
	      }
	    }
	  }, {
	    key: "off",
	    value: function off(id) {
	      var o = this._stores[id];
	      if (o && o.registered) {
	        _Dispatcher2.default.unregister(o.store.getDispatchToken());
	      }
	    }
	  }, {
	    key: "on",
	    value: function on(id) {
	      var o = this._stores[id];
	      if (o && !o.registered) {
	        _Dispatcher2.default.register(o.store);
	      }
	    }
	  }, {
	    key: "item",
	    value: function item(id) {
	      return this._stores[id] ? this._stores[id].store : null;
	    }
	  }, {
	    key: "arr",
	    value: function arr() {
	      var _this = this;

	      var ret = [];

	      for (var _len = arguments.length, ids = Array(_len), _key = 0; _key < _len; _key++) {
	        ids[_key] = arguments[_key];
	      }

	      ids.map(function (id) {
	        if (_this._stores[id]) {
	          ret.push(_this._stores[id].store);
	        }
	      });
	      return ret;
	    }
	  }]);

	  return StoresPool;
	}();

	exports.default = new StoresPool();

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(2);

	var _HomeStore = __webpack_require__(63);

	var _HomeStore2 = _interopRequireDefault(_HomeStore);

	var _HomeActions = __webpack_require__(65);

	var _HomeActions2 = _interopRequireDefault(_HomeActions);

	var _AppActions = __webpack_require__(53);

	var _AppActions2 = _interopRequireDefault(_AppActions);

	var _DevProps = __webpack_require__(66);

	var _DevProps2 = _interopRequireDefault(_DevProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_React$Component) {
		_inherits(Home, _React$Component);

		function Home(props) {
			_classCallCheck(this, Home);

			return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
		}

		_createClass(Home, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						"h1",
						null,
						"Home \u0437\u0430\u043B\u043E\u0433\u0438\u043D\u0438\u0432\u0448\u0435\u0433\u043E\u0441\u044F"
					),
					_react2.default.createElement(
						"h2",
						null,
						"Home.props (\u043E\u0442\u043B\u0430\u0434\u043A\u0430)"
					),
					_react2.default.createElement(_DevProps2.default, { data: this.props }),
					_react2.default.createElement(
						"button",
						{ onClick: _AppActions2.default.logOut },
						"\u041E\u0442\u043B\u043E\u0433\u0438\u043D\u0438\u0442\u044C\u0441\u044F"
					)
				);
			}
		}], [{
			key: "getStores",
			value: function getStores() {
				return [_HomeStore2.default];
			}
		}, {
			key: "calculateState",
			value: function calculateState(prevState) {
				return {
					homeStore: _HomeStore2.default.getState()
				};
			}
		}]);

		return Home;
	}(_react2.default.Component);

	exports.default = Home;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _immutable = __webpack_require__(48);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _utils = __webpack_require__(2);

	var _HomeActionTypes = __webpack_require__(64);

	var _HomeActionTypes2 = _interopRequireDefault(_HomeActionTypes);

	var _Dispatcher = __webpack_require__(50);

	var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HomeStore = function (_ReduceStore) {
		_inherits(HomeStore, _ReduceStore);

		function HomeStore() {
			_classCallCheck(this, HomeStore);

			return _possibleConstructorReturn(this, (HomeStore.__proto__ || Object.getPrototypeOf(HomeStore)).call(this, _Dispatcher2.default));
		}

		_createClass(HomeStore, [{
			key: "getInitialState",
			value: function getInitialState() {
				return _immutable2.default.Map({});
			}
		}, {
			key: "reduce",
			value: function reduce(state, action) {
				switch (action.type) {
					default:
						return state;
				}
			}
		}]);

		return HomeStore;
	}(_utils.ReduceStore);

	exports.default = new HomeStore();

/***/ },
/* 64 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var HomeActionTypes = {};

	exports.default = HomeActionTypes;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _HomeActionTypes = __webpack_require__(64);

	var _HomeActionTypes2 = _interopRequireDefault(_HomeActionTypes);

	var _Dispatcher = __webpack_require__(50);

	var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

	var _ServerApi = __webpack_require__(54);

	var _ServerApi2 = _interopRequireDefault(_ServerApi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HomeActions = {
		/*
	 	getRole() {
	 		AppDispatcher.dispatch({
	 			type: HomeActionTypes.,
	 		});
	 	},
	 */
	};

	exports.default = HomeActions;

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
				return React.createElement(DevList, { data: this.props.data });
			}
		}]);

		return DevProps;
	}(React.Component);

	exports.default = DevProps;

	var DevList = exports.DevList = function (_React$Component2) {
		_inherits(DevList, _React$Component2);

		function DevList() {
			_classCallCheck(this, DevList);

			return _possibleConstructorReturn(this, (DevList.__proto__ || Object.getPrototypeOf(DevList)).apply(this, arguments));
		}

		_createClass(DevList, [{
			key: "render",
			value: function render() {
				var _this3 = this;

				return React.createElement(
					"ul",
					null,
					Object.keys(this.props.data).map(function (key) {
						return React.createElement(
							"li",
							{ key: key },
							key,
							":\xA0",
							_typeof(_this3.props.data[key]) !== "object" ? _this3.props.data[key] : React.createElement(DevList, { data: _this3.props.data[key] })
						);
					})
				);
			}
		}]);

		return DevList;
	}(React.Component);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginMessage = function (_React$Component) {
		_inherits(LoginMessage, _React$Component);

		function LoginMessage(props) {
			_classCallCheck(this, LoginMessage);

			var _this = _possibleConstructorReturn(this, (LoginMessage.__proto__ || Object.getPrototypeOf(LoginMessage)).call(this, props));

			_this.state = {
				message: _this.props.message
			};
			return _this;
		}

		_createClass(LoginMessage, [{
			key: "render",
			value: function render() {
				var message = '';
				if (this.props.message) {
					message = _react2.default.createElement(
						"small",
						null,
						this.props.message,
						_react2.default.createElement("br", null),
						_react2.default.createElement("br", null)
					);
				}
				return _react2.default.createElement(
					"div",
					null,
					message
				);
			}
		}]);

		return LoginMessage;
	}(_react2.default.Component);

	exports.default = LoginMessage;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGFkZGUyN2Q4NzVlNGM5NzIwYmYiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi4vfi9mbHV4L3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9+L2ZsdXgvbGliL0ZsdXhDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uLi9+L2ZsdXgvbGliL0ZsdXhDb250YWluZXJTdWJzY3JpcHRpb25zLmpzIiwid2VicGFjazovLy8uLi9+L2ZsdXgvbGliL0ZsdXhTdG9yZUdyb3VwLmpzIiwid2VicGFjazovLy8uLi9+L2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC9yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC9saWIvUmVhY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC9saWIvUmVhY3RDaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC9saWIvUG9vbGVkQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QvbGliL3JlYWN0UHJvZEludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC9saWIvUmVhY3RFbGVtZW50LmpzIiwid2VicGFjazovLy8uLi9+L3JlYWN0L2xpYi9SZWFjdEN1cnJlbnRPd25lci5qcyIsIndlYnBhY2s6Ly8vLi4vfi9mYmpzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy8uLi9+L2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QvbGliL2NhbkRlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9+L3JlYWN0L2xpYi9SZWFjdEVsZW1lbnRTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QvbGliL3RyYXZlcnNlQWxsQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QvbGliL2dldEl0ZXJhdG9yRm4uanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QvbGliL0tleUVzY2FwZVV0aWxzLmpzIiwid2VicGFjazovLy8uLi9+L3JlYWN0L2xpYi9SZWFjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC9saWIvUmVhY3ROb29wVXBkYXRlUXVldWUuanMiLCJ3ZWJwYWNrOi8vLy4uL34vZmJqcy9saWIvZW1wdHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QvbGliL1JlYWN0UHVyZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC9saWIvUmVhY3RDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC9saWIvUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QvbGliL1JlYWN0RE9NRmFjdG9yaWVzLmpzIiwid2VicGFjazovLy8uLi9+L3JlYWN0L2xpYi9SZWFjdEVsZW1lbnRWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QvbGliL1JlYWN0Q29tcG9uZW50VHJlZUhvb2suanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QvbGliL2NoZWNrUmVhY3RUeXBlU3BlYy5qcyIsIndlYnBhY2s6Ly8vLi4vfi9yZWFjdC9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QvbGliL1JlYWN0UHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uLi9+L3JlYWN0L2xpYi9SZWFjdFZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL34vcmVhY3QvbGliL29ubHlDaGlsZC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9mYmpzL2xpYi9zaGFsbG93RXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4uL34vZmx1eC9saWIvRmx1eE1peGluTGVnYWN5LmpzIiwid2VicGFjazovLy8uLi9+L2ZsdXgvbGliL0ZsdXhSZWR1Y2VTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi4vfi9mbHV4L2xpYi9GbHV4U3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4uL34vZmJlbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9+L2ZiZW1pdHRlci9saWIvQmFzZUV2ZW50RW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi4vfi9mYmVtaXR0ZXIvbGliL0VtaXR0ZXJTdWJzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL34vZmJlbWl0dGVyL2xpYi9FdmVudFN1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vfi9mYmVtaXR0ZXIvbGliL0V2ZW50U3Vic2NyaXB0aW9uVmVuZG9yLmpzIiwid2VicGFjazovLy8uLi9+L2ZsdXgvbGliL2Fic3RyYWN0TWV0aG9kLmpzIiwid2VicGFjazovLy8uL3N0b3Jlcy9BcHBTdG9yZS5qc3giLCJ3ZWJwYWNrOi8vLy4uL34vaW1tdXRhYmxlL2Rpc3QvaW1tdXRhYmxlLmpzIiwid2VicGFjazovLy8uL2NvbnN0YW50cy9BcHBBY3Rpb25UeXBlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vRGlzcGF0Y2hlci5qc3giLCJ3ZWJwYWNrOi8vLy4uL34vZmx1eC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9mbHV4L2xpYi9EaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvQXBwQWN0aW9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vU2VydmVyQXBpLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ2luL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly8vLi9zdG9yZXMvTG9naW5TdG9yZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL0xvZ2luQWN0aW9uVHlwZXMuanN4Iiwid2VicGFjazovLy8uL2FjdGlvbnMvTG9naW5BY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ2luL0xvZ2luRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2dpbi9Mb2dpbldhaXQuanN4Iiwid2VicGFjazovLy8uL1N0b3Jlc1Bvb2wuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9tZS9Ib21lLmpzeCIsIndlYnBhY2s6Ly8vLi9zdG9yZXMvSG9tZVN0b3JlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvSG9tZUFjdGlvblR5cGVzLmpzeCIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL0hvbWVBY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlcnZpY2UvRGV2UHJvcHMuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9naW4vTG9naW5NZXNzYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkYWRkZTI3ZDg3NWU0Yzk3MjBiZiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX0FwcCA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvQXBwLmpzeFwiKTtcblxudmFyIF9BcHAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXBwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoX0FwcDIuZGVmYXVsdCwgbnVsbCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXdhaXRlci1hcHBcIikpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW5kZXguanN4XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcImZsdXgvdXRpbHNcIik7XG5cbnZhciBfQXBwU3RvcmUgPSByZXF1aXJlKFwiLi4vc3RvcmVzL0FwcFN0b3JlLmpzeFwiKTtcblxudmFyIF9BcHBTdG9yZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BcHBTdG9yZSk7XG5cbnZhciBfQXBwQWN0aW9ucyA9IHJlcXVpcmUoXCIuLi9hY3Rpb25zL0FwcEFjdGlvbnMuanN4XCIpO1xuXG52YXIgX0FwcEFjdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXBwQWN0aW9ucyk7XG5cbnZhciBfTG9naW4gPSByZXF1aXJlKFwiLi9sb2dpbi9Mb2dpbi5qc3hcIik7XG5cbnZhciBfTG9naW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTG9naW4pO1xuXG52YXIgX0hvbWUgPSByZXF1aXJlKFwiLi9ob21lL0hvbWUuanN4XCIpO1xuXG52YXIgX0hvbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSG9tZSk7XG5cbnZhciBfU3RvcmVzUG9vbCA9IHJlcXVpcmUoXCIuLi9TdG9yZXNQb29sLmpzeFwiKTtcblxudmFyIF9TdG9yZXNQb29sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0b3Jlc1Bvb2wpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qINCt0YLQviDQutC+0LzQv9C+0L3QtdC90YIg0YDRg9GC0LAgKi9cbi8q0JAg0YLQsNC6INC80Ysg0YHQvtC30LTQsNC10Lwg0LXQvNGDIFN0b3JlLCDQutC+0YLQvtGA0YvQuSDQvdC1INGB0L7QsdC40YDQsNC10LzRgdGPINGD0LHQuNCy0LDRgtGMKi9cbl9TdG9yZXNQb29sMi5kZWZhdWx0LmNyZWF0ZSgnQXBwJywgX0FwcFN0b3JlMi5kZWZhdWx0KTtcblxudmFyIEFwcCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhBcHAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIEFwcCgpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXBwKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXBwLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXBwKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQXBwLCBbe1xuXHRcdGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuXG5cdFx0LyoqXG4gICAqINCa0L7Qs9C00LAg0L7QvSDQstC40LTQuNGCLCDRh9GC0L4g0LXQs9C+INCy0YHRgtCw0LLQuNC70Lgg0LIg0LTQtdGA0LXQstC+IOKAlCDQvtC9INC00LXQu9Cw0LXRgiDQt9Cw0L/RgNC+0YEg0L3QsCDRgdC10YDQstC10YBcbiAgICog0L3QsCBjbHMgPSBob21lLiDQrdGC0L4g0L/RgNC+0LLQtdGA0LrQsCDQv9GA0LDQsi4g0JXRgdC70Lgg0YMg0Y7Qt9C10YDQsCDQstCw0LvQuNC00L3QsNGPIHNlc3Npb24g4oCUINGB0LXRgNCy0LXRgFxuICAgKiDQvtC/0YDQtdC00LXQu9C40YIg0L/RgNCw0LLQsCwg0L/QvtC00LrQu9GO0YfQuNGCINC90YPQttC90YvQuSDQstCw0YDQuNCw0L3RgiBob21lINC4INGB0LrQsNC20LXRgiwg0YfRgtC+INGA0LjRgdC+0LLQsNGC0YwuXG4gICAqINCV0YHQu9C4IHNlc3Npb24g0L3QtSDQstCw0LvQuNC00L3QsCDigJQg0YHQtdGA0LLQtdGAINCy0YvQtNCw0YHRgiDQutC+0LzQsNC90LTRgyDRgNC40YHQvtCy0LDRgtGMIExvZ2luLlxuICAqL1xuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRcdF9BcHBBY3Rpb25zMi5kZWZhdWx0LmxvYWRNb2R1bGUoXCJob21lXCIpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJyZW5kZXJcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIGNscyA9IHRoaXMuc3RhdGUuYXBwU3RvcmUuZ2V0KFwiY2xzXCIpO1xuXHRcdFx0c3dpdGNoIChjbHMpIHtcblx0XHRcdFx0Y2FzZSBcIkxvYWRpbmdcIjpcblx0XHRcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0XCJMb2FkaW5nXFx1MjAyNlwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0Y2FzZSBcIlwiOlxuXHRcdFx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XHRcIk5vdCBpbml0ZWQgeWV0LlwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0Y2FzZSBcIkxvZ2luXCI6XG5cdFx0XHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvZ2luMi5kZWZhdWx0LCBudWxsKTtcblx0XHRcdFx0Y2FzZSBcIkhvbWVcIjpcblx0XHRcdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfSG9tZTIuZGVmYXVsdCwgeyB1c2VyOiB0aGlzLnN0YXRlLmFwcFN0b3JlLmdldChcInJvbGVzXCIpIH0pO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XHRcIlBhbmljLCB0aGVyZSBpcyBubyBcIixcblx0XHRcdFx0XHRcdGNscyxcblx0XHRcdFx0XHRcdFwiIGNhdGhlci5cIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XSwgW3tcblx0XHRrZXk6IFwiZ2V0U3RvcmVzXCIsXG5cblx0XHQvKipcbiAgICog0K3RgtC4INC00LLQtSDRhNGD0L3QutGG0LjQuCDigJQg0YfRkdGA0L3QsNGPINC80LDQs9C40Y8uINCe0L3QuCDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGLLCDQutC+0LPQtNCwINC60L7QvNC/0L7QvdC10L3RgiDRj9Cy0LvRj9C10YLRgdGPXG4gICAqIENvbnRhaW5lciDigJQg0YIuZS4sINCx0LXRgNC10YIg0YHQstC+0ZEgc3RhdGUg0YMgU3RvcmUuINCSINC00LDQvdC90L7QvCDRgdC70YPRh9Cw0LUg4oCUINC80Ysg0LPQvtCy0L7RgNC40LwsXG4gICAqINGH0YLQviDQuNGB0L/QvtC70YzQt9GD0LXRgiBBcHBTdG9yZSDQuCDRh9GC0L4g0L3QsNGI0LUgc3RhdGUg4oCUINC30LDQsdC40YDQsNC10YLRgdGPINC40LcgQXBwU3RhdGUuZ2V0U3RhdGUoKVxuICAqL1xuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRTdG9yZXMoKSB7XG5cdFx0XHRyZXR1cm4gX1N0b3Jlc1Bvb2wyLmRlZmF1bHQuYXJyKCdBcHAnKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiY2FsY3VsYXRlU3RhdGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2FsY3VsYXRlU3RhdGUocHJldlN0YXRlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRhcHBTdG9yZTogX1N0b3Jlc1Bvb2wyLmRlZmF1bHQuaXRlbSgnQXBwJykuZ2V0U3RhdGUoKVxuXHRcdFx0fTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQXBwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfdXRpbHMuQ29udGFpbmVyLmNyZWF0ZShBcHApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9BcHAuanN4XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cy5Db250YWluZXIgPSByZXF1aXJlKCcuL2xpYi9GbHV4Q29udGFpbmVyJyk7XG5tb2R1bGUuZXhwb3J0cy5NaXhpbiA9IHJlcXVpcmUoJy4vbGliL0ZsdXhNaXhpbkxlZ2FjeScpO1xubW9kdWxlLmV4cG9ydHMuUmVkdWNlU3RvcmUgPSByZXF1aXJlKCcuL2xpYi9GbHV4UmVkdWNlU3RvcmUnKTtcbm1vZHVsZS5leHBvcnRzLlN0b3JlID0gcmVxdWlyZSgnLi9saWIvRmx1eFN0b3JlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2ZsdXgvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGbHV4Q29udGFpbmVyXG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgRmx1eENvbnRhaW5lclN1YnNjcmlwdGlvbnMgPSByZXF1aXJlKCcuL0ZsdXhDb250YWluZXJTdWJzY3JpcHRpb25zJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnZmJqcy9saWIvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBDb21wb25lbnQgPSBSZWFjdC5Db21wb25lbnQ7XG5cbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHB1cmU6IHRydWUsXG4gIHdpdGhQcm9wczogZmFsc2UsXG4gIHdpdGhDb250ZXh0OiBmYWxzZVxufTtcblxuLyoqXG4gKiBBIEZsdXhDb250YWluZXIgaXMgdXNlZCB0byBzdWJzY3JpYmUgYSByZWFjdCBjb21wb25lbnQgdG8gbXVsdGlwbGUgc3RvcmVzLlxuICogVGhlIHN0b3JlcyB0aGF0IGFyZSB1c2VkIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIHN0YXRpYyBgZ2V0U3RvcmVzKClgIG1ldGhvZC5cbiAqXG4gKiBUaGUgY29tcG9uZW50IHJlY2VpdmVzIGluZm9ybWF0aW9uIGZyb20gdGhlIHN0b3JlcyB2aWEgc3RhdGUuIFRoZSBzdGF0ZVxuICogaXMgZ2VuZXJhdGVkIHVzaW5nIGEgc3RhdGljIGBjYWxjdWxhdGVTdGF0ZSgpYCBtZXRob2QgdGhhdCBlYWNoIGNvbnRhaW5lclxuICogbXVzdCBpbXBsZW1lbnQuIEEgc2ltcGxlIGNvbnRhaW5lciBtYXkgbG9vayBsaWtlOlxuICpcbiAqICAgY2xhc3MgRm9vQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAqICAgICBzdGF0aWMgZ2V0U3RvcmVzKCkge1xuICogICAgICAgcmV0dXJuIFtGb29TdG9yZV07XG4gKiAgICAgfVxuICpcbiAqICAgICBzdGF0aWMgY2FsY3VsYXRlU3RhdGUoKSB7XG4gKiAgICAgICByZXR1cm4ge1xuICogICAgICAgICBmb286IEZvb1N0b3JlLmdldFN0YXRlKCksXG4gKiAgICAgICB9O1xuICogICAgIH1cbiAqXG4gKiAgICAgcmVuZGVyKCkge1xuICogICAgICAgcmV0dXJuIDxGb29WaWV3IHsuLi50aGlzLnN0YXRlfSAvPjtcbiAqICAgICB9XG4gKiAgIH1cbiAqXG4gKiAgIG1vZHVsZS5leHBvcnRzID0gRmx1eENvbnRhaW5lci5jcmVhdGUoRm9vQ29udGFpbmVyKTtcbiAqXG4gKiBGbHV4IGNvbnRhaW5lciBhbHNvIHN1cHBvcnRzIHNvbWUgb3RoZXIsIG1vcmUgYWR2YW5jZWQgdXNlIGNhc2VzLiBJZiB5b3UgbmVlZFxuICogdG8gYmFzZSB5b3VyIHN0YXRlIG9mZiBvZiBwcm9wcyBhcyB3ZWxsOlxuICpcbiAqICAgY2xhc3MgRm9vQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAqICAgICAuLi5cbiAqXG4gKiAgICAgc3RhdGljIGNhbGN1bGF0ZVN0YXRlKHByZXZTdGF0ZSwgcHJvcHMpIHtcbiAqICAgICAgIHJldHVybiB7XG4gKiAgICAgICAgIGZvbzogRm9vU3RvcmUuZ2V0U3BlY2lmaWNGb28ocHJvcHMuaWQpLFxuICogICAgICAgfTtcbiAqICAgICB9XG4gKlxuICogICAgIC4uLlxuICogICB9XG4gKlxuICogICBtb2R1bGUuZXhwb3J0cyA9IEZsdXhDb250YWluZXIuY3JlYXRlKEZvb0NvbnRhaW5lciwge3dpdGhQcm9wczogdHJ1ZX0pO1xuICpcbiAqIE9yIGlmIHlvdXIgc3RvcmVzIGFyZSBwYXNzZWQgdGhyb3VnaCB5b3VyIHByb3BzOlxuICpcbiAqICAgY2xhc3MgRm9vQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAqICAgICAuLi5cbiAqXG4gKiAgICAgc3RhdGljIGdldFN0b3Jlcyhwcm9wcykge1xuICogICAgICAgY29uc3Qge0JhclN0b3JlLCBGb29TdG9yZX0gPSBwcm9wcy5zdG9yZXM7XG4gKiAgICAgICByZXR1cm4gW0JhclN0b3JlLCBGb29TdG9yZV07XG4gKiAgICAgfVxuICpcbiAqICAgICBzdGF0YyBjYWxjdWxhdGVTdGF0ZShwcmV2U3RhdGUsIHByb3BzKSB7XG4gKiAgICAgICBjb25zdCB7QmFyU3RvcmUsIEZvb1N0b3JlfSA9IHByb3BzLnN0b3JlcztcbiAqICAgICAgIHJldHVybiB7XG4gKiAgICAgICAgIGJhcjogQmFyU3RvcmUuZ2V0U3RhdGUoKSxcbiAqICAgICAgICAgZm9vOiBGb29TdG9yZS5nZXRTdGF0ZSgpLFxuICogICAgICAgfTtcbiAqICAgICB9XG4gKlxuICogICAgIC4uLlxuICogICB9XG4gKlxuICogICBtb2R1bGUuZXhwb3J0cyA9IEZsdXhDb250YWluZXIuY3JlYXRlKEZvb0NvbnRhaW5lciwge3dpdGhQcm9wczogdHJ1ZX0pO1xuICovXG5mdW5jdGlvbiBjcmVhdGUoQmFzZSwgb3B0aW9ucykge1xuICBlbmZvcmNlSW50ZXJmYWNlKEJhc2UpO1xuXG4gIC8vIENvbnN0cnVjdCB0aGUgb3B0aW9ucyB1c2luZyBkZWZhdWx0LCBvdmVycmlkZSB3aXRoIHVzZXIgdmFsdWVzIGFzIG5lY2Vzc2FyeS5cbiAgdmFyIHJlYWxPcHRpb25zID0gX2V4dGVuZHMoe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyB8fCB7fSk7XG5cbiAgdmFyIGdldFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlLCBtYXliZVByb3BzLCBtYXliZUNvbnRleHQpIHtcbiAgICB2YXIgcHJvcHMgPSByZWFsT3B0aW9ucy53aXRoUHJvcHMgPyBtYXliZVByb3BzIDogdW5kZWZpbmVkO1xuICAgIHZhciBjb250ZXh0ID0gcmVhbE9wdGlvbnMud2l0aENvbnRleHQgPyBtYXliZUNvbnRleHQgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIEJhc2UuY2FsY3VsYXRlU3RhdGUoc3RhdGUsIHByb3BzLCBjb250ZXh0KTtcbiAgfTtcblxuICB2YXIgZ2V0U3RvcmVzID0gZnVuY3Rpb24gKG1heWJlUHJvcHMsIG1heWJlQ29udGV4dCkge1xuICAgIHZhciBwcm9wcyA9IHJlYWxPcHRpb25zLndpdGhQcm9wcyA/IG1heWJlUHJvcHMgOiB1bmRlZmluZWQ7XG4gICAgdmFyIGNvbnRleHQgPSByZWFsT3B0aW9ucy53aXRoQ29udGV4dCA/IG1heWJlQ29udGV4dCA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gQmFzZS5nZXRTdG9yZXMocHJvcHMsIGNvbnRleHQpO1xuICB9O1xuXG4gIC8vIEJ1aWxkIHRoZSBjb250YWluZXIgY2xhc3MuXG5cbiAgdmFyIENvbnRhaW5lckNsYXNzID0gKGZ1bmN0aW9uIChfQmFzZSkge1xuICAgIF9pbmhlcml0cyhDb250YWluZXJDbGFzcywgX0Jhc2UpO1xuXG4gICAgZnVuY3Rpb24gQ29udGFpbmVyQ2xhc3MocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250YWluZXJDbGFzcyk7XG5cbiAgICAgIF9CYXNlLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpO1xuICAgICAgdGhpcy5fZmx1eENvbnRhaW5lclN1YnNjcmlwdGlvbnMgPSBuZXcgRmx1eENvbnRhaW5lclN1YnNjcmlwdGlvbnMoKTtcbiAgICAgIHRoaXMuX2ZsdXhDb250YWluZXJTdWJzY3JpcHRpb25zLnNldFN0b3JlcyhnZXRTdG9yZXMocHJvcHMpKTtcbiAgICAgIHRoaXMuX2ZsdXhDb250YWluZXJTdWJzY3JpcHRpb25zLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSwgY3VycmVudFByb3BzKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFN0YXRlKHByZXZTdGF0ZSwgY3VycmVudFByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBjYWxjdWxhdGVkU3RhdGUgPSBnZXRTdGF0ZSh1bmRlZmluZWQsIHByb3BzLCBjb250ZXh0KTtcbiAgICAgIHRoaXMuc3RhdGUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5zdGF0ZSB8fCB7fSwgY2FsY3VsYXRlZFN0YXRlKTtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2Ugb3ZlcnJpZGUgc2hvdWxkQ29tcG9uZW50VXBkYXRlIG9ubHkgaWYgdGhlIHB1cmUgb3B0aW9uIGlzXG4gICAgLy8gc3BlY2lmaWVkLiBXZSBjYW4ndCBvdmVycmlkZSB0aGlzIGFib3ZlIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCB0byBvdmVycmlkZVxuICAgIC8vIHRoZSBkZWZhdWx0IGJlaGF2aW9yIG9uIGFjY2lkZW50LiBTdXBlciB3b3JrcyB3ZWlyZCB3aXRoIHJlYWN0IEVTNiBjbGFzc2VzLlxuXG4gICAgQ29udGFpbmVyQ2xhc3MucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgbmV4dENvbnRleHQpIHtcbiAgICAgIGlmIChfQmFzZS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcykge1xuICAgICAgICBfQmFzZS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcy5jYWxsKHRoaXMsIG5leHRQcm9wcywgbmV4dENvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVhbE9wdGlvbnMud2l0aFByb3BzIHx8IHJlYWxPcHRpb25zLndpdGhDb250ZXh0KSB7XG4gICAgICAgIC8vIFVwZGF0ZSBib3RoIHN0b3JlcyBhbmQgc3RhdGUuXG4gICAgICAgIHRoaXMuX2ZsdXhDb250YWluZXJTdWJzY3JpcHRpb25zLnNldFN0b3JlcyhnZXRTdG9yZXMobmV4dFByb3BzLCBuZXh0Q29udGV4dCkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0U3RhdGUocHJldlN0YXRlLCBuZXh0UHJvcHMsIG5leHRDb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvbnRhaW5lckNsYXNzLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKF9CYXNlLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCkge1xuICAgICAgICBfQmFzZS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZmx1eENvbnRhaW5lclN1YnNjcmlwdGlvbnMucmVzZXQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENvbnRhaW5lckNsYXNzO1xuICB9KShCYXNlKTtcblxuICB2YXIgY29udGFpbmVyID0gcmVhbE9wdGlvbnMucHVyZSA/IGNyZWF0ZVB1cmVDb21wb25lbnQoQ29udGFpbmVyQ2xhc3MpIDogQ29udGFpbmVyQ2xhc3M7XG5cbiAgLy8gVXBkYXRlIHRoZSBuYW1lIG9mIHRoZSBjb250YWluZXIgYmVmb3JlIHJldHVybmluZ1xuICB2YXIgY29tcG9uZW50TmFtZSA9IEJhc2UuZGlzcGxheU5hbWUgfHwgQmFzZS5uYW1lO1xuICBjb250YWluZXIuZGlzcGxheU5hbWUgPSAnRmx1eENvbnRhaW5lcignICsgY29tcG9uZW50TmFtZSArICcpJztcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHVyZUNvbXBvbmVudChCYXNlQ29tcG9uZW50KSB7XG4gIHZhciBQdXJlQ29tcG9uZW50ID0gKGZ1bmN0aW9uIChfQmFzZUNvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhQdXJlQ29tcG9uZW50LCBfQmFzZUNvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQdXJlQ29tcG9uZW50KCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFB1cmVDb21wb25lbnQpO1xuXG4gICAgICBfQmFzZUNvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIFB1cmVDb21wb25lbnQucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgcmV0dXJuICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBQdXJlQ29tcG9uZW50O1xuICB9KShCYXNlQ29tcG9uZW50KTtcblxuICByZXR1cm4gUHVyZUNvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gZW5mb3JjZUludGVyZmFjZShvKSB7XG4gICFvLmdldFN0b3JlcyA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdDb21wb25lbnRzIHRoYXQgdXNlIEZsdXhDb250YWluZXIgbXVzdCBpbXBsZW1lbnQgYHN0YXRpYyBnZXRTdG9yZXMoKWAnKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICFvLmNhbGN1bGF0ZVN0YXRlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0NvbXBvbmVudHMgdGhhdCB1c2UgRmx1eENvbnRhaW5lciBtdXN0IGltcGxlbWVudCBgc3RhdGljIGNhbGN1bGF0ZVN0YXRlKClgJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFRoaXMgaXMgYSB3YXkgdG8gY29ubmVjdCBzdG9yZXMgdG8gYSBmdW5jdGlvbmFsIHN0YXRlbGVzcyB2aWV3LiBIZXJlJ3MgYVxuICogc2ltcGxlIGV4YW1wbGU6XG4gKlxuICogICAvLyBGb29WaWV3LmpzXG4gKlxuICogICBmdW5jdGlvbiBGb29WaWV3KHByb3BzKSB7XG4gKiAgICAgcmV0dXJuIDxkaXY+e3Byb3BzLnZhbHVlfTwvZGl2PjtcbiAqICAgfVxuICpcbiAqICAgbW9kdWxlLmV4cG9ydHMgPSBGb29WaWV3O1xuICpcbiAqXG4gKiAgIC8vIEZvb0NvbnRhaW5lci5qc1xuICpcbiAqICAgZnVuY3Rpb24gZ2V0U3RvcmVzKCkge1xuICogICAgIHJldHVybiBbRm9vU3RvcmVdO1xuICogICB9XG4gKlxuICogICBmdW5jdGlvbiBjYWxjdWxhdGVTdGF0ZSgpIHtcbiAqICAgICByZXR1cm4ge1xuICogICAgICAgdmFsdWU6IEZvb1N0b3JlLmdldFN0YXRlKCk7XG4gKiAgICAgfTtcbiAqICAgfVxuICpcbiAqICAgbW9kdWxlLmV4cG9ydHMgPSBGbHV4Q29udGFpbmVyLmNyZWF0ZUZ1bmN0aW9uYWwoXG4gKiAgICAgRm9vVmlldyxcbiAqICAgICBnZXRTdG9yZXMsXG4gKiAgICAgY2FsY3VsYXRlU3RhdGUsXG4gKiAgICk7XG4gKlxuICovXG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbmFsKHZpZXdGbiwgX2dldFN0b3JlcywgX2NhbGN1bGF0ZVN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBGdW5jdGlvbmFsQ29udGFpbmVyID0gKGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEZ1bmN0aW9uYWxDb250YWluZXIsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRnVuY3Rpb25hbENvbnRhaW5lcigpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGdW5jdGlvbmFsQ29udGFpbmVyKTtcblxuICAgICAgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgbmFtZSBvZiB0aGUgY29tcG9uZW50IGJlZm9yZSBjcmVhdGluZyB0aGUgY29udGFpbmVyLlxuXG4gICAgRnVuY3Rpb25hbENvbnRhaW5lci5nZXRTdG9yZXMgPSBmdW5jdGlvbiBnZXRTdG9yZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBfZ2V0U3RvcmVzKHByb3BzLCBjb250ZXh0KTtcbiAgICB9O1xuXG4gICAgRnVuY3Rpb25hbENvbnRhaW5lci5jYWxjdWxhdGVTdGF0ZSA9IGZ1bmN0aW9uIGNhbGN1bGF0ZVN0YXRlKHByZXZTdGF0ZSwgcHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBfY2FsY3VsYXRlU3RhdGUocHJldlN0YXRlLCBwcm9wcywgY29udGV4dCk7XG4gICAgfTtcblxuICAgIEZ1bmN0aW9uYWxDb250YWluZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB2aWV3Rm4odGhpcy5zdGF0ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBGdW5jdGlvbmFsQ29udGFpbmVyO1xuICB9KShDb21wb25lbnQpO1xuXG4gIHZhciB2aWV3Rm5OYW1lID0gdmlld0ZuLmRpc3BsYXlOYW1lIHx8IHZpZXdGbi5uYW1lIHx8ICdGdW5jdGlvbmFsQ29udGFpbmVyJztcbiAgRnVuY3Rpb25hbENvbnRhaW5lci5kaXNwbGF5TmFtZSA9IHZpZXdGbk5hbWU7XG4gIHJldHVybiBjcmVhdGUoRnVuY3Rpb25hbENvbnRhaW5lciwgb3B0aW9ucyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBjcmVhdGU6IGNyZWF0ZSwgY3JlYXRlRnVuY3Rpb25hbDogY3JlYXRlRnVuY3Rpb25hbCB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vZmx1eC9saWIvRmx1eENvbnRhaW5lci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEZsdXhDb250YWluZXJTdWJzY3JpcHRpb25zXG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgRmx1eFN0b3JlR3JvdXAgPSByZXF1aXJlKCcuL0ZsdXhTdG9yZUdyb3VwJyk7XG5cbnZhciBGbHV4Q29udGFpbmVyU3Vic2NyaXB0aW9ucyA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEZsdXhDb250YWluZXJTdWJzY3JpcHRpb25zKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGbHV4Q29udGFpbmVyU3Vic2NyaXB0aW9ucyk7XG5cbiAgICB0aGlzLl9jYWxsYmFja3MgPSBbXTtcbiAgfVxuXG4gIEZsdXhDb250YWluZXJTdWJzY3JpcHRpb25zLnByb3RvdHlwZS5zZXRTdG9yZXMgPSBmdW5jdGlvbiBzZXRTdG9yZXMoc3RvcmVzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuX3Jlc2V0VG9rZW5zKCk7XG4gICAgdGhpcy5fcmVzZXRTdG9yZUdyb3VwKCk7XG5cbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBjaGFuZ2VkU3RvcmVzID0gW107XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgc3RvcmVzIHRoYXQgY2hhbmdlZCBmb3IgZGVidWdnaW5nIHB1cnBvc2VzIG9ubHlcbiAgICAgIHRoaXMuX3Rva2VucyA9IHN0b3Jlcy5tYXAoZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgY2hhbmdlZFN0b3Jlcy5wdXNoKHN0b3JlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNldENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLl90b2tlbnMgPSBzdG9yZXMubWFwKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICAgIHJldHVybiBzdG9yZS5hZGRMaXN0ZW5lcihzZXRDaGFuZ2VkKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cblxuICAgIHZhciBjYWxsQ2FsbGJhY2tzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgX3RoaXMuX2NhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgIHJldHVybiBmbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIFVuY29tbWVudCB0aGlzIHRvIHByaW50IHRoZSBzdG9yZXMgdGhhdCBjaGFuZ2VkLlxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoYW5nZWRTdG9yZXMpO1xuICAgICAgICAgIGNoYW5nZWRTdG9yZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5fc3RvcmVHcm91cCA9IG5ldyBGbHV4U3RvcmVHcm91cChzdG9yZXMsIGNhbGxDYWxsYmFja3MpO1xuICB9O1xuXG4gIEZsdXhDb250YWluZXJTdWJzY3JpcHRpb25zLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGZuKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzLnB1c2goZm4pO1xuICB9O1xuXG4gIEZsdXhDb250YWluZXJTdWJzY3JpcHRpb25zLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHRoaXMuX3Jlc2V0VG9rZW5zKCk7XG4gICAgdGhpcy5fcmVzZXRTdG9yZUdyb3VwKCk7XG4gICAgdGhpcy5fcmVzZXRDYWxsYmFja3MoKTtcbiAgfTtcblxuICBGbHV4Q29udGFpbmVyU3Vic2NyaXB0aW9ucy5wcm90b3R5cGUuX3Jlc2V0VG9rZW5zID0gZnVuY3Rpb24gX3Jlc2V0VG9rZW5zKCkge1xuICAgIGlmICh0aGlzLl90b2tlbnMpIHtcbiAgICAgIHRoaXMuX3Rva2Vucy5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICByZXR1cm4gdG9rZW4ucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3Rva2VucyA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIEZsdXhDb250YWluZXJTdWJzY3JpcHRpb25zLnByb3RvdHlwZS5fcmVzZXRTdG9yZUdyb3VwID0gZnVuY3Rpb24gX3Jlc2V0U3RvcmVHcm91cCgpIHtcbiAgICBpZiAodGhpcy5fc3RvcmVHcm91cCkge1xuICAgICAgdGhpcy5fc3RvcmVHcm91cC5yZWxlYXNlKCk7XG4gICAgICB0aGlzLl9zdG9yZUdyb3VwID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgRmx1eENvbnRhaW5lclN1YnNjcmlwdGlvbnMucHJvdG90eXBlLl9yZXNldENhbGxiYWNrcyA9IGZ1bmN0aW9uIF9yZXNldENhbGxiYWNrcygpIHtcbiAgICB0aGlzLl9jYWxsYmFja3MgPSBbXTtcbiAgfTtcblxuICByZXR1cm4gRmx1eENvbnRhaW5lclN1YnNjcmlwdGlvbnM7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsdXhDb250YWluZXJTdWJzY3JpcHRpb25zO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vZmx1eC9saWIvRmx1eENvbnRhaW5lclN1YnNjcmlwdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGbHV4U3RvcmVHcm91cFxuICogXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG4vKipcbiAqIEZsdXhTdG9yZUdyb3VwIGFsbG93cyB5b3UgdG8gZXhlY3V0ZSBhIGNhbGxiYWNrIG9uIGV2ZXJ5IGRpc3BhdGNoIGFmdGVyXG4gKiB3YWl0aW5nIGZvciBlYWNoIG9mIHRoZSBnaXZlbiBzdG9yZXMuXG4gKi9cblxudmFyIEZsdXhTdG9yZUdyb3VwID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRmx1eFN0b3JlR3JvdXAoc3RvcmVzLCBjYWxsYmFjaykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmx1eFN0b3JlR3JvdXApO1xuXG4gICAgdGhpcy5fZGlzcGF0Y2hlciA9IF9nZXRVbmlmb3JtRGlzcGF0Y2hlcihzdG9yZXMpO1xuXG4gICAgLy8gUHJlY29tcHV0ZSBzdG9yZSB0b2tlbnMuXG4gICAgdmFyIHN0b3JlVG9rZW5zID0gc3RvcmVzLm1hcChmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgIHJldHVybiBzdG9yZS5nZXREaXNwYXRjaFRva2VuKCk7XG4gICAgfSk7XG5cbiAgICAvLyBSZWdpc3RlciB3aXRoIHRoZSBkaXNwYXRjaGVyLlxuICAgIHRoaXMuX2Rpc3BhdGNoVG9rZW4gPSB0aGlzLl9kaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICBfdGhpcy5fZGlzcGF0Y2hlci53YWl0Rm9yKHN0b3JlVG9rZW5zKTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBGbHV4U3RvcmVHcm91cC5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uIHJlbGVhc2UoKSB7XG4gICAgdGhpcy5fZGlzcGF0Y2hlci51bnJlZ2lzdGVyKHRoaXMuX2Rpc3BhdGNoVG9rZW4pO1xuICB9O1xuXG4gIHJldHVybiBGbHV4U3RvcmVHcm91cDtcbn0pKCk7XG5cbmZ1bmN0aW9uIF9nZXRVbmlmb3JtRGlzcGF0Y2hlcihzdG9yZXMpIHtcbiAgIShzdG9yZXMgJiYgc3RvcmVzLmxlbmd0aCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnTXVzdCBwcm92aWRlIGF0IGxlYXN0IG9uZSBzdG9yZSB0byBGbHV4U3RvcmVHcm91cCcpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgdmFyIGRpc3BhdGNoZXIgPSBzdG9yZXNbMF0uZ2V0RGlzcGF0Y2hlcigpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHN0b3JlcywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0b3JlID0gX3JlZjtcblxuICAgICAgIShzdG9yZS5nZXREaXNwYXRjaGVyKCkgPT09IGRpc3BhdGNoZXIpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0FsbCBzdG9yZXMgaW4gYSBGbHV4U3RvcmVHcm91cCBtdXN0IHVzZSB0aGUgc2FtZSBkaXNwYXRjaGVyJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbHV4U3RvcmVHcm91cDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2ZsdXgvbGliL0ZsdXhTdG9yZUdyb3VwLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9SZWFjdCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC9yZWFjdC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0Q2hpbGRyZW4gPSByZXF1aXJlKCcuL1JlYWN0Q2hpbGRyZW4nKTtcbnZhciBSZWFjdENvbXBvbmVudCA9IHJlcXVpcmUoJy4vUmVhY3RDb21wb25lbnQnKTtcbnZhciBSZWFjdFB1cmVDb21wb25lbnQgPSByZXF1aXJlKCcuL1JlYWN0UHVyZUNvbXBvbmVudCcpO1xudmFyIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL1JlYWN0Q2xhc3MnKTtcbnZhciBSZWFjdERPTUZhY3RvcmllcyA9IHJlcXVpcmUoJy4vUmVhY3RET01GYWN0b3JpZXMnKTtcbnZhciBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL1JlYWN0RWxlbWVudCcpO1xudmFyIFJlYWN0UHJvcFR5cGVzID0gcmVxdWlyZSgnLi9SZWFjdFByb3BUeXBlcycpO1xudmFyIFJlYWN0VmVyc2lvbiA9IHJlcXVpcmUoJy4vUmVhY3RWZXJzaW9uJyk7XG5cbnZhciBvbmx5Q2hpbGQgPSByZXF1aXJlKCcuL29ubHlDaGlsZCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbnZhciBjcmVhdGVFbGVtZW50ID0gUmVhY3RFbGVtZW50LmNyZWF0ZUVsZW1lbnQ7XG52YXIgY3JlYXRlRmFjdG9yeSA9IFJlYWN0RWxlbWVudC5jcmVhdGVGYWN0b3J5O1xudmFyIGNsb25lRWxlbWVudCA9IFJlYWN0RWxlbWVudC5jbG9uZUVsZW1lbnQ7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdEVsZW1lbnRWYWxpZGF0b3IgPSByZXF1aXJlKCcuL1JlYWN0RWxlbWVudFZhbGlkYXRvcicpO1xuICBjcmVhdGVFbGVtZW50ID0gUmVhY3RFbGVtZW50VmFsaWRhdG9yLmNyZWF0ZUVsZW1lbnQ7XG4gIGNyZWF0ZUZhY3RvcnkgPSBSZWFjdEVsZW1lbnRWYWxpZGF0b3IuY3JlYXRlRmFjdG9yeTtcbiAgY2xvbmVFbGVtZW50ID0gUmVhY3RFbGVtZW50VmFsaWRhdG9yLmNsb25lRWxlbWVudDtcbn1cblxudmFyIF9fc3ByZWFkID0gX2Fzc2lnbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBfX3NwcmVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyh3YXJuZWQsICdSZWFjdC5fX3NwcmVhZCBpcyBkZXByZWNhdGVkIGFuZCBzaG91bGQgbm90IGJlIHVzZWQuIFVzZSAnICsgJ09iamVjdC5hc3NpZ24gZGlyZWN0bHkgb3IgYW5vdGhlciBoZWxwZXIgZnVuY3Rpb24gd2l0aCBzaW1pbGFyICcgKyAnc2VtYW50aWNzLiBZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIHlvdXIgY29tcGlsZXIuICcgKyAnU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtc3ByZWFkLWRlcHJlY2F0aW9uIGZvciBtb3JlIGRldGFpbHMuJykgOiB2b2lkIDA7XG4gICAgd2FybmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gX2Fzc2lnbi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG52YXIgUmVhY3QgPSB7XG5cbiAgLy8gTW9kZXJuXG5cbiAgQ2hpbGRyZW46IHtcbiAgICBtYXA6IFJlYWN0Q2hpbGRyZW4ubWFwLFxuICAgIGZvckVhY2g6IFJlYWN0Q2hpbGRyZW4uZm9yRWFjaCxcbiAgICBjb3VudDogUmVhY3RDaGlsZHJlbi5jb3VudCxcbiAgICB0b0FycmF5OiBSZWFjdENoaWxkcmVuLnRvQXJyYXksXG4gICAgb25seTogb25seUNoaWxkXG4gIH0sXG5cbiAgQ29tcG9uZW50OiBSZWFjdENvbXBvbmVudCxcbiAgUHVyZUNvbXBvbmVudDogUmVhY3RQdXJlQ29tcG9uZW50LFxuXG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnQsXG4gIGNsb25lRWxlbWVudDogY2xvbmVFbGVtZW50LFxuICBpc1ZhbGlkRWxlbWVudDogUmVhY3RFbGVtZW50LmlzVmFsaWRFbGVtZW50LFxuXG4gIC8vIENsYXNzaWNcblxuICBQcm9wVHlwZXM6IFJlYWN0UHJvcFR5cGVzLFxuICBjcmVhdGVDbGFzczogUmVhY3RDbGFzcy5jcmVhdGVDbGFzcyxcbiAgY3JlYXRlRmFjdG9yeTogY3JlYXRlRmFjdG9yeSxcbiAgY3JlYXRlTWl4aW46IGZ1bmN0aW9uIChtaXhpbikge1xuICAgIC8vIEN1cnJlbnRseSBhIG5vb3AuIFdpbGwgYmUgdXNlZCB0byB2YWxpZGF0ZSBhbmQgdHJhY2UgbWl4aW5zLlxuICAgIHJldHVybiBtaXhpbjtcbiAgfSxcblxuICAvLyBUaGlzIGxvb2tzIERPTSBzcGVjaWZpYyBidXQgdGhlc2UgYXJlIGFjdHVhbGx5IGlzb21vcnBoaWMgaGVscGVyc1xuICAvLyBzaW5jZSB0aGV5IGFyZSBqdXN0IGdlbmVyYXRpbmcgRE9NIHN0cmluZ3MuXG4gIERPTTogUmVhY3RET01GYWN0b3JpZXMsXG5cbiAgdmVyc2lvbjogUmVhY3RWZXJzaW9uLFxuXG4gIC8vIERlcHJlY2F0ZWQgaG9vayBmb3IgSlNYIHNwcmVhZCwgZG9uJ3QgdXNlIHRoaXMgZm9yIGFueXRoaW5nLlxuICBfX3NwcmVhZDogX19zcHJlYWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC9saWIvUmVhY3QuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFBvb2xlZENsYXNzID0gcmVxdWlyZSgnLi9Qb29sZWRDbGFzcycpO1xudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vUmVhY3RFbGVtZW50Jyk7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIHRyYXZlcnNlQWxsQ2hpbGRyZW4gPSByZXF1aXJlKCcuL3RyYXZlcnNlQWxsQ2hpbGRyZW4nKTtcblxudmFyIHR3b0FyZ3VtZW50UG9vbGVyID0gUG9vbGVkQ2xhc3MudHdvQXJndW1lbnRQb29sZXI7XG52YXIgZm91ckFyZ3VtZW50UG9vbGVyID0gUG9vbGVkQ2xhc3MuZm91ckFyZ3VtZW50UG9vbGVyO1xuXG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuICgnJyArIHRleHQpLnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cblxuLyoqXG4gKiBQb29sZWRDbGFzcyByZXByZXNlbnRpbmcgdGhlIGJvb2trZWVwaW5nIGFzc29jaWF0ZWQgd2l0aCBwZXJmb3JtaW5nIGEgY2hpbGRcbiAqIHRyYXZlcnNhbC4gQWxsb3dzIGF2b2lkaW5nIGJpbmRpbmcgY2FsbGJhY2tzLlxuICpcbiAqIEBjb25zdHJ1Y3RvciBGb3JFYWNoQm9va0tlZXBpbmdcbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBmb3JFYWNoRnVuY3Rpb24gRnVuY3Rpb24gdG8gcGVyZm9ybSB0cmF2ZXJzYWwgd2l0aC5cbiAqIEBwYXJhbSB7Pyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgdG8gcGVyZm9ybSBjb250ZXh0IHdpdGguXG4gKi9cbmZ1bmN0aW9uIEZvckVhY2hCb29rS2VlcGluZyhmb3JFYWNoRnVuY3Rpb24sIGZvckVhY2hDb250ZXh0KSB7XG4gIHRoaXMuZnVuYyA9IGZvckVhY2hGdW5jdGlvbjtcbiAgdGhpcy5jb250ZXh0ID0gZm9yRWFjaENvbnRleHQ7XG4gIHRoaXMuY291bnQgPSAwO1xufVxuRm9yRWFjaEJvb2tLZWVwaW5nLnByb3RvdHlwZS5kZXN0cnVjdG9yID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZ1bmMgPSBudWxsO1xuICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICB0aGlzLmNvdW50ID0gMDtcbn07XG5Qb29sZWRDbGFzcy5hZGRQb29saW5nVG8oRm9yRWFjaEJvb2tLZWVwaW5nLCB0d29Bcmd1bWVudFBvb2xlcik7XG5cbmZ1bmN0aW9uIGZvckVhY2hTaW5nbGVDaGlsZChib29rS2VlcGluZywgY2hpbGQsIG5hbWUpIHtcbiAgdmFyIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cbiAgZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4uZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IEZvckVhY2hCb29rS2VlcGluZy5nZXRQb29sZWQoZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaFNpbmdsZUNoaWxkLCB0cmF2ZXJzZUNvbnRleHQpO1xuICBGb3JFYWNoQm9va0tlZXBpbmcucmVsZWFzZSh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG4vKipcbiAqIFBvb2xlZENsYXNzIHJlcHJlc2VudGluZyB0aGUgYm9va2tlZXBpbmcgYXNzb2NpYXRlZCB3aXRoIHBlcmZvcm1pbmcgYSBjaGlsZFxuICogbWFwcGluZy4gQWxsb3dzIGF2b2lkaW5nIGJpbmRpbmcgY2FsbGJhY2tzLlxuICpcbiAqIEBjb25zdHJ1Y3RvciBNYXBCb29rS2VlcGluZ1xuICogQHBhcmFtIHshKn0gbWFwUmVzdWx0IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICogQHBhcmFtIHshZnVuY3Rpb259IG1hcEZ1bmN0aW9uIEZ1bmN0aW9uIHRvIHBlcmZvcm0gbWFwcGluZyB3aXRoLlxuICogQHBhcmFtIHs/Kn0gbWFwQ29udGV4dCBDb250ZXh0IHRvIHBlcmZvcm0gbWFwcGluZyB3aXRoLlxuICovXG5mdW5jdGlvbiBNYXBCb29rS2VlcGluZyhtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgdGhpcy5yZXN1bHQgPSBtYXBSZXN1bHQ7XG4gIHRoaXMua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICB0aGlzLmZ1bmMgPSBtYXBGdW5jdGlvbjtcbiAgdGhpcy5jb250ZXh0ID0gbWFwQ29udGV4dDtcbiAgdGhpcy5jb3VudCA9IDA7XG59XG5NYXBCb29rS2VlcGluZy5wcm90b3R5cGUuZGVzdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5yZXN1bHQgPSBudWxsO1xuICB0aGlzLmtleVByZWZpeCA9IG51bGw7XG4gIHRoaXMuZnVuYyA9IG51bGw7XG4gIHRoaXMuY29udGV4dCA9IG51bGw7XG4gIHRoaXMuY291bnQgPSAwO1xufTtcblBvb2xlZENsYXNzLmFkZFBvb2xpbmdUbyhNYXBCb29rS2VlcGluZywgZm91ckFyZ3VtZW50UG9vbGVyKTtcblxuZnVuY3Rpb24gbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dChib29rS2VlcGluZywgY2hpbGQsIGNoaWxkS2V5KSB7XG4gIHZhciByZXN1bHQgPSBib29rS2VlcGluZy5yZXN1bHQsXG4gICAgICBrZXlQcmVmaXggPSBib29rS2VlcGluZy5rZXlQcmVmaXgsXG4gICAgICBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG5cbiAgdmFyIG1hcHBlZENoaWxkID0gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgaWYgKFJlYWN0RWxlbWVudC5pc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgIG1hcHBlZENoaWxkID0gUmVhY3RFbGVtZW50LmNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCxcbiAgICAgIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgIGtleVByZWZpeCArIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFjaGlsZCB8fCBjaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyBlc2NhcGVVc2VyUHJvdmlkZWRLZXkobWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWFwcGVkQ2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIGFycmF5LCBwcmVmaXgsIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGVzY2FwZWRQcmVmaXggPSAnJztcbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBNYXBCb29rS2VlcGluZy5nZXRQb29sZWQoYXJyYXksIGVzY2FwZWRQcmVmaXgsIGZ1bmMsIGNvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICBNYXBCb29rS2VlcGluZy5yZWxlYXNlKHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdG9wLWxldmVsLWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwga2V5LCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jLCBjb250ZXh0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFNpbmdsZUNoaWxkRHVtbXkodHJhdmVyc2VDb250ZXh0LCBjaGlsZCwgbmFtZSkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdG9wLWxldmVsLWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZER1bW15LCBudWxsKTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4udG9hcnJheVxuICovXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG52YXIgUmVhY3RDaGlsZHJlbiA9IHtcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBtYXA6IG1hcENoaWxkcmVuLFxuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsOiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENoaWxkcmVuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QvbGliL1JlYWN0Q2hpbGRyZW4uanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9wcm9kSW52YXJpYW50ID0gcmVxdWlyZSgnLi9yZWFjdFByb2RJbnZhcmlhbnQnKTtcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG4vKipcbiAqIFN0YXRpYyBwb29sZXJzLiBTZXZlcmFsIGN1c3RvbSB2ZXJzaW9ucyBmb3IgZWFjaCBwb3RlbnRpYWwgbnVtYmVyIG9mXG4gKiBhcmd1bWVudHMuIEEgY29tcGxldGVseSBnZW5lcmljIHBvb2xlciBpcyBlYXN5IHRvIGltcGxlbWVudCwgYnV0IHdvdWxkXG4gKiByZXF1aXJlIGFjY2Vzc2luZyB0aGUgYGFyZ3VtZW50c2Agb2JqZWN0LiBJbiBlYWNoIG9mIHRoZXNlLCBgdGhpc2AgcmVmZXJzIHRvXG4gKiB0aGUgQ2xhc3MgaXRzZWxmLCBub3QgYW4gaW5zdGFuY2UuIElmIGFueSBvdGhlcnMgYXJlIG5lZWRlZCwgc2ltcGx5IGFkZCB0aGVtXG4gKiBoZXJlLCBvciBpbiB0aGVpciBvd24gZmlsZXMuXG4gKi9cbnZhciBvbmVBcmd1bWVudFBvb2xlciA9IGZ1bmN0aW9uIChjb3B5RmllbGRzRnJvbSkge1xuICB2YXIgS2xhc3MgPSB0aGlzO1xuICBpZiAoS2xhc3MuaW5zdGFuY2VQb29sLmxlbmd0aCkge1xuICAgIHZhciBpbnN0YW5jZSA9IEtsYXNzLmluc3RhbmNlUG9vbC5wb3AoKTtcbiAgICBLbGFzcy5jYWxsKGluc3RhbmNlLCBjb3B5RmllbGRzRnJvbSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgS2xhc3MoY29weUZpZWxkc0Zyb20pO1xuICB9XG59O1xuXG52YXIgdHdvQXJndW1lbnRQb29sZXIgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gIHZhciBLbGFzcyA9IHRoaXM7XG4gIGlmIChLbGFzcy5pbnN0YW5jZVBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIGluc3RhbmNlID0gS2xhc3MuaW5zdGFuY2VQb29sLnBvcCgpO1xuICAgIEtsYXNzLmNhbGwoaW5zdGFuY2UsIGExLCBhMik7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgS2xhc3MoYTEsIGEyKTtcbiAgfVxufTtcblxudmFyIHRocmVlQXJndW1lbnRQb29sZXIgPSBmdW5jdGlvbiAoYTEsIGEyLCBhMykge1xuICB2YXIgS2xhc3MgPSB0aGlzO1xuICBpZiAoS2xhc3MuaW5zdGFuY2VQb29sLmxlbmd0aCkge1xuICAgIHZhciBpbnN0YW5jZSA9IEtsYXNzLmluc3RhbmNlUG9vbC5wb3AoKTtcbiAgICBLbGFzcy5jYWxsKGluc3RhbmNlLCBhMSwgYTIsIGEzKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBLbGFzcyhhMSwgYTIsIGEzKTtcbiAgfVxufTtcblxudmFyIGZvdXJBcmd1bWVudFBvb2xlciA9IGZ1bmN0aW9uIChhMSwgYTIsIGEzLCBhNCkge1xuICB2YXIgS2xhc3MgPSB0aGlzO1xuICBpZiAoS2xhc3MuaW5zdGFuY2VQb29sLmxlbmd0aCkge1xuICAgIHZhciBpbnN0YW5jZSA9IEtsYXNzLmluc3RhbmNlUG9vbC5wb3AoKTtcbiAgICBLbGFzcy5jYWxsKGluc3RhbmNlLCBhMSwgYTIsIGEzLCBhNCk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgS2xhc3MoYTEsIGEyLCBhMywgYTQpO1xuICB9XG59O1xuXG52YXIgc3RhbmRhcmRSZWxlYXNlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICB2YXIgS2xhc3MgPSB0aGlzO1xuICAhKGluc3RhbmNlIGluc3RhbmNlb2YgS2xhc3MpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ1RyeWluZyB0byByZWxlYXNlIGFuIGluc3RhbmNlIGludG8gYSBwb29sIG9mIGEgZGlmZmVyZW50IHR5cGUuJykgOiBfcHJvZEludmFyaWFudCgnMjUnKSA6IHZvaWQgMDtcbiAgaW5zdGFuY2UuZGVzdHJ1Y3RvcigpO1xuICBpZiAoS2xhc3MuaW5zdGFuY2VQb29sLmxlbmd0aCA8IEtsYXNzLnBvb2xTaXplKSB7XG4gICAgS2xhc3MuaW5zdGFuY2VQb29sLnB1c2goaW5zdGFuY2UpO1xuICB9XG59O1xuXG52YXIgREVGQVVMVF9QT09MX1NJWkUgPSAxMDtcbnZhciBERUZBVUxUX1BPT0xFUiA9IG9uZUFyZ3VtZW50UG9vbGVyO1xuXG4vKipcbiAqIEF1Z21lbnRzIGBDb3B5Q29uc3RydWN0b3JgIHRvIGJlIGEgcG9vbGFibGUgY2xhc3MsIGF1Z21lbnRpbmcgb25seSB0aGUgY2xhc3NcbiAqIGl0c2VsZiAoc3RhdGljYWxseSkgbm90IGFkZGluZyBhbnkgcHJvdG90eXBpY2FsIGZpZWxkcy4gQW55IENvcHlDb25zdHJ1Y3RvclxuICogeW91IGdpdmUgdGhpcyBtYXkgaGF2ZSBhIGBwb29sU2l6ZWAgcHJvcGVydHksIGFuZCB3aWxsIGxvb2sgZm9yIGFcbiAqIHByb3RvdHlwaWNhbCBgZGVzdHJ1Y3RvcmAgb24gaW5zdGFuY2VzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENvcHlDb25zdHJ1Y3RvciBDb25zdHJ1Y3RvciB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlc2V0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcG9vbGVyIEN1c3RvbWl6YWJsZSBwb29sZXIuXG4gKi9cbnZhciBhZGRQb29saW5nVG8gPSBmdW5jdGlvbiAoQ29weUNvbnN0cnVjdG9yLCBwb29sZXIpIHtcbiAgLy8gQ2FzdGluZyBhcyBhbnkgc28gdGhhdCBmbG93IGlnbm9yZXMgdGhlIGFjdHVhbCBpbXBsZW1lbnRhdGlvbiBhbmQgdHJ1c3RzXG4gIC8vIGl0IHRvIG1hdGNoIHRoZSB0eXBlIHdlIGRlY2xhcmVkXG4gIHZhciBOZXdLbGFzcyA9IENvcHlDb25zdHJ1Y3RvcjtcbiAgTmV3S2xhc3MuaW5zdGFuY2VQb29sID0gW107XG4gIE5ld0tsYXNzLmdldFBvb2xlZCA9IHBvb2xlciB8fCBERUZBVUxUX1BPT0xFUjtcbiAgaWYgKCFOZXdLbGFzcy5wb29sU2l6ZSkge1xuICAgIE5ld0tsYXNzLnBvb2xTaXplID0gREVGQVVMVF9QT09MX1NJWkU7XG4gIH1cbiAgTmV3S2xhc3MucmVsZWFzZSA9IHN0YW5kYXJkUmVsZWFzZXI7XG4gIHJldHVybiBOZXdLbGFzcztcbn07XG5cbnZhciBQb29sZWRDbGFzcyA9IHtcbiAgYWRkUG9vbGluZ1RvOiBhZGRQb29saW5nVG8sXG4gIG9uZUFyZ3VtZW50UG9vbGVyOiBvbmVBcmd1bWVudFBvb2xlcixcbiAgdHdvQXJndW1lbnRQb29sZXI6IHR3b0FyZ3VtZW50UG9vbGVyLFxuICB0aHJlZUFyZ3VtZW50UG9vbGVyOiB0aHJlZUFyZ3VtZW50UG9vbGVyLFxuICBmb3VyQXJndW1lbnRQb29sZXI6IGZvdXJBcmd1bWVudFBvb2xlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb29sZWRDbGFzcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0L2xpYi9Qb29sZWRDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIFxuICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogV0FSTklORzogRE8gTk9UIG1hbnVhbGx5IHJlcXVpcmUgdGhpcyBtb2R1bGUuXG4gKiBUaGlzIGlzIGEgcmVwbGFjZW1lbnQgZm9yIGBpbnZhcmlhbnQoLi4uKWAgdXNlZCBieSB0aGUgZXJyb3IgY29kZSBzeXN0ZW1cbiAqIGFuZCB3aWxsIF9vbmx5XyBiZSByZXF1aXJlZCBieSB0aGUgY29ycmVzcG9uZGluZyBiYWJlbCBwYXNzLlxuICogSXQgYWx3YXlzIHRocm93cy5cbiAqL1xuXG5mdW5jdGlvbiByZWFjdFByb2RJbnZhcmlhbnQoY29kZSkge1xuICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcblxuICB2YXIgbWVzc2FnZSA9ICdNaW5pZmllZCBSZWFjdCBlcnJvciAjJyArIGNvZGUgKyAnOyB2aXNpdCAnICsgJ2h0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PScgKyBjb2RlO1xuXG4gIGZvciAodmFyIGFyZ0lkeCA9IDA7IGFyZ0lkeCA8IGFyZ0NvdW50OyBhcmdJZHgrKykge1xuICAgIG1lc3NhZ2UgKz0gJyZhcmdzW109JyArIGVuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbYXJnSWR4ICsgMV0pO1xuICB9XG5cbiAgbWVzc2FnZSArPSAnIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCcgKyAnIGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLic7XG5cbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgcmVhY3RQcm9kSW52YXJpYW50J3Mgb3duIGZyYW1lXG5cbiAgdGhyb3cgZXJyb3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVhY3RQcm9kSW52YXJpYW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QvbGliL3JlYWN0UHJvZEludmFyaWFudC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHJlcXVpcmUoJy4vUmVhY3RDdXJyZW50T3duZXInKTtcblxudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG52YXIgY2FuRGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL2NhbkRlZmluZVByb3BlcnR5Jyk7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gcmVxdWlyZSgnLi9SZWFjdEVsZW1lbnRTeW1ib2wnKTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcblxudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSkgOiB2b2lkIDA7XG4gICAgfVxuICB9O1xuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKSA6IHZvaWQgMDtcbiAgICB9XG4gIH07XG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBubyBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQGludGVybmFsXG4gKi9cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93IHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcblxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcblxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307XG5cbiAgICAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG4gICAgaWYgKGNhbkRlZmluZVByb3BlcnR5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBzZWxmXG4gICAgICB9KTtcbiAgICAgIC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHNvdXJjZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IGZhbHNlO1xuICAgICAgZWxlbWVudC5fc2VsZiA9IHNlbGY7XG4gICAgICBlbGVtZW50Ll9zb3VyY2UgPSBzb3VyY2U7XG4gICAgfVxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdG9wLWxldmVsLWFwaS5odG1sI3JlYWN0LmNyZWF0ZWVsZW1lbnRcbiAqL1xuUmVhY3RFbGVtZW50LmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7XG5cbiAgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuICB2YXIgcHJvcHMgPSB7fTtcblxuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgfVxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTtcbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wcy4kJHR5cGVvZiA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcHMuJCR0eXBlb2YgIT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIFJlYWN0RWxlbWVudHMgb2YgYSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdG9wLWxldmVsLWFwaS5odG1sI3JlYWN0LmNyZWF0ZWZhY3RvcnlcbiAqL1xuUmVhY3RFbGVtZW50LmNyZWF0ZUZhY3RvcnkgPSBmdW5jdGlvbiAodHlwZSkge1xuICB2YXIgZmFjdG9yeSA9IFJlYWN0RWxlbWVudC5jcmVhdGVFbGVtZW50LmJpbmQobnVsbCwgdHlwZSk7XG4gIC8vIEV4cG9zZSB0aGUgdHlwZSBvbiB0aGUgZmFjdG9yeSBhbmQgdGhlIHByb3RvdHlwZSBzbyB0aGF0IGl0IGNhbiBiZVxuICAvLyBlYXNpbHkgYWNjZXNzZWQgb24gZWxlbWVudHMuIEUuZy4gYDxGb28gLz4udHlwZSA9PT0gRm9vYC5cbiAgLy8gVGhpcyBzaG91bGQgbm90IGJlIG5hbWVkIGBjb25zdHJ1Y3RvcmAgc2luY2UgdGhpcyBtYXkgbm90IGJlIHRoZSBmdW5jdGlvblxuICAvLyB0aGF0IGNyZWF0ZWQgdGhlIGVsZW1lbnQsIGFuZCBpdCBtYXkgbm90IGV2ZW4gYmUgYSBjb25zdHJ1Y3Rvci5cbiAgLy8gTGVnYWN5IGhvb2sgVE9ETzogV2FybiBpZiB0aGlzIGlzIGFjY2Vzc2VkXG4gIGZhY3RvcnkudHlwZSA9IHR5cGU7XG4gIHJldHVybiBmYWN0b3J5O1xufTtcblxuUmVhY3RFbGVtZW50LmNsb25lQW5kUmVwbGFjZUtleSA9IGZ1bmN0aW9uIChvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcblxuICByZXR1cm4gbmV3RWxlbWVudDtcbn07XG5cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY2xvbmVlbGVtZW50XG4gKi9cblJlYWN0RWxlbWVudC5jbG9uZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7XG5cbiAgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmO1xuICAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7XG4gIC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlO1xuXG4gIC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59O1xuXG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgdmFsaWQgY29tcG9uZW50LlxuICogQGZpbmFsXG4gKi9cblJlYWN0RWxlbWVudC5pc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QvbGliL1JlYWN0RWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q3VycmVudE93bmVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QvbGliL1JlYWN0Q3VycmVudE93bmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgfTtcblxuICAgIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9mYmpzL2xpYi93YXJuaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FuRGVmaW5lUHJvcGVydHkgPSBmYWxzZTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHRyeSB7XG4gICAgLy8gJEZsb3dGaXhNZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjg1XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAneCcsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7fSB9KTtcbiAgICBjYW5EZWZpbmVQcm9wZXJ0eSA9IHRydWU7XG4gIH0gY2F0Y2ggKHgpIHtcbiAgICAvLyBJRSB3aWxsIGZhaWwgb24gZGVmaW5lUHJvcGVydHlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbkRlZmluZVByb3BlcnR5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QvbGliL2NhbkRlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudCB0eXBlLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbFsnZm9yJ10gJiYgU3ltYm9sWydmb3InXSgncmVhY3QuZWxlbWVudCcpIHx8IDB4ZWFjNztcblxubW9kdWxlLmV4cG9ydHMgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC9saWIvUmVhY3RFbGVtZW50U3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3Byb2RJbnZhcmlhbnQgPSByZXF1aXJlKCcuL3JlYWN0UHJvZEludmFyaWFudCcpO1xuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSByZXF1aXJlKCcuL1JlYWN0Q3VycmVudE93bmVyJyk7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gcmVxdWlyZSgnLi9SZWFjdEVsZW1lbnRTeW1ib2wnKTtcblxudmFyIGdldEl0ZXJhdG9yRm4gPSByZXF1aXJlKCcuL2dldEl0ZXJhdG9yRm4nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBLZXlFc2NhcGVVdGlscyA9IHJlcXVpcmUoJy4vS2V5RXNjYXBlVXRpbHMnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6JztcblxuLyoqXG4gKiBUaGlzIGlzIGlubGluZWQgZnJvbSBSZWFjdEVsZW1lbnQgc2luY2UgdGhpcyBmaWxlIGlzIHNoYXJlZCBiZXR3ZWVuXG4gKiBpc29tb3JwaGljIGFuZCByZW5kZXJlcnMuIFdlIGNvdWxkIGV4dHJhY3QgdGhpcyB0byBhXG4gKlxuICovXG5cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG5cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGNvbXBvbmVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBjb21wb25lbnQgQSBjb21wb25lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmIChjb21wb25lbnQgJiYgdHlwZW9mIGNvbXBvbmVudCA9PT0gJ29iamVjdCcgJiYgY29tcG9uZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIEtleUVzY2FwZVV0aWxzLmVzY2FwZShjb21wb25lbnQua2V5KTtcbiAgfVxuICAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgbmFtZVNvRmFyLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwgfHwgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgfHxcbiAgLy8gVGhlIGZvbGxvd2luZyBpcyBpbmxpbmVkIGZyb20gUmVhY3RFbGVtZW50LiBUaGlzIG1lYW5zIHdlIGNhbiBvcHRpbWl6ZVxuICAvLyBzb21lIGNoZWNrcy4gUmVhY3QgRmliZXIgYWxzbyBpbmxpbmVzIHRoaXMgbG9naWMgZm9yIHNpbWlsYXIgcHVycG9zZXMuXG4gIHR5cGUgPT09ICdvYmplY3QnICYmIGNoaWxkcmVuLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLFxuICAgIC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93cy5cbiAgICBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkcmVuLCAwKSA6IG5hbWVTb0Zhcik7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG4gICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChjaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpaSA9IDA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdmFyIG1hcHNBc0NoaWxkcmVuQWRkZW5kdW0gPSAnJztcbiAgICAgICAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgICAgICAgICAgdmFyIG1hcHNBc0NoaWxkcmVuT3duZXJOYW1lID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5nZXROYW1lKCk7XG4gICAgICAgICAgICBpZiAobWFwc0FzQ2hpbGRyZW5Pd25lck5hbWUpIHtcbiAgICAgICAgICAgICAgbWFwc0FzQ2hpbGRyZW5BZGRlbmR1bSA9ICcgQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBtYXBzQXNDaGlsZHJlbk93bmVyTmFtZSArICdgLic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGRpZFdhcm5BYm91dE1hcHMsICdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCB5ZXQgZnVsbHkgc3VwcG9ydGVkLiBJdCBpcyBhbiAnICsgJ2V4cGVyaW1lbnRhbCBmZWF0dXJlIHRoYXQgbWlnaHQgYmUgcmVtb3ZlZC4gQ29udmVydCBpdCB0byBhICcgKyAnc2VxdWVuY2UgLyBpdGVyYWJsZSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuJXMnLCBtYXBzQXNDaGlsZHJlbkFkZGVuZHVtKSA6IHZvaWQgMDtcbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICBjaGlsZCA9IGVudHJ5WzFdO1xuICAgICAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIEtleUVzY2FwZVV0aWxzLmVzY2FwZShlbnRyeVswXSkgKyBTVUJTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIDApO1xuICAgICAgICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGFkZGVuZHVtID0gJyc7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBhZGRlbmR1bSA9ICcgSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQgb3Igd3JhcCB0aGUgb2JqZWN0IHVzaW5nIGNyZWF0ZUZyYWdtZW50KG9iamVjdCkgZnJvbSB0aGUgJyArICdSZWFjdCBhZGQtb25zLic7XG4gICAgICAgIGlmIChjaGlsZHJlbi5faXNSZWFjdEVsZW1lbnQpIHtcbiAgICAgICAgICBhZGRlbmR1bSA9ICcgSXQgbG9va3MgbGlrZSB5b3VcXCdyZSB1c2luZyBhbiBlbGVtZW50IGNyZWF0ZWQgYnkgYSBkaWZmZXJlbnQgJyArICd2ZXJzaW9uIG9mIFJlYWN0LiBNYWtlIHN1cmUgdG8gdXNlIG9ubHkgb25lIGNvcHkgb2YgUmVhY3QuJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgICAgICAgIHZhciBuYW1lID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5nZXROYW1lKCk7XG4gICAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGFkZGVuZHVtICs9ICcgQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9IFN0cmluZyhjaGlsZHJlbik7XG4gICAgICAhZmFsc2UgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiAlcykuJXMnLCBjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcsIGFkZGVuZHVtKSA6IF9wcm9kSW52YXJpYW50KCczMScsIGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZywgYWRkZW5kdW0pIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gKlxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICpcbiAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhdmVyc2VBbGxDaGlsZHJlbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0L2xpYi90cmF2ZXJzZUFsbENoaWxkcmVuLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBTeW1ib2wgKi9cblxudmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICpcbiAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICpcbiAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAqICAgICAgIC4uLlxuICogICAgIH1cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBpdGVyYXRvckZuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0SXRlcmF0b3JGbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0L2xpYi9nZXRJdGVyYXRvckZuLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSAoJycgKyBrZXkpLnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG5cbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG5cbi8qKlxuICogVW5lc2NhcGUgYW5kIHVud3JhcCBrZXkgZm9yIGh1bWFuLXJlYWRhYmxlIGRpc3BsYXlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIHVuZXNjYXBlLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgdW5lc2NhcGVkIGtleS5cbiAqL1xuZnVuY3Rpb24gdW5lc2NhcGUoa2V5KSB7XG4gIHZhciB1bmVzY2FwZVJlZ2V4ID0gLyg9MHw9MikvZztcbiAgdmFyIHVuZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPTAnOiAnPScsXG4gICAgJz0yJzogJzonXG4gIH07XG4gIHZhciBrZXlTdWJzdHJpbmcgPSBrZXlbMF0gPT09ICcuJyAmJiBrZXlbMV0gPT09ICckJyA/IGtleS5zdWJzdHJpbmcoMikgOiBrZXkuc3Vic3RyaW5nKDEpO1xuXG4gIHJldHVybiAoJycgKyBrZXlTdWJzdHJpbmcpLnJlcGxhY2UodW5lc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIHVuZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xufVxuXG52YXIgS2V5RXNjYXBlVXRpbHMgPSB7XG4gIGVzY2FwZTogZXNjYXBlLFxuICB1bmVzY2FwZTogdW5lc2NhcGVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gS2V5RXNjYXBlVXRpbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC9saWIvS2V5RXNjYXBlVXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfcHJvZEludmFyaWFudCA9IHJlcXVpcmUoJy4vcmVhY3RQcm9kSW52YXJpYW50Jyk7XG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHJlcXVpcmUoJy4vUmVhY3ROb29wVXBkYXRlUXVldWUnKTtcblxudmFyIGNhbkRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9jYW5EZWZpbmVQcm9wZXJ0eScpO1xudmFyIGVtcHR5T2JqZWN0ID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlPYmplY3QnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5mdW5jdGlvbiBSZWFjdENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuUmVhY3RDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcblxuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblJlYWN0Q29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gICEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuJykgOiBfcHJvZEludmFyaWFudCgnODUnKSA6IHZvaWQgMDtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUpO1xuICBpZiAoY2FsbGJhY2spIHtcbiAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUNhbGxiYWNrKHRoaXMsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblJlYWN0Q29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMpO1xuICBpZiAoY2FsbGJhY2spIHtcbiAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUNhbGxiYWNrKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgaWYgKGNhbkRlZmluZVByb3BlcnR5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhY3RDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKSA6IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0L2xpYi9SZWFjdENvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNS1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICclcyguLi4pOiBDYW4gb25seSB1cGRhdGUgYSBtb3VudGVkIG9yIG1vdW50aW5nIGNvbXBvbmVudC4gJyArICdUaGlzIHVzdWFsbHkgbWVhbnMgeW91IGNhbGxlZCAlcygpIG9uIGFuIHVubW91bnRlZCBjb21wb25lbnQuICcgKyAnVGhpcyBpcyBhIG5vLW9wLiBQbGVhc2UgY2hlY2sgdGhlIGNvZGUgZm9yIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY2FsbGVyTmFtZSwgY29uc3RydWN0b3IgJiYgKGNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IGNvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJykgOiB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRW5xdWV1ZSBhIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciBhbGwgdGhlIHBlbmRpbmcgdXBkYXRlc1xuICAgKiBoYXZlIHByb2Nlc3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdG8gdXNlIGFzIGB0aGlzYCBjb250ZXh0LlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUNhbGxiYWNrOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrKSB7fSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QvbGliL1JlYWN0Tm9vcFVwZGF0ZVF1ZXVlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5T2JqZWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vZmJqcy9saWIvZW1wdHlPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL1JlYWN0Q29tcG9uZW50Jyk7XG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSByZXF1aXJlKCcuL1JlYWN0Tm9vcFVwZGF0ZVF1ZXVlJyk7XG5cbnZhciBlbXB0eU9iamVjdCA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5T2JqZWN0Jyk7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIFJlYWN0UHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAvLyBEdXBsaWNhdGVkIGZyb20gUmVhY3RDb21wb25lbnQuXG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBSZWFjdENvbXBvbmVudC5wcm90b3R5cGU7XG5SZWFjdFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5SZWFjdFB1cmVDb21wb25lbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVhY3RQdXJlQ29tcG9uZW50O1xuLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5fYXNzaWduKFJlYWN0UHVyZUNvbXBvbmVudC5wcm90b3R5cGUsIFJlYWN0Q29tcG9uZW50LnByb3RvdHlwZSk7XG5SZWFjdFB1cmVDb21wb25lbnQucHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFB1cmVDb21wb25lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC9saWIvUmVhY3RQdXJlQ29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3Byb2RJbnZhcmlhbnQgPSByZXF1aXJlKCcuL3JlYWN0UHJvZEludmFyaWFudCcpLFxuICAgIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdENvbXBvbmVudCA9IHJlcXVpcmUoJy4vUmVhY3RDb21wb25lbnQnKTtcbnZhciBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL1JlYWN0RWxlbWVudCcpO1xudmFyIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzID0gcmVxdWlyZSgnLi9SZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcycpO1xudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0gcmVxdWlyZSgnLi9SZWFjdE5vb3BVcGRhdGVRdWV1ZScpO1xuXG52YXIgZW1wdHlPYmplY3QgPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eU9iamVjdCcpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbnZhciBNSVhJTlNfS0VZID0gJ21peGlucyc7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBhbGxvdyB0aGUgY3JlYXRpb24gb2YgYW5vbnltb3VzIGZ1bmN0aW9ucyB3aGljaCBkbyBub3Rcbi8vIGhhdmUgLm5hbWUgc2V0IHRvIHRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSBiZWluZyBhc3NpZ25lZCB0by5cbmZ1bmN0aW9uIGlkZW50aXR5KGZuKSB7XG4gIHJldHVybiBmbjtcbn1cblxuLyoqXG4gKiBQb2xpY2llcyB0aGF0IGRlc2NyaWJlIG1ldGhvZHMgaW4gYFJlYWN0Q2xhc3NJbnRlcmZhY2VgLlxuICovXG5cblxudmFyIGluamVjdGVkTWl4aW5zID0gW107XG5cbi8qKlxuICogQ29tcG9zaXRlIGNvbXBvbmVudHMgYXJlIGhpZ2hlci1sZXZlbCBjb21wb25lbnRzIHRoYXQgY29tcG9zZSBvdGhlciBjb21wb3NpdGVcbiAqIG9yIGhvc3QgY29tcG9uZW50cy5cbiAqXG4gKiBUbyBjcmVhdGUgYSBuZXcgdHlwZSBvZiBgUmVhY3RDbGFzc2AsIHBhc3MgYSBzcGVjaWZpY2F0aW9uIG9mXG4gKiB5b3VyIG5ldyBjbGFzcyB0byBgUmVhY3QuY3JlYXRlQ2xhc3NgLiBUaGUgb25seSByZXF1aXJlbWVudCBvZiB5b3VyIGNsYXNzXG4gKiBzcGVjaWZpY2F0aW9uIGlzIHRoYXQgeW91IGltcGxlbWVudCBhIGByZW5kZXJgIG1ldGhvZC5cbiAqXG4gKiAgIHZhciBNeUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICogICAgICAgcmV0dXJuIDxkaXY+SGVsbG8gV29ybGQ8L2Rpdj47XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiBUaGUgY2xhc3Mgc3BlY2lmaWNhdGlvbiBzdXBwb3J0cyBhIHNwZWNpZmljIHByb3RvY29sIG9mIG1ldGhvZHMgdGhhdCBoYXZlXG4gKiBzcGVjaWFsIG1lYW5pbmcgKGUuZy4gYHJlbmRlcmApLiBTZWUgYFJlYWN0Q2xhc3NJbnRlcmZhY2VgIGZvclxuICogbW9yZSB0aGUgY29tcHJlaGVuc2l2ZSBwcm90b2NvbC4gQW55IG90aGVyIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgaW4gdGhlXG4gKiBjbGFzcyBzcGVjaWZpY2F0aW9uIHdpbGwgYmUgYXZhaWxhYmxlIG9uIHRoZSBwcm90b3R5cGUuXG4gKlxuICogQGludGVyZmFjZSBSZWFjdENsYXNzSW50ZXJmYWNlXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFJlYWN0Q2xhc3NJbnRlcmZhY2UgPSB7XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIE1peGluIG9iamVjdHMgdG8gaW5jbHVkZSB3aGVuIGRlZmluaW5nIHlvdXIgY29tcG9uZW50LlxuICAgKlxuICAgKiBAdHlwZSB7YXJyYXl9XG4gICAqIEBvcHRpb25hbFxuICAgKi9cbiAgbWl4aW5zOiAnREVGSU5FX01BTlknLFxuXG4gIC8qKlxuICAgKiBBbiBvYmplY3QgY29udGFpbmluZyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIHRoYXQgc2hvdWxkIGJlIGRlZmluZWQgb25cbiAgICogdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIGluc3RlYWQgb2YgaXRzIHByb3RvdHlwZSAoc3RhdGljIG1ldGhvZHMpLlxuICAgKlxuICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgKiBAb3B0aW9uYWxcbiAgICovXG4gIHN0YXRpY3M6ICdERUZJTkVfTUFOWScsXG5cbiAgLyoqXG4gICAqIERlZmluaXRpb24gb2YgcHJvcCB0eXBlcyBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqXG4gICAqIEB0eXBlIHtvYmplY3R9XG4gICAqIEBvcHRpb25hbFxuICAgKi9cbiAgcHJvcFR5cGVzOiAnREVGSU5FX01BTlknLFxuXG4gIC8qKlxuICAgKiBEZWZpbml0aW9uIG9mIGNvbnRleHQgdHlwZXMgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKlxuICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgKiBAb3B0aW9uYWxcbiAgICovXG4gIGNvbnRleHRUeXBlczogJ0RFRklORV9NQU5ZJyxcblxuICAvKipcbiAgICogRGVmaW5pdGlvbiBvZiBjb250ZXh0IHR5cGVzIHRoaXMgY29tcG9uZW50IHNldHMgZm9yIGl0cyBjaGlsZHJlbi5cbiAgICpcbiAgICogQHR5cGUge29iamVjdH1cbiAgICogQG9wdGlvbmFsXG4gICAqL1xuICBjaGlsZENvbnRleHRUeXBlczogJ0RFRklORV9NQU5ZJyxcblxuICAvLyA9PT09IERlZmluaXRpb24gbWV0aG9kcyA9PT09XG5cbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuIFZhbHVlcyBpbiB0aGUgbWFwcGluZyB3aWxsIGJlIHNldCBvblxuICAgKiBgdGhpcy5wcm9wc2AgaWYgdGhhdCBwcm9wIGlzIG5vdCBzcGVjaWZpZWQgKGkuZS4gdXNpbmcgYW4gYGluYCBjaGVjaykuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgYmVmb3JlIGBnZXRJbml0aWFsU3RhdGVgIGFuZCB0aGVyZWZvcmUgY2Fubm90IHJlbHlcbiAgICogb24gYHRoaXMuc3RhdGVgIG9yIHVzZSBgdGhpcy5zZXRTdGF0ZWAuXG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH1cbiAgICogQG9wdGlvbmFsXG4gICAqL1xuICBnZXREZWZhdWx0UHJvcHM6ICdERUZJTkVfTUFOWV9NRVJHRUQnLFxuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uY2UgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC4gVGhlIHJldHVybiB2YWx1ZSB3aWxsIGJlIHVzZWRcbiAgICogYXMgdGhlIGluaXRpYWwgdmFsdWUgb2YgYHRoaXMuc3RhdGVgLlxuICAgKlxuICAgKiAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAqICAgICByZXR1cm4ge1xuICAgKiAgICAgICBpc09uOiBmYWxzZSxcbiAgICogICAgICAgZm9vQmF6OiBuZXcgQmF6Rm9vKClcbiAgICogICAgIH1cbiAgICogICB9XG4gICAqXG4gICAqIEByZXR1cm4ge29iamVjdH1cbiAgICogQG9wdGlvbmFsXG4gICAqL1xuICBnZXRJbml0aWFsU3RhdGU6ICdERUZJTkVfTUFOWV9NRVJHRUQnLFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAqIEBvcHRpb25hbFxuICAgKi9cbiAgZ2V0Q2hpbGRDb250ZXh0OiAnREVGSU5FX01BTllfTUVSR0VEJyxcblxuICAvKipcbiAgICogVXNlcyBwcm9wcyBmcm9tIGB0aGlzLnByb3BzYCBhbmQgc3RhdGUgZnJvbSBgdGhpcy5zdGF0ZWAgdG8gcmVuZGVyIHRoZVxuICAgKiBzdHJ1Y3R1cmUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogTm8gZ3VhcmFudGVlcyBhcmUgbWFkZSBhYm91dCB3aGVuIG9yIGhvdyBvZnRlbiB0aGlzIG1ldGhvZCBpcyBpbnZva2VkLCBzb1xuICAgKiBpdCBtdXN0IG5vdCBoYXZlIHNpZGUgZWZmZWN0cy5cbiAgICpcbiAgICogICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgKiAgICAgdmFyIG5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XG4gICAqICAgICByZXR1cm4gPGRpdj5IZWxsbywge25hbWV9ITwvZGl2PjtcbiAgICogICB9XG4gICAqXG4gICAqIEByZXR1cm4ge1JlYWN0Q29tcG9uZW50fVxuICAgKiBAbm9zaWRlZWZmZWN0c1xuICAgKiBAcmVxdWlyZWRcbiAgICovXG4gIHJlbmRlcjogJ0RFRklORV9PTkNFJyxcblxuICAvLyA9PT09IERlbGVnYXRlIG1ldGhvZHMgPT09PVxuXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBpbml0aWFsbHkgY3JlYXRlZCBhbmQgYWJvdXQgdG8gYmUgbW91bnRlZC5cbiAgICogVGhpcyBtYXkgaGF2ZSBzaWRlIGVmZmVjdHMsIGJ1dCBhbnkgZXh0ZXJuYWwgc3Vic2NyaXB0aW9ucyBvciBkYXRhIGNyZWF0ZWRcbiAgICogYnkgdGhpcyBtZXRob2QgbXVzdCBiZSBjbGVhbmVkIHVwIGluIGBjb21wb25lbnRXaWxsVW5tb3VudGAuXG4gICAqXG4gICAqIEBvcHRpb25hbFxuICAgKi9cbiAgY29tcG9uZW50V2lsbE1vdW50OiAnREVGSU5FX01BTlknLFxuXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIGFuZCBoYXMgYSBET00gcmVwcmVzZW50YXRpb24uXG4gICAqIEhvd2V2ZXIsIHRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IHRoZSBET00gbm9kZSBpcyBpbiB0aGUgZG9jdW1lbnQuXG4gICAqXG4gICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIG9wZXJhdGUgb24gdGhlIERPTSB3aGVuIHRoZSBjb21wb25lbnQgaGFzXG4gICAqIGJlZW4gbW91bnRlZCAoaW5pdGlhbGl6ZWQgYW5kIHJlbmRlcmVkKSBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gcm9vdE5vZGUgRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSBjb21wb25lbnQuXG4gICAqIEBvcHRpb25hbFxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQ6ICdERUZJTkVfTUFOWScsXG5cbiAgLyoqXG4gICAqIEludm9rZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgcmVjZWl2ZXMgbmV3IHByb3BzLlxuICAgKlxuICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byByZWFjdCB0byBhIHByb3AgdHJhbnNpdGlvbiBieSB1cGRhdGluZyB0aGVcbiAgICogc3RhdGUgdXNpbmcgYHRoaXMuc2V0U3RhdGVgLiBDdXJyZW50IHByb3BzIGFyZSBhY2Nlc3NlZCB2aWEgYHRoaXMucHJvcHNgLlxuICAgKlxuICAgKiAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKG5leHRQcm9wcywgbmV4dENvbnRleHQpIHtcbiAgICogICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgKiAgICAgICBsaWtlc0luY3JlYXNpbmc6IG5leHRQcm9wcy5saWtlQ291bnQgPiB0aGlzLnByb3BzLmxpa2VDb3VudFxuICAgKiAgICAgfSk7XG4gICAqICAgfVxuICAgKlxuICAgKiBOT1RFOiBUaGVyZSBpcyBubyBlcXVpdmFsZW50IGBjb21wb25lbnRXaWxsUmVjZWl2ZVN0YXRlYC4gQW4gaW5jb21pbmcgcHJvcFxuICAgKiB0cmFuc2l0aW9uIG1heSBjYXVzZSBhIHN0YXRlIGNoYW5nZSwgYnV0IHRoZSBvcHBvc2l0ZSBpcyBub3QgdHJ1ZS4gSWYgeW91XG4gICAqIG5lZWQgaXQsIHlvdSBhcmUgcHJvYmFibHkgbG9va2luZyBmb3IgYGNvbXBvbmVudFdpbGxVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gbmV4dFByb3BzXG4gICAqIEBvcHRpb25hbFxuICAgKi9cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogJ0RFRklORV9NQU5ZJyxcblxuICAvKipcbiAgICogSW52b2tlZCB3aGlsZSBkZWNpZGluZyBpZiB0aGUgY29tcG9uZW50IHNob3VsZCBiZSB1cGRhdGVkIGFzIGEgcmVzdWx0IG9mXG4gICAqIHJlY2VpdmluZyBuZXcgcHJvcHMsIHN0YXRlIGFuZC9vciBjb250ZXh0LlxuICAgKlxuICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBgcmV0dXJuIGZhbHNlYCB3aGVuIHlvdSdyZSBjZXJ0YWluIHRoYXQgdGhlXG4gICAqIHRyYW5zaXRpb24gdG8gdGhlIG5ldyBwcm9wcy9zdGF0ZS9jb250ZXh0IHdpbGwgbm90IHJlcXVpcmUgYSBjb21wb25lbnRcbiAgICogdXBkYXRlLlxuICAgKlxuICAgKiAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24obmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAqICAgICByZXR1cm4gIWVxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykgfHxcbiAgICogICAgICAgIWVxdWFsKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSkgfHxcbiAgICogICAgICAgIWVxdWFsKG5leHRDb250ZXh0LCB0aGlzLmNvbnRleHQpO1xuICAgKiAgIH1cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAgKiBAcGFyYW0gez9vYmplY3R9IG5leHRTdGF0ZVxuICAgKiBAcGFyYW0gez9vYmplY3R9IG5leHRDb250ZXh0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgdXBkYXRlLlxuICAgKiBAb3B0aW9uYWxcbiAgICovXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogJ0RFRklORV9PTkNFJyxcblxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYWJvdXQgdG8gdXBkYXRlIGR1ZSB0byBhIHRyYW5zaXRpb24gZnJvbVxuICAgKiBgdGhpcy5wcm9wc2AsIGB0aGlzLnN0YXRlYCBhbmQgYHRoaXMuY29udGV4dGAgdG8gYG5leHRQcm9wc2AsIGBuZXh0U3RhdGVgXG4gICAqIGFuZCBgbmV4dENvbnRleHRgLlxuICAgKlxuICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBwZXJmb3JtIHByZXBhcmF0aW9uIGJlZm9yZSBhbiB1cGRhdGUgb2NjdXJzLlxuICAgKlxuICAgKiBOT1RFOiBZb3UgKipjYW5ub3QqKiB1c2UgYHRoaXMuc2V0U3RhdGUoKWAgaW4gdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0UHJvcHNcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0U3RhdGVcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0Q29udGV4dFxuICAgKiBAcGFyYW0ge1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb259IHRyYW5zYWN0aW9uXG4gICAqIEBvcHRpb25hbFxuICAgKi9cbiAgY29tcG9uZW50V2lsbFVwZGF0ZTogJ0RFRklORV9NQU5ZJyxcblxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQncyBET00gcmVwcmVzZW50YXRpb24gaGFzIGJlZW4gdXBkYXRlZC5cbiAgICpcbiAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gb3BlcmF0ZSBvbiB0aGUgRE9NIHdoZW4gdGhlIGNvbXBvbmVudCBoYXNcbiAgICogYmVlbiB1cGRhdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJldlByb3BzXG4gICAqIEBwYXJhbSB7P29iamVjdH0gcHJldlN0YXRlXG4gICAqIEBwYXJhbSB7P29iamVjdH0gcHJldkNvbnRleHRcbiAgICogQHBhcmFtIHtET01FbGVtZW50fSByb290Tm9kZSBET00gZWxlbWVudCByZXByZXNlbnRpbmcgdGhlIGNvbXBvbmVudC5cbiAgICogQG9wdGlvbmFsXG4gICAqL1xuICBjb21wb25lbnREaWRVcGRhdGU6ICdERUZJTkVfTUFOWScsXG5cbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIGJlIHJlbW92ZWQgZnJvbSBpdHMgcGFyZW50IGFuZCBoYXZlXG4gICAqIGl0cyBET00gcmVwcmVzZW50YXRpb24gZGVzdHJveWVkLlxuICAgKlxuICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBkZWFsbG9jYXRlIGFueSBleHRlcm5hbCByZXNvdXJjZXMuXG4gICAqXG4gICAqIE5PVEU6IFRoZXJlIGlzIG5vIGBjb21wb25lbnREaWRVbm1vdW50YCBzaW5jZSB5b3VyIGNvbXBvbmVudCB3aWxsIGhhdmUgYmVlblxuICAgKiBkZXN0cm95ZWQgYnkgdGhhdCBwb2ludC5cbiAgICpcbiAgICogQG9wdGlvbmFsXG4gICAqL1xuICBjb21wb25lbnRXaWxsVW5tb3VudDogJ0RFRklORV9NQU5ZJyxcblxuICAvLyA9PT09IEFkdmFuY2VkIG1ldGhvZHMgPT09PVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBjb21wb25lbnQncyBjdXJyZW50bHkgbW91bnRlZCBET00gcmVwcmVzZW50YXRpb24uXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgaW1wbGVtZW50cyBSZWFjdCdzIHJlbmRlcmluZyBhbmQgcmVjb25jaWxpYXRpb24gYWxnb3JpdGhtLlxuICAgKiBTb3BoaXN0aWNhdGVkIGNsaWVudHMgbWF5IHdpc2ggdG8gb3ZlcnJpZGUgdGhpcy5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdFJlY29uY2lsZVRyYW5zYWN0aW9ufSB0cmFuc2FjdGlvblxuICAgKiBAaW50ZXJuYWxcbiAgICogQG92ZXJyaWRhYmxlXG4gICAqL1xuICB1cGRhdGVDb21wb25lbnQ6ICdPVkVSUklERV9CQVNFJ1xuXG59O1xuXG4vKipcbiAqIE1hcHBpbmcgZnJvbSBjbGFzcyBzcGVjaWZpY2F0aW9uIGtleXMgdG8gc3BlY2lhbCBwcm9jZXNzaW5nIGZ1bmN0aW9ucy5cbiAqXG4gKiBBbHRob3VnaCB0aGVzZSBhcmUgZGVjbGFyZWQgbGlrZSBpbnN0YW5jZSBwcm9wZXJ0aWVzIGluIHRoZSBzcGVjaWZpY2F0aW9uXG4gKiB3aGVuIGRlZmluaW5nIGNsYXNzZXMgdXNpbmcgYFJlYWN0LmNyZWF0ZUNsYXNzYCwgdGhleSBhcmUgYWN0dWFsbHkgc3RhdGljXG4gKiBhbmQgYXJlIGFjY2Vzc2libGUgb24gdGhlIGNvbnN0cnVjdG9yIGluc3RlYWQgb2YgdGhlIHByb3RvdHlwZS4gRGVzcGl0ZVxuICogYmVpbmcgc3RhdGljLCB0aGV5IG11c3QgYmUgZGVmaW5lZCBvdXRzaWRlIG9mIHRoZSBcInN0YXRpY3NcIiBrZXkgdW5kZXJcbiAqIHdoaWNoIGFsbCBvdGhlciBzdGF0aWMgbWV0aG9kcyBhcmUgZGVmaW5lZC5cbiAqL1xudmFyIFJFU0VSVkVEX1NQRUNfS0VZUyA9IHtcbiAgZGlzcGxheU5hbWU6IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgZGlzcGxheU5hbWUpIHtcbiAgICBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICB9LFxuICBtaXhpbnM6IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgbWl4aW5zKSB7XG4gICAgaWYgKG1peGlucykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtaXhpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIG1peGluc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjaGlsZENvbnRleHRUeXBlczogZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBjaGlsZENvbnRleHRUeXBlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YWxpZGF0ZVR5cGVEZWYoQ29uc3RydWN0b3IsIGNoaWxkQ29udGV4dFR5cGVzLCAnY2hpbGRDb250ZXh0Jyk7XG4gICAgfVxuICAgIENvbnN0cnVjdG9yLmNoaWxkQ29udGV4dFR5cGVzID0gX2Fzc2lnbih7fSwgQ29uc3RydWN0b3IuY2hpbGRDb250ZXh0VHlwZXMsIGNoaWxkQ29udGV4dFR5cGVzKTtcbiAgfSxcbiAgY29udGV4dFR5cGVzOiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIGNvbnRleHRUeXBlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YWxpZGF0ZVR5cGVEZWYoQ29uc3RydWN0b3IsIGNvbnRleHRUeXBlcywgJ2NvbnRleHQnKTtcbiAgICB9XG4gICAgQ29uc3RydWN0b3IuY29udGV4dFR5cGVzID0gX2Fzc2lnbih7fSwgQ29uc3RydWN0b3IuY29udGV4dFR5cGVzLCBjb250ZXh0VHlwZXMpO1xuICB9LFxuICAvKipcbiAgICogU3BlY2lhbCBjYXNlIGdldERlZmF1bHRQcm9wcyB3aGljaCBzaG91bGQgbW92ZSBpbnRvIHN0YXRpY3MgYnV0IHJlcXVpcmVzXG4gICAqIGF1dG9tYXRpYyBtZXJnaW5nLlxuICAgKi9cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIGdldERlZmF1bHRQcm9wcykge1xuICAgIGlmIChDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgIENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcyA9IGNyZWF0ZU1lcmdlZFJlc3VsdEZ1bmN0aW9uKENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcywgZ2V0RGVmYXVsdFByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzID0gZ2V0RGVmYXVsdFByb3BzO1xuICAgIH1cbiAgfSxcbiAgcHJvcFR5cGVzOiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3BUeXBlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YWxpZGF0ZVR5cGVEZWYoQ29uc3RydWN0b3IsIHByb3BUeXBlcywgJ3Byb3AnKTtcbiAgICB9XG4gICAgQ29uc3RydWN0b3IucHJvcFR5cGVzID0gX2Fzc2lnbih7fSwgQ29uc3RydWN0b3IucHJvcFR5cGVzLCBwcm9wVHlwZXMpO1xuICB9LFxuICBzdGF0aWNzOiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHN0YXRpY3MpIHtcbiAgICBtaXhTdGF0aWNTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3RhdGljcyk7XG4gIH0sXG4gIGF1dG9iaW5kOiBmdW5jdGlvbiAoKSB7fSB9O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVR5cGVEZWYoQ29uc3RydWN0b3IsIHR5cGVEZWYsIGxvY2F0aW9uKSB7XG4gIGZvciAodmFyIHByb3BOYW1lIGluIHR5cGVEZWYpIHtcbiAgICBpZiAodHlwZURlZi5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgIC8vIHVzZSBhIHdhcm5pbmcgaW5zdGVhZCBvZiBhbiBpbnZhcmlhbnQgc28gY29tcG9uZW50c1xuICAgICAgLy8gZG9uJ3Qgc2hvdyB1cCBpbiBwcm9kIGJ1dCBvbmx5IGluIF9fREVWX19cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKHR5cGVvZiB0eXBlRGVmW3Byb3BOYW1lXSA9PT0gJ2Z1bmN0aW9uJywgJyVzOiAlcyB0eXBlIGAlc2AgaXMgaW52YWxpZDsgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gJyArICdSZWFjdC5Qcm9wVHlwZXMuJywgQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgJ1JlYWN0Q2xhc3MnLCBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lc1tsb2NhdGlvbl0sIHByb3BOYW1lKSA6IHZvaWQgMDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVNZXRob2RPdmVycmlkZShpc0FscmVhZHlEZWZpbmVkLCBuYW1lKSB7XG4gIHZhciBzcGVjUG9saWN5ID0gUmVhY3RDbGFzc0ludGVyZmFjZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IFJlYWN0Q2xhc3NJbnRlcmZhY2VbbmFtZV0gOiBudWxsO1xuXG4gIC8vIERpc2FsbG93IG92ZXJyaWRpbmcgb2YgYmFzZSBjbGFzcyBtZXRob2RzIHVubGVzcyBleHBsaWNpdGx5IGFsbG93ZWQuXG4gIGlmIChSZWFjdENsYXNzTWl4aW4uaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAhKHNwZWNQb2xpY3kgPT09ICdPVkVSUklERV9CQVNFJykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3RDbGFzc0ludGVyZmFjZTogWW91IGFyZSBhdHRlbXB0aW5nIHRvIG92ZXJyaWRlIGAlc2AgZnJvbSB5b3VyIGNsYXNzIHNwZWNpZmljYXRpb24uIEVuc3VyZSB0aGF0IHlvdXIgbWV0aG9kIG5hbWVzIGRvIG5vdCBvdmVybGFwIHdpdGggUmVhY3QgbWV0aG9kcy4nLCBuYW1lKSA6IF9wcm9kSW52YXJpYW50KCc3MycsIG5hbWUpIDogdm9pZCAwO1xuICB9XG5cbiAgLy8gRGlzYWxsb3cgZGVmaW5pbmcgbWV0aG9kcyBtb3JlIHRoYW4gb25jZSB1bmxlc3MgZXhwbGljaXRseSBhbGxvd2VkLlxuICBpZiAoaXNBbHJlYWR5RGVmaW5lZCkge1xuICAgICEoc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZJyB8fCBzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTllfTUVSR0VEJykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3RDbGFzc0ludGVyZmFjZTogWW91IGFyZSBhdHRlbXB0aW5nIHRvIGRlZmluZSBgJXNgIG9uIHlvdXIgY29tcG9uZW50IG1vcmUgdGhhbiBvbmNlLiBUaGlzIGNvbmZsaWN0IG1heSBiZSBkdWUgdG8gYSBtaXhpbi4nLCBuYW1lKSA6IF9wcm9kSW52YXJpYW50KCc3NCcsIG5hbWUpIDogdm9pZCAwO1xuICB9XG59XG5cbi8qKlxuICogTWl4aW4gaGVscGVyIHdoaWNoIGhhbmRsZXMgcG9saWN5IHZhbGlkYXRpb24gYW5kIHJlc2VydmVkXG4gKiBzcGVjaWZpY2F0aW9uIGtleXMgd2hlbiBidWlsZGluZyBSZWFjdCBjbGFzc2VzLlxuICovXG5mdW5jdGlvbiBtaXhTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3BlYykge1xuICBpZiAoIXNwZWMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHR5cGVvZlNwZWMgPSB0eXBlb2Ygc3BlYztcbiAgICAgIHZhciBpc01peGluVmFsaWQgPSB0eXBlb2ZTcGVjID09PSAnb2JqZWN0JyAmJiBzcGVjICE9PSBudWxsO1xuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhpc01peGluVmFsaWQsICclczogWW91XFwncmUgYXR0ZW1wdGluZyB0byBpbmNsdWRlIGEgbWl4aW4gdGhhdCBpcyBlaXRoZXIgbnVsbCAnICsgJ29yIG5vdCBhbiBvYmplY3QuIENoZWNrIHRoZSBtaXhpbnMgaW5jbHVkZWQgYnkgdGhlIGNvbXBvbmVudCwgJyArICdhcyB3ZWxsIGFzIGFueSBtaXhpbnMgdGhleSBpbmNsdWRlIHRoZW1zZWx2ZXMuICcgKyAnRXhwZWN0ZWQgb2JqZWN0IGJ1dCBnb3QgJXMuJywgQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgJ1JlYWN0Q2xhc3MnLCBzcGVjID09PSBudWxsID8gbnVsbCA6IHR5cGVvZlNwZWMpIDogdm9pZCAwO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gICEodHlwZW9mIHNwZWMgIT09ICdmdW5jdGlvbicpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0Q2xhc3M6IFlvdVxcJ3JlIGF0dGVtcHRpbmcgdG8gdXNlIGEgY29tcG9uZW50IGNsYXNzIG9yIGZ1bmN0aW9uIGFzIGEgbWl4aW4uIEluc3RlYWQsIGp1c3QgdXNlIGEgcmVndWxhciBvYmplY3QuJykgOiBfcHJvZEludmFyaWFudCgnNzUnKSA6IHZvaWQgMDtcbiAgISFSZWFjdEVsZW1lbnQuaXNWYWxpZEVsZW1lbnQoc3BlYykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3RDbGFzczogWW91XFwncmUgYXR0ZW1wdGluZyB0byB1c2UgYSBjb21wb25lbnQgYXMgYSBtaXhpbi4gSW5zdGVhZCwganVzdCB1c2UgYSByZWd1bGFyIG9iamVjdC4nKSA6IF9wcm9kSW52YXJpYW50KCc3NicpIDogdm9pZCAwO1xuXG4gIHZhciBwcm90byA9IENvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgdmFyIGF1dG9CaW5kUGFpcnMgPSBwcm90by5fX3JlYWN0QXV0b0JpbmRQYWlycztcblxuICAvLyBCeSBoYW5kbGluZyBtaXhpbnMgYmVmb3JlIGFueSBvdGhlciBwcm9wZXJ0aWVzLCB3ZSBlbnN1cmUgdGhlIHNhbWVcbiAgLy8gY2hhaW5pbmcgb3JkZXIgaXMgYXBwbGllZCB0byBtZXRob2RzIHdpdGggREVGSU5FX01BTlkgcG9saWN5LCB3aGV0aGVyXG4gIC8vIG1peGlucyBhcmUgbGlzdGVkIGJlZm9yZSBvciBhZnRlciB0aGVzZSBtZXRob2RzIGluIHRoZSBzcGVjLlxuICBpZiAoc3BlYy5oYXNPd25Qcm9wZXJ0eShNSVhJTlNfS0VZKSkge1xuICAgIFJFU0VSVkVEX1NQRUNfS0VZUy5taXhpbnMoQ29uc3RydWN0b3IsIHNwZWMubWl4aW5zKTtcbiAgfVxuXG4gIGZvciAodmFyIG5hbWUgaW4gc3BlYykge1xuICAgIGlmICghc3BlYy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09IE1JWElOU19LRVkpIHtcbiAgICAgIC8vIFdlIGhhdmUgYWxyZWFkeSBoYW5kbGVkIG1peGlucyBpbiBhIHNwZWNpYWwgY2FzZSBhYm92ZS5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBwcm9wZXJ0eSA9IHNwZWNbbmFtZV07XG4gICAgdmFyIGlzQWxyZWFkeURlZmluZWQgPSBwcm90by5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICB2YWxpZGF0ZU1ldGhvZE92ZXJyaWRlKGlzQWxyZWFkeURlZmluZWQsIG5hbWUpO1xuXG4gICAgaWYgKFJFU0VSVkVEX1NQRUNfS0VZUy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgUkVTRVJWRURfU1BFQ19LRVlTW25hbWVdKENvbnN0cnVjdG9yLCBwcm9wZXJ0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNldHVwIG1ldGhvZHMgb24gcHJvdG90eXBlOlxuICAgICAgLy8gVGhlIGZvbGxvd2luZyBtZW1iZXIgbWV0aG9kcyBzaG91bGQgbm90IGJlIGF1dG9tYXRpY2FsbHkgYm91bmQ6XG4gICAgICAvLyAxLiBFeHBlY3RlZCBSZWFjdENsYXNzIG1ldGhvZHMgKGluIHRoZSBcImludGVyZmFjZVwiKS5cbiAgICAgIC8vIDIuIE92ZXJyaWRkZW4gbWV0aG9kcyAodGhhdCB3ZXJlIG1peGVkIGluKS5cbiAgICAgIHZhciBpc1JlYWN0Q2xhc3NNZXRob2QgPSBSZWFjdENsYXNzSW50ZXJmYWNlLmhhc093blByb3BlcnR5KG5hbWUpO1xuICAgICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbic7XG4gICAgICB2YXIgc2hvdWxkQXV0b0JpbmQgPSBpc0Z1bmN0aW9uICYmICFpc1JlYWN0Q2xhc3NNZXRob2QgJiYgIWlzQWxyZWFkeURlZmluZWQgJiYgc3BlYy5hdXRvYmluZCAhPT0gZmFsc2U7XG5cbiAgICAgIGlmIChzaG91bGRBdXRvQmluZCkge1xuICAgICAgICBhdXRvQmluZFBhaXJzLnB1c2gobmFtZSwgcHJvcGVydHkpO1xuICAgICAgICBwcm90b1tuYW1lXSA9IHByb3BlcnR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzQWxyZWFkeURlZmluZWQpIHtcbiAgICAgICAgICB2YXIgc3BlY1BvbGljeSA9IFJlYWN0Q2xhc3NJbnRlcmZhY2VbbmFtZV07XG5cbiAgICAgICAgICAvLyBUaGVzZSBjYXNlcyBzaG91bGQgYWxyZWFkeSBiZSBjYXVnaHQgYnkgdmFsaWRhdGVNZXRob2RPdmVycmlkZS5cbiAgICAgICAgICAhKGlzUmVhY3RDbGFzc01ldGhvZCAmJiAoc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZX01FUkdFRCcgfHwgc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZJykpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0Q2xhc3M6IFVuZXhwZWN0ZWQgc3BlYyBwb2xpY3kgJXMgZm9yIGtleSAlcyB3aGVuIG1peGluZyBpbiBjb21wb25lbnQgc3BlY3MuJywgc3BlY1BvbGljeSwgbmFtZSkgOiBfcHJvZEludmFyaWFudCgnNzcnLCBzcGVjUG9saWN5LCBuYW1lKSA6IHZvaWQgMDtcblxuICAgICAgICAgIC8vIEZvciBtZXRob2RzIHdoaWNoIGFyZSBkZWZpbmVkIG1vcmUgdGhhbiBvbmNlLCBjYWxsIHRoZSBleGlzdGluZ1xuICAgICAgICAgIC8vIG1ldGhvZHMgYmVmb3JlIGNhbGxpbmcgdGhlIG5ldyBwcm9wZXJ0eSwgbWVyZ2luZyBpZiBhcHByb3ByaWF0ZS5cbiAgICAgICAgICBpZiAoc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZX01FUkdFRCcpIHtcbiAgICAgICAgICAgIHByb3RvW25hbWVdID0gY3JlYXRlTWVyZ2VkUmVzdWx0RnVuY3Rpb24ocHJvdG9bbmFtZV0sIHByb3BlcnR5KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWScpIHtcbiAgICAgICAgICAgIHByb3RvW25hbWVdID0gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKHByb3RvW25hbWVdLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3RvW25hbWVdID0gcHJvcGVydHk7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIEFkZCB2ZXJib3NlIGRpc3BsYXlOYW1lIHRvIHRoZSBmdW5jdGlvbiwgd2hpY2ggaGVscHMgd2hlbiBsb29raW5nXG4gICAgICAgICAgICAvLyBhdCBwcm9maWxpbmcgdG9vbHMuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nICYmIHNwZWMuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICAgICAgcHJvdG9bbmFtZV0uZGlzcGxheU5hbWUgPSBzcGVjLmRpc3BsYXlOYW1lICsgJ18nICsgbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWl4U3RhdGljU3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIHN0YXRpY3MpIHtcbiAgaWYgKCFzdGF0aWNzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAodmFyIG5hbWUgaW4gc3RhdGljcykge1xuICAgIHZhciBwcm9wZXJ0eSA9IHN0YXRpY3NbbmFtZV07XG4gICAgaWYgKCFzdGF0aWNzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgaXNSZXNlcnZlZCA9IG5hbWUgaW4gUkVTRVJWRURfU1BFQ19LRVlTO1xuICAgICEhaXNSZXNlcnZlZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdENsYXNzOiBZb3UgYXJlIGF0dGVtcHRpbmcgdG8gZGVmaW5lIGEgcmVzZXJ2ZWQgcHJvcGVydHksIGAlc2AsIHRoYXQgc2hvdWxkblxcJ3QgYmUgb24gdGhlIFwic3RhdGljc1wiIGtleS4gRGVmaW5lIGl0IGFzIGFuIGluc3RhbmNlIHByb3BlcnR5IGluc3RlYWQ7IGl0IHdpbGwgc3RpbGwgYmUgYWNjZXNzaWJsZSBvbiB0aGUgY29uc3RydWN0b3IuJywgbmFtZSkgOiBfcHJvZEludmFyaWFudCgnNzgnLCBuYW1lKSA6IHZvaWQgMDtcblxuICAgIHZhciBpc0luaGVyaXRlZCA9IG5hbWUgaW4gQ29uc3RydWN0b3I7XG4gICAgISFpc0luaGVyaXRlZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdENsYXNzOiBZb3UgYXJlIGF0dGVtcHRpbmcgdG8gZGVmaW5lIGAlc2Agb24geW91ciBjb21wb25lbnQgbW9yZSB0aGFuIG9uY2UuIFRoaXMgY29uZmxpY3QgbWF5IGJlIGR1ZSB0byBhIG1peGluLicsIG5hbWUpIDogX3Byb2RJbnZhcmlhbnQoJzc5JywgbmFtZSkgOiB2b2lkIDA7XG4gICAgQ29uc3RydWN0b3JbbmFtZV0gPSBwcm9wZXJ0eTtcbiAgfVxufVxuXG4vKipcbiAqIE1lcmdlIHR3byBvYmplY3RzLCBidXQgdGhyb3cgaWYgYm90aCBjb250YWluIHRoZSBzYW1lIGtleS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb25lIFRoZSBmaXJzdCBvYmplY3QsIHdoaWNoIGlzIG11dGF0ZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gdHdvIFRoZSBzZWNvbmQgb2JqZWN0XG4gKiBAcmV0dXJuIHtvYmplY3R9IG9uZSBhZnRlciBpdCBoYXMgYmVlbiBtdXRhdGVkIHRvIGNvbnRhaW4gZXZlcnl0aGluZyBpbiB0d28uXG4gKi9cbmZ1bmN0aW9uIG1lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMob25lLCB0d28pIHtcbiAgIShvbmUgJiYgdHdvICYmIHR5cGVvZiBvbmUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB0d28gPT09ICdvYmplY3QnKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKCk6IENhbm5vdCBtZXJnZSBub24tb2JqZWN0cy4nKSA6IF9wcm9kSW52YXJpYW50KCc4MCcpIDogdm9pZCAwO1xuXG4gIGZvciAodmFyIGtleSBpbiB0d28pIHtcbiAgICBpZiAodHdvLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICEob25lW2tleV0gPT09IHVuZGVmaW5lZCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnbWVyZ2VJbnRvV2l0aE5vRHVwbGljYXRlS2V5cygpOiBUcmllZCB0byBtZXJnZSB0d28gb2JqZWN0cyB3aXRoIHRoZSBzYW1lIGtleTogYCVzYC4gVGhpcyBjb25mbGljdCBtYXkgYmUgZHVlIHRvIGEgbWl4aW47IGluIHBhcnRpY3VsYXIsIHRoaXMgbWF5IGJlIGNhdXNlZCBieSB0d28gZ2V0SW5pdGlhbFN0YXRlKCkgb3IgZ2V0RGVmYXVsdFByb3BzKCkgbWV0aG9kcyByZXR1cm5pbmcgb2JqZWN0cyB3aXRoIGNsYXNoaW5nIGtleXMuJywga2V5KSA6IF9wcm9kSW52YXJpYW50KCc4MScsIGtleSkgOiB2b2lkIDA7XG4gICAgICBvbmVba2V5XSA9IHR3b1trZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb25lO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgdHdvIGZ1bmN0aW9ucyBhbmQgbWVyZ2VzIHRoZWlyIHJldHVybiB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25lIEZ1bmN0aW9uIHRvIGludm9rZSBmaXJzdC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHR3byBGdW5jdGlvbiB0byBpbnZva2Ugc2Vjb25kLlxuICogQHJldHVybiB7ZnVuY3Rpb259IEZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0aGUgdHdvIGFyZ3VtZW50IGZ1bmN0aW9ucy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU1lcmdlZFJlc3VsdEZ1bmN0aW9uKG9uZSwgdHdvKSB7XG4gIHJldHVybiBmdW5jdGlvbiBtZXJnZWRSZXN1bHQoKSB7XG4gICAgdmFyIGEgPSBvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB2YXIgYiA9IHR3by5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChhID09IG51bGwpIHtcbiAgICAgIHJldHVybiBiO1xuICAgIH0gZWxzZSBpZiAoYiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgdmFyIGMgPSB7fTtcbiAgICBtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKGMsIGEpO1xuICAgIG1lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMoYywgYik7XG4gICAgcmV0dXJuIGM7XG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0d28gZnVuY3Rpb25zIGFuZCBpZ25vcmVzIHRoZWlyIHJldHVybiB2YWxlcy5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbmUgRnVuY3Rpb24gdG8gaW52b2tlIGZpcnN0LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gdHdvIEZ1bmN0aW9uIHRvIGludm9rZSBzZWNvbmQuXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn0gRnVuY3Rpb24gdGhhdCBpbnZva2VzIHRoZSB0d28gYXJndW1lbnQgZnVuY3Rpb25zLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKG9uZSwgdHdvKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdHdvLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbi8qKlxuICogQmluZHMgYSBtZXRob2QgdG8gdGhlIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29tcG9uZW50IENvbXBvbmVudCB3aG9zZSBtZXRob2QgaXMgZ29pbmcgdG8gYmUgYm91bmQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2QgTWV0aG9kIHRvIGJlIGJvdW5kLlxuICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBib3VuZCBtZXRob2QuXG4gKi9cbmZ1bmN0aW9uIGJpbmRBdXRvQmluZE1ldGhvZChjb21wb25lbnQsIG1ldGhvZCkge1xuICB2YXIgYm91bmRNZXRob2QgPSBtZXRob2QuYmluZChjb21wb25lbnQpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZENvbnRleHQgPSBjb21wb25lbnQ7XG4gICAgYm91bmRNZXRob2QuX19yZWFjdEJvdW5kTWV0aG9kID0gbWV0aG9kO1xuICAgIGJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZEFyZ3VtZW50cyA9IG51bGw7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IuZGlzcGxheU5hbWU7XG4gICAgdmFyIF9iaW5kID0gYm91bmRNZXRob2QuYmluZDtcbiAgICBib3VuZE1ldGhvZC5iaW5kID0gZnVuY3Rpb24gKG5ld1RoaXMpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgLy8gVXNlciBpcyB0cnlpbmcgdG8gYmluZCgpIGFuIGF1dG9ib3VuZCBtZXRob2Q7IHdlIGVmZmVjdGl2ZWx5IHdpbGxcbiAgICAgIC8vIGlnbm9yZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgdGhhdCB0aGUgdXNlciBpcyB0cnlpbmcgdG8gdXNlLCBzb1xuICAgICAgLy8gbGV0J3Mgd2Fybi5cbiAgICAgIGlmIChuZXdUaGlzICE9PSBjb21wb25lbnQgJiYgbmV3VGhpcyAhPT0gbnVsbCkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ2JpbmQoKTogUmVhY3QgY29tcG9uZW50IG1ldGhvZHMgbWF5IG9ubHkgYmUgYm91bmQgdG8gdGhlICcgKyAnY29tcG9uZW50IGluc3RhbmNlLiBTZWUgJXMnLCBjb21wb25lbnROYW1lKSA6IHZvaWQgMDtcbiAgICAgIH0gZWxzZSBpZiAoIWFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnYmluZCgpOiBZb3UgYXJlIGJpbmRpbmcgYSBjb21wb25lbnQgbWV0aG9kIHRvIHRoZSBjb21wb25lbnQuICcgKyAnUmVhY3QgZG9lcyB0aGlzIGZvciB5b3UgYXV0b21hdGljYWxseSBpbiBhIGhpZ2gtcGVyZm9ybWFuY2UgJyArICd3YXksIHNvIHlvdSBjYW4gc2FmZWx5IHJlbW92ZSB0aGlzIGNhbGwuIFNlZSAlcycsIGNvbXBvbmVudE5hbWUpIDogdm9pZCAwO1xuICAgICAgICByZXR1cm4gYm91bmRNZXRob2Q7XG4gICAgICB9XG4gICAgICB2YXIgcmVib3VuZE1ldGhvZCA9IF9iaW5kLmFwcGx5KGJvdW5kTWV0aG9kLCBhcmd1bWVudHMpO1xuICAgICAgcmVib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRDb250ZXh0ID0gY29tcG9uZW50O1xuICAgICAgcmVib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRNZXRob2QgPSBtZXRob2Q7XG4gICAgICByZWJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZEFyZ3VtZW50cyA9IGFyZ3M7XG4gICAgICByZXR1cm4gcmVib3VuZE1ldGhvZDtcbiAgICB9O1xuICB9XG4gIHJldHVybiBib3VuZE1ldGhvZDtcbn1cblxuLyoqXG4gKiBCaW5kcyBhbGwgYXV0by1ib3VuZCBtZXRob2RzIGluIGEgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgQ29tcG9uZW50IHdob3NlIG1ldGhvZCBpcyBnb2luZyB0byBiZSBib3VuZC5cbiAqL1xuZnVuY3Rpb24gYmluZEF1dG9CaW5kTWV0aG9kcyhjb21wb25lbnQpIHtcbiAgdmFyIHBhaXJzID0gY29tcG9uZW50Ll9fcmVhY3RBdXRvQmluZFBhaXJzO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgdmFyIGF1dG9CaW5kS2V5ID0gcGFpcnNbaV07XG4gICAgdmFyIG1ldGhvZCA9IHBhaXJzW2kgKyAxXTtcbiAgICBjb21wb25lbnRbYXV0b0JpbmRLZXldID0gYmluZEF1dG9CaW5kTWV0aG9kKGNvbXBvbmVudCwgbWV0aG9kKTtcbiAgfVxufVxuXG4vKipcbiAqIEFkZCBtb3JlIHRvIHRoZSBSZWFjdENsYXNzIGJhc2UgY2xhc3MuIFRoZXNlIGFyZSBhbGwgbGVnYWN5IGZlYXR1cmVzIGFuZFxuICogdGhlcmVmb3JlIG5vdCBhbHJlYWR5IHBhcnQgb2YgdGhlIG1vZGVybiBSZWFjdENvbXBvbmVudC5cbiAqL1xudmFyIFJlYWN0Q2xhc3NNaXhpbiA9IHtcblxuICAvKipcbiAgICogVE9ETzogVGhpcyB3aWxsIGJlIGRlcHJlY2F0ZWQgYmVjYXVzZSBzdGF0ZSBzaG91bGQgYWx3YXlzIGtlZXAgYSBjb25zaXN0ZW50XG4gICAqIHR5cGUgc2lnbmF0dXJlIGFuZCB0aGUgb25seSB1c2UgY2FzZSBmb3IgdGhpcywgaXMgdG8gYXZvaWQgdGhhdC5cbiAgICovXG4gIHJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKG5ld1N0YXRlLCBjYWxsYmFjaykge1xuICAgIHRoaXMudXBkYXRlci5lbnF1ZXVlUmVwbGFjZVN0YXRlKHRoaXMsIG5ld1N0YXRlKTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMudXBkYXRlci5lbnF1ZXVlQ2FsbGJhY2sodGhpcywgY2FsbGJhY2ssICdyZXBsYWNlU3RhdGUnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVyLmlzTW91bnRlZCh0aGlzKTtcbiAgfVxufTtcblxudmFyIFJlYWN0Q2xhc3NDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7fTtcbl9hc3NpZ24oUmVhY3RDbGFzc0NvbXBvbmVudC5wcm90b3R5cGUsIFJlYWN0Q29tcG9uZW50LnByb3RvdHlwZSwgUmVhY3RDbGFzc01peGluKTtcblxuLyoqXG4gKiBNb2R1bGUgZm9yIGNyZWF0aW5nIGNvbXBvc2l0ZSBjb21wb25lbnRzLlxuICpcbiAqIEBjbGFzcyBSZWFjdENsYXNzXG4gKi9cbnZhciBSZWFjdENsYXNzID0ge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY29tcG9zaXRlIGNvbXBvbmVudCBjbGFzcyBnaXZlbiBhIGNsYXNzIHNwZWNpZmljYXRpb24uXG4gICAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdC5jcmVhdGVjbGFzc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gc3BlYyBDbGFzcyBzcGVjaWZpY2F0aW9uICh3aGljaCBtdXN0IGRlZmluZSBgcmVuZGVyYCkuXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBDb21wb25lbnQgY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNyZWF0ZUNsYXNzOiBmdW5jdGlvbiAoc3BlYykge1xuICAgIC8vIFRvIGtlZXAgb3VyIHdhcm5pbmdzIG1vcmUgdW5kZXJzdGFuZGFibGUsIHdlJ2xsIHVzZSBhIGxpdHRsZSBoYWNrIGhlcmUgdG9cbiAgICAvLyBlbnN1cmUgdGhhdCBDb25zdHJ1Y3Rvci5uYW1lICE9PSAnQ29uc3RydWN0b3InLiBUaGlzIG1ha2VzIHN1cmUgd2UgZG9uJ3RcbiAgICAvLyB1bm5lY2Vzc2FyaWx5IGlkZW50aWZ5IGEgY2xhc3Mgd2l0aG91dCBkaXNwbGF5TmFtZSBhcyAnQ29uc3RydWN0b3InLlxuICAgIHZhciBDb25zdHJ1Y3RvciA9IGlkZW50aXR5KGZ1bmN0aW9uIChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAgICAgLy8gVGhpcyBjb25zdHJ1Y3RvciBnZXRzIG92ZXJyaWRkZW4gYnkgbW9ja3MuIFRoZSBhcmd1bWVudCBpcyB1c2VkXG4gICAgICAvLyBieSBtb2NrcyB0byBhc3NlcnQgb24gd2hhdCBnZXRzIG1vdW50ZWQuXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKHRoaXMgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvciwgJ1NvbWV0aGluZyBpcyBjYWxsaW5nIGEgUmVhY3QgY29tcG9uZW50IGRpcmVjdGx5LiBVc2UgYSBmYWN0b3J5IG9yICcgKyAnSlNYIGluc3RlYWQuIFNlZTogaHR0cHM6Ly9mYi5tZS9yZWFjdC1sZWdhY3lmYWN0b3J5JykgOiB2b2lkIDA7XG4gICAgICB9XG5cbiAgICAgIC8vIFdpcmUgdXAgYXV0by1iaW5kaW5nXG4gICAgICBpZiAodGhpcy5fX3JlYWN0QXV0b0JpbmRQYWlycy5sZW5ndGgpIHtcbiAgICAgICAgYmluZEF1dG9CaW5kTWV0aG9kcyh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAgICAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcblxuICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XG5cbiAgICAgIC8vIFJlYWN0Q2xhc3NlcyBkb2Vzbid0IGhhdmUgY29uc3RydWN0b3JzLiBJbnN0ZWFkLCB0aGV5IHVzZSB0aGVcbiAgICAgIC8vIGdldEluaXRpYWxTdGF0ZSBhbmQgY29tcG9uZW50V2lsbE1vdW50IG1ldGhvZHMgZm9yIGluaXRpYWxpemF0aW9uLlxuXG4gICAgICB2YXIgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUgPyB0aGlzLmdldEluaXRpYWxTdGF0ZSgpIDogbnVsbDtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIC8vIFdlIGFsbG93IGF1dG8tbW9ja3MgdG8gcHJvY2VlZCBhcyBpZiB0aGV5J3JlIHJldHVybmluZyBudWxsLlxuICAgICAgICBpZiAoaW5pdGlhbFN0YXRlID09PSB1bmRlZmluZWQgJiYgdGhpcy5nZXRJbml0aWFsU3RhdGUuX2lzTW9ja0Z1bmN0aW9uKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBwcm9iYWJseSBiYWQgcHJhY3RpY2UuIENvbnNpZGVyIHdhcm5pbmcgaGVyZSBhbmRcbiAgICAgICAgICAvLyBkZXByZWNhdGluZyB0aGlzIGNvbnZlbmllbmNlLlxuICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICEodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaW5pdGlhbFN0YXRlKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnJXMuZ2V0SW5pdGlhbFN0YXRlKCk6IG11c3QgcmV0dXJuIGFuIG9iamVjdCBvciBudWxsJywgQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgJ1JlYWN0Q29tcG9zaXRlQ29tcG9uZW50JykgOiBfcHJvZEludmFyaWFudCgnODInLCBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCAnUmVhY3RDb21wb3NpdGVDb21wb25lbnQnKSA6IHZvaWQgMDtcblxuICAgICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICB9KTtcbiAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBuZXcgUmVhY3RDbGFzc0NvbXBvbmVudCgpO1xuICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZS5fX3JlYWN0QXV0b0JpbmRQYWlycyA9IFtdO1xuXG4gICAgaW5qZWN0ZWRNaXhpbnMuZm9yRWFjaChtaXhTcGVjSW50b0NvbXBvbmVudC5iaW5kKG51bGwsIENvbnN0cnVjdG9yKSk7XG5cbiAgICBtaXhTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3BlYyk7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBkZWZhdWx0UHJvcHMgcHJvcGVydHkgYWZ0ZXIgYWxsIG1peGlucyBoYXZlIGJlZW4gbWVyZ2VkLlxuICAgIGlmIChDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgIENvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyA9IENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcygpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyBUaGlzIGlzIGEgdGFnIHRvIGluZGljYXRlIHRoYXQgdGhlIHVzZSBvZiB0aGVzZSBtZXRob2QgbmFtZXMgaXMgb2ssXG4gICAgICAvLyBzaW5jZSBpdCdzIHVzZWQgd2l0aCBjcmVhdGVDbGFzcy4gSWYgaXQncyBub3QsIHRoZW4gaXQncyBsaWtlbHkgYVxuICAgICAgLy8gbWlzdGFrZSBzbyB3ZSdsbCB3YXJuIHlvdSB0byB1c2UgdGhlIHN0YXRpYyBwcm9wZXJ0eSwgcHJvcGVydHlcbiAgICAgIC8vIGluaXRpYWxpemVyIG9yIGNvbnN0cnVjdG9yIHJlc3BlY3RpdmVseS5cbiAgICAgIGlmIChDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkID0ge307XG4gICAgICB9XG4gICAgICBpZiAoQ29uc3RydWN0b3IucHJvdG90eXBlLmdldEluaXRpYWxTdGF0ZSkge1xuICAgICAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZ2V0SW5pdGlhbFN0YXRlLmlzUmVhY3RDbGFzc0FwcHJvdmVkID0ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgIUNvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW5kZXIgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnY3JlYXRlQ2xhc3MoLi4uKTogQ2xhc3Mgc3BlY2lmaWNhdGlvbiBtdXN0IGltcGxlbWVudCBhIGByZW5kZXJgIG1ldGhvZC4nKSA6IF9wcm9kSW52YXJpYW50KCc4MycpIDogdm9pZCAwO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKCFDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29tcG9uZW50U2hvdWxkVXBkYXRlLCAnJXMgaGFzIGEgbWV0aG9kIGNhbGxlZCAnICsgJ2NvbXBvbmVudFNob3VsZFVwZGF0ZSgpLiBEaWQgeW91IG1lYW4gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCk/ICcgKyAnVGhlIG5hbWUgaXMgcGhyYXNlZCBhcyBhIHF1ZXN0aW9uIGJlY2F1c2UgdGhlIGZ1bmN0aW9uIGlzICcgKyAnZXhwZWN0ZWQgdG8gcmV0dXJuIGEgdmFsdWUuJywgc3BlYy5kaXNwbGF5TmFtZSB8fCAnQSBjb21wb25lbnQnKSA6IHZvaWQgMDtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKCFDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2lldmVQcm9wcywgJyVzIGhhcyBhIG1ldGhvZCBjYWxsZWQgJyArICdjb21wb25lbnRXaWxsUmVjaWV2ZVByb3BzKCkuIERpZCB5b3UgbWVhbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCk/Jywgc3BlYy5kaXNwbGF5TmFtZSB8fCAnQSBjb21wb25lbnQnKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICAvLyBSZWR1Y2UgdGltZSBzcGVudCBkb2luZyBsb29rdXBzIGJ5IHNldHRpbmcgdGhlc2Ugb24gdGhlIHByb3RvdHlwZS5cbiAgICBmb3IgKHZhciBtZXRob2ROYW1lIGluIFJlYWN0Q2xhc3NJbnRlcmZhY2UpIHtcbiAgICAgIGlmICghQ29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZE5hbWVdKSB7XG4gICAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9LFxuXG4gIGluamVjdGlvbjoge1xuICAgIGluamVjdE1peGluOiBmdW5jdGlvbiAobWl4aW4pIHtcbiAgICAgIGluamVjdGVkTWl4aW5zLnB1c2gobWl4aW4pO1xuICAgIH1cbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q2xhc3M7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC9saWIvUmVhY3RDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMgPSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMgPSB7XG4gICAgcHJvcDogJ3Byb3AnLFxuICAgIGNvbnRleHQ6ICdjb250ZXh0JyxcbiAgICBjaGlsZENvbnRleHQ6ICdjaGlsZCBjb250ZXh0J1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QvbGliL1JlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9SZWFjdEVsZW1lbnQnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBmYWN0b3J5IHRoYXQgY3JlYXRlcyBIVE1MIHRhZyBlbGVtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgY3JlYXRlRE9NRmFjdG9yeSA9IFJlYWN0RWxlbWVudC5jcmVhdGVGYWN0b3J5O1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0RWxlbWVudFZhbGlkYXRvciA9IHJlcXVpcmUoJy4vUmVhY3RFbGVtZW50VmFsaWRhdG9yJyk7XG4gIGNyZWF0ZURPTUZhY3RvcnkgPSBSZWFjdEVsZW1lbnRWYWxpZGF0b3IuY3JlYXRlRmFjdG9yeTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwcGluZyBmcm9tIHN1cHBvcnRlZCBIVE1MIHRhZ3MgdG8gYFJlYWN0RE9NQ29tcG9uZW50YCBjbGFzc2VzLlxuICogVGhpcyBpcyBhbHNvIGFjY2Vzc2libGUgdmlhIGBSZWFjdC5ET01gLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIFJlYWN0RE9NRmFjdG9yaWVzID0ge1xuICBhOiBjcmVhdGVET01GYWN0b3J5KCdhJyksXG4gIGFiYnI6IGNyZWF0ZURPTUZhY3RvcnkoJ2FiYnInKSxcbiAgYWRkcmVzczogY3JlYXRlRE9NRmFjdG9yeSgnYWRkcmVzcycpLFxuICBhcmVhOiBjcmVhdGVET01GYWN0b3J5KCdhcmVhJyksXG4gIGFydGljbGU6IGNyZWF0ZURPTUZhY3RvcnkoJ2FydGljbGUnKSxcbiAgYXNpZGU6IGNyZWF0ZURPTUZhY3RvcnkoJ2FzaWRlJyksXG4gIGF1ZGlvOiBjcmVhdGVET01GYWN0b3J5KCdhdWRpbycpLFxuICBiOiBjcmVhdGVET01GYWN0b3J5KCdiJyksXG4gIGJhc2U6IGNyZWF0ZURPTUZhY3RvcnkoJ2Jhc2UnKSxcbiAgYmRpOiBjcmVhdGVET01GYWN0b3J5KCdiZGknKSxcbiAgYmRvOiBjcmVhdGVET01GYWN0b3J5KCdiZG8nKSxcbiAgYmlnOiBjcmVhdGVET01GYWN0b3J5KCdiaWcnKSxcbiAgYmxvY2txdW90ZTogY3JlYXRlRE9NRmFjdG9yeSgnYmxvY2txdW90ZScpLFxuICBib2R5OiBjcmVhdGVET01GYWN0b3J5KCdib2R5JyksXG4gIGJyOiBjcmVhdGVET01GYWN0b3J5KCdicicpLFxuICBidXR0b246IGNyZWF0ZURPTUZhY3RvcnkoJ2J1dHRvbicpLFxuICBjYW52YXM6IGNyZWF0ZURPTUZhY3RvcnkoJ2NhbnZhcycpLFxuICBjYXB0aW9uOiBjcmVhdGVET01GYWN0b3J5KCdjYXB0aW9uJyksXG4gIGNpdGU6IGNyZWF0ZURPTUZhY3RvcnkoJ2NpdGUnKSxcbiAgY29kZTogY3JlYXRlRE9NRmFjdG9yeSgnY29kZScpLFxuICBjb2w6IGNyZWF0ZURPTUZhY3RvcnkoJ2NvbCcpLFxuICBjb2xncm91cDogY3JlYXRlRE9NRmFjdG9yeSgnY29sZ3JvdXAnKSxcbiAgZGF0YTogY3JlYXRlRE9NRmFjdG9yeSgnZGF0YScpLFxuICBkYXRhbGlzdDogY3JlYXRlRE9NRmFjdG9yeSgnZGF0YWxpc3QnKSxcbiAgZGQ6IGNyZWF0ZURPTUZhY3RvcnkoJ2RkJyksXG4gIGRlbDogY3JlYXRlRE9NRmFjdG9yeSgnZGVsJyksXG4gIGRldGFpbHM6IGNyZWF0ZURPTUZhY3RvcnkoJ2RldGFpbHMnKSxcbiAgZGZuOiBjcmVhdGVET01GYWN0b3J5KCdkZm4nKSxcbiAgZGlhbG9nOiBjcmVhdGVET01GYWN0b3J5KCdkaWFsb2cnKSxcbiAgZGl2OiBjcmVhdGVET01GYWN0b3J5KCdkaXYnKSxcbiAgZGw6IGNyZWF0ZURPTUZhY3RvcnkoJ2RsJyksXG4gIGR0OiBjcmVhdGVET01GYWN0b3J5KCdkdCcpLFxuICBlbTogY3JlYXRlRE9NRmFjdG9yeSgnZW0nKSxcbiAgZW1iZWQ6IGNyZWF0ZURPTUZhY3RvcnkoJ2VtYmVkJyksXG4gIGZpZWxkc2V0OiBjcmVhdGVET01GYWN0b3J5KCdmaWVsZHNldCcpLFxuICBmaWdjYXB0aW9uOiBjcmVhdGVET01GYWN0b3J5KCdmaWdjYXB0aW9uJyksXG4gIGZpZ3VyZTogY3JlYXRlRE9NRmFjdG9yeSgnZmlndXJlJyksXG4gIGZvb3RlcjogY3JlYXRlRE9NRmFjdG9yeSgnZm9vdGVyJyksXG4gIGZvcm06IGNyZWF0ZURPTUZhY3RvcnkoJ2Zvcm0nKSxcbiAgaDE6IGNyZWF0ZURPTUZhY3RvcnkoJ2gxJyksXG4gIGgyOiBjcmVhdGVET01GYWN0b3J5KCdoMicpLFxuICBoMzogY3JlYXRlRE9NRmFjdG9yeSgnaDMnKSxcbiAgaDQ6IGNyZWF0ZURPTUZhY3RvcnkoJ2g0JyksXG4gIGg1OiBjcmVhdGVET01GYWN0b3J5KCdoNScpLFxuICBoNjogY3JlYXRlRE9NRmFjdG9yeSgnaDYnKSxcbiAgaGVhZDogY3JlYXRlRE9NRmFjdG9yeSgnaGVhZCcpLFxuICBoZWFkZXI6IGNyZWF0ZURPTUZhY3RvcnkoJ2hlYWRlcicpLFxuICBoZ3JvdXA6IGNyZWF0ZURPTUZhY3RvcnkoJ2hncm91cCcpLFxuICBocjogY3JlYXRlRE9NRmFjdG9yeSgnaHInKSxcbiAgaHRtbDogY3JlYXRlRE9NRmFjdG9yeSgnaHRtbCcpLFxuICBpOiBjcmVhdGVET01GYWN0b3J5KCdpJyksXG4gIGlmcmFtZTogY3JlYXRlRE9NRmFjdG9yeSgnaWZyYW1lJyksXG4gIGltZzogY3JlYXRlRE9NRmFjdG9yeSgnaW1nJyksXG4gIGlucHV0OiBjcmVhdGVET01GYWN0b3J5KCdpbnB1dCcpLFxuICBpbnM6IGNyZWF0ZURPTUZhY3RvcnkoJ2lucycpLFxuICBrYmQ6IGNyZWF0ZURPTUZhY3RvcnkoJ2tiZCcpLFxuICBrZXlnZW46IGNyZWF0ZURPTUZhY3RvcnkoJ2tleWdlbicpLFxuICBsYWJlbDogY3JlYXRlRE9NRmFjdG9yeSgnbGFiZWwnKSxcbiAgbGVnZW5kOiBjcmVhdGVET01GYWN0b3J5KCdsZWdlbmQnKSxcbiAgbGk6IGNyZWF0ZURPTUZhY3RvcnkoJ2xpJyksXG4gIGxpbms6IGNyZWF0ZURPTUZhY3RvcnkoJ2xpbmsnKSxcbiAgbWFpbjogY3JlYXRlRE9NRmFjdG9yeSgnbWFpbicpLFxuICBtYXA6IGNyZWF0ZURPTUZhY3RvcnkoJ21hcCcpLFxuICBtYXJrOiBjcmVhdGVET01GYWN0b3J5KCdtYXJrJyksXG4gIG1lbnU6IGNyZWF0ZURPTUZhY3RvcnkoJ21lbnUnKSxcbiAgbWVudWl0ZW06IGNyZWF0ZURPTUZhY3RvcnkoJ21lbnVpdGVtJyksXG4gIG1ldGE6IGNyZWF0ZURPTUZhY3RvcnkoJ21ldGEnKSxcbiAgbWV0ZXI6IGNyZWF0ZURPTUZhY3RvcnkoJ21ldGVyJyksXG4gIG5hdjogY3JlYXRlRE9NRmFjdG9yeSgnbmF2JyksXG4gIG5vc2NyaXB0OiBjcmVhdGVET01GYWN0b3J5KCdub3NjcmlwdCcpLFxuICBvYmplY3Q6IGNyZWF0ZURPTUZhY3RvcnkoJ29iamVjdCcpLFxuICBvbDogY3JlYXRlRE9NRmFjdG9yeSgnb2wnKSxcbiAgb3B0Z3JvdXA6IGNyZWF0ZURPTUZhY3RvcnkoJ29wdGdyb3VwJyksXG4gIG9wdGlvbjogY3JlYXRlRE9NRmFjdG9yeSgnb3B0aW9uJyksXG4gIG91dHB1dDogY3JlYXRlRE9NRmFjdG9yeSgnb3V0cHV0JyksXG4gIHA6IGNyZWF0ZURPTUZhY3RvcnkoJ3AnKSxcbiAgcGFyYW06IGNyZWF0ZURPTUZhY3RvcnkoJ3BhcmFtJyksXG4gIHBpY3R1cmU6IGNyZWF0ZURPTUZhY3RvcnkoJ3BpY3R1cmUnKSxcbiAgcHJlOiBjcmVhdGVET01GYWN0b3J5KCdwcmUnKSxcbiAgcHJvZ3Jlc3M6IGNyZWF0ZURPTUZhY3RvcnkoJ3Byb2dyZXNzJyksXG4gIHE6IGNyZWF0ZURPTUZhY3RvcnkoJ3EnKSxcbiAgcnA6IGNyZWF0ZURPTUZhY3RvcnkoJ3JwJyksXG4gIHJ0OiBjcmVhdGVET01GYWN0b3J5KCdydCcpLFxuICBydWJ5OiBjcmVhdGVET01GYWN0b3J5KCdydWJ5JyksXG4gIHM6IGNyZWF0ZURPTUZhY3RvcnkoJ3MnKSxcbiAgc2FtcDogY3JlYXRlRE9NRmFjdG9yeSgnc2FtcCcpLFxuICBzY3JpcHQ6IGNyZWF0ZURPTUZhY3RvcnkoJ3NjcmlwdCcpLFxuICBzZWN0aW9uOiBjcmVhdGVET01GYWN0b3J5KCdzZWN0aW9uJyksXG4gIHNlbGVjdDogY3JlYXRlRE9NRmFjdG9yeSgnc2VsZWN0JyksXG4gIHNtYWxsOiBjcmVhdGVET01GYWN0b3J5KCdzbWFsbCcpLFxuICBzb3VyY2U6IGNyZWF0ZURPTUZhY3RvcnkoJ3NvdXJjZScpLFxuICBzcGFuOiBjcmVhdGVET01GYWN0b3J5KCdzcGFuJyksXG4gIHN0cm9uZzogY3JlYXRlRE9NRmFjdG9yeSgnc3Ryb25nJyksXG4gIHN0eWxlOiBjcmVhdGVET01GYWN0b3J5KCdzdHlsZScpLFxuICBzdWI6IGNyZWF0ZURPTUZhY3RvcnkoJ3N1YicpLFxuICBzdW1tYXJ5OiBjcmVhdGVET01GYWN0b3J5KCdzdW1tYXJ5JyksXG4gIHN1cDogY3JlYXRlRE9NRmFjdG9yeSgnc3VwJyksXG4gIHRhYmxlOiBjcmVhdGVET01GYWN0b3J5KCd0YWJsZScpLFxuICB0Ym9keTogY3JlYXRlRE9NRmFjdG9yeSgndGJvZHknKSxcbiAgdGQ6IGNyZWF0ZURPTUZhY3RvcnkoJ3RkJyksXG4gIHRleHRhcmVhOiBjcmVhdGVET01GYWN0b3J5KCd0ZXh0YXJlYScpLFxuICB0Zm9vdDogY3JlYXRlRE9NRmFjdG9yeSgndGZvb3QnKSxcbiAgdGg6IGNyZWF0ZURPTUZhY3RvcnkoJ3RoJyksXG4gIHRoZWFkOiBjcmVhdGVET01GYWN0b3J5KCd0aGVhZCcpLFxuICB0aW1lOiBjcmVhdGVET01GYWN0b3J5KCd0aW1lJyksXG4gIHRpdGxlOiBjcmVhdGVET01GYWN0b3J5KCd0aXRsZScpLFxuICB0cjogY3JlYXRlRE9NRmFjdG9yeSgndHInKSxcbiAgdHJhY2s6IGNyZWF0ZURPTUZhY3RvcnkoJ3RyYWNrJyksXG4gIHU6IGNyZWF0ZURPTUZhY3RvcnkoJ3UnKSxcbiAgdWw6IGNyZWF0ZURPTUZhY3RvcnkoJ3VsJyksXG4gICd2YXInOiBjcmVhdGVET01GYWN0b3J5KCd2YXInKSxcbiAgdmlkZW86IGNyZWF0ZURPTUZhY3RvcnkoJ3ZpZGVvJyksXG4gIHdicjogY3JlYXRlRE9NRmFjdG9yeSgnd2JyJyksXG5cbiAgLy8gU1ZHXG4gIGNpcmNsZTogY3JlYXRlRE9NRmFjdG9yeSgnY2lyY2xlJyksXG4gIGNsaXBQYXRoOiBjcmVhdGVET01GYWN0b3J5KCdjbGlwUGF0aCcpLFxuICBkZWZzOiBjcmVhdGVET01GYWN0b3J5KCdkZWZzJyksXG4gIGVsbGlwc2U6IGNyZWF0ZURPTUZhY3RvcnkoJ2VsbGlwc2UnKSxcbiAgZzogY3JlYXRlRE9NRmFjdG9yeSgnZycpLFxuICBpbWFnZTogY3JlYXRlRE9NRmFjdG9yeSgnaW1hZ2UnKSxcbiAgbGluZTogY3JlYXRlRE9NRmFjdG9yeSgnbGluZScpLFxuICBsaW5lYXJHcmFkaWVudDogY3JlYXRlRE9NRmFjdG9yeSgnbGluZWFyR3JhZGllbnQnKSxcbiAgbWFzazogY3JlYXRlRE9NRmFjdG9yeSgnbWFzaycpLFxuICBwYXRoOiBjcmVhdGVET01GYWN0b3J5KCdwYXRoJyksXG4gIHBhdHRlcm46IGNyZWF0ZURPTUZhY3RvcnkoJ3BhdHRlcm4nKSxcbiAgcG9seWdvbjogY3JlYXRlRE9NRmFjdG9yeSgncG9seWdvbicpLFxuICBwb2x5bGluZTogY3JlYXRlRE9NRmFjdG9yeSgncG9seWxpbmUnKSxcbiAgcmFkaWFsR3JhZGllbnQ6IGNyZWF0ZURPTUZhY3RvcnkoJ3JhZGlhbEdyYWRpZW50JyksXG4gIHJlY3Q6IGNyZWF0ZURPTUZhY3RvcnkoJ3JlY3QnKSxcbiAgc3RvcDogY3JlYXRlRE9NRmFjdG9yeSgnc3RvcCcpLFxuICBzdmc6IGNyZWF0ZURPTUZhY3RvcnkoJ3N2ZycpLFxuICB0ZXh0OiBjcmVhdGVET01GYWN0b3J5KCd0ZXh0JyksXG4gIHRzcGFuOiBjcmVhdGVET01GYWN0b3J5KCd0c3BhbicpXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NRmFjdG9yaWVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QvbGliL1JlYWN0RE9NRmFjdG9yaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuLyoqXG4gKiBSZWFjdEVsZW1lbnRWYWxpZGF0b3IgcHJvdmlkZXMgYSB3cmFwcGVyIGFyb3VuZCBhIGVsZW1lbnQgZmFjdG9yeVxuICogd2hpY2ggdmFsaWRhdGVzIHRoZSBwcm9wcyBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmVcbiAqIHVzZWQgb25seSBpbiBERVYgYW5kIGNvdWxkIGJlIHJlcGxhY2VkIGJ5IGEgc3RhdGljIHR5cGUgY2hlY2tlciBmb3IgbGFuZ3VhZ2VzXG4gKiB0aGF0IHN1cHBvcnQgaXQuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSByZXF1aXJlKCcuL1JlYWN0Q3VycmVudE93bmVyJyk7XG52YXIgUmVhY3RDb21wb25lbnRUcmVlSG9vayA9IHJlcXVpcmUoJy4vUmVhY3RDb21wb25lbnRUcmVlSG9vaycpO1xudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vUmVhY3RFbGVtZW50Jyk7XG5cbnZhciBjaGVja1JlYWN0VHlwZVNwZWMgPSByZXF1aXJlKCcuL2NoZWNrUmVhY3RUeXBlU3BlYycpO1xuXG52YXIgY2FuRGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL2NhbkRlZmluZVByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlcmF0b3JGbiA9IHJlcXVpcmUoJy4vZ2V0SXRlcmF0b3JGbicpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuZ2V0TmFtZSgpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJyBDaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gJyBDaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDwnICsgcGFyZW50TmFtZSArICc+Lic7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmZvO1xufVxuXG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuXG4gIHZhciBtZW1vaXplciA9IG93bmVySGFzS2V5VXNlV2FybmluZy51bmlxdWVLZXkgfHwgKG93bmVySGFzS2V5VXNlV2FybmluZy51bmlxdWVLZXkgPSB7fSk7XG5cbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuICBpZiAobWVtb2l6ZXJbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbWVtb2l6ZXJbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlO1xuXG4gIC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSAnIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tICcgKyBlbGVtZW50Ll9vd25lci5nZXROYW1lKCkgKyAnLic7XG4gIH1cblxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0VhY2ggY2hpbGQgaW4gYW4gYXJyYXkgb3IgaXRlcmF0b3Igc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJXMnLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyLCBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldEN1cnJlbnRTdGFja0FkZGVuZHVtKGVsZW1lbnQpKSA6IHZvaWQgMDtcbn1cblxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcbiAgICAgIGlmIChSZWFjdEVsZW1lbnQuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChSZWFjdEVsZW1lbnQuaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcbiAgICAvLyBFbnRyeSBpdGVyYXRvcnMgcHJvdmlkZSBpbXBsaWNpdCBrZXlzLlxuICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoUmVhY3RFbGVtZW50LmlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHZhciBjb21wb25lbnRDbGFzcyA9IGVsZW1lbnQudHlwZTtcbiAgaWYgKHR5cGVvZiBjb21wb25lbnRDbGFzcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbmFtZSA9IGNvbXBvbmVudENsYXNzLmRpc3BsYXlOYW1lIHx8IGNvbXBvbmVudENsYXNzLm5hbWU7XG4gIGlmIChjb21wb25lbnRDbGFzcy5wcm9wVHlwZXMpIHtcbiAgICBjaGVja1JlYWN0VHlwZVNwZWMoY29tcG9uZW50Q2xhc3MucHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQsIG51bGwpO1xuICB9XG4gIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoY29tcG9uZW50Q2xhc3MuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkLCAnZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpIDogdm9pZCAwO1xuICB9XG59XG5cbnZhciBSZWFjdEVsZW1lbnRWYWxpZGF0b3IgPSB7XG5cbiAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICAgIHZhciB2YWxpZFR5cGUgPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbic7XG4gICAgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBpbmZvID0gJyc7XG4gICAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyAnaXRcXCdzIGRlZmluZWQgaW4uJztcbiAgICAgICAgfVxuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZSA9PSBudWxsID8gdHlwZSA6IHR5cGVvZiB0eXBlLCBpbmZvKSA6IHZvaWQgMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IFJlYWN0RWxlbWVudC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9LFxuXG4gIGNyZWF0ZUZhY3Rvcnk6IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBSZWFjdEVsZW1lbnRWYWxpZGF0b3IuY3JlYXRlRWxlbWVudC5iaW5kKG51bGwsIHR5cGUpO1xuICAgIC8vIExlZ2FjeSBob29rIFRPRE86IFdhcm4gaWYgdGhpcyBpcyBhY2Nlc3NlZFxuICAgIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGNhbkRlZmluZVByb3BlcnR5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpIDogdm9pZCAwO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xuICB9LFxuXG4gIGNsb25lRWxlbWVudDogZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICAgIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50LmNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gICAgfVxuICAgIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50VmFsaWRhdG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QvbGliL1JlYWN0RWxlbWVudFZhbGlkYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNi1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3Byb2RJbnZhcmlhbnQgPSByZXF1aXJlKCcuL3JlYWN0UHJvZEludmFyaWFudCcpO1xuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSByZXF1aXJlKCcuL1JlYWN0Q3VycmVudE93bmVyJyk7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG5mdW5jdGlvbiBpc05hdGl2ZShmbikge1xuICAvLyBCYXNlZCBvbiBpc05hdGl2ZSgpIGZyb20gTG9kYXNoXG4gIHZhciBmdW5jVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArIGZ1bmNUb1N0cmluZ1xuICAvLyBUYWtlIGFuIGV4YW1wbGUgbmF0aXZlIGZ1bmN0aW9uIHNvdXJjZSBmb3IgY29tcGFyaXNvblxuICAuY2FsbChoYXNPd25Qcm9wZXJ0eSlcbiAgLy8gU3RyaXAgcmVnZXggY2hhcmFjdGVycyBzbyB3ZSBjYW4gdXNlIGl0IGZvciByZWdleFxuICAucmVwbGFjZSgvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csICdcXFxcJCYnKVxuICAvLyBSZW1vdmUgaGFzT3duUHJvcGVydHkgZnJvbSB0aGUgdGVtcGxhdGUgdG8gbWFrZSBpdCBnZW5lcmljXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJyk7XG4gIHRyeSB7XG4gICAgdmFyIHNvdXJjZSA9IGZ1bmNUb1N0cmluZy5jYWxsKGZuKTtcbiAgICByZXR1cm4gcmVJc05hdGl2ZS50ZXN0KHNvdXJjZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG52YXIgY2FuVXNlQ29sbGVjdGlvbnMgPVxuLy8gQXJyYXkuZnJvbVxudHlwZW9mIEFycmF5LmZyb20gPT09ICdmdW5jdGlvbicgJiZcbi8vIE1hcFxudHlwZW9mIE1hcCA9PT0gJ2Z1bmN0aW9uJyAmJiBpc05hdGl2ZShNYXApICYmXG4vLyBNYXAucHJvdG90eXBlLmtleXNcbk1hcC5wcm90b3R5cGUgIT0gbnVsbCAmJiB0eXBlb2YgTWFwLnByb3RvdHlwZS5rZXlzID09PSAnZnVuY3Rpb24nICYmIGlzTmF0aXZlKE1hcC5wcm90b3R5cGUua2V5cykgJiZcbi8vIFNldFxudHlwZW9mIFNldCA9PT0gJ2Z1bmN0aW9uJyAmJiBpc05hdGl2ZShTZXQpICYmXG4vLyBTZXQucHJvdG90eXBlLmtleXNcblNldC5wcm90b3R5cGUgIT0gbnVsbCAmJiB0eXBlb2YgU2V0LnByb3RvdHlwZS5rZXlzID09PSAnZnVuY3Rpb24nICYmIGlzTmF0aXZlKFNldC5wcm90b3R5cGUua2V5cyk7XG5cbnZhciBzZXRJdGVtO1xudmFyIGdldEl0ZW07XG52YXIgcmVtb3ZlSXRlbTtcbnZhciBnZXRJdGVtSURzO1xudmFyIGFkZFJvb3Q7XG52YXIgcmVtb3ZlUm9vdDtcbnZhciBnZXRSb290SURzO1xuXG5pZiAoY2FuVXNlQ29sbGVjdGlvbnMpIHtcbiAgdmFyIGl0ZW1NYXAgPSBuZXcgTWFwKCk7XG4gIHZhciByb290SURTZXQgPSBuZXcgU2V0KCk7XG5cbiAgc2V0SXRlbSA9IGZ1bmN0aW9uIChpZCwgaXRlbSkge1xuICAgIGl0ZW1NYXAuc2V0KGlkLCBpdGVtKTtcbiAgfTtcbiAgZ2V0SXRlbSA9IGZ1bmN0aW9uIChpZCkge1xuICAgIHJldHVybiBpdGVtTWFwLmdldChpZCk7XG4gIH07XG4gIHJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBpdGVtTWFwWydkZWxldGUnXShpZCk7XG4gIH07XG4gIGdldEl0ZW1JRHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oaXRlbU1hcC5rZXlzKCkpO1xuICB9O1xuXG4gIGFkZFJvb3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICByb290SURTZXQuYWRkKGlkKTtcbiAgfTtcbiAgcmVtb3ZlUm9vdCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIHJvb3RJRFNldFsnZGVsZXRlJ10oaWQpO1xuICB9O1xuICBnZXRSb290SURzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHJvb3RJRFNldC5rZXlzKCkpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIGl0ZW1CeUtleSA9IHt9O1xuICB2YXIgcm9vdEJ5S2V5ID0ge307XG5cbiAgLy8gVXNlIG5vbi1udW1lcmljIGtleXMgdG8gcHJldmVudCBWOCBwZXJmb3JtYW5jZSBpc3N1ZXM6XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzcyMzJcbiAgdmFyIGdldEtleUZyb21JRCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIHJldHVybiAnLicgKyBpZDtcbiAgfTtcbiAgdmFyIGdldElERnJvbUtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoa2V5LnN1YnN0cigxKSwgMTApO1xuICB9O1xuXG4gIHNldEl0ZW0gPSBmdW5jdGlvbiAoaWQsIGl0ZW0pIHtcbiAgICB2YXIga2V5ID0gZ2V0S2V5RnJvbUlEKGlkKTtcbiAgICBpdGVtQnlLZXlba2V5XSA9IGl0ZW07XG4gIH07XG4gIGdldEl0ZW0gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIga2V5ID0gZ2V0S2V5RnJvbUlEKGlkKTtcbiAgICByZXR1cm4gaXRlbUJ5S2V5W2tleV07XG4gIH07XG4gIHJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIga2V5ID0gZ2V0S2V5RnJvbUlEKGlkKTtcbiAgICBkZWxldGUgaXRlbUJ5S2V5W2tleV07XG4gIH07XG4gIGdldEl0ZW1JRHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGl0ZW1CeUtleSkubWFwKGdldElERnJvbUtleSk7XG4gIH07XG5cbiAgYWRkUm9vdCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBrZXkgPSBnZXRLZXlGcm9tSUQoaWQpO1xuICAgIHJvb3RCeUtleVtrZXldID0gdHJ1ZTtcbiAgfTtcbiAgcmVtb3ZlUm9vdCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBrZXkgPSBnZXRLZXlGcm9tSUQoaWQpO1xuICAgIGRlbGV0ZSByb290QnlLZXlba2V5XTtcbiAgfTtcbiAgZ2V0Um9vdElEcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocm9vdEJ5S2V5KS5tYXAoZ2V0SURGcm9tS2V5KTtcbiAgfTtcbn1cblxudmFyIHVubW91bnRlZElEcyA9IFtdO1xuXG5mdW5jdGlvbiBwdXJnZURlZXAoaWQpIHtcbiAgdmFyIGl0ZW0gPSBnZXRJdGVtKGlkKTtcbiAgaWYgKGl0ZW0pIHtcbiAgICB2YXIgY2hpbGRJRHMgPSBpdGVtLmNoaWxkSURzO1xuXG4gICAgcmVtb3ZlSXRlbShpZCk7XG4gICAgY2hpbGRJRHMuZm9yRWFjaChwdXJnZURlZXApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lck5hbWUpIHtcbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyAoc291cmNlID8gJyAoYXQgJyArIHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJykgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJyA6IG93bmVyTmFtZSA/ICcgKGNyZWF0ZWQgYnkgJyArIG93bmVyTmFtZSArICcpJyA6ICcnKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcjZW1wdHknO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxlbWVudCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gJyN0ZXh0JztcbiAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC50eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBlbGVtZW50LnR5cGU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVsZW1lbnQudHlwZS5kaXNwbGF5TmFtZSB8fCBlbGVtZW50LnR5cGUubmFtZSB8fCAnVW5rbm93bic7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVJRChpZCkge1xuICB2YXIgbmFtZSA9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0RGlzcGxheU5hbWUoaWQpO1xuICB2YXIgZWxlbWVudCA9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0RWxlbWVudChpZCk7XG4gIHZhciBvd25lcklEID0gUmVhY3RDb21wb25lbnRUcmVlSG9vay5nZXRPd25lcklEKGlkKTtcbiAgdmFyIG93bmVyTmFtZTtcbiAgaWYgKG93bmVySUQpIHtcbiAgICBvd25lck5hbWUgPSBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldERpc3BsYXlOYW1lKG93bmVySUQpO1xuICB9XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGVsZW1lbnQsICdSZWFjdENvbXBvbmVudFRyZWVIb29rOiBNaXNzaW5nIFJlYWN0IGVsZW1lbnQgZm9yIGRlYnVnSUQgJXMgd2hlbiAnICsgJ2J1aWxkaW5nIHN0YWNrJywgaWQpIDogdm9pZCAwO1xuICByZXR1cm4gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBlbGVtZW50ICYmIGVsZW1lbnQuX3NvdXJjZSwgb3duZXJOYW1lKTtcbn1cblxudmFyIFJlYWN0Q29tcG9uZW50VHJlZUhvb2sgPSB7XG4gIG9uU2V0Q2hpbGRyZW46IGZ1bmN0aW9uIChpZCwgbmV4dENoaWxkSURzKSB7XG4gICAgdmFyIGl0ZW0gPSBnZXRJdGVtKGlkKTtcbiAgICAhaXRlbSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdJdGVtIG11c3QgaGF2ZSBiZWVuIHNldCcpIDogX3Byb2RJbnZhcmlhbnQoJzE0NCcpIDogdm9pZCAwO1xuICAgIGl0ZW0uY2hpbGRJRHMgPSBuZXh0Q2hpbGRJRHM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5leHRDaGlsZElEcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG5leHRDaGlsZElEID0gbmV4dENoaWxkSURzW2ldO1xuICAgICAgdmFyIG5leHRDaGlsZCA9IGdldEl0ZW0obmV4dENoaWxkSUQpO1xuICAgICAgIW5leHRDaGlsZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdFeHBlY3RlZCBob29rIGV2ZW50cyB0byBmaXJlIGZvciB0aGUgY2hpbGQgYmVmb3JlIGl0cyBwYXJlbnQgaW5jbHVkZXMgaXQgaW4gb25TZXRDaGlsZHJlbigpLicpIDogX3Byb2RJbnZhcmlhbnQoJzE0MCcpIDogdm9pZCAwO1xuICAgICAgIShuZXh0Q2hpbGQuY2hpbGRJRHMgIT0gbnVsbCB8fCB0eXBlb2YgbmV4dENoaWxkLmVsZW1lbnQgIT09ICdvYmplY3QnIHx8IG5leHRDaGlsZC5lbGVtZW50ID09IG51bGwpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0V4cGVjdGVkIG9uU2V0Q2hpbGRyZW4oKSB0byBmaXJlIGZvciBhIGNvbnRhaW5lciBjaGlsZCBiZWZvcmUgaXRzIHBhcmVudCBpbmNsdWRlcyBpdCBpbiBvblNldENoaWxkcmVuKCkuJykgOiBfcHJvZEludmFyaWFudCgnMTQxJykgOiB2b2lkIDA7XG4gICAgICAhbmV4dENoaWxkLmlzTW91bnRlZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdFeHBlY3RlZCBvbk1vdW50Q29tcG9uZW50KCkgdG8gZmlyZSBmb3IgdGhlIGNoaWxkIGJlZm9yZSBpdHMgcGFyZW50IGluY2x1ZGVzIGl0IGluIG9uU2V0Q2hpbGRyZW4oKS4nKSA6IF9wcm9kSW52YXJpYW50KCc3MScpIDogdm9pZCAwO1xuICAgICAgaWYgKG5leHRDaGlsZC5wYXJlbnRJRCA9PSBudWxsKSB7XG4gICAgICAgIG5leHRDaGlsZC5wYXJlbnRJRCA9IGlkO1xuICAgICAgICAvLyBUT0RPOiBUaGlzIHNob3VsZG4ndCBiZSBuZWNlc3NhcnkgYnV0IG1vdW50aW5nIGEgbmV3IHJvb3QgZHVyaW5nIGluXG4gICAgICAgIC8vIGNvbXBvbmVudFdpbGxNb3VudCBjdXJyZW50bHkgY2F1c2VzIG5vdC15ZXQtbW91bnRlZCBjb21wb25lbnRzIHRvXG4gICAgICAgIC8vIGJlIHB1cmdlZCBmcm9tIG91ciB0cmVlIGRhdGEgc28gdGhlaXIgcGFyZW50IGlkIGlzIG1pc3NpbmcuXG4gICAgICB9XG4gICAgICAhKG5leHRDaGlsZC5wYXJlbnRJRCA9PT0gaWQpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0V4cGVjdGVkIG9uQmVmb3JlTW91bnRDb21wb25lbnQoKSBwYXJlbnQgYW5kIG9uU2V0Q2hpbGRyZW4oKSB0byBiZSBjb25zaXN0ZW50ICglcyBoYXMgcGFyZW50cyAlcyBhbmQgJXMpLicsIG5leHRDaGlsZElELCBuZXh0Q2hpbGQucGFyZW50SUQsIGlkKSA6IF9wcm9kSW52YXJpYW50KCcxNDInLCBuZXh0Q2hpbGRJRCwgbmV4dENoaWxkLnBhcmVudElELCBpZCkgOiB2b2lkIDA7XG4gICAgfVxuICB9LFxuICBvbkJlZm9yZU1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiAoaWQsIGVsZW1lbnQsIHBhcmVudElEKSB7XG4gICAgdmFyIGl0ZW0gPSB7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgcGFyZW50SUQ6IHBhcmVudElELFxuICAgICAgdGV4dDogbnVsbCxcbiAgICAgIGNoaWxkSURzOiBbXSxcbiAgICAgIGlzTW91bnRlZDogZmFsc2UsXG4gICAgICB1cGRhdGVDb3VudDogMFxuICAgIH07XG4gICAgc2V0SXRlbShpZCwgaXRlbSk7XG4gIH0sXG4gIG9uQmVmb3JlVXBkYXRlQ29tcG9uZW50OiBmdW5jdGlvbiAoaWQsIGVsZW1lbnQpIHtcbiAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgIGlmICghaXRlbSB8fCAhaXRlbS5pc01vdW50ZWQpIHtcbiAgICAgIC8vIFdlIG1heSBlbmQgdXAgaGVyZSBhcyBhIHJlc3VsdCBvZiBzZXRTdGF0ZSgpIGluIGNvbXBvbmVudFdpbGxVbm1vdW50KCkuXG4gICAgICAvLyBJbiB0aGlzIGNhc2UsIGlnbm9yZSB0aGUgZWxlbWVudC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXRlbS5lbGVtZW50ID0gZWxlbWVudDtcbiAgfSxcbiAgb25Nb3VudENvbXBvbmVudDogZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIGl0ZW0gPSBnZXRJdGVtKGlkKTtcbiAgICAhaXRlbSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdJdGVtIG11c3QgaGF2ZSBiZWVuIHNldCcpIDogX3Byb2RJbnZhcmlhbnQoJzE0NCcpIDogdm9pZCAwO1xuICAgIGl0ZW0uaXNNb3VudGVkID0gdHJ1ZTtcbiAgICB2YXIgaXNSb290ID0gaXRlbS5wYXJlbnRJRCA9PT0gMDtcbiAgICBpZiAoaXNSb290KSB7XG4gICAgICBhZGRSb290KGlkKTtcbiAgICB9XG4gIH0sXG4gIG9uVXBkYXRlQ29tcG9uZW50OiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgIGlmICghaXRlbSB8fCAhaXRlbS5pc01vdW50ZWQpIHtcbiAgICAgIC8vIFdlIG1heSBlbmQgdXAgaGVyZSBhcyBhIHJlc3VsdCBvZiBzZXRTdGF0ZSgpIGluIGNvbXBvbmVudFdpbGxVbm1vdW50KCkuXG4gICAgICAvLyBJbiB0aGlzIGNhc2UsIGlnbm9yZSB0aGUgZWxlbWVudC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXRlbS51cGRhdGVDb3VudCsrO1xuICB9LFxuICBvblVubW91bnRDb21wb25lbnQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgaWYgaXQgZXhpc3RzLlxuICAgICAgLy8gYGl0ZW1gIG1pZ2h0IG5vdCBleGlzdCBpZiBpdCBpcyBpbnNpZGUgYW4gZXJyb3IgYm91bmRhcnksIGFuZCBhIHNpYmxpbmdcbiAgICAgIC8vIGVycm9yIGJvdW5kYXJ5IGNoaWxkIHRocmV3IHdoaWxlIG1vdW50aW5nLiBUaGVuIHRoaXMgaW5zdGFuY2UgbmV2ZXJcbiAgICAgIC8vIGdvdCBhIGNoYW5jZSB0byBtb3VudCwgYnV0IGl0IHN0aWxsIGdldHMgYW4gdW5tb3VudGluZyBldmVudCBkdXJpbmdcbiAgICAgIC8vIHRoZSBlcnJvciBib3VuZGFyeSBjbGVhbnVwLlxuICAgICAgaXRlbS5pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgIHZhciBpc1Jvb3QgPSBpdGVtLnBhcmVudElEID09PSAwO1xuICAgICAgaWYgKGlzUm9vdCkge1xuICAgICAgICByZW1vdmVSb290KGlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdW5tb3VudGVkSURzLnB1c2goaWQpO1xuICB9LFxuICBwdXJnZVVubW91bnRlZENvbXBvbmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoUmVhY3RDb21wb25lbnRUcmVlSG9vay5fcHJldmVudFB1cmdpbmcpIHtcbiAgICAgIC8vIFNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIHRlc3RpbmcuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bm1vdW50ZWRJRHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHVubW91bnRlZElEc1tpXTtcbiAgICAgIHB1cmdlRGVlcChpZCk7XG4gICAgfVxuICAgIHVubW91bnRlZElEcy5sZW5ndGggPSAwO1xuICB9LFxuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmlzTW91bnRlZCA6IGZhbHNlO1xuICB9LFxuICBnZXRDdXJyZW50U3RhY2tBZGRlbmR1bTogZnVuY3Rpb24gKHRvcEVsZW1lbnQpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuICAgIGlmICh0b3BFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldERpc3BsYXlOYW1lKHRvcEVsZW1lbnQpO1xuICAgICAgdmFyIG93bmVyID0gdG9wRWxlbWVudC5fb3duZXI7XG4gICAgICBpbmZvICs9IGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgdG9wRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBvd25lci5nZXROYW1lKCkpO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50T3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIHZhciBpZCA9IGN1cnJlbnRPd25lciAmJiBjdXJyZW50T3duZXIuX2RlYnVnSUQ7XG5cbiAgICBpbmZvICs9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0U3RhY2tBZGRlbmR1bUJ5SUQoaWQpO1xuICAgIHJldHVybiBpbmZvO1xuICB9LFxuICBnZXRTdGFja0FkZGVuZHVtQnlJRDogZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIGluZm8gPSAnJztcbiAgICB3aGlsZSAoaWQpIHtcbiAgICAgIGluZm8gKz0gZGVzY3JpYmVJRChpZCk7XG4gICAgICBpZCA9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0UGFyZW50SUQoaWQpO1xuICAgIH1cbiAgICByZXR1cm4gaW5mbztcbiAgfSxcbiAgZ2V0Q2hpbGRJRHM6IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBpdGVtID0gZ2V0SXRlbShpZCk7XG4gICAgcmV0dXJuIGl0ZW0gPyBpdGVtLmNoaWxkSURzIDogW107XG4gIH0sXG4gIGdldERpc3BsYXlOYW1lOiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgZWxlbWVudCA9IFJlYWN0Q29tcG9uZW50VHJlZUhvb2suZ2V0RWxlbWVudChpZCk7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGdldERpc3BsYXlOYW1lKGVsZW1lbnQpO1xuICB9LFxuICBnZXRFbGVtZW50OiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgIHJldHVybiBpdGVtID8gaXRlbS5lbGVtZW50IDogbnVsbDtcbiAgfSxcbiAgZ2V0T3duZXJJRDogZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldEVsZW1lbnQoaWQpO1xuICAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5fb3duZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudC5fb3duZXIuX2RlYnVnSUQ7XG4gIH0sXG4gIGdldFBhcmVudElEOiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgaXRlbSA9IGdldEl0ZW0oaWQpO1xuICAgIHJldHVybiBpdGVtID8gaXRlbS5wYXJlbnRJRCA6IG51bGw7XG4gIH0sXG4gIGdldFNvdXJjZTogZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIGl0ZW0gPSBnZXRJdGVtKGlkKTtcbiAgICB2YXIgZWxlbWVudCA9IGl0ZW0gPyBpdGVtLmVsZW1lbnQgOiBudWxsO1xuICAgIHZhciBzb3VyY2UgPSBlbGVtZW50ICE9IG51bGwgPyBlbGVtZW50Ll9zb3VyY2UgOiBudWxsO1xuICAgIHJldHVybiBzb3VyY2U7XG4gIH0sXG4gIGdldFRleHQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBlbGVtZW50ID0gUmVhY3RDb21wb25lbnRUcmVlSG9vay5nZXRFbGVtZW50KGlkKTtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuICcnICsgZWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LFxuICBnZXRVcGRhdGVDb3VudDogZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIGl0ZW0gPSBnZXRJdGVtKGlkKTtcbiAgICByZXR1cm4gaXRlbSA/IGl0ZW0udXBkYXRlQ291bnQgOiAwO1xuICB9LFxuXG5cbiAgZ2V0Um9vdElEczogZ2V0Um9vdElEcyxcbiAgZ2V0UmVnaXN0ZXJlZElEczogZ2V0SXRlbUlEc1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudFRyZWVIb29rO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QvbGliL1JlYWN0Q29tcG9uZW50VHJlZUhvb2suanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfcHJvZEludmFyaWFudCA9IHJlcXVpcmUoJy4vcmVhY3RQcm9kSW52YXJpYW50Jyk7XG5cbnZhciBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcyA9IHJlcXVpcmUoJy4vUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbnZhciBSZWFjdENvbXBvbmVudFRyZWVIb29rO1xuXG5pZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgLy8gVGVtcG9yYXJ5IGhhY2suXG4gIC8vIElubGluZSByZXF1aXJlcyBkb24ndCB3b3JrIHdlbGwgd2l0aCBKZXN0OlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzcyNDBcbiAgLy8gUmVtb3ZlIHRoZSBpbmxpbmUgcmVxdWlyZXMgd2hlbiB3ZSBkb24ndCBuZWVkIHRoZW0gYW55bW9yZTpcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvNzE3OFxuICBSZWFjdENvbXBvbmVudFRyZWVIb29rID0gcmVxdWlyZSgnLi9SZWFjdENvbXBvbmVudFRyZWVIb29rJyk7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/b2JqZWN0fSBlbGVtZW50IFRoZSBSZWFjdCBlbGVtZW50IHRoYXQgaXMgYmVpbmcgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0gez9udW1iZXJ9IGRlYnVnSUQgVGhlIFJlYWN0IGNvbXBvbmVudCBpbnN0YW5jZSB0aGF0IGlzIGJlaW5nIHR5cGUtY2hlY2tlZFxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tSZWFjdFR5cGVTcGVjKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCwgZGVidWdJRCkge1xuICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICB2YXIgZXJyb3I7XG4gICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgISh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJyVzOiAlcyB0eXBlIGAlc2AgaXMgaW52YWxpZDsgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gUmVhY3QuUHJvcFR5cGVzLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dLCB0eXBlU3BlY05hbWUpIDogX3Byb2RJbnZhcmlhbnQoJzg0JywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lc1tsb2NhdGlvbl0sIHR5cGVTcGVjTmFtZSkgOiB2b2lkIDA7XG4gICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgfVxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzW2xvY2F0aW9uXSwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpIDogdm9pZCAwO1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgdmFyIGNvbXBvbmVudFN0YWNrSW5mbyA9ICcnO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaWYgKCFSZWFjdENvbXBvbmVudFRyZWVIb29rKSB7XG4gICAgICAgICAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rID0gcmVxdWlyZSgnLi9SZWFjdENvbXBvbmVudFRyZWVIb29rJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChkZWJ1Z0lEICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb21wb25lbnRTdGFja0luZm8gPSBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldFN0YWNrQWRkZW5kdW1CeUlEKGRlYnVnSUQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29tcG9uZW50U3RhY2tJbmZvID0gUmVhY3RDb21wb25lbnRUcmVlSG9vay5nZXRDdXJyZW50U3RhY2tBZGRlbmR1bShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIGNvbXBvbmVudFN0YWNrSW5mbykgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tSZWFjdFR5cGVTcGVjO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QvbGliL2NoZWNrUmVhY3RUeXBlU3BlYy5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vcmVhY3QvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9SZWFjdEVsZW1lbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcyA9IHJlcXVpcmUoJy4vUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgZ2V0SXRlcmF0b3JGbiA9IHJlcXVpcmUoJy4vZ2V0SXRlcmF0b3JGbicpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgIHByb3BUeXBlczoge1xuICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAqXG4gKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gKlxuICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gKiAgICAgfSxcbiAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICogICB9KTtcbiAqXG4gKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gKlxuICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAqXG4gKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gKlxuICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICBwcm9wVHlwZXM6IHtcbiAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAqICAgICAgICAgICk7XG4gKiAgICAgICAgfVxuICogICAgICB9XG4gKiAgICB9LFxuICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gKiAgfSk7XG4gKlxuICogQGludGVybmFsXG4gKi9cblxudmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxudmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyXG59O1xuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG4vKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgaWYgKHggPT09IHkpIHtcbiAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cbi8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4vKipcbiAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIgd2UgZG9uJ3QgdXNlIHJlYWxcbiAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAqL1xuZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIHRoaXMuc3RhY2sgPSAnJztcbn1cbi8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cblByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0ICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgIGlmICghbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICsgJ2Z1bmN0aW9uIGZvciB0aGUgYCVzYCBwcm9wIG9uIGAlc2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICsgJ2FuZCB3aWxsIG5vdCB3b3JrIGluIHByb2R1Y3Rpb24gd2l0aCB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uLiAnICsgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nLCBwcm9wRnVsbE5hbWUsIGNvbXBvbmVudE5hbWUpIDogdm9pZCAwO1xuICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICB2YXIgbG9jYXRpb25OYW1lID0gUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dO1xuICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbk5hbWUgKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uTmFtZSArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICB2YXIgbG9jYXRpb25OYW1lID0gUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dO1xuICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb25OYW1lICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyhudWxsKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgIH1cbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICB2YXIgbG9jYXRpb25OYW1lID0gUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb25OYW1lICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICBpZiAoIVJlYWN0RWxlbWVudC5pc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICB2YXIgbG9jYXRpb25OYW1lID0gUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb25OYW1lICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgIHZhciBsb2NhdGlvbk5hbWUgPSBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lc1tsb2NhdGlvbl07XG4gICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbk5hbWUgKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsb2NhdGlvbk5hbWUgPSBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lc1tsb2NhdGlvbl07XG4gICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uTmFtZSArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIHByb3BWYWx1ZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICB9XG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgfVxuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgbG9jYXRpb25OYW1lID0gUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbk5hbWUgKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsb2NhdGlvbk5hbWUgPSBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lc1tsb2NhdGlvbl07XG4gICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbk5hbWUgKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICB9XG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICB2YXIgbG9jYXRpb25OYW1lID0gUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbk5hbWUgKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgbG9jYXRpb25OYW1lID0gUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbk5hbWUgKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbn1cblxuZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgfVxuICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBSZWFjdEVsZW1lbnQuaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gIC8vIE5hdGl2ZSBTeW1ib2wuXG4gIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbmZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH1cbiAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICByZXR1cm4gJ29iamVjdCc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgcmV0dXJuICdzeW1ib2wnO1xuICB9XG4gIHJldHVybiBwcm9wVHlwZTtcbn1cblxuLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG5mdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ2RhdGUnO1xuICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgfVxuICB9XG4gIHJldHVybiBwcm9wVHlwZTtcbn1cblxuLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgfVxuICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC9saWIvUmVhY3RQcm9wVHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gJzE1LjQuMic7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9yZWFjdC9saWIvUmVhY3RWZXJzaW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIF9wcm9kSW52YXJpYW50ID0gcmVxdWlyZSgnLi9yZWFjdFByb2RJbnZhcmlhbnQnKTtcblxudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vUmVhY3RFbGVtZW50Jyk7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICAhUmVhY3RFbGVtZW50LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC4nKSA6IF9wcm9kSW52YXJpYW50KCcxNDMnKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9ubHlDaGlsZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3JlYWN0L2xpYi9vbmx5Q2hpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAdHlwZWNoZWNrc1xuICogXG4gKi9cblxuLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgaWYgKHggPT09IHkpIHtcbiAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgIC8vIEFkZGVkIHRoZSBub256ZXJvIHkgY2hlY2sgdG8gbWFrZSBGbG93IGhhcHB5LCBidXQgaXQgaXMgcmVkdW5kYW50XG4gICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5cbi8qKlxuICogUGVyZm9ybXMgZXF1YWxpdHkgYnkgaXRlcmF0aW5nIHRocm91Z2gga2V5cyBvbiBhbiBvYmplY3QgYW5kIHJldHVybmluZyBmYWxzZVxuICogd2hlbiBhbnkga2V5IGhhcyB2YWx1ZXMgd2hpY2ggYXJlIG5vdCBzdHJpY3RseSBlcXVhbCBiZXR3ZWVuIHRoZSBhcmd1bWVudHMuXG4gKiBSZXR1cm5zIHRydWUgd2hlbiB0aGUgdmFsdWVzIG9mIGFsbCBrZXlzIGFyZSBzdHJpY3RseSBlcXVhbC5cbiAqL1xuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGFsbG93RXF1YWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9mYmpzL2xpYi9zaGFsbG93RXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBGbHV4TWl4aW5MZWdhY3lcbiAqIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEZsdXhTdG9yZUdyb3VwID0gcmVxdWlyZSgnLi9GbHV4U3RvcmVHcm91cCcpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG5cbi8qKlxuICogYEZsdXhDb250YWluZXJgIHNob3VsZCBiZSBwcmVmZXJyZWQgb3ZlciB0aGlzIG1peGluLCBidXQgaXQgcmVxdWlyZXMgdXNpbmdcbiAqIHJlYWN0IHdpdGggY2xhc3Nlcy4gU28gdGhpcyBtaXhpbiBpcyBwcm92aWRlZCB3aGVyZSBpdCBpcyBub3QgeWV0IHBvc3NpYmxlXG4gKiB0byBjb252ZXJ0IGEgY29udGFpbmVyIHRvIGJlIGEgY2xhc3MuXG4gKlxuICogVGhpcyBtaXhpbiBzaG91bGQgYmUgdXNlZCBmb3IgUmVhY3QgY29tcG9uZW50cyB0aGF0IGhhdmUgc3RhdGUgYmFzZWQgcHVyZWx5XG4gKiBvbiBzdG9yZXMuIGB0aGlzLnByb3BzYCB3aWxsIG5vdCBiZSBhdmFpbGFibGUgaW5zaWRlIG9mIGBjYWxjdWxhdGVTdGF0ZSgpYC5cbiAqXG4gKiBUaGlzIG1peGluIHdpbGwgb25seSBgc2V0U3RhdGVgIG5vdCByZXBsYWNlIGl0LCBzbyB5b3Ugc2hvdWxkIGFsd2F5cyByZXR1cm5cbiAqIGV2ZXJ5IGtleSBpbiB5b3VyIHN0YXRlIHVubGVzcyB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuIENvbnNpZGVyIHRoaXM6XG4gKlxuICogICB2YXIgRm9vID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgIG1peGluczogW1xuICogICAgICAgRmx1eE1peGluTGVnYWN5KFtGb29TdG9yZV0pXG4gKiAgICAgXSxcbiAqXG4gKiAgICAgc3RhdGljczoge1xuICogICAgICAgY2FsY3VsYXRlU3RhdGUocHJldlN0YXRlKSB7XG4gKiAgICAgICAgIGlmICghcHJldlN0YXRlKSB7XG4gKiAgICAgICAgICAgcmV0dXJuIHtcbiAqICAgICAgICAgICAgIGZvbzogRm9vU3RvcmUuZ2V0Rm9vKCksXG4gKiAgICAgICAgICAgfTtcbiAqICAgICAgICAgfVxuICpcbiAqICAgICAgICAgcmV0dXJuIHtcbiAqICAgICAgICAgICBiYXI6IEZvb1N0b3JlLmdldEJhcigpLFxuICogICAgICAgICB9O1xuICogICAgICAgfVxuICogICAgIH0sXG4gKiAgIH0pO1xuICpcbiAqIE9uIHRoZSBzZWNvbmQgY2FsY3VsYXRlU3RhdGUgd2hlbiBwcmV2U3RhdGUgaXMgbm90IG51bGwsIHRoZSBzdGF0ZSB3aWxsIGJlXG4gKiB1cGRhdGVkIHRvIGNvbnRhaW4gdGhlIHByZXZpb3VzIGZvbyBBTkQgdGhlIGJhciB0aGF0IHdhcyBqdXN0IHJldHVybmVkLiBPbmx5XG4gKiByZXR1cm5pbmcgYmFyIHdpbGwgbm90IGRlbGV0ZSBmb28uXG4gKlxuICovXG5mdW5jdGlvbiBGbHV4TWl4aW5MZWdhY3koc3RvcmVzKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8geyB3aXRoUHJvcHM6IGZhbHNlIH0gOiBhcmd1bWVudHNbMV07XG5cbiAgc3RvcmVzID0gc3RvcmVzLmZpbHRlcihmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICByZXR1cm4gISFzdG9yZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGVuZm9yY2VJbnRlcmZhY2UodGhpcyk7XG4gICAgICByZXR1cm4gb3B0aW9ucy53aXRoUHJvcHMgPyB0aGlzLmNvbnN0cnVjdG9yLmNhbGN1bGF0ZVN0YXRlKG51bGwsIHRoaXMucHJvcHMpIDogdGhpcy5jb25zdHJ1Y3Rvci5jYWxjdWxhdGVTdGF0ZShudWxsLCB1bmRlZmluZWQpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIC8vIFRoaXMgdHJhY2tzIHdoZW4gYW55IHN0b3JlIGhhcyBjaGFuZ2VkIGFuZCB3ZSBtYXkgbmVlZCB0byB1cGRhdGUuXG4gICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdmFyIHNldENoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfTtcblxuICAgICAgLy8gVGhpcyBhZGRzIHN1YnNjcmlwdGlvbnMgdG8gc3RvcmVzLiBXaGVuIGEgc3RvcmUgY2hhbmdlcyBhbGwgd2UgZG8gaXNcbiAgICAgIC8vIHNldCBjaGFuZ2VkIHRvIHRydWUuXG4gICAgICB0aGlzLl9mbHV4TWl4aW5TdWJzY3JpcHRpb25zID0gc3RvcmVzLm1hcChmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmFkZExpc3RlbmVyKHNldENoYW5nZWQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFRoaXMgY2FsbGJhY2sgaXMgY2FsbGVkIGFmdGVyIHRoZSBkaXNwYXRjaCBvZiB0aGUgcmVsZXZhbnQgc3RvcmVzLiBJZlxuICAgICAgLy8gYW55IGhhdmUgcmVwb3J0ZWQgYSBjaGFuZ2Ugd2UgdXBkYXRlIHRoZSBzdGF0ZSwgdGhlbiByZXNldCBjaGFuZ2VkLlxuICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLndpdGhQcm9wcyA/IF90aGlzLmNvbnN0cnVjdG9yLmNhbGN1bGF0ZVN0YXRlKHByZXZTdGF0ZSwgX3RoaXMucHJvcHMpIDogX3RoaXMuY29uc3RydWN0b3IuY2FsY3VsYXRlU3RhdGUocHJldlN0YXRlLCB1bmRlZmluZWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9mbHV4TWl4aW5TdG9yZUdyb3VwID0gbmV3IEZsdXhTdG9yZUdyb3VwKHN0b3JlcywgY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fZmx1eE1peGluU3RvcmVHcm91cC5yZWxlYXNlKCk7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLl9mbHV4TWl4aW5TdWJzY3JpcHRpb25zLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICAgIF9yZWYgPSBfaS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBfcmVmO1xuXG4gICAgICAgIHN1YnNjcmlwdGlvbi5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ZsdXhNaXhpblN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVuZm9yY2VJbnRlcmZhY2Uobykge1xuICAhby5jb25zdHJ1Y3Rvci5jYWxjdWxhdGVTdGF0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdDb21wb25lbnRzIHRoYXQgdXNlIEZsdXhNaXhpbkxlZ2FjeSBtdXN0IGltcGxlbWVudCAnICsgJ2BjYWxjdWxhdGVTdGF0ZSgpYCBvbiB0aGUgc3RhdGljcyBvYmplY3QnKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmx1eE1peGluTGVnYWN5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vZmx1eC9saWIvRmx1eE1peGluTGVnYWN5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRmx1eFJlZHVjZVN0b3JlXG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgRmx1eFN0b3JlID0gcmVxdWlyZSgnLi9GbHV4U3RvcmUnKTtcblxudmFyIGFic3RyYWN0TWV0aG9kID0gcmVxdWlyZSgnLi9hYnN0cmFjdE1ldGhvZCcpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGJhc2ljIGJ1aWxkaW5nIGJsb2NrIG9mIGEgRmx1eCBhcHBsaWNhdGlvbi4gQWxsIG9mIHlvdXIgc3RvcmVzXG4gKiBzaG91bGQgZXh0ZW5kIHRoaXMgY2xhc3MuXG4gKlxuICogICBjbGFzcyBDb3VudGVyU3RvcmUgZXh0ZW5kcyBGbHV4UmVkdWNlU3RvcmU8bnVtYmVyPiB7XG4gKiAgICAgZ2V0SW5pdGlhbFN0YXRlKCk6IG51bWJlciB7XG4gKiAgICAgICByZXR1cm4gMTtcbiAqICAgICB9XG4gKlxuICogICAgIHJlZHVjZShzdGF0ZTogbnVtYmVyLCBhY3Rpb246IE9iamVjdCk6IG51bWJlciB7XG4gKiAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAqICAgICAgICAgY2FzZTogJ2FkZCc6XG4gKiAgICAgICAgICAgcmV0dXJuIHN0YXRlICsgYWN0aW9uLnZhbHVlO1xuICogICAgICAgICBjYXNlOiAnZG91YmxlJzpcbiAqICAgICAgICAgICByZXR1cm4gc3RhdGUgKiAyO1xuICogICAgICAgICBkZWZhdWx0OlxuICogICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKiAgIH1cbiAqL1xuXG52YXIgRmx1eFJlZHVjZVN0b3JlID0gKGZ1bmN0aW9uIChfRmx1eFN0b3JlKSB7XG4gIF9pbmhlcml0cyhGbHV4UmVkdWNlU3RvcmUsIF9GbHV4U3RvcmUpO1xuXG4gIGZ1bmN0aW9uIEZsdXhSZWR1Y2VTdG9yZShkaXNwYXRjaGVyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZsdXhSZWR1Y2VTdG9yZSk7XG5cbiAgICBfRmx1eFN0b3JlLmNhbGwodGhpcywgZGlzcGF0Y2hlcik7XG4gICAgdGhpcy5fc3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciB0aGF0IGV4cG9zZXMgdGhlIGVudGlyZSBzdGF0ZSBvZiB0aGlzIHN0b3JlLiBJZiB5b3VyIHN0YXRlIGlzIG5vdFxuICAgKiBpbW11dGFibGUgeW91IHNob3VsZCBvdmVycmlkZSB0aGlzIGFuZCBub3QgZXhwb3NlIF9zdGF0ZSBkaXJlY3RseS5cbiAgICovXG5cbiAgRmx1eFJlZHVjZVN0b3JlLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RydWN0cyB0aGUgaW5pdGlhbCBzdGF0ZSBmb3IgdGhpcyBzdG9yZS4gVGhpcyBpcyBjYWxsZWQgb25jZSBkdXJpbmdcbiAgICogY29uc3RydWN0aW9uIG9mIHRoZSBzdG9yZS5cbiAgICovXG5cbiAgRmx1eFJlZHVjZVN0b3JlLnByb3RvdHlwZS5nZXRJbml0aWFsU3RhdGUgPSBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIGFic3RyYWN0TWV0aG9kKCdGbHV4UmVkdWNlU3RvcmUnLCAnZ2V0SW5pdGlhbFN0YXRlJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gcmVkdWNlIGEgc3RyZWFtIG9mIGFjdGlvbnMgY29taW5nIGZyb20gdGhlIGRpc3BhdGNoZXIgaW50byBhXG4gICAqIHNpbmdsZSBzdGF0ZSBvYmplY3QuXG4gICAqL1xuXG4gIEZsdXhSZWR1Y2VTdG9yZS5wcm90b3R5cGUucmVkdWNlID0gZnVuY3Rpb24gcmVkdWNlKHN0YXRlLCBhY3Rpb24pIHtcbiAgICByZXR1cm4gYWJzdHJhY3RNZXRob2QoJ0ZsdXhSZWR1Y2VTdG9yZScsICdyZWR1Y2UnKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHR3byB2ZXJzaW9ucyBvZiBzdGF0ZSBhcmUgdGhlIHNhbWUuIFlvdSBkbyBub3QgbmVlZCB0byBvdmVycmlkZVxuICAgKiB0aGlzIGlmIHlvdXIgc3RhdGUgaXMgaW1tdXRhYmxlLlxuICAgKi9cblxuICBGbHV4UmVkdWNlU3RvcmUucHJvdG90eXBlLmFyZUVxdWFsID0gZnVuY3Rpb24gYXJlRXF1YWwob25lLCB0d28pIHtcbiAgICByZXR1cm4gb25lID09PSB0d287XG4gIH07XG5cbiAgRmx1eFJlZHVjZVN0b3JlLnByb3RvdHlwZS5fX2ludm9rZU9uRGlzcGF0Y2ggPSBmdW5jdGlvbiBfX2ludm9rZU9uRGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgdGhpcy5fX2NoYW5nZWQgPSBmYWxzZTtcblxuICAgIC8vIFJlZHVjZSB0aGUgc3RyZWFtIG9mIGluY29taW5nIGFjdGlvbnMgdG8gc3RhdGUsIHVwZGF0ZSB3aGVuIG5lY2Vzc2FyeS5cbiAgICB2YXIgc3RhcnRpbmdTdGF0ZSA9IHRoaXMuX3N0YXRlO1xuICAgIHZhciBlbmRpbmdTdGF0ZSA9IHRoaXMucmVkdWNlKHN0YXJ0aW5nU3RhdGUsIGFjdGlvbik7XG5cbiAgICAvLyBUaGlzIG1lYW5zIHlvdXIgZW5kaW5nIHN0YXRlIHNob3VsZCBuZXZlciBiZSB1bmRlZmluZWQuXG4gICAgIShlbmRpbmdTdGF0ZSAhPT0gdW5kZWZpbmVkKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICclcyByZXR1cm5lZCB1bmRlZmluZWQgZnJvbSByZWR1Y2UoLi4uKSwgZGlkIHlvdSBmb3JnZXQgdG8gcmV0dXJuICcgKyAnc3RhdGUgaW4gdGhlIGRlZmF1bHQgY2FzZT8gKHVzZSBudWxsIGlmIHRoaXMgd2FzIGludGVudGlvbmFsKScsIHRoaXMuY29uc3RydWN0b3IubmFtZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKCF0aGlzLmFyZUVxdWFsKHN0YXJ0aW5nU3RhdGUsIGVuZGluZ1N0YXRlKSkge1xuICAgICAgdGhpcy5fc3RhdGUgPSBlbmRpbmdTdGF0ZTtcblxuICAgICAgLy8gYF9fZW1pdENoYW5nZSgpYCBzZXRzIGB0aGlzLl9fY2hhbmdlZGAgdG8gdHJ1ZSBhbmQgdGhlbiB0aGUgYWN0dWFsXG4gICAgICAvLyBjaGFuZ2Ugd2lsbCBiZSBmaXJlZCBmcm9tIHRoZSBlbWl0dGVyIGF0IHRoZSBlbmQgb2YgdGhlIGRpc3BhdGNoLCB0aGlzXG4gICAgICAvLyBpcyByZXF1aXJlZCBpbiBvcmRlciB0byBzdXBwb3J0IG1ldGhvZHMgbGlrZSBgaGFzQ2hhbmdlZCgpYFxuICAgICAgdGhpcy5fX2VtaXRDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fX2NoYW5nZWQpIHtcbiAgICAgIHRoaXMuX19lbWl0dGVyLmVtaXQodGhpcy5fX2NoYW5nZUV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEZsdXhSZWR1Y2VTdG9yZTtcbn0pKEZsdXhTdG9yZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmx1eFJlZHVjZVN0b3JlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vZmx1eC9saWIvRmx1eFJlZHVjZVN0b3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRmx1eFN0b3JlXG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdmYmVtaXR0ZXInKTtcblxudmFyIEV2ZW50RW1pdHRlciA9IF9yZXF1aXJlLkV2ZW50RW1pdHRlcjtcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbW9zdCBiYXNpYyBmdW5jdGlvbmFsaXR5IGZvciBhIEZsdXhTdG9yZS4gRG8gbm90XG4gKiBleHRlbmQgdGhpcyBzdG9yZSBkaXJlY3RseTsgaW5zdGVhZCBleHRlbmQgRmx1eFJlZHVjZVN0b3JlIHdoZW4gY3JlYXRpbmcgYVxuICogbmV3IHN0b3JlLlxuICovXG5cbnZhciBGbHV4U3RvcmUgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGbHV4U3RvcmUoZGlzcGF0Y2hlcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmx1eFN0b3JlKTtcblxuICAgIHRoaXMuX19jbGFzc05hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICB0aGlzLl9fY2hhbmdlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19jaGFuZ2VFdmVudCA9ICdjaGFuZ2UnO1xuICAgIHRoaXMuX19kaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcbiAgICB0aGlzLl9fZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLl9kaXNwYXRjaFRva2VuID0gZGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgICAgX3RoaXMuX19pbnZva2VPbkRpc3BhdGNoKHBheWxvYWQpO1xuICAgIH0pO1xuICB9XG5cbiAgRmx1eFN0b3JlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuX19lbWl0dGVyLmFkZExpc3RlbmVyKHRoaXMuX19jaGFuZ2VFdmVudCwgY2FsbGJhY2spO1xuICB9O1xuXG4gIEZsdXhTdG9yZS5wcm90b3R5cGUuZ2V0RGlzcGF0Y2hlciA9IGZ1bmN0aW9uIGdldERpc3BhdGNoZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kaXNwYXRjaGVyO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGV4cG9zZXMgYSB1bmlxdWUgc3RyaW5nIHRvIGlkZW50aWZ5IGVhY2ggc3RvcmUncyByZWdpc3RlcmVkIGNhbGxiYWNrLlxuICAgKiBUaGlzIGlzIHVzZWQgd2l0aCB0aGUgZGlzcGF0Y2hlcidzIHdhaXRGb3IgbWV0aG9kIHRvIGRlY2xhcmF0aXZlbHkgZGVwZW5kXG4gICAqIG9uIG90aGVyIHN0b3JlcyB1cGRhdGluZyB0aGVtc2VsdmVzIGZpcnN0LlxuICAgKi9cblxuICBGbHV4U3RvcmUucHJvdG90eXBlLmdldERpc3BhdGNoVG9rZW4gPSBmdW5jdGlvbiBnZXREaXNwYXRjaFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwYXRjaFRva2VuO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHN0b3JlIGhhcyBjaGFuZ2VkIGR1cmluZyB0aGUgbW9zdCByZWNlbnQgZGlzcGF0Y2guXG4gICAqL1xuXG4gIEZsdXhTdG9yZS5wcm90b3R5cGUuaGFzQ2hhbmdlZCA9IGZ1bmN0aW9uIGhhc0NoYW5nZWQoKSB7XG4gICAgIXRoaXMuX19kaXNwYXRjaGVyLmlzRGlzcGF0Y2hpbmcoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICclcy5oYXNDaGFuZ2VkKCk6IE11c3QgYmUgaW52b2tlZCB3aGlsZSBkaXNwYXRjaGluZy4nLCB0aGlzLl9fY2xhc3NOYW1lKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRoaXMuX19jaGFuZ2VkO1xuICB9O1xuXG4gIEZsdXhTdG9yZS5wcm90b3R5cGUuX19lbWl0Q2hhbmdlID0gZnVuY3Rpb24gX19lbWl0Q2hhbmdlKCkge1xuICAgICF0aGlzLl9fZGlzcGF0Y2hlci5pc0Rpc3BhdGNoaW5nKCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnJXMuX19lbWl0Q2hhbmdlKCk6IE11c3QgYmUgaW52b2tlZCB3aGlsZSBkaXNwYXRjaGluZy4nLCB0aGlzLl9fY2xhc3NOYW1lKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5fX2NoYW5nZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBlbmNhcHN1bGF0ZXMgYWxsIGxvZ2ljIGZvciBpbnZva2luZyBfX29uRGlzcGF0Y2guIEl0IHNob3VsZFxuICAgKiBiZSB1c2VkIGZvciB0aGluZ3MgbGlrZSBjYXRjaGluZyBjaGFuZ2VzIGFuZCBlbWl0dGluZyB0aGVtIGFmdGVyIHRoZVxuICAgKiBzdWJjbGFzcyBoYXMgaGFuZGxlZCBhIHBheWxvYWQuXG4gICAqL1xuXG4gIEZsdXhTdG9yZS5wcm90b3R5cGUuX19pbnZva2VPbkRpc3BhdGNoID0gZnVuY3Rpb24gX19pbnZva2VPbkRpc3BhdGNoKHBheWxvYWQpIHtcbiAgICB0aGlzLl9fY2hhbmdlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19vbkRpc3BhdGNoKHBheWxvYWQpO1xuICAgIGlmICh0aGlzLl9fY2hhbmdlZCkge1xuICAgICAgdGhpcy5fX2VtaXR0ZXIuZW1pdCh0aGlzLl9fY2hhbmdlRXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSByZWdpc3RlcmVkIHdpdGggdGhlIGRpc3BhdGNoZXIgZHVyaW5nXG4gICAqIGluc3RhbnRpYXRpb24uIFN1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSB0aGlzIG1ldGhvZC4gVGhpcyBjYWxsYmFjayBpcyB0aGVcbiAgICogb25seSB3YXkgdGhlIHN0b3JlIHJlY2VpdmVzIG5ldyBkYXRhLlxuICAgKi9cblxuICBGbHV4U3RvcmUucHJvdG90eXBlLl9fb25EaXNwYXRjaCA9IGZ1bmN0aW9uIF9fb25EaXNwYXRjaChwYXlsb2FkKSB7XG4gICAgIWZhbHNlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJyVzIGhhcyBub3Qgb3ZlcnJpZGRlbiBGbHV4U3RvcmUuX19vbkRpc3BhdGNoKCksIHdoaWNoIGlzIHJlcXVpcmVkJywgdGhpcy5fX2NsYXNzTmFtZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIHJldHVybiBGbHV4U3RvcmU7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsdXhTdG9yZTtcblxuLy8gcHJpdmF0ZVxuXG4vLyBwcm90ZWN0ZWQsIGF2YWlsYWJsZSB0byBzdWJjbGFzc2VzXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9mbHV4L2xpYi9GbHV4U3RvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG52YXIgZmJlbWl0dGVyID0ge1xuICBFdmVudEVtaXR0ZXI6IHJlcXVpcmUoJy4vbGliL0Jhc2VFdmVudEVtaXR0ZXInKSxcbiAgRW1pdHRlclN1YnNjcmlwdGlvbiA6IHJlcXVpcmUoJy4vbGliL0VtaXR0ZXJTdWJzY3JpcHRpb24nKVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmYmVtaXR0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2ZiZW1pdHRlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBCYXNlRXZlbnRFbWl0dGVyXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBFbWl0dGVyU3Vic2NyaXB0aW9uID0gcmVxdWlyZSgnLi9FbWl0dGVyU3Vic2NyaXB0aW9uJyk7XG52YXIgRXZlbnRTdWJzY3JpcHRpb25WZW5kb3IgPSByZXF1aXJlKCcuL0V2ZW50U3Vic2NyaXB0aW9uVmVuZG9yJyk7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG4vKipcbiAqIEBjbGFzcyBCYXNlRXZlbnRFbWl0dGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFuIEV2ZW50RW1pdHRlciBpcyByZXNwb25zaWJsZSBmb3IgbWFuYWdpbmcgYSBzZXQgb2YgbGlzdGVuZXJzIGFuZCBwdWJsaXNoaW5nXG4gKiBldmVudHMgdG8gdGhlbSB3aGVuIGl0IGlzIHRvbGQgdGhhdCBzdWNoIGV2ZW50cyBoYXBwZW5lZC4gSW4gYWRkaXRpb24gdG8gdGhlXG4gKiBkYXRhIGZvciB0aGUgZ2l2ZW4gZXZlbnQgaXQgYWxzbyBzZW5kcyBhIGV2ZW50IGNvbnRyb2wgb2JqZWN0IHdoaWNoIGFsbG93c1xuICogdGhlIGxpc3RlbmVycy9oYW5kbGVycyB0byBwcmV2ZW50IHRoZSBkZWZhdWx0IGJlaGF2aW9yIG9mIHRoZSBnaXZlbiBldmVudC5cbiAqXG4gKiBUaGUgZW1pdHRlciBpcyBkZXNpZ25lZCB0byBiZSBnZW5lcmljIGVub3VnaCB0byBzdXBwb3J0IGFsbCB0aGUgZGlmZmVyZW50XG4gKiBjb250ZXh0cyBpbiB3aGljaCBvbmUgbWlnaHQgd2FudCB0byBlbWl0IGV2ZW50cy4gSXQgaXMgYSBzaW1wbGUgbXVsdGljYXN0XG4gKiBtZWNoYW5pc20gb24gdG9wIG9mIHdoaWNoIGV4dHJhIGZ1bmN0aW9uYWxpdHkgY2FuIGJlIGNvbXBvc2VkLiBGb3IgZXhhbXBsZSwgYVxuICogbW9yZSBhZHZhbmNlZCBlbWl0dGVyIG1heSB1c2UgYW4gRXZlbnRIb2xkZXIgYW5kIEV2ZW50RmFjdG9yeS5cbiAqL1xuXG52YXIgQmFzZUV2ZW50RW1pdHRlciA9IChmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG5cbiAgZnVuY3Rpb24gQmFzZUV2ZW50RW1pdHRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmFzZUV2ZW50RW1pdHRlcik7XG5cbiAgICB0aGlzLl9zdWJzY3JpYmVyID0gbmV3IEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yKCk7XG4gICAgdGhpcy5fY3VycmVudFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIGJlIGludm9rZWQgd2hlbiBldmVudHMgb2YgdGhlIHNwZWNpZmllZCB0eXBlIGFyZVxuICAgKiBlbWl0dGVkLiBBbiBvcHRpb25hbCBjYWxsaW5nIGNvbnRleHQgbWF5IGJlIHByb3ZpZGVkLiBUaGUgZGF0YSBhcmd1bWVudHNcbiAgICogZW1pdHRlZCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gICAqXG4gICAqIFRPRE86IEFubm90YXRlIHRoZSBsaXN0ZW5lciBhcmcncyB0eXBlLiBUaGlzIGlzIHRyaWNreSBiZWNhdXNlIGxpc3RlbmVyc1xuICAgKiAgICAgICBjYW4gYmUgaW52b2tlZCB3aXRoIHZhcmFyZ3MuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgLSBOYW1lIG9mIHRoZSBldmVudCB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIgLSBGdW5jdGlvbiB0byBpbnZva2Ugd2hlbiB0aGUgc3BlY2lmaWVkIGV2ZW50IGlzXG4gICAqICAgZW1pdHRlZFxuICAgKiBAcGFyYW0geyp9IGNvbnRleHQgLSBPcHRpb25hbCBjb250ZXh0IG9iamVjdCB0byB1c2Ugd2hlbiBpbnZva2luZyB0aGVcbiAgICogICBsaXN0ZW5lclxuICAgKi9cblxuICBCYXNlRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXIsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlci5hZGRTdWJzY3JpcHRpb24oZXZlbnRUeXBlLCBuZXcgRW1pdHRlclN1YnNjcmlwdGlvbih0aGlzLl9zdWJzY3JpYmVyLCBsaXN0ZW5lciwgY29udGV4dCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTaW1pbGFyIHRvIGFkZExpc3RlbmVyLCBleGNlcHQgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVtb3ZlZCBhZnRlciBpdCBpc1xuICAgKiBpbnZva2VkIG9uY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgLSBOYW1lIG9mIHRoZSBldmVudCB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIgLSBGdW5jdGlvbiB0byBpbnZva2Ugb25seSBvbmNlIHdoZW4gdGhlXG4gICAqICAgc3BlY2lmaWVkIGV2ZW50IGlzIGVtaXR0ZWRcbiAgICogQHBhcmFtIHsqfSBjb250ZXh0IC0gT3B0aW9uYWwgY29udGV4dCBvYmplY3QgdG8gdXNlIHdoZW4gaW52b2tpbmcgdGhlXG4gICAqICAgbGlzdGVuZXJcbiAgICovXG5cbiAgQmFzZUV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnRUeXBlLCBsaXN0ZW5lciwgY29udGV4dCkge1xuICAgIHZhciBlbWl0dGVyID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy5hZGRMaXN0ZW5lcihldmVudFR5cGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGVtaXR0ZXIucmVtb3ZlQ3VycmVudExpc3RlbmVyKCk7XG4gICAgICBsaXN0ZW5lci5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBvZiB0aGUgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMsIGluY2x1ZGluZyB0aG9zZSByZWdpc3RlcmVkIGFzXG4gICAqIGxpc3RlbmVyIG1hcHMuXG4gICAqXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gZXZlbnRUeXBlIC0gT3B0aW9uYWwgbmFtZSBvZiB0aGUgZXZlbnQgd2hvc2UgcmVnaXN0ZXJlZFxuICAgKiAgIGxpc3RlbmVycyB0byByZW1vdmVcbiAgICovXG5cbiAgQmFzZUV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50VHlwZSkge1xuICAgIHRoaXMuX3N1YnNjcmliZXIucmVtb3ZlQWxsU3Vic2NyaXB0aW9ucyhldmVudFR5cGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcm92aWRlcyBhbiBBUEkgdGhhdCBjYW4gYmUgY2FsbGVkIGR1cmluZyBhbiBldmVudGluZyBjeWNsZSB0byByZW1vdmUgdGhlXG4gICAqIGxhc3QgbGlzdGVuZXIgdGhhdCB3YXMgaW52b2tlZC4gVGhpcyBhbGxvd3MgYSBkZXZlbG9wZXIgdG8gcHJvdmlkZSBhbiBldmVudFxuICAgKiBvYmplY3QgdGhhdCBjYW4gcmVtb3ZlIHRoZSBsaXN0ZW5lciAob3IgbGlzdGVuZXIgbWFwKSBkdXJpbmcgdGhlXG4gICAqIGludm9jYXRpb24uXG4gICAqXG4gICAqIElmIGl0IGlzIGNhbGxlZCB3aGVuIG5vdCBpbnNpZGUgb2YgYW4gZW1pdHRpbmcgY3ljbGUgaXQgd2lsbCB0aHJvdy5cbiAgICpcbiAgICogQHRocm93cyB7RXJyb3J9IFdoZW4gY2FsbGVkIG5vdCBkdXJpbmcgYW4gZXZlbnRpbmcgY3ljbGVcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogICB2YXIgc3Vic2NyaXB0aW9uID0gZW1pdHRlci5hZGRMaXN0ZW5lck1hcCh7XG4gICAqICAgICBzb21lRXZlbnQ6IGZ1bmN0aW9uKGRhdGEsIGV2ZW50KSB7XG4gICAqICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgKiAgICAgICBlbWl0dGVyLnJlbW92ZUN1cnJlbnRMaXN0ZW5lcigpO1xuICAgKiAgICAgfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiAgIGVtaXR0ZXIuZW1pdCgnc29tZUV2ZW50JywgJ2FiYycpOyAvLyBsb2dzICdhYmMnXG4gICAqICAgZW1pdHRlci5lbWl0KCdzb21lRXZlbnQnLCAnZGVmJyk7IC8vIGRvZXMgbm90IGxvZyBhbnl0aGluZ1xuICAgKi9cblxuICBCYXNlRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVDdXJyZW50TGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVDdXJyZW50TGlzdGVuZXIoKSB7XG4gICAgISEhdGhpcy5fY3VycmVudFN1YnNjcmlwdGlvbiA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdOb3QgaW4gYW4gZW1pdHRpbmcgY3ljbGU7IHRoZXJlIGlzIG5vIGN1cnJlbnQgc3Vic2NyaXB0aW9uJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuX3N1YnNjcmliZXIucmVtb3ZlU3Vic2NyaXB0aW9uKHRoaXMuX2N1cnJlbnRTdWJzY3JpcHRpb24pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGxpc3RlbmVycyB0aGF0IGFyZSBjdXJyZW50bHkgcmVnaXN0ZXJlZCBmb3IgdGhlIGdpdmVuXG4gICAqIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIC0gTmFtZSBvZiB0aGUgZXZlbnQgdG8gcXVlcnlcbiAgICogQHJldHVybiB7YXJyYXl9XG4gICAqL1xuXG4gIEJhc2VFdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudFR5cGUpIC8qIFRPRE86IEFycmF5PEV2ZW50U3Vic2NyaXB0aW9uPiAqL3tcbiAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IHRoaXMuX3N1YnNjcmliZXIuZ2V0U3Vic2NyaXB0aW9uc0ZvclR5cGUoZXZlbnRUeXBlKTtcbiAgICByZXR1cm4gc3Vic2NyaXB0aW9ucyA/IHN1YnNjcmlwdGlvbnMuZmlsdGVyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlKS5tYXAoZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi5saXN0ZW5lcjtcbiAgICB9KSA6IFtdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCBvZiB0aGUgZ2l2ZW4gdHlwZSB3aXRoIHRoZSBnaXZlbiBkYXRhLiBBbGwgaGFuZGxlcnMgb2YgdGhhdFxuICAgKiBwYXJ0aWN1bGFyIHR5cGUgd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSAtIE5hbWUgb2YgdGhlIGV2ZW50IHRvIGVtaXRcbiAgICogQHBhcmFtIHsqfSBBcmJpdHJhcnkgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byBlYWNoIHJlZ2lzdGVyZWQgbGlzdGVuZXJcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogICBlbWl0dGVyLmFkZExpc3RlbmVyKCdzb21lRXZlbnQnLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAqICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICogICB9KTtcbiAgICpcbiAgICogICBlbWl0dGVyLmVtaXQoJ3NvbWVFdmVudCcsICdhYmMnKTsgLy8gbG9ncyAnYWJjJ1xuICAgKi9cblxuICBCYXNlRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudFR5cGUpIHtcbiAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IHRoaXMuX3N1YnNjcmliZXIuZ2V0U3Vic2NyaXB0aW9uc0ZvclR5cGUoZXZlbnRUeXBlKTtcbiAgICBpZiAoc3Vic2NyaXB0aW9ucykge1xuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzdWJzY3JpcHRpb25zKTtcbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBrZXlzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpaV07XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBzdWJzY3JpcHRpb25zW2tleV07XG4gICAgICAgIC8vIFRoZSBzdWJzY3JpcHRpb24gbWF5IGhhdmUgYmVlbiByZW1vdmVkIGR1cmluZyB0aGlzIGV2ZW50IGxvb3AuXG4gICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICB0aGlzLl9jdXJyZW50U3Vic2NyaXB0aW9uID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgIHRoaXMuX19lbWl0VG9TdWJzY3JpcHRpb24uYXBwbHkodGhpcywgW3N1YnNjcmlwdGlvbl0uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fY3VycmVudFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBQcm92aWRlcyBhIGhvb2sgdG8gb3ZlcnJpZGUgaG93IHRoZSBlbWl0dGVyIGVtaXRzIGFuIGV2ZW50IHRvIGEgc3BlY2lmaWNcbiAgICogc3Vic2NyaXB0aW9uLiBUaGlzIGFsbG93cyB5b3UgdG8gc2V0IHVwIGxvZ2dpbmcgYW5kIGVycm9yIGJvdW5kYXJpZXNcbiAgICogc3BlY2lmaWMgdG8geW91ciBlbnZpcm9ubWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFbWl0dGVyU3Vic2NyaXB0aW9ufSBzdWJzY3JpcHRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICAgKiBAcGFyYW0geyp9IEFyYml0cmFyeSBhcmd1bWVudHMgdG8gYmUgcGFzc2VkIHRvIGVhY2ggcmVnaXN0ZXJlZCBsaXN0ZW5lclxuICAgKi9cblxuICBCYXNlRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fX2VtaXRUb1N1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIF9fZW1pdFRvU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbiwgZXZlbnRUeXBlKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHN1YnNjcmlwdGlvbi5saXN0ZW5lci5hcHBseShzdWJzY3JpcHRpb24uY29udGV4dCwgYXJncyk7XG4gIH07XG5cbiAgcmV0dXJuIEJhc2VFdmVudEVtaXR0ZXI7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VFdmVudEVtaXR0ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9mYmVtaXR0ZXIvbGliL0Jhc2VFdmVudEVtaXR0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqIFxuICogQHByb3ZpZGVzTW9kdWxlIEVtaXR0ZXJTdWJzY3JpcHRpb25cbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEV2ZW50U3Vic2NyaXB0aW9uID0gcmVxdWlyZSgnLi9FdmVudFN1YnNjcmlwdGlvbicpO1xuXG4vKipcbiAqIEVtaXR0ZXJTdWJzY3JpcHRpb24gcmVwcmVzZW50cyBhIHN1YnNjcmlwdGlvbiB3aXRoIGxpc3RlbmVyIGFuZCBjb250ZXh0IGRhdGEuXG4gKi9cblxudmFyIEVtaXR0ZXJTdWJzY3JpcHRpb24gPSAoZnVuY3Rpb24gKF9FdmVudFN1YnNjcmlwdGlvbikge1xuICBfaW5oZXJpdHMoRW1pdHRlclN1YnNjcmlwdGlvbiwgX0V2ZW50U3Vic2NyaXB0aW9uKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudFN1YnNjcmlwdGlvblZlbmRvcn0gc3Vic2NyaWJlciAtIFRoZSBzdWJzY3JpYmVyIHRoYXQgY29udHJvbHNcbiAgICogICB0aGlzIHN1YnNjcmlwdGlvblxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciAtIEZ1bmN0aW9uIHRvIGludm9rZSB3aGVuIHRoZSBzcGVjaWZpZWQgZXZlbnQgaXNcbiAgICogICBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Kn0gY29udGV4dCAtIE9wdGlvbmFsIGNvbnRleHQgb2JqZWN0IHRvIHVzZSB3aGVuIGludm9raW5nIHRoZVxuICAgKiAgIGxpc3RlbmVyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEVtaXR0ZXJTdWJzY3JpcHRpb24oc3Vic2NyaWJlciwgbGlzdGVuZXIsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRW1pdHRlclN1YnNjcmlwdGlvbik7XG5cbiAgICBfRXZlbnRTdWJzY3JpcHRpb24uY2FsbCh0aGlzLCBzdWJzY3JpYmVyKTtcbiAgICB0aGlzLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgfVxuXG4gIHJldHVybiBFbWl0dGVyU3Vic2NyaXB0aW9uO1xufSkoRXZlbnRTdWJzY3JpcHRpb24pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXJTdWJzY3JpcHRpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9mYmVtaXR0ZXIvbGliL0VtaXR0ZXJTdWJzY3JpcHRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRXZlbnRTdWJzY3JpcHRpb25cbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEV2ZW50U3Vic2NyaXB0aW9uIHJlcHJlc2VudHMgYSBzdWJzY3JpcHRpb24gdG8gYSBwYXJ0aWN1bGFyIGV2ZW50LiBJdCBjYW5cbiAqIHJlbW92ZSBpdHMgb3duIHN1YnNjcmlwdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEV2ZW50U3Vic2NyaXB0aW9uID0gKGZ1bmN0aW9uICgpIHtcblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudFN1YnNjcmlwdGlvblZlbmRvcn0gc3Vic2NyaWJlciB0aGUgc3Vic2NyaWJlciB0aGF0IGNvbnRyb2xzXG4gICAqICAgdGhpcyBzdWJzY3JpcHRpb24uXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEV2ZW50U3Vic2NyaXB0aW9uKHN1YnNjcmliZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRTdWJzY3JpcHRpb24pO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVyID0gc3Vic2NyaWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoaXMgc3Vic2NyaXB0aW9uIGZyb20gdGhlIHN1YnNjcmliZXIgdGhhdCBjb250cm9scyBpdC5cbiAgICovXG5cbiAgRXZlbnRTdWJzY3JpcHRpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpYmVyKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZXIucmVtb3ZlU3Vic2NyaXB0aW9uKHRoaXMpO1xuICAgICAgdGhpcy5zdWJzY3JpYmVyID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEV2ZW50U3Vic2NyaXB0aW9uO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudFN1YnNjcmlwdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2ZiZW1pdHRlci9saWIvRXZlbnRTdWJzY3JpcHRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqIFxuICogQHByb3ZpZGVzTW9kdWxlIEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxuLyoqXG4gKiBFdmVudFN1YnNjcmlwdGlvblZlbmRvciBzdG9yZXMgYSBzZXQgb2YgRXZlbnRTdWJzY3JpcHRpb25zIHRoYXQgYXJlXG4gKiBzdWJzY3JpYmVkIHRvIGEgcGFydGljdWxhciBldmVudCB0eXBlLlxuICovXG5cbnZhciBFdmVudFN1YnNjcmlwdGlvblZlbmRvciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudFN1YnNjcmlwdGlvblZlbmRvcik7XG5cbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zRm9yVHlwZSA9IHt9O1xuICAgIHRoaXMuX2N1cnJlbnRTdWJzY3JpcHRpb24gPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBzdWJzY3JpcHRpb24ga2V5ZWQgYnkgYW4gZXZlbnQgdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICAgKiBAcGFyYW0ge0V2ZW50U3Vic2NyaXB0aW9ufSBzdWJzY3JpcHRpb25cbiAgICovXG5cbiAgRXZlbnRTdWJzY3JpcHRpb25WZW5kb3IucHJvdG90eXBlLmFkZFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIGFkZFN1YnNjcmlwdGlvbihldmVudFR5cGUsIHN1YnNjcmlwdGlvbikge1xuICAgICEoc3Vic2NyaXB0aW9uLnN1YnNjcmliZXIgPT09IHRoaXMpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ1RoZSBzdWJzY3JpYmVyIG9mIHRoZSBzdWJzY3JpcHRpb24gaXMgaW5jb3JyZWN0bHkgc2V0LicpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmlwdGlvbnNGb3JUeXBlW2V2ZW50VHlwZV0pIHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnNGb3JUeXBlW2V2ZW50VHlwZV0gPSBbXTtcbiAgICB9XG4gICAgdmFyIGtleSA9IHRoaXMuX3N1YnNjcmlwdGlvbnNGb3JUeXBlW2V2ZW50VHlwZV0ubGVuZ3RoO1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnNGb3JUeXBlW2V2ZW50VHlwZV0ucHVzaChzdWJzY3JpcHRpb24pO1xuICAgIHN1YnNjcmlwdGlvbi5ldmVudFR5cGUgPSBldmVudFR5cGU7XG4gICAgc3Vic2NyaXB0aW9uLmtleSA9IGtleTtcbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgYnVsayBzZXQgb2YgdGhlIHN1YnNjcmlwdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gZXZlbnRUeXBlIC0gT3B0aW9uYWwgbmFtZSBvZiB0aGUgZXZlbnQgdHlwZSB3aG9zZVxuICAgKiAgIHJlZ2lzdGVyZWQgc3Vwc2NyaXB0aW9ucyB0byByZW1vdmUsIGlmIG51bGwgcmVtb3ZlIGFsbCBzdWJzY3JpcHRpb25zLlxuICAgKi9cblxuICBFdmVudFN1YnNjcmlwdGlvblZlbmRvci5wcm90b3R5cGUucmVtb3ZlQWxsU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIHJlbW92ZUFsbFN1YnNjcmlwdGlvbnMoZXZlbnRUeXBlKSB7XG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zRm9yVHlwZSA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdGhpcy5fc3Vic2NyaXB0aW9uc0ZvclR5cGVbZXZlbnRUeXBlXTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBzcGVjaWZpYyBzdWJzY3JpcHRpb24uIEluc3RlYWQgb2YgY2FsbGluZyB0aGlzIGZ1bmN0aW9uLCBjYWxsXG4gICAqIGBzdWJzY3JpcHRpb24ucmVtb3ZlKClgIGRpcmVjdGx5LlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gc3Vic2NyaXB0aW9uXG4gICAqL1xuXG4gIEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yLnByb3RvdHlwZS5yZW1vdmVTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiByZW1vdmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgdmFyIGV2ZW50VHlwZSA9IHN1YnNjcmlwdGlvbi5ldmVudFR5cGU7XG4gICAgdmFyIGtleSA9IHN1YnNjcmlwdGlvbi5rZXk7XG5cbiAgICB2YXIgc3Vic2NyaXB0aW9uc0ZvclR5cGUgPSB0aGlzLl9zdWJzY3JpcHRpb25zRm9yVHlwZVtldmVudFR5cGVdO1xuICAgIGlmIChzdWJzY3JpcHRpb25zRm9yVHlwZSkge1xuICAgICAgZGVsZXRlIHN1YnNjcmlwdGlvbnNGb3JUeXBlW2tleV07XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhcnJheSBvZiBzdWJzY3JpcHRpb25zIHRoYXQgYXJlIGN1cnJlbnRseSByZWdpc3RlcmVkIGZvciB0aGVcbiAgICogZ2l2ZW4gZXZlbnQgdHlwZS5cbiAgICpcbiAgICogTm90ZTogVGhpcyBhcnJheSBjYW4gYmUgcG90ZW50aWFsbHkgc3BhcnNlIGFzIHN1YnNjcmlwdGlvbnMgYXJlIGRlbGV0ZWRcbiAgICogZnJvbSBpdCB3aGVuIHRoZXkgYXJlIHJlbW92ZWQuXG4gICAqXG4gICAqIFRPRE86IFRoaXMgcmV0dXJucyBhIG51bGxhYmxlIGFycmF5LiB3YXQ/XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAgICogQHJldHVybiB7P2FycmF5fVxuICAgKi9cblxuICBFdmVudFN1YnNjcmlwdGlvblZlbmRvci5wcm90b3R5cGUuZ2V0U3Vic2NyaXB0aW9uc0ZvclR5cGUgPSBmdW5jdGlvbiBnZXRTdWJzY3JpcHRpb25zRm9yVHlwZShldmVudFR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fc3Vic2NyaXB0aW9uc0ZvclR5cGVbZXZlbnRUeXBlXTtcbiAgfTtcblxuICByZXR1cm4gRXZlbnRTdWJzY3JpcHRpb25WZW5kb3I7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50U3Vic2NyaXB0aW9uVmVuZG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vZmJlbWl0dGVyL2xpYi9FdmVudFN1YnNjcmlwdGlvblZlbmRvci5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBhYnN0cmFjdE1ldGhvZFxuICogXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG5cbmZ1bmN0aW9uIGFic3RyYWN0TWV0aG9kKGNsYXNzTmFtZSwgbWV0aG9kTmFtZSkge1xuICAhZmFsc2UgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnU3ViY2xhc3NlcyBvZiAlcyBtdXN0IG92ZXJyaWRlICVzKCkgd2l0aCB0aGVpciBvd24gaW1wbGVtZW50YXRpb24uJywgY2xhc3NOYW1lLCBtZXRob2ROYW1lKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWJzdHJhY3RNZXRob2Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9mbHV4L2xpYi9hYnN0cmFjdE1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfaW1tdXRhYmxlID0gcmVxdWlyZShcImltbXV0YWJsZVwiKTtcblxudmFyIF9pbW11dGFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW1tdXRhYmxlKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCJmbHV4L3V0aWxzXCIpO1xuXG52YXIgX0FwcEFjdGlvblR5cGVzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9BcHBBY3Rpb25UeXBlcy5qc3hcIik7XG5cbnZhciBfQXBwQWN0aW9uVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXBwQWN0aW9uVHlwZXMpO1xuXG52YXIgX0Rpc3BhdGNoZXIgPSByZXF1aXJlKFwiLi4vRGlzcGF0Y2hlci5qc3hcIik7XG5cbnZhciBfRGlzcGF0Y2hlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EaXNwYXRjaGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQXBwU3RvcmUgPSBmdW5jdGlvbiAoX1JlZHVjZVN0b3JlKSB7XG5cdF9pbmhlcml0cyhBcHBTdG9yZSwgX1JlZHVjZVN0b3JlKTtcblxuXHRmdW5jdGlvbiBBcHBTdG9yZSgpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXBwU3RvcmUpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBcHBTdG9yZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFwcFN0b3JlKSkuY2FsbCh0aGlzLCBfRGlzcGF0Y2hlcjIuZGVmYXVsdCkpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEFwcFN0b3JlLCBbe1xuXHRcdGtleTogXCJnZXRJbml0aWFsU3RhdGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuXHRcdFx0cmV0dXJuIF9pbW11dGFibGUyLmRlZmF1bHQuTWFwKHsgY2xzOiBcIlwiLCByb2xlczogW10gfSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInJlZHVjZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZWR1Y2Uoc3RhdGUsIGFjdGlvbikge1xuXHRcdFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdFx0XHRjYXNlIF9BcHBBY3Rpb25UeXBlczIuZGVmYXVsdC5TRVRfQVBQX01PRFVMRTpcblx0XHRcdFx0XHRyZXR1cm4gc3RhdGUuc2V0KFwiY2xzXCIsIGFjdGlvbi5jbHMpO1xuXHRcdFx0XHRjYXNlIF9BcHBBY3Rpb25UeXBlczIuZGVmYXVsdC5TRVRfQVBQX1JPTEVTOlxuXHRcdFx0XHRcdHJldHVybiBzdGF0ZS5zZXQoXCJyb2xlc1wiLCBhY3Rpb24ucm9sZXMpO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQXBwU3RvcmU7XG59KF91dGlscy5SZWR1Y2VTdG9yZSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFwcFN0b3JlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3RvcmVzL0FwcFN0b3JlLmpzeFxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiAgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiAgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsLkltbXV0YWJsZSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO3ZhciBTTElDRSQwID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNsYXNzKGN0b3IsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAoc3VwZXJDbGFzcykge1xuICAgICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgICB9XG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gSXRlcmFibGUodmFsdWUpIHtcbiAgICAgIHJldHVybiBpc0l0ZXJhYmxlKHZhbHVlKSA/IHZhbHVlIDogU2VxKHZhbHVlKTtcbiAgICB9XG5cblxuICBjcmVhdGVDbGFzcyhLZXllZEl0ZXJhYmxlLCBJdGVyYWJsZSk7XG4gICAgZnVuY3Rpb24gS2V5ZWRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlzS2V5ZWQodmFsdWUpID8gdmFsdWUgOiBLZXllZFNlcSh2YWx1ZSk7XG4gICAgfVxuXG5cbiAgY3JlYXRlQ2xhc3MoSW5kZXhlZEl0ZXJhYmxlLCBJdGVyYWJsZSk7XG4gICAgZnVuY3Rpb24gSW5kZXhlZEl0ZXJhYmxlKHZhbHVlKSB7XG4gICAgICByZXR1cm4gaXNJbmRleGVkKHZhbHVlKSA/IHZhbHVlIDogSW5kZXhlZFNlcSh2YWx1ZSk7XG4gICAgfVxuXG5cbiAgY3JlYXRlQ2xhc3MoU2V0SXRlcmFibGUsIEl0ZXJhYmxlKTtcbiAgICBmdW5jdGlvbiBTZXRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGlzSXRlcmFibGUodmFsdWUpICYmICFpc0Fzc29jaWF0aXZlKHZhbHVlKSA/IHZhbHVlIDogU2V0U2VxKHZhbHVlKTtcbiAgICB9XG5cblxuXG4gIGZ1bmN0aW9uIGlzSXRlcmFibGUobWF5YmVJdGVyYWJsZSkge1xuICAgIHJldHVybiAhIShtYXliZUl0ZXJhYmxlICYmIG1heWJlSXRlcmFibGVbSVNfSVRFUkFCTEVfU0VOVElORUxdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzS2V5ZWQobWF5YmVLZXllZCkge1xuICAgIHJldHVybiAhIShtYXliZUtleWVkICYmIG1heWJlS2V5ZWRbSVNfS0VZRURfU0VOVElORUxdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzSW5kZXhlZChtYXliZUluZGV4ZWQpIHtcbiAgICByZXR1cm4gISEobWF5YmVJbmRleGVkICYmIG1heWJlSW5kZXhlZFtJU19JTkRFWEVEX1NFTlRJTkVMXSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Fzc29jaWF0aXZlKG1heWJlQXNzb2NpYXRpdmUpIHtcbiAgICByZXR1cm4gaXNLZXllZChtYXliZUFzc29jaWF0aXZlKSB8fCBpc0luZGV4ZWQobWF5YmVBc3NvY2lhdGl2ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc09yZGVyZWQobWF5YmVPcmRlcmVkKSB7XG4gICAgcmV0dXJuICEhKG1heWJlT3JkZXJlZCAmJiBtYXliZU9yZGVyZWRbSVNfT1JERVJFRF9TRU5USU5FTF0pO1xuICB9XG5cbiAgSXRlcmFibGUuaXNJdGVyYWJsZSA9IGlzSXRlcmFibGU7XG4gIEl0ZXJhYmxlLmlzS2V5ZWQgPSBpc0tleWVkO1xuICBJdGVyYWJsZS5pc0luZGV4ZWQgPSBpc0luZGV4ZWQ7XG4gIEl0ZXJhYmxlLmlzQXNzb2NpYXRpdmUgPSBpc0Fzc29jaWF0aXZlO1xuICBJdGVyYWJsZS5pc09yZGVyZWQgPSBpc09yZGVyZWQ7XG5cbiAgSXRlcmFibGUuS2V5ZWQgPSBLZXllZEl0ZXJhYmxlO1xuICBJdGVyYWJsZS5JbmRleGVkID0gSW5kZXhlZEl0ZXJhYmxlO1xuICBJdGVyYWJsZS5TZXQgPSBTZXRJdGVyYWJsZTtcblxuXG4gIHZhciBJU19JVEVSQUJMRV9TRU5USU5FTCA9ICdAQF9fSU1NVVRBQkxFX0lURVJBQkxFX19AQCc7XG4gIHZhciBJU19LRVlFRF9TRU5USU5FTCA9ICdAQF9fSU1NVVRBQkxFX0tFWUVEX19AQCc7XG4gIHZhciBJU19JTkRFWEVEX1NFTlRJTkVMID0gJ0BAX19JTU1VVEFCTEVfSU5ERVhFRF9fQEAnO1xuICB2YXIgSVNfT1JERVJFRF9TRU5USU5FTCA9ICdAQF9fSU1NVVRBQkxFX09SREVSRURfX0BAJztcblxuICAvLyBVc2VkIGZvciBzZXR0aW5nIHByb3RvdHlwZSBtZXRob2RzIHRoYXQgSUU4IGNob2tlcyBvbi5cbiAgdmFyIERFTEVURSA9ICdkZWxldGUnO1xuXG4gIC8vIENvbnN0YW50cyBkZXNjcmliaW5nIHRoZSBzaXplIG9mIHRyaWUgbm9kZXMuXG4gIHZhciBTSElGVCA9IDU7IC8vIFJlc3VsdGVkIGluIGJlc3QgcGVyZm9ybWFuY2UgYWZ0ZXIgX19fX19fP1xuICB2YXIgU0laRSA9IDEgPDwgU0hJRlQ7XG4gIHZhciBNQVNLID0gU0laRSAtIDE7XG5cbiAgLy8gQSBjb25zaXN0ZW50IHNoYXJlZCB2YWx1ZSByZXByZXNlbnRpbmcgXCJub3Qgc2V0XCIgd2hpY2ggZXF1YWxzIG5vdGhpbmcgb3RoZXJcbiAgLy8gdGhhbiBpdHNlbGYsIGFuZCBub3RoaW5nIHRoYXQgY291bGQgYmUgcHJvdmlkZWQgZXh0ZXJuYWxseS5cbiAgdmFyIE5PVF9TRVQgPSB7fTtcblxuICAvLyBCb29sZWFuIHJlZmVyZW5jZXMsIFJvdWdoIGVxdWl2YWxlbnQgb2YgYGJvb2wgJmAuXG4gIHZhciBDSEFOR0VfTEVOR1RIID0geyB2YWx1ZTogZmFsc2UgfTtcbiAgdmFyIERJRF9BTFRFUiA9IHsgdmFsdWU6IGZhbHNlIH07XG5cbiAgZnVuY3Rpb24gTWFrZVJlZihyZWYpIHtcbiAgICByZWYudmFsdWUgPSBmYWxzZTtcbiAgICByZXR1cm4gcmVmO1xuICB9XG5cbiAgZnVuY3Rpb24gU2V0UmVmKHJlZikge1xuICAgIHJlZiAmJiAocmVmLnZhbHVlID0gdHJ1ZSk7XG4gIH1cblxuICAvLyBBIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWx1ZSByZXByZXNlbnRpbmcgYW4gXCJvd25lclwiIGZvciB0cmFuc2llbnQgd3JpdGVzXG4gIC8vIHRvIHRyaWVzLiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgb25seSBldmVyIGVxdWFsIGl0c2VsZiwgYW5kIHdpbGwgbm90IGVxdWFsXG4gIC8vIHRoZSByZXR1cm4gb2YgYW55IHN1YnNlcXVlbnQgY2FsbCBvZiB0aGlzIGZ1bmN0aW9uLlxuICBmdW5jdGlvbiBPd25lcklEKCkge31cblxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9jb3B5LWFycmF5LWlubGluZVxuICBmdW5jdGlvbiBhcnJDb3B5KGFyciwgb2Zmc2V0KSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgdmFyIGxlbiA9IE1hdGgubWF4KDAsIGFyci5sZW5ndGggLSBvZmZzZXQpO1xuICAgIHZhciBuZXdBcnIgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbGVuOyBpaSsrKSB7XG4gICAgICBuZXdBcnJbaWldID0gYXJyW2lpICsgb2Zmc2V0XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuc3VyZVNpemUoaXRlcikge1xuICAgIGlmIChpdGVyLnNpemUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaXRlci5zaXplID0gaXRlci5fX2l0ZXJhdGUocmV0dXJuVHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVyLnNpemU7XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwSW5kZXgoaXRlciwgaW5kZXgpIHtcbiAgICAvLyBUaGlzIGltcGxlbWVudHMgXCJpcyBhcnJheSBpbmRleFwiIHdoaWNoIHRoZSBFQ01BU3RyaW5nIHNwZWMgZGVmaW5lcyBhczpcbiAgICAvL1xuICAgIC8vICAgICBBIFN0cmluZyBwcm9wZXJ0eSBuYW1lIFAgaXMgYW4gYXJyYXkgaW5kZXggaWYgYW5kIG9ubHkgaWZcbiAgICAvLyAgICAgVG9TdHJpbmcoVG9VaW50MzIoUCkpIGlzIGVxdWFsIHRvIFAgYW5kIFRvVWludDMyKFApIGlzIG5vdCBlcXVhbFxuICAgIC8vICAgICB0byAyXjMy4oiSMS5cbiAgICAvL1xuICAgIC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1hcnJheS1leG90aWMtb2JqZWN0c1xuICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICB2YXIgdWludDMySW5kZXggPSBpbmRleCA+Pj4gMDsgLy8gTiA+Pj4gMCBpcyBzaG9ydGhhbmQgZm9yIFRvVWludDMyXG4gICAgICBpZiAoJycgKyB1aW50MzJJbmRleCAhPT0gaW5kZXggfHwgdWludDMySW5kZXggPT09IDQyOTQ5NjcyOTUpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgIH1cbiAgICAgIGluZGV4ID0gdWludDMySW5kZXg7XG4gICAgfVxuICAgIHJldHVybiBpbmRleCA8IDAgPyBlbnN1cmVTaXplKGl0ZXIpICsgaW5kZXggOiBpbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiB3aG9sZVNsaWNlKGJlZ2luLCBlbmQsIHNpemUpIHtcbiAgICByZXR1cm4gKGJlZ2luID09PSAwIHx8IChzaXplICE9PSB1bmRlZmluZWQgJiYgYmVnaW4gPD0gLXNpemUpKSAmJlxuICAgICAgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IChzaXplICE9PSB1bmRlZmluZWQgJiYgZW5kID49IHNpemUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVCZWdpbihiZWdpbiwgc2l6ZSkge1xuICAgIHJldHVybiByZXNvbHZlSW5kZXgoYmVnaW4sIHNpemUsIDApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUVuZChlbmQsIHNpemUpIHtcbiAgICByZXR1cm4gcmVzb2x2ZUluZGV4KGVuZCwgc2l6ZSwgc2l6ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlSW5kZXgoaW5kZXgsIHNpemUsIGRlZmF1bHRJbmRleCkge1xuICAgIHJldHVybiBpbmRleCA9PT0gdW5kZWZpbmVkID9cbiAgICAgIGRlZmF1bHRJbmRleCA6XG4gICAgICBpbmRleCA8IDAgP1xuICAgICAgICBNYXRoLm1heCgwLCBzaXplICsgaW5kZXgpIDpcbiAgICAgICAgc2l6ZSA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICBpbmRleCA6XG4gICAgICAgICAgTWF0aC5taW4oc2l6ZSwgaW5kZXgpO1xuICB9XG5cbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuXG4gIHZhciBJVEVSQVRFX0tFWVMgPSAwO1xuICB2YXIgSVRFUkFURV9WQUxVRVMgPSAxO1xuICB2YXIgSVRFUkFURV9FTlRSSUVTID0gMjtcblxuICB2YXIgUkVBTF9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSBSRUFMX0lURVJBVE9SX1NZTUJPTCB8fCBGQVVYX0lURVJBVE9SX1NZTUJPTDtcblxuXG4gIGZ1bmN0aW9uIEl0ZXJhdG9yKG5leHQpIHtcbiAgICAgIHRoaXMubmV4dCA9IG5leHQ7XG4gICAgfVxuXG4gICAgSXRlcmF0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJ1tJdGVyYXRvcl0nO1xuICAgIH07XG5cblxuICBJdGVyYXRvci5LRVlTID0gSVRFUkFURV9LRVlTO1xuICBJdGVyYXRvci5WQUxVRVMgPSBJVEVSQVRFX1ZBTFVFUztcbiAgSXRlcmF0b3IuRU5UUklFUyA9IElURVJBVEVfRU5UUklFUztcblxuICBJdGVyYXRvci5wcm90b3R5cGUuaW5zcGVjdCA9XG4gIEl0ZXJhdG9yLnByb3RvdHlwZS50b1NvdXJjZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTsgfVxuICBJdGVyYXRvci5wcm90b3R5cGVbSVRFUkFUT1JfU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIGZ1bmN0aW9uIGl0ZXJhdG9yVmFsdWUodHlwZSwgaywgdiwgaXRlcmF0b3JSZXN1bHQpIHtcbiAgICB2YXIgdmFsdWUgPSB0eXBlID09PSAwID8gayA6IHR5cGUgPT09IDEgPyB2IDogW2ssIHZdO1xuICAgIGl0ZXJhdG9yUmVzdWx0ID8gKGl0ZXJhdG9yUmVzdWx0LnZhbHVlID0gdmFsdWUpIDogKGl0ZXJhdG9yUmVzdWx0ID0ge1xuICAgICAgdmFsdWU6IHZhbHVlLCBkb25lOiBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiBpdGVyYXRvclJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRG9uZSgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBmdW5jdGlvbiBoYXNJdGVyYXRvcihtYXliZUl0ZXJhYmxlKSB7XG4gICAgcmV0dXJuICEhZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzSXRlcmF0b3IobWF5YmVJdGVyYXRvcikge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yICYmIHR5cGVvZiBtYXliZUl0ZXJhdG9yLm5leHQgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJdGVyYXRvcihpdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihpdGVyYWJsZSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm4gJiYgaXRlcmF0b3JGbi5jYWxsKGl0ZXJhYmxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4oaXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGl0ZXJhYmxlICYmIChcbiAgICAgIChSRUFMX0lURVJBVE9SX1NZTUJPTCAmJiBpdGVyYWJsZVtSRUFMX0lURVJBVE9SX1NZTUJPTF0pIHx8XG4gICAgICBpdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF1cbiAgICApO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcic7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhTZXEsIEl0ZXJhYmxlKTtcbiAgICBmdW5jdGlvbiBTZXEodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZW1wdHlTZXF1ZW5jZSgpIDpcbiAgICAgICAgaXNJdGVyYWJsZSh2YWx1ZSkgPyB2YWx1ZS50b1NlcSgpIDogc2VxRnJvbVZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBTZXEub2YgPSBmdW5jdGlvbigvKi4uLnZhbHVlcyovKSB7XG4gICAgICByZXR1cm4gU2VxKGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIFNlcS5wcm90b3R5cGUudG9TZXEgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBTZXEucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKCdTZXEgeycsICd9Jyk7XG4gICAgfTtcblxuICAgIFNlcS5wcm90b3R5cGUuY2FjaGVSZXN1bHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5fY2FjaGUgJiYgdGhpcy5fX2l0ZXJhdGVVbmNhY2hlZCkge1xuICAgICAgICB0aGlzLl9jYWNoZSA9IHRoaXMuZW50cnlTZXEoKS50b0FycmF5KCk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuX2NhY2hlLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvLyBhYnN0cmFjdCBfX2l0ZXJhdGVVbmNhY2hlZChmbiwgcmV2ZXJzZSlcblxuICAgIFNlcS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIHJldHVybiBzZXFJdGVyYXRlKHRoaXMsIGZuLCByZXZlcnNlLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgLy8gYWJzdHJhY3QgX19pdGVyYXRvclVuY2FjaGVkKHR5cGUsIHJldmVyc2UpXG5cbiAgICBTZXEucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICByZXR1cm4gc2VxSXRlcmF0b3IodGhpcywgdHlwZSwgcmV2ZXJzZSwgdHJ1ZSk7XG4gICAgfTtcblxuXG5cbiAgY3JlYXRlQ2xhc3MoS2V5ZWRTZXEsIFNlcSk7XG4gICAgZnVuY3Rpb24gS2V5ZWRTZXEodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgZW1wdHlTZXF1ZW5jZSgpLnRvS2V5ZWRTZXEoKSA6XG4gICAgICAgIGlzSXRlcmFibGUodmFsdWUpID9cbiAgICAgICAgICAoaXNLZXllZCh2YWx1ZSkgPyB2YWx1ZS50b1NlcSgpIDogdmFsdWUuZnJvbUVudHJ5U2VxKCkpIDpcbiAgICAgICAgICBrZXllZFNlcUZyb21WYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgS2V5ZWRTZXEucHJvdG90eXBlLnRvS2V5ZWRTZXEgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cblxuXG4gIGNyZWF0ZUNsYXNzKEluZGV4ZWRTZXEsIFNlcSk7XG4gICAgZnVuY3Rpb24gSW5kZXhlZFNlcSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgPyBlbXB0eVNlcXVlbmNlKCkgOlxuICAgICAgICAhaXNJdGVyYWJsZSh2YWx1ZSkgPyBpbmRleGVkU2VxRnJvbVZhbHVlKHZhbHVlKSA6XG4gICAgICAgIGlzS2V5ZWQodmFsdWUpID8gdmFsdWUuZW50cnlTZXEoKSA6IHZhbHVlLnRvSW5kZXhlZFNlcSgpO1xuICAgIH1cblxuICAgIEluZGV4ZWRTZXEub2YgPSBmdW5jdGlvbigvKi4uLnZhbHVlcyovKSB7XG4gICAgICByZXR1cm4gSW5kZXhlZFNlcShhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBJbmRleGVkU2VxLnByb3RvdHlwZS50b0luZGV4ZWRTZXEgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBJbmRleGVkU2VxLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX190b1N0cmluZygnU2VxIFsnLCAnXScpO1xuICAgIH07XG5cbiAgICBJbmRleGVkU2VxLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgcmV0dXJuIHNlcUl0ZXJhdGUodGhpcywgZm4sIHJldmVyc2UsIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgSW5kZXhlZFNlcS5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHJldHVybiBzZXFJdGVyYXRvcih0aGlzLCB0eXBlLCByZXZlcnNlLCBmYWxzZSk7XG4gICAgfTtcblxuXG5cbiAgY3JlYXRlQ2xhc3MoU2V0U2VxLCBTZXEpO1xuICAgIGZ1bmN0aW9uIFNldFNlcSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IGVtcHR5U2VxdWVuY2UoKSA6XG4gICAgICAgICFpc0l0ZXJhYmxlKHZhbHVlKSA/IGluZGV4ZWRTZXFGcm9tVmFsdWUodmFsdWUpIDpcbiAgICAgICAgaXNLZXllZCh2YWx1ZSkgPyB2YWx1ZS5lbnRyeVNlcSgpIDogdmFsdWVcbiAgICAgICkudG9TZXRTZXEoKTtcbiAgICB9XG5cbiAgICBTZXRTZXEub2YgPSBmdW5jdGlvbigvKi4uLnZhbHVlcyovKSB7XG4gICAgICByZXR1cm4gU2V0U2VxKGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIFNldFNlcS5wcm90b3R5cGUudG9TZXRTZXEgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cblxuXG4gIFNlcS5pc1NlcSA9IGlzU2VxO1xuICBTZXEuS2V5ZWQgPSBLZXllZFNlcTtcbiAgU2VxLlNldCA9IFNldFNlcTtcbiAgU2VxLkluZGV4ZWQgPSBJbmRleGVkU2VxO1xuXG4gIHZhciBJU19TRVFfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9TRVFfX0BAJztcblxuICBTZXEucHJvdG90eXBlW0lTX1NFUV9TRU5USU5FTF0gPSB0cnVlO1xuXG5cblxuICBjcmVhdGVDbGFzcyhBcnJheVNlcSwgSW5kZXhlZFNlcSk7XG4gICAgZnVuY3Rpb24gQXJyYXlTZXEoYXJyYXkpIHtcbiAgICAgIHRoaXMuX2FycmF5ID0gYXJyYXk7XG4gICAgICB0aGlzLnNpemUgPSBhcnJheS5sZW5ndGg7XG4gICAgfVxuXG4gICAgQXJyYXlTZXEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGluZGV4LCBub3RTZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzKGluZGV4KSA/IHRoaXMuX2FycmF5W3dyYXBJbmRleCh0aGlzLCBpbmRleCldIDogbm90U2V0VmFsdWU7XG4gICAgfTtcblxuICAgIEFycmF5U2VxLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGFycmF5ID0gdGhpcy5fYXJyYXk7XG4gICAgICB2YXIgbWF4SW5kZXggPSBhcnJheS5sZW5ndGggLSAxO1xuICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8PSBtYXhJbmRleDsgaWkrKykge1xuICAgICAgICBpZiAoZm4oYXJyYXlbcmV2ZXJzZSA/IG1heEluZGV4IC0gaWkgOiBpaV0sIGlpLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gaWkgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaWk7XG4gICAgfTtcblxuICAgIEFycmF5U2VxLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGFycmF5ID0gdGhpcy5fYXJyYXk7XG4gICAgICB2YXIgbWF4SW5kZXggPSBhcnJheS5sZW5ndGggLSAxO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSBcbiAgICAgICAge3JldHVybiBpaSA+IG1heEluZGV4ID9cbiAgICAgICAgICBpdGVyYXRvckRvbmUoKSA6XG4gICAgICAgICAgaXRlcmF0b3JWYWx1ZSh0eXBlLCBpaSwgYXJyYXlbcmV2ZXJzZSA/IG1heEluZGV4IC0gaWkrKyA6IGlpKytdKX1cbiAgICAgICk7XG4gICAgfTtcblxuXG5cbiAgY3JlYXRlQ2xhc3MoT2JqZWN0U2VxLCBLZXllZFNlcSk7XG4gICAgZnVuY3Rpb24gT2JqZWN0U2VxKG9iamVjdCkge1xuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuICAgICAgdGhpcy5fb2JqZWN0ID0gb2JqZWN0O1xuICAgICAgdGhpcy5fa2V5cyA9IGtleXM7XG4gICAgICB0aGlzLnNpemUgPSBrZXlzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBPYmplY3RTZXEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGtleSwgbm90U2V0VmFsdWUpIHtcbiAgICAgIGlmIChub3RTZXRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmICF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiBub3RTZXRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9vYmplY3Rba2V5XTtcbiAgICB9O1xuXG4gICAgT2JqZWN0U2VxLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICB9O1xuXG4gICAgT2JqZWN0U2VxLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgdmFyIG9iamVjdCA9IHRoaXMuX29iamVjdDtcbiAgICAgIHZhciBrZXlzID0gdGhpcy5fa2V5cztcbiAgICAgIHZhciBtYXhJbmRleCA9IGtleXMubGVuZ3RoIC0gMTtcbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPD0gbWF4SW5kZXg7IGlpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbcmV2ZXJzZSA/IG1heEluZGV4IC0gaWkgOiBpaV07XG4gICAgICAgIGlmIChmbihvYmplY3Rba2V5XSwga2V5LCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gaWkgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaWk7XG4gICAgfTtcblxuICAgIE9iamVjdFNlcS5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHZhciBvYmplY3QgPSB0aGlzLl9vYmplY3Q7XG4gICAgICB2YXIga2V5cyA9IHRoaXMuX2tleXM7XG4gICAgICB2YXIgbWF4SW5kZXggPSBrZXlzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgaWkgPSAwO1xuICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW3JldmVyc2UgPyBtYXhJbmRleCAtIGlpIDogaWldO1xuICAgICAgICByZXR1cm4gaWkrKyA+IG1heEluZGV4ID9cbiAgICAgICAgICBpdGVyYXRvckRvbmUoKSA6XG4gICAgICAgICAgaXRlcmF0b3JWYWx1ZSh0eXBlLCBrZXksIG9iamVjdFtrZXldKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgT2JqZWN0U2VxLnByb3RvdHlwZVtJU19PUkRFUkVEX1NFTlRJTkVMXSA9IHRydWU7XG5cblxuICBjcmVhdGVDbGFzcyhJdGVyYWJsZVNlcSwgSW5kZXhlZFNlcSk7XG4gICAgZnVuY3Rpb24gSXRlcmFibGVTZXEoaXRlcmFibGUpIHtcbiAgICAgIHRoaXMuX2l0ZXJhYmxlID0gaXRlcmFibGU7XG4gICAgICB0aGlzLnNpemUgPSBpdGVyYWJsZS5sZW5ndGggfHwgaXRlcmFibGUuc2l6ZTtcbiAgICB9XG5cbiAgICBJdGVyYWJsZVNlcS5wcm90b3R5cGUuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdGUoZm4sIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhYmxlID0gdGhpcy5faXRlcmFibGU7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihpdGVyYWJsZSk7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICBpZiAoaXNJdGVyYXRvcihpdGVyYXRvcikpIHtcbiAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoZm4oc3RlcC52YWx1ZSwgaXRlcmF0aW9ucysrLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcblxuICAgIEl0ZXJhYmxlU2VxLnByb3RvdHlwZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICB2YXIgaXRlcmFibGUgPSB0aGlzLl9pdGVyYWJsZTtcbiAgICAgIHZhciBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlKTtcbiAgICAgIGlmICghaXNJdGVyYXRvcihpdGVyYXRvcikpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihpdGVyYXRvckRvbmUpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICByZXR1cm4gc3RlcC5kb25lID8gc3RlcCA6IGl0ZXJhdG9yVmFsdWUodHlwZSwgaXRlcmF0aW9ucysrLCBzdGVwLnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cblxuXG4gIGNyZWF0ZUNsYXNzKEl0ZXJhdG9yU2VxLCBJbmRleGVkU2VxKTtcbiAgICBmdW5jdGlvbiBJdGVyYXRvclNlcShpdGVyYXRvcikge1xuICAgICAgdGhpcy5faXRlcmF0b3IgPSBpdGVyYXRvcjtcbiAgICAgIHRoaXMuX2l0ZXJhdG9yQ2FjaGUgPSBbXTtcbiAgICB9XG5cbiAgICBJdGVyYXRvclNlcS5wcm90b3R5cGUuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdGUoZm4sIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5faXRlcmF0b3I7XG4gICAgICB2YXIgY2FjaGUgPSB0aGlzLl9pdGVyYXRvckNhY2hlO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgd2hpbGUgKGl0ZXJhdGlvbnMgPCBjYWNoZS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGZuKGNhY2hlW2l0ZXJhdGlvbnNdLCBpdGVyYXRpb25zKyssIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBpdGVyYXRpb25zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgdmFyIHZhbCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIGNhY2hlW2l0ZXJhdGlvbnNdID0gdmFsO1xuICAgICAgICBpZiAoZm4odmFsLCBpdGVyYXRpb25zKyssIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICB9O1xuXG4gICAgSXRlcmF0b3JTZXEucHJvdG90eXBlLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlUmVzdWx0KCkuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMuX2l0ZXJhdG9yO1xuICAgICAgdmFyIGNhY2hlID0gdGhpcy5faXRlcmF0b3JDYWNoZTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICBpZiAoaXRlcmF0aW9ucyA+PSBjYWNoZS5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoc3RlcC5kb25lKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FjaGVbaXRlcmF0aW9uc10gPSBzdGVwLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMsIGNhY2hlW2l0ZXJhdGlvbnMrK10pO1xuICAgICAgfSk7XG4gICAgfTtcblxuXG5cblxuICAvLyAjIHByYWdtYSBIZWxwZXIgZnVuY3Rpb25zXG5cbiAgZnVuY3Rpb24gaXNTZXEobWF5YmVTZXEpIHtcbiAgICByZXR1cm4gISEobWF5YmVTZXEgJiYgbWF5YmVTZXFbSVNfU0VRX1NFTlRJTkVMXSk7XG4gIH1cblxuICB2YXIgRU1QVFlfU0VRO1xuXG4gIGZ1bmN0aW9uIGVtcHR5U2VxdWVuY2UoKSB7XG4gICAgcmV0dXJuIEVNUFRZX1NFUSB8fCAoRU1QVFlfU0VRID0gbmV3IEFycmF5U2VxKFtdKSk7XG4gIH1cblxuICBmdW5jdGlvbiBrZXllZFNlcUZyb21WYWx1ZSh2YWx1ZSkge1xuICAgIHZhciBzZXEgPVxuICAgICAgQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBuZXcgQXJyYXlTZXEodmFsdWUpLmZyb21FbnRyeVNlcSgpIDpcbiAgICAgIGlzSXRlcmF0b3IodmFsdWUpID8gbmV3IEl0ZXJhdG9yU2VxKHZhbHVlKS5mcm9tRW50cnlTZXEoKSA6XG4gICAgICBoYXNJdGVyYXRvcih2YWx1ZSkgPyBuZXcgSXRlcmFibGVTZXEodmFsdWUpLmZyb21FbnRyeVNlcSgpIDpcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyBuZXcgT2JqZWN0U2VxKHZhbHVlKSA6XG4gICAgICB1bmRlZmluZWQ7XG4gICAgaWYgKCFzZXEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdFeHBlY3RlZCBBcnJheSBvciBpdGVyYWJsZSBvYmplY3Qgb2YgW2ssIHZdIGVudHJpZXMsICcrXG4gICAgICAgICdvciBrZXllZCBvYmplY3Q6ICcgKyB2YWx1ZVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluZGV4ZWRTZXFGcm9tVmFsdWUodmFsdWUpIHtcbiAgICB2YXIgc2VxID0gbWF5YmVJbmRleGVkU2VxRnJvbVZhbHVlKHZhbHVlKTtcbiAgICBpZiAoIXNlcSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgJ0V4cGVjdGVkIEFycmF5IG9yIGl0ZXJhYmxlIG9iamVjdCBvZiB2YWx1ZXM6ICcgKyB2YWx1ZVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlcUZyb21WYWx1ZSh2YWx1ZSkge1xuICAgIHZhciBzZXEgPSBtYXliZUluZGV4ZWRTZXFGcm9tVmFsdWUodmFsdWUpIHx8XG4gICAgICAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBuZXcgT2JqZWN0U2VxKHZhbHVlKSk7XG4gICAgaWYgKCFzZXEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdFeHBlY3RlZCBBcnJheSBvciBpdGVyYWJsZSBvYmplY3Qgb2YgdmFsdWVzLCBvciBrZXllZCBvYmplY3Q6ICcgKyB2YWx1ZVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1heWJlSW5kZXhlZFNlcUZyb21WYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiAoXG4gICAgICBpc0FycmF5TGlrZSh2YWx1ZSkgPyBuZXcgQXJyYXlTZXEodmFsdWUpIDpcbiAgICAgIGlzSXRlcmF0b3IodmFsdWUpID8gbmV3IEl0ZXJhdG9yU2VxKHZhbHVlKSA6XG4gICAgICBoYXNJdGVyYXRvcih2YWx1ZSkgPyBuZXcgSXRlcmFibGVTZXEodmFsdWUpIDpcbiAgICAgIHVuZGVmaW5lZFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXFJdGVyYXRlKHNlcSwgZm4sIHJldmVyc2UsIHVzZUtleXMpIHtcbiAgICB2YXIgY2FjaGUgPSBzZXEuX2NhY2hlO1xuICAgIGlmIChjYWNoZSkge1xuICAgICAgdmFyIG1heEluZGV4ID0gY2FjaGUubGVuZ3RoIC0gMTtcbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPD0gbWF4SW5kZXg7IGlpKyspIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gY2FjaGVbcmV2ZXJzZSA/IG1heEluZGV4IC0gaWkgOiBpaV07XG4gICAgICAgIGlmIChmbihlbnRyeVsxXSwgdXNlS2V5cyA/IGVudHJ5WzBdIDogaWksIHNlcSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGlpICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlpO1xuICAgIH1cbiAgICByZXR1cm4gc2VxLl9faXRlcmF0ZVVuY2FjaGVkKGZuLCByZXZlcnNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlcUl0ZXJhdG9yKHNlcSwgdHlwZSwgcmV2ZXJzZSwgdXNlS2V5cykge1xuICAgIHZhciBjYWNoZSA9IHNlcS5fY2FjaGU7XG4gICAgaWYgKGNhY2hlKSB7XG4gICAgICB2YXIgbWF4SW5kZXggPSBjYWNoZS5sZW5ndGggLSAxO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIgZW50cnkgPSBjYWNoZVtyZXZlcnNlID8gbWF4SW5kZXggLSBpaSA6IGlpXTtcbiAgICAgICAgcmV0dXJuIGlpKysgPiBtYXhJbmRleCA/XG4gICAgICAgICAgaXRlcmF0b3JEb25lKCkgOlxuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwgdXNlS2V5cyA/IGVudHJ5WzBdIDogaWkgLSAxLCBlbnRyeVsxXSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlcS5fX2l0ZXJhdG9yVW5jYWNoZWQodHlwZSwgcmV2ZXJzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBmcm9tSlMoanNvbiwgY29udmVydGVyKSB7XG4gICAgcmV0dXJuIGNvbnZlcnRlciA/XG4gICAgICBmcm9tSlNXaXRoKGNvbnZlcnRlciwganNvbiwgJycsIHsnJzoganNvbn0pIDpcbiAgICAgIGZyb21KU0RlZmF1bHQoanNvbik7XG4gIH1cblxuICBmdW5jdGlvbiBmcm9tSlNXaXRoKGNvbnZlcnRlciwganNvbiwga2V5LCBwYXJlbnRKU09OKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbikpIHtcbiAgICAgIHJldHVybiBjb252ZXJ0ZXIuY2FsbChwYXJlbnRKU09OLCBrZXksIEluZGV4ZWRTZXEoanNvbikubWFwKGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIGZyb21KU1dpdGgoY29udmVydGVyLCB2LCBrLCBqc29uKX0pKTtcbiAgICB9XG4gICAgaWYgKGlzUGxhaW5PYmooanNvbikpIHtcbiAgICAgIHJldHVybiBjb252ZXJ0ZXIuY2FsbChwYXJlbnRKU09OLCBrZXksIEtleWVkU2VxKGpzb24pLm1hcChmdW5jdGlvbih2LCBrKSAge3JldHVybiBmcm9tSlNXaXRoKGNvbnZlcnRlciwgdiwgaywganNvbil9KSk7XG4gICAgfVxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgZnVuY3Rpb24gZnJvbUpTRGVmYXVsdChqc29uKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbikpIHtcbiAgICAgIHJldHVybiBJbmRleGVkU2VxKGpzb24pLm1hcChmcm9tSlNEZWZhdWx0KS50b0xpc3QoKTtcbiAgICB9XG4gICAgaWYgKGlzUGxhaW5PYmooanNvbikpIHtcbiAgICAgIHJldHVybiBLZXllZFNlcShqc29uKS5tYXAoZnJvbUpTRGVmYXVsdCkudG9NYXAoKTtcbiAgICB9XG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBmdW5jdGlvbiBpc1BsYWluT2JqKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0IHx8IHZhbHVlLmNvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuIGV4dGVuc2lvbiBvZiB0aGUgXCJzYW1lLXZhbHVlXCIgYWxnb3JpdGhtIGFzIFtkZXNjcmliZWQgZm9yIHVzZSBieSBFUzYgTWFwXG4gICAqIGFuZCBTZXRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcCNLZXlfZXF1YWxpdHkpXG4gICAqXG4gICAqIE5hTiBpcyBjb25zaWRlcmVkIHRoZSBzYW1lIGFzIE5hTiwgaG93ZXZlciAtMCBhbmQgMCBhcmUgY29uc2lkZXJlZCB0aGUgc2FtZVxuICAgKiB2YWx1ZSwgd2hpY2ggaXMgZGlmZmVyZW50IGZyb20gdGhlIGFsZ29yaXRobSBkZXNjcmliZWQgYnlcbiAgICogW2BPYmplY3QuaXNgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXMpLlxuICAgKlxuICAgKiBUaGlzIGlzIGV4dGVuZGVkIGZ1cnRoZXIgdG8gYWxsb3cgT2JqZWN0cyB0byBkZXNjcmliZSB0aGUgdmFsdWVzIHRoZXlcbiAgICogcmVwcmVzZW50LCBieSB3YXkgb2YgYHZhbHVlT2ZgIG9yIGBlcXVhbHNgIChhbmQgYGhhc2hDb2RlYCkuXG4gICAqXG4gICAqIE5vdGU6IGJlY2F1c2Ugb2YgdGhpcyBleHRlbnNpb24sIHRoZSBrZXkgZXF1YWxpdHkgb2YgSW1tdXRhYmxlLk1hcCBhbmQgdGhlXG4gICAqIHZhbHVlIGVxdWFsaXR5IG9mIEltbXV0YWJsZS5TZXQgd2lsbCBkaWZmZXIgZnJvbSBFUzYgTWFwIGFuZCBTZXQuXG4gICAqXG4gICAqICMjIyBEZWZpbmluZyBjdXN0b20gdmFsdWVzXG4gICAqXG4gICAqIFRoZSBlYXNpZXN0IHdheSB0byBkZXNjcmliZSB0aGUgdmFsdWUgYW4gb2JqZWN0IHJlcHJlc2VudHMgaXMgYnkgaW1wbGVtZW50aW5nXG4gICAqIGB2YWx1ZU9mYC4gRm9yIGV4YW1wbGUsIGBEYXRlYCByZXByZXNlbnRzIGEgdmFsdWUgYnkgcmV0dXJuaW5nIGEgdW5peFxuICAgKiB0aW1lc3RhbXAgZm9yIGB2YWx1ZU9mYDpcbiAgICpcbiAgICogICAgIHZhciBkYXRlMSA9IG5ldyBEYXRlKDEyMzQ1Njc4OTAwMDApOyAvLyBGcmkgRmViIDEzIDIwMDkgLi4uXG4gICAqICAgICB2YXIgZGF0ZTIgPSBuZXcgRGF0ZSgxMjM0NTY3ODkwMDAwKTtcbiAgICogICAgIGRhdGUxLnZhbHVlT2YoKTsgLy8gMTIzNDU2Nzg5MDAwMFxuICAgKiAgICAgYXNzZXJ0KCBkYXRlMSAhPT0gZGF0ZTIgKTtcbiAgICogICAgIGFzc2VydCggSW1tdXRhYmxlLmlzKCBkYXRlMSwgZGF0ZTIgKSApO1xuICAgKlxuICAgKiBOb3RlOiBvdmVycmlkaW5nIGB2YWx1ZU9mYCBtYXkgaGF2ZSBvdGhlciBpbXBsaWNhdGlvbnMgaWYgeW91IHVzZSB0aGlzIG9iamVjdFxuICAgKiB3aGVyZSBKYXZhU2NyaXB0IGV4cGVjdHMgYSBwcmltaXRpdmUsIHN1Y2ggYXMgaW1wbGljaXQgc3RyaW5nIGNvZXJjaW9uLlxuICAgKlxuICAgKiBGb3IgbW9yZSBjb21wbGV4IHR5cGVzLCBlc3BlY2lhbGx5IGNvbGxlY3Rpb25zLCBpbXBsZW1lbnRpbmcgYHZhbHVlT2ZgIG1heVxuICAgKiBub3QgYmUgcGVyZm9ybWFudC4gQW4gYWx0ZXJuYXRpdmUgaXMgdG8gaW1wbGVtZW50IGBlcXVhbHNgIGFuZCBgaGFzaENvZGVgLlxuICAgKlxuICAgKiBgZXF1YWxzYCB0YWtlcyBhbm90aGVyIG9iamVjdCwgcHJlc3VtYWJseSBvZiBzaW1pbGFyIHR5cGUsIGFuZCByZXR1cm5zIHRydWVcbiAgICogaWYgdGhlIGl0IGlzIGVxdWFsLiBFcXVhbGl0eSBpcyBzeW1tZXRyaWNhbCwgc28gdGhlIHNhbWUgcmVzdWx0IHNob3VsZCBiZVxuICAgKiByZXR1cm5lZCBpZiB0aGlzIGFuZCB0aGUgYXJndW1lbnQgYXJlIGZsaXBwZWQuXG4gICAqXG4gICAqICAgICBhc3NlcnQoIGEuZXF1YWxzKGIpID09PSBiLmVxdWFscyhhKSApO1xuICAgKlxuICAgKiBgaGFzaENvZGVgIHJldHVybnMgYSAzMmJpdCBpbnRlZ2VyIG51bWJlciByZXByZXNlbnRpbmcgdGhlIG9iamVjdCB3aGljaCB3aWxsXG4gICAqIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIGhvdyB0byBzdG9yZSB0aGUgdmFsdWUgb2JqZWN0IGluIGEgTWFwIG9yIFNldC4gWW91IG11c3RcbiAgICogcHJvdmlkZSBib3RoIG9yIG5laXRoZXIgbWV0aG9kcywgb25lIG11c3Qgbm90IGV4aXN0IHdpdGhvdXQgdGhlIG90aGVyLlxuICAgKlxuICAgKiBBbHNvLCBhbiBpbXBvcnRhbnQgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlc2UgbWV0aG9kcyBtdXN0IGJlIHVwaGVsZDogaWYgdHdvXG4gICAqIHZhbHVlcyBhcmUgZXF1YWwsIHRoZXkgKm11c3QqIHJldHVybiB0aGUgc2FtZSBoYXNoQ29kZS4gSWYgdGhlIHZhbHVlcyBhcmUgbm90XG4gICAqIGVxdWFsLCB0aGV5IG1pZ2h0IGhhdmUgdGhlIHNhbWUgaGFzaENvZGU7IHRoaXMgaXMgY2FsbGVkIGEgaGFzaCBjb2xsaXNpb24sXG4gICAqIGFuZCB3aGlsZSB1bmRlc2lyYWJsZSBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgaXQgaXMgYWNjZXB0YWJsZS5cbiAgICpcbiAgICogICAgIGlmIChhLmVxdWFscyhiKSkge1xuICAgKiAgICAgICBhc3NlcnQoIGEuaGFzaENvZGUoKSA9PT0gYi5oYXNoQ29kZSgpICk7XG4gICAqICAgICB9XG4gICAqXG4gICAqIEFsbCBJbW11dGFibGUgY29sbGVjdGlvbnMgaW1wbGVtZW50IGBlcXVhbHNgIGFuZCBgaGFzaENvZGVgLlxuICAgKlxuICAgKi9cbiAgZnVuY3Rpb24gaXModmFsdWVBLCB2YWx1ZUIpIHtcbiAgICBpZiAodmFsdWVBID09PSB2YWx1ZUIgfHwgKHZhbHVlQSAhPT0gdmFsdWVBICYmIHZhbHVlQiAhPT0gdmFsdWVCKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghdmFsdWVBIHx8ICF2YWx1ZUIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZUEudmFsdWVPZiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICB0eXBlb2YgdmFsdWVCLnZhbHVlT2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhbHVlQSA9IHZhbHVlQS52YWx1ZU9mKCk7XG4gICAgICB2YWx1ZUIgPSB2YWx1ZUIudmFsdWVPZigpO1xuICAgICAgaWYgKHZhbHVlQSA9PT0gdmFsdWVCIHx8ICh2YWx1ZUEgIT09IHZhbHVlQSAmJiB2YWx1ZUIgIT09IHZhbHVlQikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIXZhbHVlQSB8fCAhdmFsdWVCKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZUEuZXF1YWxzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIHR5cGVvZiB2YWx1ZUIuZXF1YWxzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIHZhbHVlQS5lcXVhbHModmFsdWVCKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiKSB7XG4gICAgaWYgKGEgPT09IGIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICFpc0l0ZXJhYmxlKGIpIHx8XG4gICAgICBhLnNpemUgIT09IHVuZGVmaW5lZCAmJiBiLnNpemUgIT09IHVuZGVmaW5lZCAmJiBhLnNpemUgIT09IGIuc2l6ZSB8fFxuICAgICAgYS5fX2hhc2ggIT09IHVuZGVmaW5lZCAmJiBiLl9faGFzaCAhPT0gdW5kZWZpbmVkICYmIGEuX19oYXNoICE9PSBiLl9faGFzaCB8fFxuICAgICAgaXNLZXllZChhKSAhPT0gaXNLZXllZChiKSB8fFxuICAgICAgaXNJbmRleGVkKGEpICE9PSBpc0luZGV4ZWQoYikgfHxcbiAgICAgIGlzT3JkZXJlZChhKSAhPT0gaXNPcmRlcmVkKGIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGEuc2l6ZSA9PT0gMCAmJiBiLnNpemUgPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBub3RBc3NvY2lhdGl2ZSA9ICFpc0Fzc29jaWF0aXZlKGEpO1xuXG4gICAgaWYgKGlzT3JkZXJlZChhKSkge1xuICAgICAgdmFyIGVudHJpZXMgPSBhLmVudHJpZXMoKTtcbiAgICAgIHJldHVybiBiLmV2ZXJ5KGZ1bmN0aW9uKHYsIGspICB7XG4gICAgICAgIHZhciBlbnRyeSA9IGVudHJpZXMubmV4dCgpLnZhbHVlO1xuICAgICAgICByZXR1cm4gZW50cnkgJiYgaXMoZW50cnlbMV0sIHYpICYmIChub3RBc3NvY2lhdGl2ZSB8fCBpcyhlbnRyeVswXSwgaykpO1xuICAgICAgfSkgJiYgZW50cmllcy5uZXh0KCkuZG9uZTtcbiAgICB9XG5cbiAgICB2YXIgZmxpcHBlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGEuc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoYi5zaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhLmNhY2hlUmVzdWx0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgYS5jYWNoZVJlc3VsdCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbGlwcGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIF8gPSBhO1xuICAgICAgICBhID0gYjtcbiAgICAgICAgYiA9IF87XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFsbEVxdWFsID0gdHJ1ZTtcbiAgICB2YXIgYlNpemUgPSBiLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrKSAge1xuICAgICAgaWYgKG5vdEFzc29jaWF0aXZlID8gIWEuaGFzKHYpIDpcbiAgICAgICAgICBmbGlwcGVkID8gIWlzKHYsIGEuZ2V0KGssIE5PVF9TRVQpKSA6ICFpcyhhLmdldChrLCBOT1RfU0VUKSwgdikpIHtcbiAgICAgICAgYWxsRXF1YWwgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFsbEVxdWFsICYmIGEuc2l6ZSA9PT0gYlNpemU7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhSZXBlYXQsIEluZGV4ZWRTZXEpO1xuXG4gICAgZnVuY3Rpb24gUmVwZWF0KHZhbHVlLCB0aW1lcykge1xuICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlcGVhdCkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXBlYXQodmFsdWUsIHRpbWVzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnNpemUgPSB0aW1lcyA9PT0gdW5kZWZpbmVkID8gSW5maW5pdHkgOiBNYXRoLm1heCgwLCB0aW1lcyk7XG4gICAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICAgIGlmIChFTVBUWV9SRVBFQVQpIHtcbiAgICAgICAgICByZXR1cm4gRU1QVFlfUkVQRUFUO1xuICAgICAgICB9XG4gICAgICAgIEVNUFRZX1JFUEVBVCA9IHRoaXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUmVwZWF0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJ1JlcGVhdCBbXSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ1JlcGVhdCBbICcgKyB0aGlzLl92YWx1ZSArICcgJyArIHRoaXMuc2l6ZSArICcgdGltZXMgXSc7XG4gICAgfTtcblxuICAgIFJlcGVhdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oaW5kZXgsIG5vdFNldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXMoaW5kZXgpID8gdGhpcy5fdmFsdWUgOiBub3RTZXRWYWx1ZTtcbiAgICB9O1xuXG4gICAgUmVwZWF0LnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uKHNlYXJjaFZhbHVlKSB7XG4gICAgICByZXR1cm4gaXModGhpcy5fdmFsdWUsIHNlYXJjaFZhbHVlKTtcbiAgICB9O1xuXG4gICAgUmVwZWF0LnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uKGJlZ2luLCBlbmQpIHtcbiAgICAgIHZhciBzaXplID0gdGhpcy5zaXplO1xuICAgICAgcmV0dXJuIHdob2xlU2xpY2UoYmVnaW4sIGVuZCwgc2l6ZSkgPyB0aGlzIDpcbiAgICAgICAgbmV3IFJlcGVhdCh0aGlzLl92YWx1ZSwgcmVzb2x2ZUVuZChlbmQsIHNpemUpIC0gcmVzb2x2ZUJlZ2luKGJlZ2luLCBzaXplKSk7XG4gICAgfTtcblxuICAgIFJlcGVhdC5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFJlcGVhdC5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uKHNlYXJjaFZhbHVlKSB7XG4gICAgICBpZiAoaXModGhpcy5fdmFsdWUsIHNlYXJjaFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuXG4gICAgUmVwZWF0LnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uKHNlYXJjaFZhbHVlKSB7XG4gICAgICBpZiAoaXModGhpcy5fdmFsdWUsIHNlYXJjaFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaXplO1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG5cbiAgICBSZXBlYXQucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgdGhpcy5zaXplOyBpaSsrKSB7XG4gICAgICAgIGlmIChmbih0aGlzLl92YWx1ZSwgaWksIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBpaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpaTtcbiAgICB9O1xuXG4gICAgUmVwZWF0LnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSBcbiAgICAgICAge3JldHVybiBpaSA8IHRoaXMkMC5zaXplID8gaXRlcmF0b3JWYWx1ZSh0eXBlLCBpaSsrLCB0aGlzJDAuX3ZhbHVlKSA6IGl0ZXJhdG9yRG9uZSgpfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgUmVwZWF0LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihvdGhlcikge1xuICAgICAgcmV0dXJuIG90aGVyIGluc3RhbmNlb2YgUmVwZWF0ID9cbiAgICAgICAgaXModGhpcy5fdmFsdWUsIG90aGVyLl92YWx1ZSkgOlxuICAgICAgICBkZWVwRXF1YWwob3RoZXIpO1xuICAgIH07XG5cblxuICB2YXIgRU1QVFlfUkVQRUFUO1xuXG4gIGZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGVycm9yKSB7XG4gICAgaWYgKCFjb25kaXRpb24pIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhSYW5nZSwgSW5kZXhlZFNlcSk7XG5cbiAgICBmdW5jdGlvbiBSYW5nZShzdGFydCwgZW5kLCBzdGVwKSB7XG4gICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmFuZ2UpKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCk7XG4gICAgICB9XG4gICAgICBpbnZhcmlhbnQoc3RlcCAhPT0gMCwgJ0Nhbm5vdCBzdGVwIGEgUmFuZ2UgYnkgMCcpO1xuICAgICAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICAgICAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVuZCA9IEluZmluaXR5O1xuICAgICAgfVxuICAgICAgc3RlcCA9IHN0ZXAgPT09IHVuZGVmaW5lZCA/IDEgOiBNYXRoLmFicyhzdGVwKTtcbiAgICAgIGlmIChlbmQgPCBzdGFydCkge1xuICAgICAgICBzdGVwID0gLXN0ZXA7XG4gICAgICB9XG4gICAgICB0aGlzLl9zdGFydCA9IHN0YXJ0O1xuICAgICAgdGhpcy5fZW5kID0gZW5kO1xuICAgICAgdGhpcy5fc3RlcCA9IHN0ZXA7XG4gICAgICB0aGlzLnNpemUgPSBNYXRoLm1heCgwLCBNYXRoLmNlaWwoKGVuZCAtIHN0YXJ0KSAvIHN0ZXAgLSAxKSArIDEpO1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICBpZiAoRU1QVFlfUkFOR0UpIHtcbiAgICAgICAgICByZXR1cm4gRU1QVFlfUkFOR0U7XG4gICAgICAgIH1cbiAgICAgICAgRU1QVFlfUkFOR0UgPSB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIFJhbmdlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJ1JhbmdlIFtdJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnUmFuZ2UgWyAnICtcbiAgICAgICAgdGhpcy5fc3RhcnQgKyAnLi4uJyArIHRoaXMuX2VuZCArXG4gICAgICAgICh0aGlzLl9zdGVwICE9PSAxID8gJyBieSAnICsgdGhpcy5fc3RlcCA6ICcnKSArXG4gICAgICAnIF0nO1xuICAgIH07XG5cbiAgICBSYW5nZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oaW5kZXgsIG5vdFNldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXMoaW5kZXgpID9cbiAgICAgICAgdGhpcy5fc3RhcnQgKyB3cmFwSW5kZXgodGhpcywgaW5kZXgpICogdGhpcy5fc3RlcCA6XG4gICAgICAgIG5vdFNldFZhbHVlO1xuICAgIH07XG5cbiAgICBSYW5nZS5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgdmFyIHBvc3NpYmxlSW5kZXggPSAoc2VhcmNoVmFsdWUgLSB0aGlzLl9zdGFydCkgLyB0aGlzLl9zdGVwO1xuICAgICAgcmV0dXJuIHBvc3NpYmxlSW5kZXggPj0gMCAmJlxuICAgICAgICBwb3NzaWJsZUluZGV4IDwgdGhpcy5zaXplICYmXG4gICAgICAgIHBvc3NpYmxlSW5kZXggPT09IE1hdGguZmxvb3IocG9zc2libGVJbmRleCk7XG4gICAgfTtcblxuICAgIFJhbmdlLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uKGJlZ2luLCBlbmQpIHtcbiAgICAgIGlmICh3aG9sZVNsaWNlKGJlZ2luLCBlbmQsIHRoaXMuc2l6ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBiZWdpbiA9IHJlc29sdmVCZWdpbihiZWdpbiwgdGhpcy5zaXplKTtcbiAgICAgIGVuZCA9IHJlc29sdmVFbmQoZW5kLCB0aGlzLnNpemUpO1xuICAgICAgaWYgKGVuZCA8PSBiZWdpbikge1xuICAgICAgICByZXR1cm4gbmV3IFJhbmdlKDAsIDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSYW5nZSh0aGlzLmdldChiZWdpbiwgdGhpcy5fZW5kKSwgdGhpcy5nZXQoZW5kLCB0aGlzLl9lbmQpLCB0aGlzLl9zdGVwKTtcbiAgICB9O1xuXG4gICAgUmFuZ2UucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgdmFyIG9mZnNldFZhbHVlID0gc2VhcmNoVmFsdWUgLSB0aGlzLl9zdGFydDtcbiAgICAgIGlmIChvZmZzZXRWYWx1ZSAlIHRoaXMuX3N0ZXAgPT09IDApIHtcbiAgICAgICAgdmFyIGluZGV4ID0gb2Zmc2V0VmFsdWUgLyB0aGlzLl9zdGVwO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuc2l6ZSkge1xuICAgICAgICAgIHJldHVybiBpbmRleFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfTtcblxuICAgIFJhbmdlLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uKHNlYXJjaFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmRleE9mKHNlYXJjaFZhbHVlKTtcbiAgICB9O1xuXG4gICAgUmFuZ2UucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgICB2YXIgbWF4SW5kZXggPSB0aGlzLnNpemUgLSAxO1xuICAgICAgdmFyIHN0ZXAgPSB0aGlzLl9zdGVwO1xuICAgICAgdmFyIHZhbHVlID0gcmV2ZXJzZSA/IHRoaXMuX3N0YXJ0ICsgbWF4SW5kZXggKiBzdGVwIDogdGhpcy5fc3RhcnQ7XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDw9IG1heEluZGV4OyBpaSsrKSB7XG4gICAgICAgIGlmIChmbih2YWx1ZSwgaWksIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBpaSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKz0gcmV2ZXJzZSA/IC1zdGVwIDogc3RlcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpaTtcbiAgICB9O1xuXG4gICAgUmFuZ2UucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgbWF4SW5kZXggPSB0aGlzLnNpemUgLSAxO1xuICAgICAgdmFyIHN0ZXAgPSB0aGlzLl9zdGVwO1xuICAgICAgdmFyIHZhbHVlID0gcmV2ZXJzZSA/IHRoaXMuX3N0YXJ0ICsgbWF4SW5kZXggKiBzdGVwIDogdGhpcy5fc3RhcnQ7XG4gICAgICB2YXIgaWkgPSAwO1xuICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHZhciB2ID0gdmFsdWU7XG4gICAgICAgIHZhbHVlICs9IHJldmVyc2UgPyAtc3RlcCA6IHN0ZXA7XG4gICAgICAgIHJldHVybiBpaSA+IG1heEluZGV4ID8gaXRlcmF0b3JEb25lKCkgOiBpdGVyYXRvclZhbHVlKHR5cGUsIGlpKyssIHYpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIFJhbmdlLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihvdGhlcikge1xuICAgICAgcmV0dXJuIG90aGVyIGluc3RhbmNlb2YgUmFuZ2UgP1xuICAgICAgICB0aGlzLl9zdGFydCA9PT0gb3RoZXIuX3N0YXJ0ICYmXG4gICAgICAgIHRoaXMuX2VuZCA9PT0gb3RoZXIuX2VuZCAmJlxuICAgICAgICB0aGlzLl9zdGVwID09PSBvdGhlci5fc3RlcCA6XG4gICAgICAgIGRlZXBFcXVhbCh0aGlzLCBvdGhlcik7XG4gICAgfTtcblxuXG4gIHZhciBFTVBUWV9SQU5HRTtcblxuICBjcmVhdGVDbGFzcyhDb2xsZWN0aW9uLCBJdGVyYWJsZSk7XG4gICAgZnVuY3Rpb24gQ29sbGVjdGlvbigpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignQWJzdHJhY3QnKTtcbiAgICB9XG5cblxuICBjcmVhdGVDbGFzcyhLZXllZENvbGxlY3Rpb24sIENvbGxlY3Rpb24pO2Z1bmN0aW9uIEtleWVkQ29sbGVjdGlvbigpIHt9XG5cbiAgY3JlYXRlQ2xhc3MoSW5kZXhlZENvbGxlY3Rpb24sIENvbGxlY3Rpb24pO2Z1bmN0aW9uIEluZGV4ZWRDb2xsZWN0aW9uKCkge31cblxuICBjcmVhdGVDbGFzcyhTZXRDb2xsZWN0aW9uLCBDb2xsZWN0aW9uKTtmdW5jdGlvbiBTZXRDb2xsZWN0aW9uKCkge31cblxuXG4gIENvbGxlY3Rpb24uS2V5ZWQgPSBLZXllZENvbGxlY3Rpb247XG4gIENvbGxlY3Rpb24uSW5kZXhlZCA9IEluZGV4ZWRDb2xsZWN0aW9uO1xuICBDb2xsZWN0aW9uLlNldCA9IFNldENvbGxlY3Rpb247XG5cbiAgdmFyIGltdWwgPVxuICAgIHR5cGVvZiBNYXRoLmltdWwgPT09ICdmdW5jdGlvbicgJiYgTWF0aC5pbXVsKDB4ZmZmZmZmZmYsIDIpID09PSAtMiA/XG4gICAgTWF0aC5pbXVsIDpcbiAgICBmdW5jdGlvbiBpbXVsKGEsIGIpIHtcbiAgICAgIGEgPSBhIHwgMDsgLy8gaW50XG4gICAgICBiID0gYiB8IDA7IC8vIGludFxuICAgICAgdmFyIGMgPSBhICYgMHhmZmZmO1xuICAgICAgdmFyIGQgPSBiICYgMHhmZmZmO1xuICAgICAgLy8gU2hpZnQgYnkgMCBmaXhlcyB0aGUgc2lnbiBvbiB0aGUgaGlnaCBwYXJ0LlxuICAgICAgcmV0dXJuIChjICogZCkgKyAoKCgoYSA+Pj4gMTYpICogZCArIGMgKiAoYiA+Pj4gMTYpKSA8PCAxNikgPj4+IDApIHwgMDsgLy8gaW50XG4gICAgfTtcblxuICAvLyB2OCBoYXMgYW4gb3B0aW1pemF0aW9uIGZvciBzdG9yaW5nIDMxLWJpdCBzaWduZWQgbnVtYmVycy5cbiAgLy8gVmFsdWVzIHdoaWNoIGhhdmUgZWl0aGVyIDAwIG9yIDExIGFzIHRoZSBoaWdoIG9yZGVyIGJpdHMgcXVhbGlmeS5cbiAgLy8gVGhpcyBmdW5jdGlvbiBkcm9wcyB0aGUgaGlnaGVzdCBvcmRlciBiaXQgaW4gYSBzaWduZWQgbnVtYmVyLCBtYWludGFpbmluZ1xuICAvLyB0aGUgc2lnbiBiaXQuXG4gIGZ1bmN0aW9uIHNtaShpMzIpIHtcbiAgICByZXR1cm4gKChpMzIgPj4+IDEpICYgMHg0MDAwMDAwMCkgfCAoaTMyICYgMHhCRkZGRkZGRik7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNoKG8pIHtcbiAgICBpZiAobyA9PT0gZmFsc2UgfHwgbyA9PT0gbnVsbCB8fCBvID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG8udmFsdWVPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbyA9IG8udmFsdWVPZigpO1xuICAgICAgaWYgKG8gPT09IGZhbHNlIHx8IG8gPT09IG51bGwgfHwgbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobyA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHZhciB0eXBlID0gdHlwZW9mIG87XG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAobyAhPT0gbyB8fCBvID09PSBJbmZpbml0eSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIHZhciBoID0gbyB8IDA7XG4gICAgICBpZiAoaCAhPT0gbykge1xuICAgICAgICBoIF49IG8gKiAweEZGRkZGRkZGO1xuICAgICAgfVxuICAgICAgd2hpbGUgKG8gPiAweEZGRkZGRkZGKSB7XG4gICAgICAgIG8gLz0gMHhGRkZGRkZGRjtcbiAgICAgICAgaCBePSBvO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNtaShoKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gby5sZW5ndGggPiBTVFJJTkdfSEFTSF9DQUNIRV9NSU5fU1RSTEVOID8gY2FjaGVkSGFzaFN0cmluZyhvKSA6IGhhc2hTdHJpbmcobyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygby5oYXNoQ29kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG8uaGFzaENvZGUoKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gaGFzaEpTT2JqKG8pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG8udG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBoYXNoU3RyaW5nKG8udG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgdHlwZSAnICsgdHlwZSArICcgY2Fubm90IGJlIGhhc2hlZC4nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhY2hlZEhhc2hTdHJpbmcoc3RyaW5nKSB7XG4gICAgdmFyIGhhc2ggPSBzdHJpbmdIYXNoQ2FjaGVbc3RyaW5nXTtcbiAgICBpZiAoaGFzaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYXNoID0gaGFzaFN0cmluZyhzdHJpbmcpO1xuICAgICAgaWYgKFNUUklOR19IQVNIX0NBQ0hFX1NJWkUgPT09IFNUUklOR19IQVNIX0NBQ0hFX01BWF9TSVpFKSB7XG4gICAgICAgIFNUUklOR19IQVNIX0NBQ0hFX1NJWkUgPSAwO1xuICAgICAgICBzdHJpbmdIYXNoQ2FjaGUgPSB7fTtcbiAgICAgIH1cbiAgICAgIFNUUklOR19IQVNIX0NBQ0hFX1NJWkUrKztcbiAgICAgIHN0cmluZ0hhc2hDYWNoZVtzdHJpbmddID0gaGFzaDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9oYXNoaW5nLXN0cmluZ3NcbiAgZnVuY3Rpb24gaGFzaFN0cmluZyhzdHJpbmcpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBoYXNoIGZyb20gSlZNXG4gICAgLy8gVGhlIGhhc2ggY29kZSBmb3IgYSBzdHJpbmcgaXMgY29tcHV0ZWQgYXNcbiAgICAvLyBzWzBdICogMzEgXiAobiAtIDEpICsgc1sxXSAqIDMxIF4gKG4gLSAyKSArIC4uLiArIHNbbiAtIDFdLFxuICAgIC8vIHdoZXJlIHNbaV0gaXMgdGhlIGl0aCBjaGFyYWN0ZXIgb2YgdGhlIHN0cmluZyBhbmQgbiBpcyB0aGUgbGVuZ3RoIG9mXG4gICAgLy8gdGhlIHN0cmluZy4gV2UgXCJtb2RcIiB0aGUgcmVzdWx0IHRvIG1ha2UgaXQgYmV0d2VlbiAwIChpbmNsdXNpdmUpIGFuZCAyXjMxXG4gICAgLy8gKGV4Y2x1c2l2ZSkgYnkgZHJvcHBpbmcgaGlnaCBiaXRzLlxuICAgIHZhciBoYXNoID0gMDtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgc3RyaW5nLmxlbmd0aDsgaWkrKykge1xuICAgICAgaGFzaCA9IDMxICogaGFzaCArIHN0cmluZy5jaGFyQ29kZUF0KGlpKSB8IDA7XG4gICAgfVxuICAgIHJldHVybiBzbWkoaGFzaCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNoSlNPYmoob2JqKSB7XG4gICAgdmFyIGhhc2g7XG4gICAgaWYgKHVzaW5nV2Vha01hcCkge1xuICAgICAgaGFzaCA9IHdlYWtNYXAuZ2V0KG9iaik7XG4gICAgICBpZiAoaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBoYXNoO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhc2ggPSBvYmpbVUlEX0hBU0hfS0VZXTtcbiAgICBpZiAoaGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gaGFzaDtcbiAgICB9XG5cbiAgICBpZiAoIWNhbkRlZmluZVByb3BlcnR5KSB7XG4gICAgICBoYXNoID0gb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlICYmIG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZVtVSURfSEFTSF9LRVldO1xuICAgICAgaWYgKGhhc2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gaGFzaDtcbiAgICAgIH1cblxuICAgICAgaGFzaCA9IGdldElFTm9kZUhhc2gob2JqKTtcbiAgICAgIGlmIChoYXNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGhhc2g7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFzaCA9ICsrb2JqSGFzaFVJRDtcbiAgICBpZiAob2JqSGFzaFVJRCAmIDB4NDAwMDAwMDApIHtcbiAgICAgIG9iakhhc2hVSUQgPSAwO1xuICAgIH1cblxuICAgIGlmICh1c2luZ1dlYWtNYXApIHtcbiAgICAgIHdlYWtNYXAuc2V0KG9iaiwgaGFzaCk7XG4gICAgfSBlbHNlIGlmIChpc0V4dGVuc2libGUgIT09IHVuZGVmaW5lZCAmJiBpc0V4dGVuc2libGUob2JqKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm9uLWV4dGVuc2libGUgb2JqZWN0cyBhcmUgbm90IGFsbG93ZWQgYXMga2V5cy4nKTtcbiAgICB9IGVsc2UgaWYgKGNhbkRlZmluZVByb3BlcnR5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBVSURfSEFTSF9LRVksIHtcbiAgICAgICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAgICAgJ2NvbmZpZ3VyYWJsZSc6IGZhbHNlLFxuICAgICAgICAnd3JpdGFibGUnOiBmYWxzZSxcbiAgICAgICAgJ3ZhbHVlJzogaGFzaFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChvYmoucHJvcGVydHlJc0VudW1lcmFibGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlID09PSBvYmouY29uc3RydWN0b3IucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlKSB7XG4gICAgICAvLyBTaW5jZSB3ZSBjYW4ndCBkZWZpbmUgYSBub24tZW51bWVyYWJsZSBwcm9wZXJ0eSBvbiB0aGUgb2JqZWN0XG4gICAgICAvLyB3ZSdsbCBoaWphY2sgb25lIG9mIHRoZSBsZXNzLXVzZWQgbm9uLWVudW1lcmFibGUgcHJvcGVydGllcyB0b1xuICAgICAgLy8gc2F2ZSBvdXIgaGFzaCBvbiBpdC4gU2luY2UgdGhpcyBpcyBhIGZ1bmN0aW9uIGl0IHdpbGwgbm90IHNob3cgdXAgaW5cbiAgICAgIC8vIGBKU09OLnN0cmluZ2lmeWAgd2hpY2ggaXMgd2hhdCB3ZSB3YW50LlxuICAgICAgb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZVtVSURfSEFTSF9LRVldID0gaGFzaDtcbiAgICB9IGVsc2UgaWYgKG9iai5ub2RlVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBdCB0aGlzIHBvaW50IHdlIGNvdWxkbid0IGdldCB0aGUgSUUgYHVuaXF1ZUlEYCB0byB1c2UgYXMgYSBoYXNoXG4gICAgICAvLyBhbmQgd2UgY291bGRuJ3QgdXNlIGEgbm9uLWVudW1lcmFibGUgcHJvcGVydHkgdG8gZXhwbG9pdCB0aGVcbiAgICAgIC8vIGRvbnRFbnVtIGJ1ZyBzbyB3ZSBzaW1wbHkgYWRkIHRoZSBgVUlEX0hBU0hfS0VZYCBvbiB0aGUgbm9kZVxuICAgICAgLy8gaXRzZWxmLlxuICAgICAgb2JqW1VJRF9IQVNIX0tFWV0gPSBoYXNoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBzZXQgYSBub24tZW51bWVyYWJsZSBwcm9wZXJ0eSBvbiBvYmplY3QuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICAvLyBHZXQgcmVmZXJlbmNlcyB0byBFUzUgb2JqZWN0IG1ldGhvZHMuXG4gIHZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlO1xuXG4gIC8vIFRydWUgaWYgT2JqZWN0LmRlZmluZVByb3BlcnR5IHdvcmtzIGFzIGV4cGVjdGVkLiBJRTggZmFpbHMgdGhpcyB0ZXN0LlxuICB2YXIgY2FuRGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ0AnLCB7fSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KCkpO1xuXG4gIC8vIElFIGhhcyBhIGB1bmlxdWVJRGAgcHJvcGVydHkgb24gRE9NIG5vZGVzLiBXZSBjYW4gY29uc3RydWN0IHRoZSBoYXNoIGZyb20gaXRcbiAgLy8gYW5kIGF2b2lkIG1lbW9yeSBsZWFrcyBmcm9tIHRoZSBJRSBjbG9uZU5vZGUgYnVnLlxuICBmdW5jdGlvbiBnZXRJRU5vZGVIYXNoKG5vZGUpIHtcbiAgICBpZiAobm9kZSAmJiBub2RlLm5vZGVUeXBlID4gMCkge1xuICAgICAgc3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG4gICAgICAgIGNhc2UgMTogLy8gRWxlbWVudFxuICAgICAgICAgIHJldHVybiBub2RlLnVuaXF1ZUlEO1xuICAgICAgICBjYXNlIDk6IC8vIERvY3VtZW50XG4gICAgICAgICAgcmV0dXJuIG5vZGUuZG9jdW1lbnRFbGVtZW50ICYmIG5vZGUuZG9jdW1lbnRFbGVtZW50LnVuaXF1ZUlEO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIHBvc3NpYmxlLCB1c2UgYSBXZWFrTWFwLlxuICB2YXIgdXNpbmdXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbic7XG4gIHZhciB3ZWFrTWFwO1xuICBpZiAodXNpbmdXZWFrTWFwKSB7XG4gICAgd2Vha01hcCA9IG5ldyBXZWFrTWFwKCk7XG4gIH1cblxuICB2YXIgb2JqSGFzaFVJRCA9IDA7XG5cbiAgdmFyIFVJRF9IQVNIX0tFWSA9ICdfX2ltbXV0YWJsZWhhc2hfXyc7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG4gICAgVUlEX0hBU0hfS0VZID0gU3ltYm9sKFVJRF9IQVNIX0tFWSk7XG4gIH1cblxuICB2YXIgU1RSSU5HX0hBU0hfQ0FDSEVfTUlOX1NUUkxFTiA9IDE2O1xuICB2YXIgU1RSSU5HX0hBU0hfQ0FDSEVfTUFYX1NJWkUgPSAyNTU7XG4gIHZhciBTVFJJTkdfSEFTSF9DQUNIRV9TSVpFID0gMDtcbiAgdmFyIHN0cmluZ0hhc2hDYWNoZSA9IHt9O1xuXG4gIGZ1bmN0aW9uIGFzc2VydE5vdEluZmluaXRlKHNpemUpIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICBzaXplICE9PSBJbmZpbml0eSxcbiAgICAgICdDYW5ub3QgcGVyZm9ybSB0aGlzIGFjdGlvbiB3aXRoIGFuIGluZmluaXRlIHNpemUuJ1xuICAgICk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhNYXAsIEtleWVkQ29sbGVjdGlvbik7XG5cbiAgICAvLyBAcHJhZ21hIENvbnN0cnVjdGlvblxuXG4gICAgZnVuY3Rpb24gTWFwKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IGVtcHR5TWFwKCkgOlxuICAgICAgICBpc01hcCh2YWx1ZSkgJiYgIWlzT3JkZXJlZCh2YWx1ZSkgPyB2YWx1ZSA6XG4gICAgICAgIGVtcHR5TWFwKCkud2l0aE11dGF0aW9ucyhmdW5jdGlvbihtYXAgKSB7XG4gICAgICAgICAgdmFyIGl0ZXIgPSBLZXllZEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgICAgICBhc3NlcnROb3RJbmZpbml0ZShpdGVyLnNpemUpO1xuICAgICAgICAgIGl0ZXIuZm9yRWFjaChmdW5jdGlvbih2LCBrKSAge3JldHVybiBtYXAuc2V0KGssIHYpfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIE1hcC5vZiA9IGZ1bmN0aW9uKCkge3ZhciBrZXlWYWx1ZXMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgIHJldHVybiBlbXB0eU1hcCgpLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24obWFwICkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleVZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgIGlmIChpICsgMSA+PSBrZXlWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdmFsdWUgZm9yIGtleTogJyArIGtleVZhbHVlc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1hcC5zZXQoa2V5VmFsdWVzW2ldLCBrZXlWYWx1ZXNbaSArIDFdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIE1hcC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fdG9TdHJpbmcoJ01hcCB7JywgJ30nKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBBY2Nlc3NcblxuICAgIE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oaywgbm90U2V0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yb290ID9cbiAgICAgICAgdGhpcy5fcm9vdC5nZXQoMCwgdW5kZWZpbmVkLCBrLCBub3RTZXRWYWx1ZSkgOlxuICAgICAgICBub3RTZXRWYWx1ZTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBNb2RpZmljYXRpb25cblxuICAgIE1hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oaywgdikge1xuICAgICAgcmV0dXJuIHVwZGF0ZU1hcCh0aGlzLCBrLCB2KTtcbiAgICB9O1xuXG4gICAgTWFwLnByb3RvdHlwZS5zZXRJbiA9IGZ1bmN0aW9uKGtleVBhdGgsIHYpIHtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUluKGtleVBhdGgsIE5PVF9TRVQsIGZ1bmN0aW9uKCkgIHtyZXR1cm4gdn0pO1xuICAgIH07XG5cbiAgICBNYXAucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiB1cGRhdGVNYXAodGhpcywgaywgTk9UX1NFVCk7XG4gICAgfTtcblxuICAgIE1hcC5wcm90b3R5cGUuZGVsZXRlSW4gPSBmdW5jdGlvbihrZXlQYXRoKSB7XG4gICAgICByZXR1cm4gdGhpcy51cGRhdGVJbihrZXlQYXRoLCBmdW5jdGlvbigpICB7cmV0dXJuIE5PVF9TRVR9KTtcbiAgICB9O1xuXG4gICAgTWFwLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihrLCBub3RTZXRWYWx1ZSwgdXBkYXRlcikge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgP1xuICAgICAgICBrKHRoaXMpIDpcbiAgICAgICAgdGhpcy51cGRhdGVJbihba10sIG5vdFNldFZhbHVlLCB1cGRhdGVyKTtcbiAgICB9O1xuXG4gICAgTWFwLnByb3RvdHlwZS51cGRhdGVJbiA9IGZ1bmN0aW9uKGtleVBhdGgsIG5vdFNldFZhbHVlLCB1cGRhdGVyKSB7XG4gICAgICBpZiAoIXVwZGF0ZXIpIHtcbiAgICAgICAgdXBkYXRlciA9IG5vdFNldFZhbHVlO1xuICAgICAgICBub3RTZXRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHZhciB1cGRhdGVkVmFsdWUgPSB1cGRhdGVJbkRlZXBNYXAoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGZvcmNlSXRlcmF0b3Ioa2V5UGF0aCksXG4gICAgICAgIG5vdFNldFZhbHVlLFxuICAgICAgICB1cGRhdGVyXG4gICAgICApO1xuICAgICAgcmV0dXJuIHVwZGF0ZWRWYWx1ZSA9PT0gTk9UX1NFVCA/IHVuZGVmaW5lZCA6IHVwZGF0ZWRWYWx1ZTtcbiAgICB9O1xuXG4gICAgTWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICB0aGlzLl9yb290ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlNYXAoKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBDb21wb3NpdGlvblxuXG4gICAgTWFwLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uKC8qLi4uaXRlcnMqLykge1xuICAgICAgcmV0dXJuIG1lcmdlSW50b01hcFdpdGgodGhpcywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBNYXAucHJvdG90eXBlLm1lcmdlV2l0aCA9IGZ1bmN0aW9uKG1lcmdlcikge3ZhciBpdGVycyA9IFNMSUNFJDAuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgcmV0dXJuIG1lcmdlSW50b01hcFdpdGgodGhpcywgbWVyZ2VyLCBpdGVycyk7XG4gICAgfTtcblxuICAgIE1hcC5wcm90b3R5cGUubWVyZ2VJbiA9IGZ1bmN0aW9uKGtleVBhdGgpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUluKFxuICAgICAgICBrZXlQYXRoLFxuICAgICAgICBlbXB0eU1hcCgpLFxuICAgICAgICBmdW5jdGlvbihtICkge3JldHVybiB0eXBlb2YgbS5tZXJnZSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgbS5tZXJnZS5hcHBseShtLCBpdGVycykgOlxuICAgICAgICAgIGl0ZXJzW2l0ZXJzLmxlbmd0aCAtIDFdfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgTWFwLnByb3RvdHlwZS5tZXJnZURlZXAgPSBmdW5jdGlvbigvKi4uLml0ZXJzKi8pIHtcbiAgICAgIHJldHVybiBtZXJnZUludG9NYXBXaXRoKHRoaXMsIGRlZXBNZXJnZXIsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIE1hcC5wcm90b3R5cGUubWVyZ2VEZWVwV2l0aCA9IGZ1bmN0aW9uKG1lcmdlcikge3ZhciBpdGVycyA9IFNMSUNFJDAuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgcmV0dXJuIG1lcmdlSW50b01hcFdpdGgodGhpcywgZGVlcE1lcmdlcldpdGgobWVyZ2VyKSwgaXRlcnMpO1xuICAgIH07XG5cbiAgICBNYXAucHJvdG90eXBlLm1lcmdlRGVlcEluID0gZnVuY3Rpb24oa2V5UGF0aCkge3ZhciBpdGVycyA9IFNMSUNFJDAuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlSW4oXG4gICAgICAgIGtleVBhdGgsXG4gICAgICAgIGVtcHR5TWFwKCksXG4gICAgICAgIGZ1bmN0aW9uKG0gKSB7cmV0dXJuIHR5cGVvZiBtLm1lcmdlRGVlcCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgbS5tZXJnZURlZXAuYXBwbHkobSwgaXRlcnMpIDpcbiAgICAgICAgICBpdGVyc1tpdGVycy5sZW5ndGggLSAxXX1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIE1hcC5wcm90b3R5cGUuc29ydCA9IGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIC8vIExhdGUgYmluZGluZ1xuICAgICAgcmV0dXJuIE9yZGVyZWRNYXAoc29ydEZhY3RvcnkodGhpcywgY29tcGFyYXRvcikpO1xuICAgIH07XG5cbiAgICBNYXAucHJvdG90eXBlLnNvcnRCeSA9IGZ1bmN0aW9uKG1hcHBlciwgY29tcGFyYXRvcikge1xuICAgICAgLy8gTGF0ZSBiaW5kaW5nXG4gICAgICByZXR1cm4gT3JkZXJlZE1hcChzb3J0RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yLCBtYXBwZXIpKTtcbiAgICB9O1xuXG4gICAgLy8gQHByYWdtYSBNdXRhYmlsaXR5XG5cbiAgICBNYXAucHJvdG90eXBlLndpdGhNdXRhdGlvbnMgPSBmdW5jdGlvbihmbikge1xuICAgICAgdmFyIG11dGFibGUgPSB0aGlzLmFzTXV0YWJsZSgpO1xuICAgICAgZm4obXV0YWJsZSk7XG4gICAgICByZXR1cm4gbXV0YWJsZS53YXNBbHRlcmVkKCkgPyBtdXRhYmxlLl9fZW5zdXJlT3duZXIodGhpcy5fX293bmVySUQpIDogdGhpcztcbiAgICB9O1xuXG4gICAgTWFwLnByb3RvdHlwZS5hc011dGFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fb3duZXJJRCA/IHRoaXMgOiB0aGlzLl9fZW5zdXJlT3duZXIobmV3IE93bmVySUQoKSk7XG4gICAgfTtcblxuICAgIE1hcC5wcm90b3R5cGUuYXNJbW11dGFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fZW5zdXJlT3duZXIoKTtcbiAgICB9O1xuXG4gICAgTWFwLnByb3RvdHlwZS53YXNBbHRlcmVkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2FsdGVyZWQ7XG4gICAgfTtcblxuICAgIE1hcC5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcywgdHlwZSwgcmV2ZXJzZSk7XG4gICAgfTtcblxuICAgIE1hcC5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHRoaXMuX3Jvb3QgJiYgdGhpcy5fcm9vdC5pdGVyYXRlKGZ1bmN0aW9uKGVudHJ5ICkge1xuICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgIHJldHVybiBmbihlbnRyeVsxXSwgZW50cnlbMF0sIHRoaXMkMCk7XG4gICAgICB9LCByZXZlcnNlKTtcbiAgICAgIHJldHVybiBpdGVyYXRpb25zO1xuICAgIH07XG5cbiAgICBNYXAucHJvdG90eXBlLl9fZW5zdXJlT3duZXIgPSBmdW5jdGlvbihvd25lcklEKSB7XG4gICAgICBpZiAob3duZXJJRCA9PT0gdGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpZiAoIW93bmVySUQpIHtcbiAgICAgICAgdGhpcy5fX293bmVySUQgPSBvd25lcklEO1xuICAgICAgICB0aGlzLl9fYWx0ZXJlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYWtlTWFwKHRoaXMuc2l6ZSwgdGhpcy5fcm9vdCwgb3duZXJJRCwgdGhpcy5fX2hhc2gpO1xuICAgIH07XG5cblxuICBmdW5jdGlvbiBpc01hcChtYXliZU1hcCkge1xuICAgIHJldHVybiAhIShtYXliZU1hcCAmJiBtYXliZU1hcFtJU19NQVBfU0VOVElORUxdKTtcbiAgfVxuXG4gIE1hcC5pc01hcCA9IGlzTWFwO1xuXG4gIHZhciBJU19NQVBfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9NQVBfX0BAJztcblxuICB2YXIgTWFwUHJvdG90eXBlID0gTWFwLnByb3RvdHlwZTtcbiAgTWFwUHJvdG90eXBlW0lTX01BUF9TRU5USU5FTF0gPSB0cnVlO1xuICBNYXBQcm90b3R5cGVbREVMRVRFXSA9IE1hcFByb3RvdHlwZS5yZW1vdmU7XG4gIE1hcFByb3RvdHlwZS5yZW1vdmVJbiA9IE1hcFByb3RvdHlwZS5kZWxldGVJbjtcblxuXG4gIC8vICNwcmFnbWEgVHJpZSBOb2Rlc1xuXG5cblxuICAgIGZ1bmN0aW9uIEFycmF5TWFwTm9kZShvd25lcklELCBlbnRyaWVzKSB7XG4gICAgICB0aGlzLm93bmVySUQgPSBvd25lcklEO1xuICAgICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB9XG5cbiAgICBBcnJheU1hcE5vZGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHNoaWZ0LCBrZXlIYXNoLCBrZXksIG5vdFNldFZhbHVlKSB7XG4gICAgICB2YXIgZW50cmllcyA9IHRoaXMuZW50cmllcztcbiAgICAgIGZvciAodmFyIGlpID0gMCwgbGVuID0gZW50cmllcy5sZW5ndGg7IGlpIDwgbGVuOyBpaSsrKSB7XG4gICAgICAgIGlmIChpcyhrZXksIGVudHJpZXNbaWldWzBdKSkge1xuICAgICAgICAgIHJldHVybiBlbnRyaWVzW2lpXVsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5vdFNldFZhbHVlO1xuICAgIH07XG5cbiAgICBBcnJheU1hcE5vZGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBrZXksIHZhbHVlLCBkaWRDaGFuZ2VTaXplLCBkaWRBbHRlcikge1xuICAgICAgdmFyIHJlbW92ZWQgPSB2YWx1ZSA9PT0gTk9UX1NFVDtcblxuICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XG4gICAgICB2YXIgaWR4ID0gMDtcbiAgICAgIGZvciAodmFyIGxlbiA9IGVudHJpZXMubGVuZ3RoOyBpZHggPCBsZW47IGlkeCsrKSB7XG4gICAgICAgIGlmIChpcyhrZXksIGVudHJpZXNbaWR4XVswXSkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGV4aXN0cyA9IGlkeCA8IGxlbjtcblxuICAgICAgaWYgKGV4aXN0cyA/IGVudHJpZXNbaWR4XVsxXSA9PT0gdmFsdWUgOiByZW1vdmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBTZXRSZWYoZGlkQWx0ZXIpO1xuICAgICAgKHJlbW92ZWQgfHwgIWV4aXN0cykgJiYgU2V0UmVmKGRpZENoYW5nZVNpemUpO1xuXG4gICAgICBpZiAocmVtb3ZlZCAmJiBlbnRyaWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm47IC8vIHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoIWV4aXN0cyAmJiAhcmVtb3ZlZCAmJiBlbnRyaWVzLmxlbmd0aCA+PSBNQVhfQVJSQVlfTUFQX1NJWkUpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU5vZGVzKG93bmVySUQsIGVudHJpZXMsIGtleSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNFZGl0YWJsZSA9IG93bmVySUQgJiYgb3duZXJJRCA9PT0gdGhpcy5vd25lcklEO1xuICAgICAgdmFyIG5ld0VudHJpZXMgPSBpc0VkaXRhYmxlID8gZW50cmllcyA6IGFyckNvcHkoZW50cmllcyk7XG5cbiAgICAgIGlmIChleGlzdHMpIHtcbiAgICAgICAgaWYgKHJlbW92ZWQpIHtcbiAgICAgICAgICBpZHggPT09IGxlbiAtIDEgPyBuZXdFbnRyaWVzLnBvcCgpIDogKG5ld0VudHJpZXNbaWR4XSA9IG5ld0VudHJpZXMucG9wKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0VudHJpZXNbaWR4XSA9IFtrZXksIHZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RW50cmllcy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0VkaXRhYmxlKSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IG5ld0VudHJpZXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IEFycmF5TWFwTm9kZShvd25lcklELCBuZXdFbnRyaWVzKTtcbiAgICB9O1xuXG5cblxuXG4gICAgZnVuY3Rpb24gQml0bWFwSW5kZXhlZE5vZGUob3duZXJJRCwgYml0bWFwLCBub2Rlcykge1xuICAgICAgdGhpcy5vd25lcklEID0gb3duZXJJRDtcbiAgICAgIHRoaXMuYml0bWFwID0gYml0bWFwO1xuICAgICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICAgIH1cblxuICAgIEJpdG1hcEluZGV4ZWROb2RlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihzaGlmdCwga2V5SGFzaCwga2V5LCBub3RTZXRWYWx1ZSkge1xuICAgICAgaWYgKGtleUhhc2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBrZXlIYXNoID0gaGFzaChrZXkpO1xuICAgICAgfVxuICAgICAgdmFyIGJpdCA9ICgxIDw8ICgoc2hpZnQgPT09IDAgPyBrZXlIYXNoIDoga2V5SGFzaCA+Pj4gc2hpZnQpICYgTUFTSykpO1xuICAgICAgdmFyIGJpdG1hcCA9IHRoaXMuYml0bWFwO1xuICAgICAgcmV0dXJuIChiaXRtYXAgJiBiaXQpID09PSAwID8gbm90U2V0VmFsdWUgOlxuICAgICAgICB0aGlzLm5vZGVzW3BvcENvdW50KGJpdG1hcCAmIChiaXQgLSAxKSldLmdldChzaGlmdCArIFNISUZULCBrZXlIYXNoLCBrZXksIG5vdFNldFZhbHVlKTtcbiAgICB9O1xuXG4gICAgQml0bWFwSW5kZXhlZE5vZGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBrZXksIHZhbHVlLCBkaWRDaGFuZ2VTaXplLCBkaWRBbHRlcikge1xuICAgICAgaWYgKGtleUhhc2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBrZXlIYXNoID0gaGFzaChrZXkpO1xuICAgICAgfVxuICAgICAgdmFyIGtleUhhc2hGcmFnID0gKHNoaWZ0ID09PSAwID8ga2V5SGFzaCA6IGtleUhhc2ggPj4+IHNoaWZ0KSAmIE1BU0s7XG4gICAgICB2YXIgYml0ID0gMSA8PCBrZXlIYXNoRnJhZztcbiAgICAgIHZhciBiaXRtYXAgPSB0aGlzLmJpdG1hcDtcbiAgICAgIHZhciBleGlzdHMgPSAoYml0bWFwICYgYml0KSAhPT0gMDtcblxuICAgICAgaWYgKCFleGlzdHMgJiYgdmFsdWUgPT09IE5PVF9TRVQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBpZHggPSBwb3BDb3VudChiaXRtYXAgJiAoYml0IC0gMSkpO1xuICAgICAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcbiAgICAgIHZhciBub2RlID0gZXhpc3RzID8gbm9kZXNbaWR4XSA6IHVuZGVmaW5lZDtcbiAgICAgIHZhciBuZXdOb2RlID0gdXBkYXRlTm9kZShub2RlLCBvd25lcklELCBzaGlmdCArIFNISUZULCBrZXlIYXNoLCBrZXksIHZhbHVlLCBkaWRDaGFuZ2VTaXplLCBkaWRBbHRlcik7XG5cbiAgICAgIGlmIChuZXdOb2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWV4aXN0cyAmJiBuZXdOb2RlICYmIG5vZGVzLmxlbmd0aCA+PSBNQVhfQklUTUFQX0lOREVYRURfU0laRSkge1xuICAgICAgICByZXR1cm4gZXhwYW5kTm9kZXMob3duZXJJRCwgbm9kZXMsIGJpdG1hcCwga2V5SGFzaEZyYWcsIG5ld05vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXhpc3RzICYmICFuZXdOb2RlICYmIG5vZGVzLmxlbmd0aCA9PT0gMiAmJiBpc0xlYWZOb2RlKG5vZGVzW2lkeCBeIDFdKSkge1xuICAgICAgICByZXR1cm4gbm9kZXNbaWR4IF4gMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChleGlzdHMgJiYgbmV3Tm9kZSAmJiBub2Rlcy5sZW5ndGggPT09IDEgJiYgaXNMZWFmTm9kZShuZXdOb2RlKSkge1xuICAgICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzRWRpdGFibGUgPSBvd25lcklEICYmIG93bmVySUQgPT09IHRoaXMub3duZXJJRDtcbiAgICAgIHZhciBuZXdCaXRtYXAgPSBleGlzdHMgPyBuZXdOb2RlID8gYml0bWFwIDogYml0bWFwIF4gYml0IDogYml0bWFwIHwgYml0O1xuICAgICAgdmFyIG5ld05vZGVzID0gZXhpc3RzID8gbmV3Tm9kZSA/XG4gICAgICAgIHNldEluKG5vZGVzLCBpZHgsIG5ld05vZGUsIGlzRWRpdGFibGUpIDpcbiAgICAgICAgc3BsaWNlT3V0KG5vZGVzLCBpZHgsIGlzRWRpdGFibGUpIDpcbiAgICAgICAgc3BsaWNlSW4obm9kZXMsIGlkeCwgbmV3Tm9kZSwgaXNFZGl0YWJsZSk7XG5cbiAgICAgIGlmIChpc0VkaXRhYmxlKSB7XG4gICAgICAgIHRoaXMuYml0bWFwID0gbmV3Qml0bWFwO1xuICAgICAgICB0aGlzLm5vZGVzID0gbmV3Tm9kZXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IEJpdG1hcEluZGV4ZWROb2RlKG93bmVySUQsIG5ld0JpdG1hcCwgbmV3Tm9kZXMpO1xuICAgIH07XG5cblxuXG5cbiAgICBmdW5jdGlvbiBIYXNoQXJyYXlNYXBOb2RlKG93bmVySUQsIGNvdW50LCBub2Rlcykge1xuICAgICAgdGhpcy5vd25lcklEID0gb3duZXJJRDtcbiAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB9XG5cbiAgICBIYXNoQXJyYXlNYXBOb2RlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihzaGlmdCwga2V5SGFzaCwga2V5LCBub3RTZXRWYWx1ZSkge1xuICAgICAgaWYgKGtleUhhc2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBrZXlIYXNoID0gaGFzaChrZXkpO1xuICAgICAgfVxuICAgICAgdmFyIGlkeCA9IChzaGlmdCA9PT0gMCA/IGtleUhhc2ggOiBrZXlIYXNoID4+PiBzaGlmdCkgJiBNQVNLO1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLm5vZGVzW2lkeF07XG4gICAgICByZXR1cm4gbm9kZSA/IG5vZGUuZ2V0KHNoaWZ0ICsgU0hJRlQsIGtleUhhc2gsIGtleSwgbm90U2V0VmFsdWUpIDogbm90U2V0VmFsdWU7XG4gICAgfTtcblxuICAgIEhhc2hBcnJheU1hcE5vZGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBrZXksIHZhbHVlLCBkaWRDaGFuZ2VTaXplLCBkaWRBbHRlcikge1xuICAgICAgaWYgKGtleUhhc2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBrZXlIYXNoID0gaGFzaChrZXkpO1xuICAgICAgfVxuICAgICAgdmFyIGlkeCA9IChzaGlmdCA9PT0gMCA/IGtleUhhc2ggOiBrZXlIYXNoID4+PiBzaGlmdCkgJiBNQVNLO1xuICAgICAgdmFyIHJlbW92ZWQgPSB2YWx1ZSA9PT0gTk9UX1NFVDtcbiAgICAgIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XG4gICAgICB2YXIgbm9kZSA9IG5vZGVzW2lkeF07XG5cbiAgICAgIGlmIChyZW1vdmVkICYmICFub2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3Tm9kZSA9IHVwZGF0ZU5vZGUobm9kZSwgb3duZXJJRCwgc2hpZnQgKyBTSElGVCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpO1xuICAgICAgaWYgKG5ld05vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdDb3VudCA9IHRoaXMuY291bnQ7XG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgbmV3Q291bnQrKztcbiAgICAgIH0gZWxzZSBpZiAoIW5ld05vZGUpIHtcbiAgICAgICAgbmV3Q291bnQtLTtcbiAgICAgICAgaWYgKG5ld0NvdW50IDwgTUlOX0hBU0hfQVJSQVlfTUFQX1NJWkUpIHtcbiAgICAgICAgICByZXR1cm4gcGFja05vZGVzKG93bmVySUQsIG5vZGVzLCBuZXdDb3VudCwgaWR4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXNFZGl0YWJsZSA9IG93bmVySUQgJiYgb3duZXJJRCA9PT0gdGhpcy5vd25lcklEO1xuICAgICAgdmFyIG5ld05vZGVzID0gc2V0SW4obm9kZXMsIGlkeCwgbmV3Tm9kZSwgaXNFZGl0YWJsZSk7XG5cbiAgICAgIGlmIChpc0VkaXRhYmxlKSB7XG4gICAgICAgIHRoaXMuY291bnQgPSBuZXdDb3VudDtcbiAgICAgICAgdGhpcy5ub2RlcyA9IG5ld05vZGVzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBIYXNoQXJyYXlNYXBOb2RlKG93bmVySUQsIG5ld0NvdW50LCBuZXdOb2Rlcyk7XG4gICAgfTtcblxuXG5cblxuICAgIGZ1bmN0aW9uIEhhc2hDb2xsaXNpb25Ob2RlKG93bmVySUQsIGtleUhhc2gsIGVudHJpZXMpIHtcbiAgICAgIHRoaXMub3duZXJJRCA9IG93bmVySUQ7XG4gICAgICB0aGlzLmtleUhhc2ggPSBrZXlIYXNoO1xuICAgICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB9XG5cbiAgICBIYXNoQ29sbGlzaW9uTm9kZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oc2hpZnQsIGtleUhhc2gsIGtleSwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xuICAgICAgZm9yICh2YXIgaWkgPSAwLCBsZW4gPSBlbnRyaWVzLmxlbmd0aDsgaWkgPCBsZW47IGlpKyspIHtcbiAgICAgICAgaWYgKGlzKGtleSwgZW50cmllc1tpaV1bMF0pKSB7XG4gICAgICAgICAgcmV0dXJuIGVudHJpZXNbaWldWzFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbm90U2V0VmFsdWU7XG4gICAgfTtcblxuICAgIEhhc2hDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihvd25lcklELCBzaGlmdCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpIHtcbiAgICAgIGlmIChrZXlIYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5SGFzaCA9IGhhc2goa2V5KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlbW92ZWQgPSB2YWx1ZSA9PT0gTk9UX1NFVDtcblxuICAgICAgaWYgKGtleUhhc2ggIT09IHRoaXMua2V5SGFzaCkge1xuICAgICAgICBpZiAocmVtb3ZlZCkge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIFNldFJlZihkaWRBbHRlcik7XG4gICAgICAgIFNldFJlZihkaWRDaGFuZ2VTaXplKTtcbiAgICAgICAgcmV0dXJuIG1lcmdlSW50b05vZGUodGhpcywgb3duZXJJRCwgc2hpZnQsIGtleUhhc2gsIFtrZXksIHZhbHVlXSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xuICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICBmb3IgKHZhciBsZW4gPSBlbnRyaWVzLmxlbmd0aDsgaWR4IDwgbGVuOyBpZHgrKykge1xuICAgICAgICBpZiAoaXMoa2V5LCBlbnRyaWVzW2lkeF1bMF0pKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBleGlzdHMgPSBpZHggPCBsZW47XG5cbiAgICAgIGlmIChleGlzdHMgPyBlbnRyaWVzW2lkeF1bMV0gPT09IHZhbHVlIDogcmVtb3ZlZCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgU2V0UmVmKGRpZEFsdGVyKTtcbiAgICAgIChyZW1vdmVkIHx8ICFleGlzdHMpICYmIFNldFJlZihkaWRDaGFuZ2VTaXplKTtcblxuICAgICAgaWYgKHJlbW92ZWQgJiYgbGVuID09PSAyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmFsdWVOb2RlKG93bmVySUQsIHRoaXMua2V5SGFzaCwgZW50cmllc1tpZHggXiAxXSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpc0VkaXRhYmxlID0gb3duZXJJRCAmJiBvd25lcklEID09PSB0aGlzLm93bmVySUQ7XG4gICAgICB2YXIgbmV3RW50cmllcyA9IGlzRWRpdGFibGUgPyBlbnRyaWVzIDogYXJyQ29weShlbnRyaWVzKTtcblxuICAgICAgaWYgKGV4aXN0cykge1xuICAgICAgICBpZiAocmVtb3ZlZCkge1xuICAgICAgICAgIGlkeCA9PT0gbGVuIC0gMSA/IG5ld0VudHJpZXMucG9wKCkgOiAobmV3RW50cmllc1tpZHhdID0gbmV3RW50cmllcy5wb3AoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3RW50cmllc1tpZHhdID0gW2tleSwgdmFsdWVdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdFbnRyaWVzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRWRpdGFibGUpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gbmV3RW50cmllcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgSGFzaENvbGxpc2lvbk5vZGUob3duZXJJRCwgdGhpcy5rZXlIYXNoLCBuZXdFbnRyaWVzKTtcbiAgICB9O1xuXG5cblxuXG4gICAgZnVuY3Rpb24gVmFsdWVOb2RlKG93bmVySUQsIGtleUhhc2gsIGVudHJ5KSB7XG4gICAgICB0aGlzLm93bmVySUQgPSBvd25lcklEO1xuICAgICAgdGhpcy5rZXlIYXNoID0ga2V5SGFzaDtcbiAgICAgIHRoaXMuZW50cnkgPSBlbnRyeTtcbiAgICB9XG5cbiAgICBWYWx1ZU5vZGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHNoaWZ0LCBrZXlIYXNoLCBrZXksIG5vdFNldFZhbHVlKSB7XG4gICAgICByZXR1cm4gaXMoa2V5LCB0aGlzLmVudHJ5WzBdKSA/IHRoaXMuZW50cnlbMV0gOiBub3RTZXRWYWx1ZTtcbiAgICB9O1xuXG4gICAgVmFsdWVOb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihvd25lcklELCBzaGlmdCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpIHtcbiAgICAgIHZhciByZW1vdmVkID0gdmFsdWUgPT09IE5PVF9TRVQ7XG4gICAgICB2YXIga2V5TWF0Y2ggPSBpcyhrZXksIHRoaXMuZW50cnlbMF0pO1xuICAgICAgaWYgKGtleU1hdGNoID8gdmFsdWUgPT09IHRoaXMuZW50cnlbMV0gOiByZW1vdmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBTZXRSZWYoZGlkQWx0ZXIpO1xuXG4gICAgICBpZiAocmVtb3ZlZCkge1xuICAgICAgICBTZXRSZWYoZGlkQ2hhbmdlU2l6ZSk7XG4gICAgICAgIHJldHVybjsgLy8gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChrZXlNYXRjaCkge1xuICAgICAgICBpZiAob3duZXJJRCAmJiBvd25lcklEID09PSB0aGlzLm93bmVySUQpIHtcbiAgICAgICAgICB0aGlzLmVudHJ5WzFdID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBWYWx1ZU5vZGUob3duZXJJRCwgdGhpcy5rZXlIYXNoLCBba2V5LCB2YWx1ZV0pO1xuICAgICAgfVxuXG4gICAgICBTZXRSZWYoZGlkQ2hhbmdlU2l6ZSk7XG4gICAgICByZXR1cm4gbWVyZ2VJbnRvTm9kZSh0aGlzLCBvd25lcklELCBzaGlmdCwgaGFzaChrZXkpLCBba2V5LCB2YWx1ZV0pO1xuICAgIH07XG5cblxuXG4gIC8vICNwcmFnbWEgSXRlcmF0b3JzXG5cbiAgQXJyYXlNYXBOb2RlLnByb3RvdHlwZS5pdGVyYXRlID1cbiAgSGFzaENvbGxpc2lvbk5vZGUucHJvdG90eXBlLml0ZXJhdGUgPSBmdW5jdGlvbiAoZm4sIHJldmVyc2UpIHtcbiAgICB2YXIgZW50cmllcyA9IHRoaXMuZW50cmllcztcbiAgICBmb3IgKHZhciBpaSA9IDAsIG1heEluZGV4ID0gZW50cmllcy5sZW5ndGggLSAxOyBpaSA8PSBtYXhJbmRleDsgaWkrKykge1xuICAgICAgaWYgKGZuKGVudHJpZXNbcmV2ZXJzZSA/IG1heEluZGV4IC0gaWkgOiBpaV0pID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQml0bWFwSW5kZXhlZE5vZGUucHJvdG90eXBlLml0ZXJhdGUgPVxuICBIYXNoQXJyYXlNYXBOb2RlLnByb3RvdHlwZS5pdGVyYXRlID0gZnVuY3Rpb24gKGZuLCByZXZlcnNlKSB7XG4gICAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcbiAgICBmb3IgKHZhciBpaSA9IDAsIG1heEluZGV4ID0gbm9kZXMubGVuZ3RoIC0gMTsgaWkgPD0gbWF4SW5kZXg7IGlpKyspIHtcbiAgICAgIHZhciBub2RlID0gbm9kZXNbcmV2ZXJzZSA/IG1heEluZGV4IC0gaWkgOiBpaV07XG4gICAgICBpZiAobm9kZSAmJiBub2RlLml0ZXJhdGUoZm4sIHJldmVyc2UpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgVmFsdWVOb2RlLnByb3RvdHlwZS5pdGVyYXRlID0gZnVuY3Rpb24gKGZuLCByZXZlcnNlKSB7XG4gICAgcmV0dXJuIGZuKHRoaXMuZW50cnkpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoTWFwSXRlcmF0b3IsIEl0ZXJhdG9yKTtcblxuICAgIGZ1bmN0aW9uIE1hcEl0ZXJhdG9yKG1hcCwgdHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgICB0aGlzLl9yZXZlcnNlID0gcmV2ZXJzZTtcbiAgICAgIHRoaXMuX3N0YWNrID0gbWFwLl9yb290ICYmIG1hcEl0ZXJhdG9yRnJhbWUobWFwLl9yb290KTtcbiAgICB9XG5cbiAgICBNYXBJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHR5cGUgPSB0aGlzLl90eXBlO1xuICAgICAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2s7XG4gICAgICB3aGlsZSAoc3RhY2spIHtcbiAgICAgICAgdmFyIG5vZGUgPSBzdGFjay5ub2RlO1xuICAgICAgICB2YXIgaW5kZXggPSBzdGFjay5pbmRleCsrO1xuICAgICAgICB2YXIgbWF4SW5kZXg7XG4gICAgICAgIGlmIChub2RlLmVudHJ5KSB7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFwSXRlcmF0b3JWYWx1ZSh0eXBlLCBub2RlLmVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgbWF4SW5kZXggPSBub2RlLmVudHJpZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICBpZiAoaW5kZXggPD0gbWF4SW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXBJdGVyYXRvclZhbHVlKHR5cGUsIG5vZGUuZW50cmllc1t0aGlzLl9yZXZlcnNlID8gbWF4SW5kZXggLSBpbmRleCA6IGluZGV4XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1heEluZGV4ID0gbm9kZS5ub2Rlcy5sZW5ndGggLSAxO1xuICAgICAgICAgIGlmIChpbmRleCA8PSBtYXhJbmRleCkge1xuICAgICAgICAgICAgdmFyIHN1Yk5vZGUgPSBub2RlLm5vZGVzW3RoaXMuX3JldmVyc2UgPyBtYXhJbmRleCAtIGluZGV4IDogaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHN1Yk5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKHN1Yk5vZGUuZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwSXRlcmF0b3JWYWx1ZSh0eXBlLCBzdWJOb2RlLmVudHJ5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzdGFjayA9IHRoaXMuX3N0YWNrID0gbWFwSXRlcmF0b3JGcmFtZShzdWJOb2RlLCBzdGFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2sgPSB0aGlzLl9zdGFjayA9IHRoaXMuX3N0YWNrLl9fcHJldjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICB9O1xuXG5cbiAgZnVuY3Rpb24gbWFwSXRlcmF0b3JWYWx1ZSh0eXBlLCBlbnRyeSkge1xuICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXBJdGVyYXRvckZyYW1lKG5vZGUsIHByZXYpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm9kZTogbm9kZSxcbiAgICAgIGluZGV4OiAwLFxuICAgICAgX19wcmV2OiBwcmV2XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VNYXAoc2l6ZSwgcm9vdCwgb3duZXJJRCwgaGFzaCkge1xuICAgIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKE1hcFByb3RvdHlwZSk7XG4gICAgbWFwLnNpemUgPSBzaXplO1xuICAgIG1hcC5fcm9vdCA9IHJvb3Q7XG4gICAgbWFwLl9fb3duZXJJRCA9IG93bmVySUQ7XG4gICAgbWFwLl9faGFzaCA9IGhhc2g7XG4gICAgbWFwLl9fYWx0ZXJlZCA9IGZhbHNlO1xuICAgIHJldHVybiBtYXA7XG4gIH1cblxuICB2YXIgRU1QVFlfTUFQO1xuICBmdW5jdGlvbiBlbXB0eU1hcCgpIHtcbiAgICByZXR1cm4gRU1QVFlfTUFQIHx8IChFTVBUWV9NQVAgPSBtYWtlTWFwKDApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU1hcChtYXAsIGssIHYpIHtcbiAgICB2YXIgbmV3Um9vdDtcbiAgICB2YXIgbmV3U2l6ZTtcbiAgICBpZiAoIW1hcC5fcm9vdCkge1xuICAgICAgaWYgKHYgPT09IE5PVF9TRVQpIHtcbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgIH1cbiAgICAgIG5ld1NpemUgPSAxO1xuICAgICAgbmV3Um9vdCA9IG5ldyBBcnJheU1hcE5vZGUobWFwLl9fb3duZXJJRCwgW1trLCB2XV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZGlkQ2hhbmdlU2l6ZSA9IE1ha2VSZWYoQ0hBTkdFX0xFTkdUSCk7XG4gICAgICB2YXIgZGlkQWx0ZXIgPSBNYWtlUmVmKERJRF9BTFRFUik7XG4gICAgICBuZXdSb290ID0gdXBkYXRlTm9kZShtYXAuX3Jvb3QsIG1hcC5fX293bmVySUQsIDAsIHVuZGVmaW5lZCwgaywgdiwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpO1xuICAgICAgaWYgKCFkaWRBbHRlci52YWx1ZSkge1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgfVxuICAgICAgbmV3U2l6ZSA9IG1hcC5zaXplICsgKGRpZENoYW5nZVNpemUudmFsdWUgPyB2ID09PSBOT1RfU0VUID8gLTEgOiAxIDogMCk7XG4gICAgfVxuICAgIGlmIChtYXAuX19vd25lcklEKSB7XG4gICAgICBtYXAuc2l6ZSA9IG5ld1NpemU7XG4gICAgICBtYXAuX3Jvb3QgPSBuZXdSb290O1xuICAgICAgbWFwLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgIG1hcC5fX2FsdGVyZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1Jvb3QgPyBtYWtlTWFwKG5ld1NpemUsIG5ld1Jvb3QpIDogZW1wdHlNYXAoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU5vZGUobm9kZSwgb3duZXJJRCwgc2hpZnQsIGtleUhhc2gsIGtleSwgdmFsdWUsIGRpZENoYW5nZVNpemUsIGRpZEFsdGVyKSB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICBpZiAodmFsdWUgPT09IE5PVF9TRVQpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9XG4gICAgICBTZXRSZWYoZGlkQWx0ZXIpO1xuICAgICAgU2V0UmVmKGRpZENoYW5nZVNpemUpO1xuICAgICAgcmV0dXJuIG5ldyBWYWx1ZU5vZGUob3duZXJJRCwga2V5SGFzaCwgW2tleSwgdmFsdWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGUudXBkYXRlKG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBrZXksIHZhbHVlLCBkaWRDaGFuZ2VTaXplLCBkaWRBbHRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBpc0xlYWZOb2RlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5jb25zdHJ1Y3RvciA9PT0gVmFsdWVOb2RlIHx8IG5vZGUuY29uc3RydWN0b3IgPT09IEhhc2hDb2xsaXNpb25Ob2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VJbnRvTm9kZShub2RlLCBvd25lcklELCBzaGlmdCwga2V5SGFzaCwgZW50cnkpIHtcbiAgICBpZiAobm9kZS5rZXlIYXNoID09PSBrZXlIYXNoKSB7XG4gICAgICByZXR1cm4gbmV3IEhhc2hDb2xsaXNpb25Ob2RlKG93bmVySUQsIGtleUhhc2gsIFtub2RlLmVudHJ5LCBlbnRyeV0pO1xuICAgIH1cblxuICAgIHZhciBpZHgxID0gKHNoaWZ0ID09PSAwID8gbm9kZS5rZXlIYXNoIDogbm9kZS5rZXlIYXNoID4+PiBzaGlmdCkgJiBNQVNLO1xuICAgIHZhciBpZHgyID0gKHNoaWZ0ID09PSAwID8ga2V5SGFzaCA6IGtleUhhc2ggPj4+IHNoaWZ0KSAmIE1BU0s7XG5cbiAgICB2YXIgbmV3Tm9kZTtcbiAgICB2YXIgbm9kZXMgPSBpZHgxID09PSBpZHgyID9cbiAgICAgIFttZXJnZUludG9Ob2RlKG5vZGUsIG93bmVySUQsIHNoaWZ0ICsgU0hJRlQsIGtleUhhc2gsIGVudHJ5KV0gOlxuICAgICAgKChuZXdOb2RlID0gbmV3IFZhbHVlTm9kZShvd25lcklELCBrZXlIYXNoLCBlbnRyeSkpLCBpZHgxIDwgaWR4MiA/IFtub2RlLCBuZXdOb2RlXSA6IFtuZXdOb2RlLCBub2RlXSk7XG5cbiAgICByZXR1cm4gbmV3IEJpdG1hcEluZGV4ZWROb2RlKG93bmVySUQsICgxIDw8IGlkeDEpIHwgKDEgPDwgaWR4MiksIG5vZGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVzKG93bmVySUQsIGVudHJpZXMsIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoIW93bmVySUQpIHtcbiAgICAgIG93bmVySUQgPSBuZXcgT3duZXJJRCgpO1xuICAgIH1cbiAgICB2YXIgbm9kZSA9IG5ldyBWYWx1ZU5vZGUob3duZXJJRCwgaGFzaChrZXkpLCBba2V5LCB2YWx1ZV0pO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBlbnRyaWVzLmxlbmd0aDsgaWkrKykge1xuICAgICAgdmFyIGVudHJ5ID0gZW50cmllc1tpaV07XG4gICAgICBub2RlID0gbm9kZS51cGRhdGUob3duZXJJRCwgMCwgdW5kZWZpbmVkLCBlbnRyeVswXSwgZW50cnlbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhY2tOb2Rlcyhvd25lcklELCBub2RlcywgY291bnQsIGV4Y2x1ZGluZykge1xuICAgIHZhciBiaXRtYXAgPSAwO1xuICAgIHZhciBwYWNrZWRJSSA9IDA7XG4gICAgdmFyIHBhY2tlZE5vZGVzID0gbmV3IEFycmF5KGNvdW50KTtcbiAgICBmb3IgKHZhciBpaSA9IDAsIGJpdCA9IDEsIGxlbiA9IG5vZGVzLmxlbmd0aDsgaWkgPCBsZW47IGlpKyssIGJpdCA8PD0gMSkge1xuICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpaV07XG4gICAgICBpZiAobm9kZSAhPT0gdW5kZWZpbmVkICYmIGlpICE9PSBleGNsdWRpbmcpIHtcbiAgICAgICAgYml0bWFwIHw9IGJpdDtcbiAgICAgICAgcGFja2VkTm9kZXNbcGFja2VkSUkrK10gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEJpdG1hcEluZGV4ZWROb2RlKG93bmVySUQsIGJpdG1hcCwgcGFja2VkTm9kZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXhwYW5kTm9kZXMob3duZXJJRCwgbm9kZXMsIGJpdG1hcCwgaW5jbHVkaW5nLCBub2RlKSB7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIgZXhwYW5kZWROb2RlcyA9IG5ldyBBcnJheShTSVpFKTtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGJpdG1hcCAhPT0gMDsgaWkrKywgYml0bWFwID4+Pj0gMSkge1xuICAgICAgZXhwYW5kZWROb2Rlc1tpaV0gPSBiaXRtYXAgJiAxID8gbm9kZXNbY291bnQrK10gOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGV4cGFuZGVkTm9kZXNbaW5jbHVkaW5nXSA9IG5vZGU7XG4gICAgcmV0dXJuIG5ldyBIYXNoQXJyYXlNYXBOb2RlKG93bmVySUQsIGNvdW50ICsgMSwgZXhwYW5kZWROb2Rlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZUludG9NYXBXaXRoKG1hcCwgbWVyZ2VyLCBpdGVyYWJsZXMpIHtcbiAgICB2YXIgaXRlcnMgPSBbXTtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgaXRlcmFibGVzLmxlbmd0aDsgaWkrKykge1xuICAgICAgdmFyIHZhbHVlID0gaXRlcmFibGVzW2lpXTtcbiAgICAgIHZhciBpdGVyID0gS2V5ZWRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICBpZiAoIWlzSXRlcmFibGUodmFsdWUpKSB7XG4gICAgICAgIGl0ZXIgPSBpdGVyLm1hcChmdW5jdGlvbih2ICkge3JldHVybiBmcm9tSlModil9KTtcbiAgICAgIH1cbiAgICAgIGl0ZXJzLnB1c2goaXRlcik7XG4gICAgfVxuICAgIHJldHVybiBtZXJnZUludG9Db2xsZWN0aW9uV2l0aChtYXAsIG1lcmdlciwgaXRlcnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVlcE1lcmdlcihleGlzdGluZywgdmFsdWUsIGtleSkge1xuICAgIHJldHVybiBleGlzdGluZyAmJiBleGlzdGluZy5tZXJnZURlZXAgJiYgaXNJdGVyYWJsZSh2YWx1ZSkgP1xuICAgICAgZXhpc3RpbmcubWVyZ2VEZWVwKHZhbHVlKSA6XG4gICAgICBpcyhleGlzdGluZywgdmFsdWUpID8gZXhpc3RpbmcgOiB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZXBNZXJnZXJXaXRoKG1lcmdlcikge1xuICAgIHJldHVybiBmdW5jdGlvbihleGlzdGluZywgdmFsdWUsIGtleSkgIHtcbiAgICAgIGlmIChleGlzdGluZyAmJiBleGlzdGluZy5tZXJnZURlZXBXaXRoICYmIGlzSXRlcmFibGUodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZy5tZXJnZURlZXBXaXRoKG1lcmdlciwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgdmFyIG5leHRWYWx1ZSA9IG1lcmdlcihleGlzdGluZywgdmFsdWUsIGtleSk7XG4gICAgICByZXR1cm4gaXMoZXhpc3RpbmcsIG5leHRWYWx1ZSkgPyBleGlzdGluZyA6IG5leHRWYWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VJbnRvQ29sbGVjdGlvbldpdGgoY29sbGVjdGlvbiwgbWVyZ2VyLCBpdGVycykge1xuICAgIGl0ZXJzID0gaXRlcnMuZmlsdGVyKGZ1bmN0aW9uKHggKSB7cmV0dXJuIHguc2l6ZSAhPT0gMH0pO1xuICAgIGlmIChpdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgIH1cbiAgICBpZiAoY29sbGVjdGlvbi5zaXplID09PSAwICYmICFjb2xsZWN0aW9uLl9fb3duZXJJRCAmJiBpdGVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uLmNvbnN0cnVjdG9yKGl0ZXJzWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24ud2l0aE11dGF0aW9ucyhmdW5jdGlvbihjb2xsZWN0aW9uICkge1xuICAgICAgdmFyIG1lcmdlSW50b01hcCA9IG1lcmdlciA/XG4gICAgICAgIGZ1bmN0aW9uKHZhbHVlLCBrZXkpICB7XG4gICAgICAgICAgY29sbGVjdGlvbi51cGRhdGUoa2V5LCBOT1RfU0VULCBmdW5jdGlvbihleGlzdGluZyApXG4gICAgICAgICAgICB7cmV0dXJuIGV4aXN0aW5nID09PSBOT1RfU0VUID8gdmFsdWUgOiBtZXJnZXIoZXhpc3RpbmcsIHZhbHVlLCBrZXkpfVxuICAgICAgICAgICk7XG4gICAgICAgIH0gOlxuICAgICAgICBmdW5jdGlvbih2YWx1ZSwga2V5KSAge1xuICAgICAgICAgIGNvbGxlY3Rpb24uc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgaXRlcnMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgIGl0ZXJzW2lpXS5mb3JFYWNoKG1lcmdlSW50b01hcCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVJbkRlZXBNYXAoZXhpc3RpbmcsIGtleVBhdGhJdGVyLCBub3RTZXRWYWx1ZSwgdXBkYXRlcikge1xuICAgIHZhciBpc05vdFNldCA9IGV4aXN0aW5nID09PSBOT1RfU0VUO1xuICAgIHZhciBzdGVwID0ga2V5UGF0aEl0ZXIubmV4dCgpO1xuICAgIGlmIChzdGVwLmRvbmUpIHtcbiAgICAgIHZhciBleGlzdGluZ1ZhbHVlID0gaXNOb3RTZXQgPyBub3RTZXRWYWx1ZSA6IGV4aXN0aW5nO1xuICAgICAgdmFyIG5ld1ZhbHVlID0gdXBkYXRlcihleGlzdGluZ1ZhbHVlKTtcbiAgICAgIHJldHVybiBuZXdWYWx1ZSA9PT0gZXhpc3RpbmdWYWx1ZSA/IGV4aXN0aW5nIDogbmV3VmFsdWU7XG4gICAgfVxuICAgIGludmFyaWFudChcbiAgICAgIGlzTm90U2V0IHx8IChleGlzdGluZyAmJiBleGlzdGluZy5zZXQpLFxuICAgICAgJ2ludmFsaWQga2V5UGF0aCdcbiAgICApO1xuICAgIHZhciBrZXkgPSBzdGVwLnZhbHVlO1xuICAgIHZhciBuZXh0RXhpc3RpbmcgPSBpc05vdFNldCA/IE5PVF9TRVQgOiBleGlzdGluZy5nZXQoa2V5LCBOT1RfU0VUKTtcbiAgICB2YXIgbmV4dFVwZGF0ZWQgPSB1cGRhdGVJbkRlZXBNYXAoXG4gICAgICBuZXh0RXhpc3RpbmcsXG4gICAgICBrZXlQYXRoSXRlcixcbiAgICAgIG5vdFNldFZhbHVlLFxuICAgICAgdXBkYXRlclxuICAgICk7XG4gICAgcmV0dXJuIG5leHRVcGRhdGVkID09PSBuZXh0RXhpc3RpbmcgPyBleGlzdGluZyA6XG4gICAgICBuZXh0VXBkYXRlZCA9PT0gTk9UX1NFVCA/IGV4aXN0aW5nLnJlbW92ZShrZXkpIDpcbiAgICAgIChpc05vdFNldCA/IGVtcHR5TWFwKCkgOiBleGlzdGluZykuc2V0KGtleSwgbmV4dFVwZGF0ZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9wQ291bnQoeCkge1xuICAgIHggPSB4IC0gKCh4ID4+IDEpICYgMHg1NTU1NTU1NSk7XG4gICAgeCA9ICh4ICYgMHgzMzMzMzMzMykgKyAoKHggPj4gMikgJiAweDMzMzMzMzMzKTtcbiAgICB4ID0gKHggKyAoeCA+PiA0KSkgJiAweDBmMGYwZjBmO1xuICAgIHggPSB4ICsgKHggPj4gOCk7XG4gICAgeCA9IHggKyAoeCA+PiAxNik7XG4gICAgcmV0dXJuIHggJiAweDdmO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0SW4oYXJyYXksIGlkeCwgdmFsLCBjYW5FZGl0KSB7XG4gICAgdmFyIG5ld0FycmF5ID0gY2FuRWRpdCA/IGFycmF5IDogYXJyQ29weShhcnJheSk7XG4gICAgbmV3QXJyYXlbaWR4XSA9IHZhbDtcbiAgICByZXR1cm4gbmV3QXJyYXk7XG4gIH1cblxuICBmdW5jdGlvbiBzcGxpY2VJbihhcnJheSwgaWR4LCB2YWwsIGNhbkVkaXQpIHtcbiAgICB2YXIgbmV3TGVuID0gYXJyYXkubGVuZ3RoICsgMTtcbiAgICBpZiAoY2FuRWRpdCAmJiBpZHggKyAxID09PSBuZXdMZW4pIHtcbiAgICAgIGFycmF5W2lkeF0gPSB2YWw7XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHZhciBuZXdBcnJheSA9IG5ldyBBcnJheShuZXdMZW4pO1xuICAgIHZhciBhZnRlciA9IDA7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG5ld0xlbjsgaWkrKykge1xuICAgICAgaWYgKGlpID09PSBpZHgpIHtcbiAgICAgICAgbmV3QXJyYXlbaWldID0gdmFsO1xuICAgICAgICBhZnRlciA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3QXJyYXlbaWldID0gYXJyYXlbaWkgKyBhZnRlcl07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNwbGljZU91dChhcnJheSwgaWR4LCBjYW5FZGl0KSB7XG4gICAgdmFyIG5ld0xlbiA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gICAgaWYgKGNhbkVkaXQgJiYgaWR4ID09PSBuZXdMZW4pIHtcbiAgICAgIGFycmF5LnBvcCgpO1xuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICB2YXIgbmV3QXJyYXkgPSBuZXcgQXJyYXkobmV3TGVuKTtcbiAgICB2YXIgYWZ0ZXIgPSAwO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBuZXdMZW47IGlpKyspIHtcbiAgICAgIGlmIChpaSA9PT0gaWR4KSB7XG4gICAgICAgIGFmdGVyID0gMTtcbiAgICAgIH1cbiAgICAgIG5ld0FycmF5W2lpXSA9IGFycmF5W2lpICsgYWZ0ZXJdO1xuICAgIH1cbiAgICByZXR1cm4gbmV3QXJyYXk7XG4gIH1cblxuICB2YXIgTUFYX0FSUkFZX01BUF9TSVpFID0gU0laRSAvIDQ7XG4gIHZhciBNQVhfQklUTUFQX0lOREVYRURfU0laRSA9IFNJWkUgLyAyO1xuICB2YXIgTUlOX0hBU0hfQVJSQVlfTUFQX1NJWkUgPSBTSVpFIC8gNDtcblxuICBjcmVhdGVDbGFzcyhMaXN0LCBJbmRleGVkQ29sbGVjdGlvbik7XG5cbiAgICAvLyBAcHJhZ21hIENvbnN0cnVjdGlvblxuXG4gICAgZnVuY3Rpb24gTGlzdCh2YWx1ZSkge1xuICAgICAgdmFyIGVtcHR5ID0gZW1wdHlMaXN0KCk7XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZW1wdHk7XG4gICAgICB9XG4gICAgICBpZiAoaXNMaXN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICB2YXIgaXRlciA9IEluZGV4ZWRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICB2YXIgc2l6ZSA9IGl0ZXIuc2l6ZTtcbiAgICAgIGlmIChzaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybiBlbXB0eTtcbiAgICAgIH1cbiAgICAgIGFzc2VydE5vdEluZmluaXRlKHNpemUpO1xuICAgICAgaWYgKHNpemUgPiAwICYmIHNpemUgPCBTSVpFKSB7XG4gICAgICAgIHJldHVybiBtYWtlTGlzdCgwLCBzaXplLCBTSElGVCwgbnVsbCwgbmV3IFZOb2RlKGl0ZXIudG9BcnJheSgpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHkud2l0aE11dGF0aW9ucyhmdW5jdGlvbihsaXN0ICkge1xuICAgICAgICBsaXN0LnNldFNpemUoc2l6ZSk7XG4gICAgICAgIGl0ZXIuZm9yRWFjaChmdW5jdGlvbih2LCBpKSAge3JldHVybiBsaXN0LnNldChpLCB2KX0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgTGlzdC5vZiA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIHJldHVybiB0aGlzKGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKCdMaXN0IFsnLCAnXScpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIEFjY2Vzc1xuXG4gICAgTGlzdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oaW5kZXgsIG5vdFNldFZhbHVlKSB7XG4gICAgICBpbmRleCA9IHdyYXBJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuc2l6ZSkge1xuICAgICAgICBpbmRleCArPSB0aGlzLl9vcmlnaW47XG4gICAgICAgIHZhciBub2RlID0gbGlzdE5vZGVGb3IodGhpcywgaW5kZXgpO1xuICAgICAgICByZXR1cm4gbm9kZSAmJiBub2RlLmFycmF5W2luZGV4ICYgTUFTS107XG4gICAgICB9XG4gICAgICByZXR1cm4gbm90U2V0VmFsdWU7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgTW9kaWZpY2F0aW9uXG5cbiAgICBMaXN0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB1cGRhdGVMaXN0KHRoaXMsIGluZGV4LCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICByZXR1cm4gIXRoaXMuaGFzKGluZGV4KSA/IHRoaXMgOlxuICAgICAgICBpbmRleCA9PT0gMCA/IHRoaXMuc2hpZnQoKSA6XG4gICAgICAgIGluZGV4ID09PSB0aGlzLnNpemUgLSAxID8gdGhpcy5wb3AoKSA6XG4gICAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24oaW5kZXgsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDAsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5fb3JpZ2luID0gdGhpcy5fY2FwYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLl9sZXZlbCA9IFNISUZUO1xuICAgICAgICB0aGlzLl9yb290ID0gdGhpcy5fdGFpbCA9IG51bGw7XG4gICAgICAgIHRoaXMuX19oYXNoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9fYWx0ZXJlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5TGlzdCgpO1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24oLyouLi52YWx1ZXMqLykge1xuICAgICAgdmFyIHZhbHVlcyA9IGFyZ3VtZW50cztcbiAgICAgIHZhciBvbGRTaXplID0gdGhpcy5zaXplO1xuICAgICAgcmV0dXJuIHRoaXMud2l0aE11dGF0aW9ucyhmdW5jdGlvbihsaXN0ICkge1xuICAgICAgICBzZXRMaXN0Qm91bmRzKGxpc3QsIDAsIG9sZFNpemUgKyB2YWx1ZXMubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IHZhbHVlcy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICBsaXN0LnNldChvbGRTaXplICsgaWksIHZhbHVlc1tpaV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2V0TGlzdEJvdW5kcyh0aGlzLCAwLCAtMSk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbigvKi4uLnZhbHVlcyovKSB7XG4gICAgICB2YXIgdmFsdWVzID0gYXJndW1lbnRzO1xuICAgICAgcmV0dXJuIHRoaXMud2l0aE11dGF0aW9ucyhmdW5jdGlvbihsaXN0ICkge1xuICAgICAgICBzZXRMaXN0Qm91bmRzKGxpc3QsIC12YWx1ZXMubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IHZhbHVlcy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICBsaXN0LnNldChpaSwgdmFsdWVzW2lpXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNldExpc3RCb3VuZHModGhpcywgMSk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgQ29tcG9zaXRpb25cblxuICAgIExpc3QucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24oLyouLi5pdGVycyovKSB7XG4gICAgICByZXR1cm4gbWVyZ2VJbnRvTGlzdFdpdGgodGhpcywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBMaXN0LnByb3RvdHlwZS5tZXJnZVdpdGggPSBmdW5jdGlvbihtZXJnZXIpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHJldHVybiBtZXJnZUludG9MaXN0V2l0aCh0aGlzLCBtZXJnZXIsIGl0ZXJzKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUubWVyZ2VEZWVwID0gZnVuY3Rpb24oLyouLi5pdGVycyovKSB7XG4gICAgICByZXR1cm4gbWVyZ2VJbnRvTGlzdFdpdGgodGhpcywgZGVlcE1lcmdlciwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUubWVyZ2VEZWVwV2l0aCA9IGZ1bmN0aW9uKG1lcmdlcikge3ZhciBpdGVycyA9IFNMSUNFJDAuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgcmV0dXJuIG1lcmdlSW50b0xpc3RXaXRoKHRoaXMsIGRlZXBNZXJnZXJXaXRoKG1lcmdlciksIGl0ZXJzKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUuc2V0U2l6ZSA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICAgIHJldHVybiBzZXRMaXN0Qm91bmRzKHRoaXMsIDAsIHNpemUpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIEl0ZXJhdGlvblxuXG4gICAgTGlzdC5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XG4gICAgICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICAgIGlmICh3aG9sZVNsaWNlKGJlZ2luLCBlbmQsIHNpemUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNldExpc3RCb3VuZHMoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHJlc29sdmVCZWdpbihiZWdpbiwgc2l6ZSksXG4gICAgICAgIHJlc29sdmVFbmQoZW5kLCBzaXplKVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgTGlzdC5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgdmFsdWVzID0gaXRlcmF0ZUxpc3QodGhpcywgcmV2ZXJzZSk7XG4gICAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzKCk7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gRE9ORSA/XG4gICAgICAgICAgaXRlcmF0b3JEb25lKCkgOlxuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwgaW5kZXgrKywgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHZhbHVlcyA9IGl0ZXJhdGVMaXN0KHRoaXMsIHJldmVyc2UpO1xuICAgICAgdmFyIHZhbHVlO1xuICAgICAgd2hpbGUgKCh2YWx1ZSA9IHZhbHVlcygpKSAhPT0gRE9ORSkge1xuICAgICAgICBpZiAoZm4odmFsdWUsIGluZGV4KyssIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcblxuICAgIExpc3QucHJvdG90eXBlLl9fZW5zdXJlT3duZXIgPSBmdW5jdGlvbihvd25lcklEKSB7XG4gICAgICBpZiAob3duZXJJRCA9PT0gdGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpZiAoIW93bmVySUQpIHtcbiAgICAgICAgdGhpcy5fX293bmVySUQgPSBvd25lcklEO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYWtlTGlzdCh0aGlzLl9vcmlnaW4sIHRoaXMuX2NhcGFjaXR5LCB0aGlzLl9sZXZlbCwgdGhpcy5fcm9vdCwgdGhpcy5fdGFpbCwgb3duZXJJRCwgdGhpcy5fX2hhc2gpO1xuICAgIH07XG5cblxuICBmdW5jdGlvbiBpc0xpc3QobWF5YmVMaXN0KSB7XG4gICAgcmV0dXJuICEhKG1heWJlTGlzdCAmJiBtYXliZUxpc3RbSVNfTElTVF9TRU5USU5FTF0pO1xuICB9XG5cbiAgTGlzdC5pc0xpc3QgPSBpc0xpc3Q7XG5cbiAgdmFyIElTX0xJU1RfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9MSVNUX19AQCc7XG5cbiAgdmFyIExpc3RQcm90b3R5cGUgPSBMaXN0LnByb3RvdHlwZTtcbiAgTGlzdFByb3RvdHlwZVtJU19MSVNUX1NFTlRJTkVMXSA9IHRydWU7XG4gIExpc3RQcm90b3R5cGVbREVMRVRFXSA9IExpc3RQcm90b3R5cGUucmVtb3ZlO1xuICBMaXN0UHJvdG90eXBlLnNldEluID0gTWFwUHJvdG90eXBlLnNldEluO1xuICBMaXN0UHJvdG90eXBlLmRlbGV0ZUluID1cbiAgTGlzdFByb3RvdHlwZS5yZW1vdmVJbiA9IE1hcFByb3RvdHlwZS5yZW1vdmVJbjtcbiAgTGlzdFByb3RvdHlwZS51cGRhdGUgPSBNYXBQcm90b3R5cGUudXBkYXRlO1xuICBMaXN0UHJvdG90eXBlLnVwZGF0ZUluID0gTWFwUHJvdG90eXBlLnVwZGF0ZUluO1xuICBMaXN0UHJvdG90eXBlLm1lcmdlSW4gPSBNYXBQcm90b3R5cGUubWVyZ2VJbjtcbiAgTGlzdFByb3RvdHlwZS5tZXJnZURlZXBJbiA9IE1hcFByb3RvdHlwZS5tZXJnZURlZXBJbjtcbiAgTGlzdFByb3RvdHlwZS53aXRoTXV0YXRpb25zID0gTWFwUHJvdG90eXBlLndpdGhNdXRhdGlvbnM7XG4gIExpc3RQcm90b3R5cGUuYXNNdXRhYmxlID0gTWFwUHJvdG90eXBlLmFzTXV0YWJsZTtcbiAgTGlzdFByb3RvdHlwZS5hc0ltbXV0YWJsZSA9IE1hcFByb3RvdHlwZS5hc0ltbXV0YWJsZTtcbiAgTGlzdFByb3RvdHlwZS53YXNBbHRlcmVkID0gTWFwUHJvdG90eXBlLndhc0FsdGVyZWQ7XG5cblxuXG4gICAgZnVuY3Rpb24gVk5vZGUoYXJyYXksIG93bmVySUQpIHtcbiAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICAgIHRoaXMub3duZXJJRCA9IG93bmVySUQ7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogc2VlbXMgbGlrZSB0aGVzZSBtZXRob2RzIGFyZSB2ZXJ5IHNpbWlsYXJcblxuICAgIFZOb2RlLnByb3RvdHlwZS5yZW1vdmVCZWZvcmUgPSBmdW5jdGlvbihvd25lcklELCBsZXZlbCwgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gbGV2ZWwgPyAxIDw8IGxldmVsIDogMCB8fCB0aGlzLmFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBvcmlnaW5JbmRleCA9IChpbmRleCA+Pj4gbGV2ZWwpICYgTUFTSztcbiAgICAgIGlmIChvcmlnaW5JbmRleCA+PSB0aGlzLmFycmF5Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbmV3IFZOb2RlKFtdLCBvd25lcklEKTtcbiAgICAgIH1cbiAgICAgIHZhciByZW1vdmluZ0ZpcnN0ID0gb3JpZ2luSW5kZXggPT09IDA7XG4gICAgICB2YXIgbmV3Q2hpbGQ7XG4gICAgICBpZiAobGV2ZWwgPiAwKSB7XG4gICAgICAgIHZhciBvbGRDaGlsZCA9IHRoaXMuYXJyYXlbb3JpZ2luSW5kZXhdO1xuICAgICAgICBuZXdDaGlsZCA9IG9sZENoaWxkICYmIG9sZENoaWxkLnJlbW92ZUJlZm9yZShvd25lcklELCBsZXZlbCAtIFNISUZULCBpbmRleCk7XG4gICAgICAgIGlmIChuZXdDaGlsZCA9PT0gb2xkQ2hpbGQgJiYgcmVtb3ZpbmdGaXJzdCkge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmVtb3ZpbmdGaXJzdCAmJiAhbmV3Q2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgZWRpdGFibGUgPSBlZGl0YWJsZVZOb2RlKHRoaXMsIG93bmVySUQpO1xuICAgICAgaWYgKCFyZW1vdmluZ0ZpcnN0KSB7XG4gICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBvcmlnaW5JbmRleDsgaWkrKykge1xuICAgICAgICAgIGVkaXRhYmxlLmFycmF5W2lpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG5ld0NoaWxkKSB7XG4gICAgICAgIGVkaXRhYmxlLmFycmF5W29yaWdpbkluZGV4XSA9IG5ld0NoaWxkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVkaXRhYmxlO1xuICAgIH07XG5cbiAgICBWTm9kZS5wcm90b3R5cGUucmVtb3ZlQWZ0ZXIgPSBmdW5jdGlvbihvd25lcklELCBsZXZlbCwgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gKGxldmVsID8gMSA8PCBsZXZlbCA6IDApIHx8IHRoaXMuYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIHNpemVJbmRleCA9ICgoaW5kZXggLSAxKSA+Pj4gbGV2ZWwpICYgTUFTSztcbiAgICAgIGlmIChzaXplSW5kZXggPj0gdGhpcy5hcnJheS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdDaGlsZDtcbiAgICAgIGlmIChsZXZlbCA+IDApIHtcbiAgICAgICAgdmFyIG9sZENoaWxkID0gdGhpcy5hcnJheVtzaXplSW5kZXhdO1xuICAgICAgICBuZXdDaGlsZCA9IG9sZENoaWxkICYmIG9sZENoaWxkLnJlbW92ZUFmdGVyKG93bmVySUQsIGxldmVsIC0gU0hJRlQsIGluZGV4KTtcbiAgICAgICAgaWYgKG5ld0NoaWxkID09PSBvbGRDaGlsZCAmJiBzaXplSW5kZXggPT09IHRoaXMuYXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBlZGl0YWJsZSA9IGVkaXRhYmxlVk5vZGUodGhpcywgb3duZXJJRCk7XG4gICAgICBlZGl0YWJsZS5hcnJheS5zcGxpY2Uoc2l6ZUluZGV4ICsgMSk7XG4gICAgICBpZiAobmV3Q2hpbGQpIHtcbiAgICAgICAgZWRpdGFibGUuYXJyYXlbc2l6ZUluZGV4XSA9IG5ld0NoaWxkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVkaXRhYmxlO1xuICAgIH07XG5cblxuXG4gIHZhciBET05FID0ge307XG5cbiAgZnVuY3Rpb24gaXRlcmF0ZUxpc3QobGlzdCwgcmV2ZXJzZSkge1xuICAgIHZhciBsZWZ0ID0gbGlzdC5fb3JpZ2luO1xuICAgIHZhciByaWdodCA9IGxpc3QuX2NhcGFjaXR5O1xuICAgIHZhciB0YWlsUG9zID0gZ2V0VGFpbE9mZnNldChyaWdodCk7XG4gICAgdmFyIHRhaWwgPSBsaXN0Ll90YWlsO1xuXG4gICAgcmV0dXJuIGl0ZXJhdGVOb2RlT3JMZWFmKGxpc3QuX3Jvb3QsIGxpc3QuX2xldmVsLCAwKTtcblxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVOb2RlT3JMZWFmKG5vZGUsIGxldmVsLCBvZmZzZXQpIHtcbiAgICAgIHJldHVybiBsZXZlbCA9PT0gMCA/XG4gICAgICAgIGl0ZXJhdGVMZWFmKG5vZGUsIG9mZnNldCkgOlxuICAgICAgICBpdGVyYXRlTm9kZShub2RlLCBsZXZlbCwgb2Zmc2V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpdGVyYXRlTGVhZihub2RlLCBvZmZzZXQpIHtcbiAgICAgIHZhciBhcnJheSA9IG9mZnNldCA9PT0gdGFpbFBvcyA/IHRhaWwgJiYgdGFpbC5hcnJheSA6IG5vZGUgJiYgbm9kZS5hcnJheTtcbiAgICAgIHZhciBmcm9tID0gb2Zmc2V0ID4gbGVmdCA/IDAgOiBsZWZ0IC0gb2Zmc2V0O1xuICAgICAgdmFyIHRvID0gcmlnaHQgLSBvZmZzZXQ7XG4gICAgICBpZiAodG8gPiBTSVpFKSB7XG4gICAgICAgIHRvID0gU0laRTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbigpICB7XG4gICAgICAgIGlmIChmcm9tID09PSB0bykge1xuICAgICAgICAgIHJldHVybiBET05FO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpZHggPSByZXZlcnNlID8gLS10byA6IGZyb20rKztcbiAgICAgICAgcmV0dXJuIGFycmF5ICYmIGFycmF5W2lkeF07XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVOb2RlKG5vZGUsIGxldmVsLCBvZmZzZXQpIHtcbiAgICAgIHZhciB2YWx1ZXM7XG4gICAgICB2YXIgYXJyYXkgPSBub2RlICYmIG5vZGUuYXJyYXk7XG4gICAgICB2YXIgZnJvbSA9IG9mZnNldCA+IGxlZnQgPyAwIDogKGxlZnQgLSBvZmZzZXQpID4+IGxldmVsO1xuICAgICAgdmFyIHRvID0gKChyaWdodCAtIG9mZnNldCkgPj4gbGV2ZWwpICsgMTtcbiAgICAgIGlmICh0byA+IFNJWkUpIHtcbiAgICAgICAgdG8gPSBTSVpFO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlcygpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBET05FKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlcyA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmcm9tID09PSB0bykge1xuICAgICAgICAgICAgcmV0dXJuIERPTkU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBpZHggPSByZXZlcnNlID8gLS10byA6IGZyb20rKztcbiAgICAgICAgICB2YWx1ZXMgPSBpdGVyYXRlTm9kZU9yTGVhZihcbiAgICAgICAgICAgIGFycmF5ICYmIGFycmF5W2lkeF0sIGxldmVsIC0gU0hJRlQsIG9mZnNldCArIChpZHggPDwgbGV2ZWwpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSB3aGlsZSAodHJ1ZSk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VMaXN0KG9yaWdpbiwgY2FwYWNpdHksIGxldmVsLCByb290LCB0YWlsLCBvd25lcklELCBoYXNoKSB7XG4gICAgdmFyIGxpc3QgPSBPYmplY3QuY3JlYXRlKExpc3RQcm90b3R5cGUpO1xuICAgIGxpc3Quc2l6ZSA9IGNhcGFjaXR5IC0gb3JpZ2luO1xuICAgIGxpc3QuX29yaWdpbiA9IG9yaWdpbjtcbiAgICBsaXN0Ll9jYXBhY2l0eSA9IGNhcGFjaXR5O1xuICAgIGxpc3QuX2xldmVsID0gbGV2ZWw7XG4gICAgbGlzdC5fcm9vdCA9IHJvb3Q7XG4gICAgbGlzdC5fdGFpbCA9IHRhaWw7XG4gICAgbGlzdC5fX293bmVySUQgPSBvd25lcklEO1xuICAgIGxpc3QuX19oYXNoID0gaGFzaDtcbiAgICBsaXN0Ll9fYWx0ZXJlZCA9IGZhbHNlO1xuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgdmFyIEVNUFRZX0xJU1Q7XG4gIGZ1bmN0aW9uIGVtcHR5TGlzdCgpIHtcbiAgICByZXR1cm4gRU1QVFlfTElTVCB8fCAoRU1QVFlfTElTVCA9IG1ha2VMaXN0KDAsIDAsIFNISUZUKSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMaXN0KGxpc3QsIGluZGV4LCB2YWx1ZSkge1xuICAgIGluZGV4ID0gd3JhcEluZGV4KGxpc3QsIGluZGV4KTtcblxuICAgIGlmIChpbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cblxuICAgIGlmIChpbmRleCA+PSBsaXN0LnNpemUgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm4gbGlzdC53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKGxpc3QgKSB7XG4gICAgICAgIGluZGV4IDwgMCA/XG4gICAgICAgICAgc2V0TGlzdEJvdW5kcyhsaXN0LCBpbmRleCkuc2V0KDAsIHZhbHVlKSA6XG4gICAgICAgICAgc2V0TGlzdEJvdW5kcyhsaXN0LCAwLCBpbmRleCArIDEpLnNldChpbmRleCwgdmFsdWUpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmRleCArPSBsaXN0Ll9vcmlnaW47XG5cbiAgICB2YXIgbmV3VGFpbCA9IGxpc3QuX3RhaWw7XG4gICAgdmFyIG5ld1Jvb3QgPSBsaXN0Ll9yb290O1xuICAgIHZhciBkaWRBbHRlciA9IE1ha2VSZWYoRElEX0FMVEVSKTtcbiAgICBpZiAoaW5kZXggPj0gZ2V0VGFpbE9mZnNldChsaXN0Ll9jYXBhY2l0eSkpIHtcbiAgICAgIG5ld1RhaWwgPSB1cGRhdGVWTm9kZShuZXdUYWlsLCBsaXN0Ll9fb3duZXJJRCwgMCwgaW5kZXgsIHZhbHVlLCBkaWRBbHRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1Jvb3QgPSB1cGRhdGVWTm9kZShuZXdSb290LCBsaXN0Ll9fb3duZXJJRCwgbGlzdC5fbGV2ZWwsIGluZGV4LCB2YWx1ZSwgZGlkQWx0ZXIpO1xuICAgIH1cblxuICAgIGlmICghZGlkQWx0ZXIudmFsdWUpIHtcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cblxuICAgIGlmIChsaXN0Ll9fb3duZXJJRCkge1xuICAgICAgbGlzdC5fcm9vdCA9IG5ld1Jvb3Q7XG4gICAgICBsaXN0Ll90YWlsID0gbmV3VGFpbDtcbiAgICAgIGxpc3QuX19oYXNoID0gdW5kZWZpbmVkO1xuICAgICAgbGlzdC5fX2FsdGVyZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIHJldHVybiBtYWtlTGlzdChsaXN0Ll9vcmlnaW4sIGxpc3QuX2NhcGFjaXR5LCBsaXN0Ll9sZXZlbCwgbmV3Um9vdCwgbmV3VGFpbCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVWTm9kZShub2RlLCBvd25lcklELCBsZXZlbCwgaW5kZXgsIHZhbHVlLCBkaWRBbHRlcikge1xuICAgIHZhciBpZHggPSAoaW5kZXggPj4+IGxldmVsKSAmIE1BU0s7XG4gICAgdmFyIG5vZGVIYXMgPSBub2RlICYmIGlkeCA8IG5vZGUuYXJyYXkubGVuZ3RoO1xuICAgIGlmICghbm9kZUhhcyAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICB2YXIgbmV3Tm9kZTtcblxuICAgIGlmIChsZXZlbCA+IDApIHtcbiAgICAgIHZhciBsb3dlck5vZGUgPSBub2RlICYmIG5vZGUuYXJyYXlbaWR4XTtcbiAgICAgIHZhciBuZXdMb3dlck5vZGUgPSB1cGRhdGVWTm9kZShsb3dlck5vZGUsIG93bmVySUQsIGxldmVsIC0gU0hJRlQsIGluZGV4LCB2YWx1ZSwgZGlkQWx0ZXIpO1xuICAgICAgaWYgKG5ld0xvd2VyTm9kZSA9PT0gbG93ZXJOb2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfVxuICAgICAgbmV3Tm9kZSA9IGVkaXRhYmxlVk5vZGUobm9kZSwgb3duZXJJRCk7XG4gICAgICBuZXdOb2RlLmFycmF5W2lkeF0gPSBuZXdMb3dlck5vZGU7XG4gICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZUhhcyAmJiBub2RlLmFycmF5W2lkeF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBTZXRSZWYoZGlkQWx0ZXIpO1xuXG4gICAgbmV3Tm9kZSA9IGVkaXRhYmxlVk5vZGUobm9kZSwgb3duZXJJRCk7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgaWR4ID09PSBuZXdOb2RlLmFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgIG5ld05vZGUuYXJyYXkucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld05vZGUuYXJyYXlbaWR4XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRhYmxlVk5vZGUobm9kZSwgb3duZXJJRCkge1xuICAgIGlmIChvd25lcklEICYmIG5vZGUgJiYgb3duZXJJRCA9PT0gbm9kZS5vd25lcklEKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBWTm9kZShub2RlID8gbm9kZS5hcnJheS5zbGljZSgpIDogW10sIG93bmVySUQpO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdE5vZGVGb3IobGlzdCwgcmF3SW5kZXgpIHtcbiAgICBpZiAocmF3SW5kZXggPj0gZ2V0VGFpbE9mZnNldChsaXN0Ll9jYXBhY2l0eSkpIHtcbiAgICAgIHJldHVybiBsaXN0Ll90YWlsO1xuICAgIH1cbiAgICBpZiAocmF3SW5kZXggPCAxIDw8IChsaXN0Ll9sZXZlbCArIFNISUZUKSkge1xuICAgICAgdmFyIG5vZGUgPSBsaXN0Ll9yb290O1xuICAgICAgdmFyIGxldmVsID0gbGlzdC5fbGV2ZWw7XG4gICAgICB3aGlsZSAobm9kZSAmJiBsZXZlbCA+IDApIHtcbiAgICAgICAgbm9kZSA9IG5vZGUuYXJyYXlbKHJhd0luZGV4ID4+PiBsZXZlbCkgJiBNQVNLXTtcbiAgICAgICAgbGV2ZWwgLT0gU0hJRlQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRMaXN0Qm91bmRzKGxpc3QsIGJlZ2luLCBlbmQpIHtcbiAgICAvLyBTYW5pdGl6ZSBiZWdpbiAmIGVuZCB1c2luZyB0aGlzIHNob3J0aGFuZCBmb3IgVG9JbnQzMihhcmd1bWVudClcbiAgICAvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9pbnQzMlxuICAgIGlmIChiZWdpbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBiZWdpbiA9IGJlZ2luIHwgMDtcbiAgICB9XG4gICAgaWYgKGVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmQgPSBlbmQgfCAwO1xuICAgIH1cbiAgICB2YXIgb3duZXIgPSBsaXN0Ll9fb3duZXJJRCB8fCBuZXcgT3duZXJJRCgpO1xuICAgIHZhciBvbGRPcmlnaW4gPSBsaXN0Ll9vcmlnaW47XG4gICAgdmFyIG9sZENhcGFjaXR5ID0gbGlzdC5fY2FwYWNpdHk7XG4gICAgdmFyIG5ld09yaWdpbiA9IG9sZE9yaWdpbiArIGJlZ2luO1xuICAgIHZhciBuZXdDYXBhY2l0eSA9IGVuZCA9PT0gdW5kZWZpbmVkID8gb2xkQ2FwYWNpdHkgOiBlbmQgPCAwID8gb2xkQ2FwYWNpdHkgKyBlbmQgOiBvbGRPcmlnaW4gKyBlbmQ7XG4gICAgaWYgKG5ld09yaWdpbiA9PT0gb2xkT3JpZ2luICYmIG5ld0NhcGFjaXR5ID09PSBvbGRDYXBhY2l0eSkge1xuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuXG4gICAgLy8gSWYgaXQncyBnb2luZyB0byBlbmQgYWZ0ZXIgaXQgc3RhcnRzLCBpdCdzIGVtcHR5LlxuICAgIGlmIChuZXdPcmlnaW4gPj0gbmV3Q2FwYWNpdHkpIHtcbiAgICAgIHJldHVybiBsaXN0LmNsZWFyKCk7XG4gICAgfVxuXG4gICAgdmFyIG5ld0xldmVsID0gbGlzdC5fbGV2ZWw7XG4gICAgdmFyIG5ld1Jvb3QgPSBsaXN0Ll9yb290O1xuXG4gICAgLy8gTmV3IG9yaWdpbiBtaWdodCBuZWVkIGNyZWF0aW5nIGEgaGlnaGVyIHJvb3QuXG4gICAgdmFyIG9mZnNldFNoaWZ0ID0gMDtcbiAgICB3aGlsZSAobmV3T3JpZ2luICsgb2Zmc2V0U2hpZnQgPCAwKSB7XG4gICAgICBuZXdSb290ID0gbmV3IFZOb2RlKG5ld1Jvb3QgJiYgbmV3Um9vdC5hcnJheS5sZW5ndGggPyBbdW5kZWZpbmVkLCBuZXdSb290XSA6IFtdLCBvd25lcik7XG4gICAgICBuZXdMZXZlbCArPSBTSElGVDtcbiAgICAgIG9mZnNldFNoaWZ0ICs9IDEgPDwgbmV3TGV2ZWw7XG4gICAgfVxuICAgIGlmIChvZmZzZXRTaGlmdCkge1xuICAgICAgbmV3T3JpZ2luICs9IG9mZnNldFNoaWZ0O1xuICAgICAgb2xkT3JpZ2luICs9IG9mZnNldFNoaWZ0O1xuICAgICAgbmV3Q2FwYWNpdHkgKz0gb2Zmc2V0U2hpZnQ7XG4gICAgICBvbGRDYXBhY2l0eSArPSBvZmZzZXRTaGlmdDtcbiAgICB9XG5cbiAgICB2YXIgb2xkVGFpbE9mZnNldCA9IGdldFRhaWxPZmZzZXQob2xkQ2FwYWNpdHkpO1xuICAgIHZhciBuZXdUYWlsT2Zmc2V0ID0gZ2V0VGFpbE9mZnNldChuZXdDYXBhY2l0eSk7XG5cbiAgICAvLyBOZXcgc2l6ZSBtaWdodCBuZWVkIGNyZWF0aW5nIGEgaGlnaGVyIHJvb3QuXG4gICAgd2hpbGUgKG5ld1RhaWxPZmZzZXQgPj0gMSA8PCAobmV3TGV2ZWwgKyBTSElGVCkpIHtcbiAgICAgIG5ld1Jvb3QgPSBuZXcgVk5vZGUobmV3Um9vdCAmJiBuZXdSb290LmFycmF5Lmxlbmd0aCA/IFtuZXdSb290XSA6IFtdLCBvd25lcik7XG4gICAgICBuZXdMZXZlbCArPSBTSElGVDtcbiAgICB9XG5cbiAgICAvLyBMb2NhdGUgb3IgY3JlYXRlIHRoZSBuZXcgdGFpbC5cbiAgICB2YXIgb2xkVGFpbCA9IGxpc3QuX3RhaWw7XG4gICAgdmFyIG5ld1RhaWwgPSBuZXdUYWlsT2Zmc2V0IDwgb2xkVGFpbE9mZnNldCA/XG4gICAgICBsaXN0Tm9kZUZvcihsaXN0LCBuZXdDYXBhY2l0eSAtIDEpIDpcbiAgICAgIG5ld1RhaWxPZmZzZXQgPiBvbGRUYWlsT2Zmc2V0ID8gbmV3IFZOb2RlKFtdLCBvd25lcikgOiBvbGRUYWlsO1xuXG4gICAgLy8gTWVyZ2UgVGFpbCBpbnRvIHRyZWUuXG4gICAgaWYgKG9sZFRhaWwgJiYgbmV3VGFpbE9mZnNldCA+IG9sZFRhaWxPZmZzZXQgJiYgbmV3T3JpZ2luIDwgb2xkQ2FwYWNpdHkgJiYgb2xkVGFpbC5hcnJheS5sZW5ndGgpIHtcbiAgICAgIG5ld1Jvb3QgPSBlZGl0YWJsZVZOb2RlKG5ld1Jvb3QsIG93bmVyKTtcbiAgICAgIHZhciBub2RlID0gbmV3Um9vdDtcbiAgICAgIGZvciAodmFyIGxldmVsID0gbmV3TGV2ZWw7IGxldmVsID4gU0hJRlQ7IGxldmVsIC09IFNISUZUKSB7XG4gICAgICAgIHZhciBpZHggPSAob2xkVGFpbE9mZnNldCA+Pj4gbGV2ZWwpICYgTUFTSztcbiAgICAgICAgbm9kZSA9IG5vZGUuYXJyYXlbaWR4XSA9IGVkaXRhYmxlVk5vZGUobm9kZS5hcnJheVtpZHhdLCBvd25lcik7XG4gICAgICB9XG4gICAgICBub2RlLmFycmF5WyhvbGRUYWlsT2Zmc2V0ID4+PiBTSElGVCkgJiBNQVNLXSA9IG9sZFRhaWw7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHNpemUgaGFzIGJlZW4gcmVkdWNlZCwgdGhlcmUncyBhIGNoYW5jZSB0aGUgdGFpbCBuZWVkcyB0byBiZSB0cmltbWVkLlxuICAgIGlmIChuZXdDYXBhY2l0eSA8IG9sZENhcGFjaXR5KSB7XG4gICAgICBuZXdUYWlsID0gbmV3VGFpbCAmJiBuZXdUYWlsLnJlbW92ZUFmdGVyKG93bmVyLCAwLCBuZXdDYXBhY2l0eSk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIG5ldyBvcmlnaW4gaXMgd2l0aGluIHRoZSB0YWlsLCB0aGVuIHdlIGRvIG5vdCBuZWVkIGEgcm9vdC5cbiAgICBpZiAobmV3T3JpZ2luID49IG5ld1RhaWxPZmZzZXQpIHtcbiAgICAgIG5ld09yaWdpbiAtPSBuZXdUYWlsT2Zmc2V0O1xuICAgICAgbmV3Q2FwYWNpdHkgLT0gbmV3VGFpbE9mZnNldDtcbiAgICAgIG5ld0xldmVsID0gU0hJRlQ7XG4gICAgICBuZXdSb290ID0gbnVsbDtcbiAgICAgIG5ld1RhaWwgPSBuZXdUYWlsICYmIG5ld1RhaWwucmVtb3ZlQmVmb3JlKG93bmVyLCAwLCBuZXdPcmlnaW4pO1xuXG4gICAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgcm9vdCBoYXMgYmVlbiB0cmltbWVkLCBnYXJiYWdlIGNvbGxlY3QuXG4gICAgfSBlbHNlIGlmIChuZXdPcmlnaW4gPiBvbGRPcmlnaW4gfHwgbmV3VGFpbE9mZnNldCA8IG9sZFRhaWxPZmZzZXQpIHtcbiAgICAgIG9mZnNldFNoaWZ0ID0gMDtcblxuICAgICAgLy8gSWRlbnRpZnkgdGhlIG5ldyB0b3Agcm9vdCBub2RlIG9mIHRoZSBzdWJ0cmVlIG9mIHRoZSBvbGQgcm9vdC5cbiAgICAgIHdoaWxlIChuZXdSb290KSB7XG4gICAgICAgIHZhciBiZWdpbkluZGV4ID0gKG5ld09yaWdpbiA+Pj4gbmV3TGV2ZWwpICYgTUFTSztcbiAgICAgICAgaWYgKGJlZ2luSW5kZXggIT09IChuZXdUYWlsT2Zmc2V0ID4+PiBuZXdMZXZlbCkgJiBNQVNLKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJlZ2luSW5kZXgpIHtcbiAgICAgICAgICBvZmZzZXRTaGlmdCArPSAoMSA8PCBuZXdMZXZlbCkgKiBiZWdpbkluZGV4O1xuICAgICAgICB9XG4gICAgICAgIG5ld0xldmVsIC09IFNISUZUO1xuICAgICAgICBuZXdSb290ID0gbmV3Um9vdC5hcnJheVtiZWdpbkluZGV4XTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJpbSB0aGUgbmV3IHNpZGVzIG9mIHRoZSBuZXcgcm9vdC5cbiAgICAgIGlmIChuZXdSb290ICYmIG5ld09yaWdpbiA+IG9sZE9yaWdpbikge1xuICAgICAgICBuZXdSb290ID0gbmV3Um9vdC5yZW1vdmVCZWZvcmUob3duZXIsIG5ld0xldmVsLCBuZXdPcmlnaW4gLSBvZmZzZXRTaGlmdCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Um9vdCAmJiBuZXdUYWlsT2Zmc2V0IDwgb2xkVGFpbE9mZnNldCkge1xuICAgICAgICBuZXdSb290ID0gbmV3Um9vdC5yZW1vdmVBZnRlcihvd25lciwgbmV3TGV2ZWwsIG5ld1RhaWxPZmZzZXQgLSBvZmZzZXRTaGlmdCk7XG4gICAgICB9XG4gICAgICBpZiAob2Zmc2V0U2hpZnQpIHtcbiAgICAgICAgbmV3T3JpZ2luIC09IG9mZnNldFNoaWZ0O1xuICAgICAgICBuZXdDYXBhY2l0eSAtPSBvZmZzZXRTaGlmdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobGlzdC5fX293bmVySUQpIHtcbiAgICAgIGxpc3Quc2l6ZSA9IG5ld0NhcGFjaXR5IC0gbmV3T3JpZ2luO1xuICAgICAgbGlzdC5fb3JpZ2luID0gbmV3T3JpZ2luO1xuICAgICAgbGlzdC5fY2FwYWNpdHkgPSBuZXdDYXBhY2l0eTtcbiAgICAgIGxpc3QuX2xldmVsID0gbmV3TGV2ZWw7XG4gICAgICBsaXN0Ll9yb290ID0gbmV3Um9vdDtcbiAgICAgIGxpc3QuX3RhaWwgPSBuZXdUYWlsO1xuICAgICAgbGlzdC5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICBsaXN0Ll9fYWx0ZXJlZCA9IHRydWU7XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG4gICAgcmV0dXJuIG1ha2VMaXN0KG5ld09yaWdpbiwgbmV3Q2FwYWNpdHksIG5ld0xldmVsLCBuZXdSb290LCBuZXdUYWlsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlSW50b0xpc3RXaXRoKGxpc3QsIG1lcmdlciwgaXRlcmFibGVzKSB7XG4gICAgdmFyIGl0ZXJzID0gW107XG4gICAgdmFyIG1heFNpemUgPSAwO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBpdGVyYWJsZXMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICB2YXIgdmFsdWUgPSBpdGVyYWJsZXNbaWldO1xuICAgICAgdmFyIGl0ZXIgPSBJbmRleGVkSXRlcmFibGUodmFsdWUpO1xuICAgICAgaWYgKGl0ZXIuc2l6ZSA+IG1heFNpemUpIHtcbiAgICAgICAgbWF4U2l6ZSA9IGl0ZXIuc2l6ZTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNJdGVyYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgaXRlciA9IGl0ZXIubWFwKGZ1bmN0aW9uKHYgKSB7cmV0dXJuIGZyb21KUyh2KX0pO1xuICAgICAgfVxuICAgICAgaXRlcnMucHVzaChpdGVyKTtcbiAgICB9XG4gICAgaWYgKG1heFNpemUgPiBsaXN0LnNpemUpIHtcbiAgICAgIGxpc3QgPSBsaXN0LnNldFNpemUobWF4U2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBtZXJnZUludG9Db2xsZWN0aW9uV2l0aChsaXN0LCBtZXJnZXIsIGl0ZXJzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRhaWxPZmZzZXQoc2l6ZSkge1xuICAgIHJldHVybiBzaXplIDwgU0laRSA/IDAgOiAoKChzaXplIC0gMSkgPj4+IFNISUZUKSA8PCBTSElGVCk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhPcmRlcmVkTWFwLCBNYXApO1xuXG4gICAgLy8gQHByYWdtYSBDb25zdHJ1Y3Rpb25cblxuICAgIGZ1bmN0aW9uIE9yZGVyZWRNYXAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZW1wdHlPcmRlcmVkTWFwKCkgOlxuICAgICAgICBpc09yZGVyZWRNYXAodmFsdWUpID8gdmFsdWUgOlxuICAgICAgICBlbXB0eU9yZGVyZWRNYXAoKS53aXRoTXV0YXRpb25zKGZ1bmN0aW9uKG1hcCApIHtcbiAgICAgICAgICB2YXIgaXRlciA9IEtleWVkSXRlcmFibGUodmFsdWUpO1xuICAgICAgICAgIGFzc2VydE5vdEluZmluaXRlKGl0ZXIuc2l6ZSk7XG4gICAgICAgICAgaXRlci5mb3JFYWNoKGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIG1hcC5zZXQoaywgdil9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgT3JkZXJlZE1hcC5vZiA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIHJldHVybiB0aGlzKGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIE9yZGVyZWRNYXAucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKCdPcmRlcmVkTWFwIHsnLCAnfScpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIEFjY2Vzc1xuXG4gICAgT3JkZXJlZE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oaywgbm90U2V0VmFsdWUpIHtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuX21hcC5nZXQoayk7XG4gICAgICByZXR1cm4gaW5kZXggIT09IHVuZGVmaW5lZCA/IHRoaXMuX2xpc3QuZ2V0KGluZGV4KVsxXSA6IG5vdFNldFZhbHVlO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIE1vZGlmaWNhdGlvblxuXG4gICAgT3JkZXJlZE1hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgICAgdGhpcy5fbWFwLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX2xpc3QuY2xlYXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlPcmRlcmVkTWFwKCk7XG4gICAgfTtcblxuICAgIE9yZGVyZWRNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKGssIHYpIHtcbiAgICAgIHJldHVybiB1cGRhdGVPcmRlcmVkTWFwKHRoaXMsIGssIHYpO1xuICAgIH07XG5cbiAgICBPcmRlcmVkTWFwLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gdXBkYXRlT3JkZXJlZE1hcCh0aGlzLCBrLCBOT1RfU0VUKTtcbiAgICB9O1xuXG4gICAgT3JkZXJlZE1hcC5wcm90b3R5cGUud2FzQWx0ZXJlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX21hcC53YXNBbHRlcmVkKCkgfHwgdGhpcy5fbGlzdC53YXNBbHRlcmVkKCk7XG4gICAgfTtcblxuICAgIE9yZGVyZWRNYXAucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy5fbGlzdC5fX2l0ZXJhdGUoXG4gICAgICAgIGZ1bmN0aW9uKGVudHJ5ICkge3JldHVybiBlbnRyeSAmJiBmbihlbnRyeVsxXSwgZW50cnlbMF0sIHRoaXMkMCl9LFxuICAgICAgICByZXZlcnNlXG4gICAgICApO1xuICAgIH07XG5cbiAgICBPcmRlcmVkTWFwLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xpc3QuZnJvbUVudHJ5U2VxKCkuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICB9O1xuXG4gICAgT3JkZXJlZE1hcC5wcm90b3R5cGUuX19lbnN1cmVPd25lciA9IGZ1bmN0aW9uKG93bmVySUQpIHtcbiAgICAgIGlmIChvd25lcklEID09PSB0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBuZXdNYXAgPSB0aGlzLl9tYXAuX19lbnN1cmVPd25lcihvd25lcklEKTtcbiAgICAgIHZhciBuZXdMaXN0ID0gdGhpcy5fbGlzdC5fX2Vuc3VyZU93bmVyKG93bmVySUQpO1xuICAgICAgaWYgKCFvd25lcklEKSB7XG4gICAgICAgIHRoaXMuX19vd25lcklEID0gb3duZXJJRDtcbiAgICAgICAgdGhpcy5fbWFwID0gbmV3TWFwO1xuICAgICAgICB0aGlzLl9saXN0ID0gbmV3TGlzdDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZU9yZGVyZWRNYXAobmV3TWFwLCBuZXdMaXN0LCBvd25lcklELCB0aGlzLl9faGFzaCk7XG4gICAgfTtcblxuXG4gIGZ1bmN0aW9uIGlzT3JkZXJlZE1hcChtYXliZU9yZGVyZWRNYXApIHtcbiAgICByZXR1cm4gaXNNYXAobWF5YmVPcmRlcmVkTWFwKSAmJiBpc09yZGVyZWQobWF5YmVPcmRlcmVkTWFwKTtcbiAgfVxuXG4gIE9yZGVyZWRNYXAuaXNPcmRlcmVkTWFwID0gaXNPcmRlcmVkTWFwO1xuXG4gIE9yZGVyZWRNYXAucHJvdG90eXBlW0lTX09SREVSRURfU0VOVElORUxdID0gdHJ1ZTtcbiAgT3JkZXJlZE1hcC5wcm90b3R5cGVbREVMRVRFXSA9IE9yZGVyZWRNYXAucHJvdG90eXBlLnJlbW92ZTtcblxuXG5cbiAgZnVuY3Rpb24gbWFrZU9yZGVyZWRNYXAobWFwLCBsaXN0LCBvd25lcklELCBoYXNoKSB7XG4gICAgdmFyIG9tYXAgPSBPYmplY3QuY3JlYXRlKE9yZGVyZWRNYXAucHJvdG90eXBlKTtcbiAgICBvbWFwLnNpemUgPSBtYXAgPyBtYXAuc2l6ZSA6IDA7XG4gICAgb21hcC5fbWFwID0gbWFwO1xuICAgIG9tYXAuX2xpc3QgPSBsaXN0O1xuICAgIG9tYXAuX19vd25lcklEID0gb3duZXJJRDtcbiAgICBvbWFwLl9faGFzaCA9IGhhc2g7XG4gICAgcmV0dXJuIG9tYXA7XG4gIH1cblxuICB2YXIgRU1QVFlfT1JERVJFRF9NQVA7XG4gIGZ1bmN0aW9uIGVtcHR5T3JkZXJlZE1hcCgpIHtcbiAgICByZXR1cm4gRU1QVFlfT1JERVJFRF9NQVAgfHwgKEVNUFRZX09SREVSRURfTUFQID0gbWFrZU9yZGVyZWRNYXAoZW1wdHlNYXAoKSwgZW1wdHlMaXN0KCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU9yZGVyZWRNYXAob21hcCwgaywgdikge1xuICAgIHZhciBtYXAgPSBvbWFwLl9tYXA7XG4gICAgdmFyIGxpc3QgPSBvbWFwLl9saXN0O1xuICAgIHZhciBpID0gbWFwLmdldChrKTtcbiAgICB2YXIgaGFzID0gaSAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBuZXdNYXA7XG4gICAgdmFyIG5ld0xpc3Q7XG4gICAgaWYgKHYgPT09IE5PVF9TRVQpIHsgLy8gcmVtb3ZlZFxuICAgICAgaWYgKCFoYXMpIHtcbiAgICAgICAgcmV0dXJuIG9tYXA7XG4gICAgICB9XG4gICAgICBpZiAobGlzdC5zaXplID49IFNJWkUgJiYgbGlzdC5zaXplID49IG1hcC5zaXplICogMikge1xuICAgICAgICBuZXdMaXN0ID0gbGlzdC5maWx0ZXIoZnVuY3Rpb24oZW50cnksIGlkeCkgIHtyZXR1cm4gZW50cnkgIT09IHVuZGVmaW5lZCAmJiBpICE9PSBpZHh9KTtcbiAgICAgICAgbmV3TWFwID0gbmV3TGlzdC50b0tleWVkU2VxKCkubWFwKGZ1bmN0aW9uKGVudHJ5ICkge3JldHVybiBlbnRyeVswXX0pLmZsaXAoKS50b01hcCgpO1xuICAgICAgICBpZiAob21hcC5fX293bmVySUQpIHtcbiAgICAgICAgICBuZXdNYXAuX19vd25lcklEID0gbmV3TGlzdC5fX293bmVySUQgPSBvbWFwLl9fb3duZXJJRDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3TWFwID0gbWFwLnJlbW92ZShrKTtcbiAgICAgICAgbmV3TGlzdCA9IGkgPT09IGxpc3Quc2l6ZSAtIDEgPyBsaXN0LnBvcCgpIDogbGlzdC5zZXQoaSwgdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcykge1xuICAgICAgICBpZiAodiA9PT0gbGlzdC5nZXQoaSlbMV0pIHtcbiAgICAgICAgICByZXR1cm4gb21hcDtcbiAgICAgICAgfVxuICAgICAgICBuZXdNYXAgPSBtYXA7XG4gICAgICAgIG5ld0xpc3QgPSBsaXN0LnNldChpLCBbaywgdl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3TWFwID0gbWFwLnNldChrLCBsaXN0LnNpemUpO1xuICAgICAgICBuZXdMaXN0ID0gbGlzdC5zZXQobGlzdC5zaXplLCBbaywgdl0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob21hcC5fX293bmVySUQpIHtcbiAgICAgIG9tYXAuc2l6ZSA9IG5ld01hcC5zaXplO1xuICAgICAgb21hcC5fbWFwID0gbmV3TWFwO1xuICAgICAgb21hcC5fbGlzdCA9IG5ld0xpc3Q7XG4gICAgICBvbWFwLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiBvbWFwO1xuICAgIH1cbiAgICByZXR1cm4gbWFrZU9yZGVyZWRNYXAobmV3TWFwLCBuZXdMaXN0KTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFRvS2V5ZWRTZXF1ZW5jZSwgS2V5ZWRTZXEpO1xuICAgIGZ1bmN0aW9uIFRvS2V5ZWRTZXF1ZW5jZShpbmRleGVkLCB1c2VLZXlzKSB7XG4gICAgICB0aGlzLl9pdGVyID0gaW5kZXhlZDtcbiAgICAgIHRoaXMuX3VzZUtleXMgPSB1c2VLZXlzO1xuICAgICAgdGhpcy5zaXplID0gaW5kZXhlZC5zaXplO1xuICAgIH1cblxuICAgIFRvS2V5ZWRTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oa2V5LCBub3RTZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZXIuZ2V0KGtleSwgbm90U2V0VmFsdWUpO1xuICAgIH07XG5cbiAgICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZXIuaGFzKGtleSk7XG4gICAgfTtcblxuICAgIFRvS2V5ZWRTZXF1ZW5jZS5wcm90b3R5cGUudmFsdWVTZXEgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyLnZhbHVlU2VxKCk7XG4gICAgfTtcblxuICAgIFRvS2V5ZWRTZXF1ZW5jZS5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uKCkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgdmFyIHJldmVyc2VkU2VxdWVuY2UgPSByZXZlcnNlRmFjdG9yeSh0aGlzLCB0cnVlKTtcbiAgICAgIGlmICghdGhpcy5fdXNlS2V5cykge1xuICAgICAgICByZXZlcnNlZFNlcXVlbmNlLnZhbHVlU2VxID0gZnVuY3Rpb24oKSAge3JldHVybiB0aGlzJDAuX2l0ZXIudG9TZXEoKS5yZXZlcnNlKCl9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldmVyc2VkU2VxdWVuY2U7XG4gICAgfTtcblxuICAgIFRvS2V5ZWRTZXF1ZW5jZS5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24obWFwcGVyLCBjb250ZXh0KSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICB2YXIgbWFwcGVkU2VxdWVuY2UgPSBtYXBGYWN0b3J5KHRoaXMsIG1hcHBlciwgY29udGV4dCk7XG4gICAgICBpZiAoIXRoaXMuX3VzZUtleXMpIHtcbiAgICAgICAgbWFwcGVkU2VxdWVuY2UudmFsdWVTZXEgPSBmdW5jdGlvbigpICB7cmV0dXJuIHRoaXMkMC5faXRlci50b1NlcSgpLm1hcChtYXBwZXIsIGNvbnRleHQpfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXBwZWRTZXF1ZW5jZTtcbiAgICB9O1xuXG4gICAgVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgdmFyIGlpO1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZXIuX19pdGVyYXRlKFxuICAgICAgICB0aGlzLl91c2VLZXlzID9cbiAgICAgICAgICBmdW5jdGlvbih2LCBrKSAge3JldHVybiBmbih2LCBrLCB0aGlzJDApfSA6XG4gICAgICAgICAgKChpaSA9IHJldmVyc2UgPyByZXNvbHZlU2l6ZSh0aGlzKSA6IDApLFxuICAgICAgICAgICAgZnVuY3Rpb24odiApIHtyZXR1cm4gZm4odiwgcmV2ZXJzZSA/IC0taWkgOiBpaSsrLCB0aGlzJDApfSksXG4gICAgICAgIHJldmVyc2VcbiAgICAgICk7XG4gICAgfTtcblxuICAgIFRvS2V5ZWRTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIGlmICh0aGlzLl91c2VLZXlzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVyLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLl9pdGVyLl9faXRlcmF0b3IoSVRFUkFURV9WQUxVRVMsIHJldmVyc2UpO1xuICAgICAgdmFyIGlpID0gcmV2ZXJzZSA/IHJlc29sdmVTaXplKHRoaXMpIDogMDtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIHN0ZXAuZG9uZSA/IHN0ZXAgOlxuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwgcmV2ZXJzZSA/IC0taWkgOiBpaSsrLCBzdGVwLnZhbHVlLCBzdGVwKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZVtJU19PUkRFUkVEX1NFTlRJTkVMXSA9IHRydWU7XG5cblxuICBjcmVhdGVDbGFzcyhUb0luZGV4ZWRTZXF1ZW5jZSwgSW5kZXhlZFNlcSk7XG4gICAgZnVuY3Rpb24gVG9JbmRleGVkU2VxdWVuY2UoaXRlcikge1xuICAgICAgdGhpcy5faXRlciA9IGl0ZXI7XG4gICAgICB0aGlzLnNpemUgPSBpdGVyLnNpemU7XG4gICAgfVxuXG4gICAgVG9JbmRleGVkU2VxdWVuY2UucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyLmluY2x1ZGVzKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgVG9JbmRleGVkU2VxdWVuY2UucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICByZXR1cm4gdGhpcy5faXRlci5fX2l0ZXJhdGUoZnVuY3Rpb24odiApIHtyZXR1cm4gZm4odiwgaXRlcmF0aW9ucysrLCB0aGlzJDApfSwgcmV2ZXJzZSk7XG4gICAgfTtcblxuICAgIFRvSW5kZXhlZFNlcXVlbmNlLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5faXRlci5fX2l0ZXJhdG9yKElURVJBVEVfVkFMVUVTLCByZXZlcnNlKTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIHN0ZXAuZG9uZSA/IHN0ZXAgOlxuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwgaXRlcmF0aW9ucysrLCBzdGVwLnZhbHVlLCBzdGVwKVxuICAgICAgfSk7XG4gICAgfTtcblxuXG5cbiAgY3JlYXRlQ2xhc3MoVG9TZXRTZXF1ZW5jZSwgU2V0U2VxKTtcbiAgICBmdW5jdGlvbiBUb1NldFNlcXVlbmNlKGl0ZXIpIHtcbiAgICAgIHRoaXMuX2l0ZXIgPSBpdGVyO1xuICAgICAgdGhpcy5zaXplID0gaXRlci5zaXplO1xuICAgIH1cblxuICAgIFRvU2V0U2VxdWVuY2UucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZXIuaW5jbHVkZXMoa2V5KTtcbiAgICB9O1xuXG4gICAgVG9TZXRTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyLl9faXRlcmF0ZShmdW5jdGlvbih2ICkge3JldHVybiBmbih2LCB2LCB0aGlzJDApfSwgcmV2ZXJzZSk7XG4gICAgfTtcblxuICAgIFRvU2V0U2VxdWVuY2UucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLl9pdGVyLl9faXRlcmF0b3IoSVRFUkFURV9WQUxVRVMsIHJldmVyc2UpO1xuICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICByZXR1cm4gc3RlcC5kb25lID8gc3RlcCA6XG4gICAgICAgICAgaXRlcmF0b3JWYWx1ZSh0eXBlLCBzdGVwLnZhbHVlLCBzdGVwLnZhbHVlLCBzdGVwKTtcbiAgICAgIH0pO1xuICAgIH07XG5cblxuXG4gIGNyZWF0ZUNsYXNzKEZyb21FbnRyaWVzU2VxdWVuY2UsIEtleWVkU2VxKTtcbiAgICBmdW5jdGlvbiBGcm9tRW50cmllc1NlcXVlbmNlKGVudHJpZXMpIHtcbiAgICAgIHRoaXMuX2l0ZXIgPSBlbnRyaWVzO1xuICAgICAgdGhpcy5zaXplID0gZW50cmllcy5zaXplO1xuICAgIH1cblxuICAgIEZyb21FbnRyaWVzU2VxdWVuY2UucHJvdG90eXBlLmVudHJ5U2VxID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlci50b1NlcSgpO1xuICAgIH07XG5cbiAgICBGcm9tRW50cmllc1NlcXVlbmNlLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZXIuX19pdGVyYXRlKGZ1bmN0aW9uKGVudHJ5ICkge1xuICAgICAgICAvLyBDaGVjayBpZiBlbnRyeSBleGlzdHMgZmlyc3Qgc28gYXJyYXkgYWNjZXNzIGRvZXNuJ3QgdGhyb3cgZm9yIGhvbGVzXG4gICAgICAgIC8vIGluIHRoZSBwYXJlbnQgaXRlcmF0aW9uLlxuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB2YXIgaW5kZXhlZEl0ZXJhYmxlID0gaXNJdGVyYWJsZShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIGZuKFxuICAgICAgICAgICAgaW5kZXhlZEl0ZXJhYmxlID8gZW50cnkuZ2V0KDEpIDogZW50cnlbMV0sXG4gICAgICAgICAgICBpbmRleGVkSXRlcmFibGUgPyBlbnRyeS5nZXQoMCkgOiBlbnRyeVswXSxcbiAgICAgICAgICAgIHRoaXMkMFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sIHJldmVyc2UpO1xuICAgIH07XG5cbiAgICBGcm9tRW50cmllc1NlcXVlbmNlLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5faXRlci5fX2l0ZXJhdG9yKElURVJBVEVfVkFMVUVTLCByZXZlcnNlKTtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChzdGVwLmRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgIC8vIENoZWNrIGlmIGVudHJ5IGV4aXN0cyBmaXJzdCBzbyBhcnJheSBhY2Nlc3MgZG9lc24ndCB0aHJvdyBmb3IgaG9sZXNcbiAgICAgICAgICAvLyBpbiB0aGUgcGFyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRW50cnkoZW50cnkpO1xuICAgICAgICAgICAgdmFyIGluZGV4ZWRJdGVyYWJsZSA9IGlzSXRlcmFibGUoZW50cnkpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUoXG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgIGluZGV4ZWRJdGVyYWJsZSA/IGVudHJ5LmdldCgwKSA6IGVudHJ5WzBdLFxuICAgICAgICAgICAgICBpbmRleGVkSXRlcmFibGUgPyBlbnRyeS5nZXQoMSkgOiBlbnRyeVsxXSxcbiAgICAgICAgICAgICAgc3RlcFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cblxuICBUb0luZGV4ZWRTZXF1ZW5jZS5wcm90b3R5cGUuY2FjaGVSZXN1bHQgPVxuICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLmNhY2hlUmVzdWx0ID1cbiAgVG9TZXRTZXF1ZW5jZS5wcm90b3R5cGUuY2FjaGVSZXN1bHQgPVxuICBGcm9tRW50cmllc1NlcXVlbmNlLnByb3RvdHlwZS5jYWNoZVJlc3VsdCA9XG4gICAgY2FjaGVSZXN1bHRUaHJvdWdoO1xuXG5cbiAgZnVuY3Rpb24gZmxpcEZhY3RvcnkoaXRlcmFibGUpIHtcbiAgICB2YXIgZmxpcFNlcXVlbmNlID0gbWFrZVNlcXVlbmNlKGl0ZXJhYmxlKTtcbiAgICBmbGlwU2VxdWVuY2UuX2l0ZXIgPSBpdGVyYWJsZTtcbiAgICBmbGlwU2VxdWVuY2Uuc2l6ZSA9IGl0ZXJhYmxlLnNpemU7XG4gICAgZmxpcFNlcXVlbmNlLmZsaXAgPSBmdW5jdGlvbigpICB7cmV0dXJuIGl0ZXJhYmxlfTtcbiAgICBmbGlwU2VxdWVuY2UucmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZXZlcnNlZFNlcXVlbmNlID0gaXRlcmFibGUucmV2ZXJzZS5hcHBseSh0aGlzKTsgLy8gc3VwZXIucmV2ZXJzZSgpXG4gICAgICByZXZlcnNlZFNlcXVlbmNlLmZsaXAgPSBmdW5jdGlvbigpICB7cmV0dXJuIGl0ZXJhYmxlLnJldmVyc2UoKX07XG4gICAgICByZXR1cm4gcmV2ZXJzZWRTZXF1ZW5jZTtcbiAgICB9O1xuICAgIGZsaXBTZXF1ZW5jZS5oYXMgPSBmdW5jdGlvbihrZXkgKSB7cmV0dXJuIGl0ZXJhYmxlLmluY2x1ZGVzKGtleSl9O1xuICAgIGZsaXBTZXF1ZW5jZS5pbmNsdWRlcyA9IGZ1bmN0aW9uKGtleSApIHtyZXR1cm4gaXRlcmFibGUuaGFzKGtleSl9O1xuICAgIGZsaXBTZXF1ZW5jZS5jYWNoZVJlc3VsdCA9IGNhY2hlUmVzdWx0VGhyb3VnaDtcbiAgICBmbGlwU2VxdWVuY2UuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbiAoZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiBpdGVyYWJsZS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaykgIHtyZXR1cm4gZm4oaywgdiwgdGhpcyQwKSAhPT0gZmFsc2V9LCByZXZlcnNlKTtcbiAgICB9XG4gICAgZmxpcFNlcXVlbmNlLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIGlmICh0eXBlID09PSBJVEVSQVRFX0VOVFJJRVMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmFibGUuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKCFzdGVwLmRvbmUpIHtcbiAgICAgICAgICAgIHZhciBrID0gc3RlcC52YWx1ZVswXTtcbiAgICAgICAgICAgIHN0ZXAudmFsdWVbMF0gPSBzdGVwLnZhbHVlWzFdO1xuICAgICAgICAgICAgc3RlcC52YWx1ZVsxXSA9IGs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYWJsZS5fX2l0ZXJhdG9yKFxuICAgICAgICB0eXBlID09PSBJVEVSQVRFX1ZBTFVFUyA/IElURVJBVEVfS0VZUyA6IElURVJBVEVfVkFMVUVTLFxuICAgICAgICByZXZlcnNlXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZmxpcFNlcXVlbmNlO1xuICB9XG5cblxuICBmdW5jdGlvbiBtYXBGYWN0b3J5KGl0ZXJhYmxlLCBtYXBwZXIsIGNvbnRleHQpIHtcbiAgICB2YXIgbWFwcGVkU2VxdWVuY2UgPSBtYWtlU2VxdWVuY2UoaXRlcmFibGUpO1xuICAgIG1hcHBlZFNlcXVlbmNlLnNpemUgPSBpdGVyYWJsZS5zaXplO1xuICAgIG1hcHBlZFNlcXVlbmNlLmhhcyA9IGZ1bmN0aW9uKGtleSApIHtyZXR1cm4gaXRlcmFibGUuaGFzKGtleSl9O1xuICAgIG1hcHBlZFNlcXVlbmNlLmdldCA9IGZ1bmN0aW9uKGtleSwgbm90U2V0VmFsdWUpICB7XG4gICAgICB2YXIgdiA9IGl0ZXJhYmxlLmdldChrZXksIE5PVF9TRVQpO1xuICAgICAgcmV0dXJuIHYgPT09IE5PVF9TRVQgP1xuICAgICAgICBub3RTZXRWYWx1ZSA6XG4gICAgICAgIG1hcHBlci5jYWxsKGNvbnRleHQsIHYsIGtleSwgaXRlcmFibGUpO1xuICAgIH07XG4gICAgbWFwcGVkU2VxdWVuY2UuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbiAoZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiBpdGVyYWJsZS5fX2l0ZXJhdGUoXG4gICAgICAgIGZ1bmN0aW9uKHYsIGssIGMpICB7cmV0dXJuIGZuKG1hcHBlci5jYWxsKGNvbnRleHQsIHYsIGssIGMpLCBrLCB0aGlzJDApICE9PSBmYWxzZX0sXG4gICAgICAgIHJldmVyc2VcbiAgICAgICk7XG4gICAgfVxuICAgIG1hcHBlZFNlcXVlbmNlLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uICh0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYWJsZS5fX2l0ZXJhdG9yKElURVJBVEVfRU5UUklFUywgcmV2ZXJzZSk7XG4gICAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmIChzdGVwLmRvbmUpIHtcbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICB2YXIga2V5ID0gZW50cnlbMF07XG4gICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIG1hcHBlci5jYWxsKGNvbnRleHQsIGVudHJ5WzFdLCBrZXksIGl0ZXJhYmxlKSxcbiAgICAgICAgICBzdGVwXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcHBlZFNlcXVlbmNlO1xuICB9XG5cblxuICBmdW5jdGlvbiByZXZlcnNlRmFjdG9yeShpdGVyYWJsZSwgdXNlS2V5cykge1xuICAgIHZhciByZXZlcnNlZFNlcXVlbmNlID0gbWFrZVNlcXVlbmNlKGl0ZXJhYmxlKTtcbiAgICByZXZlcnNlZFNlcXVlbmNlLl9pdGVyID0gaXRlcmFibGU7XG4gICAgcmV2ZXJzZWRTZXF1ZW5jZS5zaXplID0gaXRlcmFibGUuc2l6ZTtcbiAgICByZXZlcnNlZFNlcXVlbmNlLnJldmVyc2UgPSBmdW5jdGlvbigpICB7cmV0dXJuIGl0ZXJhYmxlfTtcbiAgICBpZiAoaXRlcmFibGUuZmxpcCkge1xuICAgICAgcmV2ZXJzZWRTZXF1ZW5jZS5mbGlwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZmxpcFNlcXVlbmNlID0gZmxpcEZhY3RvcnkoaXRlcmFibGUpO1xuICAgICAgICBmbGlwU2VxdWVuY2UucmV2ZXJzZSA9IGZ1bmN0aW9uKCkgIHtyZXR1cm4gaXRlcmFibGUuZmxpcCgpfTtcbiAgICAgICAgcmV0dXJuIGZsaXBTZXF1ZW5jZTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldmVyc2VkU2VxdWVuY2UuZ2V0ID0gZnVuY3Rpb24oa2V5LCBub3RTZXRWYWx1ZSkgXG4gICAgICB7cmV0dXJuIGl0ZXJhYmxlLmdldCh1c2VLZXlzID8ga2V5IDogLTEgLSBrZXksIG5vdFNldFZhbHVlKX07XG4gICAgcmV2ZXJzZWRTZXF1ZW5jZS5oYXMgPSBmdW5jdGlvbihrZXkgKVxuICAgICAge3JldHVybiBpdGVyYWJsZS5oYXModXNlS2V5cyA/IGtleSA6IC0xIC0ga2V5KX07XG4gICAgcmV2ZXJzZWRTZXF1ZW5jZS5pbmNsdWRlcyA9IGZ1bmN0aW9uKHZhbHVlICkge3JldHVybiBpdGVyYWJsZS5pbmNsdWRlcyh2YWx1ZSl9O1xuICAgIHJldmVyc2VkU2VxdWVuY2UuY2FjaGVSZXN1bHQgPSBjYWNoZVJlc3VsdFRocm91Z2g7XG4gICAgcmV2ZXJzZWRTZXF1ZW5jZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbiAoZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiBpdGVyYWJsZS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaykgIHtyZXR1cm4gZm4odiwgaywgdGhpcyQwKX0sICFyZXZlcnNlKTtcbiAgICB9O1xuICAgIHJldmVyc2VkU2VxdWVuY2UuX19pdGVyYXRvciA9XG4gICAgICBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSAge3JldHVybiBpdGVyYWJsZS5fX2l0ZXJhdG9yKHR5cGUsICFyZXZlcnNlKX07XG4gICAgcmV0dXJuIHJldmVyc2VkU2VxdWVuY2U7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGZpbHRlckZhY3RvcnkoaXRlcmFibGUsIHByZWRpY2F0ZSwgY29udGV4dCwgdXNlS2V5cykge1xuICAgIHZhciBmaWx0ZXJTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShpdGVyYWJsZSk7XG4gICAgaWYgKHVzZUtleXMpIHtcbiAgICAgIGZpbHRlclNlcXVlbmNlLmhhcyA9IGZ1bmN0aW9uKGtleSApIHtcbiAgICAgICAgdmFyIHYgPSBpdGVyYWJsZS5nZXQoa2V5LCBOT1RfU0VUKTtcbiAgICAgICAgcmV0dXJuIHYgIT09IE5PVF9TRVQgJiYgISFwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2LCBrZXksIGl0ZXJhYmxlKTtcbiAgICAgIH07XG4gICAgICBmaWx0ZXJTZXF1ZW5jZS5nZXQgPSBmdW5jdGlvbihrZXksIG5vdFNldFZhbHVlKSAge1xuICAgICAgICB2YXIgdiA9IGl0ZXJhYmxlLmdldChrZXksIE5PVF9TRVQpO1xuICAgICAgICByZXR1cm4gdiAhPT0gTk9UX1NFVCAmJiBwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2LCBrZXksIGl0ZXJhYmxlKSA/XG4gICAgICAgICAgdiA6IG5vdFNldFZhbHVlO1xuICAgICAgfTtcbiAgICB9XG4gICAgZmlsdGVyU2VxdWVuY2UuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbiAoZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIGl0ZXJhYmxlLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrLCBjKSAge1xuICAgICAgICBpZiAocHJlZGljYXRlLmNhbGwoY29udGV4dCwgdiwgaywgYykpIHtcbiAgICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgICAgcmV0dXJuIGZuKHYsIHVzZUtleXMgPyBrIDogaXRlcmF0aW9ucyAtIDEsIHRoaXMkMCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHJldmVyc2UpO1xuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcbiAgICBmaWx0ZXJTZXF1ZW5jZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbiAodHlwZSwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmFibGUuX19pdGVyYXRvcihJVEVSQVRFX0VOVFJJRVMsIHJldmVyc2UpO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKHN0ZXAuZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgdmFyIGtleSA9IGVudHJ5WzBdO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGVudHJ5WzFdO1xuICAgICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2YWx1ZSwga2V5LCBpdGVyYWJsZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIHVzZUtleXMgPyBrZXkgOiBpdGVyYXRpb25zKyssIHZhbHVlLCBzdGVwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyU2VxdWVuY2U7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGNvdW50QnlGYWN0b3J5KGl0ZXJhYmxlLCBncm91cGVyLCBjb250ZXh0KSB7XG4gICAgdmFyIGdyb3VwcyA9IE1hcCgpLmFzTXV0YWJsZSgpO1xuICAgIGl0ZXJhYmxlLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrKSAge1xuICAgICAgZ3JvdXBzLnVwZGF0ZShcbiAgICAgICAgZ3JvdXBlci5jYWxsKGNvbnRleHQsIHYsIGssIGl0ZXJhYmxlKSxcbiAgICAgICAgMCxcbiAgICAgICAgZnVuY3Rpb24oYSApIHtyZXR1cm4gYSArIDF9XG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiBncm91cHMuYXNJbW11dGFibGUoKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gZ3JvdXBCeUZhY3RvcnkoaXRlcmFibGUsIGdyb3VwZXIsIGNvbnRleHQpIHtcbiAgICB2YXIgaXNLZXllZEl0ZXIgPSBpc0tleWVkKGl0ZXJhYmxlKTtcbiAgICB2YXIgZ3JvdXBzID0gKGlzT3JkZXJlZChpdGVyYWJsZSkgPyBPcmRlcmVkTWFwKCkgOiBNYXAoKSkuYXNNdXRhYmxlKCk7XG4gICAgaXRlcmFibGUuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGspICB7XG4gICAgICBncm91cHMudXBkYXRlKFxuICAgICAgICBncm91cGVyLmNhbGwoY29udGV4dCwgdiwgaywgaXRlcmFibGUpLFxuICAgICAgICBmdW5jdGlvbihhICkge3JldHVybiAoYSA9IGEgfHwgW10sIGEucHVzaChpc0tleWVkSXRlciA/IFtrLCB2XSA6IHYpLCBhKX1cbiAgICAgICk7XG4gICAgfSk7XG4gICAgdmFyIGNvZXJjZSA9IGl0ZXJhYmxlQ2xhc3MoaXRlcmFibGUpO1xuICAgIHJldHVybiBncm91cHMubWFwKGZ1bmN0aW9uKGFyciApIHtyZXR1cm4gcmVpZnkoaXRlcmFibGUsIGNvZXJjZShhcnIpKX0pO1xuICB9XG5cblxuICBmdW5jdGlvbiBzbGljZUZhY3RvcnkoaXRlcmFibGUsIGJlZ2luLCBlbmQsIHVzZUtleXMpIHtcbiAgICB2YXIgb3JpZ2luYWxTaXplID0gaXRlcmFibGUuc2l6ZTtcblxuICAgIC8vIFNhbml0aXplIGJlZ2luICYgZW5kIHVzaW5nIHRoaXMgc2hvcnRoYW5kIGZvciBUb0ludDMyKGFyZ3VtZW50KVxuICAgIC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2ludDMyXG4gICAgaWYgKGJlZ2luICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGJlZ2luID0gYmVnaW4gfCAwO1xuICAgIH1cbiAgICBpZiAoZW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChlbmQgPT09IEluZmluaXR5KSB7XG4gICAgICAgIGVuZCA9IG9yaWdpbmFsU2l6ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZCA9IGVuZCB8IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHdob2xlU2xpY2UoYmVnaW4sIGVuZCwgb3JpZ2luYWxTaXplKSkge1xuICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgIH1cblxuICAgIHZhciByZXNvbHZlZEJlZ2luID0gcmVzb2x2ZUJlZ2luKGJlZ2luLCBvcmlnaW5hbFNpemUpO1xuICAgIHZhciByZXNvbHZlZEVuZCA9IHJlc29sdmVFbmQoZW5kLCBvcmlnaW5hbFNpemUpO1xuXG4gICAgLy8gYmVnaW4gb3IgZW5kIHdpbGwgYmUgTmFOIGlmIHRoZXkgd2VyZSBwcm92aWRlZCBhcyBuZWdhdGl2ZSBudW1iZXJzIGFuZFxuICAgIC8vIHRoaXMgaXRlcmFibGUncyBzaXplIGlzIHVua25vd24uIEluIHRoYXQgY2FzZSwgY2FjaGUgZmlyc3Qgc28gdGhlcmUgaXNcbiAgICAvLyBhIGtub3duIHNpemUgYW5kIHRoZXNlIGRvIG5vdCByZXNvbHZlIHRvIE5hTi5cbiAgICBpZiAocmVzb2x2ZWRCZWdpbiAhPT0gcmVzb2x2ZWRCZWdpbiB8fCByZXNvbHZlZEVuZCAhPT0gcmVzb2x2ZWRFbmQpIHtcbiAgICAgIHJldHVybiBzbGljZUZhY3RvcnkoaXRlcmFibGUudG9TZXEoKS5jYWNoZVJlc3VsdCgpLCBiZWdpbiwgZW5kLCB1c2VLZXlzKTtcbiAgICB9XG5cbiAgICAvLyBOb3RlOiByZXNvbHZlZEVuZCBpcyB1bmRlZmluZWQgd2hlbiB0aGUgb3JpZ2luYWwgc2VxdWVuY2UncyBsZW5ndGggaXNcbiAgICAvLyB1bmtub3duIGFuZCB0aGlzIHNsaWNlIGRpZCBub3Qgc3VwcGx5IGFuIGVuZCBhbmQgc2hvdWxkIGNvbnRhaW4gYWxsXG4gICAgLy8gZWxlbWVudHMgYWZ0ZXIgcmVzb2x2ZWRCZWdpbi5cbiAgICAvLyBJbiB0aGF0IGNhc2UsIHJlc29sdmVkU2l6ZSB3aWxsIGJlIE5hTiBhbmQgc2xpY2VTaXplIHdpbGwgcmVtYWluIHVuZGVmaW5lZC5cbiAgICB2YXIgcmVzb2x2ZWRTaXplID0gcmVzb2x2ZWRFbmQgLSByZXNvbHZlZEJlZ2luO1xuICAgIHZhciBzbGljZVNpemU7XG4gICAgaWYgKHJlc29sdmVkU2l6ZSA9PT0gcmVzb2x2ZWRTaXplKSB7XG4gICAgICBzbGljZVNpemUgPSByZXNvbHZlZFNpemUgPCAwID8gMCA6IHJlc29sdmVkU2l6ZTtcbiAgICB9XG5cbiAgICB2YXIgc2xpY2VTZXEgPSBtYWtlU2VxdWVuY2UoaXRlcmFibGUpO1xuXG4gICAgLy8gSWYgaXRlcmFibGUuc2l6ZSBpcyB1bmRlZmluZWQsIHRoZSBzaXplIG9mIHRoZSByZWFsaXplZCBzbGljZVNlcSBpc1xuICAgIC8vIHVua25vd24gYXQgdGhpcyBwb2ludCB1bmxlc3MgdGhlIG51bWJlciBvZiBpdGVtcyB0byBzbGljZSBpcyAwXG4gICAgc2xpY2VTZXEuc2l6ZSA9IHNsaWNlU2l6ZSA9PT0gMCA/IHNsaWNlU2l6ZSA6IGl0ZXJhYmxlLnNpemUgJiYgc2xpY2VTaXplIHx8IHVuZGVmaW5lZDtcblxuICAgIGlmICghdXNlS2V5cyAmJiBpc1NlcShpdGVyYWJsZSkgJiYgc2xpY2VTaXplID49IDApIHtcbiAgICAgIHNsaWNlU2VxLmdldCA9IGZ1bmN0aW9uIChpbmRleCwgbm90U2V0VmFsdWUpIHtcbiAgICAgICAgaW5kZXggPSB3cmFwSW5kZXgodGhpcywgaW5kZXgpO1xuICAgICAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IHNsaWNlU2l6ZSA/XG4gICAgICAgICAgaXRlcmFibGUuZ2V0KGluZGV4ICsgcmVzb2x2ZWRCZWdpbiwgbm90U2V0VmFsdWUpIDpcbiAgICAgICAgICBub3RTZXRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzbGljZVNlcS5fX2l0ZXJhdGVVbmNhY2hlZCA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICBpZiAoc2xpY2VTaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdGUoZm4sIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIHNraXBwZWQgPSAwO1xuICAgICAgdmFyIGlzU2tpcHBpbmcgPSB0cnVlO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgaXRlcmFibGUuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGspICB7XG4gICAgICAgIGlmICghKGlzU2tpcHBpbmcgJiYgKGlzU2tpcHBpbmcgPSBza2lwcGVkKysgPCByZXNvbHZlZEJlZ2luKSkpIHtcbiAgICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgICAgcmV0dXJuIGZuKHYsIHVzZUtleXMgPyBrIDogaXRlcmF0aW9ucyAtIDEsIHRoaXMkMCkgIT09IGZhbHNlICYmXG4gICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnMgIT09IHNsaWNlU2l6ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICB9O1xuXG4gICAgc2xpY2VTZXEuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgICAgaWYgKHNsaWNlU2l6ZSAhPT0gMCAmJiByZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlUmVzdWx0KCkuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICAgIH1cbiAgICAgIC8vIERvbid0IGJvdGhlciBpbnN0YW50aWF0aW5nIHBhcmVudCBpdGVyYXRvciBpZiB0YWtpbmcgMC5cbiAgICAgIHZhciBpdGVyYXRvciA9IHNsaWNlU2l6ZSAhPT0gMCAmJiBpdGVyYWJsZS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgdmFyIHNraXBwZWQgPSAwO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIHdoaWxlIChza2lwcGVkKysgPCByZXNvbHZlZEJlZ2luKSB7XG4gICAgICAgICAgaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgrK2l0ZXJhdGlvbnMgPiBzbGljZVNpemUpIHtcbiAgICAgICAgICByZXR1cm4gaXRlcmF0b3JEb25lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmICh1c2VLZXlzIHx8IHR5cGUgPT09IElURVJBVEVfVkFMVUVTKSB7XG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gSVRFUkFURV9LRVlTKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUodHlwZSwgaXRlcmF0aW9ucyAtIDEsIHVuZGVmaW5lZCwgc3RlcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUodHlwZSwgaXRlcmF0aW9ucyAtIDEsIHN0ZXAudmFsdWVbMV0sIHN0ZXApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2xpY2VTZXE7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHRha2VXaGlsZUZhY3RvcnkoaXRlcmFibGUsIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciB0YWtlU2VxdWVuY2UgPSBtYWtlU2VxdWVuY2UoaXRlcmFibGUpO1xuICAgIHRha2VTZXF1ZW5jZS5fX2l0ZXJhdGVVbmNhY2hlZCA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0ZShmbiwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICBpdGVyYWJsZS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaywgYykgXG4gICAgICAgIHtyZXR1cm4gcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdiwgaywgYykgJiYgKytpdGVyYXRpb25zICYmIGZuKHYsIGssIHRoaXMkMCl9XG4gICAgICApO1xuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gICAgfTtcbiAgICB0YWtlU2VxdWVuY2UuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmFibGUuX19pdGVyYXRvcihJVEVSQVRFX0VOVFJJRVMsIHJldmVyc2UpO1xuICAgICAgdmFyIGl0ZXJhdGluZyA9IHRydWU7XG4gICAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgaWYgKCFpdGVyYXRpbmcpIHtcbiAgICAgICAgICByZXR1cm4gaXRlcmF0b3JEb25lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmIChzdGVwLmRvbmUpIHtcbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICB2YXIgayA9IGVudHJ5WzBdO1xuICAgICAgICB2YXIgdiA9IGVudHJ5WzFdO1xuICAgICAgICBpZiAoIXByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGssIHRoaXMkMCkpIHtcbiAgICAgICAgICBpdGVyYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gaXRlcmF0b3JEb25lKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGUgPT09IElURVJBVEVfRU5UUklFUyA/IHN0ZXAgOlxuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwgaywgdiwgc3RlcCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiB0YWtlU2VxdWVuY2U7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHNraXBXaGlsZUZhY3RvcnkoaXRlcmFibGUsIHByZWRpY2F0ZSwgY29udGV4dCwgdXNlS2V5cykge1xuICAgIHZhciBza2lwU2VxdWVuY2UgPSBtYWtlU2VxdWVuY2UoaXRlcmFibGUpO1xuICAgIHNraXBTZXF1ZW5jZS5fX2l0ZXJhdGVVbmNhY2hlZCA9IGZ1bmN0aW9uIChmbiwgcmV2ZXJzZSkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgaWYgKHJldmVyc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdGUoZm4sIHJldmVyc2UpO1xuICAgICAgfVxuICAgICAgdmFyIGlzU2tpcHBpbmcgPSB0cnVlO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgaXRlcmFibGUuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGssIGMpICB7XG4gICAgICAgIGlmICghKGlzU2tpcHBpbmcgJiYgKGlzU2tpcHBpbmcgPSBwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2LCBrLCBjKSkpKSB7XG4gICAgICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgICAgIHJldHVybiBmbih2LCB1c2VLZXlzID8gayA6IGl0ZXJhdGlvbnMgLSAxLCB0aGlzJDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpdGVyYXRpb25zO1xuICAgIH07XG4gICAgc2tpcFNlcXVlbmNlLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlUmVzdWx0KCkuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhYmxlLl9faXRlcmF0b3IoSVRFUkFURV9FTlRSSUVTLCByZXZlcnNlKTtcbiAgICAgIHZhciBza2lwcGluZyA9IHRydWU7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uKCkgIHtcbiAgICAgICAgdmFyIHN0ZXAsIGssIHY7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgIGlmIChzdGVwLmRvbmUpIHtcbiAgICAgICAgICAgIGlmICh1c2VLZXlzIHx8IHR5cGUgPT09IElURVJBVEVfVkFMVUVTKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBJVEVSQVRFX0tFWVMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUodHlwZSwgaXRlcmF0aW9ucysrLCB1bmRlZmluZWQsIHN0ZXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUodHlwZSwgaXRlcmF0aW9ucysrLCBzdGVwLnZhbHVlWzFdLCBzdGVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICBrID0gZW50cnlbMF07XG4gICAgICAgICAgdiA9IGVudHJ5WzFdO1xuICAgICAgICAgIHNraXBwaW5nICYmIChza2lwcGluZyA9IHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGssIHRoaXMkMCkpO1xuICAgICAgICB9IHdoaWxlIChza2lwcGluZyk7XG4gICAgICAgIHJldHVybiB0eXBlID09PSBJVEVSQVRFX0VOVFJJRVMgPyBzdGVwIDpcbiAgICAgICAgICBpdGVyYXRvclZhbHVlKHR5cGUsIGssIHYsIHN0ZXApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gc2tpcFNlcXVlbmNlO1xuICB9XG5cblxuICBmdW5jdGlvbiBjb25jYXRGYWN0b3J5KGl0ZXJhYmxlLCB2YWx1ZXMpIHtcbiAgICB2YXIgaXNLZXllZEl0ZXJhYmxlID0gaXNLZXllZChpdGVyYWJsZSk7XG4gICAgdmFyIGl0ZXJzID0gW2l0ZXJhYmxlXS5jb25jYXQodmFsdWVzKS5tYXAoZnVuY3Rpb24odiApIHtcbiAgICAgIGlmICghaXNJdGVyYWJsZSh2KSkge1xuICAgICAgICB2ID0gaXNLZXllZEl0ZXJhYmxlID9cbiAgICAgICAgICBrZXllZFNlcUZyb21WYWx1ZSh2KSA6XG4gICAgICAgICAgaW5kZXhlZFNlcUZyb21WYWx1ZShBcnJheS5pc0FycmF5KHYpID8gdiA6IFt2XSk7XG4gICAgICB9IGVsc2UgaWYgKGlzS2V5ZWRJdGVyYWJsZSkge1xuICAgICAgICB2ID0gS2V5ZWRJdGVyYWJsZSh2KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2O1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbih2ICkge3JldHVybiB2LnNpemUgIT09IDB9KTtcblxuICAgIGlmIChpdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICB9XG5cbiAgICBpZiAoaXRlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgc2luZ2xldG9uID0gaXRlcnNbMF07XG4gICAgICBpZiAoc2luZ2xldG9uID09PSBpdGVyYWJsZSB8fFxuICAgICAgICAgIGlzS2V5ZWRJdGVyYWJsZSAmJiBpc0tleWVkKHNpbmdsZXRvbikgfHxcbiAgICAgICAgICBpc0luZGV4ZWQoaXRlcmFibGUpICYmIGlzSW5kZXhlZChzaW5nbGV0b24pKSB7XG4gICAgICAgIHJldHVybiBzaW5nbGV0b247XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNvbmNhdFNlcSA9IG5ldyBBcnJheVNlcShpdGVycyk7XG4gICAgaWYgKGlzS2V5ZWRJdGVyYWJsZSkge1xuICAgICAgY29uY2F0U2VxID0gY29uY2F0U2VxLnRvS2V5ZWRTZXEoKTtcbiAgICB9IGVsc2UgaWYgKCFpc0luZGV4ZWQoaXRlcmFibGUpKSB7XG4gICAgICBjb25jYXRTZXEgPSBjb25jYXRTZXEudG9TZXRTZXEoKTtcbiAgICB9XG4gICAgY29uY2F0U2VxID0gY29uY2F0U2VxLmZsYXR0ZW4odHJ1ZSk7XG4gICAgY29uY2F0U2VxLnNpemUgPSBpdGVycy5yZWR1Y2UoXG4gICAgICBmdW5jdGlvbihzdW0sIHNlcSkgIHtcbiAgICAgICAgaWYgKHN1bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHNpemUgPSBzZXEuc2l6ZTtcbiAgICAgICAgICBpZiAoc2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VtICsgc2l6ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAwXG4gICAgKTtcbiAgICByZXR1cm4gY29uY2F0U2VxO1xuICB9XG5cblxuICBmdW5jdGlvbiBmbGF0dGVuRmFjdG9yeShpdGVyYWJsZSwgZGVwdGgsIHVzZUtleXMpIHtcbiAgICB2YXIgZmxhdFNlcXVlbmNlID0gbWFrZVNlcXVlbmNlKGl0ZXJhYmxlKTtcbiAgICBmbGF0U2VxdWVuY2UuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIHN0b3BwZWQgPSBmYWxzZTtcbiAgICAgIGZ1bmN0aW9uIGZsYXREZWVwKGl0ZXIsIGN1cnJlbnREZXB0aCkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgICBpdGVyLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrKSAge1xuICAgICAgICAgIGlmICgoIWRlcHRoIHx8IGN1cnJlbnREZXB0aCA8IGRlcHRoKSAmJiBpc0l0ZXJhYmxlKHYpKSB7XG4gICAgICAgICAgICBmbGF0RGVlcCh2LCBjdXJyZW50RGVwdGggKyAxKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZuKHYsIHVzZUtleXMgPyBrIDogaXRlcmF0aW9ucysrLCB0aGlzJDApID09PSBmYWxzZSkge1xuICAgICAgICAgICAgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAhc3RvcHBlZDtcbiAgICAgICAgfSwgcmV2ZXJzZSk7XG4gICAgICB9XG4gICAgICBmbGF0RGVlcChpdGVyYWJsZSwgMCk7XG4gICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICB9XG4gICAgZmxhdFNlcXVlbmNlLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhYmxlLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgICB2YXIgc3RhY2sgPSBbXTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB3aGlsZSAoaXRlcmF0b3IpIHtcbiAgICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICBpZiAoc3RlcC5kb25lICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgaXRlcmF0b3IgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgdiA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgaWYgKHR5cGUgPT09IElURVJBVEVfRU5UUklFUykge1xuICAgICAgICAgICAgdiA9IHZbMV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoIWRlcHRoIHx8IHN0YWNrLmxlbmd0aCA8IGRlcHRoKSAmJiBpc0l0ZXJhYmxlKHYpKSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGl0ZXJhdG9yKTtcbiAgICAgICAgICAgIGl0ZXJhdG9yID0gdi5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlS2V5cyA/IHN0ZXAgOiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgdiwgc3RlcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmxhdFNlcXVlbmNlO1xuICB9XG5cblxuICBmdW5jdGlvbiBmbGF0TWFwRmFjdG9yeShpdGVyYWJsZSwgbWFwcGVyLCBjb250ZXh0KSB7XG4gICAgdmFyIGNvZXJjZSA9IGl0ZXJhYmxlQ2xhc3MoaXRlcmFibGUpO1xuICAgIHJldHVybiBpdGVyYWJsZS50b1NlcSgpLm1hcChcbiAgICAgIGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIGNvZXJjZShtYXBwZXIuY2FsbChjb250ZXh0LCB2LCBrLCBpdGVyYWJsZSkpfVxuICAgICkuZmxhdHRlbih0cnVlKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gaW50ZXJwb3NlRmFjdG9yeShpdGVyYWJsZSwgc2VwYXJhdG9yKSB7XG4gICAgdmFyIGludGVycG9zZWRTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShpdGVyYWJsZSk7XG4gICAgaW50ZXJwb3NlZFNlcXVlbmNlLnNpemUgPSBpdGVyYWJsZS5zaXplICYmIGl0ZXJhYmxlLnNpemUgKiAyIC0xO1xuICAgIGludGVycG9zZWRTZXF1ZW5jZS5fX2l0ZXJhdGVVbmNhY2hlZCA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICBpdGVyYWJsZS5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaykgXG4gICAgICAgIHtyZXR1cm4gKCFpdGVyYXRpb25zIHx8IGZuKHNlcGFyYXRvciwgaXRlcmF0aW9ucysrLCB0aGlzJDApICE9PSBmYWxzZSkgJiZcbiAgICAgICAgZm4odiwgaXRlcmF0aW9ucysrLCB0aGlzJDApICE9PSBmYWxzZX0sXG4gICAgICAgIHJldmVyc2VcbiAgICAgICk7XG4gICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICB9O1xuICAgIGludGVycG9zZWRTZXF1ZW5jZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYWJsZS5fX2l0ZXJhdG9yKElURVJBVEVfVkFMVUVTLCByZXZlcnNlKTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIGlmICghc3RlcCB8fCBpdGVyYXRpb25zICUgMikge1xuICAgICAgICAgIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgaWYgKHN0ZXAuZG9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVyYXRpb25zICUgMiA/XG4gICAgICAgICAgaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zKyssIHNlcGFyYXRvcikgOlxuICAgICAgICAgIGl0ZXJhdG9yVmFsdWUodHlwZSwgaXRlcmF0aW9ucysrLCBzdGVwLnZhbHVlLCBzdGVwKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIGludGVycG9zZWRTZXF1ZW5jZTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gc29ydEZhY3RvcnkoaXRlcmFibGUsIGNvbXBhcmF0b3IsIG1hcHBlcikge1xuICAgIGlmICghY29tcGFyYXRvcikge1xuICAgICAgY29tcGFyYXRvciA9IGRlZmF1bHRDb21wYXJhdG9yO1xuICAgIH1cbiAgICB2YXIgaXNLZXllZEl0ZXJhYmxlID0gaXNLZXllZChpdGVyYWJsZSk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgZW50cmllcyA9IGl0ZXJhYmxlLnRvU2VxKCkubWFwKFxuICAgICAgZnVuY3Rpb24odiwgaykgIHtyZXR1cm4gW2ssIHYsIGluZGV4KyssIG1hcHBlciA/IG1hcHBlcih2LCBrLCBpdGVyYWJsZSkgOiB2XX1cbiAgICApLnRvQXJyYXkoKTtcbiAgICBlbnRyaWVzLnNvcnQoZnVuY3Rpb24oYSwgYikgIHtyZXR1cm4gY29tcGFyYXRvcihhWzNdLCBiWzNdKSB8fCBhWzJdIC0gYlsyXX0pLmZvckVhY2goXG4gICAgICBpc0tleWVkSXRlcmFibGUgP1xuICAgICAgZnVuY3Rpb24odiwgaSkgIHsgZW50cmllc1tpXS5sZW5ndGggPSAyOyB9IDpcbiAgICAgIGZ1bmN0aW9uKHYsIGkpICB7IGVudHJpZXNbaV0gPSB2WzFdOyB9XG4gICAgKTtcbiAgICByZXR1cm4gaXNLZXllZEl0ZXJhYmxlID8gS2V5ZWRTZXEoZW50cmllcykgOlxuICAgICAgaXNJbmRleGVkKGl0ZXJhYmxlKSA/IEluZGV4ZWRTZXEoZW50cmllcykgOlxuICAgICAgU2V0U2VxKGVudHJpZXMpO1xuICB9XG5cblxuICBmdW5jdGlvbiBtYXhGYWN0b3J5KGl0ZXJhYmxlLCBjb21wYXJhdG9yLCBtYXBwZXIpIHtcbiAgICBpZiAoIWNvbXBhcmF0b3IpIHtcbiAgICAgIGNvbXBhcmF0b3IgPSBkZWZhdWx0Q29tcGFyYXRvcjtcbiAgICB9XG4gICAgaWYgKG1hcHBlcikge1xuICAgICAgdmFyIGVudHJ5ID0gaXRlcmFibGUudG9TZXEoKVxuICAgICAgICAubWFwKGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIFt2LCBtYXBwZXIodiwgaywgaXRlcmFibGUpXX0pXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSwgYikgIHtyZXR1cm4gbWF4Q29tcGFyZShjb21wYXJhdG9yLCBhWzFdLCBiWzFdKSA/IGIgOiBhfSk7XG4gICAgICByZXR1cm4gZW50cnkgJiYgZW50cnlbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpdGVyYWJsZS5yZWR1Y2UoZnVuY3Rpb24oYSwgYikgIHtyZXR1cm4gbWF4Q29tcGFyZShjb21wYXJhdG9yLCBhLCBiKSA/IGIgOiBhfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWF4Q29tcGFyZShjb21wYXJhdG9yLCBhLCBiKSB7XG4gICAgdmFyIGNvbXAgPSBjb21wYXJhdG9yKGIsIGEpO1xuICAgIC8vIGIgaXMgY29uc2lkZXJlZCB0aGUgbmV3IG1heCBpZiB0aGUgY29tcGFyYXRvciBkZWNsYXJlcyB0aGVtIGVxdWFsLCBidXRcbiAgICAvLyB0aGV5IGFyZSBub3QgZXF1YWwgYW5kIGIgaXMgaW4gZmFjdCBhIG51bGxpc2ggdmFsdWUuXG4gICAgcmV0dXJuIChjb21wID09PSAwICYmIGIgIT09IGEgJiYgKGIgPT09IHVuZGVmaW5lZCB8fCBiID09PSBudWxsIHx8IGIgIT09IGIpKSB8fCBjb21wID4gMDtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gemlwV2l0aEZhY3Rvcnkoa2V5SXRlciwgemlwcGVyLCBpdGVycykge1xuICAgIHZhciB6aXBTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShrZXlJdGVyKTtcbiAgICB6aXBTZXF1ZW5jZS5zaXplID0gbmV3IEFycmF5U2VxKGl0ZXJzKS5tYXAoZnVuY3Rpb24oaSApIHtyZXR1cm4gaS5zaXplfSkubWluKCk7XG4gICAgLy8gTm90ZTogdGhpcyBhIGdlbmVyaWMgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBfX2l0ZXJhdGUgaW4gdGVybXMgb2ZcbiAgICAvLyBfX2l0ZXJhdG9yIHdoaWNoIG1heSBiZSBtb3JlIGdlbmVyaWNhbGx5IHVzZWZ1bCBpbiB0aGUgZnV0dXJlLlxuICAgIHppcFNlcXVlbmNlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgICAvKiBnZW5lcmljOlxuICAgICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5fX2l0ZXJhdG9yKElURVJBVEVfRU5UUklFUywgcmV2ZXJzZSk7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgICBpZiAoZm4oc3RlcC52YWx1ZVsxXSwgc3RlcC52YWx1ZVswXSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRpb25zO1xuICAgICAgKi9cbiAgICAgIC8vIGluZGV4ZWQ6XG4gICAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLl9faXRlcmF0b3IoSVRFUkFURV9WQUxVRVMsIHJldmVyc2UpO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGlmIChmbihzdGVwLnZhbHVlLCBpdGVyYXRpb25zKyssIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgICB9O1xuICAgIHppcFNlcXVlbmNlLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHZhciBpdGVyYXRvcnMgPSBpdGVycy5tYXAoZnVuY3Rpb24oaSApXG4gICAgICAgIHtyZXR1cm4gKGkgPSBJdGVyYWJsZShpKSwgZ2V0SXRlcmF0b3IocmV2ZXJzZSA/IGkucmV2ZXJzZSgpIDogaSkpfVxuICAgICAgKTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBpc0RvbmUgPSBmYWxzZTtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24oKSAge1xuICAgICAgICB2YXIgc3RlcHM7XG4gICAgICAgIGlmICghaXNEb25lKSB7XG4gICAgICAgICAgc3RlcHMgPSBpdGVyYXRvcnMubWFwKGZ1bmN0aW9uKGkgKSB7cmV0dXJuIGkubmV4dCgpfSk7XG4gICAgICAgICAgaXNEb25lID0gc3RlcHMuc29tZShmdW5jdGlvbihzICkge3JldHVybiBzLmRvbmV9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEb25lKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yRG9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgaXRlcmF0aW9ucysrLFxuICAgICAgICAgIHppcHBlci5hcHBseShudWxsLCBzdGVwcy5tYXAoZnVuY3Rpb24ocyApIHtyZXR1cm4gcy52YWx1ZX0pKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gemlwU2VxdWVuY2VcbiAgfVxuXG5cbiAgLy8gI3ByYWdtYSBIZWxwZXIgRnVuY3Rpb25zXG5cbiAgZnVuY3Rpb24gcmVpZnkoaXRlciwgc2VxKSB7XG4gICAgcmV0dXJuIGlzU2VxKGl0ZXIpID8gc2VxIDogaXRlci5jb25zdHJ1Y3RvcihzZXEpO1xuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVFbnRyeShlbnRyeSkge1xuICAgIGlmIChlbnRyeSAhPT0gT2JqZWN0KGVudHJ5KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgW0ssIFZdIHR1cGxlOiAnICsgZW50cnkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVTaXplKGl0ZXIpIHtcbiAgICBhc3NlcnROb3RJbmZpbml0ZShpdGVyLnNpemUpO1xuICAgIHJldHVybiBlbnN1cmVTaXplKGl0ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXRlcmFibGVDbGFzcyhpdGVyYWJsZSkge1xuICAgIHJldHVybiBpc0tleWVkKGl0ZXJhYmxlKSA/IEtleWVkSXRlcmFibGUgOlxuICAgICAgaXNJbmRleGVkKGl0ZXJhYmxlKSA/IEluZGV4ZWRJdGVyYWJsZSA6XG4gICAgICBTZXRJdGVyYWJsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VTZXF1ZW5jZShpdGVyYWJsZSkge1xuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKFxuICAgICAgKFxuICAgICAgICBpc0tleWVkKGl0ZXJhYmxlKSA/IEtleWVkU2VxIDpcbiAgICAgICAgaXNJbmRleGVkKGl0ZXJhYmxlKSA/IEluZGV4ZWRTZXEgOlxuICAgICAgICBTZXRTZXFcbiAgICAgICkucHJvdG90eXBlXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhY2hlUmVzdWx0VGhyb3VnaCgpIHtcbiAgICBpZiAodGhpcy5faXRlci5jYWNoZVJlc3VsdCkge1xuICAgICAgdGhpcy5faXRlci5jYWNoZVJlc3VsdCgpO1xuICAgICAgdGhpcy5zaXplID0gdGhpcy5faXRlci5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBTZXEucHJvdG90eXBlLmNhY2hlUmVzdWx0LmNhbGwodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdENvbXBhcmF0b3IoYSwgYikge1xuICAgIHJldHVybiBhID4gYiA/IDEgOiBhIDwgYiA/IC0xIDogMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcmNlSXRlcmF0b3Ioa2V5UGF0aCkge1xuICAgIHZhciBpdGVyID0gZ2V0SXRlcmF0b3Ioa2V5UGF0aCk7XG4gICAgaWYgKCFpdGVyKSB7XG4gICAgICAvLyBBcnJheSBtaWdodCBub3QgYmUgaXRlcmFibGUgaW4gdGhpcyBlbnZpcm9ubWVudCwgc28gd2UgbmVlZCBhIGZhbGxiYWNrXG4gICAgICAvLyB0byBvdXIgd3JhcHBlZCB0eXBlLlxuICAgICAgaWYgKCFpc0FycmF5TGlrZShrZXlQYXRoKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBpdGVyYWJsZSBvciBhcnJheS1saWtlOiAnICsga2V5UGF0aCk7XG4gICAgICB9XG4gICAgICBpdGVyID0gZ2V0SXRlcmF0b3IoSXRlcmFibGUoa2V5UGF0aCkpO1xuICAgIH1cbiAgICByZXR1cm4gaXRlcjtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFJlY29yZCwgS2V5ZWRDb2xsZWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFJlY29yZChkZWZhdWx0VmFsdWVzLCBuYW1lKSB7XG4gICAgICB2YXIgaGFzSW5pdGlhbGl6ZWQ7XG5cbiAgICAgIHZhciBSZWNvcmRUeXBlID0gZnVuY3Rpb24gUmVjb3JkKHZhbHVlcykge1xuICAgICAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgUmVjb3JkVHlwZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlY29yZFR5cGUpKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZWNvcmRUeXBlKHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYXNJbml0aWFsaXplZCkge1xuICAgICAgICAgIGhhc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRlZmF1bHRWYWx1ZXMpO1xuICAgICAgICAgIHNldFByb3BzKFJlY29yZFR5cGVQcm90b3R5cGUsIGtleXMpO1xuICAgICAgICAgIFJlY29yZFR5cGVQcm90b3R5cGUuc2l6ZSA9IGtleXMubGVuZ3RoO1xuICAgICAgICAgIFJlY29yZFR5cGVQcm90b3R5cGUuX25hbWUgPSBuYW1lO1xuICAgICAgICAgIFJlY29yZFR5cGVQcm90b3R5cGUuX2tleXMgPSBrZXlzO1xuICAgICAgICAgIFJlY29yZFR5cGVQcm90b3R5cGUuX2RlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0VmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21hcCA9IE1hcCh2YWx1ZXMpO1xuICAgICAgfTtcblxuICAgICAgdmFyIFJlY29yZFR5cGVQcm90b3R5cGUgPSBSZWNvcmRUeXBlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVjb3JkUHJvdG90eXBlKTtcbiAgICAgIFJlY29yZFR5cGVQcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZWNvcmRUeXBlO1xuXG4gICAgICByZXR1cm4gUmVjb3JkVHlwZTtcbiAgICB9XG5cbiAgICBSZWNvcmQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKHJlY29yZE5hbWUodGhpcykgKyAnIHsnLCAnfScpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIEFjY2Vzc1xuXG4gICAgUmVjb3JkLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrKTtcbiAgICB9O1xuXG4gICAgUmVjb3JkLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihrLCBub3RTZXRWYWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLmhhcyhrKSkge1xuICAgICAgICByZXR1cm4gbm90U2V0VmFsdWU7XG4gICAgICB9XG4gICAgICB2YXIgZGVmYXVsdFZhbCA9IHRoaXMuX2RlZmF1bHRWYWx1ZXNba107XG4gICAgICByZXR1cm4gdGhpcy5fbWFwID8gdGhpcy5fbWFwLmdldChrLCBkZWZhdWx0VmFsKSA6IGRlZmF1bHRWYWw7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgTW9kaWZpY2F0aW9uXG5cbiAgICBSZWNvcmQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgdGhpcy5fbWFwICYmIHRoaXMuX21hcC5jbGVhcigpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBSZWNvcmRUeXBlID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgIHJldHVybiBSZWNvcmRUeXBlLl9lbXB0eSB8fCAoUmVjb3JkVHlwZS5fZW1wdHkgPSBtYWtlUmVjb3JkKHRoaXMsIGVtcHR5TWFwKCkpKTtcbiAgICB9O1xuXG4gICAgUmVjb3JkLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihrLCB2KSB7XG4gICAgICBpZiAoIXRoaXMuaGFzKGspKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHNldCB1bmtub3duIGtleSBcIicgKyBrICsgJ1wiIG9uICcgKyByZWNvcmROYW1lKHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9tYXAgJiYgIXRoaXMuX21hcC5oYXMoaykpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWwgPSB0aGlzLl9kZWZhdWx0VmFsdWVzW2tdO1xuICAgICAgICBpZiAodiA9PT0gZGVmYXVsdFZhbCkge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgbmV3TWFwID0gdGhpcy5fbWFwICYmIHRoaXMuX21hcC5zZXQoaywgdik7XG4gICAgICBpZiAodGhpcy5fX293bmVySUQgfHwgbmV3TWFwID09PSB0aGlzLl9tYXApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZVJlY29yZCh0aGlzLCBuZXdNYXApO1xuICAgIH07XG5cbiAgICBSZWNvcmQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGspIHtcbiAgICAgIGlmICghdGhpcy5oYXMoaykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgbmV3TWFwID0gdGhpcy5fbWFwICYmIHRoaXMuX21hcC5yZW1vdmUoayk7XG4gICAgICBpZiAodGhpcy5fX293bmVySUQgfHwgbmV3TWFwID09PSB0aGlzLl9tYXApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZVJlY29yZCh0aGlzLCBuZXdNYXApO1xuICAgIH07XG5cbiAgICBSZWNvcmQucHJvdG90eXBlLndhc0FsdGVyZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAud2FzQWx0ZXJlZCgpO1xuICAgIH07XG5cbiAgICBSZWNvcmQucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICByZXR1cm4gS2V5ZWRJdGVyYWJsZSh0aGlzLl9kZWZhdWx0VmFsdWVzKS5tYXAoZnVuY3Rpb24oXywgaykgIHtyZXR1cm4gdGhpcyQwLmdldChrKX0pLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgfTtcblxuICAgIFJlY29yZC5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHt2YXIgdGhpcyQwID0gdGhpcztcbiAgICAgIHJldHVybiBLZXllZEl0ZXJhYmxlKHRoaXMuX2RlZmF1bHRWYWx1ZXMpLm1hcChmdW5jdGlvbihfLCBrKSAge3JldHVybiB0aGlzJDAuZ2V0KGspfSkuX19pdGVyYXRlKGZuLCByZXZlcnNlKTtcbiAgICB9O1xuXG4gICAgUmVjb3JkLnByb3RvdHlwZS5fX2Vuc3VyZU93bmVyID0gZnVuY3Rpb24ob3duZXJJRCkge1xuICAgICAgaWYgKG93bmVySUQgPT09IHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG5ld01hcCA9IHRoaXMuX21hcCAmJiB0aGlzLl9tYXAuX19lbnN1cmVPd25lcihvd25lcklEKTtcbiAgICAgIGlmICghb3duZXJJRCkge1xuICAgICAgICB0aGlzLl9fb3duZXJJRCA9IG93bmVySUQ7XG4gICAgICAgIHRoaXMuX21hcCA9IG5ld01hcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZVJlY29yZCh0aGlzLCBuZXdNYXAsIG93bmVySUQpO1xuICAgIH07XG5cblxuICB2YXIgUmVjb3JkUHJvdG90eXBlID0gUmVjb3JkLnByb3RvdHlwZTtcbiAgUmVjb3JkUHJvdG90eXBlW0RFTEVURV0gPSBSZWNvcmRQcm90b3R5cGUucmVtb3ZlO1xuICBSZWNvcmRQcm90b3R5cGUuZGVsZXRlSW4gPVxuICBSZWNvcmRQcm90b3R5cGUucmVtb3ZlSW4gPSBNYXBQcm90b3R5cGUucmVtb3ZlSW47XG4gIFJlY29yZFByb3RvdHlwZS5tZXJnZSA9IE1hcFByb3RvdHlwZS5tZXJnZTtcbiAgUmVjb3JkUHJvdG90eXBlLm1lcmdlV2l0aCA9IE1hcFByb3RvdHlwZS5tZXJnZVdpdGg7XG4gIFJlY29yZFByb3RvdHlwZS5tZXJnZUluID0gTWFwUHJvdG90eXBlLm1lcmdlSW47XG4gIFJlY29yZFByb3RvdHlwZS5tZXJnZURlZXAgPSBNYXBQcm90b3R5cGUubWVyZ2VEZWVwO1xuICBSZWNvcmRQcm90b3R5cGUubWVyZ2VEZWVwV2l0aCA9IE1hcFByb3RvdHlwZS5tZXJnZURlZXBXaXRoO1xuICBSZWNvcmRQcm90b3R5cGUubWVyZ2VEZWVwSW4gPSBNYXBQcm90b3R5cGUubWVyZ2VEZWVwSW47XG4gIFJlY29yZFByb3RvdHlwZS5zZXRJbiA9IE1hcFByb3RvdHlwZS5zZXRJbjtcbiAgUmVjb3JkUHJvdG90eXBlLnVwZGF0ZSA9IE1hcFByb3RvdHlwZS51cGRhdGU7XG4gIFJlY29yZFByb3RvdHlwZS51cGRhdGVJbiA9IE1hcFByb3RvdHlwZS51cGRhdGVJbjtcbiAgUmVjb3JkUHJvdG90eXBlLndpdGhNdXRhdGlvbnMgPSBNYXBQcm90b3R5cGUud2l0aE11dGF0aW9ucztcbiAgUmVjb3JkUHJvdG90eXBlLmFzTXV0YWJsZSA9IE1hcFByb3RvdHlwZS5hc011dGFibGU7XG4gIFJlY29yZFByb3RvdHlwZS5hc0ltbXV0YWJsZSA9IE1hcFByb3RvdHlwZS5hc0ltbXV0YWJsZTtcblxuXG4gIGZ1bmN0aW9uIG1ha2VSZWNvcmQobGlrZVJlY29yZCwgbWFwLCBvd25lcklEKSB7XG4gICAgdmFyIHJlY29yZCA9IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKGxpa2VSZWNvcmQpKTtcbiAgICByZWNvcmQuX21hcCA9IG1hcDtcbiAgICByZWNvcmQuX19vd25lcklEID0gb3duZXJJRDtcbiAgICByZXR1cm4gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjb3JkTmFtZShyZWNvcmQpIHtcbiAgICByZXR1cm4gcmVjb3JkLl9uYW1lIHx8IHJlY29yZC5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdSZWNvcmQnO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UHJvcHMocHJvdG90eXBlLCBuYW1lcykge1xuICAgIHRyeSB7XG4gICAgICBuYW1lcy5mb3JFYWNoKHNldFByb3AuYmluZCh1bmRlZmluZWQsIHByb3RvdHlwZSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBPYmplY3QuZGVmaW5lUHJvcGVydHkgZmFpbGVkLiBQcm9iYWJseSBJRTguXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0UHJvcChwcm90b3R5cGUsIG5hbWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCBuYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSk7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpbnZhcmlhbnQodGhpcy5fX293bmVySUQsICdDYW5ub3Qgc2V0IG9uIGFuIGltbXV0YWJsZSByZWNvcmQuJyk7XG4gICAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFNldCwgU2V0Q29sbGVjdGlvbik7XG5cbiAgICAvLyBAcHJhZ21hIENvbnN0cnVjdGlvblxuXG4gICAgZnVuY3Rpb24gU2V0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IGVtcHR5U2V0KCkgOlxuICAgICAgICBpc1NldCh2YWx1ZSkgJiYgIWlzT3JkZXJlZCh2YWx1ZSkgPyB2YWx1ZSA6XG4gICAgICAgIGVtcHR5U2V0KCkud2l0aE11dGF0aW9ucyhmdW5jdGlvbihzZXQgKSB7XG4gICAgICAgICAgdmFyIGl0ZXIgPSBTZXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgICAgYXNzZXJ0Tm90SW5maW5pdGUoaXRlci5zaXplKTtcbiAgICAgICAgICBpdGVyLmZvckVhY2goZnVuY3Rpb24odiApIHtyZXR1cm4gc2V0LmFkZCh2KX0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBTZXQub2YgPSBmdW5jdGlvbigvKi4uLnZhbHVlcyovKSB7XG4gICAgICByZXR1cm4gdGhpcyhhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBTZXQuZnJvbUtleXMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMoS2V5ZWRJdGVyYWJsZSh2YWx1ZSkua2V5U2VxKCkpO1xuICAgIH07XG5cbiAgICBTZXQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKCdTZXQgeycsICd9Jyk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgQWNjZXNzXG5cbiAgICBTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLmhhcyh2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgTW9kaWZpY2F0aW9uXG5cbiAgICBTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdXBkYXRlU2V0KHRoaXMsIHRoaXMuX21hcC5zZXQodmFsdWUsIHRydWUpKTtcbiAgICB9O1xuXG4gICAgU2V0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHVwZGF0ZVNldCh0aGlzLCB0aGlzLl9tYXAucmVtb3ZlKHZhbHVlKSk7XG4gICAgfTtcblxuICAgIFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB1cGRhdGVTZXQodGhpcywgdGhpcy5fbWFwLmNsZWFyKCkpO1xuICAgIH07XG5cbiAgICAvLyBAcHJhZ21hIENvbXBvc2l0aW9uXG5cbiAgICBTZXQucHJvdG90eXBlLnVuaW9uID0gZnVuY3Rpb24oKSB7dmFyIGl0ZXJzID0gU0xJQ0UkMC5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICBpdGVycyA9IGl0ZXJzLmZpbHRlcihmdW5jdGlvbih4ICkge3JldHVybiB4LnNpemUgIT09IDB9KTtcbiAgICAgIGlmIChpdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zaXplID09PSAwICYmICF0aGlzLl9fb3duZXJJRCAmJiBpdGVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IoaXRlcnNbMF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMud2l0aE11dGF0aW9ucyhmdW5jdGlvbihzZXQgKSB7XG4gICAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBpdGVycy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICBTZXRJdGVyYWJsZShpdGVyc1tpaV0pLmZvckVhY2goZnVuY3Rpb24odmFsdWUgKSB7cmV0dXJuIHNldC5hZGQodmFsdWUpfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBTZXQucHJvdG90eXBlLmludGVyc2VjdCA9IGZ1bmN0aW9uKCkge3ZhciBpdGVycyA9IFNMSUNFJDAuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgaWYgKGl0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGl0ZXJzID0gaXRlcnMubWFwKGZ1bmN0aW9uKGl0ZXIgKSB7cmV0dXJuIFNldEl0ZXJhYmxlKGl0ZXIpfSk7XG4gICAgICB2YXIgb3JpZ2luYWxTZXQgPSB0aGlzO1xuICAgICAgcmV0dXJuIHRoaXMud2l0aE11dGF0aW9ucyhmdW5jdGlvbihzZXQgKSB7XG4gICAgICAgIG9yaWdpbmFsU2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUgKSB7XG4gICAgICAgICAgaWYgKCFpdGVycy5ldmVyeShmdW5jdGlvbihpdGVyICkge3JldHVybiBpdGVyLmluY2x1ZGVzKHZhbHVlKX0pKSB7XG4gICAgICAgICAgICBzZXQucmVtb3ZlKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIFNldC5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbigpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgIGlmIChpdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpdGVycyA9IGl0ZXJzLm1hcChmdW5jdGlvbihpdGVyICkge3JldHVybiBTZXRJdGVyYWJsZShpdGVyKX0pO1xuICAgICAgdmFyIG9yaWdpbmFsU2V0ID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24oc2V0ICkge1xuICAgICAgICBvcmlnaW5hbFNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlICkge1xuICAgICAgICAgIGlmIChpdGVycy5zb21lKGZ1bmN0aW9uKGl0ZXIgKSB7cmV0dXJuIGl0ZXIuaW5jbHVkZXModmFsdWUpfSkpIHtcbiAgICAgICAgICAgIHNldC5yZW1vdmUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgU2V0LnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudW5pb24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgU2V0LnByb3RvdHlwZS5tZXJnZVdpdGggPSBmdW5jdGlvbihtZXJnZXIpIHt2YXIgaXRlcnMgPSBTTElDRSQwLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgIHJldHVybiB0aGlzLnVuaW9uLmFwcGx5KHRoaXMsIGl0ZXJzKTtcbiAgICB9O1xuXG4gICAgU2V0LnByb3RvdHlwZS5zb3J0ID0gZnVuY3Rpb24oY29tcGFyYXRvcikge1xuICAgICAgLy8gTGF0ZSBiaW5kaW5nXG4gICAgICByZXR1cm4gT3JkZXJlZFNldChzb3J0RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yKSk7XG4gICAgfTtcblxuICAgIFNldC5wcm90b3R5cGUuc29ydEJ5ID0gZnVuY3Rpb24obWFwcGVyLCBjb21wYXJhdG9yKSB7XG4gICAgICAvLyBMYXRlIGJpbmRpbmdcbiAgICAgIHJldHVybiBPcmRlcmVkU2V0KHNvcnRGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IsIG1hcHBlcikpO1xuICAgIH07XG5cbiAgICBTZXQucHJvdG90eXBlLndhc0FsdGVyZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAud2FzQWx0ZXJlZCgpO1xuICAgIH07XG5cbiAgICBTZXQucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7dmFyIHRoaXMkMCA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy5fbWFwLl9faXRlcmF0ZShmdW5jdGlvbihfLCBrKSAge3JldHVybiBmbihrLCBrLCB0aGlzJDApfSwgcmV2ZXJzZSk7XG4gICAgfTtcblxuICAgIFNldC5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXAubWFwKGZ1bmN0aW9uKF8sIGspICB7cmV0dXJuIGt9KS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgIH07XG5cbiAgICBTZXQucHJvdG90eXBlLl9fZW5zdXJlT3duZXIgPSBmdW5jdGlvbihvd25lcklEKSB7XG4gICAgICBpZiAob3duZXJJRCA9PT0gdGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgbmV3TWFwID0gdGhpcy5fbWFwLl9fZW5zdXJlT3duZXIob3duZXJJRCk7XG4gICAgICBpZiAoIW93bmVySUQpIHtcbiAgICAgICAgdGhpcy5fX293bmVySUQgPSBvd25lcklEO1xuICAgICAgICB0aGlzLl9tYXAgPSBuZXdNYXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX19tYWtlKG5ld01hcCwgb3duZXJJRCk7XG4gICAgfTtcblxuXG4gIGZ1bmN0aW9uIGlzU2V0KG1heWJlU2V0KSB7XG4gICAgcmV0dXJuICEhKG1heWJlU2V0ICYmIG1heWJlU2V0W0lTX1NFVF9TRU5USU5FTF0pO1xuICB9XG5cbiAgU2V0LmlzU2V0ID0gaXNTZXQ7XG5cbiAgdmFyIElTX1NFVF9TRU5USU5FTCA9ICdAQF9fSU1NVVRBQkxFX1NFVF9fQEAnO1xuXG4gIHZhciBTZXRQcm90b3R5cGUgPSBTZXQucHJvdG90eXBlO1xuICBTZXRQcm90b3R5cGVbSVNfU0VUX1NFTlRJTkVMXSA9IHRydWU7XG4gIFNldFByb3RvdHlwZVtERUxFVEVdID0gU2V0UHJvdG90eXBlLnJlbW92ZTtcbiAgU2V0UHJvdG90eXBlLm1lcmdlRGVlcCA9IFNldFByb3RvdHlwZS5tZXJnZTtcbiAgU2V0UHJvdG90eXBlLm1lcmdlRGVlcFdpdGggPSBTZXRQcm90b3R5cGUubWVyZ2VXaXRoO1xuICBTZXRQcm90b3R5cGUud2l0aE11dGF0aW9ucyA9IE1hcFByb3RvdHlwZS53aXRoTXV0YXRpb25zO1xuICBTZXRQcm90b3R5cGUuYXNNdXRhYmxlID0gTWFwUHJvdG90eXBlLmFzTXV0YWJsZTtcbiAgU2V0UHJvdG90eXBlLmFzSW1tdXRhYmxlID0gTWFwUHJvdG90eXBlLmFzSW1tdXRhYmxlO1xuXG4gIFNldFByb3RvdHlwZS5fX2VtcHR5ID0gZW1wdHlTZXQ7XG4gIFNldFByb3RvdHlwZS5fX21ha2UgPSBtYWtlU2V0O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNldChzZXQsIG5ld01hcCkge1xuICAgIGlmIChzZXQuX19vd25lcklEKSB7XG4gICAgICBzZXQuc2l6ZSA9IG5ld01hcC5zaXplO1xuICAgICAgc2V0Ll9tYXAgPSBuZXdNYXA7XG4gICAgICByZXR1cm4gc2V0O1xuICAgIH1cbiAgICByZXR1cm4gbmV3TWFwID09PSBzZXQuX21hcCA/IHNldCA6XG4gICAgICBuZXdNYXAuc2l6ZSA9PT0gMCA/IHNldC5fX2VtcHR5KCkgOlxuICAgICAgc2V0Ll9fbWFrZShuZXdNYXApO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVNldChtYXAsIG93bmVySUQpIHtcbiAgICB2YXIgc2V0ID0gT2JqZWN0LmNyZWF0ZShTZXRQcm90b3R5cGUpO1xuICAgIHNldC5zaXplID0gbWFwID8gbWFwLnNpemUgOiAwO1xuICAgIHNldC5fbWFwID0gbWFwO1xuICAgIHNldC5fX293bmVySUQgPSBvd25lcklEO1xuICAgIHJldHVybiBzZXQ7XG4gIH1cblxuICB2YXIgRU1QVFlfU0VUO1xuICBmdW5jdGlvbiBlbXB0eVNldCgpIHtcbiAgICByZXR1cm4gRU1QVFlfU0VUIHx8IChFTVBUWV9TRVQgPSBtYWtlU2V0KGVtcHR5TWFwKCkpKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKE9yZGVyZWRTZXQsIFNldCk7XG5cbiAgICAvLyBAcHJhZ21hIENvbnN0cnVjdGlvblxuXG4gICAgZnVuY3Rpb24gT3JkZXJlZFNldCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgPyBlbXB0eU9yZGVyZWRTZXQoKSA6XG4gICAgICAgIGlzT3JkZXJlZFNldCh2YWx1ZSkgPyB2YWx1ZSA6XG4gICAgICAgIGVtcHR5T3JkZXJlZFNldCgpLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24oc2V0ICkge1xuICAgICAgICAgIHZhciBpdGVyID0gU2V0SXRlcmFibGUodmFsdWUpO1xuICAgICAgICAgIGFzc2VydE5vdEluZmluaXRlKGl0ZXIuc2l6ZSk7XG4gICAgICAgICAgaXRlci5mb3JFYWNoKGZ1bmN0aW9uKHYgKSB7cmV0dXJuIHNldC5hZGQodil9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgT3JkZXJlZFNldC5vZiA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIHJldHVybiB0aGlzKGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIE9yZGVyZWRTZXQuZnJvbUtleXMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMoS2V5ZWRJdGVyYWJsZSh2YWx1ZSkua2V5U2VxKCkpO1xuICAgIH07XG5cbiAgICBPcmRlcmVkU2V0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX190b1N0cmluZygnT3JkZXJlZFNldCB7JywgJ30nKTtcbiAgICB9O1xuXG5cbiAgZnVuY3Rpb24gaXNPcmRlcmVkU2V0KG1heWJlT3JkZXJlZFNldCkge1xuICAgIHJldHVybiBpc1NldChtYXliZU9yZGVyZWRTZXQpICYmIGlzT3JkZXJlZChtYXliZU9yZGVyZWRTZXQpO1xuICB9XG5cbiAgT3JkZXJlZFNldC5pc09yZGVyZWRTZXQgPSBpc09yZGVyZWRTZXQ7XG5cbiAgdmFyIE9yZGVyZWRTZXRQcm90b3R5cGUgPSBPcmRlcmVkU2V0LnByb3RvdHlwZTtcbiAgT3JkZXJlZFNldFByb3RvdHlwZVtJU19PUkRFUkVEX1NFTlRJTkVMXSA9IHRydWU7XG5cbiAgT3JkZXJlZFNldFByb3RvdHlwZS5fX2VtcHR5ID0gZW1wdHlPcmRlcmVkU2V0O1xuICBPcmRlcmVkU2V0UHJvdG90eXBlLl9fbWFrZSA9IG1ha2VPcmRlcmVkU2V0O1xuXG4gIGZ1bmN0aW9uIG1ha2VPcmRlcmVkU2V0KG1hcCwgb3duZXJJRCkge1xuICAgIHZhciBzZXQgPSBPYmplY3QuY3JlYXRlKE9yZGVyZWRTZXRQcm90b3R5cGUpO1xuICAgIHNldC5zaXplID0gbWFwID8gbWFwLnNpemUgOiAwO1xuICAgIHNldC5fbWFwID0gbWFwO1xuICAgIHNldC5fX293bmVySUQgPSBvd25lcklEO1xuICAgIHJldHVybiBzZXQ7XG4gIH1cblxuICB2YXIgRU1QVFlfT1JERVJFRF9TRVQ7XG4gIGZ1bmN0aW9uIGVtcHR5T3JkZXJlZFNldCgpIHtcbiAgICByZXR1cm4gRU1QVFlfT1JERVJFRF9TRVQgfHwgKEVNUFRZX09SREVSRURfU0VUID0gbWFrZU9yZGVyZWRTZXQoZW1wdHlPcmRlcmVkTWFwKCkpKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFN0YWNrLCBJbmRleGVkQ29sbGVjdGlvbik7XG5cbiAgICAvLyBAcHJhZ21hIENvbnN0cnVjdGlvblxuXG4gICAgZnVuY3Rpb24gU3RhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZW1wdHlTdGFjaygpIDpcbiAgICAgICAgaXNTdGFjayh2YWx1ZSkgPyB2YWx1ZSA6XG4gICAgICAgIGVtcHR5U3RhY2soKS51bnNoaWZ0QWxsKHZhbHVlKTtcbiAgICB9XG5cbiAgICBTdGFjay5vZiA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIHJldHVybiB0aGlzKGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIFN0YWNrLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX190b1N0cmluZygnU3RhY2sgWycsICddJyk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgQWNjZXNzXG5cbiAgICBTdGFjay5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oaW5kZXgsIG5vdFNldFZhbHVlKSB7XG4gICAgICB2YXIgaGVhZCA9IHRoaXMuX2hlYWQ7XG4gICAgICBpbmRleCA9IHdyYXBJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICB3aGlsZSAoaGVhZCAmJiBpbmRleC0tKSB7XG4gICAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGVhZCA/IGhlYWQudmFsdWUgOiBub3RTZXRWYWx1ZTtcbiAgICB9O1xuXG4gICAgU3RhY2sucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9oZWFkICYmIHRoaXMuX2hlYWQudmFsdWU7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgTW9kaWZpY2F0aW9uXG5cbiAgICBTdGFjay5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uKC8qLi4udmFsdWVzKi8pIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG5ld1NpemUgPSB0aGlzLnNpemUgKyBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgdmFyIGhlYWQgPSB0aGlzLl9oZWFkO1xuICAgICAgZm9yICh2YXIgaWkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaWkgPj0gMDsgaWktLSkge1xuICAgICAgICBoZWFkID0ge1xuICAgICAgICAgIHZhbHVlOiBhcmd1bWVudHNbaWldLFxuICAgICAgICAgIG5leHQ6IGhlYWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICB0aGlzLnNpemUgPSBuZXdTaXplO1xuICAgICAgICB0aGlzLl9oZWFkID0gaGVhZDtcbiAgICAgICAgdGhpcy5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZVN0YWNrKG5ld1NpemUsIGhlYWQpO1xuICAgIH07XG5cbiAgICBTdGFjay5wcm90b3R5cGUucHVzaEFsbCA9IGZ1bmN0aW9uKGl0ZXIpIHtcbiAgICAgIGl0ZXIgPSBJbmRleGVkSXRlcmFibGUoaXRlcik7XG4gICAgICBpZiAoaXRlci5zaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgYXNzZXJ0Tm90SW5maW5pdGUoaXRlci5zaXplKTtcbiAgICAgIHZhciBuZXdTaXplID0gdGhpcy5zaXplO1xuICAgICAgdmFyIGhlYWQgPSB0aGlzLl9oZWFkO1xuICAgICAgaXRlci5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSApIHtcbiAgICAgICAgbmV3U2l6ZSsrO1xuICAgICAgICBoZWFkID0ge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBuZXh0OiBoZWFkXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLl9fb3duZXJJRCkge1xuICAgICAgICB0aGlzLnNpemUgPSBuZXdTaXplO1xuICAgICAgICB0aGlzLl9oZWFkID0gaGVhZDtcbiAgICAgICAgdGhpcy5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFrZVN0YWNrKG5ld1NpemUsIGhlYWQpO1xuICAgIH07XG5cbiAgICBTdGFjay5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGljZSgxKTtcbiAgICB9O1xuXG4gICAgU3RhY2sucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbigvKi4uLnZhbHVlcyovKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIFN0YWNrLnByb3RvdHlwZS51bnNoaWZ0QWxsID0gZnVuY3Rpb24oaXRlcikge1xuICAgICAgcmV0dXJuIHRoaXMucHVzaEFsbChpdGVyKTtcbiAgICB9O1xuXG4gICAgU3RhY2sucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wb3AuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgU3RhY2sucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuX2hlYWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19oYXNoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9fYWx0ZXJlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5U3RhY2soKTtcbiAgICB9O1xuXG4gICAgU3RhY2sucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24oYmVnaW4sIGVuZCkge1xuICAgICAgaWYgKHdob2xlU2xpY2UoYmVnaW4sIGVuZCwgdGhpcy5zaXplKSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciByZXNvbHZlZEJlZ2luID0gcmVzb2x2ZUJlZ2luKGJlZ2luLCB0aGlzLnNpemUpO1xuICAgICAgdmFyIHJlc29sdmVkRW5kID0gcmVzb2x2ZUVuZChlbmQsIHRoaXMuc2l6ZSk7XG4gICAgICBpZiAocmVzb2x2ZWRFbmQgIT09IHRoaXMuc2l6ZSkge1xuICAgICAgICAvLyBzdXBlci5zbGljZShiZWdpbiwgZW5kKTtcbiAgICAgICAgcmV0dXJuIEluZGV4ZWRDb2xsZWN0aW9uLnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMsIGJlZ2luLCBlbmQpO1xuICAgICAgfVxuICAgICAgdmFyIG5ld1NpemUgPSB0aGlzLnNpemUgLSByZXNvbHZlZEJlZ2luO1xuICAgICAgdmFyIGhlYWQgPSB0aGlzLl9oZWFkO1xuICAgICAgd2hpbGUgKHJlc29sdmVkQmVnaW4tLSkge1xuICAgICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IG5ld1NpemU7XG4gICAgICAgIHRoaXMuX2hlYWQgPSBoZWFkO1xuICAgICAgICB0aGlzLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX2FsdGVyZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYWtlU3RhY2sobmV3U2l6ZSwgaGVhZCk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgTXV0YWJpbGl0eVxuXG4gICAgU3RhY2sucHJvdG90eXBlLl9fZW5zdXJlT3duZXIgPSBmdW5jdGlvbihvd25lcklEKSB7XG4gICAgICBpZiAob3duZXJJRCA9PT0gdGhpcy5fX293bmVySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBpZiAoIW93bmVySUQpIHtcbiAgICAgICAgdGhpcy5fX293bmVySUQgPSBvd25lcklEO1xuICAgICAgICB0aGlzLl9fYWx0ZXJlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYWtlU3RhY2sodGhpcy5zaXplLCB0aGlzLl9oZWFkLCBvd25lcklELCB0aGlzLl9faGFzaCk7XG4gICAgfTtcblxuICAgIC8vIEBwcmFnbWEgSXRlcmF0aW9uXG5cbiAgICBTdGFjay5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJldmVyc2UoKS5fX2l0ZXJhdGUoZm4pO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgaWYgKGZuKG5vZGUudmFsdWUsIGl0ZXJhdGlvbnMrKywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRpb25zO1xuICAgIH07XG5cbiAgICBTdGFjay5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJldmVyc2UoKS5fX2l0ZXJhdG9yKHR5cGUpO1xuICAgICAgfVxuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbigpICB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gbm9kZS52YWx1ZTtcbiAgICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cblxuICBmdW5jdGlvbiBpc1N0YWNrKG1heWJlU3RhY2spIHtcbiAgICByZXR1cm4gISEobWF5YmVTdGFjayAmJiBtYXliZVN0YWNrW0lTX1NUQUNLX1NFTlRJTkVMXSk7XG4gIH1cblxuICBTdGFjay5pc1N0YWNrID0gaXNTdGFjaztcblxuICB2YXIgSVNfU1RBQ0tfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9TVEFDS19fQEAnO1xuXG4gIHZhciBTdGFja1Byb3RvdHlwZSA9IFN0YWNrLnByb3RvdHlwZTtcbiAgU3RhY2tQcm90b3R5cGVbSVNfU1RBQ0tfU0VOVElORUxdID0gdHJ1ZTtcbiAgU3RhY2tQcm90b3R5cGUud2l0aE11dGF0aW9ucyA9IE1hcFByb3RvdHlwZS53aXRoTXV0YXRpb25zO1xuICBTdGFja1Byb3RvdHlwZS5hc011dGFibGUgPSBNYXBQcm90b3R5cGUuYXNNdXRhYmxlO1xuICBTdGFja1Byb3RvdHlwZS5hc0ltbXV0YWJsZSA9IE1hcFByb3RvdHlwZS5hc0ltbXV0YWJsZTtcbiAgU3RhY2tQcm90b3R5cGUud2FzQWx0ZXJlZCA9IE1hcFByb3RvdHlwZS53YXNBbHRlcmVkO1xuXG5cbiAgZnVuY3Rpb24gbWFrZVN0YWNrKHNpemUsIGhlYWQsIG93bmVySUQsIGhhc2gpIHtcbiAgICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShTdGFja1Byb3RvdHlwZSk7XG4gICAgbWFwLnNpemUgPSBzaXplO1xuICAgIG1hcC5faGVhZCA9IGhlYWQ7XG4gICAgbWFwLl9fb3duZXJJRCA9IG93bmVySUQ7XG4gICAgbWFwLl9faGFzaCA9IGhhc2g7XG4gICAgbWFwLl9fYWx0ZXJlZCA9IGZhbHNlO1xuICAgIHJldHVybiBtYXA7XG4gIH1cblxuICB2YXIgRU1QVFlfU1RBQ0s7XG4gIGZ1bmN0aW9uIGVtcHR5U3RhY2soKSB7XG4gICAgcmV0dXJuIEVNUFRZX1NUQUNLIHx8IChFTVBUWV9TVEFDSyA9IG1ha2VTdGFjaygwKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udHJpYnV0ZXMgYWRkaXRpb25hbCBtZXRob2RzIHRvIGEgY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIG1peGluKGN0b3IsIG1ldGhvZHMpIHtcbiAgICB2YXIga2V5Q29waWVyID0gZnVuY3Rpb24oa2V5ICkgeyBjdG9yLnByb3RvdHlwZVtrZXldID0gbWV0aG9kc1trZXldOyB9O1xuICAgIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2goa2V5Q29waWVyKTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmXG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG1ldGhvZHMpLmZvckVhY2goa2V5Q29waWVyKTtcbiAgICByZXR1cm4gY3RvcjtcbiAgfVxuXG4gIEl0ZXJhYmxlLkl0ZXJhdG9yID0gSXRlcmF0b3I7XG5cbiAgbWl4aW4oSXRlcmFibGUsIHtcblxuICAgIC8vICMjIyBDb252ZXJzaW9uIHRvIG90aGVyIHR5cGVzXG5cbiAgICB0b0FycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgIGFzc2VydE5vdEluZmluaXRlKHRoaXMuc2l6ZSk7XG4gICAgICB2YXIgYXJyYXkgPSBuZXcgQXJyYXkodGhpcy5zaXplIHx8IDApO1xuICAgICAgdGhpcy52YWx1ZVNlcSgpLl9faXRlcmF0ZShmdW5jdGlvbih2LCBpKSAgeyBhcnJheVtpXSA9IHY7IH0pO1xuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH0sXG5cbiAgICB0b0luZGV4ZWRTZXE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBUb0luZGV4ZWRTZXF1ZW5jZSh0aGlzKTtcbiAgICB9LFxuXG4gICAgdG9KUzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1NlcSgpLm1hcChcbiAgICAgICAgZnVuY3Rpb24odmFsdWUgKSB7cmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS50b0pTID09PSAnZnVuY3Rpb24nID8gdmFsdWUudG9KUygpIDogdmFsdWV9XG4gICAgICApLl9fdG9KUygpO1xuICAgIH0sXG5cbiAgICB0b0pTT046IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9TZXEoKS5tYXAoXG4gICAgICAgIGZ1bmN0aW9uKHZhbHVlICkge3JldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudG9KU09OID09PSAnZnVuY3Rpb24nID8gdmFsdWUudG9KU09OKCkgOiB2YWx1ZX1cbiAgICAgICkuX190b0pTKCk7XG4gICAgfSxcblxuICAgIHRvS2V5ZWRTZXE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBUb0tleWVkU2VxdWVuY2UodGhpcywgdHJ1ZSk7XG4gICAgfSxcblxuICAgIHRvTWFwOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFVzZSBMYXRlIEJpbmRpbmcgaGVyZSB0byBzb2x2ZSB0aGUgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAgICAgIHJldHVybiBNYXAodGhpcy50b0tleWVkU2VxKCkpO1xuICAgIH0sXG5cbiAgICB0b09iamVjdDogZnVuY3Rpb24oKSB7XG4gICAgICBhc3NlcnROb3RJbmZpbml0ZSh0aGlzLnNpemUpO1xuICAgICAgdmFyIG9iamVjdCA9IHt9O1xuICAgICAgdGhpcy5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaykgIHsgb2JqZWN0W2tdID0gdjsgfSk7XG4gICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH0sXG5cbiAgICB0b09yZGVyZWRNYXA6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gVXNlIExhdGUgQmluZGluZyBoZXJlIHRvIHNvbHZlIHRoZSBjaXJjdWxhciBkZXBlbmRlbmN5LlxuICAgICAgcmV0dXJuIE9yZGVyZWRNYXAodGhpcy50b0tleWVkU2VxKCkpO1xuICAgIH0sXG5cbiAgICB0b09yZGVyZWRTZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gVXNlIExhdGUgQmluZGluZyBoZXJlIHRvIHNvbHZlIHRoZSBjaXJjdWxhciBkZXBlbmRlbmN5LlxuICAgICAgcmV0dXJuIE9yZGVyZWRTZXQoaXNLZXllZCh0aGlzKSA/IHRoaXMudmFsdWVTZXEoKSA6IHRoaXMpO1xuICAgIH0sXG5cbiAgICB0b1NldDogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBVc2UgTGF0ZSBCaW5kaW5nIGhlcmUgdG8gc29sdmUgdGhlIGNpcmN1bGFyIGRlcGVuZGVuY3kuXG4gICAgICByZXR1cm4gU2V0KGlzS2V5ZWQodGhpcykgPyB0aGlzLnZhbHVlU2VxKCkgOiB0aGlzKTtcbiAgICB9LFxuXG4gICAgdG9TZXRTZXE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBUb1NldFNlcXVlbmNlKHRoaXMpO1xuICAgIH0sXG5cbiAgICB0b1NlcTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaXNJbmRleGVkKHRoaXMpID8gdGhpcy50b0luZGV4ZWRTZXEoKSA6XG4gICAgICAgIGlzS2V5ZWQodGhpcykgPyB0aGlzLnRvS2V5ZWRTZXEoKSA6XG4gICAgICAgIHRoaXMudG9TZXRTZXEoKTtcbiAgICB9LFxuXG4gICAgdG9TdGFjazogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBVc2UgTGF0ZSBCaW5kaW5nIGhlcmUgdG8gc29sdmUgdGhlIGNpcmN1bGFyIGRlcGVuZGVuY3kuXG4gICAgICByZXR1cm4gU3RhY2soaXNLZXllZCh0aGlzKSA/IHRoaXMudmFsdWVTZXEoKSA6IHRoaXMpO1xuICAgIH0sXG5cbiAgICB0b0xpc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gVXNlIExhdGUgQmluZGluZyBoZXJlIHRvIHNvbHZlIHRoZSBjaXJjdWxhciBkZXBlbmRlbmN5LlxuICAgICAgcmV0dXJuIExpc3QoaXNLZXllZCh0aGlzKSA/IHRoaXMudmFsdWVTZXEoKSA6IHRoaXMpO1xuICAgIH0sXG5cblxuICAgIC8vICMjIyBDb21tb24gSmF2YVNjcmlwdCBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzXG5cbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJ1tJdGVyYWJsZV0nO1xuICAgIH0sXG5cbiAgICBfX3RvU3RyaW5nOiBmdW5jdGlvbihoZWFkLCB0YWlsKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybiBoZWFkICsgdGFpbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoZWFkICsgJyAnICsgdGhpcy50b1NlcSgpLm1hcCh0aGlzLl9fdG9TdHJpbmdNYXBwZXIpLmpvaW4oJywgJykgKyAnICcgKyB0YWlsO1xuICAgIH0sXG5cblxuICAgIC8vICMjIyBFUzYgQ29sbGVjdGlvbiBtZXRob2RzIChFUzYgQXJyYXkgYW5kIE1hcClcblxuICAgIGNvbmNhdDogZnVuY3Rpb24oKSB7dmFyIHZhbHVlcyA9IFNMSUNFJDAuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIGNvbmNhdEZhY3RvcnkodGhpcywgdmFsdWVzKSk7XG4gICAgfSxcblxuICAgIGluY2x1ZGVzOiBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc29tZShmdW5jdGlvbih2YWx1ZSApIHtyZXR1cm4gaXModmFsdWUsIHNlYXJjaFZhbHVlKX0pO1xuICAgIH0sXG5cbiAgICBlbnRyaWVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9faXRlcmF0b3IoSVRFUkFURV9FTlRSSUVTKTtcbiAgICB9LFxuXG4gICAgZXZlcnk6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgYXNzZXJ0Tm90SW5maW5pdGUodGhpcy5zaXplKTtcbiAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgICB0aGlzLl9faXRlcmF0ZShmdW5jdGlvbih2LCBrLCBjKSAge1xuICAgICAgICBpZiAoIXByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGssIGMpKSB7XG4gICAgICAgICAgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH0sXG5cbiAgICBmaWx0ZXI6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIGZpbHRlckZhY3RvcnkodGhpcywgcHJlZGljYXRlLCBjb250ZXh0LCB0cnVlKSk7XG4gICAgfSxcblxuICAgIGZpbmQ6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHZhciBlbnRyeSA9IHRoaXMuZmluZEVudHJ5KHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgICByZXR1cm4gZW50cnkgPyBlbnRyeVsxXSA6IG5vdFNldFZhbHVlO1xuICAgIH0sXG5cbiAgICBmb3JFYWNoOiBmdW5jdGlvbihzaWRlRWZmZWN0LCBjb250ZXh0KSB7XG4gICAgICBhc3NlcnROb3RJbmZpbml0ZSh0aGlzLnNpemUpO1xuICAgICAgcmV0dXJuIHRoaXMuX19pdGVyYXRlKGNvbnRleHQgPyBzaWRlRWZmZWN0LmJpbmQoY29udGV4dCkgOiBzaWRlRWZmZWN0KTtcbiAgICB9LFxuXG4gICAgam9pbjogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgICBhc3NlcnROb3RJbmZpbml0ZSh0aGlzLnNpemUpO1xuICAgICAgc2VwYXJhdG9yID0gc2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyAnJyArIHNlcGFyYXRvciA6ICcsJztcbiAgICAgIHZhciBqb2luZWQgPSAnJztcbiAgICAgIHZhciBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuX19pdGVyYXRlKGZ1bmN0aW9uKHYgKSB7XG4gICAgICAgIGlzRmlyc3QgPyAoaXNGaXJzdCA9IGZhbHNlKSA6IChqb2luZWQgKz0gc2VwYXJhdG9yKTtcbiAgICAgICAgam9pbmVkICs9IHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkID8gdi50b1N0cmluZygpIDogJyc7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBqb2luZWQ7XG4gICAgfSxcblxuICAgIGtleXM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19pdGVyYXRvcihJVEVSQVRFX0tFWVMpO1xuICAgIH0sXG5cbiAgICBtYXA6IGZ1bmN0aW9uKG1hcHBlciwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIG1hcEZhY3RvcnkodGhpcywgbWFwcGVyLCBjb250ZXh0KSk7XG4gICAgfSxcblxuICAgIHJlZHVjZTogZnVuY3Rpb24ocmVkdWNlciwgaW5pdGlhbFJlZHVjdGlvbiwgY29udGV4dCkge1xuICAgICAgYXNzZXJ0Tm90SW5maW5pdGUodGhpcy5zaXplKTtcbiAgICAgIHZhciByZWR1Y3Rpb247XG4gICAgICB2YXIgdXNlRmlyc3Q7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdXNlRmlyc3QgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVkdWN0aW9uID0gaW5pdGlhbFJlZHVjdGlvbjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19pdGVyYXRlKGZ1bmN0aW9uKHYsIGssIGMpICB7XG4gICAgICAgIGlmICh1c2VGaXJzdCkge1xuICAgICAgICAgIHVzZUZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgcmVkdWN0aW9uID0gdjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWR1Y3Rpb24gPSByZWR1Y2VyLmNhbGwoY29udGV4dCwgcmVkdWN0aW9uLCB2LCBrLCBjKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVkdWN0aW9uO1xuICAgIH0sXG5cbiAgICByZWR1Y2VSaWdodDogZnVuY3Rpb24ocmVkdWNlciwgaW5pdGlhbFJlZHVjdGlvbiwgY29udGV4dCkge1xuICAgICAgdmFyIHJldmVyc2VkID0gdGhpcy50b0tleWVkU2VxKCkucmV2ZXJzZSgpO1xuICAgICAgcmV0dXJuIHJldmVyc2VkLnJlZHVjZS5hcHBseShyZXZlcnNlZCwgYXJndW1lbnRzKTtcbiAgICB9LFxuXG4gICAgcmV2ZXJzZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgcmV2ZXJzZUZhY3RvcnkodGhpcywgdHJ1ZSkpO1xuICAgIH0sXG5cbiAgICBzbGljZTogZnVuY3Rpb24oYmVnaW4sIGVuZCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHNsaWNlRmFjdG9yeSh0aGlzLCBiZWdpbiwgZW5kLCB0cnVlKSk7XG4gICAgfSxcblxuICAgIHNvbWU6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuICF0aGlzLmV2ZXJ5KG5vdChwcmVkaWNhdGUpLCBjb250ZXh0KTtcbiAgICB9LFxuXG4gICAgc29ydDogZnVuY3Rpb24oY29tcGFyYXRvcikge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHNvcnRGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IpKTtcbiAgICB9LFxuXG4gICAgdmFsdWVzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9faXRlcmF0b3IoSVRFUkFURV9WQUxVRVMpO1xuICAgIH0sXG5cblxuICAgIC8vICMjIyBNb3JlIHNlcXVlbnRpYWwgbWV0aG9kc1xuXG4gICAgYnV0TGFzdDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGljZSgwLCAtMSk7XG4gICAgfSxcblxuICAgIGlzRW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2l6ZSAhPT0gdW5kZWZpbmVkID8gdGhpcy5zaXplID09PSAwIDogIXRoaXMuc29tZShmdW5jdGlvbigpICB7cmV0dXJuIHRydWV9KTtcbiAgICB9LFxuXG4gICAgY291bnQ6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIGVuc3VyZVNpemUoXG4gICAgICAgIHByZWRpY2F0ZSA/IHRoaXMudG9TZXEoKS5maWx0ZXIocHJlZGljYXRlLCBjb250ZXh0KSA6IHRoaXNcbiAgICAgICk7XG4gICAgfSxcblxuICAgIGNvdW50Qnk6IGZ1bmN0aW9uKGdyb3VwZXIsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBjb3VudEJ5RmFjdG9yeSh0aGlzLCBncm91cGVyLCBjb250ZXh0KTtcbiAgICB9LFxuXG4gICAgZXF1YWxzOiBmdW5jdGlvbihvdGhlcikge1xuICAgICAgcmV0dXJuIGRlZXBFcXVhbCh0aGlzLCBvdGhlcik7XG4gICAgfSxcblxuICAgIGVudHJ5U2VxOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpdGVyYWJsZSA9IHRoaXM7XG4gICAgICBpZiAoaXRlcmFibGUuX2NhY2hlKSB7XG4gICAgICAgIC8vIFdlIGNhY2hlIGFzIGFuIGVudHJpZXMgYXJyYXksIHNvIHdlIGNhbiBqdXN0IHJldHVybiB0aGUgY2FjaGUhXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXlTZXEoaXRlcmFibGUuX2NhY2hlKTtcbiAgICAgIH1cbiAgICAgIHZhciBlbnRyaWVzU2VxdWVuY2UgPSBpdGVyYWJsZS50b1NlcSgpLm1hcChlbnRyeU1hcHBlcikudG9JbmRleGVkU2VxKCk7XG4gICAgICBlbnRyaWVzU2VxdWVuY2UuZnJvbUVudHJ5U2VxID0gZnVuY3Rpb24oKSAge3JldHVybiBpdGVyYWJsZS50b1NlcSgpfTtcbiAgICAgIHJldHVybiBlbnRyaWVzU2VxdWVuY2U7XG4gICAgfSxcblxuICAgIGZpbHRlck5vdDogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXIobm90KHByZWRpY2F0ZSksIGNvbnRleHQpO1xuICAgIH0sXG5cbiAgICBmaW5kRW50cnk6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHZhciBmb3VuZCA9IG5vdFNldFZhbHVlO1xuICAgICAgdGhpcy5fX2l0ZXJhdGUoZnVuY3Rpb24odiwgaywgYykgIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGssIGMpKSB7XG4gICAgICAgICAgZm91bmQgPSBbaywgdl07XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9LFxuXG4gICAgZmluZEtleTogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgZW50cnkgPSB0aGlzLmZpbmRFbnRyeShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5WzBdO1xuICAgIH0sXG5cbiAgICBmaW5kTGFzdDogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0LCBub3RTZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMudG9LZXllZFNlcSgpLnJldmVyc2UoKS5maW5kKHByZWRpY2F0ZSwgY29udGV4dCwgbm90U2V0VmFsdWUpO1xuICAgIH0sXG5cbiAgICBmaW5kTGFzdEVudHJ5OiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQsIG5vdFNldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy50b0tleWVkU2VxKCkucmV2ZXJzZSgpLmZpbmRFbnRyeShwcmVkaWNhdGUsIGNvbnRleHQsIG5vdFNldFZhbHVlKTtcbiAgICB9LFxuXG4gICAgZmluZExhc3RLZXk6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9LZXllZFNlcSgpLnJldmVyc2UoKS5maW5kS2V5KHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgfSxcblxuICAgIGZpcnN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbmQocmV0dXJuVHJ1ZSk7XG4gICAgfSxcblxuICAgIGZsYXRNYXA6IGZ1bmN0aW9uKG1hcHBlciwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIGZsYXRNYXBGYWN0b3J5KHRoaXMsIG1hcHBlciwgY29udGV4dCkpO1xuICAgIH0sXG5cbiAgICBmbGF0dGVuOiBmdW5jdGlvbihkZXB0aCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIGZsYXR0ZW5GYWN0b3J5KHRoaXMsIGRlcHRoLCB0cnVlKSk7XG4gICAgfSxcblxuICAgIGZyb21FbnRyeVNlcTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IEZyb21FbnRyaWVzU2VxdWVuY2UodGhpcyk7XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24oc2VhcmNoS2V5LCBub3RTZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZChmdW5jdGlvbihfLCBrZXkpICB7cmV0dXJuIGlzKGtleSwgc2VhcmNoS2V5KX0sIHVuZGVmaW5lZCwgbm90U2V0VmFsdWUpO1xuICAgIH0sXG5cbiAgICBnZXRJbjogZnVuY3Rpb24oc2VhcmNoS2V5UGF0aCwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHZhciBuZXN0ZWQgPSB0aGlzO1xuICAgICAgLy8gTm90ZTogaW4gYW4gRVM2IGVudmlyb25tZW50LCB3ZSB3b3VsZCBwcmVmZXI6XG4gICAgICAvLyBmb3IgKHZhciBrZXkgb2Ygc2VhcmNoS2V5UGF0aCkge1xuICAgICAgdmFyIGl0ZXIgPSBmb3JjZUl0ZXJhdG9yKHNlYXJjaEtleVBhdGgpO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgdmFyIGtleSA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5lc3RlZCA9IG5lc3RlZCAmJiBuZXN0ZWQuZ2V0ID8gbmVzdGVkLmdldChrZXksIE5PVF9TRVQpIDogTk9UX1NFVDtcbiAgICAgICAgaWYgKG5lc3RlZCA9PT0gTk9UX1NFVCkge1xuICAgICAgICAgIHJldHVybiBub3RTZXRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5lc3RlZDtcbiAgICB9LFxuXG4gICAgZ3JvdXBCeTogZnVuY3Rpb24oZ3JvdXBlciwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIGdyb3VwQnlGYWN0b3J5KHRoaXMsIGdyb3VwZXIsIGNvbnRleHQpO1xuICAgIH0sXG5cbiAgICBoYXM6IGZ1bmN0aW9uKHNlYXJjaEtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KHNlYXJjaEtleSwgTk9UX1NFVCkgIT09IE5PVF9TRVQ7XG4gICAgfSxcblxuICAgIGhhc0luOiBmdW5jdGlvbihzZWFyY2hLZXlQYXRoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbihzZWFyY2hLZXlQYXRoLCBOT1RfU0VUKSAhPT0gTk9UX1NFVDtcbiAgICB9LFxuXG4gICAgaXNTdWJzZXQ6IGZ1bmN0aW9uKGl0ZXIpIHtcbiAgICAgIGl0ZXIgPSB0eXBlb2YgaXRlci5pbmNsdWRlcyA9PT0gJ2Z1bmN0aW9uJyA/IGl0ZXIgOiBJdGVyYWJsZShpdGVyKTtcbiAgICAgIHJldHVybiB0aGlzLmV2ZXJ5KGZ1bmN0aW9uKHZhbHVlICkge3JldHVybiBpdGVyLmluY2x1ZGVzKHZhbHVlKX0pO1xuICAgIH0sXG5cbiAgICBpc1N1cGVyc2V0OiBmdW5jdGlvbihpdGVyKSB7XG4gICAgICBpdGVyID0gdHlwZW9mIGl0ZXIuaXNTdWJzZXQgPT09ICdmdW5jdGlvbicgPyBpdGVyIDogSXRlcmFibGUoaXRlcik7XG4gICAgICByZXR1cm4gaXRlci5pc1N1YnNldCh0aGlzKTtcbiAgICB9LFxuXG4gICAga2V5T2Y6IGZ1bmN0aW9uKHNlYXJjaFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kS2V5KGZ1bmN0aW9uKHZhbHVlICkge3JldHVybiBpcyh2YWx1ZSwgc2VhcmNoVmFsdWUpfSk7XG4gICAgfSxcblxuICAgIGtleVNlcTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1NlcSgpLm1hcChrZXlNYXBwZXIpLnRvSW5kZXhlZFNlcSgpO1xuICAgIH0sXG5cbiAgICBsYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvU2VxKCkucmV2ZXJzZSgpLmZpcnN0KCk7XG4gICAgfSxcblxuICAgIGxhc3RLZXlPZjogZnVuY3Rpb24oc2VhcmNoVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvS2V5ZWRTZXEoKS5yZXZlcnNlKCkua2V5T2Yoc2VhcmNoVmFsdWUpO1xuICAgIH0sXG5cbiAgICBtYXg6IGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiBtYXhGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IpO1xuICAgIH0sXG5cbiAgICBtYXhCeTogZnVuY3Rpb24obWFwcGVyLCBjb21wYXJhdG9yKSB7XG4gICAgICByZXR1cm4gbWF4RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yLCBtYXBwZXIpO1xuICAgIH0sXG5cbiAgICBtaW46IGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiBtYXhGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IgPyBuZWcoY29tcGFyYXRvcikgOiBkZWZhdWx0TmVnQ29tcGFyYXRvcik7XG4gICAgfSxcblxuICAgIG1pbkJ5OiBmdW5jdGlvbihtYXBwZXIsIGNvbXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiBtYXhGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IgPyBuZWcoY29tcGFyYXRvcikgOiBkZWZhdWx0TmVnQ29tcGFyYXRvciwgbWFwcGVyKTtcbiAgICB9LFxuXG4gICAgcmVzdDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGljZSgxKTtcbiAgICB9LFxuXG4gICAgc2tpcDogZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGljZShNYXRoLm1heCgwLCBhbW91bnQpKTtcbiAgICB9LFxuXG4gICAgc2tpcExhc3Q6IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHRoaXMudG9TZXEoKS5yZXZlcnNlKCkuc2tpcChhbW91bnQpLnJldmVyc2UoKSk7XG4gICAgfSxcblxuICAgIHNraXBXaGlsZTogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgc2tpcFdoaWxlRmFjdG9yeSh0aGlzLCBwcmVkaWNhdGUsIGNvbnRleHQsIHRydWUpKTtcbiAgICB9LFxuXG4gICAgc2tpcFVudGlsOiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNraXBXaGlsZShub3QocHJlZGljYXRlKSwgY29udGV4dCk7XG4gICAgfSxcblxuICAgIHNvcnRCeTogZnVuY3Rpb24obWFwcGVyLCBjb21wYXJhdG9yKSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgc29ydEZhY3RvcnkodGhpcywgY29tcGFyYXRvciwgbWFwcGVyKSk7XG4gICAgfSxcblxuICAgIHRha2U6IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpY2UoMCwgTWF0aC5tYXgoMCwgYW1vdW50KSk7XG4gICAgfSxcblxuICAgIHRha2VMYXN0OiBmdW5jdGlvbihhbW91bnQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCB0aGlzLnRvU2VxKCkucmV2ZXJzZSgpLnRha2UoYW1vdW50KS5yZXZlcnNlKCkpO1xuICAgIH0sXG5cbiAgICB0YWtlV2hpbGU6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHRha2VXaGlsZUZhY3RvcnkodGhpcywgcHJlZGljYXRlLCBjb250ZXh0KSk7XG4gICAgfSxcblxuICAgIHRha2VVbnRpbDogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy50YWtlV2hpbGUobm90KHByZWRpY2F0ZSksIGNvbnRleHQpO1xuICAgIH0sXG5cbiAgICB2YWx1ZVNlcTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b0luZGV4ZWRTZXEoKTtcbiAgICB9LFxuXG5cbiAgICAvLyAjIyMgSGFzaGFibGUgT2JqZWN0XG5cbiAgICBoYXNoQ29kZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2hhc2ggfHwgKHRoaXMuX19oYXNoID0gaGFzaEl0ZXJhYmxlKHRoaXMpKTtcbiAgICB9XG5cblxuICAgIC8vICMjIyBJbnRlcm5hbFxuXG4gICAgLy8gYWJzdHJhY3QgX19pdGVyYXRlKGZuLCByZXZlcnNlKVxuXG4gICAgLy8gYWJzdHJhY3QgX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKVxuICB9KTtcblxuICAvLyB2YXIgSVNfSVRFUkFCTEVfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9JVEVSQUJMRV9fQEAnO1xuICAvLyB2YXIgSVNfS0VZRURfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9LRVlFRF9fQEAnO1xuICAvLyB2YXIgSVNfSU5ERVhFRF9TRU5USU5FTCA9ICdAQF9fSU1NVVRBQkxFX0lOREVYRURfX0BAJztcbiAgLy8gdmFyIElTX09SREVSRURfU0VOVElORUwgPSAnQEBfX0lNTVVUQUJMRV9PUkRFUkVEX19AQCc7XG5cbiAgdmFyIEl0ZXJhYmxlUHJvdG90eXBlID0gSXRlcmFibGUucHJvdG90eXBlO1xuICBJdGVyYWJsZVByb3RvdHlwZVtJU19JVEVSQUJMRV9TRU5USU5FTF0gPSB0cnVlO1xuICBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl9TWU1CT0xdID0gSXRlcmFibGVQcm90b3R5cGUudmFsdWVzO1xuICBJdGVyYWJsZVByb3RvdHlwZS5fX3RvSlMgPSBJdGVyYWJsZVByb3RvdHlwZS50b0FycmF5O1xuICBJdGVyYWJsZVByb3RvdHlwZS5fX3RvU3RyaW5nTWFwcGVyID0gcXVvdGVTdHJpbmc7XG4gIEl0ZXJhYmxlUHJvdG90eXBlLmluc3BlY3QgPVxuICBJdGVyYWJsZVByb3RvdHlwZS50b1NvdXJjZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy50b1N0cmluZygpOyB9O1xuICBJdGVyYWJsZVByb3RvdHlwZS5jaGFpbiA9IEl0ZXJhYmxlUHJvdG90eXBlLmZsYXRNYXA7XG4gIEl0ZXJhYmxlUHJvdG90eXBlLmNvbnRhaW5zID0gSXRlcmFibGVQcm90b3R5cGUuaW5jbHVkZXM7XG5cbiAgbWl4aW4oS2V5ZWRJdGVyYWJsZSwge1xuXG4gICAgLy8gIyMjIE1vcmUgc2VxdWVudGlhbCBtZXRob2RzXG5cbiAgICBmbGlwOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBmbGlwRmFjdG9yeSh0aGlzKSk7XG4gICAgfSxcblxuICAgIG1hcEVudHJpZXM6IGZ1bmN0aW9uKG1hcHBlciwgY29udGV4dCkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsXG4gICAgICAgIHRoaXMudG9TZXEoKS5tYXAoXG4gICAgICAgICAgZnVuY3Rpb24odiwgaykgIHtyZXR1cm4gbWFwcGVyLmNhbGwoY29udGV4dCwgW2ssIHZdLCBpdGVyYXRpb25zKyssIHRoaXMkMCl9XG4gICAgICAgICkuZnJvbUVudHJ5U2VxKClcbiAgICAgICk7XG4gICAgfSxcblxuICAgIG1hcEtleXM6IGZ1bmN0aW9uKG1hcHBlciwgY29udGV4dCkge3ZhciB0aGlzJDAgPSB0aGlzO1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsXG4gICAgICAgIHRoaXMudG9TZXEoKS5mbGlwKCkubWFwKFxuICAgICAgICAgIGZ1bmN0aW9uKGssIHYpICB7cmV0dXJuIG1hcHBlci5jYWxsKGNvbnRleHQsIGssIHYsIHRoaXMkMCl9XG4gICAgICAgICkuZmxpcCgpXG4gICAgICApO1xuICAgIH1cblxuICB9KTtcblxuICB2YXIgS2V5ZWRJdGVyYWJsZVByb3RvdHlwZSA9IEtleWVkSXRlcmFibGUucHJvdG90eXBlO1xuICBLZXllZEl0ZXJhYmxlUHJvdG90eXBlW0lTX0tFWUVEX1NFTlRJTkVMXSA9IHRydWU7XG4gIEtleWVkSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JfU1lNQk9MXSA9IEl0ZXJhYmxlUHJvdG90eXBlLmVudHJpZXM7XG4gIEtleWVkSXRlcmFibGVQcm90b3R5cGUuX190b0pTID0gSXRlcmFibGVQcm90b3R5cGUudG9PYmplY3Q7XG4gIEtleWVkSXRlcmFibGVQcm90b3R5cGUuX190b1N0cmluZ01hcHBlciA9IGZ1bmN0aW9uKHYsIGspICB7cmV0dXJuIEpTT04uc3RyaW5naWZ5KGspICsgJzogJyArIHF1b3RlU3RyaW5nKHYpfTtcblxuXG5cbiAgbWl4aW4oSW5kZXhlZEl0ZXJhYmxlLCB7XG5cbiAgICAvLyAjIyMgQ29udmVyc2lvbiB0byBvdGhlciB0eXBlc1xuXG4gICAgdG9LZXllZFNlcTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IFRvS2V5ZWRTZXF1ZW5jZSh0aGlzLCBmYWxzZSk7XG4gICAgfSxcblxuXG4gICAgLy8gIyMjIEVTNiBDb2xsZWN0aW9uIG1ldGhvZHMgKEVTNiBBcnJheSBhbmQgTWFwKVxuXG4gICAgZmlsdGVyOiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCBmaWx0ZXJGYWN0b3J5KHRoaXMsIHByZWRpY2F0ZSwgY29udGV4dCwgZmFsc2UpKTtcbiAgICB9LFxuXG4gICAgZmluZEluZGV4OiBmdW5jdGlvbihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgIHZhciBlbnRyeSA9IHRoaXMuZmluZEVudHJ5KHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgICByZXR1cm4gZW50cnkgPyBlbnRyeVswXSA6IC0xO1xuICAgIH0sXG5cbiAgICBpbmRleE9mOiBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgdmFyIGtleSA9IHRoaXMua2V5T2Yoc2VhcmNoVmFsdWUpO1xuICAgICAgcmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID8gLTEgOiBrZXk7XG4gICAgfSxcblxuICAgIGxhc3RJbmRleE9mOiBmdW5jdGlvbihzZWFyY2hWYWx1ZSkge1xuICAgICAgdmFyIGtleSA9IHRoaXMubGFzdEtleU9mKHNlYXJjaFZhbHVlKTtcbiAgICAgIHJldHVybiBrZXkgPT09IHVuZGVmaW5lZCA/IC0xIDoga2V5O1xuICAgIH0sXG5cbiAgICByZXZlcnNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCByZXZlcnNlRmFjdG9yeSh0aGlzLCBmYWxzZSkpO1xuICAgIH0sXG5cbiAgICBzbGljZTogZnVuY3Rpb24oYmVnaW4sIGVuZCkge1xuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHNsaWNlRmFjdG9yeSh0aGlzLCBiZWdpbiwgZW5kLCBmYWxzZSkpO1xuICAgIH0sXG5cbiAgICBzcGxpY2U6IGZ1bmN0aW9uKGluZGV4LCByZW1vdmVOdW0gLyosIC4uLnZhbHVlcyovKSB7XG4gICAgICB2YXIgbnVtQXJncyA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICByZW1vdmVOdW0gPSBNYXRoLm1heChyZW1vdmVOdW0gfCAwLCAwKTtcbiAgICAgIGlmIChudW1BcmdzID09PSAwIHx8IChudW1BcmdzID09PSAyICYmICFyZW1vdmVOdW0pKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgLy8gSWYgaW5kZXggaXMgbmVnYXRpdmUsIGl0IHNob3VsZCByZXNvbHZlIHJlbGF0aXZlIHRvIHRoZSBzaXplIG9mIHRoZVxuICAgICAgLy8gY29sbGVjdGlvbi4gSG93ZXZlciBzaXplIG1heSBiZSBleHBlbnNpdmUgdG8gY29tcHV0ZSBpZiBub3QgY2FjaGVkLCBzb1xuICAgICAgLy8gb25seSBjYWxsIGNvdW50KCkgaWYgdGhlIG51bWJlciBpcyBpbiBmYWN0IG5lZ2F0aXZlLlxuICAgICAgaW5kZXggPSByZXNvbHZlQmVnaW4oaW5kZXgsIGluZGV4IDwgMCA/IHRoaXMuY291bnQoKSA6IHRoaXMuc2l6ZSk7XG4gICAgICB2YXIgc3BsaWNlZCA9IHRoaXMuc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgcmV0dXJuIHJlaWZ5KFxuICAgICAgICB0aGlzLFxuICAgICAgICBudW1BcmdzID09PSAxID9cbiAgICAgICAgICBzcGxpY2VkIDpcbiAgICAgICAgICBzcGxpY2VkLmNvbmNhdChhcnJDb3B5KGFyZ3VtZW50cywgMiksIHRoaXMuc2xpY2UoaW5kZXggKyByZW1vdmVOdW0pKVxuICAgICAgKTtcbiAgICB9LFxuXG5cbiAgICAvLyAjIyMgTW9yZSBjb2xsZWN0aW9uIG1ldGhvZHNcblxuICAgIGZpbmRMYXN0SW5kZXg6IGZ1bmN0aW9uKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgdmFyIGVudHJ5ID0gdGhpcy5maW5kTGFzdEVudHJ5KHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgICByZXR1cm4gZW50cnkgPyBlbnRyeVswXSA6IC0xO1xuICAgIH0sXG5cbiAgICBmaXJzdDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoMCk7XG4gICAgfSxcblxuICAgIGZsYXR0ZW46IGZ1bmN0aW9uKGRlcHRoKSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgZmxhdHRlbkZhY3RvcnkodGhpcywgZGVwdGgsIGZhbHNlKSk7XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24oaW5kZXgsIG5vdFNldFZhbHVlKSB7XG4gICAgICBpbmRleCA9IHdyYXBJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICByZXR1cm4gKGluZGV4IDwgMCB8fCAodGhpcy5zaXplID09PSBJbmZpbml0eSB8fFxuICAgICAgICAgICh0aGlzLnNpemUgIT09IHVuZGVmaW5lZCAmJiBpbmRleCA+IHRoaXMuc2l6ZSkpKSA/XG4gICAgICAgIG5vdFNldFZhbHVlIDpcbiAgICAgICAgdGhpcy5maW5kKGZ1bmN0aW9uKF8sIGtleSkgIHtyZXR1cm4ga2V5ID09PSBpbmRleH0sIHVuZGVmaW5lZCwgbm90U2V0VmFsdWUpO1xuICAgIH0sXG5cbiAgICBoYXM6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICBpbmRleCA9IHdyYXBJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgICByZXR1cm4gaW5kZXggPj0gMCAmJiAodGhpcy5zaXplICE9PSB1bmRlZmluZWQgP1xuICAgICAgICB0aGlzLnNpemUgPT09IEluZmluaXR5IHx8IGluZGV4IDwgdGhpcy5zaXplIDpcbiAgICAgICAgdGhpcy5pbmRleE9mKGluZGV4KSAhPT0gLTFcbiAgICAgICk7XG4gICAgfSxcblxuICAgIGludGVycG9zZTogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgaW50ZXJwb3NlRmFjdG9yeSh0aGlzLCBzZXBhcmF0b3IpKTtcbiAgICB9LFxuXG4gICAgaW50ZXJsZWF2ZTogZnVuY3Rpb24oLyouLi5pdGVyYWJsZXMqLykge1xuICAgICAgdmFyIGl0ZXJhYmxlcyA9IFt0aGlzXS5jb25jYXQoYXJyQ29weShhcmd1bWVudHMpKTtcbiAgICAgIHZhciB6aXBwZWQgPSB6aXBXaXRoRmFjdG9yeSh0aGlzLnRvU2VxKCksIEluZGV4ZWRTZXEub2YsIGl0ZXJhYmxlcyk7XG4gICAgICB2YXIgaW50ZXJsZWF2ZWQgPSB6aXBwZWQuZmxhdHRlbih0cnVlKTtcbiAgICAgIGlmICh6aXBwZWQuc2l6ZSkge1xuICAgICAgICBpbnRlcmxlYXZlZC5zaXplID0gemlwcGVkLnNpemUgKiBpdGVyYWJsZXMubGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlaWZ5KHRoaXMsIGludGVybGVhdmVkKTtcbiAgICB9LFxuXG4gICAga2V5U2VxOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBSYW5nZSgwLCB0aGlzLnNpemUpO1xuICAgIH0sXG5cbiAgICBsYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgtMSk7XG4gICAgfSxcblxuICAgIHNraXBXaGlsZTogZnVuY3Rpb24ocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgc2tpcFdoaWxlRmFjdG9yeSh0aGlzLCBwcmVkaWNhdGUsIGNvbnRleHQsIGZhbHNlKSk7XG4gICAgfSxcblxuICAgIHppcDogZnVuY3Rpb24oLyosIC4uLml0ZXJhYmxlcyAqLykge1xuICAgICAgdmFyIGl0ZXJhYmxlcyA9IFt0aGlzXS5jb25jYXQoYXJyQ29weShhcmd1bWVudHMpKTtcbiAgICAgIHJldHVybiByZWlmeSh0aGlzLCB6aXBXaXRoRmFjdG9yeSh0aGlzLCBkZWZhdWx0WmlwcGVyLCBpdGVyYWJsZXMpKTtcbiAgICB9LFxuXG4gICAgemlwV2l0aDogZnVuY3Rpb24oemlwcGVyLyosIC4uLml0ZXJhYmxlcyAqLykge1xuICAgICAgdmFyIGl0ZXJhYmxlcyA9IGFyckNvcHkoYXJndW1lbnRzKTtcbiAgICAgIGl0ZXJhYmxlc1swXSA9IHRoaXM7XG4gICAgICByZXR1cm4gcmVpZnkodGhpcywgemlwV2l0aEZhY3RvcnkodGhpcywgemlwcGVyLCBpdGVyYWJsZXMpKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgSW5kZXhlZEl0ZXJhYmxlLnByb3RvdHlwZVtJU19JTkRFWEVEX1NFTlRJTkVMXSA9IHRydWU7XG4gIEluZGV4ZWRJdGVyYWJsZS5wcm90b3R5cGVbSVNfT1JERVJFRF9TRU5USU5FTF0gPSB0cnVlO1xuXG5cblxuICBtaXhpbihTZXRJdGVyYWJsZSwge1xuXG4gICAgLy8gIyMjIEVTNiBDb2xsZWN0aW9uIG1ldGhvZHMgKEVTNiBBcnJheSBhbmQgTWFwKVxuXG4gICAgZ2V0OiBmdW5jdGlvbih2YWx1ZSwgbm90U2V0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhcyh2YWx1ZSkgPyB2YWx1ZSA6IG5vdFNldFZhbHVlO1xuICAgIH0sXG5cbiAgICBpbmNsdWRlczogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhcyh2YWx1ZSk7XG4gICAgfSxcblxuXG4gICAgLy8gIyMjIE1vcmUgc2VxdWVudGlhbCBtZXRob2RzXG5cbiAgICBrZXlTZXE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVTZXEoKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgU2V0SXRlcmFibGUucHJvdG90eXBlLmhhcyA9IEl0ZXJhYmxlUHJvdG90eXBlLmluY2x1ZGVzO1xuICBTZXRJdGVyYWJsZS5wcm90b3R5cGUuY29udGFpbnMgPSBTZXRJdGVyYWJsZS5wcm90b3R5cGUuaW5jbHVkZXM7XG5cblxuICAvLyBNaXhpbiBzdWJjbGFzc2VzXG5cbiAgbWl4aW4oS2V5ZWRTZXEsIEtleWVkSXRlcmFibGUucHJvdG90eXBlKTtcbiAgbWl4aW4oSW5kZXhlZFNlcSwgSW5kZXhlZEl0ZXJhYmxlLnByb3RvdHlwZSk7XG4gIG1peGluKFNldFNlcSwgU2V0SXRlcmFibGUucHJvdG90eXBlKTtcblxuICBtaXhpbihLZXllZENvbGxlY3Rpb24sIEtleWVkSXRlcmFibGUucHJvdG90eXBlKTtcbiAgbWl4aW4oSW5kZXhlZENvbGxlY3Rpb24sIEluZGV4ZWRJdGVyYWJsZS5wcm90b3R5cGUpO1xuICBtaXhpbihTZXRDb2xsZWN0aW9uLCBTZXRJdGVyYWJsZS5wcm90b3R5cGUpO1xuXG5cbiAgLy8gI3ByYWdtYSBIZWxwZXIgZnVuY3Rpb25zXG5cbiAgZnVuY3Rpb24ga2V5TWFwcGVyKHYsIGspIHtcbiAgICByZXR1cm4gaztcbiAgfVxuXG4gIGZ1bmN0aW9uIGVudHJ5TWFwcGVyKHYsIGspIHtcbiAgICByZXR1cm4gW2ssIHZdO1xuICB9XG5cbiAgZnVuY3Rpb24gbm90KHByZWRpY2F0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAhcHJlZGljYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbmVnKHByZWRpY2F0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAtcHJlZGljYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcXVvdGVTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IFN0cmluZyh2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWZhdWx0WmlwcGVyKCkge1xuICAgIHJldHVybiBhcnJDb3B5KGFyZ3VtZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWZhdWx0TmVnQ29tcGFyYXRvcihhLCBiKSB7XG4gICAgcmV0dXJuIGEgPCBiID8gMSA6IGEgPiBiID8gLTEgOiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzaEl0ZXJhYmxlKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlLnNpemUgPT09IEluZmluaXR5KSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgdmFyIG9yZGVyZWQgPSBpc09yZGVyZWQoaXRlcmFibGUpO1xuICAgIHZhciBrZXllZCA9IGlzS2V5ZWQoaXRlcmFibGUpO1xuICAgIHZhciBoID0gb3JkZXJlZCA/IDEgOiAwO1xuICAgIHZhciBzaXplID0gaXRlcmFibGUuX19pdGVyYXRlKFxuICAgICAga2V5ZWQgP1xuICAgICAgICBvcmRlcmVkID9cbiAgICAgICAgICBmdW5jdGlvbih2LCBrKSAgeyBoID0gMzEgKiBoICsgaGFzaE1lcmdlKGhhc2godiksIGhhc2goaykpIHwgMDsgfSA6XG4gICAgICAgICAgZnVuY3Rpb24odiwgaykgIHsgaCA9IGggKyBoYXNoTWVyZ2UoaGFzaCh2KSwgaGFzaChrKSkgfCAwOyB9IDpcbiAgICAgICAgb3JkZXJlZCA/XG4gICAgICAgICAgZnVuY3Rpb24odiApIHsgaCA9IDMxICogaCArIGhhc2godikgfCAwOyB9IDpcbiAgICAgICAgICBmdW5jdGlvbih2ICkgeyBoID0gaCArIGhhc2godikgfCAwOyB9XG4gICAgKTtcbiAgICByZXR1cm4gbXVybXVySGFzaE9mU2l6ZShzaXplLCBoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG11cm11ckhhc2hPZlNpemUoc2l6ZSwgaCkge1xuICAgIGggPSBpbXVsKGgsIDB4Q0M5RTJENTEpO1xuICAgIGggPSBpbXVsKGggPDwgMTUgfCBoID4+PiAtMTUsIDB4MUI4NzM1OTMpO1xuICAgIGggPSBpbXVsKGggPDwgMTMgfCBoID4+PiAtMTMsIDUpO1xuICAgIGggPSAoaCArIDB4RTY1NDZCNjQgfCAwKSBeIHNpemU7XG4gICAgaCA9IGltdWwoaCBeIGggPj4+IDE2LCAweDg1RUJDQTZCKTtcbiAgICBoID0gaW11bChoIF4gaCA+Pj4gMTMsIDB4QzJCMkFFMzUpO1xuICAgIGggPSBzbWkoaCBeIGggPj4+IDE2KTtcbiAgICByZXR1cm4gaDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc2hNZXJnZShhLCBiKSB7XG4gICAgcmV0dXJuIGEgXiBiICsgMHg5RTM3NzlCOSArIChhIDw8IDYpICsgKGEgPj4gMikgfCAwOyAvLyBpbnRcbiAgfVxuXG4gIHZhciBJbW11dGFibGUgPSB7XG5cbiAgICBJdGVyYWJsZTogSXRlcmFibGUsXG5cbiAgICBTZXE6IFNlcSxcbiAgICBDb2xsZWN0aW9uOiBDb2xsZWN0aW9uLFxuICAgIE1hcDogTWFwLFxuICAgIE9yZGVyZWRNYXA6IE9yZGVyZWRNYXAsXG4gICAgTGlzdDogTGlzdCxcbiAgICBTdGFjazogU3RhY2ssXG4gICAgU2V0OiBTZXQsXG4gICAgT3JkZXJlZFNldDogT3JkZXJlZFNldCxcblxuICAgIFJlY29yZDogUmVjb3JkLFxuICAgIFJhbmdlOiBSYW5nZSxcbiAgICBSZXBlYXQ6IFJlcGVhdCxcblxuICAgIGlzOiBpcyxcbiAgICBmcm9tSlM6IGZyb21KU1xuXG4gIH07XG5cbiAgcmV0dXJuIEltbXV0YWJsZTtcblxufSkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vaW1tdXRhYmxlL2Rpc3QvaW1tdXRhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbnZhciBBcHBBY3Rpb25UeXBlcyA9IHtcblx0U0VUX0FQUF9NT0RVTEU6IFwiU0VUX0FQUF9NT0RVTEVcIixcblx0U0VUX0FQUF9ST0xFUzogXCJTRVRfQVBQX1JPTEVTXCJcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFwcEFjdGlvblR5cGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29uc3RhbnRzL0FwcEFjdGlvblR5cGVzLmpzeFxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZmx1eCA9IHJlcXVpcmUoXCJmbHV4XCIpO1xuXG4vKipcbiAqINCt0YLQviDQtNC40YHQv9C10YLRh9C10YAsINC60L7RgtC+0YDRi9C5INGA0LDRgdGB0YvQu9Cw0LXRgiBBY3Rpb25zINCy0YHQtdC8IFN0b3JlLlxuICog0J7QvSDQtNC10YTQvtC70YLQvdGL0LkuXG4qL1xuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IF9mbHV4LkRpc3BhdGNoZXIoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0Rpc3BhdGNoZXIuanN4XG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMuRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4vbGliL0Rpc3BhdGNoZXInKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vZmx1eC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBEaXNwYXRjaGVyXG4gKlxuICogQHByZXZlbnRNdW5nZVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxudmFyIF9wcmVmaXggPSAnSURfJztcblxuLyoqXG4gKiBEaXNwYXRjaGVyIGlzIHVzZWQgdG8gYnJvYWRjYXN0IHBheWxvYWRzIHRvIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLiBUaGlzIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSBnZW5lcmljIHB1Yi1zdWIgc3lzdGVtcyBpbiB0d28gd2F5czpcbiAqXG4gKiAgIDEpIENhbGxiYWNrcyBhcmUgbm90IHN1YnNjcmliZWQgdG8gcGFydGljdWxhciBldmVudHMuIEV2ZXJ5IHBheWxvYWQgaXNcbiAqICAgICAgZGlzcGF0Y2hlZCB0byBldmVyeSByZWdpc3RlcmVkIGNhbGxiYWNrLlxuICogICAyKSBDYWxsYmFja3MgY2FuIGJlIGRlZmVycmVkIGluIHdob2xlIG9yIHBhcnQgdW50aWwgb3RoZXIgY2FsbGJhY2tzIGhhdmVcbiAqICAgICAgYmVlbiBleGVjdXRlZC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgY29uc2lkZXIgdGhpcyBoeXBvdGhldGljYWwgZmxpZ2h0IGRlc3RpbmF0aW9uIGZvcm0sIHdoaWNoXG4gKiBzZWxlY3RzIGEgZGVmYXVsdCBjaXR5IHdoZW4gYSBjb3VudHJ5IGlzIHNlbGVjdGVkOlxuICpcbiAqICAgdmFyIGZsaWdodERpc3BhdGNoZXIgPSBuZXcgRGlzcGF0Y2hlcigpO1xuICpcbiAqICAgLy8gS2VlcHMgdHJhY2sgb2Ygd2hpY2ggY291bnRyeSBpcyBzZWxlY3RlZFxuICogICB2YXIgQ291bnRyeVN0b3JlID0ge2NvdW50cnk6IG51bGx9O1xuICpcbiAqICAgLy8gS2VlcHMgdHJhY2sgb2Ygd2hpY2ggY2l0eSBpcyBzZWxlY3RlZFxuICogICB2YXIgQ2l0eVN0b3JlID0ge2NpdHk6IG51bGx9O1xuICpcbiAqICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIGJhc2UgZmxpZ2h0IHByaWNlIG9mIHRoZSBzZWxlY3RlZCBjaXR5XG4gKiAgIHZhciBGbGlnaHRQcmljZVN0b3JlID0ge3ByaWNlOiBudWxsfVxuICpcbiAqIFdoZW4gYSB1c2VyIGNoYW5nZXMgdGhlIHNlbGVjdGVkIGNpdHksIHdlIGRpc3BhdGNoIHRoZSBwYXlsb2FkOlxuICpcbiAqICAgZmxpZ2h0RGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gKiAgICAgYWN0aW9uVHlwZTogJ2NpdHktdXBkYXRlJyxcbiAqICAgICBzZWxlY3RlZENpdHk6ICdwYXJpcydcbiAqICAgfSk7XG4gKlxuICogVGhpcyBwYXlsb2FkIGlzIGRpZ2VzdGVkIGJ5IGBDaXR5U3RvcmVgOlxuICpcbiAqICAgZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgaWYgKHBheWxvYWQuYWN0aW9uVHlwZSA9PT0gJ2NpdHktdXBkYXRlJykge1xuICogICAgICAgQ2l0eVN0b3JlLmNpdHkgPSBwYXlsb2FkLnNlbGVjdGVkQ2l0eTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIFdoZW4gdGhlIHVzZXIgc2VsZWN0cyBhIGNvdW50cnksIHdlIGRpc3BhdGNoIHRoZSBwYXlsb2FkOlxuICpcbiAqICAgZmxpZ2h0RGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gKiAgICAgYWN0aW9uVHlwZTogJ2NvdW50cnktdXBkYXRlJyxcbiAqICAgICBzZWxlY3RlZENvdW50cnk6ICdhdXN0cmFsaWEnXG4gKiAgIH0pO1xuICpcbiAqIFRoaXMgcGF5bG9hZCBpcyBkaWdlc3RlZCBieSBib3RoIHN0b3JlczpcbiAqXG4gKiAgIENvdW50cnlTdG9yZS5kaXNwYXRjaFRva2VuID0gZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgaWYgKHBheWxvYWQuYWN0aW9uVHlwZSA9PT0gJ2NvdW50cnktdXBkYXRlJykge1xuICogICAgICAgQ291bnRyeVN0b3JlLmNvdW50cnkgPSBwYXlsb2FkLnNlbGVjdGVkQ291bnRyeTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIFdoZW4gdGhlIGNhbGxiYWNrIHRvIHVwZGF0ZSBgQ291bnRyeVN0b3JlYCBpcyByZWdpc3RlcmVkLCB3ZSBzYXZlIGEgcmVmZXJlbmNlXG4gKiB0byB0aGUgcmV0dXJuZWQgdG9rZW4uIFVzaW5nIHRoaXMgdG9rZW4gd2l0aCBgd2FpdEZvcigpYCwgd2UgY2FuIGd1YXJhbnRlZVxuICogdGhhdCBgQ291bnRyeVN0b3JlYCBpcyB1cGRhdGVkIGJlZm9yZSB0aGUgY2FsbGJhY2sgdGhhdCB1cGRhdGVzIGBDaXR5U3RvcmVgXG4gKiBuZWVkcyB0byBxdWVyeSBpdHMgZGF0YS5cbiAqXG4gKiAgIENpdHlTdG9yZS5kaXNwYXRjaFRva2VuID0gZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgaWYgKHBheWxvYWQuYWN0aW9uVHlwZSA9PT0gJ2NvdW50cnktdXBkYXRlJykge1xuICogICAgICAgLy8gYENvdW50cnlTdG9yZS5jb3VudHJ5YCBtYXkgbm90IGJlIHVwZGF0ZWQuXG4gKiAgICAgICBmbGlnaHREaXNwYXRjaGVyLndhaXRGb3IoW0NvdW50cnlTdG9yZS5kaXNwYXRjaFRva2VuXSk7XG4gKiAgICAgICAvLyBgQ291bnRyeVN0b3JlLmNvdW50cnlgIGlzIG5vdyBndWFyYW50ZWVkIHRvIGJlIHVwZGF0ZWQuXG4gKlxuICogICAgICAgLy8gU2VsZWN0IHRoZSBkZWZhdWx0IGNpdHkgZm9yIHRoZSBuZXcgY291bnRyeVxuICogICAgICAgQ2l0eVN0b3JlLmNpdHkgPSBnZXREZWZhdWx0Q2l0eUZvckNvdW50cnkoQ291bnRyeVN0b3JlLmNvdW50cnkpO1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogVGhlIHVzYWdlIG9mIGB3YWl0Rm9yKClgIGNhbiBiZSBjaGFpbmVkLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgIEZsaWdodFByaWNlU3RvcmUuZGlzcGF0Y2hUb2tlbiA9XG4gKiAgICAgZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgICBzd2l0Y2ggKHBheWxvYWQuYWN0aW9uVHlwZSkge1xuICogICAgICAgICBjYXNlICdjb3VudHJ5LXVwZGF0ZSc6XG4gKiAgICAgICAgIGNhc2UgJ2NpdHktdXBkYXRlJzpcbiAqICAgICAgICAgICBmbGlnaHREaXNwYXRjaGVyLndhaXRGb3IoW0NpdHlTdG9yZS5kaXNwYXRjaFRva2VuXSk7XG4gKiAgICAgICAgICAgRmxpZ2h0UHJpY2VTdG9yZS5wcmljZSA9XG4gKiAgICAgICAgICAgICBnZXRGbGlnaHRQcmljZVN0b3JlKENvdW50cnlTdG9yZS5jb3VudHJ5LCBDaXR5U3RvcmUuY2l0eSk7XG4gKiAgICAgICAgICAgYnJlYWs7XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiBUaGUgYGNvdW50cnktdXBkYXRlYCBwYXlsb2FkIHdpbGwgYmUgZ3VhcmFudGVlZCB0byBpbnZva2UgdGhlIHN0b3JlcydcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzIGluIG9yZGVyOiBgQ291bnRyeVN0b3JlYCwgYENpdHlTdG9yZWAsIHRoZW5cbiAqIGBGbGlnaHRQcmljZVN0b3JlYC5cbiAqL1xuXG52YXIgRGlzcGF0Y2hlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIERpc3BhdGNoZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERpc3BhdGNoZXIpO1xuXG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgdGhpcy5faXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2lzSGFuZGxlZCA9IHt9O1xuICAgIHRoaXMuX2lzUGVuZGluZyA9IHt9O1xuICAgIHRoaXMuX2xhc3RJRCA9IDE7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCB3aXRoIGV2ZXJ5IGRpc3BhdGNoZWQgcGF5bG9hZC4gUmV0dXJuc1xuICAgKiBhIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBgd2FpdEZvcigpYC5cbiAgICovXG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiByZWdpc3RlcihjYWxsYmFjaykge1xuICAgIHZhciBpZCA9IF9wcmVmaXggKyB0aGlzLl9sYXN0SUQrKztcbiAgICB0aGlzLl9jYWxsYmFja3NbaWRdID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2FsbGJhY2sgYmFzZWQgb24gaXRzIHRva2VuLlxuICAgKi9cblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS51bnJlZ2lzdGVyID0gZnVuY3Rpb24gdW5yZWdpc3RlcihpZCkge1xuICAgICF0aGlzLl9jYWxsYmFja3NbaWRdID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0Rpc3BhdGNoZXIudW5yZWdpc3RlciguLi4pOiBgJXNgIGRvZXMgbm90IG1hcCB0byBhIHJlZ2lzdGVyZWQgY2FsbGJhY2suJywgaWQpIDogaW52YXJpYW50KGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2lkXTtcbiAgfTtcblxuICAvKipcbiAgICogV2FpdHMgZm9yIHRoZSBjYWxsYmFja3Mgc3BlY2lmaWVkIHRvIGJlIGludm9rZWQgYmVmb3JlIGNvbnRpbnVpbmcgZXhlY3V0aW9uXG4gICAqIG9mIHRoZSBjdXJyZW50IGNhbGxiYWNrLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSB1c2VkIGJ5IGEgY2FsbGJhY2sgaW5cbiAgICogcmVzcG9uc2UgdG8gYSBkaXNwYXRjaGVkIHBheWxvYWQuXG4gICAqL1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLndhaXRGb3IgPSBmdW5jdGlvbiB3YWl0Rm9yKGlkcykge1xuICAgICF0aGlzLl9pc0Rpc3BhdGNoaW5nID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0Rpc3BhdGNoZXIud2FpdEZvciguLi4pOiBNdXN0IGJlIGludm9rZWQgd2hpbGUgZGlzcGF0Y2hpbmcuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBpZHMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICB2YXIgaWQgPSBpZHNbaWldO1xuICAgICAgaWYgKHRoaXMuX2lzUGVuZGluZ1tpZF0pIHtcbiAgICAgICAgIXRoaXMuX2lzSGFuZGxlZFtpZF0gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRGlzcGF0Y2hlci53YWl0Rm9yKC4uLik6IENpcmN1bGFyIGRlcGVuZGVuY3kgZGV0ZWN0ZWQgd2hpbGUgJyArICd3YWl0aW5nIGZvciBgJXNgLicsIGlkKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgIXRoaXMuX2NhbGxiYWNrc1tpZF0gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRGlzcGF0Y2hlci53YWl0Rm9yKC4uLik6IGAlc2AgZG9lcyBub3QgbWFwIHRvIGEgcmVnaXN0ZXJlZCBjYWxsYmFjay4nLCBpZCkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW52b2tlQ2FsbGJhY2soaWQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIHBheWxvYWQgdG8gYWxsIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICAgKi9cblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKHBheWxvYWQpIHtcbiAgICAhIXRoaXMuX2lzRGlzcGF0Y2hpbmcgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnRGlzcGF0Y2guZGlzcGF0Y2goLi4uKTogQ2Fubm90IGRpc3BhdGNoIGluIHRoZSBtaWRkbGUgb2YgYSBkaXNwYXRjaC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc3RhcnREaXNwYXRjaGluZyhwYXlsb2FkKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaWQgaW4gdGhpcy5fY2FsbGJhY2tzKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1BlbmRpbmdbaWRdKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW52b2tlQ2FsbGJhY2soaWQpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9zdG9wRGlzcGF0Y2hpbmcoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoaXMgRGlzcGF0Y2hlciBjdXJyZW50bHkgZGlzcGF0Y2hpbmcuXG4gICAqL1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmlzRGlzcGF0Y2hpbmcgPSBmdW5jdGlvbiBpc0Rpc3BhdGNoaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0Rpc3BhdGNoaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsIHRoZSBjYWxsYmFjayBzdG9yZWQgd2l0aCB0aGUgZ2l2ZW4gaWQuIEFsc28gZG8gc29tZSBpbnRlcm5hbFxuICAgKiBib29ra2VlcGluZy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLl9pbnZva2VDYWxsYmFjayA9IGZ1bmN0aW9uIF9pbnZva2VDYWxsYmFjayhpZCkge1xuICAgIHRoaXMuX2lzUGVuZGluZ1tpZF0gPSB0cnVlO1xuICAgIHRoaXMuX2NhbGxiYWNrc1tpZF0odGhpcy5fcGVuZGluZ1BheWxvYWQpO1xuICAgIHRoaXMuX2lzSGFuZGxlZFtpZF0gPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgdXAgYm9va2tlZXBpbmcgbmVlZGVkIHdoZW4gZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5fc3RhcnREaXNwYXRjaGluZyA9IGZ1bmN0aW9uIF9zdGFydERpc3BhdGNoaW5nKHBheWxvYWQpIHtcbiAgICBmb3IgKHZhciBpZCBpbiB0aGlzLl9jYWxsYmFja3MpIHtcbiAgICAgIHRoaXMuX2lzUGVuZGluZ1tpZF0gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzSGFuZGxlZFtpZF0gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fcGVuZGluZ1BheWxvYWQgPSBwYXlsb2FkO1xuICAgIHRoaXMuX2lzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGVhciBib29ra2VlcGluZyB1c2VkIGZvciBkaXNwYXRjaGluZy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLl9zdG9wRGlzcGF0Y2hpbmcgPSBmdW5jdGlvbiBfc3RvcERpc3BhdGNoaW5nKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9wZW5kaW5nUGF5bG9hZDtcbiAgICB0aGlzLl9pc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIERpc3BhdGNoZXI7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BhdGNoZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L2ZsdXgvbGliL0Rpc3BhdGNoZXIuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0FwcEFjdGlvblR5cGVzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9BcHBBY3Rpb25UeXBlcy5qc3hcIik7XG5cbnZhciBfQXBwQWN0aW9uVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQXBwQWN0aW9uVHlwZXMpO1xuXG52YXIgX0Rpc3BhdGNoZXIgPSByZXF1aXJlKFwiLi4vRGlzcGF0Y2hlci5qc3hcIik7XG5cbnZhciBfRGlzcGF0Y2hlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EaXNwYXRjaGVyKTtcblxudmFyIF9TZXJ2ZXJBcGkgPSByZXF1aXJlKFwiLi4vU2VydmVyQXBpLmpzeFwiKTtcblxudmFyIF9TZXJ2ZXJBcGkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2VydmVyQXBpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEFwcEFjdGlvbnMgPSB7XG5cdC8qKlxuICAqIGNscyDigJQgaXMgYW4gSUQgb2YgcmVxdWVzdGVkIG1vZHVsZVxuICAqIGRhdGEg4oCUIGlzIGFuIE9iamVjdCB3aXRoIHBhcmFtcyB0byBzZW5kIHsncGFyYW0xJzogJ3ZhbDEnLCAncGFyYW0yJzogJ3ZhbDInLi4ufVxuICovXG5cdGxvYWRNb2R1bGU6IGZ1bmN0aW9uIGxvYWRNb2R1bGUoY2xzLCBkYXRhKSB7XG5cdFx0X1NlcnZlckFwaTIuZGVmYXVsdC5hc2soY2xzLCBkYXRhKTtcblx0XHRBcHBBY3Rpb25zLnNldE1vZHVsZShcIkxvYWRpbmdcIik7XG5cdH0sXG5cdHNldE1vZHVsZTogZnVuY3Rpb24gc2V0TW9kdWxlKGNscywgZGF0YSkge1xuXHRcdF9EaXNwYXRjaGVyMi5kZWZhdWx0LmRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IF9BcHBBY3Rpb25UeXBlczIuZGVmYXVsdC5TRVRfQVBQX01PRFVMRSxcblx0XHRcdGNsczogY2xzLFxuXHRcdFx0ZGF0YTogZGF0YVxuXHRcdH0pO1xuXHR9LFxuXHRsb2dPdXQ6IGZ1bmN0aW9uIGxvZ091dCgpIHtcblx0XHRfU2VydmVyQXBpMi5kZWZhdWx0LmFzayhcImxvZ2luXCIsIHsgYWN0aW9uOiBcIm91dFwiIH0pO1xuXHRcdEFwcEFjdGlvbnMuc2V0TW9kdWxlKFwiTG9hZGluZ1wiKTtcblx0fVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQXBwQWN0aW9ucztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FjdGlvbnMvQXBwQWN0aW9ucy5qc3hcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0Rpc3BhdGNoZXIgPSByZXF1aXJlKFwiLi9EaXNwYXRjaGVyLmpzeFwiKTtcblxudmFyIF9EaXNwYXRjaGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Rpc3BhdGNoZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqINCt0YLQviDQutC70LDRgdGBLCDRh9C10YDQtdC3INC60L7RgtC+0YDRi9C5INC/0YDQvtC40YHRhdC+0LTQuNGCINCy0LXRgdGMINC+0LHQvNC10L0g0YEg0YHQtdGA0LLQtdGA0L7QvC5cbiAqINCe0L0g0LTQtdGA0LbQuNGCIF9zZXNzaW9uIOKAlCDQuCDQv9GA0LjRgdC+0LHQsNGH0LjQstCw0LXRgiDQtdGRINC6INC60LDQttC00L7QvNGDINC+0LHQvNC10L3Rgy5cbiAqINCYINC+0L0g0LfQvdCw0LXRgiBfVVJMIOKAlCDQutGD0LTQsCwg0YHQvtCx0YHRgtCy0LXQvdC90L4sINC60L7QvdC90LXQutGC0LjRgtGM0YHRjy5cbiAqL1xuXG52YXIgU2VydmVyQXBpID0gZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBTZXJ2ZXJBcGkoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlcnZlckFwaSk7XG5cblx0XHR0aGlzLl9VUkwgPSBcImFnYXRlLnBocFwiO1xuXHRcdHRoaXMuX3Nlc3Npb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlc3Npb25cIik7XG5cdFx0dGhpcy5vblJlY2VpdmVEYXRhID0gdGhpcy5vblJlY2VpdmVEYXRhLmJpbmQodGhpcyk7XG5cdH1cblx0LyoqXG4gICog0JTQu9GPINC+0LHQvNC10L3QsCDRgSDRgdC10YDQstC10YDQvtC8INC90YPQttC90L4g0YHQtNC10LvQsNGC0YwgaW1wb3J0ICguLyDQuNC70LggLi4vINC40LvQuCDQtdGJ0ZEg0YfQtdCz0L46XG4gICog0LfQsNCy0LjRgdC40YIg0L7RgiDRgtC+0LPQviwg0L7RgtC60YPQtNCwINGC0Ysg0LTQtdC70LDQtdGI0YwgaW1wb3J0LCDQtNCwPyA6KVxuICAqIGltcG9ydCBTZXJ2ZXJBcGkgZnJvbSBcIi4vU2VydmVyQXBpLmpzeFwiO1xuICAqIC4uLlxuICAqIFNlcnZlckFwaS5hamF4KFwiY2xzINC00LvRjyDRgdC10YDQstC10YDQsFwiLCB70L7QsdGK0LXQutGCINGBINC/0LDRgNCw0LzQtdGC0YDQsNC80Lgg0LTQu9GPINC+0YLQv9GA0LDQstC60Lh9KVxuICovXG5cblxuXHRfY3JlYXRlQ2xhc3MoU2VydmVyQXBpLCBbe1xuXHRcdGtleTogXCJhc2tcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gYXNrKGNscywgcGFyYW1zKSB7XG5cdFx0XHRpZiAoIXBhcmFtcykgcGFyYW1zID0ge307XG5cdFx0XHRwYXJhbXMuY2xzID0gY2xzO1xuXHRcdFx0cGFyYW1zLnNlcyA9IHRoaXMuX3Nlc3Npb247XG5cdFx0XHQkLmFqYXgoe1xuXHRcdFx0XHR0eXBlOiBcIlBPU1RcIixcblx0XHRcdFx0dXJsOiB0aGlzLl9VUkwsXG5cdFx0XHRcdGRhdGE6IHBhcmFtcyxcblx0XHRcdFx0c3VjY2VzczogdGhpcy5vblJlY2VpdmVEYXRhXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0LyoqXG4gICAqINCa0L7Qs9C00LAg0LTQsNC90L3Ri9C1INC/0L7Qu9GD0YfQtdC90Ysg4oCUINC+0L3QuCDQv9Cw0YDRgdGP0YLRgdGPLlxuICAgKiDQn9GA0LXQtNC/0L7Qu9Cw0LPQsNC10YLRgdGPLCDRh9GC0L4g0YHRgtGA0YPQutGC0YPRgNCwINC70Y7QsdC+0LPQviDQvtGC0LLQtdGC0LAg0YHQtdGA0LLQtdGA0LAg0LHRg9C00LXRgiDQstGA0L7QtNC1OlxuICAgKiB7XG4gICAqICAgICBzZXNzaW9uOiBcIjExMTExMVwiLCDigJQgSUQg0YHQtdGB0YHQuNC4LCDQvtC/0YbQuNC+0L3QsNC70YzQvdC+XG4gICAqICAgICBbXG4gICAqICAgICAgICAge1xuICAgKiAgICAgICAgICAgICBhY3Rpb246IFwiQVBQX01PRFVMRVwiLCDigJQgSUQgYdC60YbQuNC4ICjRgdC8LiDQvdC40LbQtSlcbiAgICogICAgICAgICAgICAgZGF0YTogLi4uLi4uLiDigJQg0LTQsNC90L3Ri9C1XG4gICAqICAgICAgICAgfSxcbiAgICogICAgICAgICAuLi4uXG4gICAqICAgICBdXG4gICAqIH1cbiAgICog0JDQutGG0LjQuCDQv9C10YDQtdC00LDRjtGC0YHRjyBEaXNwYXRjaGVyLdGDOlxuICAgKiBBcHBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICogICAgIHR5cGU6IGFjdGlvbixcbiAgICogICAgIGl0ZW0sXG4gICAqIH0pO1xuICAgKiDQmCDQstGB0LUgKNCy0YHQtSEpINC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvdC90YvQtSBTdG9yZSDQuNGFINC/0L7Qu9GD0YfQsNGO0YIuINCYINC90LAg0L3Rg9C20L3Ri9C1IOKAlCDRgNC10LDQs9C40YDRg9GO0YIuXG4gICovXG5cblx0fSwge1xuXHRcdGtleTogXCJvblJlY2VpdmVEYXRhXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9uUmVjZWl2ZURhdGEoZGF0YSkge1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhcIkRBVEEgUkVDRUlWRUQhXCIpO1xuXHRcdFx0Ly9jb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdGlmIChkYXRhLnNlc3Npb24gJiYgZGF0YS5zZXNzaW9uICE9IHRoaXMuX3Nlc3Npb24pIHtcblx0XHRcdFx0dGhpcy5fc2Vzc2lvbiA9IGRhdGEuc2Vzc2lvbjtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZXNzaW9uXCIsIHRoaXMuX3Nlc3Npb24pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGEuYWN0aW9ucykge1xuXHRcdFx0XHRmb3IgKHZhciBhY3Rpb24gaW4gZGF0YS5hY3Rpb25zKSB7XG5cdFx0XHRcdFx0dmFyIGFjdGlvbkRhdGEgPSBkYXRhLmFjdGlvbnNbYWN0aW9uXTtcblx0XHRcdFx0XHRpZiAoYWN0aW9uID09IFwiU1lTVEVNX0lORk9cIikge1xuXHRcdFx0XHRcdFx0aWYgKGFjdGlvbkRhdGEuZGVidWcpIGNvbnNvbGUubG9nKFwiREVCVUc6IFwiICsgYWN0aW9uRGF0YS5kZWJ1Zyk7XG5cdFx0XHRcdFx0XHRpZiAoYWN0aW9uRGF0YS5lcnIpIGNvbnNvbGUubG9nKFwiRVJST1I6IFwiICsgYWN0aW9uRGF0YS5lcnIpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBtZXNzYWdlID0ge307XG5cdFx0XHRcdFx0Zm9yICh2YXIgZmxkIGluIGFjdGlvbkRhdGEpIHtcblx0XHRcdFx0XHRcdG1lc3NhZ2VbZmxkXSA9IGFjdGlvbkRhdGFbZmxkXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bWVzc2FnZVtcInR5cGVcIl0gPSBhY3Rpb247XG5cdFx0XHRcdFx0X0Rpc3BhdGNoZXIyLmRlZmF1bHQuZGlzcGF0Y2gobWVzc2FnZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIFNlcnZlckFwaTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IFNlcnZlckFwaSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vU2VydmVyQXBpLmpzeFxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcImZsdXgvdXRpbHNcIik7XG5cbnZhciBfTG9naW5TdG9yZSA9IHJlcXVpcmUoXCIuLi8uLi9zdG9yZXMvTG9naW5TdG9yZS5qc3hcIik7XG5cbnZhciBfTG9naW5TdG9yZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Mb2dpblN0b3JlKTtcblxudmFyIF9Mb2dpbkZvcm0gPSByZXF1aXJlKFwiLi9Mb2dpbkZvcm0uanN4XCIpO1xuXG52YXIgX0xvZ2luRm9ybTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Mb2dpbkZvcm0pO1xuXG52YXIgX0xvZ2luV2FpdCA9IHJlcXVpcmUoXCIuL0xvZ2luV2FpdC5qc3hcIik7XG5cbnZhciBfTG9naW5XYWl0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xvZ2luV2FpdCk7XG5cbnZhciBfU3RvcmVzUG9vbCA9IHJlcXVpcmUoXCIuLi8uLi9TdG9yZXNQb29sLmpzeFwiKTtcblxudmFyIF9TdG9yZXNQb29sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0b3Jlc1Bvb2wpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG7Ql9C00LXRgdGMINC80Ysg0YHQvtC30LTQsNC10LwgTG9naW5TdG9yZSDQtNC40L3QsNC80LjRh9C10YHQutC4IC0g0L/RgNC4INGB0L7Qt9C00LDQvdC40Lgg0Y3QutC30LXQvNC/0LvRj9GA0LBcbtCt0YLQviDQuNC80LXQtdGCINGB0LzRi9GB0Lsg0L/QvtGB0LrQvtC70YzQutGDINC80Ysg0YXQvtGC0LjQvCDRg9C00LDQu9GP0YLRjCBMb2dpblN0b3JlINC60L7Qs9C00LAgTG9naW4g0L3QtSDQsdGD0LTQtdGCINCw0LrRgtC40LLQtdC9XG4qL1xuXG52YXIgTG9naW4gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoTG9naW4sIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIExvZ2luKHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvZ2luKTtcblxuXHRcdC8qXG4gIEPQvtC30LTQsNC10LwgU3RvcmVcbiAgKi9cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTG9naW4uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihMb2dpbikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdF9TdG9yZXNQb29sMi5kZWZhdWx0LmNyZWF0ZSgnTG9naW4nLCBfTG9naW5TdG9yZTIuZGVmYXVsdCk7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKExvZ2luLCBbe1xuXHRcdGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRcdC8qXG4gICDQo9C00LDQu9GP0LXQvCBTdG9yZVxuICAgKi9cblx0XHRcdF9TdG9yZXNQb29sMi5kZWZhdWx0LnJlbW92ZSgnTG9naW4nKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBtb2RlID0gdGhpcy5zdGF0ZS5sb2dpblN0b3JlLmdldChcIm1vZGVcIik7XG5cdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0Y2FzZSBcIkZvcm1cIjpcblx0XHRcdFx0XHR2YXIgbWVzc2FnZSA9IHRoaXMuc3RhdGUubG9naW5TdG9yZS5nZXQoXCJtZXNzYWdlXCIpO1xuXHRcdFx0XHRcdHZhciBlbWFpbCA9IHRoaXMuc3RhdGUubG9naW5TdG9yZS5nZXQoXCJlbWFpbFwiKTtcblx0XHRcdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0xvZ2luRm9ybTIuZGVmYXVsdCwgeyBtZXNzYWdlOiBtZXNzYWdlLCBlbWFpbDogZW1haWwgfSk7XG5cdFx0XHRcdGNhc2UgXCJMb2FkaW5nXCI6XG5cdFx0XHRcdFx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Mb2dpbldhaXQyLmRlZmF1bHQsIG51bGwpO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0XCJQYW5pYywgdGhlcmUgaXMgbm8gXCIsXG5cdFx0XHRcdFx0XHRtb2RlLFxuXHRcdFx0XHRcdFx0XCIgY2F0aGVyLlwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1dLCBbe1xuXHRcdGtleTogXCJnZXRTdG9yZXNcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0U3RvcmVzKCkge1xuXHRcdFx0cmV0dXJuIF9TdG9yZXNQb29sMi5kZWZhdWx0LmFycignTG9naW4nKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiY2FsY3VsYXRlU3RhdGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2FsY3VsYXRlU3RhdGUocHJldlN0YXRlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsb2dpblN0b3JlOiBfU3RvcmVzUG9vbDIuZGVmYXVsdC5pdGVtKCdMb2dpbicpLmdldFN0YXRlKClcblx0XHRcdH07XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIExvZ2luO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX3V0aWxzLkNvbnRhaW5lci5jcmVhdGUoTG9naW4pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9sb2dpbi9Mb2dpbi5qc3hcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2ltbXV0YWJsZSA9IHJlcXVpcmUoXCJpbW11dGFibGVcIik7XG5cbnZhciBfaW1tdXRhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltbXV0YWJsZSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiZmx1eC91dGlsc1wiKTtcblxudmFyIF9Mb2dpbkFjdGlvblR5cGVzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9Mb2dpbkFjdGlvblR5cGVzLmpzeFwiKTtcblxudmFyIF9Mb2dpbkFjdGlvblR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xvZ2luQWN0aW9uVHlwZXMpO1xuXG52YXIgX0Rpc3BhdGNoZXIgPSByZXF1aXJlKFwiLi4vRGlzcGF0Y2hlci5qc3hcIik7XG5cbnZhciBfRGlzcGF0Y2hlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EaXNwYXRjaGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTG9naW5TdG9yZSA9IGZ1bmN0aW9uIChfUmVkdWNlU3RvcmUpIHtcblx0X2luaGVyaXRzKExvZ2luU3RvcmUsIF9SZWR1Y2VTdG9yZSk7XG5cblx0ZnVuY3Rpb24gTG9naW5TdG9yZSgpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9naW5TdG9yZSk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKExvZ2luU3RvcmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihMb2dpblN0b3JlKSkuY2FsbCh0aGlzLCBfRGlzcGF0Y2hlcjIuZGVmYXVsdCkpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKExvZ2luU3RvcmUsIFt7XG5cdFx0a2V5OiBcImdldEluaXRpYWxTdGF0ZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG5cdFx0XHRyZXR1cm4gX2ltbXV0YWJsZTIuZGVmYXVsdC5NYXAoeyBtb2RlOiBcIkZvcm1cIiwgbWVzc2FnZTogXCJcIiwgZW1haWw6IFwiXCIgfSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcInJlZHVjZVwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZWR1Y2Uoc3RhdGUsIGFjdGlvbikge1xuXHRcdFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdFx0XHRjYXNlIF9Mb2dpbkFjdGlvblR5cGVzMi5kZWZhdWx0LkxPR0lOX1NFVF9EQVRBOlxuXHRcdFx0XHRcdHZhciByZXQgPSBzdGF0ZTtcblx0XHRcdFx0XHR2YXIgZCA9IGFjdGlvbi5kYXRhO1xuXHRcdFx0XHRcdGZvciAodmFyIG8gaW4gZCkge1xuXHRcdFx0XHRcdFx0cmV0ID0gcmV0LnNldChvLCBkW29dKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIExvZ2luU3RvcmU7XG59KF91dGlscy5SZWR1Y2VTdG9yZSk7XG5cbi8qXG7Ql9C00LXRgdGMINC80Ysg0LLQvtC30LLRgNCw0YnQsNC10Lwg0LrQu9Cw0YFjLCDQsCDQvdC1INC40L3RgdGC0LDQvdGBLiDQn9C+0YLQvtC80YMg0YfRgtC+INGB0L7QsdC40YDQsNC10LzRgdGPINC40YHQv9C+0LvRjNC30L7QstCw0YLRjFxu0LXQs9C+INCyIFN0b3Jlc1Bvb2xcbiovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IExvZ2luU3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdG9yZXMvTG9naW5TdG9yZS5qc3hcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xudmFyIExvZ2luQWN0aW9uVHlwZXMgPSB7XG5cdExPR0lOX1NFVF9EQVRBOiBcIkxPR0lOX1NFVF9EQVRBXCIsXG5cdC8vXHRMT0dJTl9TRVRfTU9ERTogXCJMT0dJTl9TRVRfTU9ERVwiLFxuXHQvL1x0TE9HSU5fU0VUX01FU1NBR0U6IFwiTE9HSU5fU0VUX01FU1NBR0VcIixcblx0TE9HSU5fU0VORF9GT1JNOiBcIkxPR0lOX1NFTkRfRk9STVwiXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMb2dpbkFjdGlvblR5cGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29uc3RhbnRzL0xvZ2luQWN0aW9uVHlwZXMuanN4XG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Mb2dpbkFjdGlvblR5cGVzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9Mb2dpbkFjdGlvblR5cGVzLmpzeFwiKTtcblxudmFyIF9Mb2dpbkFjdGlvblR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xvZ2luQWN0aW9uVHlwZXMpO1xuXG52YXIgX0Rpc3BhdGNoZXIgPSByZXF1aXJlKFwiLi4vRGlzcGF0Y2hlci5qc3hcIik7XG5cbnZhciBfRGlzcGF0Y2hlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EaXNwYXRjaGVyKTtcblxudmFyIF9TZXJ2ZXJBcGkgPSByZXF1aXJlKFwiLi4vU2VydmVyQXBpLmpzeFwiKTtcblxudmFyIF9TZXJ2ZXJBcGkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2VydmVyQXBpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIExvZ2luQWN0aW9ucyA9IHtcblx0c2V0RGF0YTogZnVuY3Rpb24gc2V0RGF0YShkYXRhKSB7XG5cdFx0X0Rpc3BhdGNoZXIyLmRlZmF1bHQuZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogX0xvZ2luQWN0aW9uVHlwZXMyLmRlZmF1bHQuTE9HSU5fU0VUX0RBVEEsXG5cdFx0XHRkYXRhOiBkYXRhXG5cdFx0fSk7XG5cdH0sXG5cdHNlbmRGb3JtOiBmdW5jdGlvbiBzZW5kRm9ybShsb2dpbiwgcGFzc3dvcmQpIHtcblx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0bW9kZTogJ0xvYWRpbmcnLFxuXHRcdFx0ZW1haWw6IGxvZ2luXG5cdFx0fSk7XG5cblx0XHRfU2VydmVyQXBpMi5kZWZhdWx0LmFzayhcImxvZ2luXCIsIHtcblx0XHRcdFwiYWN0aW9uXCI6IFwiaW5cIixcblx0XHRcdFwibG9naW5cIjogbG9naW4sXG5cdFx0XHRcInBhc3N3b3JkXCI6IHBhc3N3b3JkXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExvZ2luQWN0aW9ucztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FjdGlvbnMvTG9naW5BY3Rpb25zLmpzeFxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0xvZ2luQWN0aW9ucyA9IHJlcXVpcmUoXCIuLi8uLi9hY3Rpb25zL0xvZ2luQWN0aW9ucy5qc3hcIik7XG5cbnZhciBfTG9naW5BY3Rpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xvZ2luQWN0aW9ucyk7XG5cbnZhciBfTG9naW5NZXNzYWdlID0gcmVxdWlyZShcIi4vTG9naW5NZXNzYWdlLmpzeFwiKTtcblxudmFyIF9Mb2dpbk1lc3NhZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTG9naW5NZXNzYWdlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTG9naW5Gb3JtID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcblx0X2luaGVyaXRzKExvZ2luRm9ybSwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gTG9naW5Gb3JtKHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvZ2luRm9ybSk7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTG9naW5Gb3JtLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTG9naW5Gb3JtKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG5cdFx0X3RoaXMuc3RhdGUgPSB7XG5cdFx0XHRtZXNzYWdlOiBfdGhpcy5wcm9wcy5tZXNzYWdlLFxuXHRcdFx0ZW1haWw6IF90aGlzLnByb3BzLmVtYWlsXG5cdFx0fTtcblx0XHRfdGhpcy5oYW5kbGVTdWJtaXQgPSBfdGhpcy5oYW5kbGVTdWJtaXQuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlQ2hhbmdlID0gX3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQoX3RoaXMpO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhMb2dpbkZvcm0sIFt7XG5cdFx0a2V5OiBcImhhbmRsZVN1Ym1pdFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG5cdFx0XHRpZiAoIXRoaXMuZW1haWxPYmoudmFsdWUgfHwgIXRoaXMucGFzT2JqLnZhbHVlKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBcItCe0LHRj9C30LDRgtC10LvRjNC90L4g0YPQutCw0LbQuNGC0LUgRS1tYWlsINC4INCf0LDRgNC+0LvRjCFcIiB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9Mb2dpbkFjdGlvbnMyLmRlZmF1bHQuc2VuZEZvcm0odGhpcy5lbWFpbE9iai52YWx1ZSwgdGhpcy5wYXNPYmoudmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJoYW5kbGVDaGFuZ2VcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUubWVzc2FnZSAhPSBcIlwiKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBcIlwiIH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiB0aGlzLmVtYWlsT2JqLnZhbHVlIH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogXCJyZW5kZXJcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0eyBjbGFzc05hbWU6IFwiY29udGFpbmVyLWZsdWlkXCIgfSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJyb3dcIiB9LFxuXHRcdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBcImNvbC1sZy02IGNvbC1sZy1vZmZzZXQtM1wiIH0sXG5cdFx0XHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XCJoMVwiLFxuXHRcdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0XHRcIlxcdTA0MTJcXHUwNDQ1XFx1MDQzRVxcdTA0MzRcIlxuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcImZvcm1cIixcblx0XHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwiZm9ybS1ob3Jpem9udGFsXCIgfSxcblx0XHRcdFx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSxcblx0XHRcdFx0XHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZW1haWxcIixcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIixcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZSxcblx0XHRcdFx0XHRcdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKGlucHV0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfdGhpczIuZW1haWxPYmogPSBpbnB1dDtcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcjogXCJFLW1haWxcIixcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLmVtYWlsXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSxcblx0XHRcdFx0XHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwicGFzc3dvcmRcIixcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIixcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZSxcblx0XHRcdFx0XHRcdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKGlucHV0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfdGhpczIucGFzT2JqID0gaW5wdXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiXFx1MDQxRlxcdTA0MzBcXHUwNDQwXFx1MDQzRVxcdTA0M0JcXHUwNDRDXCJcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTG9naW5NZXNzYWdlMi5kZWZhdWx0LCB7IG1lc3NhZ2U6IHRoaXMuc3RhdGUubWVzc2FnZSB9KSxcblx0XHRcdFx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSxcblx0XHRcdFx0XHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHRcdFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJidG4gYnRuLXByaW1hcnlcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljazogdGhpcy5oYW5kbGVTdWJtaXRcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcIlxcdTA0MTJcXHUwNDNFXFx1MDQzOVxcdTA0NDJcXHUwNDM4XCJcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIExvZ2luRm9ybTtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExvZ2luRm9ybTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvbG9naW4vTG9naW5Gb3JtLmpzeFxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBMb2dpbldhaXQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoTG9naW5XYWl0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBMb2dpbldhaXQocHJvcHMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9naW5XYWl0KTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTG9naW5XYWl0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTG9naW5XYWl0KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKExvZ2luV2FpdCwgW3tcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0eyBjbGFzc05hbWU6IFwiY29udGFpbmVyLWZsdWlkXCIgfSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJyb3dcIiB9LFxuXHRcdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBcImNvbC1sZy02IGNvbC1sZy1vZmZzZXQtM1wiIH0sXG5cdFx0XHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XCJoMVwiLFxuXHRcdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0XHRcIlxcdTA0MTJcXHUwNDQ1XFx1MDQzRVxcdTA0MzRcIlxuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcImgzXCIsXG5cdFx0XHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XHRcdFwiXFx1MDQxRlxcdTA0M0VcXHUwNDM0XFx1MDQzRVxcdTA0MzZcXHUwNDM0XFx1MDQzOFxcdTA0NDJcXHUwNDM1XFx1MjAyNlwiXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBMb2dpbldhaXQ7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMb2dpbldhaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xvZ2luL0xvZ2luV2FpdC5qc3hcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcImZsdXgvdXRpbHNcIik7XG5cbnZhciBfRGlzcGF0Y2hlciA9IHJlcXVpcmUoXCIuL0Rpc3BhdGNoZXIuanN4XCIpO1xuXG52YXIgX0Rpc3BhdGNoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGlzcGF0Y2hlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qXG7QrdGC0L4g0LLRgNC+0LTQtSDQsdGLINC/0L7Qu9C10LfQvdCw0Y8g0YjRgtGD0LrQsFxu0JfQtNC10YHRjCDQvNGLINGB0L7Qt9C00LDQtdC8INC4INGF0YDQsNC90LjQvCBTdG9yYWdlc1xu0YPQtNC+0LHRgdGC0LLQviDQsiDRgtC+0LwsINGH0YLQviDQvNGLINC40YUg0LzQvtC20LXQvCDRg9Cx0LjQstCw0YLRjCwg0L7RgtC60LvRjtGH0LDRgtGMLCDQstC60LvRjtGH0LDRgtGMINC4INGB0L7Qt9C00LDQstCw0YLRjFxu0KfRgtC+INGF0L7RgNC+0YjQvlxuKi9cbnZhciBTdG9yZXNQb29sID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdG9yZXNQb29sKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdG9yZXNQb29sKTtcblxuICAgIHRoaXMuX3N0b3JlcyA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0b3Jlc1Bvb2wsIFt7XG4gICAga2V5OiBcImNyZWF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGUoaWQsIHN0b3JlQ2xzKSB7XG4gICAgICB2YXIgbyA9IHRoaXMuX3N0b3Jlc1tpZF07XG4gICAgICBpZiAobykgcmV0dXJuIG8uc3RvcmU7XG4gICAgICB0aGlzLl9zdG9yZXNbaWRdID0ge1xuICAgICAgICByZWdpc3RlcmVkOiB0cnVlLFxuICAgICAgICBzdG9yZTogbmV3IHN0b3JlQ2xzKClcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoaWQpIHtcbiAgICAgIHZhciBvID0gdGhpcy5fc3RvcmVzW2lkXTtcbiAgICAgIGlmIChvKSB7XG4gICAgICAgIHRoaXMub2ZmKGlkKTtcbiAgICAgICAgby5zdG9yZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N0b3Jlc1tpZF0gPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpcy5fc3RvcmVzW2lkXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib2ZmXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9mZihpZCkge1xuICAgICAgdmFyIG8gPSB0aGlzLl9zdG9yZXNbaWRdO1xuICAgICAgaWYgKG8gJiYgby5yZWdpc3RlcmVkKSB7XG4gICAgICAgIF9EaXNwYXRjaGVyMi5kZWZhdWx0LnVucmVnaXN0ZXIoby5zdG9yZS5nZXREaXNwYXRjaFRva2VuKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihpZCkge1xuICAgICAgdmFyIG8gPSB0aGlzLl9zdG9yZXNbaWRdO1xuICAgICAgaWYgKG8gJiYgIW8ucmVnaXN0ZXJlZCkge1xuICAgICAgICBfRGlzcGF0Y2hlcjIuZGVmYXVsdC5yZWdpc3RlcihvLnN0b3JlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXRlbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpdGVtKGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RvcmVzW2lkXSA/IHRoaXMuX3N0b3Jlc1tpZF0uc3RvcmUgOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcnJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXJyKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIHJldCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgaWRzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGlkc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgaWRzLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgaWYgKF90aGlzLl9zdG9yZXNbaWRdKSB7XG4gICAgICAgICAgcmV0LnB1c2goX3RoaXMuX3N0b3Jlc1tpZF0uc3RvcmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0b3Jlc1Bvb2w7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBTdG9yZXNQb29sKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9TdG9yZXNQb29sLmpzeFxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcImZsdXgvdXRpbHNcIik7XG5cbnZhciBfSG9tZVN0b3JlID0gcmVxdWlyZShcIi4uLy4uL3N0b3Jlcy9Ib21lU3RvcmUuanN4XCIpO1xuXG52YXIgX0hvbWVTdG9yZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ib21lU3RvcmUpO1xuXG52YXIgX0hvbWVBY3Rpb25zID0gcmVxdWlyZShcIi4uLy4uL2FjdGlvbnMvSG9tZUFjdGlvbnMuanN4XCIpO1xuXG52YXIgX0hvbWVBY3Rpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0hvbWVBY3Rpb25zKTtcblxudmFyIF9BcHBBY3Rpb25zID0gcmVxdWlyZShcIi4uLy4uL2FjdGlvbnMvQXBwQWN0aW9ucy5qc3hcIik7XG5cbnZhciBfQXBwQWN0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BcHBBY3Rpb25zKTtcblxudmFyIF9EZXZQcm9wcyA9IHJlcXVpcmUoXCIuLi9zZXJ2aWNlL0RldlByb3BzLmpzeFwiKTtcblxudmFyIF9EZXZQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EZXZQcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEhvbWUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoSG9tZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gSG9tZShwcm9wcykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIb21lKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSG9tZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEhvbWUpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoSG9tZSwgW3tcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJoMVwiLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XCJIb21lIFxcdTA0MzdcXHUwNDMwXFx1MDQzQlxcdTA0M0VcXHUwNDMzXFx1MDQzOFxcdTA0M0RcXHUwNDM4XFx1MDQzMlxcdTA0NDhcXHUwNDM1XFx1MDQzM1xcdTA0M0VcXHUwNDQxXFx1MDQ0RlwiXG5cdFx0XHRcdCksXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiaDJcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFwiSG9tZS5wcm9wcyAoXFx1MDQzRVxcdTA0NDJcXHUwNDNCXFx1MDQzMFxcdTA0MzRcXHUwNDNBXFx1MDQzMClcIlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRGV2UHJvcHMyLmRlZmF1bHQsIHsgZGF0YTogdGhpcy5wcm9wcyB9KSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJidXR0b25cIixcblx0XHRcdFx0XHR7IG9uQ2xpY2s6IF9BcHBBY3Rpb25zMi5kZWZhdWx0LmxvZ091dCB9LFxuXHRcdFx0XHRcdFwiXFx1MDQxRVxcdTA0NDJcXHUwNDNCXFx1MDQzRVxcdTA0MzNcXHUwNDM4XFx1MDQzRFxcdTA0MzhcXHUwNDQyXFx1MDQ0Q1xcdTA0NDFcXHUwNDRGXCJcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1dLCBbe1xuXHRcdGtleTogXCJnZXRTdG9yZXNcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0U3RvcmVzKCkge1xuXHRcdFx0cmV0dXJuIFtfSG9tZVN0b3JlMi5kZWZhdWx0XTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwiY2FsY3VsYXRlU3RhdGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2FsY3VsYXRlU3RhdGUocHJldlN0YXRlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRob21lU3RvcmU6IF9Ib21lU3RvcmUyLmRlZmF1bHQuZ2V0U3RhdGUoKVxuXHRcdFx0fTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gSG9tZTtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEhvbWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2hvbWUvSG9tZS5qc3hcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2ltbXV0YWJsZSA9IHJlcXVpcmUoXCJpbW11dGFibGVcIik7XG5cbnZhciBfaW1tdXRhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltbXV0YWJsZSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiZmx1eC91dGlsc1wiKTtcblxudmFyIF9Ib21lQWN0aW9uVHlwZXMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL0hvbWVBY3Rpb25UeXBlcy5qc3hcIik7XG5cbnZhciBfSG9tZUFjdGlvblR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0hvbWVBY3Rpb25UeXBlcyk7XG5cbnZhciBfRGlzcGF0Y2hlciA9IHJlcXVpcmUoXCIuLi9EaXNwYXRjaGVyLmpzeFwiKTtcblxudmFyIF9EaXNwYXRjaGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Rpc3BhdGNoZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBIb21lU3RvcmUgPSBmdW5jdGlvbiAoX1JlZHVjZVN0b3JlKSB7XG5cdF9pbmhlcml0cyhIb21lU3RvcmUsIF9SZWR1Y2VTdG9yZSk7XG5cblx0ZnVuY3Rpb24gSG9tZVN0b3JlKCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIb21lU3RvcmUpO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChIb21lU3RvcmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihIb21lU3RvcmUpKS5jYWxsKHRoaXMsIF9EaXNwYXRjaGVyMi5kZWZhdWx0KSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoSG9tZVN0b3JlLCBbe1xuXHRcdGtleTogXCJnZXRJbml0aWFsU3RhdGVcIixcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuXHRcdFx0cmV0dXJuIF9pbW11dGFibGUyLmRlZmF1bHQuTWFwKHt9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6IFwicmVkdWNlXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlZHVjZShzdGF0ZSwgYWN0aW9uKSB7XG5cdFx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdFx0fVxuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBIb21lU3RvcmU7XG59KF91dGlscy5SZWR1Y2VTdG9yZSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBIb21lU3RvcmUoKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0b3Jlcy9Ib21lU3RvcmUuanN4XG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBIb21lQWN0aW9uVHlwZXMgPSB7fTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSG9tZUFjdGlvblR5cGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29uc3RhbnRzL0hvbWVBY3Rpb25UeXBlcy5qc3hcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0hvbWVBY3Rpb25UeXBlcyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvSG9tZUFjdGlvblR5cGVzLmpzeFwiKTtcblxudmFyIF9Ib21lQWN0aW9uVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSG9tZUFjdGlvblR5cGVzKTtcblxudmFyIF9EaXNwYXRjaGVyID0gcmVxdWlyZShcIi4uL0Rpc3BhdGNoZXIuanN4XCIpO1xuXG52YXIgX0Rpc3BhdGNoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGlzcGF0Y2hlcik7XG5cbnZhciBfU2VydmVyQXBpID0gcmVxdWlyZShcIi4uL1NlcnZlckFwaS5qc3hcIik7XG5cbnZhciBfU2VydmVyQXBpMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NlcnZlckFwaSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBIb21lQWN0aW9ucyA9IHtcblx0LypcbiBcdGdldFJvbGUoKSB7XG4gXHRcdEFwcERpc3BhdGNoZXIuZGlzcGF0Y2goe1xuIFx0XHRcdHR5cGU6IEhvbWVBY3Rpb25UeXBlcy4sXG4gXHRcdH0pO1xuIFx0fSxcbiAqL1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSG9tZUFjdGlvbnM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hY3Rpb25zL0hvbWVBY3Rpb25zLmpzeFxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgRGV2UHJvcHMgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoRGV2UHJvcHMsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIERldlByb3BzKCkge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZXZQcm9wcyk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKERldlByb3BzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRGV2UHJvcHMpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhEZXZQcm9wcywgW3tcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KERldkxpc3QsIHsgZGF0YTogdGhpcy5wcm9wcy5kYXRhIH0pO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBEZXZQcm9wcztcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRGV2UHJvcHM7XG5cbnZhciBEZXZMaXN0ID0gZXhwb3J0cy5EZXZMaXN0ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQyKSB7XG5cdF9pbmhlcml0cyhEZXZMaXN0LCBfUmVhY3QkQ29tcG9uZW50Mik7XG5cblx0ZnVuY3Rpb24gRGV2TGlzdCgpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGV2TGlzdCk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKERldkxpc3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEZXZMaXN0KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoRGV2TGlzdCwgW3tcblx0XHRrZXk6IFwicmVuZGVyXCIsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBfdGhpczMgPSB0aGlzO1xuXG5cdFx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJ1bFwiLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRPYmplY3Qua2V5cyh0aGlzLnByb3BzLmRhdGEpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcImxpXCIsXG5cdFx0XHRcdFx0XHR7IGtleToga2V5IH0sXG5cdFx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0XHRcIjpcXHhBMFwiLFxuXHRcdFx0XHRcdFx0X3R5cGVvZihfdGhpczMucHJvcHMuZGF0YVtrZXldKSAhPT0gXCJvYmplY3RcIiA/IF90aGlzMy5wcm9wcy5kYXRhW2tleV0gOiBSZWFjdC5jcmVhdGVFbGVtZW50KERldkxpc3QsIHsgZGF0YTogX3RoaXMzLnByb3BzLmRhdGFba2V5XSB9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBEZXZMaXN0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9zZXJ2aWNlL0RldlByb3BzLmpzeFxuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBMb2dpbk1lc3NhZ2UgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoTG9naW5NZXNzYWdlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBMb2dpbk1lc3NhZ2UocHJvcHMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9naW5NZXNzYWdlKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChMb2dpbk1lc3NhZ2UuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihMb2dpbk1lc3NhZ2UpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cblx0XHRfdGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1lc3NhZ2U6IF90aGlzLnByb3BzLm1lc3NhZ2Vcblx0XHR9O1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhMb2dpbk1lc3NhZ2UsIFt7XG5cdFx0a2V5OiBcInJlbmRlclwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgbWVzc2FnZSA9ICcnO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMubWVzc2FnZSkge1xuXHRcdFx0XHRtZXNzYWdlID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJzbWFsbFwiLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5tZXNzYWdlLFxuXHRcdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXG5cdFx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRtZXNzYWdlXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBMb2dpbk1lc3NhZ2U7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMb2dpbk1lc3NhZ2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xvZ2luL0xvZ2luTWVzc2FnZS5qc3hcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDM1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1c0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDektBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDek9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2piQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbDNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzsiLCJzb3VyY2VSb290IjoiIn0=