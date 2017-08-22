"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Joe\\Desktop\\UCLA-Extension-Files\\Github-Repos\\ServerForSaintPaschal\\pages\\index.js?entry";
// This is the Link API


var Index = function Index() {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_link2.default, { href: "/about", style: { fontSize: 20 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Go to About Page")), _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Hello Next.js"));
};

exports.default = Index;