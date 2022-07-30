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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_pro_Development_blockchain_SolidityCource_solidityCourseLast_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pro_Development_blockchain_SolidityCource_solidityCourseLast_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pro_Development_blockchain_SolidityCource_solidityCourseLast_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config/index.js\");\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Spinner */ \"./components/Spinner.js\");\n/* harmony import */ var _config_tokenDeposit_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/tokenDeposit.json */ \"./config/tokenDeposit.json\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_reducers_addDeposit_action_creators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/reducers/addDeposit/action-creators */ \"./store/reducers/addDeposit/action-creators.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar AddDeposit = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), currentDepositValue = ref[0], setCurrentDepositValue = ref[1];\n    var depositIsLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function(state) {\n        return state.AddDeposit;\n    }).depositIsLoading;\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    var context = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)();\n    var library = context.library, account = context.account, active = context.active;\n    var handleChangeValue = function(e) {\n        setCurrentDepositValue(e.target.value);\n    };\n    var handleAddDeposit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_Users_pro_Development_blockchain_SolidityCource_solidityCourseLast_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_pro_Development_blockchain_SolidityCource_solidityCourseLast_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"Add value to contract\");\n                        if (active) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        dispatch(_store_reducers_addDeposit_action_creators__WEBPACK_IMPORTED_MODULE_8__.depositActionCreator.setDeposit(library.getSigner(account).connectUnchecked(), currentDepositValue));\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleAddDeposit() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"deposit-value\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"number\",\n                disabled: !active,\n                value: currentDepositValue,\n                onChange: handleChangeValue\n            }, void 0, false, {\n                fileName: \"/Users/pro/Development/blockchain/SolidityCource/solidityCourseLast/frontend/components/AddDeposit.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: handleAddDeposit,\n                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/pro/Development/blockchain/SolidityCource/solidityCourseLast/frontend/components/AddDeposit.js\",\n                    lineNumber: 38,\n                    columnNumber: 22\n                }, _this) : \"Add deposit\"\n            }, void 0, false, {\n                fileName: \"/Users/pro/Development/blockchain/SolidityCource/solidityCourseLast/frontend/components/AddDeposit.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pro/Development/blockchain/SolidityCource/solidityCourseLast/frontend/components/AddDeposit.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(AddDeposit, \"RDWjXNALHYoAtZJSZgDz43VtsSY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React\n    ];\n});\n_c = AddDeposit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddDeposit);\nvar _c;\n$RefreshReg$(_c, \"AddDeposit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZERlcG9zaXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUF3QztBQUNRO0FBQ0k7QUFDakI7QUFDUztBQUNTO0FBQ0U7QUFDNkI7O0FBR3BGLElBQU1VLFVBQVUsR0FBRyxXQUFNOztJQUN2QixJQUFzRFQsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUExRFUsbUJBQW1CLEdBQTRCVixHQUFXLEdBQXZDLEVBQUVXLHNCQUFzQixHQUFJWCxHQUFXLEdBQWY7SUFDbEQsSUFBTSxnQkFBa0IsR0FBS08sd0RBQVcsQ0FBQ00sU0FBQUEsS0FBSztlQUFJQSxLQUFLLENBQUNKLFVBQVU7S0FBQSxDQUFDLENBQTNERyxnQkFBZ0I7SUFDeEIsSUFBTUUsUUFBUSxHQUFHUix3REFBVyxFQUFFO0lBQzlCLElBQU1TLE9BQU8sR0FBR2QsOERBQVksRUFBRTtJQUM5QixJQUFRZSxPQUFPLEdBQXNCRCxPQUFPLENBQXBDQyxPQUFPLEVBQUVDLE9BQU8sR0FBYUYsT0FBTyxDQUEzQkUsT0FBTyxFQUFFQyxNQUFNLEdBQUtILE9BQU8sQ0FBbEJHLE1BQU07SUFFaEMsSUFBTUMsaUJBQWlCLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQy9CVCxzQkFBc0IsQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBQ3hDO0lBRUQsSUFBTUMsZ0JBQWdCO21CQUFHLCtSQUFZOzs7O3dCQUNuQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs0QkFDaENQLE1BQU07Ozs7Ozt3QkFHWEosUUFBUSxDQUFDTix1R0FBK0IsQ0FBQ1EsT0FBTyxDQUFDVyxTQUFTLENBQUNWLE9BQU8sQ0FBQyxDQUFDVyxnQkFBZ0IsRUFBRSxFQUFFbEIsbUJBQW1CLENBQUMsQ0FBQzs7Ozs7O1NBQzlHO3dCQU5LYSxnQkFBZ0I7OztPQU1yQjtJQUNELHFCQUNFLDhEQUFDTSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxlQUFlOzswQkFDNUIsOERBQUNDLE9BQUs7Z0JBQ0pDLElBQUksRUFBQyxRQUFRO2dCQUNiQyxRQUFRLEVBQUUsQ0FBQ2YsTUFBTTtnQkFDakJJLEtBQUssRUFBRVosbUJBQW1CO2dCQUMxQndCLFFBQVEsRUFBRWYsaUJBQWlCOzs7OztxQkFDM0I7MEJBQ0YsOERBQUNnQixRQUFNO2dCQUFDQyxPQUFPLEVBQUViLGdCQUFnQjswQkFDOUJjLFNBQVMsaUJBQUcsOERBQUNqQywyREFBTzs7Ozt5QkFBRyxHQUFHLGFBQWE7Ozs7O3FCQUNqQzs7Ozs7O2FBQ0wsQ0FDTjtDQUNIO0dBL0JLSyxVQUFVOztRQUVlRixvREFBVztRQUN2QkQsb0RBQVc7UUFDWkwsMERBQVk7OztBQUp4QlEsS0FBQUEsVUFBVTtBQWlDaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FkZERlcG9zaXQuanM/OWQ3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyBDb250cmFjdCB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9jb250cmFjdHNcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcbmltcG9ydCBkZXBvc2l0QUJJIGZyb20gXCIuLi9jb25maWcvdG9rZW5EZXBvc2l0Lmpzb25cIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgZGVwb3NpdEFjdGlvbkNyZWF0b3IgfSBmcm9tIFwiLi4vc3RvcmUvcmVkdWNlcnMvYWRkRGVwb3NpdC9hY3Rpb24tY3JlYXRvcnNcIjtcblxuXG5jb25zdCBBZGREZXBvc2l0ID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudERlcG9zaXRWYWx1ZSwgc2V0Q3VycmVudERlcG9zaXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgeyBkZXBvc2l0SXNMb2FkaW5nIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5BZGREZXBvc2l0KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBjb250ZXh0ID0gdXNlV2ViM1JlYWN0KCk7XG4gIGNvbnN0IHsgbGlicmFyeSwgYWNjb3VudCwgYWN0aXZlIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVZhbHVlID0gKGUpID0+IHtcbiAgICBzZXRDdXJyZW50RGVwb3NpdFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGREZXBvc2l0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQWRkIHZhbHVlIHRvIGNvbnRyYWN0XCIpO1xuICAgIGlmICghYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRpc3BhdGNoKGRlcG9zaXRBY3Rpb25DcmVhdG9yLnNldERlcG9zaXQobGlicmFyeS5nZXRTaWduZXIoYWNjb3VudCkuY29ubmVjdFVuY2hlY2tlZCgpLCBjdXJyZW50RGVwb3NpdFZhbHVlKSlcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRlcG9zaXQtdmFsdWVcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgZGlzYWJsZWQ9eyFhY3RpdmV9XG4gICAgICAgIHZhbHVlPXtjdXJyZW50RGVwb3NpdFZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVmFsdWV9XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGREZXBvc2l0fT5cbiAgICAgICAge2lzTG9hZGluZyA/IDxTcGlubmVyIC8+IDogXCJBZGQgZGVwb3NpdFwifVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGREZXBvc2l0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VXZWIzUmVhY3QiLCJDb250cmFjdCIsIkNvbmZpZyIsIlNwaW5uZXIiLCJkZXBvc2l0QUJJIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImRlcG9zaXRBY3Rpb25DcmVhdG9yIiwiQWRkRGVwb3NpdCIsImN1cnJlbnREZXBvc2l0VmFsdWUiLCJzZXRDdXJyZW50RGVwb3NpdFZhbHVlIiwiZGVwb3NpdElzTG9hZGluZyIsInN0YXRlIiwiZGlzcGF0Y2giLCJjb250ZXh0IiwibGlicmFyeSIsImFjY291bnQiLCJhY3RpdmUiLCJoYW5kbGVDaGFuZ2VWYWx1ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUFkZERlcG9zaXQiLCJjb25zb2xlIiwibG9nIiwic2V0RGVwb3NpdCIsImdldFNpZ25lciIsImNvbm5lY3RVbmNoZWNrZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsImlzTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AddDeposit.js\n"));

