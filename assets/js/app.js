/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("$(window).on('scroll', function () {\r\n   var scroll = $(window).scrollTop();\r\n   if (scroll < 400) {\r\n      $(\".header\").removeClass(\"fixed\");\r\n   } else {\r\n      $(\".header\").addClass(\"fixed\");\r\n   }\r\n\r\n\r\n});\r\n\r\n$('#scroll-down').on(\"click\", () => {\r\n   $('body,html').animate({\r\n     scrollTop: 950\r\n   }, 100);\r\n   return false;\r\n});\r\n\r\n(() => {\r\n   \"use strict\";\r\n   const e = document.querySelector(\".burger\"),\r\n      t = [e, document.querySelector(\".nav\")];\r\n   e.addEventListener(\"click\", (() => {\r\n      t.forEach((e => {\r\n         e.classList.toggle(\"active\")\r\n      }));\r\n      for (let e = 0; e < t.length; e++) t[e].classList.contains(\"active\") ? (document.body.style.overflow = \"hidden\", document.documentElement.style.scrollBehavior = \"auto\") : (document.body.style.overflow = \"auto\", document.documentElement.style.scrollBehavior = \"smooth\")\r\n   }));\r\n   document.querySelectorAll(\".nav__link\").forEach((e => {\r\n      e.addEventListener(\"click\", (e => {\r\n         t.forEach((e => {\r\n            e.classList.remove(\"active\")\r\n         })), document.body.style.overflow = \"auto\", setTimeout((() => {\r\n            document.documentElement.style.scrollBehavior = \"smooth\"\r\n         }), 1e3)\r\n      }))\r\n   }));\r\n\r\n   // SCROLL TO TOP\r\n\r\n   const btn = document.getElementById(\"btn-top\");\r\n\r\n   window.onscroll = function() {scrollFunction()};\r\n\r\n   function scrollFunction() {\r\n      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {\r\n         btn.style.display = \"block\";\r\n      } else {\r\n         btn.style.display = \"none\";\r\n      }\r\n   }\r\n   scrollFunction();\r\n\r\n   btn.addEventListener('click', function () {\r\n      document.documentElement.scrollTop = 0; //chrome\r\n      document.body.scrollTop = 0; //safari\r\n   })\r\n\r\n})();\n\n//# sourceURL=webpack://max/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;