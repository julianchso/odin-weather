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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiCall: () => (/* binding */ apiCall),\n/* harmony export */   getLocationName: () => (/* binding */ getLocationName)\n/* harmony export */ });\n/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners.js */ \"./src/listeners.js\");\n\r\n\r\nconst apiCall = async function () {\r\n  const location = document.querySelector('#location');\r\n  const locationValue = location.value;\r\n  const apiKey = 'a1d41c729faca0f723357cd6979c2c45';\r\n  const noOfCalls = 1;\r\n  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${locationValue}&APPID=${apiKey}&cnt=${noOfCalls}`;\r\n\r\n  try {\r\n    const response = await fetch(url);\r\n    const weatherData = await response.json();\r\n    console.log(weatherData);\r\n    return weatherData;\r\n  } catch (err) {\r\n    console.log(err);\r\n  }\r\n};\r\n\r\nconst getLocationName = async function () {\r\n  let weatherData = await apiCall();\r\n  let locationName = weatherData['city']['name'];\r\n  console.log(locationName);\r\n  return locationName;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-weather/./src/apiFunctions.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   eventListeners: () => (/* binding */ eventListeners)\n/* harmony export */ });\n/* harmony import */ var _apiFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiFunctions */ \"./src/apiFunctions.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\r\n\r\n\r\nconst eventListeners = function () {\r\n  const search__btn = document.querySelector('.btnSearch');\r\n\r\n  search__btn.addEventListener('click', _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.apiCall);\r\n  search__btn.addEventListener('click', _apiFunctions__WEBPACK_IMPORTED_MODULE_0__.getLocationName);\r\n  search__btn.addEventListener('click', _render__WEBPACK_IMPORTED_MODULE_1__.renderLocation);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-weather/./src/listeners.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLocation: () => (/* binding */ renderLocation)\n/* harmony export */ });\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/listeners.js\");\n/* harmony import */ var _apiFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiFunctions */ \"./src/apiFunctions.js\");\n\r\n\r\n\r\nconst renderLocation = async function () {\r\n  const mainInfo = document.querySelector('.mainInfo');\r\n  let locationName = await (0,_apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getLocationName)();\r\n\r\n  let locationTitle = document.createElement('h2');\r\n  locationTitle.textContent = locationName;\r\n  mainInfo.append(locationTitle);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-weather/./src/render.js?");

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