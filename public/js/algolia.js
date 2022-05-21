/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/checkOptions.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/checkOptions.js ***!
  \**************************************************************************/
/*! exports provided: checkOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkOptions", function() { return checkOptions; });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js");

function checkOptions(options) {
   true ? Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["warn"])(!options.debug, 'The `debug` option is meant for development debugging and should not be used in production.') : undefined;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/createAutocomplete.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/createAutocomplete.js ***!
  \********************************************************************************/
/*! exports provided: createAutocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAutocomplete", function() { return createAutocomplete; });
/* harmony import */ var _checkOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkOptions */ "./node_modules/@algolia/autocomplete-core/dist/esm/checkOptions.js");
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createStore */ "./node_modules/@algolia/autocomplete-core/dist/esm/createStore.js");
/* harmony import */ var _getAutocompleteSetters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getAutocompleteSetters */ "./node_modules/@algolia/autocomplete-core/dist/esm/getAutocompleteSetters.js");
/* harmony import */ var _getDefaultProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDefaultProps */ "./node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js");
/* harmony import */ var _getPropGetters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getPropGetters */ "./node_modules/@algolia/autocomplete-core/dist/esm/getPropGetters.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metadata */ "./node_modules/@algolia/autocomplete-core/dist/esm/metadata.js");
/* harmony import */ var _onInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onInput */ "./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js");
/* harmony import */ var _stateReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stateReducer */ "./node_modules/@algolia/autocomplete-core/dist/esm/stateReducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function createAutocomplete(options) {
  Object(_checkOptions__WEBPACK_IMPORTED_MODULE_0__["checkOptions"])(options);
  var subscribers = [];
  var props = Object(_getDefaultProps__WEBPACK_IMPORTED_MODULE_3__["getDefaultProps"])(options, subscribers);
  var store = Object(_createStore__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_stateReducer__WEBPACK_IMPORTED_MODULE_7__["stateReducer"], props, onStoreStateChange);
  var setters = Object(_getAutocompleteSetters__WEBPACK_IMPORTED_MODULE_2__["getAutocompleteSetters"])({
    store: store
  });
  var propGetters = Object(_getPropGetters__WEBPACK_IMPORTED_MODULE_4__["getPropGetters"])(_objectSpread({
    props: props,
    refresh: refresh,
    store: store
  }, setters));

  function onStoreStateChange(_ref) {
    var prevState = _ref.prevState,
        state = _ref.state;
    props.onStateChange(_objectSpread({
      prevState: prevState,
      state: state,
      refresh: refresh
    }, setters));
  }

  function refresh() {
    return Object(_onInput__WEBPACK_IMPORTED_MODULE_6__["onInput"])(_objectSpread({
      event: new Event('input'),
      nextState: {
        isOpen: store.getState().isOpen
      },
      props: props,
      query: store.getState().query,
      refresh: refresh,
      store: store
    }, setters));
  }

  props.plugins.forEach(function (plugin) {
    var _plugin$subscribe;

    return (_plugin$subscribe = plugin.subscribe) === null || _plugin$subscribe === void 0 ? void 0 : _plugin$subscribe.call(plugin, _objectSpread(_objectSpread({}, setters), {}, {
      refresh: refresh,
      onSelect: function onSelect(fn) {
        subscribers.push({
          onSelect: fn
        });
      },
      onActive: function onActive(fn) {
        subscribers.push({
          onActive: fn
        });
      }
    }));
  });
  Object(_metadata__WEBPACK_IMPORTED_MODULE_5__["injectMetadata"])({
    metadata: Object(_metadata__WEBPACK_IMPORTED_MODULE_5__["getMetadata"])({
      plugins: props.plugins,
      options: options
    }),
    environment: props.environment
  });
  return _objectSpread(_objectSpread({
    refresh: refresh
  }, propGetters), setters);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/createStore.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/createStore.js ***!
  \*************************************************************************/
/*! exports provided: createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function createStore(reducer, props, onStoreStateChange) {
  var state = props.initialState;
  return {
    getState: function getState() {
      return state;
    },
    dispatch: function dispatch(action, payload) {
      var prevState = _objectSpread({}, state);

      state = reducer(state, {
        type: action,
        props: props,
        payload: payload
      });
      onStoreStateChange({
        state: state,
        prevState: prevState
      });
    },
    pendingRequests: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createCancelablePromiseList"])()
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/getAutocompleteSetters.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/getAutocompleteSetters.js ***!
  \************************************************************************************/
/*! exports provided: getAutocompleteSetters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutocompleteSetters", function() { return getAutocompleteSetters; });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getAutocompleteSetters(_ref) {
  var store = _ref.store;

  var setActiveItemId = function setActiveItemId(value) {
    store.dispatch('setActiveItemId', value);
  };

  var setQuery = function setQuery(value) {
    store.dispatch('setQuery', value);
  };

  var setCollections = function setCollections(rawValue) {
    var baseItemId = 0;
    var value = rawValue.map(function (collection) {
      return _objectSpread(_objectSpread({}, collection), {}, {
        // We flatten the stored items to support calling `getAlgoliaResults`
        // from the source itself.
        items: Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["flatten"])(collection.items).map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            __autocomplete_id: baseItemId++
          });
        })
      });
    });
    store.dispatch('setCollections', value);
  };

  var setIsOpen = function setIsOpen(value) {
    store.dispatch('setIsOpen', value);
  };

  var setStatus = function setStatus(value) {
    store.dispatch('setStatus', value);
  };

  var setContext = function setContext(value) {
    store.dispatch('setContext', value);
  };

  return {
    setActiveItemId: setActiveItemId,
    setQuery: setQuery,
    setCollections: setCollections,
    setIsOpen: setIsOpen,
    setStatus: setStatus,
    setContext: setContext
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/getCompletion.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/getCompletion.js ***!
  \***************************************************************************/
/*! exports provided: getCompletion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompletion", function() { return getCompletion; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js");

function getCompletion(_ref) {
  var _getActiveItem;

  var state = _ref.state;

  if (state.isOpen === false || state.activeItemId === null) {
    return null;
  }

  return ((_getActiveItem = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getActiveItem"])(state)) === null || _getActiveItem === void 0 ? void 0 : _getActiveItem.itemInputValue) || null;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js ***!
  \*****************************************************************************/
/*! exports provided: getDefaultProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultProps", function() { return getDefaultProps; });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function getDefaultProps(props, pluginSubscribers) {
  var _props$id;

  /* eslint-disable no-restricted-globals */
  var environment = typeof window !== 'undefined' ? window : {};
  /* eslint-enable no-restricted-globals */

  var plugins = props.plugins || [];
  return _objectSpread(_objectSpread({
    debug: false,
    openOnFocus: false,
    placeholder: '',
    autoFocus: false,
    defaultActiveItemId: null,
    stallThreshold: 300,
    environment: environment,
    shouldPanelOpen: function shouldPanelOpen(_ref) {
      var state = _ref.state;
      return Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["getItemsCount"])(state) > 0;
    },
    reshape: function reshape(_ref2) {
      var sources = _ref2.sources;
      return sources;
    }
  }, props), {}, {
    // Since `generateAutocompleteId` triggers a side effect (it increments
    // an internal counter), we don't want to execute it if unnecessary.
    id: (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["generateAutocompleteId"])(),
    plugins: plugins,
    // The following props need to be deeply defaulted.
    initialState: _objectSpread({
      activeItemId: null,
      query: '',
      completion: null,
      collections: [],
      isOpen: false,
      status: 'idle',
      context: {}
    }, props.initialState),
    onStateChange: function onStateChange(params) {
      var _props$onStateChange;

      (_props$onStateChange = props.onStateChange) === null || _props$onStateChange === void 0 ? void 0 : _props$onStateChange.call(props, params);
      plugins.forEach(function (x) {
        var _x$onStateChange;

        return (_x$onStateChange = x.onStateChange) === null || _x$onStateChange === void 0 ? void 0 : _x$onStateChange.call(x, params);
      });
    },
    onSubmit: function onSubmit(params) {
      var _props$onSubmit;

      (_props$onSubmit = props.onSubmit) === null || _props$onSubmit === void 0 ? void 0 : _props$onSubmit.call(props, params);
      plugins.forEach(function (x) {
        var _x$onSubmit;

        return (_x$onSubmit = x.onSubmit) === null || _x$onSubmit === void 0 ? void 0 : _x$onSubmit.call(x, params);
      });
    },
    onReset: function onReset(params) {
      var _props$onReset;

      (_props$onReset = props.onReset) === null || _props$onReset === void 0 ? void 0 : _props$onReset.call(props, params);
      plugins.forEach(function (x) {
        var _x$onReset;

        return (_x$onReset = x.onReset) === null || _x$onReset === void 0 ? void 0 : _x$onReset.call(x, params);
      });
    },
    getSources: function getSources(params) {
      return Promise.all([].concat(_toConsumableArray(plugins.map(function (plugin) {
        return plugin.getSources;
      })), [props.getSources]).filter(Boolean).map(function (getSources) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getNormalizedSources"])(getSources, params);
      })).then(function (nested) {
        return Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["flatten"])(nested);
      }).then(function (sources) {
        return sources.map(function (source) {
          return _objectSpread(_objectSpread({}, source), {}, {
            onSelect: function onSelect(params) {
              source.onSelect(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onSelect;

                return (_x$onSelect = x.onSelect) === null || _x$onSelect === void 0 ? void 0 : _x$onSelect.call(x, params);
              });
            },
            onActive: function onActive(params) {
              source.onActive(params);
              pluginSubscribers.forEach(function (x) {
                var _x$onActive;

                return (_x$onActive = x.onActive) === null || _x$onActive === void 0 ? void 0 : _x$onActive.call(x, params);
              });
            }
          });
        });
      });
    },
    navigator: _objectSpread({
      navigate: function navigate(_ref3) {
        var itemUrl = _ref3.itemUrl;
        environment.location.assign(itemUrl);
      },
      navigateNewTab: function navigateNewTab(_ref4) {
        var itemUrl = _ref4.itemUrl;
        var windowReference = environment.open(itemUrl, '_blank', 'noopener');
        windowReference === null || windowReference === void 0 ? void 0 : windowReference.focus();
      },
      navigateNewWindow: function navigateNewWindow(_ref5) {
        var itemUrl = _ref5.itemUrl;
        environment.open(itemUrl, '_blank', 'noopener');
      }
    }, props.navigator)
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/getPropGetters.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/getPropGetters.js ***!
  \****************************************************************************/
