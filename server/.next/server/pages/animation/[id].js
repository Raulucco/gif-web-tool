"use strict";
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
exports.id = "pages/animation/[id]";
exports.ids = ["pages/animation/[id]"];
exports.modules = {

/***/ "./components/Animation.tsx":
/*!**********************************!*\
  !*** ./components/Animation.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Animation\": () => (/* binding */ Animation)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layer */ \"./components/Layer.tsx\");\n\n\n\n\nfunction Animation({ layers  }) {\n    const dimensions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        return layers.reduce((acc, layer)=>{\n            return {\n                width: Math.max(acc.width, layer.dimensions.width),\n                height: Math.max(acc.height, layer.dimensions.height)\n            };\n        }, {\n            width: 0,\n            height: 0\n        });\n    }, layers);\n    const style = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        return {\n            position: \"relative\",\n            width: dimensions.width,\n            height: dimensions.height\n        };\n    }, [\n        dimensions.width,\n        dimensions.height\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"canvas\",\n        style: {\n            position: \"relative\"\n        },\n        children: layers.map((layer, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layer__WEBPACK_IMPORTED_MODULE_2__.Layer, {\n                image: layer\n            }, `${layer.name}_${i}`, false, {\n                fileName: \"/Users/raul.calvo.martin/develop/gif-web-tool/server/components/Animation.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/raul.calvo.martin/develop/gif-web-tool/server/components/Animation.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FuaW1hdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDTTtBQUN1QjtBQU1oRCxTQUFTRyxVQUFVLEVBQUVDLE9BQU0sRUFBa0IsRUFBRTtJQUNwRCxNQUFNQyxhQUFhSiw4Q0FBT0EsQ0FBYSxJQUFNO1FBQzNDLE9BQU9HLE9BQU9FLE1BQU0sQ0FDbEIsQ0FBQ0MsS0FBaUJDLFFBQXFCO1lBQ3JDLE9BQU87Z0JBQ0xDLE9BQU9DLEtBQUtDLEdBQUcsQ0FBQ0osSUFBSUUsS0FBSyxFQUFFRCxNQUFNSCxVQUFVLENBQUNJLEtBQUs7Z0JBQ2pERyxRQUFRRixLQUFLQyxHQUFHLENBQUNKLElBQUlLLE1BQU0sRUFBRUosTUFBTUgsVUFBVSxDQUFDTyxNQUFNO1lBQ3REO1FBQ0YsR0FDQTtZQUFFSCxPQUFPO1lBQUdHLFFBQVE7UUFBRTtJQUUxQixHQUFHUjtJQUNILE1BQU1TLFFBQVFaLDhDQUFPQSxDQUFDLElBQU07UUFDMUIsT0FBTztZQUNMYSxVQUFVO1lBQ1ZMLE9BQU9KLFdBQVdJLEtBQUs7WUFDdkJHLFFBQVFQLFdBQVdPLE1BQU07UUFDM0I7SUFDRixHQUFHO1FBQUNQLFdBQVdJLEtBQUs7UUFBRUosV0FBV08sTUFBTTtLQUFDO0lBQ3hDLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO1FBQVNILE9BQU87WUFBRUMsVUFBVTtRQUFXO2tCQUNuRFYsT0FBT2EsR0FBRyxDQUFDLENBQUNULE9BQU9VLGtCQUNsQiw4REFBQ2hCLHlDQUFLQTtnQkFBNEJpQixPQUFPWDtlQUE3QixDQUFDLEVBQUVBLE1BQU1ZLElBQUksQ0FBQyxDQUFDLEVBQUVGLEVBQUUsQ0FBQzs7Ozs7Ozs7OztBQUl4QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLy4vY29tcG9uZW50cy9BbmltYXRpb24udHN4P2I3OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGltZW5zaW9ucywgTGF5ZXIsIExheWVyTWV0YSB9IGZyb20gXCIuL0xheWVyXCI7XG5cbmV4cG9ydCB0eXBlIEFuaW1hdGlvblByb3BzID0ge1xuICBsYXllcnM6IExheWVyTWV0YVtdO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEFuaW1hdGlvbih7IGxheWVycyB9OiBBbmltYXRpb25Qcm9wcykge1xuICBjb25zdCBkaW1lbnNpb25zID0gdXNlTWVtbzxEaW1lbnNpb25zPigoKSA9PiB7XG4gICAgcmV0dXJuIGxheWVycy5yZWR1Y2UoXG4gICAgICAoYWNjOiBEaW1lbnNpb25zLCBsYXllcjogTGF5ZXJNZXRhKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2lkdGg6IE1hdGgubWF4KGFjYy53aWR0aCwgbGF5ZXIuZGltZW5zaW9ucy53aWR0aCksXG4gICAgICAgICAgaGVpZ2h0OiBNYXRoLm1heChhY2MuaGVpZ2h0LCBsYXllci5kaW1lbnNpb25zLmhlaWdodCksXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH1cbiAgICApO1xuICB9LCBsYXllcnMpO1xuICBjb25zdCBzdHlsZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgd2lkdGg6IGRpbWVuc2lvbnMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGRpbWVuc2lvbnMuaGVpZ2h0LFxuICAgIH07XG4gIH0sIFtkaW1lbnNpb25zLndpZHRoLCBkaW1lbnNpb25zLmhlaWdodF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FudmFzXCIgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgIHtsYXllcnMubWFwKChsYXllciwgaSkgPT4gKFxuICAgICAgICA8TGF5ZXIga2V5PXtgJHtsYXllci5uYW1lfV8ke2l9YH0gaW1hZ2U9e2xheWVyfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwiTGF5ZXIiLCJBbmltYXRpb24iLCJsYXllcnMiLCJkaW1lbnNpb25zIiwicmVkdWNlIiwiYWNjIiwibGF5ZXIiLCJ3aWR0aCIsIk1hdGgiLCJtYXgiLCJoZWlnaHQiLCJzdHlsZSIsInBvc2l0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaSIsImltYWdlIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Animation.tsx\n");

