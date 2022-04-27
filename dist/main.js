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

eval("const timer = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");//one\r\nconst menu = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\r\nconst modal = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\r\nconst validate = __webpack_require__(/*! ./modules/validate */ \"./modules/validate.js\");\r\n\r\ntimer('23 april 2022');//one\r\nmenu();\r\nmodal();\r\nvalidate();\n\n//# sourceURL=webpack:///./index.js?");

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

eval("const modal = () => {\r\n    const modal1 = document.querySelector('.popup');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const closeBtn = modal1.querySelector('.popup-close');\r\n    const width = document.documentElement.clientWidth;\r\n\r\n    let  idAnimate;\r\n    let count = 0;\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            modal1.style.opacity = 0;\r\n            modal1.style.display = 'block';\r\n            \r\n            const transperentModal = () => {\r\n                \r\n\r\n\r\n                if (width > 768) {\r\n\r\n                    myAnimate();\r\n                \r\n                } else {\r\n                    modal1.style.display = 'block';\r\n                    modal1.style.opacity = 1;\r\n                }\r\n                \r\n        \r\n            }\r\n        \r\n            idAnimate = setInterval(transperentModal, 10);\r\n        });\r\n    });\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        modal1.style.display = '';\r\n        modal1.style.opacity = 0;\r\n        count = 0;\r\n    });\r\n\r\n    function myAnimate() {\r\n        count = count + 0.01;\r\n        if (count < 1) {\r\n            modal1.style.opacity = count;\r\n        } else {\r\n            clearInterval(idAnimate);\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./modules/modal.js?");

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
/***/ ((module) => {

eval("const validate = () => {\r\n\r\n    let calcSquare = document.querySelector('.calc-square');\r\n    let calcCount = document.querySelector('.calc-count');\r\n    let calcDay = document.querySelector('.calc-day');\r\n    let form1 = document.querySelector('#form1');\r\n    let form2 = document.querySelector('#form2');\r\n    let form3 = document.querySelector('#form3');\r\n    let form1Name = document.querySelector('#form1-name');\r\n    let form1Email = document.querySelector('#form1-email');\r\n    let form1Phone = document.querySelector('#form1-phone');\r\n    let form2Email = document.querySelector('#form2-email');\r\n    let form2Message = document.querySelector('#form2-message');\r\n    let form3Phone = document.querySelector('#form3-phone');\r\n    let form3Email = document.querySelector('#form3-email');\r\n\r\n    let forms = document.querySelectorAll('form');\r\n    //console.log(forms);\r\n\r\n    forms.forEach((form) => {\r\n        let inputs = form.querySelectorAll('input');\r\n        //console.log(inputs);\r\n        for(let input of inputs) {\r\n            if (input[type=\"text\"]) {\r\n                console.log(input);\r\n            }\r\n        }\r\n    });\r\n\r\n    calcSquare.addEventListener('input', (e) => {\r\n\r\n        e.target.value = e.target.value.replace(/[^\\d+]/g, \"\");\r\n\r\n    });\r\n    calcCount.addEventListener('input', (e) => {\r\n\r\n        e.target.value = e.target.value.replace(/[^\\d+]/g, \"\");\r\n\r\n    });\r\n\r\n    calcDay.addEventListener('input', (e) => {\r\n\r\n        e.target.value = e.target.value.replace(/[^\\d+]/g, \"\");\r\n\r\n    });\r\n\r\n    \r\n\r\n    /*form1.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        let isError = false;\r\n   \r\n        if (/[a-zA-Z0-9+\\_\\@\\-\\!\\*\\~\\'\\.]+/g.test(form1Email.value) && form1Email.value !== \"\") {\r\n            alert('В инпуте только латиница, цифры и спецсимволы');\r\n        } else {\r\n            isError = true;\r\n        }\r\n\r\n        if (/[\\d\\-()]/g.test(form1Phone.value) && form1Phone.value !== \"\") {\r\n            alert('В инпуте только цифры, дефис и скобки');\r\n        } else {\r\n            isError = true;\r\n        }\r\n\r\n        if (!isError) {\r\n            alert(\"Данные отправлены!\");\r\n        }\r\n        \r\n    });\r\n\r\n    form2.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        let isError2 = false;\r\n\r\n        if (/[a-zA-Z0-9+\\_\\@\\-\\!\\*\\~\\'\\.]+/g.test(form2Email.value) && form2Email.value !== \"\") {\r\n            alert('В инпуте только латиница, цифры и спецсимволы');\r\n        } else {\r\n            isError2 = true;\r\n        }\r\n\r\n        if (/[\\d\\-()]/g.test(form2Phone.value) && form2Phone.value !== \"\") {\r\n            alert('В инпуте только цифры, дефис и скобки');\r\n        } else {\r\n            isError2 = true;\r\n        }\r\n\r\n        if (/[а-яА-Я]+\\-\\s/g.test(form2Message.value)) {\r\n            alert('В инпуте только кириллица, дефис и пробел');\r\n        } else {\r\n            isError2 = true;\r\n        }\r\n\r\n        if (!isError2) {\r\n            alert(\"Данные отправлены!\");\r\n        }\r\n        \r\n    });\r\n\r\n    form3.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        let isError3 = false;\r\n\r\n        if (/[\\d\\-()]/g.test(form3Phone.value) && form3Phone.value !== \"\") {\r\n            alert('В инпуте только цифры, дефис и скобки');\r\n        } else {\r\n            isError3 = true;\r\n        }\r\n\r\n        if (/[a-zA-Z0-9+\\_\\@\\-\\!\\*\\~\\'\\.]+/g.test(form3Email.value) && form3Email.value !== \"\") {\r\n            alert('В инпуте только латиница, цифры и спецсимволы');\r\n        } else {\r\n            isError3 = true;\r\n        }\r\n\r\n        if (!isError3) {\r\n            alert(\"Данные отправлены!\");\r\n        }\r\n\r\n\r\n    });*/\r\n};\r\n\r\nmodule.exports = validate;\r\n\n\n//# sourceURL=webpack:///./modules/validate.js?");

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