/*! exports provided: getPropGetters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropGetters", function() { return getPropGetters; });
/* harmony import */ var _onInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onInput */ "./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js");
/* harmony import */ var _onKeyDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onKeyDown */ "./node_modules/@algolia/autocomplete-core/dist/esm/onKeyDown.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js");
var _excluded = ["props", "refresh", "store"],
    _excluded2 = ["inputElement", "formElement", "panelElement"],
    _excluded3 = ["inputElement"],
    _excluded4 = ["inputElement", "maxLength"],
    _excluded5 = ["item", "source"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function getPropGetters(_ref) {
  var props = _ref.props,
      refresh = _ref.refresh,
      store = _ref.store,
      setters = _objectWithoutProperties(_ref, _excluded);

  var getEnvironmentProps = function getEnvironmentProps(providedProps) {
    var inputElement = providedProps.inputElement,
        formElement = providedProps.formElement,
        panelElement = providedProps.panelElement,
        rest = _objectWithoutProperties(providedProps, _excluded2);

    return _objectSpread({
      // On touch devices, we do not rely on the native `blur` event of the
      // input to close the panel, but rather on a custom `touchstart` event
      // outside of the autocomplete elements.
      // This ensures a working experience on mobile because we blur the input
      // on touch devices when the user starts scrolling (`touchmove`).
      // @TODO: support cases where there are multiple Autocomplete instances.
      // Right now, a second instance makes this computation return false.
      onTouchStart: function onTouchStart(event) {
        // The `onTouchStart` event shouldn't trigger the `blur` handler when
        // it's not an interaction with Autocomplete. We detect it with the
        // following heuristics:
        // - the panel is closed AND there are no pending requests
        //   (no interaction with the autocomplete, no future state updates)
        // - OR the touched target is the input element (should open the panel)
        var isAutocompleteInteraction = store.getState().isOpen || !store.pendingRequests.isEmpty();

        if (!isAutocompleteInteraction || event.target === inputElement) {
          return;
        }

        var isTargetWithinAutocomplete = [formElement, panelElement].some(function (contextNode) {
          return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isOrContainsNode"])(contextNode, event.target);
        });

        if (isTargetWithinAutocomplete === false) {
          store.dispatch('blur', null); // If requests are still pending when the user closes the panel, they
          // could reopen the panel once they resolve.
          // We want to prevent any subsequent query from reopening the panel
          // because it would result in an unsolicited UI behavior.

          if (!props.debug) {
            store.pendingRequests.cancelAll();
          }
        }
      },
      // When scrolling on touch devices (mobiles, tablets, etc.), we want to
      // mimic the native platform behavior where the input is blurred to
      // hide the virtual keyboard. This gives more vertical space to
      // discover all the suggestions showing up in the panel.
      onTouchMove: function onTouchMove(event) {
        if (store.getState().isOpen === false || inputElement !== props.environment.document.activeElement || event.target === inputElement) {
          return;
        }

        inputElement.blur();
      }
    }, rest);
  };

  var getRootProps = function getRootProps(rest) {
    return _objectSpread({
      role: 'combobox',
      'aria-expanded': store.getState().isOpen,
      'aria-haspopup': 'listbox',
      'aria-owns': store.getState().isOpen ? "".concat(props.id, "-list") : undefined,
      'aria-labelledby': "".concat(props.id, "-label")
    }, rest);
  };

  var getFormProps = function getFormProps(providedProps) {
    var inputElement = providedProps.inputElement,
        rest = _objectWithoutProperties(providedProps, _excluded3);

    return _objectSpread({
      action: '',
      noValidate: true,
      role: 'search',
      onSubmit: function onSubmit(event) {
        var _providedProps$inputE;

        event.preventDefault();
        props.onSubmit(_objectSpread({
          event: event,
          refresh: refresh,
          state: store.getState()
        }, setters));
        store.dispatch('submit', null);
        (_providedProps$inputE = providedProps.inputElement) === null || _providedProps$inputE === void 0 ? void 0 : _providedProps$inputE.blur();
      },
      onReset: function onReset(event) {
        var _providedProps$inputE2;

        event.preventDefault();
        props.onReset(_objectSpread({
          event: event,
          refresh: refresh,
          state: store.getState()
        }, setters));
        store.dispatch('reset', null);
        (_providedProps$inputE2 = providedProps.inputElement) === null || _providedProps$inputE2 === void 0 ? void 0 : _providedProps$inputE2.focus();
      }
    }, rest);
  };

  var getInputProps = function getInputProps(providedProps) {
    var _props$environment$na;

    function onFocus(event) {
      // We want to trigger a query when `openOnFocus` is true
      // because the panel should open with the current query.
      if (props.openOnFocus || Boolean(store.getState().query)) {
        Object(_onInput__WEBPACK_IMPORTED_MODULE_0__["onInput"])(_objectSpread({
          event: event,
          props: props,
          query: store.getState().completion || store.getState().query,
          refresh: refresh,
          store: store
        }, setters));
      }

      store.dispatch('focus', null);
    }

    var isTouchDevice = ('ontouchstart' in props.environment);

    var _ref2 = providedProps || {},
        inputElement = _ref2.inputElement,
        _ref2$maxLength = _ref2.maxLength,
        maxLength = _ref2$maxLength === void 0 ? 512 : _ref2$maxLength,
        rest = _objectWithoutProperties(_ref2, _excluded4);

    var activeItem = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getActiveItem"])(store.getState());
    var userAgent = (_props$environment$na = props.environment.navigator) === null || _props$environment$na === void 0 ? void 0 : _props$environment$na.userAgent;
    var shouldFallbackKeyHint = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isSamsung"])(userAgent);
    var enterKeyHint = activeItem !== null && activeItem !== void 0 && activeItem.itemUrl && !shouldFallbackKeyHint ? 'go' : 'search';
    return _objectSpread({
      'aria-autocomplete': 'both',
      'aria-activedescendant': store.getState().isOpen && store.getState().activeItemId !== null ? "".concat(props.id, "-item-").concat(store.getState().activeItemId) : undefined,
      'aria-controls': store.getState().isOpen ? "".concat(props.id, "-list") : undefined,
      'aria-labelledby': "".concat(props.id, "-label"),
      value: store.getState().completion || store.getState().query,
      id: "".concat(props.id, "-input"),
      autoComplete: 'off',
      autoCorrect: 'off',
      autoCapitalize: 'off',
      enterKeyHint: enterKeyHint,
      spellCheck: 'false',
      autoFocus: props.autoFocus,
      placeholder: props.placeholder,
      maxLength: maxLength,
      type: 'search',
      onChange: function onChange(event) {
        Object(_onInput__WEBPACK_IMPORTED_MODULE_0__["onInput"])(_objectSpread({
          event: event,
          props: props,
          query: event.currentTarget.value.slice(0, maxLength),
          refresh: refresh,
          store: store
        }, setters));
      },
      onKeyDown: function onKeyDown(event) {
        Object(_onKeyDown__WEBPACK_IMPORTED_MODULE_1__["onKeyDown"])(_objectSpread({
          event: event,
          props: props,
          refresh: refresh,
          store: store
        }, setters));
      },
      onFocus: onFocus,
      onBlur: function onBlur() {
        // We do rely on the `blur` event on touch devices.
        // See explanation in `onTouchStart`.
        if (!isTouchDevice) {
          store.dispatch('blur', null); // If requests are still pending when the user closes the panel, they
          // could reopen the panel once they resolve.
          // We want to prevent any subsequent query from reopening the panel
          // because it would result in an unsolicited UI behavior.

          if (!props.debug) {
            store.pendingRequests.cancelAll();
          }
        }
      },
      onClick: function onClick(event) {
        // When the panel is closed and you click on the input while
        // the input is focused, the `onFocus` event is not triggered
        // (default browser behavior).
        // In an autocomplete context, it makes sense to open the panel in this
        // case.
        // We mimic this event by catching the `onClick` event which
        // triggers the `onFocus` for the panel to open.
        if (providedProps.inputElement === props.environment.document.activeElement && !store.getState().isOpen) {
          onFocus(event);
        }
      }
    }, rest);
  };

  var getLabelProps = function getLabelProps(rest) {
    return _objectSpread({
      htmlFor: "".concat(props.id, "-input"),
      id: "".concat(props.id, "-label")
    }, rest);
  };

  var getListProps = function getListProps(rest) {
    return _objectSpread({
      role: 'listbox',
      'aria-labelledby': "".concat(props.id, "-label"),
      id: "".concat(props.id, "-list")
    }, rest);
  };

  var getPanelProps = function getPanelProps(rest) {
    return _objectSpread({
      onMouseDown: function onMouseDown(event) {
        // Prevents the `activeElement` from being changed to the panel so
        // that the blur event is not triggered, otherwise it closes the
        // panel.
        event.preventDefault();
      },
      onMouseLeave: function onMouseLeave() {
        store.dispatch('mouseleave', null);
      }
    }, rest);
  };

  var getItemProps = function getItemProps(providedProps) {
    var item = providedProps.item,
        source = providedProps.source,
        rest = _objectWithoutProperties(providedProps, _excluded5);

    return _objectSpread({
      id: "".concat(props.id, "-item-").concat(item.__autocomplete_id),
      role: 'option',
      'aria-selected': store.getState().activeItemId === item.__autocomplete_id,
      onMouseMove: function onMouseMove(event) {
        if (item.__autocomplete_id === store.getState().activeItemId) {
          return;
        }

        store.dispatch('mousemove', item.__autocomplete_id);
        var activeItem = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getActiveItem"])(store.getState());

        if (store.getState().activeItemId !== null && activeItem) {
          var _item = activeItem.item,
              itemInputValue = activeItem.itemInputValue,
              itemUrl = activeItem.itemUrl,
              _source = activeItem.source;

          _source.onActive(_objectSpread({
            event: event,
            item: _item,
            itemInputValue: itemInputValue,
            itemUrl: itemUrl,
            refresh: refresh,
            source: _source,
            state: store.getState()
          }, setters));
        }
      },
      onMouseDown: function onMouseDown(event) {
        // Prevents the `activeElement` from being changed to the item so it
        // can remain with the current `activeElement`.
        event.preventDefault();
      },
      onClick: function onClick(event) {
        var itemInputValue = source.getItemInputValue({
          item: item,
          state: store.getState()
        });
        var itemUrl = source.getItemUrl({
          item: item,
          state: store.getState()
        }); // If `getItemUrl` is provided, it means that the suggestion
        // is a link, not plain text that aims at updating the query.
        // We can therefore skip the state change because it will update
        // the `activeItemId`, resulting in a UI flash, especially
        // noticeable on mobile.

        var runPreCommand = itemUrl ? Promise.resolve() : Object(_onInput__WEBPACK_IMPORTED_MODULE_0__["onInput"])(_objectSpread({
          event: event,
          nextState: {
            isOpen: false
          },
          props: props,
          query: itemInputValue,
          refresh: refresh,
          store: store
        }, setters));
        runPreCommand.then(function () {
          source.onSelect(_objectSpread({
            event: event,
            item: item,
            itemInputValue: itemInputValue,
            itemUrl: itemUrl,
            refresh: refresh,
            source: source,
            state: store.getState()
          }, setters));
        });
      }
    }, rest);
  };

  return {
    getEnvironmentProps: getEnvironmentProps,
    getRootProps: getRootProps,
    getFormProps: getFormProps,
    getLabelProps: getLabelProps,
    getInputProps: getInputProps,
    getPanelProps: getPanelProps,
    getListProps: getListProps,
    getItemProps: getItemProps
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/index.js ***!
  \*******************************************************************/
/*! exports provided: createAutocomplete, getDefaultProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createAutocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAutocomplete */ "./node_modules/@algolia/autocomplete-core/dist/esm/createAutocomplete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAutocomplete", function() { return _createAutocomplete__WEBPACK_IMPORTED_MODULE_0__["createAutocomplete"]; });

/* harmony import */ var _getDefaultProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDefaultProps */ "./node_modules/@algolia/autocomplete-core/dist/esm/getDefaultProps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultProps", function() { return _getDefaultProps__WEBPACK_IMPORTED_MODULE_1__["getDefaultProps"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/@algolia/autocomplete-core/dist/esm/types/index.js");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/metadata.js ***!
  \**********************************************************************/
/*! exports provided: getMetadata, injectMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetadata", function() { return getMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectMetadata", function() { return injectMetadata; });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getMetadata(_ref) {
  var _, _options$__autocomple, _options$__autocomple2, _options$__autocomple3;

  var plugins = _ref.plugins,
      options = _ref.options;
  var optionsKey = (_ = (((_options$__autocomple = options.__autocomplete_metadata) === null || _options$__autocomple === void 0 ? void 0 : _options$__autocomple.userAgents) || [])[0]) === null || _ === void 0 ? void 0 : _.segment;
  var extraOptions = optionsKey ? _defineProperty({}, optionsKey, Object.keys(((_options$__autocomple2 = options.__autocomplete_metadata) === null || _options$__autocomple2 === void 0 ? void 0 : _options$__autocomple2.options) || {})) : {};
  return {
    plugins: plugins.map(function (plugin) {
      return {
        name: plugin.name,
        options: Object.keys(plugin.__autocomplete_pluginOptions || [])
      };
    }),
    options: _objectSpread({
      'autocomplete-core': Object.keys(options)
    }, extraOptions),
    ua: _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["userAgents"].concat(((_options$__autocomple3 = options.__autocomplete_metadata) === null || _options$__autocomple3 === void 0 ? void 0 : _options$__autocomple3.userAgents) || [])
  };
}
function injectMetadata(_ref3) {
  var _environment$navigato;

  var metadata = _ref3.metadata,
      environment = _ref3.environment;
  var isMetadataEnabled = (_environment$navigato = environment.navigator) === null || _environment$navigato === void 0 ? void 0 : _environment$navigato.userAgent.includes('Algolia Crawler');

  if (isMetadataEnabled) {
    var metadataContainer = environment.document.createElement('meta');
    var headRef = environment.document.querySelector('head');
    metadataContainer.name = 'algolia:metadata';
    setTimeout(function () {
      metadataContainer.content = JSON.stringify(metadata);
      headRef.appendChild(metadataContainer);
    }, 0);
  }
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js ***!
  \*********************************************************************/
/*! exports provided: onInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onInput", function() { return onInput; });
/* harmony import */ var _reshape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reshape */ "./node_modules/@algolia/autocomplete-core/dist/esm/reshape.js");
/* harmony import */ var _resolve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolve */ "./node_modules/@algolia/autocomplete-core/dist/esm/resolve.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js");
var _excluded = ["event", "nextState", "props", "query", "refresh", "store"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var lastStalledId = null;
var runConcurrentSafePromise = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createConcurrentSafePromise"])();
function onInput(_ref) {
  var event = _ref.event,
      _ref$nextState = _ref.nextState,
      nextState = _ref$nextState === void 0 ? {} : _ref$nextState,
      props = _ref.props,
      query = _ref.query,
      refresh = _ref.refresh,
      store = _ref.store,
      setters = _objectWithoutProperties(_ref, _excluded);

  if (lastStalledId) {
    props.environment.clearTimeout(lastStalledId);
  }

  var setCollections = setters.setCollections,
      setIsOpen = setters.setIsOpen,
      setQuery = setters.setQuery,
      setActiveItemId = setters.setActiveItemId,
      setStatus = setters.setStatus;
  setQuery(query);
  setActiveItemId(props.defaultActiveItemId);

  if (!query && props.openOnFocus === false) {
    var _nextState$isOpen;

    var collections = store.getState().collections.map(function (collection) {
      return _objectSpread(_objectSpread({}, collection), {}, {
        items: []
      });
    });
    setStatus('idle');
    setCollections(collections);
    setIsOpen((_nextState$isOpen = nextState.isOpen) !== null && _nextState$isOpen !== void 0 ? _nextState$isOpen : props.shouldPanelOpen({
      state: store.getState()
    })); // We make sure to update the latest resolved value of the tracked
    // promises to keep late resolving promises from "cancelling" the state
    // updates performed in this code path.
    // We chain with a void promise to respect `onInput`'s expected return type.

    var _request = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["cancelable"])(runConcurrentSafePromise(collections).then(function () {
      return Promise.resolve();
    }));

    return store.pendingRequests.add(_request);
  }

  setStatus('loading');
  lastStalledId = props.environment.setTimeout(function () {
    setStatus('stalled');
  }, props.stallThreshold); // We track the entire promise chain triggered by `onInput` before mutating
  // the Autocomplete state to make sure that any state manipulation is based on
  // fresh data regardless of when promises individually resolve.
  // We don't track nested promises and only rely on the full chain resolution,
  // meaning we should only ever manipulate the state once this concurrent-safe
  // promise is resolved.

  var request = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["cancelable"])(runConcurrentSafePromise(props.getSources(_objectSpread({
    query: query,
    refresh: refresh,
    state: store.getState()
  }, setters)).then(function (sources) {
    return Promise.all(sources.map(function (source) {
      return Promise.resolve(source.getItems(_objectSpread({
        query: query,
        refresh: refresh,
        state: store.getState()
      }, setters))).then(function (itemsOrDescription) {
        return Object(_resolve__WEBPACK_IMPORTED_MODULE_1__["preResolve"])(itemsOrDescription, source.sourceId);
      });
    })).then(_resolve__WEBPACK_IMPORTED_MODULE_1__["resolve"]).then(function (responses) {
      return Object(_resolve__WEBPACK_IMPORTED_MODULE_1__["postResolve"])(responses, sources);
    }).then(function (collections) {
      return Object(_reshape__WEBPACK_IMPORTED_MODULE_0__["reshape"])({
        collections: collections,
        props: props,
        state: store.getState()
      });
    });
  }))).then(function (collections) {
    var _nextState$isOpen2;

    // Parameters passed to `onInput` could be stale when the following code
    // executes, because `onInput` calls may not resolve in order.
    // If it becomes a problem we'll need to save the last passed parameters.
    // See: https://codesandbox.io/s/agitated-cookies-y290z
    setStatus('idle');
    setCollections(collections);
    var isPanelOpen = props.shouldPanelOpen({
      state: store.getState()
    });
    setIsOpen((_nextState$isOpen2 = nextState.isOpen) !== null && _nextState$isOpen2 !== void 0 ? _nextState$isOpen2 : props.openOnFocus && !query && isPanelOpen || isPanelOpen);
    var highlightedItem = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getActiveItem"])(store.getState());

    if (store.getState().activeItemId !== null && highlightedItem) {
      var item = highlightedItem.item,
          itemInputValue = highlightedItem.itemInputValue,
          itemUrl = highlightedItem.itemUrl,
          source = highlightedItem.source;
      source.onActive(_objectSpread({
        event: event,
        item: item,
        itemInputValue: itemInputValue,
        itemUrl: itemUrl,
        refresh: refresh,
        source: source,
        state: store.getState()
      }, setters));
    }
  }).finally(function () {
    setStatus('idle');

    if (lastStalledId) {
      props.environment.clearTimeout(lastStalledId);
    }
  });
  return store.pendingRequests.add(request);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/onKeyDown.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/onKeyDown.js ***!
  \***********************************************************************/
/*! exports provided: onKeyDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onKeyDown", function() { return onKeyDown; });
/* harmony import */ var _onInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onInput */ "./node_modules/@algolia/autocomplete-core/dist/esm/onInput.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js");
var _excluded = ["event", "props", "refresh", "store"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function onKeyDown(_ref) {
  var event = _ref.event,
      props = _ref.props,
      refresh = _ref.refresh,
      store = _ref.store,
      setters = _objectWithoutProperties(_ref, _excluded);

  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    // eslint-disable-next-line no-inner-declarations
    var triggerScrollIntoView = function triggerScrollIntoView() {
      var nodeItem = props.environment.document.getElementById("".concat(props.id, "-item-").concat(store.getState().activeItemId));

      if (nodeItem) {
        if (nodeItem.scrollIntoViewIfNeeded) {
          nodeItem.scrollIntoViewIfNeeded(false);
        } else {
          nodeItem.scrollIntoView(false);
        }
      }
    }; // eslint-disable-next-line no-inner-declarations


    var triggerOnActive = function triggerOnActive() {
      var highlightedItem = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getActiveItem"])(store.getState());

      if (store.getState().activeItemId !== null && highlightedItem) {
        var item = highlightedItem.item,
            itemInputValue = highlightedItem.itemInputValue,
            itemUrl = highlightedItem.itemUrl,
            source = highlightedItem.source;
        source.onActive(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
      }
    }; // Default browser behavior changes the caret placement on ArrowUp and
    // ArrowDown.


    event.preventDefault(); // When re-opening the panel, we need to split the logic to keep the actions
    // synchronized as `onInput` returns a promise.

    if (store.getState().isOpen === false && (props.openOnFocus || Boolean(store.getState().query))) {
      Object(_onInput__WEBPACK_IMPORTED_MODULE_0__["onInput"])(_objectSpread({
        event: event,
        props: props,
        query: store.getState().query,
        refresh: refresh,
        store: store
      }, setters)).then(function () {
        store.dispatch(event.key, {
          nextActiveItemId: props.defaultActiveItemId
        });
        triggerOnActive(); // Since we rely on the DOM, we need to wait for all the micro tasks to
        // finish (which include re-opening the panel) to make sure all the
        // elements are available.

        setTimeout(triggerScrollIntoView, 0);
      });
    } else {
      store.dispatch(event.key, {});
      triggerOnActive();
      triggerScrollIntoView();
    }
  } else if (event.key === 'Escape') {
    // This prevents the default browser behavior on `input[type="search"]`
    // from removing the query right away because we first want to close the
    // panel.
    event.preventDefault();
    store.dispatch(event.key, null); // Hitting the `Escape` key signals the end of a user interaction with the
    // autocomplete. At this point, we should ignore any requests that are still
    // pending and could reopen the panel once they resolve, because that would
    // result in an unsolicited UI behavior.

    store.pendingRequests.cancelAll();
  } else if (event.key === 'Enter') {
    // No active item, so we let the browser handle the native `onSubmit` form
    // event.
    if (store.getState().activeItemId === null || store.getState().collections.every(function (collection) {
      return collection.items.length === 0;
    })) {
      return;
    } // This prevents the `onSubmit` event to be sent because an item is
    // highlighted.


    event.preventDefault();

    var _ref2 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getActiveItem"])(store.getState()),
        item = _ref2.item,
        itemInputValue = _ref2.itemInputValue,
        itemUrl = _ref2.itemUrl,
        source = _ref2.source;

    if (event.metaKey || event.ctrlKey) {
      if (itemUrl !== undefined) {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigateNewTab({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
      }
    } else if (event.shiftKey) {
      if (itemUrl !== undefined) {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigateNewWindow({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
      }
    } else if (event.altKey) {// Keep native browser behavior
    } else {
      if (itemUrl !== undefined) {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
        props.navigator.navigate({
          itemUrl: itemUrl,
          item: item,
          state: store.getState()
        });
        return;
      }

      Object(_onInput__WEBPACK_IMPORTED_MODULE_0__["onInput"])(_objectSpread({
        event: event,
        nextState: {
          isOpen: false
        },
        props: props,
        query: itemInputValue,
        refresh: refresh,
        store: store
      }, setters)).then(function () {
        source.onSelect(_objectSpread({
          event: event,
          item: item,
          itemInputValue: itemInputValue,
          itemUrl: itemUrl,
          refresh: refresh,
          source: source,
          state: store.getState()
        }, setters));
      });
    }
  }
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/reshape.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/reshape.js ***!
  \*********************************************************************/
/*! exports provided: reshape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reshape", function() { return reshape; });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function reshape(_ref) {
  var collections = _ref.collections,
      props = _ref.props,
      state = _ref.state;
  // Sources are grouped by `sourceId` to conveniently pick them via destructuring.
  // Example: `const { recentSearchesPlugin } = sourcesBySourceId`
  var sourcesBySourceId = collections.reduce(function (acc, collection) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, collection.source.sourceId, _objectSpread(_objectSpread({}, collection.source), {}, {
      getItems: function getItems() {
        // We provide the resolved items from the collection to the `reshape` prop.
        return Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["flatten"])(collection.items);
      }
    })));
  }, {});
  var reshapeSources = props.reshape({
    sources: Object.values(sourcesBySourceId),
    sourcesBySourceId: sourcesBySourceId,
    state: state
  }); // We reconstruct the collections with the items modified by the `reshape` prop.

  return Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["flatten"])(reshapeSources).filter(Boolean).map(function (source) {
    return {
      source: source,
      items: source.getItems()
    };
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/resolve.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/resolve.js ***!
  \*********************************************************************/
/*! exports provided: preResolve, resolve, postResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preResolve", function() { return preResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return resolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postResolve", function() { return postResolve; });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function isDescription(item) {
  return Boolean(item.execute);
}

function isRequesterDescription(description) {
  return Boolean(description === null || description === void 0 ? void 0 : description.execute);
}

function preResolve(itemsOrDescription, sourceId) {
  if (isRequesterDescription(itemsOrDescription)) {
    return _objectSpread(_objectSpread({}, itemsOrDescription), {}, {
      requests: itemsOrDescription.queries.map(function (query) {
        return {
          query: query,
          sourceId: sourceId,
          transformResponse: itemsOrDescription.transformResponse
        };
      })
    });
  }

  return {
    items: itemsOrDescription,
    sourceId: sourceId
  };
}
function resolve(items) {
  var packed = items.reduce(function (acc, current) {
    if (!isDescription(current)) {
      acc.push(current);
      return acc;
    }

    var searchClient = current.searchClient,
        execute = current.execute,
        requesterId = current.requesterId,
        requests = current.requests;
    var container = acc.find(function (item) {
      return isDescription(current) && isDescription(item) && item.searchClient === searchClient && Boolean(requesterId) && item.requesterId === requesterId;
    });

    if (container) {
      var _container$items;

      (_container$items = container.items).push.apply(_container$items, _toConsumableArray(requests));
    } else {
      var request = {
        execute: execute,
        requesterId: requesterId,
        items: requests,
        searchClient: searchClient
      };
      acc.push(request);
    }

    return acc;
  }, []);
  var values = packed.map(function (maybeDescription) {
    if (!isDescription(maybeDescription)) {
      return Promise.resolve(maybeDescription);
    }

    var _ref = maybeDescription,
        execute = _ref.execute,
        items = _ref.items,
        searchClient = _ref.searchClient;
    return execute({
      searchClient: searchClient,
      requests: items
    });
  });
  return Promise.all(values).then(function (responses) {
    return Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["flatten"])(responses);
  });
}
function postResolve(responses, sources) {
  return sources.map(function (source) {
    var matches = responses.filter(function (response) {
      return response.sourceId === source.sourceId;
    });
    var results = matches.map(function (_ref2) {
      var items = _ref2.items;
      return items;
    });
    var transform = matches[0].transformResponse;
    var items = transform ? transform(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["mapToAlgoliaResponse"])(results)) : results;
    Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["invariant"])(Array.isArray(items), function () {
      return "The `getItems` function from source \"".concat(source.sourceId, "\" must return an array of items but returned type ").concat(JSON.stringify(_typeof(items)), ":\n\n").concat(JSON.stringify(Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["decycle"])(items), null, 2), ".\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems");
    });
    Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["invariant"])(items.every(Boolean), "The `getItems` function from source \"".concat(source.sourceId, "\" must return an array of items but returned ").concat(JSON.stringify(undefined), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"));
    return {
      source: source,
      items: items
    };
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/stateReducer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/stateReducer.js ***!
  \**************************************************************************/
/*! exports provided: stateReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateReducer", function() { return stateReducer; });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js");
/* harmony import */ var _getCompletion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCompletion */ "./node_modules/@algolia/autocomplete-core/dist/esm/getCompletion.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var stateReducer = function stateReducer(state, action) {
  switch (action.type) {
    case 'setActiveItemId':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.payload
        });
      }

    case 'setQuery':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          query: action.payload,
          completion: null
        });
      }

    case 'setCollections':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          collections: action.payload
        });
      }

    case 'setIsOpen':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isOpen: action.payload
        });
      }

    case 'setStatus':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          status: action.payload
        });
      }

    case 'setContext':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          context: _objectSpread(_objectSpread({}, state.context), action.payload)
        });
      }

    case 'ArrowDown':
      {
        var nextState = _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.payload.hasOwnProperty('nextActiveItemId') ? action.payload.nextActiveItemId : Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getNextActiveItemId"])(1, state.activeItemId, Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["getItemsCount"])(state), action.props.defaultActiveItemId)
        });

        return _objectSpread(_objectSpread({}, nextState), {}, {
          completion: Object(_getCompletion__WEBPACK_IMPORTED_MODULE_1__["getCompletion"])({
            state: nextState
          })
        });
      }

    case 'ArrowUp':
      {
        var _nextState = _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getNextActiveItemId"])(-1, state.activeItemId, Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["getItemsCount"])(state), action.props.defaultActiveItemId)
        });

        return _objectSpread(_objectSpread({}, _nextState), {}, {
          completion: Object(_getCompletion__WEBPACK_IMPORTED_MODULE_1__["getCompletion"])({
            state: _nextState
          })
        });
      }

    case 'Escape':
      {
        if (state.isOpen) {
          return _objectSpread(_objectSpread({}, state), {}, {
            activeItemId: null,
            isOpen: false,
            completion: null
          });
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: null,
          query: '',
          status: 'idle',
          collections: []
        });
      }

    case 'submit':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: null,
          isOpen: false,
          status: 'idle'
        });
      }

    case 'reset':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: // Since we open the panel on reset when openOnFocus=true
          // we need to restore the highlighted index to the defaultActiveItemId. (DocSearch use-case)
          // Since we close the panel when openOnFocus=false
          // we lose track of the highlighted index. (Query-suggestions use-case)
          action.props.openOnFocus === true ? action.props.defaultActiveItemId : null,
          status: 'idle',
          query: ''
        });
      }

    case 'focus':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.props.defaultActiveItemId,
          isOpen: (action.props.openOnFocus || Boolean(state.query)) && action.props.shouldPanelOpen({
            state: state
          })
        });
      }

    case 'blur':
      {
        if (action.props.debug) {
          return state;
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          isOpen: false,
          activeItemId: null
        });
      }

    case 'mousemove':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.payload
        });
      }

    case 'mouseleave':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeItemId: action.props.defaultActiveItemId
        });
      }

    default:
      Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["invariant"])(false, "The reducer action ".concat(JSON.stringify(action.type), " is not supported."));
      return state;
  }
};

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteApi.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteApi.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteCollection.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteCollection.js ***!
  \******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteContext.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteContext.js ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteEnvironment.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteEnvironment.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteOptions.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteOptions.js ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompletePlugin.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompletePlugin.js ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompletePropGetters.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompletePropGetters.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteReshape.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteReshape.js ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteSetters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteSetters.js ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteSource.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteSource.js ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteState.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteState.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteStore.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteStore.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteSubscribers.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteSubscribers.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/types/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/types/index.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutocompleteApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutocompleteApi */ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteApi.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutocompleteCollection */ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteCollection.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutocompleteContext */ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteContext.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteEnvironment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AutocompleteEnvironment */ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteEnvironment.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AutocompleteOptions */ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteOptions.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AutocompleteSource */ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteSource.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompletePropGetters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AutocompletePropGetters */ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompletePropGetters.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompletePlugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AutocompletePlugin */ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompletePlugin.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteReshape__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AutocompleteReshape */ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteReshape.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteSetters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AutocompleteSetters */ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteSetters.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AutocompleteState */ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteState.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AutocompleteStore */ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteStore.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteSubscribers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AutocompleteSubscribers */ "./node_modules/@algolia/autocomplete-core/dist/esm/types/AutocompleteSubscribers.js");
/* empty/unused harmony star reexport */













/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromise.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromise.js ***!
  \*******************************************************************************************/
/*! exports provided: createCancelablePromise, cancelable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCancelablePromise", function() { return createCancelablePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelable", function() { return cancelable; });
function createInternalCancelablePromise(promise, initialState) {
  var state = initialState;
  return {
    then: function then(onfulfilled, onrejected) {
      return createInternalCancelablePromise(promise.then(createCallback(onfulfilled, state, promise), createCallback(onrejected, state, promise)), state);
    },
    catch: function _catch(onrejected) {
      return createInternalCancelablePromise(promise.catch(createCallback(onrejected, state, promise)), state);
    },
    finally: function _finally(onfinally) {
      if (onfinally) {
        state.onCancelList.push(onfinally);
      }

      return createInternalCancelablePromise(promise.finally(createCallback(onfinally && function () {
        state.onCancelList = [];
        return onfinally();
      }, state, promise)), state);
    },
    cancel: function cancel() {
      state.isCanceled = true;
      var callbacks = state.onCancelList;
      state.onCancelList = [];
      callbacks.forEach(function (callback) {
        callback();
      });
    },
    isCanceled: function isCanceled() {
      return state.isCanceled === true;
    }
  };
}

function createCancelablePromise(executor) {
  return createInternalCancelablePromise(new Promise(function (resolve, reject) {
    return executor(resolve, reject);
  }), {
    isCanceled: false,
    onCancelList: []
  });
}

createCancelablePromise.resolve = function (value) {
  return cancelable(Promise.resolve(value));
};

createCancelablePromise.reject = function (reason) {
  return cancelable(Promise.reject(reason));
};

function cancelable(promise) {
  return createInternalCancelablePromise(promise, {
    isCanceled: false,
    onCancelList: []
  });
}

function createCallback(onResult, state, fallback) {
  if (!onResult) {
    return fallback;
  }

  return function callback(arg) {
    if (state.isCanceled) {
      return arg;
    }

    return onResult(arg);
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromiseList.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromiseList.js ***!
  \***********************************************************************************************/
/*! exports provided: createCancelablePromiseList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCancelablePromiseList", function() { return createCancelablePromiseList; });
function createCancelablePromiseList() {
  var list = [];
  return {
    add: function add(cancelablePromise) {
      list.push(cancelablePromise);
      return cancelablePromise.finally(function () {
        list = list.filter(function (item) {
          return item !== cancelablePromise;
        });
      });
    },
    cancelAll: function cancelAll() {
      list.forEach(function (promise) {
        return promise.cancel();
      });
    },
    isEmpty: function isEmpty() {
      return list.length === 0;
    }
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createConcurrentSafePromise.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/createConcurrentSafePromise.js ***!
  \***********************************************************************************************/
/*! exports provided: createConcurrentSafePromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConcurrentSafePromise", function() { return createConcurrentSafePromise; });
/**
 * Creates a runner that executes promises in a concurrent-safe way.
 *
 * This is useful to prevent older promises to resolve after a newer promise,
 * otherwise resulting in stale resolved values.
 */
