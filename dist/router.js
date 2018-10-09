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
/***/ (function(module, exports) {

eval("/*\r\n// hash mode: hashchange chrome bug\r\n// bug: go from not found to home\r\n*/\r\n\r\n\r\n  // Main class\r\n  module.exports = class Router {\r\n\r\n    constructor(routs) {\r\n\r\n      // set routs\r\n      this.routs = routs;\r\n      // set current URL\r\n      this.currentUrl = '/';\r\n      // set views folder\r\n      this.viewPath = '/views/';\r\n      // set page not found file\r\n      this.notFound = '404.html';\r\n      // get content for load pages\r\n      this.routerContent = document.getElementById('router-content');\r\n      // get all links\r\n      this.links = document.getElementsByClassName('router-link');\r\n    }\r\n\r\n    // Check URL mode\r\n    setUrlMode() {\r\n      return window.history ? 'history' : null;\r\n    }\r\n\r\n    // Register click event on links\r\n    getRouterLinks(registerNav) {\r\n      for (let x = 0; x < this.links.length; x++) {\r\n        this.links[x].addEventListener('click', registerNav, true);\r\n      }\r\n    }\r\n\r\n    setActiveLink(path) {\r\n      for (let x = 0; x < this.links.length; x++) {\r\n        this.links[x].classList.remove('active');\r\n      }\r\n      let link = document.querySelectorAll(`a[href='${path}']`);\r\n      path ? link[0].className += ' active' : null;\r\n    }\r\n\r\n    // Use links when history mode is available\r\n    linksHistory() {\r\n      let registerNav = e => {\r\n        e.preventDefault();\r\n        e.stopPropagation();\r\n\r\n        // check if url change\r\n        if (this.currentUrl !== e.target.pathname) {\r\n          history.pushState({page: 1}, \"title 1\", e.target.pathname);\r\n          this.fetchHtml(e.target.pathname);\r\n          this.setActiveLink(window.location.pathname);\r\n          this.currentUrl = e.target.pathname;\r\n        }\r\n      }\r\n      this.getRouterLinks(registerNav);\r\n    }\r\n\r\n    // Use links when hash mode is active\r\n    linksHash() {\r\n      let registerNav = e => {\r\n        e.preventDefault();\r\n        e.stopPropagation();\r\n\r\n        //check if url change\r\n        if (this.currentUrl !== e.target.pathname) {\r\n          window.location.href = '/#' + e.target.pathname;\r\n          this.fetchHtml(e.target.pathname);\r\n          this.currentUrl = e.target.pathname;\r\n        }\r\n      }\r\n        this.getRouterLinks(registerNav);\r\n    }\r\n\r\n    // Fetch file when url path is ok\r\n    fetchHtml(path) {\r\n      let resourceIndex = this.routs.map((el) => el.route).indexOf(path),\r\n          resource = this.routs[resourceIndex].resource;\r\n\r\n          // clear router-content HTML element\r\n          this.routerContent.innerHTML = '';\r\n          // fetch page\r\n          fetch(this.viewPath + resource).then((response) => {\r\n            return response.text().then((text) => {\r\n              this.routerContent.innerHTML = text;\r\n            });\r\n          });\r\n    }\r\n\r\n    // Fetch 404.html when url path is wrong\r\n    fetch404() {\r\n      var routerContent = document.getElementById('router-content');\r\n      routerContent.innerHTML = '';\r\n      fetch(this.viewPath + this.notFound).then((response) => {\r\n        return response.text().then((text) => {\r\n          routerContent.innerHTML = text;\r\n        });\r\n      });\r\n    }\r\n\r\n    // Main method to run history mode\r\n    runHistoryMode() {\r\n      this.linksHistory()\r\n      if (this.routs.map((el) => el.route).includes(window.location.pathname)) {\r\n        this.fetchHtml(window.location.pathname);\r\n        this.setActiveLink(window.location.pathname);\r\n      } else {\r\n        this.fetch404();\r\n      }\r\n    }\r\n\r\n    // Main method to run hash mode\r\n    runHashMode() {\r\n      this.linksHash();\r\n      window.location.hash = '/';\r\n      this.links[0].className += ' active';\r\n\r\n      window.addEventListener('hashchange', () => {\r\n        if (this.routs.map((el) => el.route).includes(window.location.hash.replace('#', ''))) {\r\n          this.fetchHtml(window.location.hash.replace('#', ''));\r\n          this.setActiveLink(window.location.hash.replace('#', ''));\r\n        } else {\r\n          this.fetch404();\r\n        }\r\n      }, false);\r\n    }\r\n\r\n    // Activate Router\r\n    navigate() {\r\n      \r\n        this.setUrlMode() === 'history' ? this.runHistoryMode() : this.runHashMode();\r\n\r\n    }\r\n\r\n  }\r\n\n\n//# sourceURL=webpack://Router/./src/js/router.js?");

/***/ })

/******/ });
});