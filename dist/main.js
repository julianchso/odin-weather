/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apiFunctions.js":
/*!*****************************!*\
  !*** ./src/apiFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchLocation: () => (/* binding */ searchLocation)\n/* harmony export */ });\n/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners.js */ \"./src/listeners.js\");\n\r\n\r\nconst searchLocation = async function () {\r\n  const location = document.querySelector('#location');\r\n  const locationValue = location.value;\r\n  const apiKey = 'a1d41c729faca0f723357cd6979c2c45';\r\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationValue}&APPID=${apiKey}&units=metric`;\r\n\r\n  const response = await fetch(url);\r\n  // console.log(response);\r\n\r\n  const data = response.json();\r\n\r\n  console.log(data);\r\n};\r\n\r\n\r\n\r\n// http://api.openweathermap.org/data/2.5/weather?q=London,UK&APPID=a1d41c729faca0f723357cd6979c2c45\r\n// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a1d41c729faca0f723357cd6979c2c45\r\n\n\n//# sourceURL=webpack://odin-weather/./src/apiFunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/listeners.js\");\n/* harmony import */ var _apiFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiFunctions */ \"./src/apiFunctions.js\");\n\r\n\r\n\r\n(0,_listeners__WEBPACK_IMPORTED_MODULE_0__.eventListeners)();\r\n\n\n//# sourceURL=webpack://odin-weather/./src/index.js?");

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   eventListeners: () => (/* binding */ eventListeners)\n/* harmony export */ });\n/* harmony import */ var _apiFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiFunctions */ \"./src/apiFunctions.js\");\n\r\n\r\nconst eventListeners = function () {\r\n  const search__btn = document.querySelector('.btnSearch');\r\n\r\n  search__btn.addEventListener('click', _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.searchLocation);\r\n  search__btn.addEventListener('click', function () {\r\n    console.log('click');\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-weather/./src/listeners.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;