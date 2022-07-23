"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AddDeposit.js":
/*!**********************************!*\
  !*** ./components/AddDeposit.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config/index.js\");\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Spinner */ \"./components/Spinner.js\");\n/* harmony import */ var _config_tokenDeposit_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/tokenDeposit.json */ \"./config/tokenDeposit.json\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_reducers_addDeposit_action_creators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/reducers/addDeposit/action-creators */ \"./store/reducers/addDeposit/action-creators.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar AddDeposit = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentDepositValue = ref[0], setCurrentDepositValue = ref[1];\n    var depositIsLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.depositReducer;\n    }).depositIsLoading;\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    var context = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)();\n    var library = context.library, account = context.account, active = context.active;\n    var handleChangeValue = function(e) {\n        setCurrentDepositValue(e.target.value);\n    };\n    var handleAddDeposit = function() {\n        console.log(\"Add value to contract\");\n        if (!active) {\n            return;\n        }\n        dispatch(_store_reducers_addDeposit_action_creators__WEBPACK_IMPORTED_MODULE_7__.depositActionCreator.addDeposit(library.getSigner(account).connectUnchecked(), currentDepositValue));\n    //dispatch(depositActionCreator.addDeposit())\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"deposit-value\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                disabled: !active,\n                value: currentDepositValue,\n                onChange: handleChangeValue\n            }, void 0, false, {\n                fileName: \"/Users/pro/Development/blockchain/SolidityCource/solidityCourseLast/frontend/components/AddDeposit.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddDeposit,\n                children: depositIsLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/pro/Development/blockchain/SolidityCource/solidityCourseLast/frontend/components/AddDeposit.js\",\n                    lineNumber: 39,\n                    columnNumber: 29\n                }, _this) : \"Add deposit\"\n            }, void 0, false, {\n                fileName: \"/Users/pro/Development/blockchain/SolidityCource/solidityCourseLast/frontend/components/AddDeposit.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pro/Development/blockchain/SolidityCource/solidityCourseLast/frontend/components/AddDeposit.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(AddDeposit, \"RDWjXNALHYoAtZJSZgDz43VtsSY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React\n    ];\n});\n_c = AddDeposit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddDeposit);\nvar _c;\n$RefreshReg$(_c, \"AddDeposit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZERlcG9zaXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDUTtBQUNJO0FBQ2pCO0FBQ1M7QUFDUztBQUNFO0FBQzZCOztBQUdwRixJQUFNVSxVQUFVLEdBQUcsV0FBTTs7SUFDdkIsSUFBc0RULEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBMURVLG1CQUFtQixHQUE0QlYsR0FBVyxHQUF2QyxFQUFFVyxzQkFBc0IsR0FBSVgsR0FBVyxHQUFmO0lBQ2xELElBQU0sZ0JBQWtCLEdBQUtPLHdEQUFXLENBQUNNLFNBQUFBLEtBQUs7ZUFBSUEsS0FBSyxDQUFDQyxjQUFjO0tBQUEsQ0FBQyxDQUEvREYsZ0JBQWdCO0lBQ3hCLElBQU1HLFFBQVEsR0FBR1Qsd0RBQVcsRUFBRTtJQUM5QixJQUFNVSxPQUFPLEdBQUdmLDhEQUFZLEVBQUU7SUFDOUIsSUFBUWdCLE9BQU8sR0FBc0JELE9BQU8sQ0FBcENDLE9BQU8sRUFBRUMsT0FBTyxHQUFhRixPQUFPLENBQTNCRSxPQUFPLEVBQUVDLE1BQU0sR0FBS0gsT0FBTyxDQUFsQkcsTUFBTTtJQUVoQyxJQUFNQyxpQkFBaUIsR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDL0JWLHNCQUFzQixDQUFDVSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7S0FDeEM7SUFFRCxJQUFNQyxnQkFBZ0IsR0FBRyxXQUFNO1FBQzdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQ1AsTUFBTSxFQUFFO1lBQ1gsT0FBTztTQUNSO1FBQ0ZKLFFBQVEsQ0FBQ1AsdUdBQStCLENBQUNTLE9BQU8sQ0FBQ1csU0FBUyxDQUFDVixPQUFPLENBQUMsQ0FBQ1csZ0JBQWdCLEVBQUUsRUFBRW5CLG1CQUFtQixDQUFDLENBQUM7SUFDN0csNkNBQTZDO0tBQzdDO0lBQ0QscUJBQ0UsOERBQUNvQixLQUFHO1FBQUNDLFNBQVMsRUFBQyxlQUFlOzswQkFDNUIsOERBQUNDLE9BQUs7Z0JBQ0pDLElBQUksRUFBQyxRQUFRO2dCQUNiQyxRQUFRLEVBQUUsQ0FBQ2YsTUFBTTtnQkFDakJJLEtBQUssRUFBRWIsbUJBQW1CO2dCQUMxQnlCLFFBQVEsRUFBRWYsaUJBQWlCOzs7OztxQkFDM0I7MEJBQ0YsOERBQUNnQixRQUFNO2dCQUFDQyxPQUFPLEVBQUViLGdCQUFnQjswQkFDOUJaLGdCQUFnQixpQkFBRyw4REFBQ1IsMkRBQU87Ozs7eUJBQUcsR0FBRyxhQUFhOzs7OztxQkFDeEM7Ozs7OzthQUNMLENBQ047Q0FDSDtHQWhDS0ssVUFBVTs7UUFFZUYsb0RBQVc7UUFDdkJELG9EQUFXO1FBQ1pMLDBEQUFZOzs7QUFKeEJRLEtBQUFBLFVBQVU7QUFrQ2hCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGREZXBvc2l0LmpzPzlkNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgQ29udHJhY3QgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvY29udHJhY3RzXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XG5pbXBvcnQgZGVwb3NpdEFCSSBmcm9tIFwiLi4vY29uZmlnL3Rva2VuRGVwb3NpdC5qc29uXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGRlcG9zaXRBY3Rpb25DcmVhdG9yIH0gZnJvbSBcIi4uL3N0b3JlL3JlZHVjZXJzL2FkZERlcG9zaXQvYWN0aW9uLWNyZWF0b3JzXCI7XG5cblxuY29uc3QgQWRkRGVwb3NpdCA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnREZXBvc2l0VmFsdWUsIHNldEN1cnJlbnREZXBvc2l0VmFsdWVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHsgZGVwb3NpdElzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZGVwb3NpdFJlZHVjZXIpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VXZWIzUmVhY3QoKTtcbiAgY29uc3QgeyBsaWJyYXJ5LCBhY2NvdW50LCBhY3RpdmUgfSA9IGNvbnRleHQ7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlVmFsdWUgPSAoZSkgPT4ge1xuICAgIHNldEN1cnJlbnREZXBvc2l0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZERlcG9zaXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJBZGQgdmFsdWUgdG8gY29udHJhY3RcIik7XG4gICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICBkaXNwYXRjaChkZXBvc2l0QWN0aW9uQ3JlYXRvci5hZGREZXBvc2l0KGxpYnJhcnkuZ2V0U2lnbmVyKGFjY291bnQpLmNvbm5lY3RVbmNoZWNrZWQoKSwgY3VycmVudERlcG9zaXRWYWx1ZSkpXG4gICAvL2Rpc3BhdGNoKGRlcG9zaXRBY3Rpb25DcmVhdG9yLmFkZERlcG9zaXQoKSlcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRlcG9zaXQtdmFsdWVcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgZGlzYWJsZWQ9eyFhY3RpdmV9XG4gICAgICAgIHZhbHVlPXtjdXJyZW50RGVwb3NpdFZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVmFsdWV9XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGREZXBvc2l0fT5cbiAgICAgICAge2RlcG9zaXRJc0xvYWRpbmcgPyA8U3Bpbm5lciAvPiA6IFwiQWRkIGRlcG9zaXRcIn1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkRGVwb3NpdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlV2ViM1JlYWN0IiwiQ29udHJhY3QiLCJDb25maWciLCJTcGlubmVyIiwiZGVwb3NpdEFCSSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJkZXBvc2l0QWN0aW9uQ3JlYXRvciIsIkFkZERlcG9zaXQiLCJjdXJyZW50RGVwb3NpdFZhbHVlIiwic2V0Q3VycmVudERlcG9zaXRWYWx1ZSIsImRlcG9zaXRJc0xvYWRpbmciLCJzdGF0ZSIsImRlcG9zaXRSZWR1Y2VyIiwiZGlzcGF0Y2giLCJjb250ZXh0IiwibGlicmFyeSIsImFjY291bnQiLCJhY3RpdmUiLCJoYW5kbGVDaGFuZ2VWYWx1ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUFkZERlcG9zaXQiLCJjb25zb2xlIiwibG9nIiwiYWRkRGVwb3NpdCIsImdldFNpZ25lciIsImNvbm5lY3RVbmNoZWNrZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AddDeposit.js\n"));

/***/ })

});