function createConcurrentSafePromise() {
  var basePromiseId = -1;
  var latestResolvedId = -1;
  var latestResolvedValue = undefined;
  return function runConcurrentSafePromise(promise) {
    basePromiseId++;
    var currentPromiseId = basePromiseId;
    return Promise.resolve(promise).then(function (x) {
      // The promise might take too long to resolve and get outdated. This would
      // result in resolving stale values.
      // When this happens, we ignore the promise value and return the one
      // coming from the latest resolved value.
      //
      // +----------------------------------+
      // |        100ms                     |
      // | run(1) +--->  R1                 |
      // |        300ms                     |
      // | run(2) +-------------> R2 (SKIP) |
      // |        200ms                     |
      // | run(3) +--------> R3             |
      // +----------------------------------+
      if (latestResolvedValue && currentPromiseId < latestResolvedId) {
        return latestResolvedValue;
      }

      latestResolvedId = currentPromiseId;
      latestResolvedValue = x;
      return x;
    });
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js ***!
  \*********************************************************************************/
/*! exports provided: getActiveItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveItem", function() { return getActiveItem; });
// We don't have access to the autocomplete source when we call `onKeyDown`
// or `onClick` because those are native browser events.
// However, we can get the source from the suggestion index.
function getCollectionFromActiveItemId(state) {
  // Given 3 sources with respectively 1, 2 and 3 suggestions: [1, 2, 3]
  // We want to get the accumulated counts:
  // [1, 1 + 2, 1 + 2 + 3] = [1, 3, 3 + 3] = [1, 3, 6]
  var accumulatedCollectionsCount = state.collections.map(function (collections) {
    return collections.items.length;
  }).reduce(function (acc, collectionsCount, index) {
    var previousValue = acc[index - 1] || 0;
    var nextValue = previousValue + collectionsCount;
    acc.push(nextValue);
    return acc;
  }, []); // Based on the accumulated counts, we can infer the index of the suggestion.

  var collectionIndex = accumulatedCollectionsCount.reduce(function (acc, current) {
    if (current <= state.activeItemId) {
      return acc + 1;
    }

    return acc;
  }, 0);
  return state.collections[collectionIndex];
}
/**
 * Gets the highlighted index relative to a suggestion object (not the absolute
 * highlighted index).
 *
 * Example:
 *  [['a', 'b'], ['c', 'd', 'e'], ['f']]
 *                      ↑
 *         (absolute: 3, relative: 1)
 */


function getRelativeActiveItemId(_ref) {
  var state = _ref.state,
      collection = _ref.collection;
  var isOffsetFound = false;
  var counter = 0;
  var previousItemsOffset = 0;

  while (isOffsetFound === false) {
    var currentCollection = state.collections[counter];

    if (currentCollection === collection) {
      isOffsetFound = true;
      break;
    }

    previousItemsOffset += currentCollection.items.length;
    counter++;
  }

  return state.activeItemId - previousItemsOffset;
}

function getActiveItem(state) {
  var collection = getCollectionFromActiveItemId(state);

  if (!collection) {
    return null;
  }

  var item = collection.items[getRelativeActiveItemId({
    state: state,
    collection: collection
  })];
  var source = collection.source;
  var itemInputValue = source.getItemInputValue({
    item: item,
    state: state
  });
  var itemUrl = source.getItemUrl({
    item: item,
    state: state
  });
  return {
    item: item,
    itemInputValue: itemInputValue,
    itemUrl: itemUrl,
    source: source
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNextActiveItemId.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNextActiveItemId.js ***!
  \***************************************************************************************/
/*! exports provided: getNextActiveItemId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextActiveItemId", function() { return getNextActiveItemId; });
/**
 * Returns the next active item ID from the current state.
 *
 * We allow circular keyboard navigation from the base index.
 * The base index can either be `null` (nothing is highlighted) or `0`
 * (the first item is highlighted).
 * The base index is allowed to get assigned `null` only if
 * `props.defaultActiveItemId` is `null`. This pattern allows to "stop"
 * by the actual query before navigating to other suggestions as seen on
 * Google or Amazon.
 *
 * @param moveAmount The offset to increment (or decrement) the last index
 * @param baseIndex The current index to compute the next index from
 * @param itemCount The number of items
 * @param defaultActiveItemId The default active index to fallback to
 */
function getNextActiveItemId(moveAmount, baseIndex, itemCount, defaultActiveItemId) {
  if (!itemCount) {
    return null;
  }

  if (moveAmount < 0 && (baseIndex === null || defaultActiveItemId !== null && baseIndex === 0)) {
    return itemCount + moveAmount;
  }

  var numericIndex = (baseIndex === null ? -1 : baseIndex) + moveAmount;

  if (numericIndex <= -1 || numericIndex >= itemCount) {
    return defaultActiveItemId === null ? null : 0;
  }

  return numericIndex;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNormalizedSources.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNormalizedSources.js ***!
  \****************************************************************************************/
/*! exports provided: getNormalizedSources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedSources", function() { return getNormalizedSources; });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


function getNormalizedSources(getSources, params) {
  var seenSourceIds = [];
  return Promise.resolve(getSources(params)).then(function (sources) {
    Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["invariant"])(Array.isArray(sources), function () {
      return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(_typeof(sources)), ":\n\n").concat(JSON.stringify(Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["decycle"])(sources), null, 2));
    });
    return Promise.all(sources // We allow `undefined` and `false` sources to allow users to use
    // `Boolean(query) && source` (=> `false`).
    // We need to remove these values at this point.
    .filter(function (maybeSource) {
      return Boolean(maybeSource);
    }).map(function (source) {
      Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["invariant"])(typeof source.sourceId === 'string', 'A source must provide a `sourceId` string.');

      if (seenSourceIds.includes(source.sourceId)) {
        throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(source.sourceId), " is not unique."));
      }

      seenSourceIds.push(source.sourceId);

      var normalizedSource = _objectSpread({
        getItemInputValue: function getItemInputValue(_ref) {
          var state = _ref.state;
          return state.query;
        },
        getItemUrl: function getItemUrl() {
          return undefined;
        },
        onSelect: function onSelect(_ref2) {
          var setIsOpen = _ref2.setIsOpen;
          setIsOpen(false);
        },
        onActive: _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["noop"]
      }, source);

      return Promise.resolve(normalizedSource);
    }));
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/index.js ***!
  \*************************************************************************/
/*! exports provided: createCancelablePromise, cancelable, createCancelablePromiseList, createConcurrentSafePromise, getNextActiveItemId, getNormalizedSources, getActiveItem, isOrContainsNode, isSamsung, mapToAlgoliaResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createCancelablePromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCancelablePromise */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCancelablePromise", function() { return _createCancelablePromise__WEBPACK_IMPORTED_MODULE_0__["createCancelablePromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelable", function() { return _createCancelablePromise__WEBPACK_IMPORTED_MODULE_0__["cancelable"]; });

/* harmony import */ var _createCancelablePromiseList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCancelablePromiseList */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createCancelablePromiseList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCancelablePromiseList", function() { return _createCancelablePromiseList__WEBPACK_IMPORTED_MODULE_1__["createCancelablePromiseList"]; });

/* harmony import */ var _createConcurrentSafePromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createConcurrentSafePromise */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/createConcurrentSafePromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createConcurrentSafePromise", function() { return _createConcurrentSafePromise__WEBPACK_IMPORTED_MODULE_2__["createConcurrentSafePromise"]; });

/* harmony import */ var _getNextActiveItemId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNextActiveItemId */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNextActiveItemId.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextActiveItemId", function() { return _getNextActiveItemId__WEBPACK_IMPORTED_MODULE_3__["getNextActiveItemId"]; });

/* harmony import */ var _getNormalizedSources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNormalizedSources */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getNormalizedSources.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNormalizedSources", function() { return _getNormalizedSources__WEBPACK_IMPORTED_MODULE_4__["getNormalizedSources"]; });

/* harmony import */ var _getActiveItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getActiveItem */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/getActiveItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveItem", function() { return _getActiveItem__WEBPACK_IMPORTED_MODULE_5__["getActiveItem"]; });

/* harmony import */ var _isOrContainsNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isOrContainsNode */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/isOrContainsNode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOrContainsNode", function() { return _isOrContainsNode__WEBPACK_IMPORTED_MODULE_6__["isOrContainsNode"]; });

/* harmony import */ var _isSamsung__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isSamsung */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/isSamsung.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSamsung", function() { return _isSamsung__WEBPACK_IMPORTED_MODULE_7__["isSamsung"]; });

/* harmony import */ var _mapToAlgoliaResponse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mapToAlgoliaResponse */ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/mapToAlgoliaResponse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapToAlgoliaResponse", function() { return _mapToAlgoliaResponse__WEBPACK_IMPORTED_MODULE_8__["mapToAlgoliaResponse"]; });











/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/isOrContainsNode.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/isOrContainsNode.js ***!
  \************************************************************************************/
/*! exports provided: isOrContainsNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOrContainsNode", function() { return isOrContainsNode; });
function isOrContainsNode(parent, child) {
  return parent === child || parent.contains(child);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/isSamsung.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/isSamsung.js ***!
  \*****************************************************************************/
/*! exports provided: isSamsung */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSamsung", function() { return isSamsung; });
var regex = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
function isSamsung(userAgent) {
  return Boolean(userAgent && userAgent.match(regex));
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-core/dist/esm/utils/mapToAlgoliaResponse.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-core/dist/esm/utils/mapToAlgoliaResponse.js ***!
  \****************************************************************************************/
/*! exports provided: mapToAlgoliaResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToAlgoliaResponse", function() { return mapToAlgoliaResponse; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function mapToAlgoliaResponse(rawResults) {
  var results = rawResults.map(function (result) {
    var _hits;

    return _objectSpread(_objectSpread({}, result), {}, {
      hits: (_hits = result.hits) === null || _hits === void 0 ? void 0 : _hits.map(function (hit) {
        // Bring support for the Insights plugin.
        return _objectSpread(_objectSpread({}, hit), {}, {
          __autocomplete_indexName: result.index,
          __autocomplete_queryID: result.queryID
        });
      })
    });
  });
  return {
    results: results,
    hits: results.map(function (result) {
      return result.hits;
    }).filter(Boolean),
    facetHits: results.map(function (result) {
      var _facetHits;

      return (_facetHits = result.facetHits) === null || _facetHits === void 0 ? void 0 : _facetHits.map(function (facetHit) {
        // Bring support for the highlighting components.
        return {
          label: facetHit.value,
          count: facetHit.count,
          _highlightResult: {
            label: {
              value: facetHit.highlighted
            }
          }
        };
      });
    }).filter(Boolean)
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/autocomplete.js":
/*!************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/autocomplete.js ***!
  \************************************************************************/
/*! exports provided: autocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autocomplete", function() { return autocomplete; });
/* harmony import */ var _algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-core */ "./node_modules/@algolia/autocomplete-core/dist/esm/index.js");
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js");
/* harmony import */ var htm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! htm */ "./node_modules/htm/dist/htm.module.js");
/* harmony import */ var _createAutocompleteDom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createAutocompleteDom */ "./node_modules/@algolia/autocomplete-js/dist/esm/createAutocompleteDom.js");
/* harmony import */ var _createEffectWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createEffectWrapper */ "./node_modules/@algolia/autocomplete-js/dist/esm/createEffectWrapper.js");
/* harmony import */ var _createReactiveWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createReactiveWrapper */ "./node_modules/@algolia/autocomplete-js/dist/esm/createReactiveWrapper.js");
/* harmony import */ var _getDefaultOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDefaultOptions */ "./node_modules/@algolia/autocomplete-js/dist/esm/getDefaultOptions.js");
/* harmony import */ var _getPanelPlacementStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getPanelPlacementStyle */ "./node_modules/@algolia/autocomplete-js/dist/esm/getPanelPlacementStyle.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./render */ "./node_modules/@algolia/autocomplete-js/dist/esm/render.js");
/* harmony import */ var _userAgents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userAgents */ "./node_modules/@algolia/autocomplete-js/dist/esm/userAgents.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/index.js");
var _excluded = ["components"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function autocomplete(options) {
  var _createEffectWrapper = Object(_createEffectWrapper__WEBPACK_IMPORTED_MODULE_4__["createEffectWrapper"])(),
      runEffect = _createEffectWrapper.runEffect,
      cleanupEffects = _createEffectWrapper.cleanupEffects,
      runEffects = _createEffectWrapper.runEffects;

  var _createReactiveWrappe = Object(_createReactiveWrapper__WEBPACK_IMPORTED_MODULE_5__["createReactiveWrapper"])(),
      reactive = _createReactiveWrappe.reactive,
      runReactives = _createReactiveWrappe.runReactives;

  var hasNoResultsSourceTemplateRef = Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__["createRef"])(false);
  var optionsRef = Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__["createRef"])(options);
  var onStateChangeRef = Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__["createRef"])(undefined);
  var props = reactive(function () {
    return Object(_getDefaultOptions__WEBPACK_IMPORTED_MODULE_6__["getDefaultOptions"])(optionsRef.current);
  });
  var isDetached = reactive(function () {
    return props.value.core.environment.matchMedia(props.value.renderer.detachedMediaQuery).matches;
  });
  var autocomplete = reactive(function () {
    return Object(_algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_0__["createAutocomplete"])(_objectSpread(_objectSpread({}, props.value.core), {}, {
      onStateChange: function onStateChange(params) {
        var _onStateChangeRef$cur, _props$value$core$onS, _props$value$core;

        hasNoResultsSourceTemplateRef.current = params.state.collections.some(function (collection) {
          return collection.source.templates.noResults;
        });
        (_onStateChangeRef$cur = onStateChangeRef.current) === null || _onStateChangeRef$cur === void 0 ? void 0 : _onStateChangeRef$cur.call(onStateChangeRef, params);
        (_props$value$core$onS = (_props$value$core = props.value.core).onStateChange) === null || _props$value$core$onS === void 0 ? void 0 : _props$value$core$onS.call(_props$value$core, params);
      },
      shouldPanelOpen: optionsRef.current.shouldPanelOpen || function (_ref) {
        var state = _ref.state;

        if (isDetached.value) {
          return true;
        }

        var hasItems = Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__["getItemsCount"])(state) > 0;

        if (!props.value.core.openOnFocus && !state.query) {
          return hasItems;
        }

        var hasNoResultsTemplate = Boolean(hasNoResultsSourceTemplateRef.current || props.value.renderer.renderNoResults);
        return !hasItems && hasNoResultsTemplate || hasItems;
      },
      __autocomplete_metadata: {
        userAgents: _userAgents__WEBPACK_IMPORTED_MODULE_9__["userAgents"],
        options: options
      }
    }));
  });
  var lastStateRef = Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__["createRef"])(_objectSpread({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: '',
    activeItemId: null,
    status: 'idle'
  }, props.value.core.initialState));
  var propGetters = {
    getEnvironmentProps: props.value.renderer.getEnvironmentProps,
    getFormProps: props.value.renderer.getFormProps,
    getInputProps: props.value.renderer.getInputProps,
    getItemProps: props.value.renderer.getItemProps,
    getLabelProps: props.value.renderer.getLabelProps,
    getListProps: props.value.renderer.getListProps,
    getPanelProps: props.value.renderer.getPanelProps,
    getRootProps: props.value.renderer.getRootProps
  };
  var autocompleteScopeApi = {
    setActiveItemId: autocomplete.value.setActiveItemId,
    setQuery: autocomplete.value.setQuery,
    setCollections: autocomplete.value.setCollections,
    setIsOpen: autocomplete.value.setIsOpen,
    setStatus: autocomplete.value.setStatus,
    setContext: autocomplete.value.setContext,
    refresh: autocomplete.value.refresh
  };
  var html = reactive(function () {
    return htm__WEBPACK_IMPORTED_MODULE_2__["default"].bind(props.value.renderer.renderer.createElement);
  });
  var dom = reactive(function () {
    return Object(_createAutocompleteDom__WEBPACK_IMPORTED_MODULE_3__["createAutocompleteDom"])({
      autocomplete: autocomplete.value,
      autocompleteScopeApi: autocompleteScopeApi,
      classNames: props.value.renderer.classNames,
      environment: props.value.core.environment,
      isDetached: isDetached.value,
      placeholder: props.value.core.placeholder,
      propGetters: propGetters,
      setIsModalOpen: setIsModalOpen,
      state: lastStateRef.current,
      translations: props.value.renderer.translations
    });
  });

  function setPanelPosition() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_10__["setProperties"])(dom.value.panel, {
      style: isDetached.value ? {} : Object(_getPanelPlacementStyle__WEBPACK_IMPORTED_MODULE_7__["getPanelPlacementStyle"])({
        panelPlacement: props.value.renderer.panelPlacement,
        container: dom.value.root,
        form: dom.value.form,
        environment: props.value.core.environment
      })
    });
  }

  function scheduleRender(state) {
    lastStateRef.current = state;
    var renderProps = {
      autocomplete: autocomplete.value,
      autocompleteScopeApi: autocompleteScopeApi,
      classNames: props.value.renderer.classNames,
      components: props.value.renderer.components,
      container: props.value.renderer.container,
      html: html.value,
      dom: dom.value,
      panelContainer: isDetached.value ? dom.value.detachedContainer : props.value.renderer.panelContainer,
      propGetters: propGetters,
      state: lastStateRef.current,
      renderer: props.value.renderer.renderer
    };
    var render = !Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__["getItemsCount"])(state) && !hasNoResultsSourceTemplateRef.current && props.value.renderer.renderNoResults || props.value.renderer.render;
    Object(_render__WEBPACK_IMPORTED_MODULE_8__["renderSearchBox"])(renderProps);
    Object(_render__WEBPACK_IMPORTED_MODULE_8__["renderPanel"])(render, renderProps);
  }

  runEffect(function () {
    var environmentProps = autocomplete.value.getEnvironmentProps({
      formElement: dom.value.form,
      panelElement: dom.value.panel,
      inputElement: dom.value.input
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_10__["setProperties"])(props.value.core.environment, environmentProps);
    return function () {
      Object(_utils__WEBPACK_IMPORTED_MODULE_10__["setProperties"])(props.value.core.environment, Object.keys(environmentProps).reduce(function (acc, key) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, undefined));
      }, {}));
    };
  });
  runEffect(function () {
    var panelContainerElement = isDetached.value ? props.value.core.environment.document.body : props.value.renderer.panelContainer;
    var panelElement = isDetached.value ? dom.value.detachedOverlay : dom.value.panel;

    if (isDetached.value && lastStateRef.current.isOpen) {
      setIsModalOpen(true);
    }

    scheduleRender(lastStateRef.current);
    return function () {
      if (panelContainerElement.contains(panelElement)) {
        panelContainerElement.removeChild(panelElement);
      }
    };
  });
  runEffect(function () {
    var containerElement = props.value.renderer.container;
    containerElement.appendChild(dom.value.root);
    return function () {
      containerElement.removeChild(dom.value.root);
    };
  });
  runEffect(function () {
    var debouncedRender = Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function (_ref2) {
      var state = _ref2.state;
      scheduleRender(state);
    }, 0);

    onStateChangeRef.current = function (_ref3) {
      var state = _ref3.state,
          prevState = _ref3.prevState;

      if (isDetached.value && prevState.isOpen !== state.isOpen) {
        setIsModalOpen(state.isOpen);
      } // The outer DOM might have changed since the last time the panel was
      // positioned. The layout might have shifted vertically for instance.
      // It's therefore safer to re-calculate the panel position before opening
      // it again.


      if (!isDetached.value && state.isOpen && !prevState.isOpen) {
        setPanelPosition();
      } // We scroll to the top of the panel whenever the query changes (i.e. new
      // results come in) so that users don't have to.


      if (state.query !== prevState.query) {
        var scrollablePanels = props.value.core.environment.document.querySelectorAll('.aa-Panel--scrollable');
        scrollablePanels.forEach(function (scrollablePanel) {
          if (scrollablePanel.scrollTop !== 0) {
            scrollablePanel.scrollTop = 0;
          }
        });
      }

      debouncedRender({
        state: state
      });
    };

    return function () {
      onStateChangeRef.current = undefined;
    };
  });
  runEffect(function () {
    var onResize = Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function () {
      var previousIsDetached = isDetached.value;
      isDetached.value = props.value.core.environment.matchMedia(props.value.renderer.detachedMediaQuery).matches;

      if (previousIsDetached !== isDetached.value) {
        update({});
      } else {
        requestAnimationFrame(setPanelPosition);
      }
    }, 20);
    props.value.core.environment.addEventListener('resize', onResize);
    return function () {
      props.value.core.environment.removeEventListener('resize', onResize);
    };
  });
  runEffect(function () {
    if (!isDetached.value) {
      return function () {};
    }

    function toggleModalClassname(isActive) {
      dom.value.detachedContainer.classList.toggle('aa-DetachedContainer--modal', isActive);
    }

    function onChange(event) {
      toggleModalClassname(event.matches);
    }

    var isModalDetachedMql = props.value.core.environment.matchMedia(getComputedStyle(props.value.core.environment.document.documentElement).getPropertyValue('--aa-detached-modal-media-query'));
    toggleModalClassname(isModalDetachedMql.matches); // Prior to Safari 14, `MediaQueryList` isn't based on `EventTarget`,
    // so we must use `addListener` and `removeListener` to observe media query lists.
    // See https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener

    var hasModernEventListener = Boolean(isModalDetachedMql.addEventListener);
    hasModernEventListener ? isModalDetachedMql.addEventListener('change', onChange) : isModalDetachedMql.addListener(onChange);
    return function () {
      hasModernEventListener ? isModalDetachedMql.removeEventListener('change', onChange) : isModalDetachedMql.removeListener(onChange);
    };
  });
  runEffect(function () {
    requestAnimationFrame(setPanelPosition);
    return function () {};
  });

  function destroy() {
    cleanupEffects();
  }

  function update() {
    var updatedOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    cleanupEffects();

    var _props$value$renderer = props.value.renderer,
        components = _props$value$renderer.components,
        rendererProps = _objectWithoutProperties(_props$value$renderer, _excluded);

    optionsRef.current = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["mergeDeep"])(rendererProps, props.value.core, {
      // We need to filter out default components so they can be replaced with
      // a new `renderer`, without getting rid of user components.
      // @MAJOR Deal with registering components with the same name as the
      // default ones. If we disallow overriding default components, we'd just
      // need to pass all `components` here.
      components: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["pickBy"])(components, function (_ref4) {
        var value = _ref4.value;
        return !value.hasOwnProperty('__autocomplete_componentName');
      }),
      initialState: lastStateRef.current
    }, updatedOptions);
    runReactives();
    runEffects();
    autocomplete.value.refresh().then(function () {
      scheduleRender(lastStateRef.current);
    });
  }

  function setIsModalOpen(value) {
    requestAnimationFrame(function () {
      var prevValue = props.value.core.environment.document.body.contains(dom.value.detachedOverlay);

      if (value === prevValue) {
        return;
      }

      if (value) {
        props.value.core.environment.document.body.appendChild(dom.value.detachedOverlay);
        props.value.core.environment.document.body.classList.add('aa-Detached');
        dom.value.input.focus();
      } else {
        props.value.core.environment.document.body.removeChild(dom.value.detachedOverlay);
        props.value.core.environment.document.body.classList.remove('aa-Detached');
        autocomplete.value.setQuery('');
        autocomplete.value.refresh();
      }
    });
  }

  return _objectSpread(_objectSpread({}, autocompleteScopeApi), {}, {
    update: update,
    destroy: destroy
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/components/Highlight.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/components/Highlight.js ***!
  \********************************************************************************/
/*! exports provided: createHighlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHighlightComponent", function() { return createHighlightComponent; });
/* harmony import */ var _algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-preset-algolia */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/index.js");

function createHighlightComponent(_ref) {
  var createElement = _ref.createElement,
      Fragment = _ref.Fragment;

  function Highlight(_ref2) {
    var hit = _ref2.hit,
        attribute = _ref2.attribute,
        _ref2$tagName = _ref2.tagName,
        tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, Object(_algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__["parseAlgoliaHitHighlight"])({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }

  Highlight.__autocomplete_componentName = 'Highlight';
  return Highlight;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseHighlight.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseHighlight.js ***!
  \***************************************************************************************/
/*! exports provided: createReverseHighlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReverseHighlightComponent", function() { return createReverseHighlightComponent; });
/* harmony import */ var _algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-preset-algolia */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/index.js");

function createReverseHighlightComponent(_ref) {
  var createElement = _ref.createElement,
      Fragment = _ref.Fragment;

  function ReverseHighlight(_ref2) {
    var hit = _ref2.hit,
        attribute = _ref2.attribute,
        _ref2$tagName = _ref2.tagName,
        tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, Object(_algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__["parseAlgoliaHitReverseHighlight"])({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }

  ReverseHighlight.__autocomplete_componentName = 'ReverseHighlight';
  return ReverseHighlight;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseSnippet.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseSnippet.js ***!
  \*************************************************************************************/
/*! exports provided: createReverseSnippetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReverseSnippetComponent", function() { return createReverseSnippetComponent; });
/* harmony import */ var _algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-preset-algolia */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/index.js");

function createReverseSnippetComponent(_ref) {
  var createElement = _ref.createElement,
      Fragment = _ref.Fragment;

  function ReverseSnippet(_ref2) {
    var hit = _ref2.hit,
        attribute = _ref2.attribute,
        _ref2$tagName = _ref2.tagName,
        tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, Object(_algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__["parseAlgoliaHitReverseSnippet"])({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }

  ReverseSnippet.__autocomplete_componentName = 'ReverseSnippet';
  return ReverseSnippet;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/components/Snippet.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/components/Snippet.js ***!
  \******************************************************************************/
/*! exports provided: createSnippetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSnippetComponent", function() { return createSnippetComponent; });
/* harmony import */ var _algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-preset-algolia */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/index.js");

function createSnippetComponent(_ref) {
  var createElement = _ref.createElement,
      Fragment = _ref.Fragment;

  function Snippet(_ref2) {
    var hit = _ref2.hit,
        attribute = _ref2.attribute,
        _ref2$tagName = _ref2.tagName,
        tagName = _ref2$tagName === void 0 ? 'mark' : _ref2$tagName;
    return createElement(Fragment, {}, Object(_algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__["parseAlgoliaHitSnippet"])({
      hit: hit,
      attribute: attribute
    }).map(function (x, index) {
      return x.isHighlighted ? createElement(tagName, {
        key: index
      }, x.value) : x.value;
    }));
  }

  Snippet.__autocomplete_componentName = 'Snippet';
  return Snippet;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/components/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/components/index.js ***!
  \****************************************************************************/
/*! exports provided: createHighlightComponent, createReverseHighlightComponent, createReverseSnippetComponent, createSnippetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Highlight */ "./node_modules/@algolia/autocomplete-js/dist/esm/components/Highlight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHighlightComponent", function() { return _Highlight__WEBPACK_IMPORTED_MODULE_0__["createHighlightComponent"]; });

/* harmony import */ var _ReverseHighlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReverseHighlight */ "./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseHighlight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReverseHighlightComponent", function() { return _ReverseHighlight__WEBPACK_IMPORTED_MODULE_1__["createReverseHighlightComponent"]; });

/* harmony import */ var _ReverseSnippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReverseSnippet */ "./node_modules/@algolia/autocomplete-js/dist/esm/components/ReverseSnippet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReverseSnippetComponent", function() { return _ReverseSnippet__WEBPACK_IMPORTED_MODULE_2__["createReverseSnippetComponent"]; });

/* harmony import */ var _Snippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Snippet */ "./node_modules/@algolia/autocomplete-js/dist/esm/components/Snippet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSnippetComponent", function() { return _Snippet__WEBPACK_IMPORTED_MODULE_3__["createSnippetComponent"]; });






/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/createAutocompleteDom.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/createAutocompleteDom.js ***!
  \*********************************************************************************/
/*! exports provided: createAutocompleteDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAutocompleteDom", function() { return createAutocompleteDom; });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/index.js");
/* harmony import */ var _getCreateDomElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCreateDomElement */ "./node_modules/@algolia/autocomplete-js/dist/esm/getCreateDomElement.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function createAutocompleteDom(_ref) {
  var autocomplete = _ref.autocomplete,
      autocompleteScopeApi = _ref.autocompleteScopeApi,
      classNames = _ref.classNames,
      environment = _ref.environment,
      isDetached = _ref.isDetached,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Search' : _ref$placeholder,
      propGetters = _ref.propGetters,
      setIsModalOpen = _ref.setIsModalOpen,
      state = _ref.state,
      translations = _ref.translations;
  var createDomElement = Object(_getCreateDomElement__WEBPACK_IMPORTED_MODULE_1__["getCreateDomElement"])(environment);
  var rootProps = propGetters.getRootProps(_objectSpread({
    state: state,
    props: autocomplete.getRootProps({})
  }, autocompleteScopeApi));
  var root = createDomElement('div', _objectSpread({
    class: classNames.root
  }, rootProps));
  var detachedContainer = createDomElement('div', {
    class: classNames.detachedContainer,
    onMouseDown: function onMouseDown(event) {
      event.stopPropagation();
    }
  });
  var detachedOverlay = createDomElement('div', {
    class: classNames.detachedOverlay,
    children: [detachedContainer],
    onMouseDown: function onMouseDown() {
      setIsModalOpen(false);
      autocomplete.setIsOpen(false);
    }
  });
  var labelProps = propGetters.getLabelProps(_objectSpread({
    state: state,
    props: autocomplete.getLabelProps({})
  }, autocompleteScopeApi));
  var submitButton = createDomElement('button', {
    class: classNames.submitButton,
    type: 'submit',
    title: translations.submitButtonTitle,
    children: [Object(_elements__WEBPACK_IMPORTED_MODULE_0__["SearchIcon"])({
      environment: environment
    })]
  });
  var label = createDomElement('label', _objectSpread({
    class: classNames.label,
    children: [submitButton]
  }, labelProps));
  var clearButton = createDomElement('button', {
    class: classNames.clearButton,
    type: 'reset',
    title: translations.clearButtonTitle,
    children: [Object(_elements__WEBPACK_IMPORTED_MODULE_0__["ClearIcon"])({
      environment: environment
    })]
  });
  var loadingIndicator = createDomElement('div', {
    class: classNames.loadingIndicator,
    children: [Object(_elements__WEBPACK_IMPORTED_MODULE_0__["LoadingIcon"])({
      environment: environment
    })]
  });
  var input = Object(_elements__WEBPACK_IMPORTED_MODULE_0__["Input"])({
    class: classNames.input,
    environment: environment,
    state: state,
    getInputProps: propGetters.getInputProps,
    getInputPropsCore: autocomplete.getInputProps,
    autocompleteScopeApi: autocompleteScopeApi,
    onDetachedEscape: isDetached ? function () {
      autocomplete.setIsOpen(false);
      setIsModalOpen(false);
    } : undefined
  });
  var inputWrapperPrefix = createDomElement('div', {
    class: classNames.inputWrapperPrefix,
    children: [label, loadingIndicator]
  });
  var inputWrapperSuffix = createDomElement('div', {
    class: classNames.inputWrapperSuffix,
    children: [clearButton]
  });
  var inputWrapper = createDomElement('div', {
    class: classNames.inputWrapper,
    children: [input]
  });
  var formProps = propGetters.getFormProps(_objectSpread({
    state: state,
    props: autocomplete.getFormProps({
      inputElement: input
    })
  }, autocompleteScopeApi));
  var form = createDomElement('form', _objectSpread({
    class: classNames.form,
    children: [inputWrapperPrefix, inputWrapper, inputWrapperSuffix]
  }, formProps));
  var panelProps = propGetters.getPanelProps(_objectSpread({
    state: state,
    props: autocomplete.getPanelProps({})
  }, autocompleteScopeApi));
  var panel = createDomElement('div', _objectSpread({
    class: classNames.panel
  }, panelProps));

  if (false) {}

  if (isDetached) {
    var detachedSearchButtonIcon = createDomElement('div', {
      class: classNames.detachedSearchButtonIcon,
      children: [Object(_elements__WEBPACK_IMPORTED_MODULE_0__["SearchIcon"])({
        environment: environment
      })]
    });
    var detachedSearchButtonPlaceholder = createDomElement('div', {
      class: classNames.detachedSearchButtonPlaceholder,
      textContent: placeholder
    });
    var detachedSearchButton = createDomElement('button', {
      type: 'button',
      class: classNames.detachedSearchButton,
      onClick: function onClick() {
        setIsModalOpen(true);
      },
      children: [detachedSearchButtonIcon, detachedSearchButtonPlaceholder]
    });
    var detachedCancelButton = createDomElement('button', {
      type: 'button',
      class: classNames.detachedCancelButton,
      textContent: translations.detachedCancelButtonText,
      // Prevent `onTouchStart` from closing the panel
      // since it should be initiated by `onClick` only
      onTouchStart: function onTouchStart(event) {
        event.stopPropagation();
      },
      onClick: function onClick() {
        autocomplete.setIsOpen(false);
        setIsModalOpen(false);
      }
    });
    var detachedFormContainer = createDomElement('div', {
      class: classNames.detachedFormContainer,
      children: [form, detachedCancelButton]
    });
    detachedContainer.appendChild(detachedFormContainer);
    root.appendChild(detachedSearchButton);
  } else {
    root.appendChild(form);
  }

  return {
    detachedContainer: detachedContainer,
    detachedOverlay: detachedOverlay,
    inputWrapper: inputWrapper,
    input: input,
    root: root,
    form: form,
    label: label,
    submitButton: submitButton,
    clearButton: clearButton,
    loadingIndicator: loadingIndicator,
    panel: panel
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/createEffectWrapper.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/createEffectWrapper.js ***!
  \*******************************************************************************/
/*! exports provided: createEffectWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEffectWrapper", function() { return createEffectWrapper; });
function createEffectWrapper() {
  var effects = [];
  var cleanups = [];

  function runEffect(fn) {
    effects.push(fn);
    var effectCleanup = fn();
    cleanups.push(effectCleanup);
  }

  return {
    runEffect: runEffect,
    cleanupEffects: function cleanupEffects() {
      var currentCleanups = cleanups;
      cleanups = [];
      currentCleanups.forEach(function (cleanup) {
        cleanup();
      });
    },
    runEffects: function runEffects() {
      var currentEffects = effects;
      effects = [];
      currentEffects.forEach(function (effect) {
        runEffect(effect);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/createReactiveWrapper.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/createReactiveWrapper.js ***!
  \*********************************************************************************/
/*! exports provided: createReactiveWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactiveWrapper", function() { return createReactiveWrapper; });
function createReactiveWrapper() {
  var reactives = [];
  return {
    reactive: function reactive(value) {
      var current = value();
      var reactive = {
        _fn: value,
        _ref: {
          current: current
        },

        get value() {
          return this._ref.current;
        },

        set value(value) {
          this._ref.current = value;
        }

      };
      reactives.push(reactive);
      return reactive;
    },
    runReactives: function runReactives() {
      reactives.forEach(function (value) {
        value._ref.current = value._fn();
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/ClearIcon.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/elements/ClearIcon.js ***!
  \******************************************************************************/
/*! exports provided: ClearIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearIcon", function() { return ClearIcon; });
var ClearIcon = function ClearIcon(_ref) {
  var environment = _ref.environment;
  var element = environment.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  element.setAttribute('class', 'aa-ClearIcon');
  element.setAttribute('viewBox', '0 0 24 24');
  element.setAttribute('width', '18');
  element.setAttribute('height', '18');
  element.setAttribute('fill', 'currentColor');
  var path = environment.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z');
  element.appendChild(path);
  return element;
};

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/Input.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/elements/Input.js ***!
  \**************************************************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _getCreateDomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getCreateDomElement */ "./node_modules/@algolia/autocomplete-js/dist/esm/getCreateDomElement.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/index.js");
var _excluded = ["autocompleteScopeApi", "environment", "classNames", "getInputProps", "getInputPropsCore", "onDetachedEscape", "state"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Input = function Input(_ref) {
  var autocompleteScopeApi = _ref.autocompleteScopeApi,
      environment = _ref.environment,
      classNames = _ref.classNames,
      getInputProps = _ref.getInputProps,
      getInputPropsCore = _ref.getInputPropsCore,
      onDetachedEscape = _ref.onDetachedEscape,
      state = _ref.state,
      props = _objectWithoutProperties(_ref, _excluded);

  var createDomElement = Object(_getCreateDomElement__WEBPACK_IMPORTED_MODULE_0__["getCreateDomElement"])(environment);
  var element = createDomElement('input', props);
  var inputProps = getInputProps(_objectSpread({
    state: state,
    props: getInputPropsCore({
      inputElement: element
    }),
    inputElement: element
  }, autocompleteScopeApi));
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setProperties"])(element, _objectSpread(_objectSpread({}, inputProps), {}, {
    onKeyDown: function onKeyDown(event) {
      if (onDetachedEscape && event.key === 'Escape') {
        event.preventDefault();
        onDetachedEscape();
        return;
      }

      inputProps.onKeyDown(event);
    }
  }));
  return element;
};

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/LoadingIcon.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/elements/LoadingIcon.js ***!
  \********************************************************************************/
/*! exports provided: LoadingIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIcon", function() { return LoadingIcon; });
var LoadingIcon = function LoadingIcon(_ref) {
  var environment = _ref.environment;
  var element = environment.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  element.setAttribute('class', 'aa-LoadingIcon');
  element.setAttribute('viewBox', '0 0 100 100');
  element.setAttribute('width', '20');
  element.setAttribute('height', '20');
  element.innerHTML = "<circle\n  cx=\"50\"\n  cy=\"50\"\n  fill=\"none\"\n  r=\"35\"\n  stroke=\"currentColor\"\n  stroke-dasharray=\"164.93361431346415 56.97787143782138\"\n  stroke-width=\"6\"\n>\n  <animateTransform\n    attributeName=\"transform\"\n    type=\"rotate\"\n    repeatCount=\"indefinite\"\n    dur=\"1s\"\n    values=\"0 50 50;90 50 50;180 50 50;360 50 50\"\n    keyTimes=\"0;0.40;0.65;1\"\n  />\n</circle>";
  return element;
};

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/SearchIcon.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/elements/SearchIcon.js ***!
  \*******************************************************************************/
/*! exports provided: SearchIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return SearchIcon; });
var SearchIcon = function SearchIcon(_ref) {
  var environment = _ref.environment;
  var element = environment.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  element.setAttribute('class', 'aa-SubmitIcon');
  element.setAttribute('viewBox', '0 0 24 24');
  element.setAttribute('width', '20');
  element.setAttribute('height', '20');
  element.setAttribute('fill', 'currentColor');
  var path = environment.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z');
  element.appendChild(path);
  return element;
};

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/elements/index.js ***!
  \**************************************************************************/
/*! exports provided: ClearIcon, Input, LoadingIcon, SearchIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClearIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClearIcon */ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/ClearIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearIcon", function() { return _ClearIcon__WEBPACK_IMPORTED_MODULE_0__["ClearIcon"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_1__["Input"]; });

/* harmony import */ var _LoadingIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingIcon */ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/LoadingIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingIcon", function() { return _LoadingIcon__WEBPACK_IMPORTED_MODULE_2__["LoadingIcon"]; });

/* harmony import */ var _SearchIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchIcon */ "./node_modules/@algolia/autocomplete-js/dist/esm/elements/SearchIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return _SearchIcon__WEBPACK_IMPORTED_MODULE_3__["SearchIcon"]; });






/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/getCreateDomElement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/getCreateDomElement.js ***!
  \*******************************************************************************/
/*! exports provided: getCreateDomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCreateDomElement", function() { return getCreateDomElement; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/index.js");
var _excluded = ["children"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function getCreateDomElement(environment) {
  return function createDomElement(tagName, _ref) {
    var _ref$children = _ref.children,
        children = _ref$children === void 0 ? [] : _ref$children,
        props = _objectWithoutProperties(_ref, _excluded);

    var element = environment.document.createElement(tagName);
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setProperties"])(element, props);
    element.append.apply(element, _toConsumableArray(children));
    return element;
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/getDefaultOptions.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/getDefaultOptions.js ***!
  \*****************************************************************************/
/*! exports provided: getDefaultOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultOptions", function() { return getDefaultOptions; });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/@algolia/autocomplete-js/dist/esm/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/index.js");
var _excluded = ["classNames", "container", "getEnvironmentProps", "getFormProps", "getInputProps", "getItemProps", "getLabelProps", "getListProps", "getPanelProps", "getRootProps", "panelContainer", "panelPlacement", "render", "renderNoResults", "renderer", "detachedMediaQuery", "components", "translations"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var defaultClassNames = {
  clearButton: 'aa-ClearButton',
  detachedCancelButton: 'aa-DetachedCancelButton',
  detachedContainer: 'aa-DetachedContainer',
  detachedFormContainer: 'aa-DetachedFormContainer',
  detachedOverlay: 'aa-DetachedOverlay',
  detachedSearchButton: 'aa-DetachedSearchButton',
  detachedSearchButtonIcon: 'aa-DetachedSearchButtonIcon',
  detachedSearchButtonPlaceholder: 'aa-DetachedSearchButtonPlaceholder',
  form: 'aa-Form',
  input: 'aa-Input',
  inputWrapper: 'aa-InputWrapper',
  inputWrapperPrefix: 'aa-InputWrapperPrefix',
  inputWrapperSuffix: 'aa-InputWrapperSuffix',
  item: 'aa-Item',
  label: 'aa-Label',
  list: 'aa-List',
  loadingIndicator: 'aa-LoadingIndicator',
  panel: 'aa-Panel',
  panelLayout: 'aa-PanelLayout aa-Panel--scrollable',
  root: 'aa-Autocomplete',
  source: 'aa-Source',
  sourceFooter: 'aa-SourceFooter',
  sourceHeader: 'aa-SourceHeader',
  sourceNoResults: 'aa-SourceNoResults',
  submitButton: 'aa-SubmitButton'
};

var defaultRender = function defaultRender(_ref, root) {
  var children = _ref.children,
      render = _ref.render;
  render(children, root);
};

var defaultRenderer = {
  createElement: preact__WEBPACK_IMPORTED_MODULE_1__["createElement"],
  Fragment: preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
  render: preact__WEBPACK_IMPORTED_MODULE_1__["render"]
};
function getDefaultOptions(options) {
  var _core$id;

  var classNames = options.classNames,
      container = options.container,
      getEnvironmentProps = options.getEnvironmentProps,
      getFormProps = options.getFormProps,
      getInputProps = options.getInputProps,
      getItemProps = options.getItemProps,
      getLabelProps = options.getLabelProps,
      getListProps = options.getListProps,
      getPanelProps = options.getPanelProps,
      getRootProps = options.getRootProps,
      panelContainer = options.panelContainer,
      panelPlacement = options.panelPlacement,
      render = options.render,
      renderNoResults = options.renderNoResults,
      renderer = options.renderer,
      detachedMediaQuery = options.detachedMediaQuery,
      components = options.components,
      translations = options.translations,
      core = _objectWithoutProperties(options, _excluded);
  /* eslint-disable no-restricted-globals */


  var environment = typeof window !== 'undefined' ? window : {};
  /* eslint-enable no-restricted-globals */

  var containerElement = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getHTMLElement"])(environment, container);
  Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["invariant"])(containerElement.tagName !== 'INPUT', 'The `container` option does not support `input` elements. You need to change the container to a `div`.');
   true ? Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["warn"])(!(render && renderer && !(renderer !== null && renderer !== void 0 && renderer.render)), "You provided the `render` option but did not provide a `renderer.render`. Since v1.6.0, you can provide a `render` function directly in `renderer`." + "\nTo get rid of this warning, do any of the following depending on your use case." + "\n- If you are using the `render` option only to override Autocomplete's default `render` function, pass the `render` function into `renderer` and remove the `render` option." + '\n- If you are using the `render` option to customize the layout, pass your `render` function into `renderer` and use it from the provided parameters of the `render` option.' + '\nSee https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-js/autocomplete/#param-render') : undefined;
   true ? Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["warn"])(!renderer || render || renderer.Fragment && renderer.createElement && renderer.render, "You provided an incomplete `renderer` (missing: ".concat([!(renderer !== null && renderer !== void 0 && renderer.createElement) && '`renderer.createElement`', !(renderer !== null && renderer !== void 0 && renderer.Fragment) && '`renderer.Fragment`', !(renderer !== null && renderer !== void 0 && renderer.render) && '`renderer.render`'].filter(Boolean).join(', '), "). This can cause rendering issues.") + '\nSee https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-js/autocomplete/#param-renderer') : undefined;

  var defaultedRenderer = _objectSpread(_objectSpread({}, defaultRenderer), renderer);

  var defaultComponents = {
    Highlight: Object(_components__WEBPACK_IMPORTED_MODULE_2__["createHighlightComponent"])(defaultedRenderer),
    ReverseHighlight: Object(_components__WEBPACK_IMPORTED_MODULE_2__["createReverseHighlightComponent"])(defaultedRenderer),
    ReverseSnippet: Object(_components__WEBPACK_IMPORTED_MODULE_2__["createReverseSnippetComponent"])(defaultedRenderer),
    Snippet: Object(_components__WEBPACK_IMPORTED_MODULE_2__["createSnippetComponent"])(defaultedRenderer)
  };
  var defaultTranslations = {
    clearButtonTitle: 'Clear',
    detachedCancelButtonText: 'Cancel',
    submitButtonTitle: 'Submit'
  };
  return {
    renderer: {
      classNames: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["mergeClassNames"])(defaultClassNames, classNames !== null && classNames !== void 0 ? classNames : {}),
      container: containerElement,
      getEnvironmentProps: getEnvironmentProps !== null && getEnvironmentProps !== void 0 ? getEnvironmentProps : function (_ref2) {
        var props = _ref2.props;
        return props;
      },
      getFormProps: getFormProps !== null && getFormProps !== void 0 ? getFormProps : function (_ref3) {
        var props = _ref3.props;
        return props;
      },
      getInputProps: getInputProps !== null && getInputProps !== void 0 ? getInputProps : function (_ref4) {
        var props = _ref4.props;
        return props;
      },
      getItemProps: getItemProps !== null && getItemProps !== void 0 ? getItemProps : function (_ref5) {
        var props = _ref5.props;
        return props;
      },
      getLabelProps: getLabelProps !== null && getLabelProps !== void 0 ? getLabelProps : function (_ref6) {
        var props = _ref6.props;
        return props;
      },
      getListProps: getListProps !== null && getListProps !== void 0 ? getListProps : function (_ref7) {
        var props = _ref7.props;
        return props;
      },
      getPanelProps: getPanelProps !== null && getPanelProps !== void 0 ? getPanelProps : function (_ref8) {
        var props = _ref8.props;
        return props;
      },
      getRootProps: getRootProps !== null && getRootProps !== void 0 ? getRootProps : function (_ref9) {
        var props = _ref9.props;
        return props;
      },
      panelContainer: panelContainer ? Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getHTMLElement"])(environment, panelContainer) : environment.document.body,
      panelPlacement: panelPlacement !== null && panelPlacement !== void 0 ? panelPlacement : 'input-wrapper-width',
      render: render !== null && render !== void 0 ? render : defaultRender,
      renderNoResults: renderNoResults,
      renderer: defaultedRenderer,
      detachedMediaQuery: detachedMediaQuery !== null && detachedMediaQuery !== void 0 ? detachedMediaQuery : getComputedStyle(environment.document.documentElement).getPropertyValue('--aa-detached-media-query'),
      components: _objectSpread(_objectSpread({}, defaultComponents), components),
      translations: _objectSpread(_objectSpread({}, defaultTranslations), translations)
    },
    core: _objectSpread(_objectSpread({}, core), {}, {
      id: (_core$id = core.id) !== null && _core$id !== void 0 ? _core$id : Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["generateAutocompleteId"])(),
      environment: environment
    })
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/getPanelPlacementStyle.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/getPanelPlacementStyle.js ***!
  \**********************************************************************************/
/*! exports provided: getPanelPlacementStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelPlacementStyle", function() { return getPanelPlacementStyle; });
function getPanelPlacementStyle(_ref) {
  var panelPlacement = _ref.panelPlacement,
      container = _ref.container,
      form = _ref.form,
      environment = _ref.environment;
  var containerRect = container.getBoundingClientRect(); // Some browsers have specificities to retrieve the document scroll position.
  // See https://stackoverflow.com/a/28633515/9940315

  var scrollTop = environment.pageYOffset || environment.document.documentElement.scrollTop || environment.document.body.scrollTop || 0;
  var top = scrollTop + containerRect.top + containerRect.height;

  switch (panelPlacement) {
    case 'start':
      {
        return {
          top: top,
          left: containerRect.left
        };
      }

    case 'end':
      {
        return {
          top: top,
          right: environment.document.documentElement.clientWidth - (containerRect.left + containerRect.width)
        };
      }

    case 'full-width':
      {
        return {
          top: top,
          left: 0,
          right: 0,
          width: 'unset',
          maxWidth: 'unset'
        };
      }

    case 'input-wrapper-width':
      {
        var formRect = form.getBoundingClientRect();
        return {
          top: top,
          left: formRect.left,
          right: environment.document.documentElement.clientWidth - (formRect.left + formRect.width),
          width: 'unset',
          maxWidth: 'unset'
        };
      }

    default:
      {
        throw new Error("[Autocomplete] The `panelPlacement` value ".concat(JSON.stringify(panelPlacement), " is not valid."));
      }
  }
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/index.js ***!
  \*****************************************************************/
/*! exports provided: autocomplete, getAlgoliaFacets, getAlgoliaResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete */ "./node_modules/@algolia/autocomplete-js/dist/esm/autocomplete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autocomplete", function() { return _autocomplete__WEBPACK_IMPORTED_MODULE_0__["autocomplete"]; });

/* harmony import */ var _requesters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requesters */ "./node_modules/@algolia/autocomplete-js/dist/esm/requesters/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlgoliaFacets", function() { return _requesters__WEBPACK_IMPORTED_MODULE_1__["getAlgoliaFacets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlgoliaResults", function() { return _requesters__WEBPACK_IMPORTED_MODULE_1__["getAlgoliaResults"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/@algolia/autocomplete-js/dist/esm/types/index.js");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/render.js":
/*!******************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/render.js ***!
  \******************************************************************/
/*! exports provided: renderSearchBox, renderPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSearchBox", function() { return renderSearchBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderPanel", function() { return renderPanel; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx renderer.createElement */

function renderSearchBox(_ref) {
  var autocomplete = _ref.autocomplete,
      autocompleteScopeApi = _ref.autocompleteScopeApi,
      dom = _ref.dom,
      propGetters = _ref.propGetters,
      state = _ref.state;
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setPropertiesWithoutEvents"])(dom.root, propGetters.getRootProps(_objectSpread({
    state: state,
    props: autocomplete.getRootProps({})
  }, autocompleteScopeApi)));
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setPropertiesWithoutEvents"])(dom.input, propGetters.getInputProps(_objectSpread({
    state: state,
    props: autocomplete.getInputProps({
      inputElement: dom.input
    }),
    inputElement: dom.input
  }, autocompleteScopeApi)));
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setProperties"])(dom.label, {
    hidden: state.status === 'stalled'
  });
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setProperties"])(dom.loadingIndicator, {
    hidden: state.status !== 'stalled'
  });
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setProperties"])(dom.clearButton, {
    hidden: !state.query
  });
}
function renderPanel(render, _ref2) {
  var autocomplete = _ref2.autocomplete,
      autocompleteScopeApi = _ref2.autocompleteScopeApi,
      classNames = _ref2.classNames,
      html = _ref2.html,
      dom = _ref2.dom,
      panelContainer = _ref2.panelContainer,
      propGetters = _ref2.propGetters,
      state = _ref2.state,
      components = _ref2.components,
      renderer = _ref2.renderer;

  if (!state.isOpen) {
    if (panelContainer.contains(dom.panel)) {
      panelContainer.removeChild(dom.panel);
    }

    return;
  } // We add the panel element to the DOM when it's not yet appended and that the
  // items are fetched.


  if (!panelContainer.contains(dom.panel) && state.status !== 'loading') {
    panelContainer.appendChild(dom.panel);
  }

  dom.panel.classList.toggle('aa-Panel--stalled', state.status === 'stalled');
  var sections = state.collections.filter(function (_ref3) {
    var source = _ref3.source,
        items = _ref3.items;
    return source.templates.noResults || items.length > 0;
  }).map(function (_ref4, sourceIndex) {
    var source = _ref4.source,
        items = _ref4.items;
    return renderer.createElement("section", {
      key: sourceIndex,
      className: classNames.source,
      "data-autocomplete-source-id": source.sourceId
    }, source.templates.header && renderer.createElement("div", {
      className: classNames.sourceHeader
    }, source.templates.header({
      components: components,
      createElement: renderer.createElement,
      Fragment: renderer.Fragment,
      items: items,
      source: source,
      state: state,
      html: html
    })), source.templates.noResults && items.length === 0 ? renderer.createElement("div", {
      className: classNames.sourceNoResults
    }, source.templates.noResults({
      components: components,
      createElement: renderer.createElement,
      Fragment: renderer.Fragment,
      source: source,
      state: state,
      html: html
    })) : renderer.createElement("ul", _extends({
      className: classNames.list
    }, propGetters.getListProps(_objectSpread({
      state: state,
      props: autocomplete.getListProps({})
    }, autocompleteScopeApi))), items.map(function (item) {
      var itemProps = autocomplete.getItemProps({
        item: item,
        source: source
      });
      return renderer.createElement("li", _extends({
        key: itemProps.id,
        className: classNames.item
      }, propGetters.getItemProps(_objectSpread({
        state: state,
        props: itemProps
      }, autocompleteScopeApi))), source.templates.item({
        components: components,
        createElement: renderer.createElement,
        Fragment: renderer.Fragment,
        item: item,
        state: state,
        html: html
      }));
    })), source.templates.footer && renderer.createElement("div", {
      className: classNames.sourceFooter
    }, source.templates.footer({
      components: components,
      createElement: renderer.createElement,
      Fragment: renderer.Fragment,
      items: items,
      source: source,
      state: state,
      html: html
    })));
  });
  var children = renderer.createElement(renderer.Fragment, null, renderer.createElement("div", {
    className: classNames.panelLayout
  }, sections), renderer.createElement("div", {
    className: "aa-GradientBottom"
  }));
  var elements = sections.reduce(function (acc, current) {
    acc[current.props['data-autocomplete-source-id']] = current;
    return acc;
  }, {});
  render(_objectSpread(_objectSpread({
    children: children,
    state: state,
    sections: sections,
    elements: elements
  }, renderer), {}, {
    components: components,
    html: html
  }, autocompleteScopeApi), dom.panel);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/requesters/createAlgoliaRequester.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/requesters/createAlgoliaRequester.js ***!
  \*********************************************************************************************/
/*! exports provided: createAlgoliaRequester */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAlgoliaRequester", function() { return createAlgoliaRequester; });
/* harmony import */ var _algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-preset-algolia */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/index.js");
/* harmony import */ var _userAgents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../userAgents */ "./node_modules/@algolia/autocomplete-js/dist/esm/userAgents.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var createAlgoliaRequester = Object(_algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__["createRequester"])(function (params) {
  return Object(_algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_0__["fetchAlgoliaResults"])(_objectSpread(_objectSpread({}, params), {}, {
    userAgents: _userAgents__WEBPACK_IMPORTED_MODULE_1__["userAgents"]
  }));
}, 'algolia');

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/requesters/getAlgoliaFacets.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/requesters/getAlgoliaFacets.js ***!
  \***************************************************************************************/
