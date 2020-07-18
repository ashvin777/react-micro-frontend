"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
Object.defineProperty(exports, "Microfrontend", {
  enumerable: true,
  get: function get() {
    return _Microfrontend["default"];
  }
});

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Microfrontend = _interopRequireDefault(require("./Microfrontend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function register(_ref) {
  var name = _ref.name,
      containerId = _ref.containerId,
      render = _ref.render;

  window["mount".concat(name)] = function (containerId) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _reactDom["default"].render(render(props), document.getElementById(containerId));
  };

  window["unmount".concat(name)] = function (containerId) {
    _reactDom["default"].unmountComponentAtNode(document.getElementById(containerId));
  };

  document.addEventListener('DOMContentLoaded', function () {
    window["mount".concat(name)](containerId);
  });
}