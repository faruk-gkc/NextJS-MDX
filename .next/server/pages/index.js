(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.mdx":
/*!*************************!*\
  !*** ./pages/index.mdx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MDXContent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\FARUK G\xD6KCEG\xD6Z\\Desktop\\Silinecek\\nextjs-mdx\\pages\\index.mdx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */

const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, `Markdown`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, `How to use Markdown`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://travis-ci.org/joemccann/dillinger"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 8
    }
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("img", _objectSpread(_objectSpread({
    parentName: "a"
  }, {
    "src": "https://travis-ci.org/joemccann/dillinger.svg?branch=master",
    "alt": "Build Status"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 10
    }
  })))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, `This works because secret gists aren’t 100% hidden, they can be accessed by the URL directly. It’s not as easy as it could be if Medium supported Markdown, but it’s far easier than manually reformatting your entire story in Medium.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, `Type some Markdown on the left`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, `See HTML in the right`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, `✨Magic ✨`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, `Features`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, `Import a HTML file and watch it magically convert to Markdown`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, `Drag and drop images (requires your Dropbox account be linked)`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, `Import and save files from GitHub, Dropbox, Google Drive and One Drive`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, `Drag and drop markdown and HTML files into Dillinger`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, `Export documents as Markdown, HTML and PDF`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, `Markdown is a lightweight markup language based on the formatting conventions
that people naturally use in email.
As `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "http://daringfireball.net"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 6
    }
  }), `John Gruber`), ` writes on the `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "http://daringfireball.net/projects/markdown/"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 48
    }
  }), `Markdown site`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("blockquote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    parentName: "blockquote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, `The overriding design goal for Markdown's
formatting syntax is to make it as readable
as possible. The idea is that a
Markdown-formatted document should be
publishable as-is, as plain text, without
looking like it's been marked up with tags
or formatting instructions.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, `This text you see here is `, `*`, `actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, `Tech`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, `Dillinger uses a number of open source projects to work properly:`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "http://angularjs.org"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 27
    }
  }), `AngularJS`), ` - HTML enhanced for web apps!`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "http://ace.ajax.org"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 27
    }
  }), `Ace Editor`), ` - awesome web-based text editor`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "https://github.com/markdown-it/markdown-it"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 27
    }
  }), `markdown-it`), ` - Markdown parser done right. Fast and easy to extend.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "http://twitter.github.com/bootstrap/"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 27
    }
  }), `Twitter Bootstrap`), ` - great UI boilerplate for modern web apps`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "http://nodejs.org"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 27
    }
  }), `node.js`), ` - evented I/O for the backend`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "http://expressjs.com"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 27
    }
  }), `Express`), ` - fast node.js network app framework `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "http://twitter.com/tjholowaychuk"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 69
    }
  }), `@tjholowaychuk`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "http://gulpjs.com"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 27
    }
  }), `Gulp`), ` - the streaming build system`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "https://breakdance.github.io/breakdance/"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 27
    }
  }), `Breakdance`), ` - HTML
to Markdown converter`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "http://jquery.com"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 27
    }
  }), `jQuery`), ` - duh`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, `And of course Dillinger itself is open source with a `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://github.com/joemccann/dillinger"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 65
    }
  }), `public repository`), `
on GitHub.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, `Installation`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, `Dillinger requires `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://nodejs.org/"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 31
    }
  }), `Node.js`), ` v10+ to run.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, `Install the dependencies and devDependencies and start the server.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {
    "className": "language-sh"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 10
    }
  }), `cd dillinger
