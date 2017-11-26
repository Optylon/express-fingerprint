(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _murmurhash3js = __webpack_require__(3);

var _murmurhash3js2 = _interopRequireDefault(_murmurhash3js);

var _traverse = __webpack_require__(4);

var _traverse2 = _interopRequireDefault(_traverse);

var _useragent = __webpack_require__(5);

var _useragent2 = _interopRequireDefault(_useragent);

var _acceptHeaders = __webpack_require__(7);

var _acceptHeaders2 = _interopRequireDefault(_acceptHeaders);

var _geoip = __webpack_require__(8);

var _geoip2 = _interopRequireDefault(_geoip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var hash128 = _murmurhash3js2.default[process.arch].hash128;

exports.default = function (setting) {

  var config = _extends({
    parameters: [_useragent2.default, _acceptHeaders2.default, _geoip2.default]
  }, setting);

  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res, next) {
      var components, fingerprint, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, fn, obj, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, key, leaves;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              components = {};
              fingerprint = { hash: null };
              _context.prev = 2;


              // process each parameters
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 6;
              _iterator = config.parameters[Symbol.iterator]();

            case 8:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 35;
                break;
              }

              fn = _step.value;
              _context.next = 12;
              return fn(req);

            case 12:
              obj = _context.sent;
              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              _context.prev = 16;

              for (_iterator2 = Object.keys(obj)[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                key = _step2.value;

                components[key] = obj[key];
              }
              _context.next = 24;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context['catch'](16);
              _didIteratorError2 = true;
              _iteratorError2 = _context.t0;

            case 24:
              _context.prev = 24;
              _context.prev = 25;

              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }

            case 27:
              _context.prev = 27;

              if (!_didIteratorError2) {
                _context.next = 30;
                break;
              }

              throw _iteratorError2;

            case 30:
              return _context.finish(27);

            case 31:
              return _context.finish(24);

            case 32:
              _iteratorNormalCompletion = true;
              _context.next = 8;
              break;

            case 35:
              _context.next = 41;
              break;

            case 37:
              _context.prev = 37;
              _context.t1 = _context['catch'](6);
              _didIteratorError = true;
              _iteratorError = _context.t1;

            case 41:
              _context.prev = 41;
              _context.prev = 42;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 44:
              _context.prev = 44;

              if (!_didIteratorError) {
                _context.next = 47;
                break;
              }

              throw _iteratorError;

            case 47:
              return _context.finish(44);

            case 48:
              return _context.finish(41);

            case 49:

              // calculate hash
              leaves = (0, _traverse2.default)(components).reduce(function (acc, x) {
                if (undefined.isLeaf) acc.push(x);
                return acc;
              }, []);

              fingerprint.hash = hash128(leaves.join('~~~'));
              fingerprint.components = components; // debug

              req.fingerprint = fingerprint;
              next();

              _context.next = 59;
              break;

            case 56:
              _context.prev = 56;
              _context.t2 = _context['catch'](2);

              next(_context.t2);

            case 59:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[2, 56], [6, 37, 41, 49], [16, 20, 24, 32], [25,, 27, 31], [42,, 44, 48]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("murmurhash3js");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("traverse");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _useragent = __webpack_require__(6);

var _useragent2 = _interopRequireDefault(_useragent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var agent = _useragent2.default.parse(req.headers['user-agent']);
  return {
    useragent: {
      browser: {
        family: agent.family,
        version: agent.major
      },
      device: {
        family: agent.device.family,
        version: agent.device.major
      },
      os: {
        family: agent.os.family,
        major: agent.os.major,
        minor: agent.os.minor
      }
    }
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("useragent");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (req) {
  return {
    acceptHeaders: {
      accept: req.headers['accept'],
      language: req.headers['accept-language']
    }
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _geoipLite = __webpack_require__(9);

var _geoipLite2 = _interopRequireDefault(_geoipLite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req) {
    var geo;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            geo = _geoipLite2.default.lookup(req.ip);
            return _context.abrupt('return', {
              geoip: {
                country: geo ? geo.country : null
              }
            });

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("geoip-lite");

/***/ })
/******/ ])));