/***/ }),

/***/ "./components/Layer.tsx":
/*!******************************!*\
  !*** ./components/Layer.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layer\": () => (/* binding */ Layer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Layer({ image  }) {\n    const layerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const layerStyle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            position: \"absolute\",\n            backgroundImage: `url(${image.url})`,\n            width: `${image.dimensions.width}px`,\n            height: `${image.dimensions.height}px`\n        }), [\n        image.url\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"layer\",\n        ref: layerRef,\n        style: layerStyle\n    }, void 0, false, {\n        fileName: \"/Users/raul.calvo.martin/develop/gif-web-tool/server/components/Layer.tsx\",\n        lineNumber: 31,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheWVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQW1EO0FBQ1g7QUFpQmpDLFNBQVNHLE1BQU0sRUFBRUMsTUFBSyxFQUFjLEVBQUU7SUFDM0MsTUFBTUMsV0FBV0gsNkNBQU1BLENBQWlCLElBQUk7SUFFNUMsTUFBTUksYUFBYUwsOENBQU9BLENBQ3hCLElBQU87WUFDTE0sVUFBVTtZQUNWQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUVKLE1BQU1LLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcENDLE9BQU8sQ0FBQyxFQUFFTixNQUFNTyxVQUFVLENBQUNELEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDcENFLFFBQVEsQ0FBQyxFQUFFUixNQUFNTyxVQUFVLENBQUNDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDeEMsSUFDQTtRQUFDUixNQUFNSyxHQUFHO0tBQUM7SUFFYixxQkFBTyw4REFBQ0k7UUFBSUMsV0FBVTtRQUFRQyxLQUFLVjtRQUFVVyxPQUFPVjs7Ozs7O0FBQ3RELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXIvLi9jb21wb25lbnRzL0xheWVyLnRzeD82NDMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEaW1lbnNpb25zIHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5ZXJNZXRhIHtcbiAgbmFtZTogc3RyaW5nLFxuICB1cmw6IHN0cmluZztcbiAgZGltZW5zaW9uczogRGltZW5zaW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXllclByb3BzIHtcbiAgaW1hZ2U6IExheWVyTWV0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExheWVyKHsgaW1hZ2UgfTogTGF5ZXJQcm9wcykge1xuICBjb25zdCBsYXllclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgbGF5ZXJTdHlsZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2UudXJsfSlgLFxuICAgICAgd2lkdGg6IGAke2ltYWdlLmRpbWVuc2lvbnMud2lkdGh9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHtpbWFnZS5kaW1lbnNpb25zLmhlaWdodH1weGAsXG4gICAgfSksXG4gICAgW2ltYWdlLnVybF1cbiAgKTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXJcIiByZWY9e2xheWVyUmVmfSBzdHlsZT17bGF5ZXJTdHlsZSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzfT48L2Rpdj47XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwiTGF5ZXIiLCJpbWFnZSIsImxheWVyUmVmIiwibGF5ZXJTdHlsZSIsInBvc2l0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwidXJsIiwid2lkdGgiLCJkaW1lbnNpb25zIiwiaGVpZ2h0IiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layer.tsx\n");

