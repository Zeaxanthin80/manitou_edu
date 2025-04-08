/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/CartContext.js":
/*!***********************************!*\
  !*** ./components/CartContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction CartProvider({ children }) {\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cartTotal, setCartTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Initialize cart from localStorage only on the client side\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartProvider.useEffect\": ()=>{\n            if (false) {}\n        }\n    }[\"CartProvider.useEffect\"], []);\n    // Update localStorage and total when cart changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartProvider.useEffect\": ()=>{\n            if (false) {}\n        }\n    }[\"CartProvider.useEffect\"], [\n        cart\n    ]);\n    const addToCart = (product)=>{\n        setCart((prevCart)=>{\n            const existingProduct = prevCart.find((item)=>item.id === product.id);\n            if (existingProduct) {\n                return prevCart.map((item)=>item.id === product.id ? {\n                        ...item,\n                        quantity: item.quantity + 1\n                    } : item);\n            }\n            return [\n                ...prevCart,\n                {\n                    ...product,\n                    quantity: 1\n                }\n            ];\n        });\n    };\n    const removeFromCart = (productId)=>{\n        setCart((prevCart)=>prevCart.filter((item)=>item.id !== productId));\n    };\n    const updateQuantity = (productId, quantity)=>{\n        if (quantity < 1) return;\n        setCart((prevCart)=>prevCart.map((item)=>item.id === productId ? {\n                    ...item,\n                    quantity\n                } : item));\n    };\n    const clearCart = ()=>{\n        setCart([]);\n        if (false) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            cartTotal,\n            addToCart,\n            removeFromCart,\n            updateQuantity,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/jose/manitou_edu/frontend/components/CartContext.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\nfunction useCart() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvQ2FydENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1RTtBQUV2RSxNQUFNSSw0QkFBY0osb0RBQWFBO0FBRTFCLFNBQVNLLGFBQWEsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUzQyw0REFBNEQ7SUFDNURDLGdEQUFTQTtrQ0FBQztZQUNSLElBQUksS0FBNkIsRUFBRSxFQUtsQztRQUNIO2lDQUFHLEVBQUU7SUFFTCxrREFBa0Q7SUFDbERBLGdEQUFTQTtrQ0FBQztZQUNSLElBQUksS0FBNkIsRUFBRSxFQU1sQztRQUNIO2lDQUFHO1FBQUNJO0tBQUs7SUFFVCxNQUFNbUIsWUFBWSxDQUFDQztRQUNqQm5CLFFBQVEsQ0FBQ29CO1lBQ1AsTUFBTUMsa0JBQWtCRCxTQUFTRSxJQUFJLENBQUMsQ0FBQ1QsT0FBU0EsS0FBS1UsRUFBRSxLQUFLSixRQUFRSSxFQUFFO1lBQ3RFLElBQUlGLGlCQUFpQjtnQkFDbkIsT0FBT0QsU0FBU0ksR0FBRyxDQUFDLENBQUNYLE9BQ25CQSxLQUFLVSxFQUFFLEtBQUtKLFFBQVFJLEVBQUUsR0FBRzt3QkFBRSxHQUFHVixJQUFJO3dCQUFFSSxVQUFVSixLQUFLSSxRQUFRLEdBQUc7b0JBQUUsSUFBSUo7WUFFeEU7WUFDQSxPQUFPO21CQUFJTztnQkFBVTtvQkFBRSxHQUFHRCxPQUFPO29CQUFFRixVQUFVO2dCQUFFO2FBQUU7UUFDbkQ7SUFDRjtJQUVBLE1BQU1RLGlCQUFpQixDQUFDQztRQUN0QjFCLFFBQVEsQ0FBQ29CLFdBQWFBLFNBQVNPLE1BQU0sQ0FBQyxDQUFDZCxPQUFTQSxLQUFLVSxFQUFFLEtBQUtHO0lBQzlEO0lBRUEsTUFBTUUsaUJBQWlCLENBQUNGLFdBQVdUO1FBQ2pDLElBQUlBLFdBQVcsR0FBRztRQUNsQmpCLFFBQVEsQ0FBQ29CLFdBQ1BBLFNBQVNJLEdBQUcsQ0FBQyxDQUFDWCxPQUNaQSxLQUFLVSxFQUFFLEtBQUtHLFlBQVk7b0JBQUUsR0FBR2IsSUFBSTtvQkFBRUk7Z0JBQVMsSUFBSUo7SUFHdEQ7SUFFQSxNQUFNZ0IsWUFBWTtRQUNoQjdCLFFBQVEsRUFBRTtRQUNWLElBQUksS0FBNkIsRUFBRSxFQUVsQztJQUNIO0lBRUEscUJBQ0UsOERBQUNKLFlBQVltQyxRQUFRO1FBQUNDLE9BQU87WUFDM0JqQztZQUNBRTtZQUNBaUI7WUFDQU87WUFDQUc7WUFDQUM7UUFDRjtrQkFDRy9COzs7Ozs7QUFHUDtBQUVPLFNBQVNtQztJQUNkLE9BQU94QyxpREFBVUEsQ0FBQ0c7QUFDcEIiLCJzb3VyY2VzIjpbIi9ob21lL2pvc2UvbWFuaXRvdV9lZHUvZnJvbnRlbmQvY29tcG9uZW50cy9DYXJ0Q29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhcnRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY2FydFRvdGFsLCBzZXRDYXJ0VG90YWxdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBjYXJ0IGZyb20gbG9jYWxTdG9yYWdlIG9ubHkgb24gdGhlIGNsaWVudCBzaWRlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBzdG9yZWRDYXJ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKTtcbiAgICAgIGlmIChzdG9yZWRDYXJ0KSB7XG4gICAgICAgIHNldENhcnQoSlNPTi5wYXJzZShzdG9yZWRDYXJ0KSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgLy8gVXBkYXRlIGxvY2FsU3RvcmFnZSBhbmQgdG90YWwgd2hlbiBjYXJ0IGNoYW5nZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xuICAgICAgY29uc3QgdG90YWwgPSBjYXJ0LnJlZHVjZSgoc3VtLCBpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBzdW0gKyAocGFyc2VGbG9hdChpdGVtLnByaWNlLnJlcGxhY2UoJyQnLCAnJykpICogaXRlbS5xdWFudGl0eSk7XG4gICAgICB9LCAwKTtcbiAgICAgIHNldENhcnRUb3RhbCh0b3RhbCk7XG4gICAgfVxuICB9LCBbY2FydF0pO1xuXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0KSA9PiB7XG4gICAgc2V0Q2FydCgocHJldkNhcnQpID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHByZXZDYXJ0LmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpO1xuICAgICAgaWYgKGV4aXN0aW5nUHJvZHVjdCkge1xuICAgICAgICByZXR1cm4gcHJldkNhcnQubWFwKChpdGVtKSA9PlxuICAgICAgICAgIGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9IDogaXRlbVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFsuLi5wcmV2Q2FydCwgeyAuLi5wcm9kdWN0LCBxdWFudGl0eTogMSB9XTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChwcm9kdWN0SWQpID0+IHtcbiAgICBzZXRDYXJ0KChwcmV2Q2FydCkgPT4gcHJldkNhcnQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBwcm9kdWN0SWQpKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVRdWFudGl0eSA9IChwcm9kdWN0SWQsIHF1YW50aXR5KSA9PiB7XG4gICAgaWYgKHF1YW50aXR5IDwgMSkgcmV0dXJuO1xuICAgIHNldENhcnQoKHByZXZDYXJ0KSA9PlxuICAgICAgcHJldkNhcnQubWFwKChpdGVtKSA9PlxuICAgICAgICBpdGVtLmlkID09PSBwcm9kdWN0SWQgPyB7IC4uLml0ZW0sIHF1YW50aXR5IH0gOiBpdGVtXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckNhcnQgPSAoKSA9PiB7XG4gICAgc2V0Q2FydChbXSk7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2FydCcpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgY2FydCxcbiAgICAgIGNhcnRUb3RhbCxcbiAgICAgIGFkZFRvQ2FydCxcbiAgICAgIHJlbW92ZUZyb21DYXJ0LFxuICAgICAgdXBkYXRlUXVhbnRpdHksXG4gICAgICBjbGVhckNhcnRcbiAgICB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FydENvbnRleHQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnQiLCJzZXRDYXJ0IiwiY2FydFRvdGFsIiwic2V0Q2FydFRvdGFsIiwic3RvcmVkQ2FydCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidG90YWwiLCJyZWR1Y2UiLCJzdW0iLCJpdGVtIiwicGFyc2VGbG9hdCIsInByaWNlIiwicmVwbGFjZSIsInF1YW50aXR5IiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInByZXZDYXJ0IiwiZXhpc3RpbmdQcm9kdWN0IiwiZmluZCIsImlkIiwibWFwIiwicmVtb3ZlRnJvbUNhcnQiLCJwcm9kdWN0SWQiLCJmaWx0ZXIiLCJ1cGRhdGVRdWFudGl0eSIsImNsZWFyQ2FydCIsInJlbW92ZUl0ZW0iLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ2FydCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/CartContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"(pages-dir-node)/./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CartContext */ \"(pages-dir-node)/./components/CartContext.js\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/jose/manitou_edu/frontend/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jose/manitou_edu/frontend/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QjtBQUMyQjtBQUUxQyxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDSCxpRUFBWUE7a0JBQ1gsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIi9ob21lL2pvc2UvbWFuaXRvdV9lZHUvZnJvbnRlbmQvcGFnZXMvX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJztcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FydENvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENhcnRQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NhcnRQcm92aWRlcj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiQ2FydFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.js"));
module.exports = __webpack_exports__;

})();