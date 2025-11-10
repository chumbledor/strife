(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/root/src/DependencyInjection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$container$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/container/lib/esm/index.js [app-client] (ecmascript)");
;
const container = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$container$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"]();
const __TURBOPACK__default__export__ = container;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/components/editor/widgets/Widget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Widget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
;
;
function Widget(param) {
    let { children, ...boxProps } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        width: "100%",
        height: "100%",
        ...boxProps,
        children: children
    }, void 0, false, {
        fileName: "[project]/root/components/editor/widgets/Widget.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = Widget;
var _c;
__turbopack_context__.k.register(_c, "Widget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/components/editor/widgets/AceEditorWidget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AceEditorWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$widgets$2f$Widget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/editor/widgets/Widget.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ace$2d$builds$2f$src$2d$noconflict$2f$ace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ace-builds/src-noconflict/ace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function AceEditorWidget(param) {
    let { ...widgetProps } = param;
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(initializationEffect, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$widgets$2f$Widget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...widgetProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            id: "editor",
            width: "100%",
            height: "100%"
        }, void 0, false, {
            fileName: "[project]/root/components/editor/widgets/AceEditorWidget.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/root/components/editor/widgets/AceEditorWidget.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
    //TURBOPACK unreachable
    ;
    function initializationEffect() {
        var editor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ace$2d$builds$2f$src$2d$noconflict$2f$ace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].edit('editor');
    }
}
_s(AceEditorWidget, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AceEditorWidget;
var _c;
__turbopack_context__.k.register(_c, "AceEditorWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/components/editor/widgets/ProjectWidget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AceEditorWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$widgets$2f$Widget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/editor/widgets/Widget.tsx [app-client] (ecmascript)");
;
;
function AceEditorWidget(param) {
    let { ...widgetProps } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$widgets$2f$Widget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...widgetProps,
        children: "Project"
    }, void 0, false, {
        fileName: "[project]/root/components/editor/widgets/ProjectWidget.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = AceEditorWidget;
var _c;
__turbopack_context__.k.register(_c, "AceEditorWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/components/editor/views/View.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>View
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
;
;
function View(param) {
    let { children, ...boxProps } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        width: "100%",
        height: "100%",
        ...boxProps,
        children: children
    }, void 0, false, {
        fileName: "[project]/root/components/editor/views/View.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = View;
var _c;
__turbopack_context__.k.register(_c, "View");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/components/editor/views/CodeView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CodeView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$widgets$2f$AceEditorWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/editor/widgets/AceEditorWidget.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$widgets$2f$ProjectWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/editor/widgets/ProjectWidget.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$views$2f$View$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/editor/views/View.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Drawer/Drawer.js [app-client] (ecmascript) <export default as Drawer>");
;
;
;
;
;
function CodeView(param) {
    let { ...viewProps } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$views$2f$View$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        display: "flex",
        flexDirection: "row",
        ...viewProps,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__["Drawer"], {
                open: true,
                variant: "persistent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$widgets$2f$ProjectWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/root/components/editor/views/CodeView.tsx",
                    lineNumber: 12,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/root/components/editor/views/CodeView.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$widgets$2f$AceEditorWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/root/components/editor/views/CodeView.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/root/components/editor/views/CodeView.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = CodeView;
var _c;
__turbopack_context__.k.register(_c, "CodeView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/interfaces/IUser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserServiceId",
    ()=>UserServiceId
]);
const UserServiceId = Symbol.for('UserServiceId');
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/src/User.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>User
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$IUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/interfaces/IUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/account.data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
class User {
    get account() {
        return this._account;
    }
    login(accountData) {
        this._account = accountData;
        localStorage.setItem(typeof User, JSON.stringify(this._account));
    }
    logout() {
        this._account = undefined;
        localStorage.removeItem(typeof User);
    }
    load() {
        if (!localStorage) return;
        const accountJson = localStorage.getItem(typeof User);
        if (!accountJson) return;
        const accountObject = JSON.parse(accountJson);
        if (!accountObject) return;
        const accountData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountSchema"].parse(accountObject);
        return accountData;
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_account", this.load());
    }
}
;
User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectable"])()
], User);
__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$IUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserServiceId"]).to(User).inSingletonScope();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/src/collections/Queue.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Queue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$action$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/action.js [app-client] (ecmascript)");
;
;
class Queue {
    get head() {
        return this._items.at(0);
    }
    get headChangedEvent() {
        return this._headChangedEvent;
    }
    get items() {
        return this._items;
    }
    enqueue(item) {
        const index = this._items.push(item) - 1;
        if (index != 0) return index;
        const head = item;
        this._headChangedEvent.invoke(undefined, head);
        return index;
    }
    dequeue() {
        const item = this._items.shift();
        const head = this._items.at(0);
        this._headChangedEvent.invoke(undefined, head);
        return item;
    }
    delete(item) {
        const index = this._items.indexOf(item);
        if (index < 0) return;
        if (index == 0) {
            this.dequeue();
            return;
        }
        this._items.splice(index, 1);
    }
    contains(item) {
        return this._items.indexOf(item) >= 0;
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_headChangedEvent", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$action$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"]());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_items", new Array());
    }
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/src/managers/QueueManager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueueManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$collections$2f$Queue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/collections/Queue.ts [app-client] (ecmascript)");
;
;
class QueueManager {
    get version() {
        return this._version;
    }
    get head() {
        return this._queue.head;
    }
    get headChangedEvent() {
        return this._queue.headChangedEvent;
    }
    enqueue(item) {
        this.configure(item);
        return this._queue.enqueue(item);
    }
    dequeue() {
        return this._queue.dequeue();
    }
    delete(item) {
        return this._queue.delete(item);
    }
    contains(item) {
        return this._queue.contains(item);
    }
    onHeadChanged(item) {
        if (this._active) this.deactivate(this._active);
        this._version++;
        this._active = item;
        if (this._active) this.activate(this._active);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_version", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_queue", new __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$collections$2f$Queue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_active", void 0);
        this.headChangedEvent.add(this.onHeadChanged.bind(this));
    }
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/interfaces/managers/IToastQueueManager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastQueueManagerServiceId",
    ()=>ToastQueueManagerServiceId
]);
const ToastQueueManagerServiceId = Symbol.for('ToastQueueManagerServiceId');
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/src/managers/ToastQueueManager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$managers$2f$QueueManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/managers/QueueManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$managers$2f$IToastQueueManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/interfaces/managers/IToastQueueManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-client] (ecmascript)");
;
;
;
;
;
class ToastQueueManager extends __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$managers$2f$QueueManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    configure(item) {
        const onClose = item.onClose;
        item.onClose = (event, reason)=>{
            if (onClose) onClose(event, reason);
            if (this.head == item) this.dequeue();
        };
    }
    activate(item) {
        item.open = true;
    }
    deactivate(item) {
        item.open = false;
    }
}
ToastQueueManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectable"])()
], ToastQueueManager);
__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$managers$2f$IToastQueueManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastQueueManagerServiceId"]).to(ToastQueueManager).inSingletonScope();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/src/services/BaseService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BaseService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$User$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/User.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$IUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/interfaces/IUser.ts [app-client] (ecmascript)");
;
;
;
;
class BaseService {
    get user() {
        return this._user;
    }
    get baseUrl() {
        return undefined;
    }
    async post(options) {
        options = {
            ...BaseService.defaultOptions,
            ...options
        };
        options.data = this.filter(options.data);
        options.init = {
            ...BaseService.defaultInit,
            ...options.init
        };
        options.init.method = 'POST';
        options.init.body = options.data ? JSON.stringify(options.data) : BaseService.defaultBody;
        return this.fetch(options);
    }
    async delete(options) {
        options = {
            ...BaseService.defaultOptions,
            ...options
        };
        options.data = this.filter(options.data);
        options.init = {
            ...BaseService.defaultInit,
            ...options.init
        };
        options.init.method = 'DELETE';
        options.init.body = options.data ? JSON.stringify(options.data) : BaseService.defaultBody;
        return this.fetch(options);
    }
    async get(options) {
        options = {
            ...BaseService.defaultOptions,
            ...options
        };
        options.data = this.filter(options.data);
        options.init = {
            ...BaseService.defaultInit,
            ...options.init
        };
        options.init.method = 'GET';
        const searchParams = new URLSearchParams(options.data);
        options.url = searchParams.size == 0 ? options.url : "".concat(options.url, "?").concat(searchParams.toString());
        return this.fetch(options);
    }
    async put(options) {
        options = {
            ...BaseService.defaultOptions,
            ...options
        };
        options.data = this.filter(options.data);
        options.init = {
            ...BaseService.defaultInit,
            ...options.init
        };
        options.init.method = 'PUT';
        options.init.body = options.data ? JSON.stringify(options.data) : BaseService.defaultBody;
        return this.fetch(options);
    }
    async fetch(options) {
        var _this__user_account_authentication, _this__user_account;
        options = {
            ...BaseService.defaultOptions,
            ...options
        };
        options.data = this.filter(options.data);
        options.init = {
            ...BaseService.defaultInit,
            ...options.init
        };
        if (this._user.account && ((_this__user_account = this._user.account) === null || _this__user_account === void 0 ? void 0 : (_this__user_account_authentication = _this__user_account.authentication) === null || _this__user_account_authentication === void 0 ? void 0 : _this__user_account_authentication.accessToken)) {
            options.init.headers = {
                ...options.init.headers,
                ...{
                    'Authorization': "Bearer ".concat(this._user.account.authentication.accessToken)
                }
            };
        }
        const url = "".concat(this.baseUrl).concat(options.url ? options.url : '');
        console.log(JSON.stringify(options.init));
        const response = await fetch(url, options.init);
        if (!response.ok) {
            const json = await response.json();
            return Promise.reject(json.message);
        }
        const typed = options;
        if (!typed.schema) return;
        const json = await response.json();
        return await typed.schema.parseAsync(json);
    }
    filter(data) {
        if (!data) return undefined;
        const entries = Object.entries(data).filter((param)=>{
            let [key, value] = param;
            return value !== undefined;
        });
        return Object.fromEntries(entries);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_user", void 0);
        this._user = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$IUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserServiceId"]);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(BaseService, "defaultOptions", {
    url: ''
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(BaseService, "defaultInit", {
    headers: {
        'Content-Type': 'application/json'
    }
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(BaseService, "defaultBody", JSON.stringify({}));
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/interfaces/services/IAccountService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountServiceServiceId",
    ()=>AccountServiceServiceId
]);
const AccountServiceServiceId = Symbol.for('AccountServiceServiceId');
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/src/services/AccountService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$BaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/services/BaseService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$services$2f$IAccountService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/interfaces/services/IAccountService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/account.data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
class AccountService extends __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$BaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    get baseUrl() {
        return "http://localhost:3000/accounts";
    }
    async createAccount(data) {
        return await this.post({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountSchema"],
            data
        });
    }
    async deleteAccount() {
        if (!this.user.account) return Promise.reject();
        return this.delete({
            url: "/".concat(this.user.account.id)
        });
    }
    getAccount(id) {
        return this.get({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountSchema"],
            url: "/".concat(id)
        });
    }
    getAccounts(data) {
        return this.get({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountSchema"].array(),
            data
        });
    }
    async updateAccount(data) {
        if (!this.user.account) return Promise.reject();
        return this.put({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountSchema"],
            url: "/".concat(this.user.account.id),
            data
        });
    }
}
AccountService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectable"])()
], AccountService);
__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$services$2f$IAccountService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountServiceServiceId"]).to(AccountService).inSingletonScope();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/interfaces/services/IAuthenticationService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthenticationServiceServiceId",
    ()=>AuthenticationServiceServiceId
]);
const AuthenticationServiceServiceId = Symbol.for('AuthenticationServiceServiceId');
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/src/services/AuthenticationService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$BaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/services/BaseService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$services$2f$IAuthenticationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/interfaces/services/IAuthenticationService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/account.data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
class AuthenticationService extends __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$BaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    get baseUrl() {
        return "http://localhost:3000/authentication";
    }
    async login(data) {
        if (this.user.account) return Promise.reject();
        const accountData = await this.post({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountSchema"],
            data
        });
        this.user.login(accountData);
        return accountData;
    }
    async logout() {
        if (!this.user.account) return Promise.reject();
        try {
            await this.delete({
                url: "/".concat(this.user.account.id)
            });
        } finally{
            this.user.logout();
        }
    }
    async refresh() {
        if (!this.user.account) return Promise.reject();
        const accountData = await this.post({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountSchema"],
            url: '/refresh',
            init: {
                credentials: 'include'
            }
        });
        this.user.login(accountData);
        return accountData;
    }
    async updateAuthentication(data) {
        if (!this.user.account) return Promise.reject();
        return this.put({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountSchema"],
            url: "/".concat(this.user.account.id),
            data
        });
    }
}
AuthenticationService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectable"])()
], AuthenticationService);
__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$services$2f$IAuthenticationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthenticationServiceServiceId"]).to(AuthenticationService).inSingletonScope();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/interfaces/services/IProjectService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectServiceServiceId",
    ()=>ProjectServiceServiceId
]);
const ProjectServiceServiceId = Symbol.for('ProjectServiceServiceId');
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/src/services/ProjectService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$BaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/services/BaseService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$IUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/interfaces/IUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$services$2f$IProjectService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/interfaces/services/IProjectService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$project$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/project.data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class ProjectService extends __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$BaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    get baseUrl() {
        return "http://localhost:3000/projects";
    }
    async createProject(data) {
        return await this.post({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$project$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectSchema"],
            data
        });
    }
    async deleteProject(id) {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAsync(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$IUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserServiceId"]);
        if (!user.account) return Promise.reject();
        return this.delete({
            url: "/".concat(id)
        });
    }
    getProject(id) {
        return this.get({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$project$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectSchema"],
            url: "/".concat(id)
        });
    }
    getProjects(data) {
        return this.get({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$project$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectSchema"].array(),
            data
        });
    }
    async updateProject(id, data) {
        if (!this.user.account) return Promise.reject();
        return this.put({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$project$2e$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectSchema"],
            url: "/".concat(id),
            data
        });
    }
}
ProjectService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectable"])()
], ProjectService);
__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$services$2f$IProjectService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectServiceServiceId"]).to(ProjectService).inSingletonScope();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/components/Toasts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Toasts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$managers$2f$ToastQueueManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/managers/ToastQueueManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$managers$2f$IToastQueueManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/interfaces/managers/IToastQueueManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Snackbar/Snackbar.js [app-client] (ecmascript) <export default as Snackbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Toasts(param) {
    let {} = param;
    _s();
    const toastQueueManager = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$managers$2f$IToastQueueManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastQueueManagerServiceId"]);
    const [snackbar, setSnackbar] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(initializationEffect, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: snackbar
    }, void 0, false, {
        fileName: "[project]/root/components/Toasts.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
    //TURBOPACK unreachable
    ;
    function onHeadChanged() {
        const snackbar = toastQueueManager.head ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__["Snackbar"], {
            ...toastQueueManager.head
        }, toastQueueManager.version, false, {
            fileName: "[project]/root/components/Toasts.tsx",
            lineNumber: 21,
            columnNumber: 9
        }, this) : undefined;
        setSnackbar(snackbar);
    }
    function initializationEffect() {
        onHeadChanged();
        toastQueueManager.headChangedEvent.add(onHeadChanged);
    }
}
_s(Toasts, "iuZUd18LKqo7TT/zNVe9V6MduV0=");
_c = Toasts;
var _c;
__turbopack_context__.k.register(_c, "Toasts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/components/page/Page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$managers$2f$ToastQueueManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/managers/ToastQueueManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$AccountService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/services/AccountService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$AuthenticationService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/services/AuthenticationService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$ProjectService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/services/ProjectService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$User$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/User.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@root/components/navigation/TopAppBar'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$Toasts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/Toasts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
'use client';
;
;
;
;
;
;
;
;
;
function Page(param) {
    let { children, appBarChildren } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                flexGrow: 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrimaryAppBar, {
                    children: appBarChildren
                }, void 0, false, {
                    fileName: "[project]/root/components/page/Page.tsx",
                    lineNumber: 20,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/root/components/page/Page.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$Toasts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/root/components/page/Page.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/root/components/page/Page.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/components/page/AuthenticatedPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthenticatedPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$User$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/User.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$IUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/interfaces/IUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$page$2f$Page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/page/Page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function AuthenticatedPage(param) {
    let { ...pageProps } = param;
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$IUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserServiceId"]);
    if (!user.account) {
        const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
        const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
        router.replace("/login?redirect=".concat(pathname));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {}, void 0, false, {
            fileName: "[project]/root/components/page/AuthenticatedPage.tsx",
            lineNumber: 18,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$page$2f$Page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...pageProps
    }, void 0, false, {
        fileName: "[project]/root/components/page/AuthenticatedPage.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_c = AuthenticatedPage;
var _c;
__turbopack_context__.k.register(_c, "AuthenticatedPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/root/components/generic/EnumTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EnumTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tab/Tab.js [app-client] (ecmascript) <export default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tabs/Tabs.js [app-client] (ecmascript) <export default as Tabs>");
;
;
function EnumTabs(param) {
    let { type, ...tabsProps } = param;
    const entries = Object.entries(type).filter((param)=>{
        let [key, value] = param;
        return typeof value === 'number';
    });
    const children = entries.map((param, index)=>{
        let [key, value] = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
            label: key,
            value: value
        }, index, false, {
            fileName: "[project]/root/components/generic/EnumTabs.tsx",
            lineNumber: 13,
            columnNumber: 82
        }, this);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"], {
        ...tabsProps,
        children: children
    }, void 0, false, {
        fileName: "[project]/root/components/generic/EnumTabs.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_c = EnumTabs;
var _c;
__turbopack_context__.k.register(_c, "EnumTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/projects/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$views$2f$CodeView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/editor/views/CodeView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$page$2f$AuthenticatedPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/page/AuthenticatedPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$services$2f$IProjectService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/interfaces/services/IProjectService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/AppBar/AppBar.js [app-client] (ecmascript) <export default as AppBar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$generic$2f$EnumTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/generic/EnumTabs.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
var EditorTabs = /*#__PURE__*/ function(EditorTabs) {
    EditorTabs[EditorTabs["Code"] = 0] = "Code";
    EditorTabs[EditorTabs["Scene"] = 1] = "Scene";
    EditorTabs[EditorTabs["Play"] = 2] = "Play";
    return EditorTabs;
}(EditorTabs || {});
function ProjectPage(param) {
    let { params } = param;
    _s();
    const { id } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(params);
    const projectService = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$interfaces$2f$services$2f$IProjectService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectServiceServiceId"]);
    const [project, setProject] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState();
    const [tab, setTab] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(initializationEffect, []);
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const isDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])(theme.breakpoints.up('md'));
    let content;
    switch(tab){
        case 0:
            content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$views$2f$CodeView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/projects/[id]/page.tsx",
                lineNumber: 35,
                columnNumber: 17
            }, this);
            break;
    }
    const appBarChildren = isDesktop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                paddingX: "32px",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "subtitle1",
                        children: project === null || project === void 0 ? void 0 : project.name
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[id]/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "subtitle2",
                        children: project === null || project === void 0 ? void 0 : project.description
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[id]/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/[id]/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                flexGrow: 1,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$generic$2f$EnumTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: EditorTabs,
                    value: tab,
                    onChange: onTabChange,
                    textColor: "inherit",
                    indicatorColor: "secondary",
                    centered: true
                }, void 0, false, {
                    fileName: "[project]/app/projects/[id]/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/projects/[id]/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/projects/[id]/page.tsx",
        lineNumber: 40,
        columnNumber: 7
    }, this) : undefined;
    const footerAppBar = !isDesktop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__["AppBar"], {
        position: "static",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingY: "8px",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$generic$2f$EnumTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: EditorTabs,
                value: tab,
                onChange: onTabChange,
                textColor: "inherit",
                indicatorColor: "secondary",
                centered: true
            }, void 0, false, {
                fileName: "[project]/app/projects/[id]/page.tsx",
                lineNumber: 54,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/projects/[id]/page.tsx",
            lineNumber: 53,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/projects/[id]/page.tsx",
        lineNumber: 52,
        columnNumber: 7
    }, this) : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$page$2f$AuthenticatedPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        appBarChildren: appBarChildren,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                height: "100%",
                display: "flex",
                flexDirection: "row",
                children: content
            }, void 0, false, {
                fileName: "[project]/app/projects/[id]/page.tsx",
                lineNumber: 60,
                columnNumber: 5
            }, this),
            footerAppBar
        ]
    }, void 0, true, {
        fileName: "[project]/app/projects/[id]/page.tsx",
        lineNumber: 59,
        columnNumber: 10
    }, this);
    //TURBOPACK unreachable
    ;
    function onTabChange(event, value) {
        setTab(value);
    }
    function initializationEffect() {
        getProject();
    }
    async function getProject() {
        const projectData = await projectService.getProject(id);
        setProject(projectData);
        return projectData;
    }
}
_s(ProjectPage, "bPItH9NQbJYIm9Q7byvC8qHYS+Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"]
    ];
});
_c = ProjectPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_aa4da9af._.js.map