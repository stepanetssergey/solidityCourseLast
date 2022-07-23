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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_pro_Development_blockchain_SolidityCource_solidityCourseLast_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pro_Development_blockchain_SolidityCource_solidityCourseLast_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pro_Development_blockchain_SolidityCource_solidityCourseLast_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config/index.js\");\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Spinner */ \"./components/Spinner.js\");\n/* harmony import */ var _config_tokenDeposit_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/tokenDeposit.json */ \"./config/tokenDeposit.json\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar AddDeposit = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), currentDepositValue = ref[0], setCurrentDepositValue = ref[1];\n    var depositIsLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function(state) {\n        return state.AddDeposit;\n    }).depositIsLoading;\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    var context = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)();\n    var library = context.library, account = context.account, active = context.active;\n    var handleChangeValue = function(e) {\n        setCurrentDepositValue(e.target.value);\n    };\n    var handleAddDeposit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_pro_Development_blockchain_SolidityCource_solidityCourseLast_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_pro_Development_blockchain_SolidityCource_solidityCourseLast_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"Add value to contract\");\n                        if (active) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleAddDeposit() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"deposit-value\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"number\",\n                disabled: !active,\n                value: currentDepositValue,\n                onChange: handleChangeValue\n            }, void 0, false, {\n                fileName: \"/Users/pro/Development/blockchain/SolidityCource/solidityCourseLast/frontend/components/AddDeposit.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: handleAddDeposit,\n                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/pro/Development/blockchain/SolidityCource/solidityCourseLast/frontend/components/AddDeposit.js\",\n                    lineNumber: 37,\n                    columnNumber: 22\n                }, _this) : \"Add deposit\"\n            }, void 0, false, {\n                fileName: \"/Users/pro/Development/blockchain/SolidityCource/solidityCourseLast/frontend/components/AddDeposit.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pro/Development/blockchain/SolidityCource/solidityCourseLast/frontend/components/AddDeposit.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(AddDeposit, \"RDWjXNALHYoAtZJSZgDz43VtsSY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React\n    ];\n});\n_c = AddDeposit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddDeposit);\nvar _c;\n$RefreshReg$(_c, \"AddDeposit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZERlcG9zaXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQXdDO0FBQ1E7QUFDSTtBQUNqQjtBQUNTO0FBQ1M7QUFDRTs7QUFHdkQsSUFBTVMsVUFBVSxHQUFHLFdBQU07O0lBQ3ZCLElBQXNEUixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTFEUyxtQkFBbUIsR0FBNEJULEdBQVcsR0FBdkMsRUFBRVUsc0JBQXNCLEdBQUlWLEdBQVcsR0FBZjtJQUNsRCxJQUFNLGdCQUFrQixHQUFLTyx3REFBVyxDQUFDSyxTQUFBQSxLQUFLO2VBQUlBLEtBQUssQ0FBQ0osVUFBVTtLQUFBLENBQUMsQ0FBM0RHLGdCQUFnQjtJQUN4QixJQUFNRSxRQUFRLEdBQUdQLHdEQUFXLEVBQUU7SUFDOUIsSUFBTVEsT0FBTyxHQUFHYiw4REFBWSxFQUFFO0lBQzlCLElBQVFjLE9BQU8sR0FBc0JELE9BQU8sQ0FBcENDLE9BQU8sRUFBRUMsT0FBTyxHQUFhRixPQUFPLENBQTNCRSxPQUFPLEVBQUVDLE1BQU0sR0FBS0gsT0FBTyxDQUFsQkcsTUFBTTtJQUVoQyxJQUFNQyxpQkFBaUIsR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDL0JULHNCQUFzQixDQUFDUyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7S0FDeEM7SUFFRCxJQUFNQyxnQkFBZ0I7bUJBQUcsK1JBQVk7Ozs7d0JBQ25DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOzRCQUNoQ1AsTUFBTTs7Ozs7Ozs7OztTQUlaO3dCQU5LSyxnQkFBZ0I7OztPQU1yQjtJQUNELHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxlQUFlOzswQkFDNUIsOERBQUNDLE9BQUs7Z0JBQ0pDLElBQUksRUFBQyxRQUFRO2dCQUNiQyxRQUFRLEVBQUUsQ0FBQ1osTUFBTTtnQkFDakJJLEtBQUssRUFBRVosbUJBQW1CO2dCQUMxQnFCLFFBQVEsRUFBRVosaUJBQWlCOzs7OztxQkFDM0I7MEJBQ0YsOERBQUNhLFFBQU07Z0JBQUNDLE9BQU8sRUFBRVYsZ0JBQWdCOzBCQUM5QlcsU0FBUyxpQkFBRyw4REFBQzdCLDJEQUFPOzs7O3lCQUFHLEdBQUcsYUFBYTs7Ozs7cUJBQ2pDOzs7Ozs7YUFDTCxDQUNOO0NBQ0g7R0EvQktJLFVBQVU7O1FBRWVELG9EQUFXO1FBQ3ZCRCxvREFBVztRQUNaTCwwREFBWTs7O0FBSnhCTyxLQUFBQSxVQUFVO0FBaUNoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWRkRGVwb3NpdC5qcz85ZDc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcbmltcG9ydCB7IENvbnRyYWN0IH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2NvbnRyYWN0c1wiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IGRlcG9zaXRBQkkgZnJvbSBcIi4uL2NvbmZpZy90b2tlbkRlcG9zaXQuanNvblwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cblxuY29uc3QgQWRkRGVwb3NpdCA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnREZXBvc2l0VmFsdWUsIHNldEN1cnJlbnREZXBvc2l0VmFsdWVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHsgZGVwb3NpdElzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuQWRkRGVwb3NpdCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgY29udGV4dCA9IHVzZVdlYjNSZWFjdCgpO1xuICBjb25zdCB7IGxpYnJhcnksIGFjY291bnQsIGFjdGl2ZSB9ID0gY29udGV4dDtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VWYWx1ZSA9IChlKSA9PiB7XG4gICAgc2V0Q3VycmVudERlcG9zaXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkRGVwb3NpdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkFkZCB2YWx1ZSB0byBjb250cmFjdFwiKTtcbiAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRlcG9zaXQtdmFsdWVcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgZGlzYWJsZWQ9eyFhY3RpdmV9XG4gICAgICAgIHZhbHVlPXtjdXJyZW50RGVwb3NpdFZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVmFsdWV9XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGREZXBvc2l0fT5cbiAgICAgICAge2lzTG9hZGluZyA/IDxTcGlubmVyIC8+IDogXCJBZGQgZGVwb3NpdFwifVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGREZXBvc2l0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VXZWIzUmVhY3QiLCJDb250cmFjdCIsIkNvbmZpZyIsIlNwaW5uZXIiLCJkZXBvc2l0QUJJIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkFkZERlcG9zaXQiLCJjdXJyZW50RGVwb3NpdFZhbHVlIiwic2V0Q3VycmVudERlcG9zaXRWYWx1ZSIsImRlcG9zaXRJc0xvYWRpbmciLCJzdGF0ZSIsImRpc3BhdGNoIiwiY29udGV4dCIsImxpYnJhcnkiLCJhY2NvdW50IiwiYWN0aXZlIiwiaGFuZGxlQ2hhbmdlVmFsdWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVBZGREZXBvc2l0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiaXNMb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AddDeposit.js\n"));

/***/ })

});