/***/ }),

/***/ "./store/reducers/addDeposit/action-creators.js":
/*!******************************************************!*\
  !*** ./store/reducers/addDeposit/action-creators.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"depositActionCreator\": function() { return /* binding */ depositActionCreator; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_pro_Development_blockchain_SolidityCource_solidityCourseLast_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pro_Development_blockchain_SolidityCource_solidityCourseLast_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pro_Development_blockchain_SolidityCource_solidityCourseLast_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ \"./store/reducers/addDeposit/type.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ \"./config/index.js\");\n/* harmony import */ var _config_tokenDeposit_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/tokenDeposit.json */ \"./config/tokenDeposit.json\");\n/* harmony import */ var _utils_contractInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/contractInit */ \"./utils/contractInit.js\");\n\n\n\n\n\n\nvar depositActionCreator = {\n    setDeposit: function(deposit) {\n        return {\n            type: _type__WEBPACK_IMPORTED_MODULE_1__.depositActions.SET_NEW_DEPOSIT,\n            payload: deposit\n        };\n    },\n    setDepositLoading: function(isLoading) {\n        return {\n            type: _type__WEBPACK_IMPORTED_MODULE_1__.depositActions.SET_DEPOSIT_IS_LOADING,\n            payload: isLoading\n        };\n    },\n    addDeposit: function(signer, currentDepositValue) {\n        return function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_pro_Development_blockchain_SolidityCource_solidityCourseLast_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch, store) {\n                var contract, trx;\n                return _Users_pro_Development_blockchain_SolidityCource_solidityCourseLast_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            contract = (0,_utils_contractInit__WEBPACK_IMPORTED_MODULE_4__.contractInit)((0,_config__WEBPACK_IMPORTED_MODULE_2__.Config)().tokenDepositAddress, _config_tokenDeposit_json__WEBPACK_IMPORTED_MODULE_3__.abi, signer);\n                            _ctx.next = 3;\n                            return contract.addDeposit(currentDepositValue);\n                        case 3:\n                            trx = _ctx.sent;\n                            setDepositLoading(true);\n                            _ctx.next = 7;\n                            return trx.wait();\n                        case 7:\n                            setDepositLoading(false);\n                        case 8:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function(dispatch, store) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9hZGREZXBvc2l0L2FjdGlvbi1jcmVhdG9ycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF1QztBQUNFO0FBQ2tCO0FBQ0E7QUFFcEQsSUFBTUksb0JBQW9CLEdBQUc7SUFDaENDLFVBQVUsRUFBRSxTQUFDQyxPQUFPO2VBQU07WUFDeEJDLElBQUksRUFBRVAsaUVBQThCO1lBQ3BDUyxPQUFPLEVBQUVILE9BQU87U0FDakI7S0FBQztJQUNGSSxpQkFBaUIsRUFBRSxTQUFDQyxTQUFTO2VBQU07WUFDakNKLElBQUksRUFBRVAsd0VBQXFDO1lBQzNDUyxPQUFPLEVBQUVFLFNBQVM7U0FDbkI7S0FBQztJQUNGRSxVQUFVLEVBQ1YsU0FBQ0MsTUFBTSxFQUFFQyxtQkFBbUI7O3VCQUFLLDZSQUFPQyxRQUFRLEVBQUVDLEtBQUssRUFBSztvQkFDcERDLFFBQVEsRUFDUkMsR0FBRzs7Ozs0QkFESEQsUUFBUSxHQUFHZixpRUFBWSxDQUFDRiwrQ0FBTSxFQUFFLENBQUNtQixtQkFBbUIsRUFBRWxCLDBEQUFjLEVBQUVZLE1BQU0sQ0FBQzs7bUNBQ2pFSSxRQUFRLENBQUNMLFVBQVUsQ0FBQ0UsbUJBQW1CLENBQUM7OzRCQUFwREksR0FBRyxZQUFpRDs0QkFDNURULGlCQUFpQixDQUFDLElBQUksQ0FBQzs7bUNBQ2pCUyxHQUFHLENBQUNHLElBQUksRUFBRTs7NEJBQ2hCWixpQkFBaUIsQ0FBQyxLQUFLLENBQUM7Ozs7OzthQUN2Qjs0QkFOdUNNLFFBQVEsRUFBRUMsS0FBSzs7OztLQU10RDtDQUVIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3JlZHVjZXJzL2FkZERlcG9zaXQvYWN0aW9uLWNyZWF0b3JzLmpzPzcyMzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVwb3NpdEFjdGlvbnMgfSBmcm9tIFwiLi90eXBlXCJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9jb25maWdcIjtcbmltcG9ydCBkZXBvc2l0QUJJIGZyb20gXCIuLi8uLi8uLi9jb25maWcvdG9rZW5EZXBvc2l0Lmpzb25cIjtcbmltcG9ydCB7IGNvbnRyYWN0SW5pdCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jb250cmFjdEluaXRcIjtcblxuZXhwb3J0IGNvbnN0IGRlcG9zaXRBY3Rpb25DcmVhdG9yID0ge1xuICAgIHNldERlcG9zaXQ6IChkZXBvc2l0KSA9PiAoe1xuICAgICAgdHlwZTogZGVwb3NpdEFjdGlvbnMuU0VUX05FV19ERVBPU0lULFxuICAgICAgcGF5bG9hZDogZGVwb3NpdCxcbiAgICB9KSxcbiAgICBzZXREZXBvc2l0TG9hZGluZzogKGlzTG9hZGluZykgPT4gKHtcbiAgICAgIHR5cGU6IGRlcG9zaXRBY3Rpb25zLlNFVF9ERVBPU0lUX0lTX0xPQURJTkcsXG4gICAgICBwYXlsb2FkOiBpc0xvYWRpbmcsXG4gICAgfSksXG4gICAgYWRkRGVwb3NpdDogXG4gICAgKHNpZ25lciwgY3VycmVudERlcG9zaXRWYWx1ZSkgPT4gYXN5bmMgKGRpc3BhdGNoLCBzdG9yZSkgPT4ge1xuICAgICAgY29uc3QgY29udHJhY3QgPSBjb250cmFjdEluaXQoQ29uZmlnKCkudG9rZW5EZXBvc2l0QWRkcmVzcywgZGVwb3NpdEFCSS5hYmksIHNpZ25lcilcbiAgICAgIGNvbnN0IHRyeCA9IGF3YWl0IGNvbnRyYWN0LmFkZERlcG9zaXQoY3VycmVudERlcG9zaXRWYWx1ZSk7XG4gICAgc2V0RGVwb3NpdExvYWRpbmcodHJ1ZSlcbiAgICBhd2FpdCB0cngud2FpdCgpO1xuICAgIHNldERlcG9zaXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cblxuIH0gICJdLCJuYW1lcyI6WyJkZXBvc2l0QWN0aW9ucyIsIkNvbmZpZyIsImRlcG9zaXRBQkkiLCJjb250cmFjdEluaXQiLCJkZXBvc2l0QWN0aW9uQ3JlYXRvciIsInNldERlcG9zaXQiLCJkZXBvc2l0IiwidHlwZSIsIlNFVF9ORVdfREVQT1NJVCIsInBheWxvYWQiLCJzZXREZXBvc2l0TG9hZGluZyIsImlzTG9hZGluZyIsIlNFVF9ERVBPU0lUX0lTX0xPQURJTkciLCJhZGREZXBvc2l0Iiwic2lnbmVyIiwiY3VycmVudERlcG9zaXRWYWx1ZSIsImRpc3BhdGNoIiwic3RvcmUiLCJjb250cmFjdCIsInRyeCIsInRva2VuRGVwb3NpdEFkZHJlc3MiLCJhYmkiLCJ3YWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/addDeposit/action-creators.js\n"));

