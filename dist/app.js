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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Hearth.js":
/*!***********************!*\
  !*** ./src/Hearth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hearth; });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/Vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Hearth = /*#__PURE__*/function () {
  function Hearth(animation) {
    _classCallCheck(this, Hearth);

    // Récupération de se qui bient de l'app.js
    this.animation = animation;
    this.canvas = this.animation.canvasElt;
    this.ctx = this.animation.ctx;
    this.sun = this.animation.sun; // Propoiétées de Sun

    this.color = "lightblue";
    var x = this.sun.location.y + 270;
    var y = this.sun.location.y;
    this.location = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
    this.radius = 20;
    this.speed = 5;
    this.elips = 1.5;
    this.angle = 90;
  }

  _createClass(Hearth, [{
    key: "draw",
    value: function draw() {
      // Dessin de sun
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.arc(this.location.x, this.location.y, this.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      var x = this.speed * Math.cos(this.angle * (Math.PI / 180));
      var y = this.speed * Math.sin(this.angle * (Math.PI / 180));
      var newCoo = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
      this.location.add(newCoo);
      this.angle = this.angle + this.elips; // Modification de sun sur la sutée         

      this.draw();
    }
  }]);

  return Hearth;
}();



/***/ }),

/***/ "./src/Moon.js":
/*!*********************!*\
  !*** ./src/Moon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Moon; });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/Vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Moon = /*#__PURE__*/function () {
  function Moon(animation) {
    _classCallCheck(this, Moon);

    // Récupération de se qui bient de l'app.js
    this.animation = animation;
    this.canvas = this.animation.canvasElt;
    this.ctx = this.animation.ctx;
    this.h = this.animation.hearth; // Propoiétées de Sun

    this.color = "#fff";
    var x = this.h.location.x;
    var y = this.h.location.y;
    this.location = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
    this.radius = 5;
    this.speed = 60;
    this.elips = 3.5;
    this.angle = 90;
  }

  _createClass(Moon, [{
    key: "draw",
    value: function draw() {
      // Dessin de sun
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.arc(this.location.x, this.location.y, this.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      this.location.x = this.h.location.x;
      this.location.y = this.h.location.y;
      var x = this.speed * Math.cos(this.angle * (Math.PI / 180));
      var y = this.speed * Math.sin(this.angle * (Math.PI / 180));
      var newCoo = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
      this.location.add(newCoo);
      this.angle = this.angle + this.elips; // Modification de sun sur la sutée         

      this.draw();
    }
  }]);

  return Moon;
}();



/***/ }),

/***/ "./src/Sun.js":
/*!********************!*\
  !*** ./src/Sun.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sun; });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/Vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Sun = /*#__PURE__*/function () {
  function Sun(animation) {
    _classCallCheck(this, Sun);

    // Récupération de se qui bient de l'app.js
    this.animation = animation;
    this.canvas = this.animation.canvasElt;
    this.ctx = this.animation.ctx; // Propoiétées de Sun

    this.color = "yellow";
    var x = this.canvas.width / 2;
    var y = this.canvas.height / 2;
    this.location = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
    this.radius = 40;
  }

  _createClass(Sun, [{
    key: "draw",
    value: function draw() {
      // Dessin de sun
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.arc(this.location.x, this.location.y, this.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      // Modification de sun sur la sutée         
      this.draw();
    }
  }]);

  return Sun;
}();



/***/ }),

/***/ "./src/Vector.js":
/*!***********************!*\
  !*** ./src/Vector.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector = /*#__PURE__*/function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "add",
    value: function add(vector) {
      this.x += vector.x;
      this.y += vector.y;
    }
  }]);

  return Vector;
}();



/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sun */ "./src/Sun.js");
/* harmony import */ var _Hearth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hearth */ "./src/Hearth.js");
/* harmony import */ var _Moon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Moon */ "./src/Moon.js");
// AJouter les classes 
 //import Sunhearth  from "./Sunhearth";



var animation = {
  canvasElt: undefined,
  ctx: undefined,
  init: function init() {
    this.canvasElt = document.createElement("canvas");
    document.body.insertAdjacentElement("beforeend", this.canvasElt);
    this.canvasElt.height = 600;
    this.canvasElt.width = 800;
    this.ctx = this.canvasElt.getContext('2d'); // Nouvelles classes à ajouter 

    this.sun = new _Sun__WEBPACK_IMPORTED_MODULE_0__["default"](this); //this.sunhearth = new Sunhearth(this);

    this.hearth = new _Hearth__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.moon = new _Moon__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.animate();
  },
  draw: function draw() {
    // Faire les updates
    this.sun.update(); //this.sunhearth.update(); 

    this.hearth.update();
    this.moon.update();
  },
  animate: function animate() {
    var _this = this;

    this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
    this.draw();
    window.requestAnimationFrame(function () {
      _this.animate();
    });
  }
};
animation.init();

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/enid/Desktop/skye/src/app.js */"./src/app.js");
module.exports = __webpack_require__(/*! /Users/enid/Desktop/skye/src/app.scss */"./src/app.scss");


/***/ })

/******/ });