/*! exports provided: getAlgoliaFacets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlgoliaFacets", function() { return getAlgoliaFacets; });
/* harmony import */ var _createAlgoliaRequester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAlgoliaRequester */ "./node_modules/@algolia/autocomplete-js/dist/esm/requesters/createAlgoliaRequester.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Retrieves Algolia facet hits from multiple indices.
 */

function getAlgoliaFacets(requestParams) {
  var requester = Object(_createAlgoliaRequester__WEBPACK_IMPORTED_MODULE_0__["createAlgoliaRequester"])({
    transformResponse: function transformResponse(response) {
      return response.facetHits;
    }
  });
  var queries = requestParams.queries.map(function (query) {
    return _objectSpread(_objectSpread({}, query), {}, {
      type: 'facet'
    });
  });
  return requester(_objectSpread(_objectSpread({}, requestParams), {}, {
    queries: queries
  }));
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/requesters/getAlgoliaResults.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/requesters/getAlgoliaResults.js ***!
  \****************************************************************************************/
/*! exports provided: getAlgoliaResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlgoliaResults", function() { return getAlgoliaResults; });
/* harmony import */ var _createAlgoliaRequester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAlgoliaRequester */ "./node_modules/@algolia/autocomplete-js/dist/esm/requesters/createAlgoliaRequester.js");

