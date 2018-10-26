(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Router"] = factory();
	else
		root["Router"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/router.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/router.js":
/*!**************************!*\
  !*** ./src/js/router.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\r\n// hash mode: hashchange chrome bug\r\n// bug: go from not found to home\r\n*/\n // Main class\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nmodule.exports =\n/*#__PURE__*/\nfunction () {\n  function Router(routs) {\n    _classCallCheck(this, Router);\n\n    // set routs\n    this.routs = routs; // set current URL\n\n    this.currentUrl = '/'; // set views folder\n\n    this.viewPath = '/views/'; // set page not found file\n\n    this.notFound = '404.html'; // get content for load pages\n\n    this.routerContent = document.getElementById('router-content'); // get all links\n\n    this.links = document.getElementsByClassName('router-link');\n  } // Check URL mode\n\n\n  _createClass(Router, [{\n    key: \"setUrlMode\",\n    value: function setUrlMode() {\n      return window.history ? 'history' : null;\n    } // Register click event on links\n\n  }, {\n    key: \"getRouterLinks\",\n    value: function getRouterLinks(registerNav) {\n      for (var x = 0; x < this.links.length; x++) {\n        this.links[x].addEventListener('click', registerNav, true);\n      }\n    }\n  }, {\n    key: \"setActiveLink\",\n    value: function setActiveLink(path) {\n      for (var x = 0; x < this.links.length; x++) {\n        this.links[x].classList.remove('active');\n      }\n\n      var link = document.querySelectorAll(\"a[href='\".concat(path, \"']\"));\n      path ? link[0].className += ' active' : null;\n    } // Use links when history mode is available\n\n  }, {\n    key: \"linksHistory\",\n    value: function linksHistory() {\n      var _this = this;\n\n      var registerNav = function registerNav(e) {\n        e.preventDefault();\n        e.stopPropagation(); // check if url change\n\n        if (_this.currentUrl !== e.target.pathname) {\n          history.pushState({\n            page: 1\n          }, 'title 1', e.target.pathname);\n\n          _this.fetchHtml(e.target.pathname);\n\n          _this.setActiveLink(window.location.pathname);\n\n          _this.currentUrl = e.target.pathname;\n        }\n      };\n\n      this.getRouterLinks(registerNav);\n    } // Use links when hash mode is active\n\n  }, {\n    key: \"linksHash\",\n    value: function linksHash() {\n      var _this2 = this;\n\n      var registerNav = function registerNav(e) {\n        e.preventDefault();\n        e.stopPropagation(); //check if url change\n\n        if (_this2.currentUrl !== e.target.pathname) {\n          window.location.href = '/#' + e.target.pathname;\n\n          _this2.fetchHtml(e.target.pathname);\n\n          _this2.currentUrl = e.target.pathname;\n        }\n      };\n\n      this.getRouterLinks(registerNav);\n    }\n  }, {\n    key: \"loadScripts\",\n    value: function loadScripts(resourceIndex) {\n      this.routs[resourceIndex].code();\n    } // Fetch file when url path is ok\n\n  }, {\n    key: \"fetchHtml\",\n    value: function fetchHtml(path) {\n      var _this3 = this;\n\n      // TODO get this as Router method\n      var resourceIndex = this.routs.map(function (el) {\n        return el.route;\n      }).indexOf(path),\n          resource = this.routs[resourceIndex].resource; // clear router-content HTML element\n\n      this.routerContent.innerHTML = ''; // fetch page\n\n      fetch(this.viewPath + resource).then(function (response) {\n        return response.text().then(function (text) {\n          _this3.routerContent.innerHTML = text;\n        }).then(function () {\n          _this3.loadScripts(resourceIndex);\n        });\n      });\n    } // Fetch 404.html when url path is wrong\n\n  }, {\n    key: \"fetch404\",\n    value: function fetch404() {\n      var routerContent = document.getElementById('router-content');\n      routerContent.innerHTML = '';\n      fetch(this.viewPath + this.notFound).then(function (response) {\n        return response.text().then(function (text) {\n          routerContent.innerHTML = text;\n        });\n      });\n    } // Check if route exist\n\n  }, {\n    key: \"checkRouteExist\",\n    value: function checkRouteExist(path) {\n      return this.routs.map(function (el) {\n        return el.route;\n      }).includes(path);\n    } // Main method to run history mode\n\n  }, {\n    key: \"runHistoryMode\",\n    value: function runHistoryMode() {\n      this.linksHistory();\n\n      if (this.checkRouteExist(window.location.pathname)) {\n        this.fetchHtml(window.location.pathname);\n        this.setActiveLink(window.location.pathname);\n      } else {\n        this.fetch404();\n      }\n    } // Main method to run hash mode\n\n  }, {\n    key: \"runHashMode\",\n    value: function runHashMode() {\n      var _this4 = this;\n\n      this.linksHash();\n      window.location.hash = '/';\n      this.links[0].className += ' active';\n      window.addEventListener('hashchange', function () {\n        if (_this4.routs.map(function (el) {\n          return el.route;\n        }).includes(window.location.hash.replace('#', ''))) {\n          _this4.fetchHtml(window.location.hash.replace('#', ''));\n\n          _this4.setActiveLink(window.location.hash.replace('#', ''));\n        } else {\n          _this4.fetch404();\n        }\n      }, false);\n    } // Activate Router\n\n  }, {\n    key: \"navigate\",\n    value: function navigate() {\n      this.setUrlMode() === 'history' ? this.runHistoryMode() : this.runHashMode();\n    }\n  }]);\n\n  return Router;\n}();\n\n//# sourceURL=webpack://Router/./src/js/router.js?");

/***/ })

/******/ });
});