/***/ }),

/***/ "./components/layers-manifest.ts":
/*!***************************************!*\
  !*** ./components/layers-manifest.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLayers\": () => (/* binding */ getLayers),\n/* harmony export */   \"getThumbnail\": () => (/* binding */ getThumbnail),\n/* harmony export */   \"manifest\": () => (/* binding */ manifest)\n/* harmony export */ });\nconst manifest = {\n    1: {\n        layers: [\n            \"assets/background.png\",\n            \"assets/foreground.gif\",\n            \"assets/logo.png\"\n        ],\n        thumbnail: \"data:image/gif;base64,R0lGODlhCgAIAIABAN3d3f///yH5BAEAAAEALAAAAAAKAAgAAAINjAOnyJv2oJOrVXrzKQA7\"\n    }\n};\nfunction getManifestEntry(id) {\n    return manifest[Number(id)];\n}\nconst getThumbnail = (id)=>{\n    return getManifestEntry(id)?.thumbnail ?? \"\";\n};\nconst getLayers = (id)=>{\n    return getManifestEntry(id)?.layers ?? [];\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheWVycy1tYW5pZmVzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxXQUFXO0lBQ3RCLEdBQUc7UUFDREMsUUFBUTtZQUFDO1lBQXlCO1lBQXlCO1NBQWtCO1FBQzdFQyxXQUFXO0lBQ2I7QUFDRixFQUFFO0FBSUYsU0FBU0MsaUJBQWlCQyxFQUFVLEVBQUU7SUFDcEMsT0FBT0osUUFBUSxDQUFDSyxPQUFPRCxJQUEwQjtBQUNuRDtBQUVPLE1BQU1FLGVBQWUsQ0FBQ0YsS0FBZTtJQUMxQyxPQUFPRCxpQkFBaUJDLEtBQUtGLGFBQWE7QUFDNUMsRUFBRTtBQUVLLE1BQU1LLFlBQVksQ0FBQ0gsS0FBZTtJQUN2QyxPQUFPRCxpQkFBaUJDLEtBQUtILFVBQVUsRUFBRTtBQUMzQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLy4vY29tcG9uZW50cy9sYXllcnMtbWFuaWZlc3QudHM/M2RiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWFuaWZlc3QgPSB7XG4gIDE6IHtcbiAgICBsYXllcnM6IFsnYXNzZXRzL2JhY2tncm91bmQucG5nJywgJ2Fzc2V0cy9mb3JlZ3JvdW5kLmdpZicsICdhc3NldHMvbG9nby5wbmcnXSxcbiAgICB0aHVtYm5haWw6IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQ2dBSUFJQUJBTjNkM2YvLy95SDVCQUVBQUFFQUxBQUFBQUFLQUFnQUFBSU5qQU9ueUp2Mm9KT3JWWHJ6S1FBN1wiLFxuICB9LFxufTtcblxuZXhwb3J0IHR5cGUgTWFuaWZlc3RUeXBlID0gdHlwZW9mIG1hbmlmZXN0O1xuXG5mdW5jdGlvbiBnZXRNYW5pZmVzdEVudHJ5KGlkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG1hbmlmZXN0W051bWJlcihpZCkgYXMga2V5b2YgTWFuaWZlc3RUeXBlXTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFRodW1ibmFpbCA9IChpZDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBnZXRNYW5pZmVzdEVudHJ5KGlkKT8udGh1bWJuYWlsID8/IFwiXCI7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGF5ZXJzID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGdldE1hbmlmZXN0RW50cnkoaWQpPy5sYXllcnMgPz8gW107XG59O1xuIl0sIm5hbWVzIjpbIm1hbmlmZXN0IiwibGF5ZXJzIiwidGh1bWJuYWlsIiwiZ2V0TWFuaWZlc3RFbnRyeSIsImlkIiwiTnVtYmVyIiwiZ2V0VGh1bWJuYWlsIiwiZ2V0TGF5ZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layers-manifest.ts\n");

