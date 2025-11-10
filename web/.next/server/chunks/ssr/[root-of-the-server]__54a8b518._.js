module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/di.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$container$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/container/lib/esm/index.js [app-ssr] (ecmascript)");
;
const container = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$container$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"]();
const __TURBOPACK__default__export__ = container;
}),
"[project]/src/services/toast.service.interface.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastServiceServiceId",
    ()=>ToastServiceServiceId
]);
const ToastServiceServiceId = Symbol.for('ToastServiceServiceId');
}),
"[project]/src/services/toast.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$action$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/action.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './di'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$toast$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/toast.service.interface.ts [app-ssr] (ecmascript)");
;
;
;
;
;
class Toasts {
    _active;
    get active() {
        return this._active;
    }
    _items = new Array();
    _dataToHandle = new Map();
    _handleToData = new Map();
    _onChange = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$action$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"]();
    get onChange() {
        return this._onChange;
    }
    add(data) {
        const handle = new ToastHandle(this);
        this.initialize(data);
        this._items.push(data);
        this._dataToHandle.set(data, handle);
        this._handleToData.set(handle, data);
        if (!this._active) {
            this._active = this._items.shift();
            if (this._active) this._active.open = true;
        }
        this._onChange.invoke();
        return handle;
    }
    remove(handle) {
        const data = this._handleToData.get(handle);
        if (!data) return;
        if (this._active == data) {
            if (this._active.onClose) {
                const event = new Event('Dismiss');
                const reason = 'timeout';
                this._active.onClose(event, reason);
            } else this._active.open = false;
        } else {
            const index = this._items.indexOf(data);
            this._items.splice(index, 1);
        }
        this._active = this._items.shift();
        if (this._active) this._active.open = true;
        this._onChange.invoke();
    }
    initialize(data) {
        data.open = false;
        const onClose = data.onClose;
        data.onClose = (event, reason)=>{
            if (onClose) onClose(event, reason);
            const handle = this._dataToHandle.get(data);
            handle?.dismiss();
            const index = this._items.indexOf(data);
            this._items.splice(index, 1);
        };
    }
}
Toasts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectable"])()
], Toasts);
class ToastHandle {
    _toasts;
    constructor(toasts){
        this._toasts = toasts;
    }
    dismiss() {
        this._toasts.remove(this);
    }
}
di.bind(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$toast$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastsServiceId"]).to(Toasts).inSingletonScope();
}),
"[project]/components/Toasts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Toasts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Snackbar/Snackbar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$di$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/di.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$toast$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/toast.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$toast$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/toast.service.interface.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Toasts() {
    const toasts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$di$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$toast$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastServiceServiceId"]);
    const [snackbar, setSnackbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(initialize, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: snackbar
    }, void 0, false, {
        fileName: "[project]/components/Toasts.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
    //TURBOPACK unreachable
    ;
    function onChange() {
        const snackbar = generate(toasts.active);
        setSnackbar(snackbar);
    }
    function initialize() {
        onChange();
        toasts.onChange.add(onChange);
        const handle = toasts.add({
            message: 'Hello, world!',
            autoHideDuration: 2000
        });
        const handle2 = toasts.add({
            message: 'Goodbye, world.',
            autoHideDuration: 2000
        });
    }
    function generate(data) {
        console.log(data);
        return data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ...data
        }, void 0, false, {
            fileName: "[project]/components/Toasts.tsx",
            lineNumber: 31,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false, {
            fileName: "[project]/components/Toasts.tsx",
            lineNumber: 32,
            columnNumber: 9
        }, this);
    }
}
}),
"[project]/components/pages/Container.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toasts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Toasts.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Container({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/pages/Container.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Toasts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/pages/Container.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pages/Container.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/pages/Page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/pages/Container.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function Page({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/components/pages/Page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/services/user.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$di$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/di.ts [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../user.interface'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
class UserService {
    _authentication;
    get authentication() {
        return this._authentication;
    }
    login(authenticationData) {
        this._authentication = authenticationData;
    }
    logout() {
        this._authentication = undefined;
    }
}
UserService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectable"])()
], UserService);
__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$di$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bind(UserServiceId).to(UserService).inSingletonScope();
}),
"[project]/src/services/account.service.interface.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountServiceServiceId",
    ()=>AccountServiceServiceId
]);
const AccountServiceServiceId = Symbol.for('AccountServiceServiceId');
}),
"[project]/src/services/user.service.interface.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserServiceServiceId",
    ()=>UserServiceServiceId
]);
const UserServiceServiceId = Symbol.for('UserServiceServiceId');
}),
"[project]/src/services/base.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BaseService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/user.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/user.service.interface.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$di$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/di.ts [app-ssr] (ecmascript)");
;
;
;
class BaseService {
    static defaultOptions = {};
    static defaultInit = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    _userService;
    get userService() {
        return this._userService;
    }
    constructor(){
        this._userService = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$di$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserServiceServiceId"]);
    }
    get baseUrl() {
        return undefined;
    }
    async post(options) {
        options = {
            ...BaseService.defaultOptions,
            ...options
        };
        options.init = {
            ...BaseService.defaultInit,
            ...options.init
        };
        options.init.method = 'POST';
        options.init.body = JSON.stringify(options.data);
        return this.fetch(options);
    }
    async delete(options) {
        options = {
            ...BaseService.defaultOptions,
            ...options
        };
        options.init = {
            ...BaseService.defaultInit,
            ...options.init
        };
        options.init.method = 'DELETE';
        options.init.body = JSON.stringify(options.data);
        return this.fetch(options);
    }
    async get(options) {
        options = {
            ...BaseService.defaultOptions,
            ...options
        };
        options.init = {
            ...BaseService.defaultInit,
            ...options.init
        };
        options.init.method = 'GET';
        const searchParams = new URLSearchParams(options.data);
        options.url = searchParams.size == 0 ? options.url : `${options.url}?${searchParams.toString()}`;
        return this.fetch(options);
    }
    async put(options) {
        options = {
            ...BaseService.defaultOptions,
            ...options
        };
        options.init = {
            ...BaseService.defaultInit,
            ...options.init
        };
        options.init.method = 'PUT';
        options.init.body = JSON.stringify(options.data);
        return this.fetch(options);
    }
    async fetch(options) {
        options = {
            ...BaseService.defaultOptions,
            ...options
        };
        options.init = {
            ...BaseService.defaultInit,
            ...options.init
        };
        if (this._userService.authentication && this._userService.authentication.accessToken) {
            options.init.headers = {
                ...options.init.headers,
                ...{
                    'Authorization': `Bearer ${this._userService.authentication.accessToken}`
                }
            };
        }
        const url = `${this.baseUrl}${options.url ? options.url : ''}`;
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
}
}),
"[project]/src/services/account.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/account.data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$di$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/di.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$account$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/account.service.interface.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/user.service.interface.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/base.service.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
class AccountService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    get baseUrl() {
        return `http://localhost:3000/accounts`;
    }
    async createAccount(data) {
        return await this.post({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountSchema"],
            data
        });
    }
    async deleteAccount() {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$di$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getAsync(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserServiceServiceId"]);
        if (!user.authentication) return Promise.reject();
        return this.delete({
            url: `/${user.authentication.account_id}`
        });
    }
    getAccount(id) {
        return this.get({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountSchema"],
            url: `/${id}`
        });
    }
    getAccounts(data) {
        return this.get({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountSchema"].array(),
            data
        });
    }
    async updateAccount(data) {
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$di$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserServiceServiceId"]);
        if (!user.authentication) return Promise.reject();
        return this.put({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$account$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountSchema"],
            url: `/${user.authentication.account_id}`,
            data
        });
    }
}
AccountService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectable"])()
], AccountService);
__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$di$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$account$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountServiceServiceId"]).to(AccountService).inSingletonScope();
}),
"[project]/src/services/authentication.service.interface.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthenticationServiceServiceId",
    ()=>AuthenticationServiceServiceId
]);
const AuthenticationServiceServiceId = Symbol.for('AuthenticationServiceServiceId');
}),
"[project]/src/services/authentication.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$authentication$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/authentication.data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$di$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/di.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/user.service.interface.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authentication$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/authentication.service.interface.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/base.service.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
class AuthenticationService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    get baseUrl() {
        return `http://localhost:3000/authentication`;
    }
    async login(data) {
        if (this.userService.authentication) return Promise.reject();
        const authenticationData = await this.post({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$authentication$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthenticationSchema"],
            data
        });
        this.userService.login(authenticationData);
        return authenticationData;
    }
    async logout() {
        if (!this.userService.authentication) return Promise.reject();
        await this.delete({
            url: `/${this.userService.authentication.account_id}`
        });
        this.userService.logout();
    }
    async updateAuthentication(data) {
        const userService = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$di$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserServiceServiceId"]);
        if (!userService.authentication) return Promise.reject();
        return this.put({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$authentication$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthenticationSchema"],
            url: `/${userService.authentication.account_id}`,
            data
        });
    }
}
AuthenticationService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectable"])()
], AuthenticationService);
__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$di$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authentication$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthenticationServiceServiceId"]).to(AuthenticationService).inSingletonScope();
}),
"[project]/app/home/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$Page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/pages/Page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/user.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$account$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/account.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authentication$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/authentication.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$toast$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/toast.service.interface.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$di$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/di.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function HomePage() {
    const toasts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$di$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$toast$2e$service$2e$interface$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastServiceServiceId"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$Page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: "Hello, world!"
    }, void 0, false, {
        fileName: "[project]/app/home/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__54a8b518._.js.map