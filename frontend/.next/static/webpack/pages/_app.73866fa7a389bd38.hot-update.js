"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/reducers/addDeposit/index.js":
/*!********************************************!*\
  !*** ./store/reducers/addDeposit/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"depositReducer\": function() { return /* binding */ depositReducer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ \"./store/reducers/addDeposit/type.js\");\n\n\n\nvar initialState = {\n    deposit: 0,\n    depositIsLoading: false,\n    currentDepositValue: 0\n};\nvar depositReducer = function() {\n    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case _type__WEBPACK_IMPORTED_MODULE_0__.depositActions.SET_NEW_DEPOSIT:\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state), {\n                deposit: action.payload\n            });\n        case _type__WEBPACK_IMPORTED_MODULE_0__.depositActions.SET_DEPOSIT_IS_LOADING:\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state), {\n                depositIsLoading: action.payload\n            });\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9hZGREZXBvc2l0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFFdkMsSUFBTUMsWUFBWSxHQUFHO0lBQ2pCQyxPQUFPLEVBQUUsQ0FBQztJQUNWQyxnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCQyxtQkFBbUIsRUFBRSxDQUFDO0NBRXpCO0FBQ00sSUFBT0MsY0FBYyxHQUFHLFdBR3hCO1FBRkhDLEtBQUssb0VBQUdMLFlBQVksRUFDcEJNLE1BQU07SUFFTixPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFDZixLQUFLUixpRUFBOEI7WUFDL0IsT0FBTyx3S0FBSU0sS0FBSztnQkFBRUosT0FBTyxFQUFFSyxNQUFNLENBQUNHLE9BQU87Y0FBQztRQUM5QyxLQUFLVix3RUFBcUM7WUFDdEMsT0FBTyx3S0FBSU0sS0FBSztnQkFBRUgsZ0JBQWdCLEVBQUVJLE1BQU0sQ0FBQ0csT0FBTztjQUFDO1FBQ3ZEO1lBQ0ksT0FBT0osS0FBSyxDQUFDO0tBQ3BCO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvYWRkRGVwb3NpdC9pbmRleC5qcz8wODk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlcG9zaXRBY3Rpb25zIH0gZnJvbSBcIi4vdHlwZVwiXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBkZXBvc2l0OiAwLFxuICAgIGRlcG9zaXRJc0xvYWRpbmc6IGZhbHNlLFxuICAgIGN1cnJlbnREZXBvc2l0VmFsdWU6IDAsXG4gICAgXG59XG5leHBvcnQgY29uc3QgIGRlcG9zaXRSZWR1Y2VyID0gKFxuICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICAgIGFjdGlvbixcbiAgKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGRlcG9zaXRBY3Rpb25zLlNFVF9ORVdfREVQT1NJVDpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlcG9zaXQ6IGFjdGlvbi5wYXlsb2FkfVxuICAgICAgICBjYXNlIGRlcG9zaXRBY3Rpb25zLlNFVF9ERVBPU0lUX0lTX0xPQURJTkc6XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZXBvc2l0SXNMb2FkaW5nOiBhY3Rpb24ucGF5bG9hZH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiZGVwb3NpdEFjdGlvbnMiLCJpbml0aWFsU3RhdGUiLCJkZXBvc2l0IiwiZGVwb3NpdElzTG9hZGluZyIsImN1cnJlbnREZXBvc2l0VmFsdWUiLCJkZXBvc2l0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNFVF9ORVdfREVQT1NJVCIsInBheWxvYWQiLCJTRVRfREVQT1NJVF9JU19MT0FESU5HIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/addDeposit/index.js\n"));

/***/ })

});