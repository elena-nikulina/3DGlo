/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const timer = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");//one\r\nconst menu = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\r\nconst modal = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\r\n\r\ntimer('23 april 2022');//one\r\nmenu();\r\nmodal();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((module) => {

eval("const menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu1 = document.querySelector('menu');\r\n    const closeBtn = menu1.querySelector('.close-btn');\r\n    const menuItems = menu1.querySelectorAll('ul>li>a');\r\n\r\n    const handleMenu = () => {\r\n        menu1.classList.toggle('active-menu');\r\n    }\r\n\r\n    menuBtn.addEventListener('click', handleMenu);\r\n\r\n    closeBtn.addEventListener('click', handleMenu);\r\n\r\n    menuItems.forEach(menuItem => {\r\n        menuItem.addEventListener('click', handleMenu);\r\n    });\r\n}\r\n\r\nmodule.exports = menu;\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((module) => {

eval("const modal = () => {\r\n    const modal1 = document.querySelector('.popup');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const closeBtn = modal1.querySelector('.popup-close');\r\n    const width = document.documentElement.clientWidth;\r\n\r\n    let count = 0;\r\n    console.log(closeBtn);\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal1.style.opacity = 0;\r\n            modal1.style.display = 'block';\r\n            \r\n            const transperentModal = () => {\r\n                count = count + 0.01;\r\n                console.log(count);\r\n\r\n                if (width < 768 + 'px') {\r\n                    clearInterval(idAnimate);\r\n                }\r\n        \r\n                if (count < 1) {\r\n                    modal1.style.opacity = count;\r\n                } else {\r\n                    clearInterval(idAnimate);\r\n                }\r\n                \r\n        \r\n            }\r\n        \r\n            idAnimate = setInterval(transperentModal, 10);\r\n        });\r\n    });\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        modal1.style.display = 'none';\r\n    });\r\n\r\n    \r\n}\r\n\r\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((module) => {

eval("const timer = (deadline) => {//oneModule\r\n    let timer1;\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timereconds = document.getElementById('timer-seconds');\r\n\r\n    const getTimeRimaining = () => {\r\n\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow)/1000;\r\n\r\n        let hours = Math.floor(timeRemaining / 60 / 60);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { timeRemaining, hours, minutes, seconds }\r\n    }\r\n\r\n    let updateClock = () => {\r\n        let getTime = getTimeRimaining();\r\n\r\n        /*timerHours.textContent = getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes;\r\n        timereconds.textContent = getTime.seconds;*/\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            //setTimeout(updateClock, 1000);\r\n            timerHours.textContent = (getTime.hours < 10 ? \"0\" : \"\") + getTime.hours;\r\n            timerMinutes.textContent = (getTime.minutes < 10 ? \"0\" : \"\") + getTime.minutes;\r\n            timereconds.textContent = (getTime.seconds < 10 ? \"0\" : \"\") + getTime.seconds;\r\n        } else {\r\n            clearInterval(timer1);//window.clearInterval(timer1);\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timereconds.textContent = '00';\r\n        }\r\n    }\r\n    //updateClock();\r\n    timer1 = setInterval(updateClock, 1000);\r\n\r\n}\r\n\r\nmodule.exports = timer;//oneModule\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;