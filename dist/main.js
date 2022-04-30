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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/validate */ \"./modules/validate.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\nconst timer = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");//one\r\n//const menu = require('./modules/menu');\r\n//const modal = require('./modules/modal');\r\n//const validate = require('./modules/validate');\r\n\r\n\r\n\r\n\r\n\r\n\r\ntimer('23 april 2022');//one\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_validate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu1 = document.querySelector('menu');\r\n\r\n    const handleMenu = () => {\r\n        menu1.classList.toggle('active-menu');\r\n    }\r\n\r\n\r\n    const toggleMenu = () => {\r\n        menu1.addEventListener('click', (e) => {\r\n            \r\n            if (e.target.classList.contains('close-btn') || e.target.closest('a')) {\r\n                \r\n                handleMenu();\r\n            }\r\n        });\r\n        menuBtn.addEventListener('click', handleMenu);\r\n    }\r\n\r\n    toggleMenu();\r\n}\r\n\r\n//module.exports = menu;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal1 = document.querySelector('.popup');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const width = document.documentElement.clientWidth;\r\n\r\n    let  idAnimate;\r\n    let count = 0;\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal1.style.opacity = 0;\r\n            modal1.style.display = 'block';\r\n            \r\n            const transperentModal = () => {\r\n                \r\n\r\n\r\n                if (width > 768) {\r\n\r\n                    myAnimate();\r\n                \r\n                } else {\r\n                    modal1.style.display = 'block';\r\n                    modal1.style.opacity = 1;\r\n                }\r\n                \r\n        \r\n            }\r\n        \r\n            idAnimate = setInterval(transperentModal, 10);\r\n        });\r\n    });\r\n\r\n    function myAnimate() {\r\n        count = count + 0.01;\r\n        if (count < 1) {\r\n            modal1.style.opacity = count;\r\n        } else {\r\n            clearInterval(idAnimate);\r\n        }\r\n    }\r\n\r\n    modal1.addEventListener('click', (e) => {\r\n\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            //console.log('мимо');\r\n            modal1.style.display = '';\r\n            modal1.style.opacity = 0;\r\n            count = 0;\r\n        }\r\n    });\r\n}\r\n\r\n//module.exports = modal;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n\r\n    const sliderBlock = document.querySelector('.portfolio-content');\r\n    const slides = document.querySelectorAll('.portfolio-item');\r\n    const dots = document.querySelectorAll('.dot');\r\n\r\n    let currentSlide = 0;\r\n    let interval;\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);\r\n    }\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass);\r\n    }\r\n\r\n    const autoSlide = () => {\r\n\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n        prevSlide(dots, currentSlide, 'dot-active');\r\n        currentSlide++;\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n        nextSlide(dots, currentSlide, 'dot-active');\r\n    }\r\n\r\n    const startSlide = () => {\r\n        interval = setInterval(autoSlide, 2000);\r\n    }\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    }\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n            return;\r\n        }\r\n\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n        prevSlide(dots, currentSlide, 'dot-active');\r\n\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++;\r\n\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--;\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index;\r\n                }\r\n\r\n            });\r\n        }\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1;\r\n            \r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n        nextSlide(dots, currentSlide, 'dot-active');\r\n    });\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        console.log(e.target);\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            console.log(e.target);\r\n        }\r\n    }, true);\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        console.log(e.target);\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            console.log(e.target);\r\n        }\r\n    }, true);\r\n\r\n    startSlide();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        //console.log(e.target.closest('.service-header-tab'));\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n            //console.log(tabBtn);\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabContent[index].classList.add('d-none');\r\n                }\r\n            });\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((module) => {

eval("const timer = (deadline) => {//oneModule\r\n    let timer1;\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timereconds = document.getElementById('timer-seconds');\r\n\r\n    const getTimeRimaining = () => {\r\n\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow)/1000;\r\n\r\n        let hours = Math.floor(timeRemaining / 60 / 60);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { timeRemaining, hours, minutes, seconds }\r\n    }\r\n\r\n    let updateClock = () => {\r\n        let getTime = getTimeRimaining();\r\n\r\n        /*timerHours.textContent = getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes;\r\n        timereconds.textContent = getTime.seconds;*/\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            //setTimeout(updateClock, 1000);\r\n            timerHours.textContent = (getTime.hours < 10 ? \"0\" : \"\") + getTime.hours;\r\n            timerMinutes.textContent = (getTime.minutes < 10 ? \"0\" : \"\") + getTime.minutes;\r\n            timereconds.textContent = (getTime.seconds < 10 ? \"0\" : \"\") + getTime.seconds;\r\n        } else {\r\n            clearInterval(timer1);//window.clearInterval(timer1);\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timereconds.textContent = '00';\r\n        }\r\n    }\r\n    //updateClock();\r\n    timer1 = setInterval(updateClock, 1000);\r\n\r\n}\r\n\r\nmodule.exports = timer;//oneModule\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validate.js":
/*!*****************************!*\
  !*** ./modules/validate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = () => {\r\n\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n    \r\n    \r\n\r\n    const forms = document.querySelectorAll('form');\r\n\r\n    forms.forEach((form) => {\r\n        \r\n        const inputText = form.querySelector('input[type=\"text\"]');\r\n        const inputEmail = form.querySelector('input[type=\"email\"]');\r\n        const inputPhone = form.querySelector('input[type=\"tel\"]');\r\n\r\n        if (form.classList.contains('footer-form')) {\r\n            const inputMessage = form.querySelector('#form2-message');\r\n            inputMessage.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/[^а-яА-Я+\\-\\s]+/g, \"\");\r\n            });\r\n        }\r\n\r\n            inputText.addEventListener('input', (e) => {\r\n\r\n                e.target.value = e.target.value.replace(/[^а-яА-Я+\\-\\s]+/g, \"\");\r\n                \r\n            });\r\n\r\n            inputEmail.addEventListener('input', (e) => {\r\n                e.target.value = e.target.value.replace(/[^a-zA-Z0-9+\\_\\@\\-\\!\\*\\~\\'\\.]+/g, \"\");\r\n            });        \r\n\r\n            inputPhone.addEventListener('input', (e) => {\r\n\r\n                e.target.value = e.target.value.replace(/[^\\d\\-()]/g, \"\");\r\n                \r\n            });\r\n        //}\r\n        \r\n    });\r\n\r\n    calcSquare.addEventListener('input', (e) => {\r\n\r\n        e.target.value = e.target.value.replace(/[^\\d+]/g, \"\");\r\n\r\n    });\r\n    calcCount.addEventListener('input', (e) => {\r\n\r\n        e.target.value = e.target.value.replace(/[^\\d+]/g, \"\");\r\n\r\n    });\r\n\r\n    calcDay.addEventListener('input', (e) => {\r\n\r\n        e.target.value = e.target.value.replace(/[^\\d+]/g, \"\");\r\n\r\n    });\r\n\r\n};\r\n\r\n//module.exports = validate;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\r\n\n\n//# sourceURL=webpack:///./modules/validate.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;