self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Precio.js":
/*!******************************!*\
  !*** ./components/Precio.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Proyectos\\Programacion\\Javascript\\react\\Proyectos\\bitcoin-app\\components\\Precio.js",
    _this = undefined;

var Precio = function Precio(props) {
  var _props$precio = props.precio,
      current_price = _props$precio.current_price,
      price_change_24h = _props$precio.price_change_24h,
      high_24h = _props$precio.high_24h,
      low_24h = _props$precio.low_24h;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card text-white bg-success",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-header",
      children: "Precio del Bitcoin"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "card-title h5",
        children: ["Precio Actual: $", current_price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-md-flex justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "card-text",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "font-weight-bold",
            children: ["Cambio Precio \xDAltimas 24 Horas: $", price_change_24h]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "card-text",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "font-weight-bold",
            children: ["Mas alto ultimas 24 Horas: $", high_24h]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "card-text",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "font-weight-bold",
            children: ["Mas bajo ultimas 24 Horas: $", low_24h]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, _this);
};

_c = Precio;
/* harmony default export */ __webpack_exports__["default"] = (Precio);

var _c;

$RefreshReg$(_c, "Precio");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmVjaW8uanMiXSwibmFtZXMiOlsiUHJlY2lvIiwicHJvcHMiLCJwcmVjaW8iLCJjdXJyZW50X3ByaWNlIiwicHJpY2VfY2hhbmdlXzI0aCIsImhpZ2hfMjRoIiwibG93XzI0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsc0JBRXVDQSxLQUFLLENBQUNDLE1BRjdDO0FBQUEsTUFFZkMsYUFGZSxpQkFFZkEsYUFGZTtBQUFBLE1BRUFDLGdCQUZBLGlCQUVBQSxnQkFGQTtBQUFBLE1BRWtCQyxRQUZsQixpQkFFa0JBLFFBRmxCO0FBQUEsTUFFNEJDLE9BRjVCLGlCQUU0QkEsT0FGNUI7QUFJdEIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLGVBQWQ7QUFBQSx1Q0FBK0NILGFBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDLG1DQUFmO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLFdBQWI7QUFBQSxpQ0FDSTtBQUFNLHFCQUFTLEVBQUMsa0JBQWhCO0FBQUEsK0RBQXFFQyxnQkFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJO0FBQUcsbUJBQVMsRUFBQyxXQUFiO0FBQUEsaUNBQ0k7QUFBTSxxQkFBUyxFQUFDLGtCQUFoQjtBQUFBLHVEQUFnRUMsUUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQU9JO0FBQUcsbUJBQVMsRUFBQyxXQUFiO0FBQUEsaUNBQ0k7QUFBTSxxQkFBUyxFQUFDLGtCQUFoQjtBQUFBLHVEQUFnRUMsT0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1CSCxDQXZCRDs7S0FBTU4sTTtBQXlCTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45N2Y5NGFmMTE2NjJiMTdiNzlkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUHJlY2lvID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2N1cnJlbnRfcHJpY2UsIHByaWNlX2NoYW5nZV8yNGgsIGhpZ2hfMjRoLCBsb3dfMjRofSA9IHByb3BzLnByZWNpbztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIHRleHQtd2hpdGUgYmctc3VjY2Vzcyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWhlYWRlcic+UHJlY2lvIGRlbCBCaXRjb2luPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nY2FyZC10aXRsZSBoNSc+UHJlY2lvIEFjdHVhbDogJHtjdXJyZW50X3ByaWNlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1tZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NhcmQtdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC13ZWlnaHQtYm9sZCc+Q2FtYmlvIFByZWNpbyDDmmx0aW1hcyAyNCBIb3JhczogJHtwcmljZV9jaGFuZ2VfMjRofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYXJkLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQnPk1hcyBhbHRvIHVsdGltYXMgMjQgSG9yYXM6ICR7aGlnaF8yNGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NhcmQtdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC13ZWlnaHQtYm9sZCc+TWFzIGJham8gdWx0aW1hcyAyNCBIb3JhczogJHtsb3dfMjRofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZWNpbzsiXSwic291cmNlUm9vdCI6IiJ9