/**
 * Retrieves Algolia results from multiple indices.
 */

var getAlgoliaResults = Object(_createAlgoliaRequester__WEBPACK_IMPORTED_MODULE_0__["createAlgoliaRequester"])({
  transformResponse: function transformResponse(response) {
    return response.hits;
  }
});

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/requesters/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/requesters/index.js ***!
  \****************************************************************************/
/*! exports provided: getAlgoliaFacets, getAlgoliaResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getAlgoliaFacets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAlgoliaFacets */ "./node_modules/@algolia/autocomplete-js/dist/esm/requesters/getAlgoliaFacets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlgoliaFacets", function() { return _getAlgoliaFacets__WEBPACK_IMPORTED_MODULE_0__["getAlgoliaFacets"]; });

/* harmony import */ var _getAlgoliaResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAlgoliaResults */ "./node_modules/@algolia/autocomplete-js/dist/esm/requesters/getAlgoliaResults.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlgoliaResults", function() { return _getAlgoliaResults__WEBPACK_IMPORTED_MODULE_1__["getAlgoliaResults"]; });




/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteApi.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteApi.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteClassNames.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteClassNames.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteCollection.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteCollection.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteComponents.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteComponents.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteDom.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteDom.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteOptions.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteOptions.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompletePlugin.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompletePlugin.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompletePropGetters.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompletePropGetters.js ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteRender.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteRender.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteRenderer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteRenderer.js ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteSource.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteSource.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteState.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteState.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteTranslations.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteTranslations.js ***!
  \******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/types/HighlightHitParams.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/types/HighlightHitParams.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/types/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/types/index.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutocompleteApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutocompleteApi */ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteApi.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteClassNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutocompleteClassNames */ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteClassNames.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteCollection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutocompleteCollection */ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteCollection.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AutocompleteComponents */ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteComponents.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteDom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AutocompleteDom */ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteDom.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AutocompleteOptions */ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteOptions.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompletePlugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AutocompletePlugin */ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompletePlugin.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompletePropGetters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AutocompletePropGetters */ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompletePropGetters.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteRender__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AutocompleteRender */ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteRender.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteRenderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AutocompleteRenderer */ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteRenderer.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteSource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AutocompleteSource */ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteSource.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AutocompleteState */ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteState.js");
/* empty/unused harmony star reexport *//* harmony import */ var _AutocompleteTranslations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AutocompleteTranslations */ "./node_modules/@algolia/autocomplete-js/dist/esm/types/AutocompleteTranslations.js");
/* empty/unused harmony star reexport *//* harmony import */ var _HighlightHitParams__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./HighlightHitParams */ "./node_modules/@algolia/autocomplete-js/dist/esm/types/HighlightHitParams.js");
/* empty/unused harmony star reexport */














/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/userAgents.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/userAgents.js ***!
  \**********************************************************************/
/*! exports provided: userAgents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAgents", function() { return userAgents; });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js");

var userAgents = [{
  segment: 'autocomplete-js',
  version: _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["version"]
}];

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/getHTMLElement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/utils/getHTMLElement.js ***!
  \********************************************************************************/
/*! exports provided: getHTMLElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHTMLElement", function() { return getHTMLElement; });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js");

function getHTMLElement(environment, value) {
  if (typeof value === 'string') {
    var element = environment.document.querySelector(value);
    Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["invariant"])(element !== null, "The element ".concat(JSON.stringify(value), " is not in the document."));
    return element;
  }

  return value;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/utils/index.js ***!
  \***********************************************************************/
/*! exports provided: getHTMLElement, mergeClassNames, mergeDeep, pickBy, setProperty, setProperties, setPropertiesWithoutEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getHTMLElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getHTMLElement */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/getHTMLElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHTMLElement", function() { return _getHTMLElement__WEBPACK_IMPORTED_MODULE_0__["getHTMLElement"]; });

/* harmony import */ var _mergeClassNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeClassNames */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeClassNames.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeClassNames", function() { return _mergeClassNames__WEBPACK_IMPORTED_MODULE_1__["mergeClassNames"]; });

/* harmony import */ var _mergeDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeDeep */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeDeep.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return _mergeDeep__WEBPACK_IMPORTED_MODULE_2__["mergeDeep"]; });

/* harmony import */ var _pickBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pickBy */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/pickBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pickBy", function() { return _pickBy__WEBPACK_IMPORTED_MODULE_3__["pickBy"]; });