npm i
node app
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, `For production environments...`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {
    "className": "language-sh"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 10
    }
  }), `npm install --production
NODE_ENV=production node app
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, `Plugins`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, `Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("thead", {
    parentName: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("tr", {
    parentName: "thead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("th", _objectSpread(_objectSpread({
    parentName: "tr"
  }, {
    "align": null
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }), `Plugin`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("th", _objectSpread(_objectSpread({
    parentName: "tr"
  }, {
    "align": null
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }), `README`))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("tbody", {
    parentName: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", _objectSpread(_objectSpread({
    parentName: "tr"
  }, {
    "align": null
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }), `Dropbox`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", _objectSpread(_objectSpread({
    parentName: "tr"
  }, {
    "align": null
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "td"
  }, {
    "href": "https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 14
    }
  }), `plugins/dropbox/README.md`))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", _objectSpread(_objectSpread({
    parentName: "tr"
  }, {
    "align": null
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }), `GitHub`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", _objectSpread(_objectSpread({
    parentName: "tr"
  }, {
    "align": null
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "td"
  }, {
    "href": "https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 14
    }
  }), `plugins/github/README.md`))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", _objectSpread(_objectSpread({
    parentName: "tr"
  }, {
    "align": null
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }), `Google Drive`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", _objectSpread(_objectSpread({
    parentName: "tr"
  }, {
    "align": null
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "td"
  }, {
    "href": "https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 14
    }
  }), `plugins/googledrive/README.md`))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", _objectSpread(_objectSpread({
    parentName: "tr"
  }, {
    "align": null
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }), `OneDrive`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", _objectSpread(_objectSpread({
    parentName: "tr"
  }, {
    "align": null
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "td"
  }, {
    "href": "https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 14
    }
  }), `plugins/onedrive/README.md`))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", _objectSpread(_objectSpread({
    parentName: "tr"
  }, {
    "align": null
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }), `Medium`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", _objectSpread(_objectSpread({
    parentName: "tr"
  }, {
    "align": null
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 11
    }
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "td"
  }, {
    "href": "https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 14
    }
  }), `plugins/medium/README.md`))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("tr", {
    parentName: "tbody",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", _objectSpread(_objectSpread({
    parentName: "tr"
  }, {
    "align": null
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }), `Google Analytics`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("td", _objectSpread(_objectSpread({
    parentName: "tr"
  }, {
    "align": null
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 11
    }
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("a", _objectSpread(_objectSpread({
    parentName: "td"
  }, {
    "href": "https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 14
    }
  }), `plugins/googleanalytics/README.md`))))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 5
    }
  }, `Development`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 5
    }
  }, `Want to contribute? Great!`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 5
    }
  }, `Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 5
    }
  }, `Open your favorite Terminal and run these commands.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 5
    }
  }, `First Tab:`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {
    "className": "language-sh"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 10
    }
  }), `node app
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 5
    }
  }, `Second Tab:`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {
    "className": "language-sh"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 10
    }
  }), `gulp watch
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 5
    }
  }, `(optional) Third:`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {
    "className": "language-sh"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 10
    }
  }), `karma test
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 5
    }
  }, `Building for source`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 5
    }
  }, `For production release:`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {
    "className": "language-sh"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 10
    }
  }), `gulp build --prod
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 5
    }
  }, `Generating pre-built zip archives for distribution:`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {
    "className": "language-sh"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 10
    }
  }), `gulp build dist --prod
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 5
    }
  }, `Docker`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 5
    }
  }, `Dillinger is very easy to install and deploy in a Docker container.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }, `By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {
    "className": "language-sh"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 10
    }
  }), `cd dillinger
docker build -t <youruser>/dillinger:\${package.json.version} .
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 5
    }
  }, `This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 23
    }
  }, `\${package.json.version}`), ` with the actual
version of Dillinger.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 5
    }
  }, `Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {
    "className": "language-sh"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 10
    }
  }), `docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:\${package.json.version}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("blockquote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    parentName: "blockquote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 7
    }
  }, `Note: `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 44
    }
  }, `--capt-add=SYS-ADMIN`), ` is required for PDF rendering.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 5
    }
  }, `Verify the deployment by navigating to your server address in
