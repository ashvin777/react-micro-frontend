"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = injectAssets;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function injectScript(_ref) {
  var filePath = _ref.filePath,
      name = _ref.name,
      host = _ref.host,
      pathname = _ref.pathname;
  var scriptId = "microfrontend-script-".concat(name, "-").concat(filePath);

  if (document.getElementById(scriptId)) {
    return;
  }

  return new Promise(function (resolve) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = scriptId;
    script.src = host + _path["default"].join(pathname, filePath);
    script.defer = true;
    script.async = true;

    script.onload = function () {
      return resolve();
    };

    document.body.appendChild(script);
  });
}

function injectStyle(_ref2) {
  var filePath = _ref2.filePath,
      name = _ref2.name,
      host = _ref2.host,
      pathname = _ref2.pathname;
  var linkId = "microfrontend-style-".concat(name, "-").concat(filePath);

  if (document.getElementById(linkId)) {
    return;
  }

  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.id = linkId;
  link.href = host + _path["default"].join(pathname, filePath);
  document.head.appendChild(link);
}

function injectAssets(_x) {
  return _injectAssets.apply(this, arguments);
}

function _injectAssets() {
  _injectAssets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref3) {
    var manifest, name, host, pathname, entrypoints, _iterator, _step, entry;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            manifest = _ref3.manifest, name = _ref3.name, host = _ref3.host, pathname = _ref3.pathname;
            entrypoints = (manifest === null || manifest === void 0 ? void 0 : manifest.entrypoints) || [];
            console.log('Injecting assets', entrypoints);
            _iterator = _createForOfIteratorHelper(entrypoints);
            _context.prev = 4;

            _iterator.s();

          case 6:
            if ((_step = _iterator.n()).done) {
              _context.next = 17;
              break;
            }

            entry = _step.value;

            if (!entry.match('.js')) {
              _context.next = 13;
              break;
            }

            _context.next = 11;
            return injectScript({
              filePath: entry,
              name: name,
              host: host,
              pathname: pathname
            });

          case 11:
            _context.next = 15;
            break;

          case 13:
            _context.next = 15;
            return injectStyle({
              filePath: entry,
              name: name,
              host: host,
              pathname: pathname
            });

          case 15:
            _context.next = 6;
            break;

          case 17:
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](4);

            _iterator.e(_context.t0);

          case 22:
            _context.prev = 22;

            _iterator.f();

            return _context.finish(22);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 19, 22, 25]]);
  }));
  return _injectAssets.apply(this, arguments);
}