/* harmony import */ var _setProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setProperties */ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/setProperties.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return _setProperties__WEBPACK_IMPORTED_MODULE_4__["setProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProperties", function() { return _setProperties__WEBPACK_IMPORTED_MODULE_4__["setProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPropertiesWithoutEvents", function() { return _setProperties__WEBPACK_IMPORTED_MODULE_4__["setPropertiesWithoutEvents"]; });







/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeClassNames.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeClassNames.js ***!
  \*********************************************************************************/
/*! exports provided: mergeClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeClassNames", function() { return mergeClassNames; });
function mergeClassNames() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return values.reduce(function (acc, current) {
    Object.keys(current).forEach(function (key) {
      var accValue = acc[key];
      var currentValue = current[key];

      if (accValue !== currentValue) {
        acc[key] = [accValue, currentValue].filter(Boolean).join(' ');
      }
    });
    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeDeep.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/utils/mergeDeep.js ***!
  \***************************************************************************/
/*! exports provided: mergeDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var isPlainObject = function isPlainObject(value) {
  return value && _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Object]';
};

function mergeDeep() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return values.reduce(function (acc, current) {
    Object.keys(current).forEach(function (key) {
      var accValue = acc[key];
      var currentValue = current[key];

      if (Array.isArray(accValue) && Array.isArray(currentValue)) {
        acc[key] = accValue.concat.apply(accValue, _toConsumableArray(currentValue));
      } else if (isPlainObject(accValue) && isPlainObject(currentValue)) {
        acc[key] = mergeDeep(accValue, currentValue);
      } else {
        acc[key] = currentValue;
      }
    });
    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/pickBy.js":
/*!************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/utils/pickBy.js ***!
  \************************************************************************/
/*! exports provided: pickBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickBy", function() { return pickBy; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function pickBy(obj, predicate) {
  return Object.entries(obj).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (predicate({
      key: key,
      value: value
    })) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, value));
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-js/dist/esm/utils/setProperties.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-js/dist/esm/utils/setProperties.js ***!
  \*******************************************************************************/
/*! exports provided: setProperty, setProperties, setPropertiesWithoutEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return setProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProperties", function() { return setProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPropertiesWithoutEvents", function() { return setPropertiesWithoutEvents; });
/* eslint-disable */

/**
 * Touch-specific event aliases
 *
 * See https://w3c.github.io/touch-events/#extensions-to-the-globaleventhandlers-mixin
 */
var TOUCH_EVENTS_ALIASES = ['ontouchstart', 'ontouchend', 'ontouchmove', 'ontouchcancel'];
/*
 * Taken from Preact
 *
 * See https://github.com/preactjs/preact/blob/6ab49d9020740127577bf4af66bf63f4af7f9fee/src/diff/props.js#L58-L151
 */

function setStyle(style, key, value) {
  if (value === null) {
    style[key] = '';
  } else if (typeof value !== 'number') {
    style[key] = value;
  } else {
    style[key] = value + 'px';
  }
}
/**
 * Proxy an event to hooked event handlers
 */


function eventProxy(event) {
  this._listeners[event.type](event);
}
/**
 * Set a property value on a DOM node
 */


function setProperty(dom, name, value) {
  var useCapture;
  var nameLower;
  var oldValue = dom[name];

  if (name === 'style') {
    if (typeof value == 'string') {
      dom.style = value;
    } else {
      if (value === null) {
        dom.style = '';
      } else {
        for (name in value) {
          if (!oldValue || value[name] !== oldValue[name]) {
            setStyle(dom.style, name, value[name]);
          }
        }
      }
    }
  } // Benchmark for comparison: https://esbench.com/bench/574c954bdb965b9a00965ac6
  else if (name[0] === 'o' && name[1] === 'n') {
    useCapture = name !== (name = name.replace(/Capture$/, ''));
    nameLower = name.toLowerCase();
    if (nameLower in dom || TOUCH_EVENTS_ALIASES.includes(nameLower)) name = nameLower;
    name = name.slice(2);
    if (!dom._listeners) dom._listeners = {};
    dom._listeners[name] = value;

    if (value) {
      if (!oldValue) dom.addEventListener(name, eventProxy, useCapture);
    } else {
      dom.removeEventListener(name, eventProxy, useCapture);
    }
  } else if (name !== 'list' && name !== 'tagName' && // HTMLButtonElement.form and HTMLInputElement.form are read-only but can be set using
  // setAttribute
  name !== 'form' && name !== 'type' && name !== 'size' && name !== 'download' && name !== 'href' && name in dom) {
    dom[name] = value == null ? '' : value;
  } else if (typeof value != 'function' && name !== 'dangerouslySetInnerHTML') {
    if (value == null || value === false && // ARIA-attributes have a different notion of boolean values.
    // The value `false` is different from the attribute not
    // existing on the DOM, so we can't remove it. For non-boolean
    // ARIA-attributes we could treat false as a removal, but the
    // amount of exceptions would cost us too many bytes. On top of
    // that other VDOM frameworks also always stringify `false`.
    !/^ar/.test(name)) {
      dom.removeAttribute(name);
    } else {
      dom.setAttribute(name, value);
    }
  }
}

function getNormalizedName(name) {
  switch (name) {
    case 'onChange':
      return 'onInput';

    default:
      return name;
  }
}

function setProperties(dom, props) {
  for (var name in props) {
    setProperty(dom, getNormalizedName(name), props[name]);
  }
}
function setPropertiesWithoutEvents(dom, props) {
  for (var name in props) {
    if (!(name[0] === 'o' && name[1] === 'n')) {
      setProperty(dom, getNormalizedName(name), props[name]);
    }
  }
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/constants/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/constants/index.js ***!
  \***************************************************************************************/
/*! exports provided: HIGHLIGHT_PRE_TAG, HIGHLIGHT_POST_TAG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_PRE_TAG", function() { return HIGHLIGHT_PRE_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_POST_TAG", function() { return HIGHLIGHT_POST_TAG; });
var HIGHLIGHT_PRE_TAG = '__aa-highlight__';
var HIGHLIGHT_POST_TAG = '__/aa-highlight__';

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/HighlightedHit.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/HighlightedHit.js ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/SnippetedHit.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/SnippetedHit.js ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/index.js ***!
  \***************************************************************************************/
/*! exports provided: parseAlgoliaHitHighlight, parseAlgoliaHitReverseHighlight, parseAlgoliaHitReverseSnippet, parseAlgoliaHitSnippet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HighlightedHit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HighlightedHit */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/HighlightedHit.js");
/* empty/unused harmony star reexport *//* harmony import */ var _parseAlgoliaHitHighlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseAlgoliaHitHighlight */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitHighlight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAlgoliaHitHighlight", function() { return _parseAlgoliaHitHighlight__WEBPACK_IMPORTED_MODULE_1__["parseAlgoliaHitHighlight"]; });

/* harmony import */ var _parseAlgoliaHitReverseHighlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parseAlgoliaHitReverseHighlight */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseHighlight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAlgoliaHitReverseHighlight", function() { return _parseAlgoliaHitReverseHighlight__WEBPACK_IMPORTED_MODULE_2__["parseAlgoliaHitReverseHighlight"]; });

/* harmony import */ var _parseAlgoliaHitReverseSnippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseAlgoliaHitReverseSnippet */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseSnippet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAlgoliaHitReverseSnippet", function() { return _parseAlgoliaHitReverseSnippet__WEBPACK_IMPORTED_MODULE_3__["parseAlgoliaHitReverseSnippet"]; });

/* harmony import */ var _parseAlgoliaHitSnippet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parseAlgoliaHitSnippet */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitSnippet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAlgoliaHitSnippet", function() { return _parseAlgoliaHitSnippet__WEBPACK_IMPORTED_MODULE_4__["parseAlgoliaHitSnippet"]; });

/* harmony import */ var _SnippetedHit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SnippetedHit */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/SnippetedHit.js");
/* empty/unused harmony star reexport */






/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/isPartHighlighted.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/isPartHighlighted.js ***!
  \***************************************************************************************************/
/*! exports provided: isPartHighlighted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPartHighlighted", function() { return isPartHighlighted; });
var htmlEscapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};
var hasAlphanumeric = new RegExp(/\w/i);
var regexEscapedHtml = /&(amp|quot|lt|gt|#39);/g;
var regexHasEscapedHtml = RegExp(regexEscapedHtml.source);

function unescape(value) {
  return value && regexHasEscapedHtml.test(value) ? value.replace(regexEscapedHtml, function (character) {
    return htmlEscapes[character];
  }) : value;
}

function isPartHighlighted(parts, i) {
  var _parts, _parts2;

  var current = parts[i];
  var isNextHighlighted = ((_parts = parts[i + 1]) === null || _parts === void 0 ? void 0 : _parts.isHighlighted) || true;
  var isPreviousHighlighted = ((_parts2 = parts[i - 1]) === null || _parts2 === void 0 ? void 0 : _parts2.isHighlighted) || true;

  if (!hasAlphanumeric.test(unescape(current.value)) && isPreviousHighlighted === isNextHighlighted) {
    return isPreviousHighlighted;
  }

  return current.isHighlighted;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitHighlight.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitHighlight.js ***!
  \**********************************************************************************************************/
/*! exports provided: parseAlgoliaHitHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAlgoliaHitHighlight", function() { return parseAlgoliaHitHighlight; });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js");
/* harmony import */ var _parseAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseAttribute */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAttribute.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function parseAlgoliaHitHighlight(_ref) {
  var hit = _ref.hit,
      attribute = _ref.attribute;
  var path = Array.isArray(attribute) ? attribute : [attribute];
  var highlightedValue = Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["getAttributeValueByPath"])(hit, ['_highlightResult'].concat(_toConsumableArray(path), ['value']));

  if (typeof highlightedValue !== 'string') {
     true ? Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["warn"])(false, "The attribute \"".concat(path.join('.'), "\" described by the path ").concat(JSON.stringify(path), " does not exist on the hit. Did you set it in `attributesToHighlight`?") + '\nSee https://www.algolia.com/doc/api-reference/api-parameters/attributesToHighlight/') : undefined;
    highlightedValue = Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["getAttributeValueByPath"])(hit, path) || '';
  }

  return Object(_parseAttribute__WEBPACK_IMPORTED_MODULE_1__["parseAttribute"])({
    highlightedValue: highlightedValue
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseHighlight.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseHighlight.js ***!
  \*****************************************************************************************************************/
/*! exports provided: parseAlgoliaHitReverseHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAlgoliaHitReverseHighlight", function() { return parseAlgoliaHitReverseHighlight; });
/* harmony import */ var _parseAlgoliaHitHighlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseAlgoliaHitHighlight */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitHighlight.js");
/* harmony import */ var _reverseHighlightedParts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reverseHighlightedParts */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/reverseHighlightedParts.js");


function parseAlgoliaHitReverseHighlight(props) {
  return Object(_reverseHighlightedParts__WEBPACK_IMPORTED_MODULE_1__["reverseHighlightedParts"])(Object(_parseAlgoliaHitHighlight__WEBPACK_IMPORTED_MODULE_0__["parseAlgoliaHitHighlight"])(props));
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseSnippet.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitReverseSnippet.js ***!
  \***************************************************************************************************************/
/*! exports provided: parseAlgoliaHitReverseSnippet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAlgoliaHitReverseSnippet", function() { return parseAlgoliaHitReverseSnippet; });
/* harmony import */ var _parseAlgoliaHitSnippet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseAlgoliaHitSnippet */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitSnippet.js");
/* harmony import */ var _reverseHighlightedParts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reverseHighlightedParts */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/reverseHighlightedParts.js");


function parseAlgoliaHitReverseSnippet(props) {
  return Object(_reverseHighlightedParts__WEBPACK_IMPORTED_MODULE_1__["reverseHighlightedParts"])(Object(_parseAlgoliaHitSnippet__WEBPACK_IMPORTED_MODULE_0__["parseAlgoliaHitSnippet"])(props));
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitSnippet.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAlgoliaHitSnippet.js ***!
  \********************************************************************************************************/
/*! exports provided: parseAlgoliaHitSnippet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAlgoliaHitSnippet", function() { return parseAlgoliaHitSnippet; });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js");
/* harmony import */ var _parseAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseAttribute */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAttribute.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function parseAlgoliaHitSnippet(_ref) {
  var hit = _ref.hit,
      attribute = _ref.attribute;
  var path = Array.isArray(attribute) ? attribute : [attribute];
  var highlightedValue = Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["getAttributeValueByPath"])(hit, ['_snippetResult'].concat(_toConsumableArray(path), ['value']));

  if (typeof highlightedValue !== 'string') {
     true ? Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["warn"])(false, "The attribute \"".concat(path.join('.'), "\" described by the path ").concat(JSON.stringify(path), " does not exist on the hit. Did you set it in `attributesToSnippet`?") + '\nSee https://www.algolia.com/doc/api-reference/api-parameters/attributesToSnippet/') : undefined;
    highlightedValue = Object(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["getAttributeValueByPath"])(hit, path) || '';
  }

  return Object(_parseAttribute__WEBPACK_IMPORTED_MODULE_1__["parseAttribute"])({
    highlightedValue: highlightedValue
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAttribute.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/parseAttribute.js ***!
  \************************************************************************************************/
/*! exports provided: parseAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAttribute", function() { return parseAttribute; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/constants/index.js");


/**
 * Creates a data structure that allows to concatenate similar highlighting
 * parts in a single value.
 */
function createAttributeSet() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = initialValue;
  return {
    get: function get() {
      return value;
    },
    add: function add(part) {
      var lastPart = value[value.length - 1];

      if ((lastPart === null || lastPart === void 0 ? void 0 : lastPart.isHighlighted) === part.isHighlighted) {
        value[value.length - 1] = {
          value: lastPart.value + part.value,
          isHighlighted: lastPart.isHighlighted
        };
      } else {
        value.push(part);
      }
    }
  };
}

function parseAttribute(_ref) {
  var highlightedValue = _ref.highlightedValue;
  var preTagParts = highlightedValue.split(_constants__WEBPACK_IMPORTED_MODULE_0__["HIGHLIGHT_PRE_TAG"]);
  var firstValue = preTagParts.shift();
  var parts = createAttributeSet(firstValue ? [{
    value: firstValue,
    isHighlighted: false
  }] : []);
  preTagParts.forEach(function (part) {
    var postTagParts = part.split(_constants__WEBPACK_IMPORTED_MODULE_0__["HIGHLIGHT_POST_TAG"]);
    parts.add({
      value: postTagParts[0],
      isHighlighted: true
    });

    if (postTagParts[1] !== '') {
      parts.add({
        value: postTagParts[1],
        isHighlighted: false
      });
    }
  });
  return parts.get();
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/reverseHighlightedParts.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/reverseHighlightedParts.js ***!
  \*********************************************************************************************************/
/*! exports provided: reverseHighlightedParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseHighlightedParts", function() { return reverseHighlightedParts; });
/* harmony import */ var _isPartHighlighted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPartHighlighted */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/isPartHighlighted.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function reverseHighlightedParts(parts) {
  // We don't want to highlight the whole word when no parts match.
  if (!parts.some(function (part) {
    return part.isHighlighted;
  })) {
    return parts.map(function (part) {
      return _objectSpread(_objectSpread({}, part), {}, {
        isHighlighted: false
      });
    });
  }

  return parts.map(function (part, i) {
    return _objectSpread(_objectSpread({}, part), {}, {
      isHighlighted: !Object(_isPartHighlighted__WEBPACK_IMPORTED_MODULE_0__["isPartHighlighted"])(parts, i)
    });
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/index.js ***!
  \*****************************************************************************/
/*! exports provided: parseAlgoliaHitHighlight, parseAlgoliaHitReverseHighlight, parseAlgoliaHitReverseSnippet, parseAlgoliaHitSnippet, createRequester, getAlgoliaFacets, getAlgoliaResults, fetchAlgoliaResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/highlight/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAlgoliaHitHighlight", function() { return _highlight__WEBPACK_IMPORTED_MODULE_0__["parseAlgoliaHitHighlight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAlgoliaHitReverseHighlight", function() { return _highlight__WEBPACK_IMPORTED_MODULE_0__["parseAlgoliaHitReverseHighlight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAlgoliaHitReverseSnippet", function() { return _highlight__WEBPACK_IMPORTED_MODULE_0__["parseAlgoliaHitReverseSnippet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAlgoliaHitSnippet", function() { return _highlight__WEBPACK_IMPORTED_MODULE_0__["parseAlgoliaHitSnippet"]; });

/* harmony import */ var _requester__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requester */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRequester", function() { return _requester__WEBPACK_IMPORTED_MODULE_1__["createRequester"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlgoliaFacets", function() { return _requester__WEBPACK_IMPORTED_MODULE_1__["getAlgoliaFacets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlgoliaResults", function() { return _requester__WEBPACK_IMPORTED_MODULE_1__["getAlgoliaResults"]; });

/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/search/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchAlgoliaResults", function() { return _search__WEBPACK_IMPORTED_MODULE_2__["fetchAlgoliaResults"]; });





/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/createAlgoliaRequester.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/createAlgoliaRequester.js ***!
  \********************************************************************************************************/
/*! exports provided: createAlgoliaRequester */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAlgoliaRequester", function() { return createAlgoliaRequester; });
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/search/index.js");
/* harmony import */ var _createRequester__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createRequester */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/createRequester.js");


var createAlgoliaRequester = Object(_createRequester__WEBPACK_IMPORTED_MODULE_1__["createRequester"])(_search__WEBPACK_IMPORTED_MODULE_0__["fetchAlgoliaResults"], 'algolia');

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/createRequester.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/createRequester.js ***!
  \*************************************************************************************************/
/*! exports provided: createRequester */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRequester", function() { return createRequester; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createRequester(fetcher, requesterId) {
  function execute(fetcherParams) {
    return fetcher({
      searchClient: fetcherParams.searchClient,
      queries: fetcherParams.requests.map(function (x) {
        return x.query;
      })
    }).then(function (responses) {
      return responses.map(function (response, index) {
        var _fetcherParams$reques = fetcherParams.requests[index],
            sourceId = _fetcherParams$reques.sourceId,
            transformResponse = _fetcherParams$reques.transformResponse;
        return {
          items: response,
          sourceId: sourceId,
          transformResponse: transformResponse
        };
      });
    });
  }

  return function createSpecifiedRequester(requesterParams) {
    return function requester(requestParams) {
      return _objectSpread(_objectSpread({
        requesterId: requesterId,
        execute: execute
      }, requesterParams), requestParams);
    };
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/getAlgoliaFacets.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/getAlgoliaFacets.js ***!
  \**************************************************************************************************/
/*! exports provided: getAlgoliaFacets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlgoliaFacets", function() { return getAlgoliaFacets; });
/* harmony import */ var _createAlgoliaRequester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAlgoliaRequester */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/createAlgoliaRequester.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Retrieves Algolia facet hits from multiple indices.
 */
function getAlgoliaFacets(requestParams) {
  var requester = Object(_createAlgoliaRequester__WEBPACK_IMPORTED_MODULE_0__["createAlgoliaRequester"])({
    transformResponse: function transformResponse(response) {
      return response.facetHits;
    }
  });
  var queries = requestParams.queries.map(function (query) {
    return _objectSpread(_objectSpread({}, query), {}, {
      type: 'facet'
    });
  });
  return requester(_objectSpread(_objectSpread({}, requestParams), {}, {
    queries: queries
  }));
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/getAlgoliaResults.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/getAlgoliaResults.js ***!
  \***************************************************************************************************/
/*! exports provided: getAlgoliaResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlgoliaResults", function() { return getAlgoliaResults; });
/* harmony import */ var _createAlgoliaRequester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAlgoliaRequester */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/createAlgoliaRequester.js");

/**
 * Retrieves Algolia results from multiple indices.
 */

var getAlgoliaResults = Object(_createAlgoliaRequester__WEBPACK_IMPORTED_MODULE_0__["createAlgoliaRequester"])({
  transformResponse: function transformResponse(response) {
    return response.hits;
  }
});

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/index.js ***!
  \***************************************************************************************/
/*! exports provided: createRequester, getAlgoliaFacets, getAlgoliaResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createRequester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createRequester */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/createRequester.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRequester", function() { return _createRequester__WEBPACK_IMPORTED_MODULE_0__["createRequester"]; });

/* harmony import */ var _getAlgoliaFacets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAlgoliaFacets */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/getAlgoliaFacets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlgoliaFacets", function() { return _getAlgoliaFacets__WEBPACK_IMPORTED_MODULE_1__["getAlgoliaFacets"]; });

/* harmony import */ var _getAlgoliaResults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getAlgoliaResults */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/requester/getAlgoliaResults.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlgoliaResults", function() { return _getAlgoliaResults__WEBPACK_IMPORTED_MODULE_2__["getAlgoliaResults"]; });





/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/search/fetchAlgoliaResults.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/search/fetchAlgoliaResults.js ***!
  \**************************************************************************************************/
/*! exports provided: fetchAlgoliaResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAlgoliaResults", function() { return fetchAlgoliaResults; });
/* harmony import */ var _algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @algolia/autocomplete-shared */ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/constants/index.js");
var _excluded = ["params"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function fetchAlgoliaResults(_ref) {
  var searchClient = _ref.searchClient,
      queries = _ref.queries,
      _ref$userAgents = _ref.userAgents,
      userAgents = _ref$userAgents === void 0 ? [] : _ref$userAgents;

  if (typeof searchClient.addAlgoliaAgent === 'function') {
    var algoliaAgents = [].concat(_toConsumableArray(_algolia_autocomplete_shared__WEBPACK_IMPORTED_MODULE_0__["userAgents"]), _toConsumableArray(userAgents));
    algoliaAgents.forEach(function (_ref2) {
      var segment = _ref2.segment,
          version = _ref2.version;
      searchClient.addAlgoliaAgent(segment, version);
    });
  }

  return searchClient.search(queries.map(function (searchParameters) {
    var params = searchParameters.params,
        headers = _objectWithoutProperties(searchParameters, _excluded);

    return _objectSpread(_objectSpread({}, headers), {}, {
      params: _objectSpread({
        hitsPerPage: 5,
        highlightPreTag: _constants__WEBPACK_IMPORTED_MODULE_1__["HIGHLIGHT_PRE_TAG"],
        highlightPostTag: _constants__WEBPACK_IMPORTED_MODULE_1__["HIGHLIGHT_POST_TAG"]
      }, params)
    });
  })).then(function (response) {
    return response.results;
  });
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/search/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/search/index.js ***!
  \************************************************************************************/
/*! exports provided: fetchAlgoliaResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetchAlgoliaResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAlgoliaResults */ "./node_modules/@algolia/autocomplete-preset-algolia/dist/esm/search/fetchAlgoliaResults.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchAlgoliaResults", function() { return _fetchAlgoliaResults__WEBPACK_IMPORTED_MODULE_0__["fetchAlgoliaResults"]; });



/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/MaybePromise.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/MaybePromise.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/UserAgent.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/UserAgent.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/createRef.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/createRef.js ***!
  \*************************************************************************/
/*! exports provided: createRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
function createRef(initialValue) {
  return {
    current: initialValue
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/debounce.js":
/*!************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/debounce.js ***!
  \************************************************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
function debounce(fn, time) {
  var timerId = undefined;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(function () {
      return fn.apply(void 0, args);
    }, time);
  };
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js ***!
  \***********************************************************************/
/*! exports provided: decycle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decycle", function() { return decycle; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Decycles objects with circular references.
 * This is used to print cyclic structures in development environment only.
 */
function decycle(obj) {
  var seen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

  if ( false || !obj || _typeof(obj) !== 'object') {
    return obj;
  }

  if (seen.has(obj)) {
    return '[Circular]';
  }

  var newSeen = seen.add(obj);

  if (Array.isArray(obj)) {
    return obj.map(function (x) {
      return decycle(x, newSeen);
    });
  }

  return Object.fromEntries(Object.entries(obj).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return [key, decycle(value, newSeen)];
  }));
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js ***!
  \***********************************************************************/
/*! exports provided: flatten */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
function flatten(values) {
  return values.reduce(function (a, b) {
    return a.concat(b);
  }, []);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/generateAutocompleteId.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/generateAutocompleteId.js ***!
  \**************************************************************************************/
/*! exports provided: generateAutocompleteId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateAutocompleteId", function() { return generateAutocompleteId; });
var autocompleteId = 0;
function generateAutocompleteId() {
  return "autocomplete-".concat(autocompleteId++);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/getAttributeValueByPath.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/getAttributeValueByPath.js ***!
  \***************************************************************************************/
/*! exports provided: getAttributeValueByPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttributeValueByPath", function() { return getAttributeValueByPath; });
function getAttributeValueByPath(record, path) {
  return path.reduce(function (current, key) {
    return current && current[key];
  }, record);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js ***!
  \*****************************************************************************/
/*! exports provided: getItemsCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsCount", function() { return getItemsCount; });
function getItemsCount(state) {
  if (state.collections.length === 0) {
    return 0;
  }

  return state.collections.reduce(function (sum, collection) {
    return sum + collection.items.length;
  }, 0);
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/index.js ***!
  \*********************************************************************/
/*! exports provided: createRef, debounce, decycle, flatten, generateAutocompleteId, getAttributeValueByPath, getItemsCount, invariant, isEqual, noop, userAgents, version, warnCache, warn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createRef */ "./node_modules/@algolia/autocomplete-shared/dist/esm/createRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return _createRef__WEBPACK_IMPORTED_MODULE_0__["createRef"]; });

/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce */ "./node_modules/@algolia/autocomplete-shared/dist/esm/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"]; });

/* harmony import */ var _decycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decycle */ "./node_modules/@algolia/autocomplete-shared/dist/esm/decycle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decycle", function() { return _decycle__WEBPACK_IMPORTED_MODULE_2__["decycle"]; });

/* harmony import */ var _flatten__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flatten */ "./node_modules/@algolia/autocomplete-shared/dist/esm/flatten.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _flatten__WEBPACK_IMPORTED_MODULE_3__["flatten"]; });

/* harmony import */ var _generateAutocompleteId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateAutocompleteId */ "./node_modules/@algolia/autocomplete-shared/dist/esm/generateAutocompleteId.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateAutocompleteId", function() { return _generateAutocompleteId__WEBPACK_IMPORTED_MODULE_4__["generateAutocompleteId"]; });

/* harmony import */ var _getAttributeValueByPath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getAttributeValueByPath */ "./node_modules/@algolia/autocomplete-shared/dist/esm/getAttributeValueByPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAttributeValueByPath", function() { return _getAttributeValueByPath__WEBPACK_IMPORTED_MODULE_5__["getAttributeValueByPath"]; });

/* harmony import */ var _getItemsCount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getItemsCount */ "./node_modules/@algolia/autocomplete-shared/dist/esm/getItemsCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getItemsCount", function() { return _getItemsCount__WEBPACK_IMPORTED_MODULE_6__["getItemsCount"]; });

/* harmony import */ var _invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invariant */ "./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return _invariant__WEBPACK_IMPORTED_MODULE_7__["invariant"]; });

/* harmony import */ var _isEqual__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isEqual */ "./node_modules/@algolia/autocomplete-shared/dist/esm/isEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _isEqual__WEBPACK_IMPORTED_MODULE_8__["isEqual"]; });

/* harmony import */ var _MaybePromise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MaybePromise */ "./node_modules/@algolia/autocomplete-shared/dist/esm/MaybePromise.js");
/* empty/unused harmony star reexport *//* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./noop */ "./node_modules/@algolia/autocomplete-shared/dist/esm/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _noop__WEBPACK_IMPORTED_MODULE_10__["noop"]; });

/* harmony import */ var _UserAgent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UserAgent */ "./node_modules/@algolia/autocomplete-shared/dist/esm/UserAgent.js");
/* empty/unused harmony star reexport *//* harmony import */ var _userAgents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./userAgents */ "./node_modules/@algolia/autocomplete-shared/dist/esm/userAgents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userAgents", function() { return _userAgents__WEBPACK_IMPORTED_MODULE_12__["userAgents"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./version */ "./node_modules/@algolia/autocomplete-shared/dist/esm/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version__WEBPACK_IMPORTED_MODULE_13__["version"]; });

/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./warn */ "./node_modules/@algolia/autocomplete-shared/dist/esm/warn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnCache", function() { return _warn__WEBPACK_IMPORTED_MODULE_14__["warnCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _warn__WEBPACK_IMPORTED_MODULE_14__["warn"]; });

















/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/invariant.js ***!
  \*************************************************************************/
/*! exports provided: invariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/**
 * Throws an error if the condition is not met in development mode.
 * This is used to make development a better experience to provide guidance as
 * to where the error comes from.
 */
function invariant(condition, message) {
  if (false) {}

  if (!condition) {
    throw new Error("[Autocomplete] ".concat(typeof message === 'function' ? message() : message));
  }
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/isEqual.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/isEqual.js ***!
  \***********************************************************************/
/*! exports provided: isEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
function isPrimitive(obj) {
  return obj !== Object(obj);
}

function isEqual(first, second) {
  if (first === second) {
    return true;
  }

  if (isPrimitive(first) || isPrimitive(second) || typeof first === 'function' || typeof second === 'function') {
    return first === second;
  }

  if (Object.keys(first).length !== Object.keys(second).length) {
    return false;
  }

  for (var _i = 0, _Object$keys = Object.keys(first); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (!(key in second)) {
      return false;
    }

    if (!isEqual(first[key], second[key])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/noop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/noop.js ***!
  \********************************************************************/
/*! exports provided: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
var noop = function noop() {};

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/userAgents.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/userAgents.js ***!
  \**************************************************************************/
/*! exports provided: userAgents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAgents", function() { return userAgents; });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "./node_modules/@algolia/autocomplete-shared/dist/esm/version.js");

var userAgents = [{
  segment: 'autocomplete-core',
  version: _version__WEBPACK_IMPORTED_MODULE_0__["version"]
}];

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/version.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/version.js ***!
  \***********************************************************************/
/*! exports provided: version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
var version = '1.6.2';

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-shared/dist/esm/warn.js":
/*!********************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-shared/dist/esm/warn.js ***!
  \********************************************************************/
/*! exports provided: warnCache, warn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnCache", function() { return warnCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
var warnCache = {
  current: {}
};
/**
 * Logs a warning if the condition is not met.
 * This is used to log issues in development environment only.
 */

function warn(condition, message) {
  if (false) {}

  if (condition) {
    return;
  }

  var sanitizedMessage = message.trim();
  var hasAlreadyPrinted = warnCache.current[sanitizedMessage];

  if (!hasAlreadyPrinted) {
    warnCache.current[sanitizedMessage] = true; // eslint-disable-next-line no-console

    console.warn("[Autocomplete] ".concat(sanitizedMessage));
  }
}

/***/ }),

/***/ "./node_modules/@algolia/autocomplete-theme-classic/dist/theme.min.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/@algolia/autocomplete-theme-classic/dist/theme.min.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./theme.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@algolia/autocomplete-theme-classic/dist/theme.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js":
/*!*******************************************************************!*\
  !*** ./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! algoliasearch-lite.umd.js | 4.13.0 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
!function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){e(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e){var t,r="algoliasearch-client-js-".concat(e.key),n=function(){return void 0===t&&(t=e.localStorage||window.localStorage),t},a=function(){return JSON.parse(n().getItem(r)||"{}")};return{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){var r=JSON.stringify(e),n=a()[r];return Promise.all([n||t(),void 0!==n])})).then((function(e){var t=o(e,2),n=t[0],a=t[1];return Promise.all([n,a||r.miss(n)])})).then((function(e){return o(e,1)[0]}))},set:function(e,t){return Promise.resolve().then((function(){var o=a();return o[JSON.stringify(e)]=t,n().setItem(r,JSON.stringify(o)),t}))},delete:function(e){return Promise.resolve().then((function(){var t=a();delete t[JSON.stringify(e)],n().setItem(r,JSON.stringify(t))}))},clear:function(){return Promise.resolve().then((function(){n().removeItem(r)}))}}}function i(e){var t=a(e.caches),r=t.shift();return void 0===r?{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},n=t();return n.then((function(e){return Promise.all([e,r.miss(e)])})).then((function(e){return o(e,1)[0]}))},set:function(e,t){return Promise.resolve(t)},delete:function(e){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(e,n,o).catch((function(){return i({caches:t}).get(e,n,o)}))},set:function(e,n){return r.set(e,n).catch((function(){return i({caches:t}).set(e,n)}))},delete:function(e){return r.delete(e).catch((function(){return i({caches:t}).delete(e)}))},clear:function(){return r.clear().catch((function(){return i({caches:t}).clear()}))}}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},t={};return{get:function(r,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},a=JSON.stringify(r);if(a in t)return Promise.resolve(e.serializable?JSON.parse(t[a]):t[a]);var u=n(),i=o&&o.miss||function(){return Promise.resolve()};return u.then((function(e){return i(e)})).then((function(){return u}))},set:function(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(e){return delete t[JSON.stringify(e)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function c(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function l(e,t){return t?(Object.keys(t).forEach((function(r){e[r]=t[r](e)})),e):e}function f(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0;return e.replace(/%s/g,(function(){return encodeURIComponent(r[o++])}))}var h={WithinQueryParameters:0,WithinHeaders:1};function d(e,t){var r=e||{},n=r.data||{};return Object.keys(r).forEach((function(e){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(n[e]=r[e])})),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var m={Read:1,Write:2,Any:3},p=1,v=2,y=3;function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p;return r(r({},e),{},{status:t,lastUpdate:Date.now()})}function b(e){return"string"==typeof e?{protocol:"https",url:e,accept:m.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||m.Any}}var O="GET",P="POST";function q(e,t){return Promise.all(t.map((function(t){return e.get(t,(function(){return Promise.resolve(g(t))}))}))).then((function(e){var r=e.filter((function(e){return function(e){return e.status===p||Date.now()-e.lastUpdate>12e4}(e)})),n=e.filter((function(e){return function(e){return e.status===y&&Date.now()-e.lastUpdate<=12e4}(e)})),o=[].concat(a(r),a(n));return{getTimeout:function(e,t){return(0===n.length&&0===e?1:n.length+3+e)*t},statelessHosts:o.length>0?o.map((function(e){return b(e)})):t}}))}function w(e,t,n,o){var u=[],i=function(e,t){if(e.method===O||void 0===e.data&&void 0===t.data)return;var n=Array.isArray(e.data)?e.data:r(r({},e.data),t.data);return JSON.stringify(n)}(n,o),s=function(e,t){var n=r(r({},e.headers),t.headers),o={};return Object.keys(n).forEach((function(e){var t=n[e];o[e.toLowerCase()]=t})),o}(e,o),c=n.method,l=n.method!==O?{}:r(r({},n.data),o.data),f=r(r(r({"x-algolia-agent":e.userAgent.value},e.queryParameters),l),o.queryParameters),h=0,d=function t(r,a){var l=r.pop();if(void 0===l)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:A(u)};var d={data:i,headers:s,method:c,url:S(l,n.path,f),connectTimeout:a(h,e.timeouts.connect),responseTimeout:a(h,o.timeout)},m=function(e){var t={request:d,response:e,host:l,triesLeft:r.length};return u.push(t),t},p={onSuccess:function(e){return function(e){try{return JSON.parse(e.content)}catch(t){throw function(e,t){return{name:"DeserializationError",message:e,response:t}}(t.message,e)}}(e)},onRetry:function(n){var o=m(n);return n.isTimedOut&&h++,Promise.all([e.logger.info("Retryable failure",x(o)),e.hostsCache.set(l,g(l,n.isTimedOut?y:v))]).then((function(){return t(r,a)}))},onFail:function(e){throw m(e),function(e,t){var r=e.content,n=e.status,o=r;try{o=JSON.parse(r).message}catch(e){}return function(e,t,r){return{name:"ApiError",message:e,status:t,transporterStackTrace:r}}(o,n,t)}(e,A(u))}};return e.requester.send(d).then((function(e){return function(e,t){return function(e){var t=e.status;return e.isTimedOut||function(e){var t=e.isTimedOut,r=e.status;return!t&&0==~~r}(e)||2!=~~(t/100)&&4!=~~(t/100)}(e)?t.onRetry(e):2==~~(e.status/100)?t.onSuccess(e):t.onFail(e)}(e,p)}))};return q(e.hostsCache,t).then((function(e){return d(a(e.statelessHosts).reverse(),e.getTimeout)}))}function j(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(e){var r="; ".concat(e.segment).concat(void 0!==e.version?" (".concat(e.version,")"):"");return-1===t.value.indexOf(r)&&(t.value="".concat(t.value).concat(r)),t}};return t}function S(e,t,r){var n=T(r),o="".concat(e.protocol,"://").concat(e.url,"/").concat("/"===t.charAt(0)?t.substr(1):t);return n.length&&(o+="?".concat(n)),o}function T(e){return Object.keys(e).map((function(t){return f("%s=%s",t,(r=e[t],"[object Object]"===Object.prototype.toString.call(r)||"[object Array]"===Object.prototype.toString.call(r)?JSON.stringify(e[t]):e[t]));var r})).join("&")}function A(e){return e.map((function(e){return x(e)}))}function x(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return r(r({},e),{},{request:r(r({},e.request),{},{headers:r(r({},e.request.headers),t)})})}var N=function(e){var t=e.appId,n=function(e,t,r){var n={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers:function(){return e===h.WithinHeaders?n:{}},queryParameters:function(){return e===h.WithinQueryParameters?n:{}}}}(void 0!==e.authMode?e.authMode:h.WithinHeaders,t,e.apiKey),a=function(e){var t=e.hostsCache,r=e.logger,n=e.requester,a=e.requestsCache,u=e.responsesCache,i=e.timeouts,s=e.userAgent,c=e.hosts,l=e.queryParameters,f={hostsCache:t,logger:r,requester:n,requestsCache:a,responsesCache:u,timeouts:i,userAgent:s,headers:e.headers,queryParameters:l,hosts:c.map((function(e){return b(e)})),read:function(e,t){var r=d(t,f.timeouts.read),n=function(){return w(f,f.hosts.filter((function(e){return 0!=(e.accept&m.Read)})),e,r)};if(!0!==(void 0!==r.cacheable?r.cacheable:e.cacheable))return n();var a={request:e,mappedRequestOptions:r,transporter:{queryParameters:f.queryParameters,headers:f.headers}};return f.responsesCache.get(a,(function(){return f.requestsCache.get(a,(function(){return f.requestsCache.set(a,n()).then((function(e){return Promise.all([f.requestsCache.delete(a),e])}),(function(e){return Promise.all([f.requestsCache.delete(a),Promise.reject(e)])})).then((function(e){var t=o(e,2);t[0];return t[1]}))}))}),{miss:function(e){return f.responsesCache.set(a,e)}})},write:function(e,t){return w(f,f.hosts.filter((function(e){return 0!=(e.accept&m.Write)})),e,d(t,f.timeouts.write))}};return f}(r(r({hosts:[{url:"".concat(t,"-dsn.algolia.net"),accept:m.Read},{url:"".concat(t,".algolia.net"),accept:m.Write}].concat(c([{url:"".concat(t,"-1.algolianet.com")},{url:"".concat(t,"-2.algolianet.com")},{url:"".concat(t,"-3.algolianet.com")}]))},e),{},{headers:r(r(r({},n.headers()),{"content-type":"application/x-www-form-urlencoded"}),e.headers),queryParameters:r(r({},n.queryParameters()),e.queryParameters)}));return l({transporter:a,appId:t,addAlgoliaAgent:function(e,t){a.userAgent.add({segment:e,version:t})},clearCache:function(){return Promise.all([a.requestsCache.clear(),a.responsesCache.clear()]).then((function(){}))}},e.methods)},C=function(e){return function(t,r){return t.method===O?e.transporter.read(t,r):e.transporter.write(t,r)}},k=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={transporter:e.transporter,appId:e.appId,indexName:t};return l(n,r.methods)}},J=function(e){return function(t,n){var o=t.map((function(e){return r(r({},e),{},{params:T(e.params||{})})}));return e.transporter.read({method:P,path:"1/indexes/*/queries",data:{requests:o},cacheable:!0},n)}},E=function(e){return function(t,o){return Promise.all(t.map((function(t){var a=t.params,u=a.facetName,i=a.facetQuery,s=n(a,["facetName","facetQuery"]);return k(e)(t.indexName,{methods:{searchForFacetValues:R}}).searchForFacetValues(u,i,r(r({},o),s))})))}},I=function(e){return function(t,r,n){return e.transporter.read({method:P,path:f("1/answers/%s/prediction",e.indexName),data:{query:t,queryLanguages:r},cacheable:!0},n)}},F=function(e){return function(t,r){return e.transporter.read({method:P,path:f("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r)}},R=function(e){return function(t,r,n){return e.transporter.read({method:P,path:f("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n)}},D=1,W=2,H=3;function Q(e,t,n){var o,a={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(e){return new Promise((function(t){var r=new XMLHttpRequest;r.open(e.method,e.url,!0),Object.keys(e.headers).forEach((function(t){return r.setRequestHeader(t,e.headers[t])}));var n,o=function(e,n){return setTimeout((function(){r.abort(),t({status:0,content:n,isTimedOut:!0})}),1e3*e)},a=o(e.connectTimeout,"Connection timeout");r.onreadystatechange=function(){r.readyState>r.OPENED&&void 0===n&&(clearTimeout(a),n=o(e.responseTimeout,"Socket timeout"))},r.onerror=function(){0===r.status&&(clearTimeout(a),clearTimeout(n),t({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=function(){clearTimeout(a),clearTimeout(n),t({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(e.data)}))}},logger:(o=H,{debug:function(e,t){return D>=o&&console.debug(e,t),Promise.resolve()},info:function(e,t){return W>=o&&console.info(e,t),Promise.resolve()},error:function(e,t){return console.error(e,t),Promise.resolve()}}),responsesCache:s(),requestsCache:s({serializable:!1}),hostsCache:i({caches:[u({key:"".concat("4.13.0","-").concat(e)}),s()]}),userAgent:j("4.13.0").add({segment:"Browser",version:"lite"}),authMode:h.WithinQueryParameters};return N(r(r(r({},a),n),{},{methods:{search:J,searchForFacetValues:E,multipleQueries:J,multipleSearchForFacetValues:E,customRequest:C,initIndex:function(e){return function(t){return k(e)(t,{methods:{search:F,searchForFacetValues:R,findAnswers:I}})}}}}))}return Q.version="4.13.0",Q}));


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@algolia/autocomplete-theme-classic/dist/theme.min.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@algolia/autocomplete-theme-classic/dist/theme.min.css ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! @algolia/autocomplete-theme-classic 1.6.2 | MIT License | © Algolia, Inc. and contributors | https://github.com/algolia/autocomplete */\n:root{--aa-search-input-height:44px;--aa-input-icon-size:20px;--aa-base-unit:16;--aa-spacing-factor:1;--aa-spacing:calc(var(--aa-base-unit)*var(--aa-spacing-factor)*1px);--aa-spacing-half:calc(var(--aa-spacing)/2);--aa-panel-max-height:650px;--aa-base-z-index:9999;--aa-font-size:calc(var(--aa-base-unit)*1px);--aa-font-family:inherit;--aa-font-weight-medium:500;--aa-font-weight-semibold:600;--aa-font-weight-bold:700;--aa-icon-size:20px;--aa-icon-stroke-width:1.6;--aa-icon-color-rgb:119,119,163;--aa-icon-color-alpha:1;--aa-action-icon-size:20px;--aa-text-color-rgb:38,38,39;--aa-text-color-alpha:1;--aa-primary-color-rgb:62,52,211;--aa-primary-color-alpha:0.2;--aa-muted-color-rgb:128,126,163;--aa-muted-color-alpha:0.6;--aa-panel-border-color-rgb:128,126,163;--aa-panel-border-color-alpha:0.3;--aa-input-border-color-rgb:128,126,163;--aa-input-border-color-alpha:0.8;--aa-background-color-rgb:255,255,255;--aa-background-color-alpha:1;--aa-input-background-color-rgb:255,255,255;--aa-input-background-color-alpha:1;--aa-selected-color-rgb:179,173,214;--aa-selected-color-alpha:0.205;--aa-description-highlight-background-color-rgb:245,223,77;--aa-description-highlight-background-color-alpha:0.5;--aa-detached-media-query:(max-width:680px);--aa-detached-modal-media-query:(min-width:680px);--aa-detached-modal-max-width:680px;--aa-detached-modal-max-height:500px;--aa-overlay-color-rgb:115,114,129;--aa-overlay-color-alpha:0.4;--aa-panel-shadow:0 0 0 1px rgba(35,38,59,0.1),0 6px 16px -4px rgba(35,38,59,0.15);--aa-scrollbar-width:13px;--aa-scrollbar-track-background-color-rgb:234,234,234;--aa-scrollbar-track-background-color-alpha:1;--aa-scrollbar-thumb-background-color-rgb:var(--aa-background-color-rgb);--aa-scrollbar-thumb-background-color-alpha:1}@media (hover:none) and (pointer:coarse){:root{--aa-spacing-factor:1.2;--aa-action-icon-size:22px}}body.dark,body[data-theme=dark]{--aa-text-color-rgb:183,192,199;--aa-primary-color-rgb:146,138,255;--aa-muted-color-rgb:146,138,255;--aa-input-background-color-rgb:0,3,9;--aa-background-color-rgb:21,24,42;--aa-selected-color-rgb:146,138,255;--aa-selected-color-alpha:0.25;--aa-description-highlight-background-color-rgb:0 255 255;--aa-description-highlight-background-color-alpha:0.25;--aa-icon-color-rgb:119,119,163;--aa-panel-shadow:inset 1px 1px 0 0 #2c2e40,0 3px 8px 0 #000309;--aa-scrollbar-track-background-color-rgb:44,46,64;--aa-scrollbar-thumb-background-color-rgb:var(--aa-background-color-rgb)}.aa-Autocomplete *,.aa-DetachedFormContainer *,.aa-Panel *{box-sizing:border-box}.aa-Autocomplete,.aa-DetachedFormContainer,.aa-Panel{color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha));font-family:inherit;font-family:var(--aa-font-family);font-size:16px;font-size:var(--aa-font-size);font-weight:400;line-height:1em;margin:0;padding:0;text-align:left}.aa-Form{align-items:center;background-color:#fff;background-color:rgba(var(--aa-input-background-color-rgb),var(--aa-input-background-color-alpha));border:1px solid rgba(128,126,163,.8);border:1px solid rgba(var(--aa-input-border-color-rgb),var(--aa-input-border-color-alpha));border-radius:3px;display:flex;line-height:1em;margin:0;position:relative;width:100%}.aa-Form[focus-within]{border-color:#3e34d3;border-color:rgba(var(--aa-primary-color-rgb),1);box-shadow:0 0 0 2px rgba(62,52,211,.2),inset 0 0 0 2px rgba(62,52,211,.2);box-shadow:rgba(var(--aa-primary-color-rgb),var(--aa-primary-color-alpha)) 0 0 0 2px,inset rgba(var(--aa-primary-color-rgb),var(--aa-primary-color-alpha)) 0 0 0 2px;outline:medium none currentColor}.aa-Form:focus-within{border-color:#3e34d3;border-color:rgba(var(--aa-primary-color-rgb),1);box-shadow:0 0 0 2px rgba(62,52,211,.2),inset 0 0 0 2px rgba(62,52,211,.2);box-shadow:rgba(var(--aa-primary-color-rgb),var(--aa-primary-color-alpha)) 0 0 0 2px,inset rgba(var(--aa-primary-color-rgb),var(--aa-primary-color-alpha)) 0 0 0 2px;outline:medium none currentColor}.aa-InputWrapperPrefix{align-items:center;display:flex;flex-shrink:0;height:44px;height:var(--aa-search-input-height);order:1}.aa-Label,.aa-LoadingIndicator{cursor:auto;flex-shrink:0;height:100%;padding:0;text-align:left}.aa-Label svg,.aa-LoadingIndicator svg{color:#3e34d3;color:rgba(var(--aa-primary-color-rgb),1);height:auto;max-height:20px;max-height:var(--aa-input-icon-size);stroke-width:1.6;stroke-width:var(--aa-icon-stroke-width);width:20px;width:var(--aa-input-icon-size)}.aa-LoadingIndicator,.aa-SubmitButton{height:100%;padding-left:11px;padding-left:calc(var(--aa-spacing)*0.75 - 1px);padding-right:8px;padding-right:var(--aa-spacing-half);width:47px;width:calc(var(--aa-spacing)*1.75 + var(--aa-icon-size) - 1px)}@media (hover:none) and (pointer:coarse){.aa-LoadingIndicator,.aa-SubmitButton{padding-left:3px;padding-left:calc(var(--aa-spacing-half)/2 - 1px);width:39px;width:calc(var(--aa-icon-size) + var(--aa-spacing)*1.25 - 1px)}}.aa-SubmitButton{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;margin:0}.aa-LoadingIndicator{align-items:center;display:flex;justify-content:center}.aa-LoadingIndicator[hidden]{display:none}.aa-InputWrapper{order:3;position:relative;width:100%}.aa-Input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha));font:inherit;height:44px;height:var(--aa-search-input-height);padding:0;width:100%}.aa-Input::-moz-placeholder{color:rgba(128,126,163,.6);color:rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));opacity:1}.aa-Input:-ms-input-placeholder{color:rgba(128,126,163,.6);color:rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));opacity:1}.aa-Input::placeholder{color:rgba(128,126,163,.6);color:rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));opacity:1}.aa-Input:focus{border-color:none;box-shadow:none;outline:none}.aa-Input::-webkit-search-cancel-button,.aa-Input::-webkit-search-decoration,.aa-Input::-webkit-search-results-button,.aa-Input::-webkit-search-results-decoration{-webkit-appearance:none;appearance:none}.aa-InputWrapperSuffix{align-items:center;display:flex;height:44px;height:var(--aa-search-input-height);order:4}.aa-ClearButton{align-items:center;background:none;border:0;color:rgba(128,126,163,.6);color:rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));cursor:pointer;display:flex;height:100%;margin:0;padding:0 12.8333333333px;padding:0 calc(var(--aa-spacing)*0.83333 - .5px)}@media (hover:none) and (pointer:coarse){.aa-ClearButton{padding:0 10.1666666667px;padding:0 calc(var(--aa-spacing)*0.66667 - .5px)}}.aa-ClearButton:focus,.aa-ClearButton:hover{color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha))}.aa-ClearButton[hidden]{display:none}.aa-ClearButton svg{stroke-width:1.6;stroke-width:var(--aa-icon-stroke-width);width:20px;width:var(--aa-icon-size)}.aa-Panel{background-color:#fff;background-color:rgba(var(--aa-background-color-rgb),var(--aa-background-color-alpha));border-radius:4px;border-radius:calc(var(--aa-spacing)/4);box-shadow:0 0 0 1px rgba(35,38,59,.1),0 6px 16px -4px rgba(35,38,59,.15);box-shadow:var(--aa-panel-shadow);margin:8px 0 0;overflow:hidden;position:absolute;transition:opacity .2s ease-in,filter .2s ease-in}@media screen and (prefers-reduced-motion){.aa-Panel{transition:none}}.aa-Panel button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;margin:0;padding:0}.aa-PanelLayout{height:100%;margin:0;max-height:650px;max-height:var(--aa-panel-max-height);overflow-y:auto;padding:0;position:relative;text-align:left}.aa-PanelLayoutColumns--twoGolden{display:grid;grid-template-columns:39.2% auto;overflow:hidden;padding:0}.aa-PanelLayoutColumns--two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));overflow:hidden;padding:0}.aa-PanelLayoutColumns--three{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));overflow:hidden;padding:0}.aa-Panel--stalled .aa-Source{filter:grayscale(1);opacity:.8}.aa-Panel--scrollable{margin:0;max-height:650px;max-height:var(--aa-panel-max-height);overflow-x:hidden;overflow-y:auto;padding:8px;padding:var(--aa-spacing-half);scrollbar-color:#fff #eaeaea;scrollbar-color:rgba(var(--aa-scrollbar-thumb-background-color-rgb),var(--aa-scrollbar-thumb-background-color-alpha)) rgba(var(--aa-scrollbar-track-background-color-rgb),var(--aa-scrollbar-track-background-color-alpha));scrollbar-width:thin}.aa-Panel--scrollable::-webkit-scrollbar{width:13px;width:var(--aa-scrollbar-width)}.aa-Panel--scrollable::-webkit-scrollbar-track{background-color:#eaeaea;background-color:rgba(var(--aa-scrollbar-track-background-color-rgb),var(--aa-scrollbar-track-background-color-alpha))}.aa-Panel--scrollable::-webkit-scrollbar-thumb{background-color:#fff;background-color:rgba(var(--aa-scrollbar-thumb-background-color-rgb),var(--aa-scrollbar-thumb-background-color-alpha));border-radius:9999px;border:3px solid #eaeaea;border-color:rgba(var(--aa-scrollbar-track-background-color-rgb),var(--aa-scrollbar-track-background-color-alpha));border-right:2px solid rgba(var(--aa-scrollbar-track-background-color-rgb),var(--aa-scrollbar-track-background-color-alpha))}.aa-Source{margin:0;padding:0;position:relative;width:100%}.aa-Source:empty{display:none}.aa-SourceNoResults{font-size:1em;margin:0;padding:16px;padding:var(--aa-spacing)}.aa-List{list-style:none;margin:0}.aa-List,.aa-SourceHeader{padding:0;position:relative}.aa-SourceHeader{margin:8px .5em 8px 0;margin:var(--aa-spacing-half) .5em var(--aa-spacing-half) 0}.aa-SourceHeader:empty{display:none}.aa-SourceHeaderTitle{background:#fff;background:rgba(var(--aa-background-color-rgb),var(--aa-background-color-alpha));color:#3e34d3;color:rgba(var(--aa-primary-color-rgb),1);display:inline-block;font-size:.8em;font-weight:600;font-weight:var(--aa-font-weight-semibold);margin:0;padding:0 8px 0 0;padding:0 var(--aa-spacing-half) 0 0;position:relative;z-index:9999;z-index:var(--aa-base-z-index)}.aa-SourceHeaderLine{border-bottom:1px solid #3e34d3;border-bottom:1px solid rgba(var(--aa-primary-color-rgb),1);display:block;height:2px;left:0;margin:0;opacity:.3;padding:0;position:absolute;right:0;top:8px;top:var(--aa-spacing-half);z-index:9998;z-index:calc(var(--aa-base-z-index) - 1)}.aa-SourceFooterSeeAll{background:linear-gradient(180deg,#fff,rgba(128,126,163,.14));background:linear-gradient(180deg,rgba(var(--aa-background-color-rgb),var(--aa-background-color-alpha)),rgba(128,126,163,.14));border:1px solid rgba(128,126,163,.6);border:1px solid rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));border-radius:5px;box-shadow:inset 0 0 2px #fff,0 2px 2px -1px rgba(76,69,88,.15);color:inherit;font-size:.95em;font-weight:500;font-weight:var(--aa-font-weight-medium);padding:.475em 1em .6em;text-decoration:none}.aa-SourceFooterSeeAll:focus,.aa-SourceFooterSeeAll:hover{border:1px solid #3e34d3;border:1px solid rgba(var(--aa-primary-color-rgb),1);color:#3e34d3;color:rgba(var(--aa-primary-color-rgb),1)}.aa-Item{align-items:center;border-radius:3px;cursor:pointer;display:grid;min-height:40px;min-height:calc(var(--aa-spacing)*2.5);padding:4px;padding:calc(var(--aa-spacing-half)/2)}.aa-Item[aria-selected=true]{background-color:rgba(179,173,214,.205);background-color:rgba(var(--aa-selected-color-rgb),var(--aa-selected-color-alpha))}.aa-Item[aria-selected=true] .aa-ActiveOnly,.aa-Item[aria-selected=true] .aa-ItemActionButton{visibility:visible}.aa-ItemIcon{align-items:center;background:#fff;background:rgba(var(--aa-background-color-rgb),var(--aa-background-color-alpha));border-radius:3px;box-shadow:inset 0 0 0 1px rgba(128,126,163,.3);box-shadow:inset 0 0 0 1px rgba(var(--aa-panel-border-color-rgb),var(--aa-panel-border-color-alpha));color:#7777a3;color:rgba(var(--aa-icon-color-rgb),var(--aa-icon-color-alpha));display:flex;flex-shrink:0;font-size:.7em;height:28px;height:calc(var(--aa-icon-size) + var(--aa-spacing-half));justify-content:center;overflow:hidden;stroke-width:1.6;stroke-width:var(--aa-icon-stroke-width);text-align:center;width:28px;width:calc(var(--aa-icon-size) + var(--aa-spacing-half))}.aa-ItemIcon img{height:auto;max-height:20px;max-height:calc(var(--aa-icon-size) + var(--aa-spacing-half) - 8px);max-width:20px;max-width:calc(var(--aa-icon-size) + var(--aa-spacing-half) - 8px);width:auto}.aa-ItemIcon svg{height:20px;height:var(--aa-icon-size);width:20px;width:var(--aa-icon-size)}.aa-ItemIcon--alignTop{align-self:flex-start}.aa-ItemIcon--noBorder{background:none;box-shadow:none}.aa-ItemIcon--picture{height:96px;width:96px}.aa-ItemIcon--picture img{max-height:100%;max-width:100%;padding:8px;padding:var(--aa-spacing-half)}.aa-ItemContent{align-items:center;cursor:pointer;display:grid;grid-gap:8px;gap:8px;grid-gap:var(--aa-spacing-half);gap:var(--aa-spacing-half);grid-auto-flow:column;line-height:1.25em;overflow:hidden}.aa-ItemContent:empty{display:none}.aa-ItemContent mark{background:none;color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha));font-style:normal;font-weight:700;font-weight:var(--aa-font-weight-bold)}.aa-ItemContent--dual{display:flex;flex-direction:column;justify-content:space-between;text-align:left}.aa-ItemContent--dual .aa-ItemContentSubtitle,.aa-ItemContent--dual .aa-ItemContentTitle{display:block}.aa-ItemContent--indented{padding-left:36px;padding-left:calc(var(--aa-icon-size) + var(--aa-spacing))}.aa-ItemContentBody{display:grid;grid-gap:4px;gap:4px;grid-gap:calc(var(--aa-spacing-half)/2);gap:calc(var(--aa-spacing-half)/2)}.aa-ItemContentTitle{display:inline-block;margin:0 .5em 0 0;max-width:100%;overflow:hidden;padding:0;text-overflow:ellipsis;white-space:nowrap}.aa-ItemContentSubtitle{font-size:.92em}.aa-ItemContentSubtitleIcon:before{border-color:rgba(128,126,163,.64);border-color:rgba(var(--aa-muted-color-rgb),.64);border-style:solid;content:\"\";display:inline-block;left:1px;position:relative;top:-3px}.aa-ItemContentSubtitle--inline .aa-ItemContentSubtitleIcon:before{border-width:0 0 1.5px;margin-left:8px;margin-left:var(--aa-spacing-half);margin-right:4px;margin-right:calc(var(--aa-spacing-half)/2);width:10px;width:calc(var(--aa-spacing-half) + 2px)}.aa-ItemContentSubtitle--standalone{align-items:center;color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha));display:grid;grid-gap:8px;gap:8px;grid-gap:var(--aa-spacing-half);gap:var(--aa-spacing-half);grid-auto-flow:column;justify-content:start}.aa-ItemContentSubtitle--standalone .aa-ItemContentSubtitleIcon:before{border-radius:0 0 0 3px;border-width:0 0 1.5px 1.5px;height:8px;height:var(--aa-spacing-half);width:8px;width:var(--aa-spacing-half)}.aa-ItemContentSubtitleCategory{color:#807ea3;color:rgba(var(--aa-muted-color-rgb),1);font-weight:500}.aa-ItemContentDescription{color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha));font-size:.85em;max-width:100%;overflow-x:hidden;text-overflow:ellipsis}.aa-ItemContentDescription:empty{display:none}.aa-ItemContentDescription mark{background:rgba(245,223,77,.5);background:rgba(var(--aa-description-highlight-background-color-rgb),var(--aa-description-highlight-background-color-alpha));color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha));font-style:normal;font-weight:500;font-weight:var(--aa-font-weight-medium)}.aa-ItemContentDash{color:rgba(128,126,163,.6);color:rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));display:none;opacity:.4}.aa-ItemContentTag{background-color:rgba(62,52,211,.2);background-color:rgba(var(--aa-primary-color-rgb),var(--aa-primary-color-alpha));border-radius:3px;margin:0 .4em 0 0;padding:.08em .3em}.aa-ItemLink,.aa-ItemWrapper{align-items:center;color:inherit;display:grid;grid-gap:4px;gap:4px;grid-gap:calc(var(--aa-spacing-half)/2);gap:calc(var(--aa-spacing-half)/2);grid-auto-flow:column;justify-content:space-between;width:100%}.aa-ItemLink{color:inherit;text-decoration:none}.aa-ItemActions{display:grid;grid-auto-flow:column;height:100%;justify-self:end;margin:0 -5.3333333333px;margin:0 calc(var(--aa-spacing)/-3);padding:0 2px 0 0}.aa-ItemActionButton{align-items:center;background:none;border:0;color:rgba(128,126,163,.6);color:rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));cursor:pointer;display:flex;flex-shrink:0;padding:0}.aa-ItemActionButton:focus svg,.aa-ItemActionButton:hover svg{color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha))}@media (hover:none) and (pointer:coarse){.aa-ItemActionButton:focus svg,.aa-ItemActionButton:hover svg{color:inherit}}.aa-ItemActionButton svg{color:rgba(128,126,163,.6);color:rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));margin:5.3333333333px;margin:calc(var(--aa-spacing)/3);stroke-width:1.6;stroke-width:var(--aa-icon-stroke-width);width:20px;width:var(--aa-action-icon-size)}.aa-ActiveOnly{visibility:hidden}.aa-PanelHeader{align-items:center;background:#3e34d3;background:rgba(var(--aa-primary-color-rgb),1);color:#fff;display:grid;height:var(--aa-modal-header-height);margin:0;padding:8px 16px;padding:var(--aa-spacing-half) var(--aa-spacing);position:relative}.aa-PanelHeader:after{background-image:linear-gradient(#fff,hsla(0,0%,100%,0));background-image:linear-gradient(rgba(var(--aa-background-color-rgb),1),rgba(var(--aa-background-color-rgb),0));bottom:-8px;bottom:calc(var(--aa-spacing-half)*-1);content:\"\";height:8px;height:var(--aa-spacing-half);left:0;pointer-events:none;position:absolute;right:0}.aa-PanelFooter,.aa-PanelHeader:after{z-index:9999;z-index:var(--aa-base-z-index)}.aa-PanelFooter{background-color:#fff;background-color:rgba(var(--aa-background-color-rgb),var(--aa-background-color-alpha));box-shadow:inset 0 1px 0 rgba(128,126,163,.3);box-shadow:inset 0 1px 0 rgba(var(--aa-panel-border-color-rgb),var(--aa-panel-border-color-alpha));display:flex;justify-content:space-between;margin:0;padding:16px;padding:var(--aa-spacing);position:relative}.aa-PanelFooter:after{background-image:linear-gradient(hsla(0,0%,100%,0),rgba(128,126,163,.6));background-image:linear-gradient(rgba(var(--aa-background-color-rgb),0),rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha)));content:\"\";height:16px;height:var(--aa-spacing);left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:-16px;top:calc(var(--aa-spacing)*-1);z-index:9998;z-index:calc(var(--aa-base-z-index) - 1)}.aa-DetachedContainer{background:#fff;background:rgba(var(--aa-background-color-rgb),var(--aa-background-color-alpha));bottom:0;box-shadow:0 0 0 1px rgba(35,38,59,.1),0 6px 16px -4px rgba(35,38,59,.15);box-shadow:var(--aa-panel-shadow);display:flex;flex-direction:column;left:0;margin:0;overflow:hidden;padding:0;position:fixed;right:0;top:0;z-index:9999;z-index:var(--aa-base-z-index)}.aa-DetachedContainer:after{height:32px}.aa-DetachedContainer .aa-SourceHeader{margin:8px 0 8px 2px;margin:var(--aa-spacing-half) 0 var(--aa-spacing-half) 2px}.aa-DetachedContainer .aa-Panel{background-color:#fff;background-color:rgba(var(--aa-background-color-rgb),var(--aa-background-color-alpha));border-radius:0;box-shadow:none;flex-grow:1;margin:0;padding:0;position:relative}.aa-DetachedContainer .aa-PanelLayout{bottom:0;box-shadow:none;left:0;margin:0;max-height:none;overflow-y:auto;position:absolute;right:0;top:0;width:100%}.aa-DetachedFormContainer{border-bottom:1px solid rgba(128,126,163,.3);border-bottom:1px solid rgba(var(--aa-panel-border-color-rgb),var(--aa-panel-border-color-alpha));display:flex;flex-direction:row;justify-content:space-between;margin:0;padding:8px;padding:var(--aa-spacing-half)}.aa-DetachedCancelButton{background:none;border:0;border-radius:3px;color:inherit;color:#262627;color:rgba(var(--aa-text-color-rgb),var(--aa-text-color-alpha));cursor:pointer;font:inherit;margin:0 0 0 8px;margin:0 0 0 var(--aa-spacing-half);padding:0 8px;padding:0 var(--aa-spacing-half)}.aa-DetachedCancelButton:focus,.aa-DetachedCancelButton:hover{box-shadow:inset 0 0 0 1px rgba(128,126,163,.3);box-shadow:inset 0 0 0 1px rgba(var(--aa-panel-border-color-rgb),var(--aa-panel-border-color-alpha))}.aa-DetachedContainer--modal{border-radius:6px;bottom:inherit;height:auto;margin:0 auto;max-width:680px;max-width:var(--aa-detached-modal-max-width);position:absolute;top:3%}.aa-DetachedContainer--modal .aa-PanelLayout{max-height:500px;max-height:var(--aa-detached-modal-max-height);padding-bottom:8px;padding-bottom:var(--aa-spacing-half);position:static}.aa-DetachedSearchButton{align-items:center;background-color:#fff;background-color:rgba(var(--aa-input-background-color-rgb),var(--aa-input-background-color-alpha));border:1px solid rgba(128,126,163,.8);border:1px solid rgba(var(--aa-input-border-color-rgb),var(--aa-input-border-color-alpha));border-radius:3px;color:rgba(128,126,163,.6);color:rgba(var(--aa-muted-color-rgb),var(--aa-muted-color-alpha));cursor:pointer;display:flex;font:inherit;font-family:inherit;font-family:var(--aa-font-family);font-size:16px;font-size:var(--aa-font-size);height:44px;height:var(--aa-search-input-height);margin:0;padding:0 5.5px;padding:0 calc(var(--aa-search-input-height)/8);position:relative;text-align:left;width:100%}.aa-DetachedSearchButton:focus{border-color:#3e34d3;border-color:rgba(var(--aa-primary-color-rgb),1);box-shadow:0 0 0 3px rgba(62,52,211,.2),inset 0 0 0 2px rgba(62,52,211,.2);box-shadow:rgba(var(--aa-primary-color-rgb),var(--aa-primary-color-alpha)) 0 0 0 3px,inset rgba(var(--aa-primary-color-rgb),var(--aa-primary-color-alpha)) 0 0 0 2px;outline:medium none currentColor}.aa-DetachedSearchButtonIcon{align-items:center;color:#3e34d3;color:rgba(var(--aa-primary-color-rgb),1);cursor:auto;display:flex;height:100%;justify-content:center;width:36px;width:calc(var(--aa-icon-size) + var(--aa-spacing))}.aa-Detached{height:100vh;overflow:hidden}.aa-DetachedOverlay{background-color:rgba(115,114,129,.4);background-color:rgba(var(--aa-overlay-color-rgb),var(--aa-overlay-color-alpha));height:100vh;left:0;margin:0;padding:0;position:fixed;right:0;top:0;z-index:9998;z-index:calc(var(--aa-base-z-index) - 1)}.aa-GradientBottom,.aa-GradientTop{height:8px;height:var(--aa-spacing-half);left:0;pointer-events:none;position:absolute;right:0;z-index:9999;z-index:var(--aa-base-z-index)}.aa-GradientTop{background-image:linear-gradient(#fff,hsla(0,0%,100%,0));background-image:linear-gradient(rgba(var(--aa-background-color-rgb),1),rgba(var(--aa-background-color-rgb),0));top:0}.aa-GradientBottom{background-image:linear-gradient(hsla(0,0%,100%,0),#fff);background-image:linear-gradient(rgba(var(--aa-background-color-rgb),0),rgba(var(--aa-background-color-rgb),1));border-bottom-left-radius:4px;border-bottom-left-radius:calc(var(--aa-spacing)/4);border-bottom-right-radius:4px;border-bottom-right-radius:calc(var(--aa-spacing)/4);bottom:0}@media (hover:none) and (pointer:coarse){.aa-DesktopOnly{display:none}}@media (hover:hover){.aa-TouchOnly{display:none}}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/htm/dist/htm.module.js":
/*!*********************************************!*\
  !*** ./node_modules/htm/dist/htm.module.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a)}return e},t=new Map;/* harmony default export */ __webpack_exports__["default"] = (function(s){var r=t.get(this);return r||(r=new Map,t.set(this,r)),(r=n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e=""},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0])}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]});


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return l; });
var n,l,u,i,t,o,r,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n)}function v(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y(l,f,t,o,null)}function y(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=l.vnode&&l.vnode(f),f}function p(){return{current:null}}function d(n){return n.children}function _(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||r!==l.debounceRendering)&&((r=l.debounceRendering)||o)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k(t):o,t.__h),z(u,t),t.__e!=o&&b(t)))})}function w(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null}j(n,_,p=p||e,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k(p))}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h])}function x(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?x(i,l,u):P(u,i,i,t,i.__e,l));return l}function A(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A(n,l)}):l.push(n)),l}function P(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px"}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k)})}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(r=r&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var o,r,f;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!o&&t||i).__k=v(d,null,[u]),r||e,e,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u)}function q(n,l){S(n,l,q)}function B(l,u,i){var t,o,r,f=a({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y(l.type,f,t||l.key,o||l.ref,null)}function D(n,l){var u={__c:l="__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c.slice,l={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this))},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},_.prototype.render=d,t=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./resources/js/algolia.js":
/*!*********************************!*\
  !*** ./resources/js/algolia.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! algoliasearch/lite */ "./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _algolia_autocomplete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @algolia/autocomplete-js */ "./node_modules/@algolia/autocomplete-js/dist/esm/index.js");