/***/ }),

/***/ "./utils/contractInit.js":
/*!*******************************!*\
  !*** ./utils/contractInit.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contractInit\": function() { return /* binding */ contractInit; }\n/* harmony export */ });\n/* harmony import */ var _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/contracts */ \"./node_modules/@ethersproject/contracts/lib.esm/index.js\");\n\nvar contractInit = function(address, abi, signer) {\n    var contract = new _ethersproject_contracts__WEBPACK_IMPORTED_MODULE_0__.Contract(address, abi, signer);\n    return contract;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb250cmFjdEluaXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0Q7QUFFN0MsSUFBTUMsWUFBWSxHQUFHLFNBQUNDLE9BQU8sRUFBRUMsR0FBRyxFQUFFQyxNQUFNLEVBQUs7SUFDbEQsSUFBTUMsUUFBUSxHQUFHLElBQUlMLDhEQUFRLENBQUNFLE9BQU8sRUFBRUMsR0FBRyxFQUFFQyxNQUFNLENBQUM7SUFDbkQsT0FBT0MsUUFBUTtDQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9jb250cmFjdEluaXQuanM/NzBjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cmFjdCB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9jb250cmFjdHNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbnRyYWN0SW5pdCA9IChhZGRyZXNzLCBhYmksIHNpZ25lcikgPT4ge1xuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KGFkZHJlc3MsIGFiaSwgc2lnbmVyKVxuICAgIHJldHVybiBjb250cmFjdFxufSJdLCJuYW1lcyI6WyJDb250cmFjdCIsImNvbnRyYWN0SW5pdCIsImFkZHJlc3MiLCJhYmkiLCJzaWduZXIiLCJjb250cmFjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/contractInit.js\n"));

/***/ })

});