/***/ }),

/***/ "./layers-api/parse.ts":
/*!*****************************!*\
  !*** ./layers-api/parse.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parse\": () => (/* binding */ parse)\n/* harmony export */ });\n/* harmony import */ var _components_layers_manifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layers-manifest */ \"./components/layers-manifest.ts\");\n/* harmony import */ var buffer_image_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buffer-image-size */ \"buffer-image-size\");\n/* harmony import */ var buffer_image_size__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buffer_image_size__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function parse(id, protocol, host) {\n    const layersUrl = (0,_components_layers_manifest__WEBPACK_IMPORTED_MODULE_0__.getLayers)(String(id));\n    const layers = await Promise.all(layersUrl.map(async (url)=>{\n        const data = await fetch(`${protocol}://${host}/${url}`);\n        const blob = await data.blob();\n        const arraybuffer = await blob.arrayBuffer();\n        const img = Buffer.from(arraybuffer);\n        const { width , height  } = buffer_image_size__WEBPACK_IMPORTED_MODULE_1___default()(img);\n        return {\n            name: url,\n            url: `data:image/${url.split(\".\")[-1]};base64,${img.toString(\"base64\")}`,\n            dimensions: {\n                width,\n                height\n            }\n        };\n    }));\n    return layers;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXllcnMtYXBpL3BhcnNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMEQ7QUFDbkI7QUFFaEMsZUFBZUUsTUFBTUMsRUFBVSxFQUFFQyxRQUFnQixFQUFFQyxJQUFZLEVBQUU7SUFDdEUsTUFBTUMsWUFBWU4sc0VBQVNBLENBQUNPLE9BQU9KO0lBQ25DLE1BQU1LLFNBQVMsTUFBTUMsUUFBUUMsR0FBRyxDQUM5QkosVUFBVUssR0FBRyxDQUFDLE9BQU9DLE1BQWdCO1FBQ25DLE1BQU1DLE9BQU8sTUFBTUMsTUFBTSxDQUFDLEVBQUVWLFNBQVMsR0FBRyxFQUFFQyxLQUFLLENBQUMsRUFBRU8sSUFBSSxDQUFDO1FBQ3ZELE1BQU1HLE9BQU8sTUFBTUYsS0FBS0UsSUFBSTtRQUU1QixNQUFNQyxjQUFjLE1BQU1ELEtBQUtFLFdBQVc7UUFDMUMsTUFBTUMsTUFBTUMsT0FBT0MsSUFBSSxDQUFDSjtRQUN4QixNQUFNLEVBQUVLLE1BQUssRUFBRUMsT0FBTSxFQUFFLEdBQUdyQix3REFBTUEsQ0FBQ2lCO1FBRWpDLE9BQU87WUFDTEssTUFBTVg7WUFDTkEsS0FBSyxDQUFDLFdBQVcsRUFBRUEsSUFBSVksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUVOLElBQUlPLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDeEVDLFlBQVk7Z0JBQ1ZMO2dCQUNBQztZQUNGO1FBQ0Y7SUFDRjtJQUVGLE9BQU9kO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlci8uL2xheWVycy1hcGkvcGFyc2UudHM/MDRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXllck1ldGEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXllclwiO1xuaW1wb3J0IHsgZ2V0TGF5ZXJzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5ZXJzLW1hbmlmZXN0XCI7XG5pbXBvcnQgc2l6ZU9mIGZyb20gXCJidWZmZXItaW1hZ2Utc2l6ZVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2UoaWQ6IHN0cmluZywgcHJvdG9jb2w6IHN0cmluZywgaG9zdDogc3RyaW5nKSB7XG4gIGNvbnN0IGxheWVyc1VybCA9IGdldExheWVycyhTdHJpbmcoaWQpKTtcbiAgY29uc3QgbGF5ZXJzID0gYXdhaXQgUHJvbWlzZS5hbGw8TGF5ZXJNZXRhPihcbiAgICBsYXllcnNVcmwubWFwKGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke3Byb3RvY29sfTovLyR7aG9zdH0vJHt1cmx9YCk7XG4gICAgICBjb25zdCBibG9iID0gYXdhaXQgZGF0YS5ibG9iKCk7XG5cbiAgICAgIGNvbnN0IGFycmF5YnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpO1xuICAgICAgY29uc3QgaW1nID0gQnVmZmVyLmZyb20oYXJyYXlidWZmZXIpO1xuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzaXplT2YoaW1nKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogdXJsLFxuICAgICAgICB1cmw6IGBkYXRhOmltYWdlLyR7dXJsLnNwbGl0KCcuJylbLTFdfTtiYXNlNjQsJHtpbWcudG9TdHJpbmcoJ2Jhc2U2NCcpfWAsXG4gICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH0sXG4gICAgICB9IGFzIExheWVyTWV0YTtcbiAgICB9KVxuICApO1xuICByZXR1cm4gbGF5ZXJzO1xufVxuIl0sIm5hbWVzIjpbImdldExheWVycyIsInNpemVPZiIsInBhcnNlIiwiaWQiLCJwcm90b2NvbCIsImhvc3QiLCJsYXllcnNVcmwiLCJTdHJpbmciLCJsYXllcnMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwidXJsIiwiZGF0YSIsImZldGNoIiwiYmxvYiIsImFycmF5YnVmZmVyIiwiYXJyYXlCdWZmZXIiLCJpbWciLCJCdWZmZXIiLCJmcm9tIiwid2lkdGgiLCJoZWlnaHQiLCJuYW1lIiwic3BsaXQiLCJ0b1N0cmluZyIsImRpbWVuc2lvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layers-api/parse.ts\n");