/* harmony import */ var _algolia_autocomplete_theme_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @algolia/autocomplete-theme-classic */ "./node_modules/@algolia/autocomplete-theme-classic/dist/theme.min.css");
/* harmony import */ var _algolia_autocomplete_theme_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_algolia_autocomplete_theme_classic__WEBPACK_IMPORTED_MODULE_2__);
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_0___default()('FDB4OZA1C8', 'e2086080818827346a4333eec474b31e');
Object(_algolia_autocomplete_js__WEBPACK_IMPORTED_MODULE_1__["autocomplete"])({
  container: '#autocomplete',
  debug: true,
  placeholder: 'Search for products',
  getSources: function getSources(_ref) {
    var query = _ref.query;
    return [{
      sourceId: 'products',
      getItems: function getItems() {
        return Object(_algolia_autocomplete_js__WEBPACK_IMPORTED_MODULE_1__["getAlgoliaResults"])({
          searchClient: searchClient,
          queries: [{
            indexName: 'products',
            query: query,
            params: {
              hitsPerPage: 5,
              attributesToSnippet: ['name:10', 'description:35'],
              snippetEllipsisText: '…'
            }
          }]
        });
      },
      templates: {
        item: function item(_ref2) {
          var item = _ref2.item,
              components = _ref2.components,
              html = _ref2.html;
          return html(_templateObject || (_templateObject = _taggedTemplateLiteral(["<div class=\"aa-ItemWrapper\">\n              <div class=\"aa-ItemContent\">\n                <div class=\"aa-ItemIcon aa-ItemIcon--alignTop\">\n                  <img\n                    src=\"", "\"\n                    alt=\"", "\"\n                    width=\"40\"\n                    height=\"40\"\n                  />\n                </div>\n                <div class=\"aa-ItemContentBody\">\n                  <div class=\"aa-ItemContentTitle\">\n                    ", "\n                  </div>\n                  <div class=\"aa-ItemContentDescription\">\n                    ", "\n                  </div>\n                </div>\n                <div class=\"aa-ItemActions\" style=\"position: absolute; right: 0;\">\n                </div>\n              </div>\n            </div>"])), item.image, item.name, components.Highlight({
            hit: item,
            attribute: 'name'
          }), components.Snippet({
            hit: item,
            attribute: 'details'
          }));
        }
      },
      onSelect: function onSelect(_ref3) {
        var item = _ref3.item;
        return window.location.href = window.location.origin + '/shop/' + item.slug;
      }
    }];
  },
  renderNoResults: function renderNoResults(_ref4, root) {
    var render = _ref4.render,
        html = _ref4.html,
        state = _ref4.state;
    render(html(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          <div class=\"aa-PanelLayout aa-Panel--scrollable\">\n            No results for \"", "\".\n          </div>\n        "])), state.query), root);
  }
});

/***/ }),

/***/ 1:
/*!***************************************!*\
  !*** multi ./resources/js/algolia.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/lampp/htdocs/ecommerce1/resources/js/algolia.js */"./resources/js/algolia.js");


/***/ })

/******/ });