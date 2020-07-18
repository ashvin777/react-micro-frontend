"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Assets = _interopRequireDefault(require("./Assets.Injector"));

var _Assets2 = _interopRequireDefault(require("./Assets.Api"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Microfrontend = /*#__PURE__*/function (_PureComponent) {
  _inherits(Microfrontend, _PureComponent);

  var _super = _createSuper(Microfrontend);

  function Microfrontend() {
    var _this;

    _classCallCheck(this, Microfrontend);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: true,
      loadingError: false
    });

    return _this;
  }

  _createClass(Microfrontend, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this$props, name, host, pathname, _yield$AssetsApi$getM, manifest;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, name = _this$props.name, host = _this$props.host, pathname = _this$props.pathname;
                _context.prev = 1;
                console.log(name, pathname);
                _context.next = 5;
                return _Assets2["default"].getManifest(host, pathname);

              case 5:
                _yield$AssetsApi$getM = _context.sent;
                manifest = _yield$AssetsApi$getM.data;
                _context.next = 9;
                return (0, _Assets["default"])({
                  manifest: manifest,
                  name: name,
                  host: host,
                  pathname: pathname
                });

              case 9:
                this.setState({
                  loading: false,
                  loadingError: false
                });
                this.mountMicrofrontend();
                _context.next = 18;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);
                this.setState({
                  loading: false,
                  loadingError: true
                });
                console.error('Failed to load assets of microfrontend - ', name);
                console.error('Failed with error - ', _context.t0);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 13]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmountMicrofrontend();
    }
  }, {
    key: "mountMicrofrontend",
    value: function mountMicrofrontend() {
      var name = this.props.name;

      if (window["mount".concat(name)]) {
        window["mount".concat(name)](this.getContainerName(), this.props);
      } else {
        this.setState({
          loadingError: true
        });
        console.error('Mount method is not defined in microfrontend - ', name);
      }
    }
  }, {
    key: "unmountMicrofrontend",
    value: function unmountMicrofrontend() {
      var name = this.props.name;

      if (window["unmount".concat(name)]) {
        window["unmount".concat(name)](this.getContainerName());
      } else {
        this.setState({
          loadingError: true
        });
        console.error('Unmount method is not defined in microfrontend - ', name);
      }
    }
  }, {
    key: "getContainerName",
    value: function getContainerName() {
      var name = this.props.name;
      return "".concat(name, "-microfrontend-container");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          loadingError = _this$state.loadingError;
      var _this$props2 = this.props,
          Loader = _this$props2.Loader,
          Fallback = _this$props2.Fallback;
      return /*#__PURE__*/_react["default"].createElement("main", {
        id: this.getContainerName()
      }, loading && Loader ? /*#__PURE__*/_react["default"].createElement(Loader, null) : null, loadingError && Fallback ? /*#__PURE__*/_react["default"].createElement(Fallback, null) : null);
    }
  }]);

  return Microfrontend;
}(_react.PureComponent);

exports["default"] = Microfrontend;

_defineProperty(Microfrontend, "propTypes", {
  name: _propTypes["default"].string.isRequired,
  host: _propTypes["default"].string.isRequired,
  pathname: _propTypes["default"].string,
  Loader: _propTypes["default"].element,
  Fallback: _propTypes["default"].element
});

_defineProperty(Microfrontend, "defaultProps", {
  loader: /*#__PURE__*/_react["default"].createElement("div", null, "Loading..."),
  fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Failed to load microfrontend, please try again"),
  pathname: '/'
});