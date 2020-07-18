"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mfManifestFile = 'asset-manifest.json';

function getManifest(mfHost) {
  var url = _path["default"].join(mfHost, mfManifestFile);

  return _axios["default"].request({
    url: url,
    method: 'GET'
  });
}

var _default = {
  getManifest: getManifest
};
exports["default"] = _default;