/***/ }),

/***/ "./pages/animation/[id].tsx":
/*!**********************************!*\
  !*** ./pages/animation/[id].tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Index),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Animation */ \"./components/Animation.tsx\");\n/* harmony import */ var _layers_api_parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layers-api/parse */ \"./layers-api/parse.ts\");\n\n\n\n\nasync function getServerSideProps({ params , res , req  }) {\n    res.setHeader(\"Cache-Control\", \"public, s-maxage=10, stale-while-revalidate=59\");\n    const proto = req.headers[\"x-forwarded-proto\"] || req.connection.encrypted ? \"https\" : \"http\";\n    const layers = await (0,_layers_api_parse__WEBPACK_IMPORTED_MODULE_3__.parse)(String(params.id), proto, req.headers.host);\n    return {\n        props: {\n            layers\n        }\n    };\n}\nfunction Index({ layers  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Animation__WEBPACK_IMPORTED_MODULE_2__.Animation, {\n        layers: layers\n    }, void 0, false, {\n        fileName: \"/Users/raul.calvo.martin/develop/gif-web-tool/server/pages/animation/[id].tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hbmltYXRpb24vW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUUyQjtBQUVOO0FBR3hDLGVBQWVHLG1CQUFtQixFQUFFQyxPQUFNLEVBQUVDLElBQUcsRUFBRUMsSUFBRyxFQUFFLEVBQUU7SUFDN0RELElBQUlFLFNBQVMsQ0FDWCxpQkFDQTtJQUVGLE1BQU1DLFFBQU9GLElBQUlHLE9BQU8sQ0FBQyxvQkFBb0IsSUFBSUgsSUFBSUksVUFBVSxDQUFDQyxTQUFTLEdBQ3ZFLFVBQ0EsTUFBTTtJQUNSLE1BQU1DLFNBQVMsTUFBTVYsd0RBQUtBLENBQUNXLE9BQU9ULE9BQU9VLEVBQUUsR0FBR04sT0FBT0YsSUFBSUcsT0FBTyxDQUFDTSxJQUFJO0lBRXJFLE9BQU87UUFDTEMsT0FBTztZQUNMSjtRQUNGO0lBQ0Y7QUFDRixDQUFDO0FBQ2MsU0FBU0ssTUFBTSxFQUFFTCxPQUFNLEVBQUUsRUFBRTtJQUN4QyxxQkFDRSw4REFBQ1gsNERBQVNBO1FBQUNXLFFBQVFBOzs7Ozs7QUFFdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlci8uL3BhZ2VzL2FuaW1hdGlvbi9baWRdLnRzeD8xNzc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHtBbmltYXRpb259IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FuaW1hdGlvblwiO1xuaW1wb3J0IHsgZ2V0TGF5ZXJzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5ZXJzLW1hbmlmZXN0XCI7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gXCIuLi8uLi9sYXllcnMtYXBpL3BhcnNlXCI7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcywgcmVzLCByZXEgfSkge1xuICByZXMuc2V0SGVhZGVyKFxuICAgIFwiQ2FjaGUtQ29udHJvbFwiLFxuICAgIFwicHVibGljLCBzLW1heGFnZT0xMCwgc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZT01OVwiXG4gICk7XG4gIGNvbnN0IHByb3RvID1yZXEuaGVhZGVyc1tcIngtZm9yd2FyZGVkLXByb3RvXCJdIHx8IHJlcS5jb25uZWN0aW9uLmVuY3J5cHRlZFxuICA/IFwiaHR0cHNcIlxuICA6IFwiaHR0cFwiO1xuICBjb25zdCBsYXllcnMgPSBhd2FpdCBwYXJzZShTdHJpbmcocGFyYW1zLmlkKSwgcHJvdG8sIHJlcS5oZWFkZXJzLmhvc3QpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxheWVycyxcbiAgICB9LFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoeyBsYXllcnMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBbmltYXRpb24gbGF5ZXJzPXtsYXllcnN9Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQW5pbWF0aW9uIiwicGFyc2UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJyZXMiLCJyZXEiLCJzZXRIZWFkZXIiLCJwcm90byIsImhlYWRlcnMiLCJjb25uZWN0aW9uIiwiZW5jcnlwdGVkIiwibGF5ZXJzIiwiU3RyaW5nIiwiaWQiLCJob3N0IiwicHJvcHMiLCJJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/animation/[id].tsx\n");

/***/ }),

/***/ "buffer-image-size":
/*!************************************!*\
  !*** external "buffer-image-size" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("buffer-image-size");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/animation/[id].tsx"));
module.exports = __webpack_exports__;

})();