your preferred browser.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("code", _objectSpread(_objectSpread({
    parentName: "pre"
  }, {
    "className": "language-sh"
  }), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 10
    }
  }), `127.0.0.1:8000
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 5
    }
  }, `License`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 5
    }
  }, `MIT`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 5
    }
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 8
    }
  }, `Free Software, Hell Yeah!`)));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@mdx-js/react");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.mdx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtbWR4Ly4vcGFnZXMvaW5kZXgubWR4Iiwid2VicGFjazovL25leHRqcy1tZHgvZXh0ZXJuYWwgXCJAbWR4LWpzL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLW1keC9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFJQSxNQUFNQSxXQUFXLEdBQUcsRUFBcEI7QUFHQSxNQUFNQyxTQUFTLEdBQUcsU0FBbEI7QUFDZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUhnQztBQUNqQ0M7QUFEaUMsR0FHaEM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sbURBQUMsU0FBRCxnREFBZUosV0FBZixHQUFnQ0ksS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTSxVQUFOLENBREssRUFFTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU0scUJBQU4sQ0FGSyxFQUdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ3JCLFlBQVE7QUFEYSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUU7QUFBSyxjQUFVLEVBQUM7QUFBaEIsS0FBd0I7QUFDdkIsV0FBTyw2REFEZ0I7QUFFdkIsV0FBTztBQUZnQixHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUNYLENBSFMsQ0FBTCxDQTdOSyxFQWlPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxjQUFVLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCLFFBQTdCLEVBQXFDO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkIsc0JBQTdCLENBQXJDLEVBQXVHLGlDQUF2RyxDQURGLENBak9LLEVBb09MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUNULHdCQURJLENBcE9LLEVBc09MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUM1QixpQkFBYTtBQURlLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFRTtBQUNYLENBSFMsQ0FBTCxDQXRPSyxFQTBPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU0sU0FBTixDQTFPSyxFQTJPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUssS0FBTCxDQTNPSyxFQTRPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBUSxjQUFVLEVBQUMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QiwyQkFBekIsQ0FBSCxDQTVPSyxDQUFQO0FBOE9EO0FBRUQ7QUFDQUQsVUFBVSxDQUFDRyxjQUFYLEdBQTRCLElBQTVCLEM7Ozs7Ozs7Ozs7O0FDbFFBLDJDOzs7Ozs7Ozs7OztBQ0FBLG1DIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuXG5cblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIFxufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cbiAgICA8aDE+e2BNYXJrZG93bmB9PC9oMT5cbiAgICA8aDI+e2BIb3cgdG8gdXNlIE1hcmtkb3duYH08L2gyPlxuICAgIDxwPjxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly90cmF2aXMtY2kub3JnL2pvZW1jY2Fubi9kaWxsaW5nZXJcIlxuICAgICAgfX0+PGltZyBwYXJlbnROYW1lPVwiYVwiIHsuLi57XG4gICAgICAgICAgXCJzcmNcIjogXCJodHRwczovL3RyYXZpcy1jaS5vcmcvam9lbWNjYW5uL2RpbGxpbmdlci5zdmc/YnJhbmNoPW1hc3RlclwiLFxuICAgICAgICAgIFwiYWx0XCI6IFwiQnVpbGQgU3RhdHVzXCJcbiAgICAgICAgfX0+PC9pbWc+PC9hPjwvcD5cbiAgICA8cD57YFRoaXMgd29ya3MgYmVjYXVzZSBzZWNyZXQgZ2lzdHMgYXJlbuKAmXQgMTAwJSBoaWRkZW4sIHRoZXkgY2FuIGJlIGFjY2Vzc2VkIGJ5IHRoZSBVUkwgZGlyZWN0bHkuIEl04oCZcyBub3QgYXMgZWFzeSBhcyBpdCBjb3VsZCBiZSBpZiBNZWRpdW0gc3VwcG9ydGVkIE1hcmtkb3duLCBidXQgaXTigJlzIGZhciBlYXNpZXIgdGhhbiBtYW51YWxseSByZWZvcm1hdHRpbmcgeW91ciBlbnRpcmUgc3RvcnkgaW4gTWVkaXVtLmB9PC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFR5cGUgc29tZSBNYXJrZG93biBvbiB0aGUgbGVmdGB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFNlZSBIVE1MIGluIHRoZSByaWdodGB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YOKcqE1hZ2ljIOKcqGB9PC9saT5cbiAgICA8L3VsPlxuICAgIDxoMj57YEZlYXR1cmVzYH08L2gyPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YEltcG9ydCBhIEhUTUwgZmlsZSBhbmQgd2F0Y2ggaXQgbWFnaWNhbGx5IGNvbnZlcnQgdG8gTWFya2Rvd25gfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BEcmFnIGFuZCBkcm9wIGltYWdlcyAocmVxdWlyZXMgeW91ciBEcm9wYm94IGFjY291bnQgYmUgbGlua2VkKWB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YEltcG9ydCBhbmQgc2F2ZSBmaWxlcyBmcm9tIEdpdEh1YiwgRHJvcGJveCwgR29vZ2xlIERyaXZlIGFuZCBPbmUgRHJpdmVgfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BEcmFnIGFuZCBkcm9wIG1hcmtkb3duIGFuZCBIVE1MIGZpbGVzIGludG8gRGlsbGluZ2VyYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgRXhwb3J0IGRvY3VtZW50cyBhcyBNYXJrZG93biwgSFRNTCBhbmQgUERGYH08L2xpPlxuICAgIDwvdWw+XG4gICAgPHA+e2BNYXJrZG93biBpcyBhIGxpZ2h0d2VpZ2h0IG1hcmt1cCBsYW5ndWFnZSBiYXNlZCBvbiB0aGUgZm9ybWF0dGluZyBjb252ZW50aW9uc1xudGhhdCBwZW9wbGUgbmF0dXJhbGx5IHVzZSBpbiBlbWFpbC5cbkFzIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwOi8vZGFyaW5nZmlyZWJhbGwubmV0XCJcbiAgICAgIH19PntgSm9obiBHcnViZXJgfTwvYT57YCB3cml0ZXMgb24gdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwOi8vZGFyaW5nZmlyZWJhbGwubmV0L3Byb2plY3RzL21hcmtkb3duL1wiXG4gICAgICB9fT57YE1hcmtkb3duIHNpdGVgfTwvYT48L3A+XG4gICAgPGJsb2NrcXVvdGU+XG4gICAgICA8cCBwYXJlbnROYW1lPVwiYmxvY2txdW90ZVwiPntgVGhlIG92ZXJyaWRpbmcgZGVzaWduIGdvYWwgZm9yIE1hcmtkb3duJ3NcbmZvcm1hdHRpbmcgc3ludGF4IGlzIHRvIG1ha2UgaXQgYXMgcmVhZGFibGVcbmFzIHBvc3NpYmxlLiBUaGUgaWRlYSBpcyB0aGF0IGFcbk1hcmtkb3duLWZvcm1hdHRlZCBkb2N1bWVudCBzaG91bGQgYmVcbnB1Ymxpc2hhYmxlIGFzLWlzLCBhcyBwbGFpbiB0ZXh0LCB3aXRob3V0XG5sb29raW5nIGxpa2UgaXQncyBiZWVuIG1hcmtlZCB1cCB3aXRoIHRhZ3Ncbm9yIGZvcm1hdHRpbmcgaW5zdHJ1Y3Rpb25zLmB9PC9wPlxuICAgIDwvYmxvY2txdW90ZT5cbiAgICA8cD57YFRoaXMgdGV4dCB5b3Ugc2VlIGhlcmUgaXMgYH17YCpgfXtgYWN0dWFsbHktIHdyaXR0ZW4gaW4gTWFya2Rvd24hIFRvIGdldCBhIGZlZWxcbmZvciBNYXJrZG93bidzIHN5bnRheCwgdHlwZSBzb21lIHRleHQgaW50byB0aGUgbGVmdCB3aW5kb3cgYW5kXG53YXRjaCB0aGUgcmVzdWx0cyBpbiB0aGUgcmlnaHQuYH08L3A+XG4gICAgPGgyPntgVGVjaGB9PC9oMj5cbiAgICA8cD57YERpbGxpbmdlciB1c2VzIGEgbnVtYmVyIG9mIG9wZW4gc291cmNlIHByb2plY3RzIHRvIHdvcmsgcHJvcGVybHk6YH08L3A+XG4gICAgPHVsPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cDovL2FuZ3VsYXJqcy5vcmdcIlxuICAgICAgICB9fT57YEFuZ3VsYXJKU2B9PC9hPntgIC0gSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cDovL2FjZS5hamF4Lm9yZ1wiXG4gICAgICAgIH19PntgQWNlIEVkaXRvcmB9PC9hPntgIC0gYXdlc29tZSB3ZWItYmFzZWQgdGV4dCBlZGl0b3JgfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXRcIlxuICAgICAgICB9fT57YG1hcmtkb3duLWl0YH08L2E+e2AgLSBNYXJrZG93biBwYXJzZXIgZG9uZSByaWdodC4gRmFzdCBhbmQgZWFzeSB0byBleHRlbmQuYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cDovL3R3aXR0ZXIuZ2l0aHViLmNvbS9ib290c3RyYXAvXCJcbiAgICAgICAgfX0+e2BUd2l0dGVyIEJvb3RzdHJhcGB9PC9hPntgIC0gZ3JlYXQgVUkgYm9pbGVycGxhdGUgZm9yIG1vZGVybiB3ZWIgYXBwc2B9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHA6Ly9ub2RlanMub3JnXCJcbiAgICAgICAgfX0+e2Bub2RlLmpzYH08L2E+e2AgLSBldmVudGVkIEkvTyBmb3IgdGhlIGJhY2tlbmRgfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJodHRwOi8vZXhwcmVzc2pzLmNvbVwiXG4gICAgICAgIH19PntgRXhwcmVzc2B9PC9hPntgIC0gZmFzdCBub2RlLmpzIG5ldHdvcmsgYXBwIGZyYW1ld29yayBgfTxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cDovL3R3aXR0ZXIuY29tL3RqaG9sb3dheWNodWtcIlxuICAgICAgICB9fT57YEB0amhvbG93YXljaHVrYH08L2E+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHA6Ly9ndWxwanMuY29tXCJcbiAgICAgICAgfX0+e2BHdWxwYH08L2E+e2AgLSB0aGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbWB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vYnJlYWtkYW5jZS5naXRodWIuaW8vYnJlYWtkYW5jZS9cIlxuICAgICAgICB9fT57YEJyZWFrZGFuY2VgfTwvYT57YCAtIEhUTUxcbnRvIE1hcmtkb3duIGNvbnZlcnRlcmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHA6Ly9qcXVlcnkuY29tXCJcbiAgICAgICAgfX0+e2BqUXVlcnlgfTwvYT57YCAtIGR1aGB9PC9saT5cbiAgICA8L3VsPlxuICAgIDxwPntgQW5kIG9mIGNvdXJzZSBEaWxsaW5nZXIgaXRzZWxmIGlzIG9wZW4gc291cmNlIHdpdGggYSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvZW1jY2Fubi9kaWxsaW5nZXJcIlxuICAgICAgfX0+e2BwdWJsaWMgcmVwb3NpdG9yeWB9PC9hPntgXG5vbiBHaXRIdWIuYH08L3A+XG4gICAgPGgyPntgSW5zdGFsbGF0aW9uYH08L2gyPlxuICAgIDxwPntgRGlsbGluZ2VyIHJlcXVpcmVzIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL25vZGVqcy5vcmcvXCJcbiAgICAgIH19PntgTm9kZS5qc2B9PC9hPntgIHYxMCsgdG8gcnVuLmB9PC9wPlxuICAgIDxwPntgSW5zdGFsbCB0aGUgZGVwZW5kZW5jaWVzIGFuZCBkZXZEZXBlbmRlbmNpZXMgYW5kIHN0YXJ0IHRoZSBzZXJ2ZXIuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaFwiXG4gICAgICB9fT57YGNkIGRpbGxpbmdlclxubnBtIGlcbm5vZGUgYXBwXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cy4uLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hcIlxuICAgICAgfX0+e2BucG0gaW5zdGFsbCAtLXByb2R1Y3Rpb25cbk5PREVfRU5WPXByb2R1Y3Rpb24gbm9kZSBhcHBcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YFBsdWdpbnNgfTwvaDI+XG4gICAgPHA+e2BEaWxsaW5nZXIgaXMgY3VycmVudGx5IGV4dGVuZGVkIHdpdGggdGhlIGZvbGxvd2luZyBwbHVnaW5zLlxuSW5zdHJ1Y3Rpb25zIG9uIGhvdyB0byB1c2UgdGhlbSBpbiB5b3VyIG93biBhcHBsaWNhdGlvbiBhcmUgbGlua2VkIGJlbG93LmB9PC9wPlxuICAgIDx0YWJsZT5cbiAgICAgIDx0aGVhZCBwYXJlbnROYW1lPVwidGFibGVcIj5cbiAgICAgICAgPHRyIHBhcmVudE5hbWU9XCJ0aGVhZFwiPlxuICAgICAgICAgIDx0aCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgfX0+e2BQbHVnaW5gfTwvdGg+XG4gICAgICAgICAgPHRoIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICB9fT57YFJFQURNRWB9PC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHkgcGFyZW50TmFtZT1cInRhYmxlXCI+XG4gICAgICAgIDx0ciBwYXJlbnROYW1lPVwidGJvZHlcIj5cbiAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgIH19PntgRHJvcGJveGB9PC90ZD5cbiAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgIH19PjxhIHBhcmVudE5hbWU9XCJ0ZFwiIHsuLi57XG4gICAgICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qb2VtY2Nhbm4vZGlsbGluZ2VyL3RyZWUvbWFzdGVyL3BsdWdpbnMvZHJvcGJveC9SRUFETUUubWRcIlxuICAgICAgICAgICAgfX0+e2BwbHVnaW5zL2Ryb3Bib3gvUkVBRE1FLm1kYH08L2E+PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIHBhcmVudE5hbWU9XCJ0Ym9keVwiPlxuICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgfX0+e2BHaXRIdWJgfTwvdGQ+XG4gICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICB9fT48YSBwYXJlbnROYW1lPVwidGRcIiB7Li4ue1xuICAgICAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vam9lbWNjYW5uL2RpbGxpbmdlci90cmVlL21hc3Rlci9wbHVnaW5zL2dpdGh1Yi9SRUFETUUubWRcIlxuICAgICAgICAgICAgfX0+e2BwbHVnaW5zL2dpdGh1Yi9SRUFETUUubWRgfTwvYT48L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRib2R5XCI+XG4gICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICB9fT57YEdvb2dsZSBEcml2ZWB9PC90ZD5cbiAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgIH19PjxhIHBhcmVudE5hbWU9XCJ0ZFwiIHsuLi57XG4gICAgICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9qb2VtY2Nhbm4vZGlsbGluZ2VyL3RyZWUvbWFzdGVyL3BsdWdpbnMvZ29vZ2xlZHJpdmUvUkVBRE1FLm1kXCJcbiAgICAgICAgICAgIH19PntgcGx1Z2lucy9nb29nbGVkcml2ZS9SRUFETUUubWRgfTwvYT48L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRib2R5XCI+XG4gICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICB9fT57YE9uZURyaXZlYH08L3RkPlxuICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgfX0+PGEgcGFyZW50TmFtZT1cInRkXCIgey4uLntcbiAgICAgICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvZW1jY2Fubi9kaWxsaW5nZXIvdHJlZS9tYXN0ZXIvcGx1Z2lucy9vbmVkcml2ZS9SRUFETUUubWRcIlxuICAgICAgICAgICAgfX0+e2BwbHVnaW5zL29uZWRyaXZlL1JFQURNRS5tZGB9PC9hPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ciBwYXJlbnROYW1lPVwidGJvZHlcIj5cbiAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgIH19PntgTWVkaXVtYH08L3RkPlxuICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgfX0+PGEgcGFyZW50TmFtZT1cInRkXCIgey4uLntcbiAgICAgICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvZW1jY2Fubi9kaWxsaW5nZXIvdHJlZS9tYXN0ZXIvcGx1Z2lucy9tZWRpdW0vUkVBRE1FLm1kXCJcbiAgICAgICAgICAgIH19PntgcGx1Z2lucy9tZWRpdW0vUkVBRE1FLm1kYH08L2E+PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIHBhcmVudE5hbWU9XCJ0Ym9keVwiPlxuICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgfX0+e2BHb29nbGUgQW5hbHl0aWNzYH08L3RkPlxuICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgfX0+PGEgcGFyZW50TmFtZT1cInRkXCIgey4uLntcbiAgICAgICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL1JhaHVsSFAvZGlsbGluZ2VyL2Jsb2IvbWFzdGVyL3BsdWdpbnMvZ29vZ2xlYW5hbHl0aWNzL1JFQURNRS5tZFwiXG4gICAgICAgICAgICB9fT57YHBsdWdpbnMvZ29vZ2xlYW5hbHl0aWNzL1JFQURNRS5tZGB9PC9hPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgPGgyPntgRGV2ZWxvcG1lbnRgfTwvaDI+XG4gICAgPHA+e2BXYW50IHRvIGNvbnRyaWJ1dGU/IEdyZWF0IWB9PC9wPlxuICAgIDxwPntgRGlsbGluZ2VyIHVzZXMgR3VscCArIFdlYnBhY2sgZm9yIGZhc3QgZGV2ZWxvcGluZy5cbk1ha2UgYSBjaGFuZ2UgaW4geW91ciBmaWxlIGFuZCBpbnN0YW50YW5lb3VzbHkgc2VlIHlvdXIgdXBkYXRlcyFgfTwvcD5cbiAgICA8cD57YE9wZW4geW91ciBmYXZvcml0ZSBUZXJtaW5hbCBhbmQgcnVuIHRoZXNlIGNvbW1hbmRzLmB9PC9wPlxuICAgIDxwPntgRmlyc3QgVGFiOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hcIlxuICAgICAgfX0+e2Bub2RlIGFwcFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BTZWNvbmQgVGFiOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hcIlxuICAgICAgfX0+e2BndWxwIHdhdGNoXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YChvcHRpb25hbCkgVGhpcmQ6YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaFwiXG4gICAgICB9fT57YGthcm1hIHRlc3RcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoND57YEJ1aWxkaW5nIGZvciBzb3VyY2VgfTwvaDQ+XG4gICAgPHA+e2BGb3IgcHJvZHVjdGlvbiByZWxlYXNlOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hcIlxuICAgICAgfX0+e2BndWxwIGJ1aWxkIC0tcHJvZFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BHZW5lcmF0aW5nIHByZS1idWlsdCB6aXAgYXJjaGl2ZXMgZm9yIGRpc3RyaWJ1dGlvbjpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoXCJcbiAgICAgIH19PntgZ3VscCBidWlsZCBkaXN0IC0tcHJvZFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntgRG9ja2VyYH08L2gyPlxuICAgIDxwPntgRGlsbGluZ2VyIGlzIHZlcnkgZWFzeSB0byBpbnN0YWxsIGFuZCBkZXBsb3kgaW4gYSBEb2NrZXIgY29udGFpbmVyLmB9PC9wPlxuICAgIDxwPntgQnkgZGVmYXVsdCwgdGhlIERvY2tlciB3aWxsIGV4cG9zZSBwb3J0IDgwODAsIHNvIGNoYW5nZSB0aGlzIHdpdGhpbiB0aGVcbkRvY2tlcmZpbGUgaWYgbmVjZXNzYXJ5LiBXaGVuIHJlYWR5LCBzaW1wbHkgdXNlIHRoZSBEb2NrZXJmaWxlIHRvXG5idWlsZCB0aGUgaW1hZ2UuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaFwiXG4gICAgICB9fT57YGNkIGRpbGxpbmdlclxuZG9ja2VyIGJ1aWxkIC10IDx5b3VydXNlcj4vZGlsbGluZ2VyOlxcJHtwYWNrYWdlLmpzb24udmVyc2lvbn0gLlxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BUaGlzIHdpbGwgY3JlYXRlIHRoZSBkaWxsaW5nZXIgaW1hZ2UgYW5kIHB1bGwgaW4gdGhlIG5lY2Vzc2FyeSBkZXBlbmRlbmNpZXMuXG5CZSBzdXJlIHRvIHN3YXAgb3V0IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFxcJHtwYWNrYWdlLmpzb24udmVyc2lvbn1gfTwvaW5saW5lQ29kZT57YCB3aXRoIHRoZSBhY3R1YWxcbnZlcnNpb24gb2YgRGlsbGluZ2VyLmB9PC9wPlxuICAgIDxwPntgT25jZSBkb25lLCBydW4gdGhlIERvY2tlciBpbWFnZSBhbmQgbWFwIHRoZSBwb3J0IHRvIHdoYXRldmVyIHlvdSB3aXNoIG9uXG55b3VyIGhvc3QuIEluIHRoaXMgZXhhbXBsZSwgd2Ugc2ltcGx5IG1hcCBwb3J0IDgwMDAgb2YgdGhlIGhvc3QgdG9cbnBvcnQgODA4MCBvZiB0aGUgRG9ja2VyIChvciB3aGF0ZXZlciBwb3J0IHdhcyBleHBvc2VkIGluIHRoZSBEb2NrZXJmaWxlKTpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoXCJcbiAgICAgIH19PntgZG9ja2VyIHJ1biAtZCAtcCA4MDAwOjgwODAgLS1yZXN0YXJ0PWFsd2F5cyAtLWNhcC1hZGQ9U1lTX0FETUlOIC0tbmFtZT1kaWxsaW5nZXIgPHlvdXJ1c2VyPi9kaWxsaW5nZXI6XFwke3BhY2thZ2UuanNvbi52ZXJzaW9ufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGJsb2NrcXVvdGU+XG4gICAgICA8cCBwYXJlbnROYW1lPVwiYmxvY2txdW90ZVwiPntgTm90ZTogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgLS1jYXB0LWFkZD1TWVMtQURNSU5gfTwvaW5saW5lQ29kZT57YCBpcyByZXF1aXJlZCBmb3IgUERGIHJlbmRlcmluZy5gfTwvcD5cbiAgICA8L2Jsb2NrcXVvdGU+XG4gICAgPHA+e2BWZXJpZnkgdGhlIGRlcGxveW1lbnQgYnkgbmF2aWdhdGluZyB0byB5b3VyIHNlcnZlciBhZGRyZXNzIGluXG55b3VyIHByZWZlcnJlZCBicm93c2VyLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hcIlxuICAgICAgfX0+e2AxMjcuMC4wLjE6ODAwMFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntgTGljZW5zZWB9PC9oMj5cbiAgICA8cD57YE1JVGB9PC9wPlxuICAgIDxwPjxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YEZyZWUgU29mdHdhcmUsIEhlbGwgWWVhaCFgfTwvc3Ryb25nPjwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtZHgtanMvcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9