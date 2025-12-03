module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[externals]/mongoose [external] (mongoose, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}),
"[project]/root/src/User.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>User
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Account$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Account$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/Account.data.js [app-ssr] (ecmascript) <export * as Account>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-ssr] (ecmascript)");
;
;
;
class User {
    _accountData = this.load();
    get accountData() {
        return this._accountData;
    }
    login(accountData) {
        this._accountData = accountData;
        localStorage.setItem(typeof User, JSON.stringify(this._accountData));
    }
    logout() {
        this._accountData = undefined;
        localStorage.removeItem(typeof User);
    }
    load() {
        if (!localStorage) return;
        const accountJson = localStorage.getItem(typeof User);
        if (!accountJson) return;
        const accountObject = JSON.parse(accountJson);
        if (!accountObject) return;
        const accountData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Account$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Account$3e$__["Account"].Schema.parse(accountObject);
        return accountData;
    }
}
User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectable"])()
], User);
}),
"[project]/root/src/di/UserInjector.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserServiceId",
    ()=>UserServiceId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$User$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/User.ts [app-ssr] (ecmascript)");
;
;
const UserServiceId = Symbol.for('UserServiceId');
__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bind(UserServiceId).to(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$User$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).inSingletonScope();
}),
"[project]/root/src/services/BaseService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseService",
    ()=>BaseService,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$UserInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/di/UserInjector.ts [app-ssr] (ecmascript)");
;
;
class BaseService {
    static defaultOptions = {
        url: ''
    };
    static defaultInit = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    static defaultBody = JSON.stringify({});
    _user = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$UserInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserServiceId"]);
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
        options.url = searchParams.size == 0 ? options.url : `${options.url}?${searchParams.toString()}`;
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
        const self = this;
        options = {
            ...BaseService.defaultOptions,
            ...options
        };
        options.data = this.filter(options.data);
        options.init = {
            ...BaseService.defaultInit,
            ...options.init
        };
        if (this._user.accountData && this._user.accountData?.authentication?.accessToken) {
            options.init.headers = {
                ...options.init.headers,
                ...{
                    'Authorization': `Bearer ${this._user.accountData.authentication.accessToken}`
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
    filter(data) {
        if (!data) return undefined;
        const entries = Object.entries(data).filter(([key, value])=>value !== undefined);
        return Object.fromEntries(entries);
    }
}
const __TURBOPACK__default__export__ = BaseService;
}),
"[project]/root/src/services/ProjectService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectService",
    ()=>ProjectService,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$BaseService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/services/BaseService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Project$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Project$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/Project.data.js [app-ssr] (ecmascript) <export * as Project>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-ssr] (ecmascript)");
;
;
;
;
class ProjectService extends __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$BaseService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    get baseUrl() {
        return `http://localhost:3000/projects`;
    }
    createProject(createData) {
        return this.post({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Project$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Project$3e$__["Project"].Schema,
            data: createData
        });
    }
    deleteProject(projectId) {
        if (!this.user.accountData) return Promise.reject();
        return this.delete({
            url: `/${projectId}`
        });
    }
    getProject(projectId) {
        return this.get({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Project$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Project$3e$__["Project"].Schema,
            url: `/${projectId}`
        });
    }
    getProjects(getData) {
        return this.get({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Project$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Project$3e$__["Project"].Schema.array(),
            data: getData
        });
    }
    updateProject(projectId, updateData) {
        if (!this.user.accountData) return Promise.reject();
        return this.put({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Project$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Project$3e$__["Project"].Schema,
            url: `/${projectId}`,
            data: updateData
        });
    }
}
ProjectService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectable"])()
], ProjectService);
const __TURBOPACK__default__export__ = ProjectService;
}),
"[project]/root/src/di/services/ProjectServiceInjector.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectServiceServiceId",
    ()=>ProjectServiceServiceId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$ProjectService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/services/ProjectService.ts [app-ssr] (ecmascript)");
;
;
const ProjectServiceServiceId = Symbol.for('ProjectServiceServiceId');
__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bind(ProjectServiceServiceId).to(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$ProjectService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).inSingletonScope();
}),
"[project]/root/components/generic/EnumTabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EnumTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tab/Tab.js [app-ssr] (ecmascript) <export default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tabs/Tabs.js [app-ssr] (ecmascript) <export default as Tabs>");
;
;
function EnumTabs({ type, ...tabsProps }) {
    const entries = Object.entries(type).filter(([key, value])=>typeof value === 'number');
    const children = entries.map(([key, value], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
            label: key,
            value: value
        }, index, false, {
            fileName: "[project]/root/components/generic/EnumTabs.tsx",
            lineNumber: 13,
            columnNumber: 82
        }, this));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"], {
        ...tabsProps,
        children: children
    }, void 0, false, {
        fileName: "[project]/root/components/generic/EnumTabs.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
}),
"[project]/root/src/managers/ContextMenuManager.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextMenuManager",
    ()=>ContextMenuManager,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Event$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/Event.js [app-ssr] (ecmascript) <export * as Event>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-ssr] (ecmascript)");
;
;
;
class ContextMenuManager {
    _version = 0;
    get version() {
        return this._version;
    }
    _contextMenuData;
    get contextMenuData() {
        return this._contextMenuData;
    }
    _contextMenuDataChangedEvent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Event$3e$__["Event"].Action();
    get contextMenuDataChangedEvent() {
        return this._contextMenuDataChangedEvent;
    }
    request(contextMenuData) {
        this._version++;
        this._contextMenuData = contextMenuData;
        this._contextMenuDataChangedEvent.invoke(undefined, this._contextMenuData);
    }
    dismiss() {
        this._version++;
        this._contextMenuData = undefined;
        this._contextMenuDataChangedEvent.invoke(undefined, this._contextMenuData);
    }
}
ContextMenuManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectable"])()
], ContextMenuManager);
const __TURBOPACK__default__export__ = ContextMenuManager;
}),
"[project]/root/src/di/managers/ContextMenuManagerInjector.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextMenuManagerServiceId",
    ()=>ContextMenuManagerServiceId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$managers$2f$ContextMenuManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/managers/ContextMenuManager.ts [app-ssr] (ecmascript)");
;
;
const ContextMenuManagerServiceId = Symbol.for('ContextMenuManagerServiceId');
__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bind(ContextMenuManagerServiceId).to(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$managers$2f$ContextMenuManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).inSingletonScope();
}),
"[project]/root/components/ContextMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextMenu",
    ()=>ContextMenu,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$managers$2f$ContextMenuManagerInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/di/managers/ContextMenuManagerInjector.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$managers$2f$ContextMenuManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/managers/ContextMenuManager.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Menu/Menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function ContextMenu({ ...menuProps }) {
    const contextMenuManager = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$managers$2f$ContextMenuManagerInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuManagerServiceId"]);
    const [contextMenuData, setContextMenuData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(initializationEffect, []);
    let { open, anchorReference, anchorPosition, ...otherMenuProps } = {
        ...menuProps,
        ...contextMenuData?.menuProps
    };
    open = open ?? contextMenuData != undefined;
    anchorReference = anchorReference ?? 'anchorPosition';
    anchorPosition = anchorPosition ?? {
        top: contextMenuData?.event.clientY ?? 0,
        left: contextMenuData?.event.clientX ?? 0
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
        open: open,
        onClose: onClose,
        anchorReference: anchorReference,
        anchorPosition: anchorPosition,
        ...otherMenuProps,
        children: contextMenuData?.content
    }, contextMenuManager.version, false, {
        fileName: "[project]/root/components/ContextMenu.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
    //TURBOPACK unreachable
    ;
    function initializationEffect() {
        setContextMenuData(contextMenuManager.contextMenuData);
        contextMenuManager.contextMenuDataChangedEvent.add(setContextMenuData);
        return cleanupEffect;
    }
    function cleanupEffect() {
        contextMenuManager.contextMenuDataChangedEvent.remove(setContextMenuData);
    }
    function onClose() {
        contextMenuManager.dismiss();
    }
}
const __TURBOPACK__default__export__ = ContextMenu;
}),
"[project]/root/src/services/AuthenticationService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthenticationService",
    ()=>AuthenticationService,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$BaseService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/services/BaseService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Account$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Account$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/Account.data.js [app-ssr] (ecmascript) <export * as Account>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-ssr] (ecmascript)");
;
;
;
;
class AuthenticationService extends __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$BaseService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    get baseUrl() {
        return `http://localhost:3000/authentication`;
    }
    async login(loginData) {
        if (this.user.accountData) return Promise.reject();
        const accountData = await this.post({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Account$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Account$3e$__["Account"].Schema,
            data: loginData
        });
        this.user.login(accountData);
        return accountData;
    }
    async logout() {
        if (!this.user.accountData) return Promise.reject();
        try {
            await this.delete({
                url: `/${this.user.accountData.id}`
            });
        } finally{
            this.user.logout();
        }
    }
    async refresh() {
        if (!this.user.accountData) return Promise.reject();
        const accountData = await this.post({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Account$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Account$3e$__["Account"].Schema,
            url: '/refresh',
            init: {
                credentials: 'include'
            }
        });
        this.user.login(accountData);
        return accountData;
    }
    async updateAuthentication(updateData) {
        if (!this.user.accountData) return Promise.reject();
        return this.put({
            schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Account$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Account$3e$__["Account"].Schema,
            url: `/${this.user.accountData.id}`,
            data: updateData
        });
    }
}
AuthenticationService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectable"])()
], AuthenticationService);
const __TURBOPACK__default__export__ = AuthenticationService;
}),
"[project]/root/src/di/services/AuthenticationServiceInjector.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthenticationServiceServiceId",
    ()=>AuthenticationServiceServiceId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$AuthenticationService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/services/AuthenticationService.ts [app-ssr] (ecmascript)");
;
;
const AuthenticationServiceServiceId = Symbol.for('AuthenticationServiceServiceId');
__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bind(AuthenticationServiceServiceId).to(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$services$2f$AuthenticationService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).inSingletonScope();
}),
"[project]/root/components/account/AccountAvatar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountAvatar",
    ()=>AccountAvatar,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Person$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Person.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Avatar/Avatar.js [app-ssr] (ecmascript) <export default as Avatar>");
;
;
;
function AccountAvatar({ accountData, ...avatarProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
        ...avatarProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Person$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/root/components/account/AccountAvatar.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/root/components/account/AccountAvatar.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
const __TURBOPACK__default__export__ = AccountAvatar;
}),
"[project]/root/components/Logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript) <export default as Typography>");
'use client';
;
;
function Logo({ ...typographyProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        component: "a",
        href: "/",
        variant: "h2",
        align: "center",
        fontWeight: 700,
        ...typographyProps,
        children: "strife"
    }, void 0, false, {
        fileName: "[project]/root/components/Logo.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
const __TURBOPACK__default__export__ = Logo;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/root/components/navigation/PrimaryAppBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrimaryAppBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$services$2f$AuthenticationServiceInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/di/services/AuthenticationServiceInjector.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$UserInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/di/UserInjector.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$account$2f$AccountAvatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/account/AccountAvatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/AppBar/AppBar.js [app-ssr] (ecmascript) <export default as AppBar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Divider/Divider.js [app-ssr] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Menu/Menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-ssr] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Toolbar/Toolbar.js [app-ssr] (ecmascript) <export default as Toolbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function PrimaryAppBar({ children, ...appBarProps }) {
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$UserInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserServiceId"]);
    const authenticationService = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$services$2f$AuthenticationServiceInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthenticationServiceServiceId"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isUserMenuOpen, setIsUserMenuOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const userMenuAchorRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__["AppBar"], {
        position: "static",
        ...appBarProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__["Toolbar"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    align: "left",
                    variant: "h6"
                }, void 0, false, {
                    fileName: "[project]/root/components/navigation/PrimaryAppBar.tsx",
                    lineNumber: 21,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        flexGrow: 1
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/root/components/navigation/PrimaryAppBar.tsx",
                    lineNumber: 22,
                    columnNumber: 7
                }, this),
                user && user.accountData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            ref: userMenuAchorRef,
                            onClick: onClickOpenUserMenu,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$account$2f$AccountAvatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                accountData: user.accountData
                            }, void 0, false, {
                                fileName: "[project]/root/components/navigation/PrimaryAppBar.tsx",
                                lineNumber: 27,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/root/components/navigation/PrimaryAppBar.tsx",
                            lineNumber: 26,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            anchorEl: userMenuAchorRef.current,
                            open: isUserMenuOpen,
                            onClose: onCloseUserMenu,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                    onClick: onClickLogout,
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/root/components/navigation/PrimaryAppBar.tsx",
                                    lineNumber: 30,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {}, void 0, false, {
                                    fileName: "[project]/root/components/navigation/PrimaryAppBar.tsx",
                                    lineNumber: 31,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                    onClick: onClickRefreshAccessToken,
                                    children: "Refresh Access Token"
                                }, void 0, false, {
                                    fileName: "[project]/root/components/navigation/PrimaryAppBar.tsx",
                                    lineNumber: 32,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                    onClick: onClickClearLocalStorage,
                                    children: "Clear Local Storage"
                                }, void 0, false, {
                                    fileName: "[project]/root/components/navigation/PrimaryAppBar.tsx",
                                    lineNumber: 33,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/root/components/navigation/PrimaryAppBar.tsx",
                            lineNumber: 29,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/root/components/navigation/PrimaryAppBar.tsx",
                    lineNumber: 25,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    color: "inherit",
                    href: "/login",
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/root/components/navigation/PrimaryAppBar.tsx",
                    lineNumber: 36,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/root/components/navigation/PrimaryAppBar.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/root/components/navigation/PrimaryAppBar.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
    //TURBOPACK unreachable
    ;
    function onClickOpenUserMenu() {
        setIsUserMenuOpen(true);
    }
    function onCloseUserMenu() {
        setIsUserMenuOpen(false);
    }
    async function onClickLogout() {
        try {
            await authenticationService.logout();
        } finally{
            router.refresh();
        }
    }
    async function onClickRefreshAccessToken() {
        const accountData = await authenticationService.refresh();
    }
    function onClickClearLocalStorage() {
        localStorage.clear();
    }
}
}),
"[project]/root/components/navigation/SecondaryAppBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SecondaryAppBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/AppBar/AppBar.js [app-ssr] (ecmascript) <export default as AppBar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Toolbar/Toolbar.js [app-ssr] (ecmascript) <export default as Toolbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function SecondaryAppBar({ children, ...appBarProps }) {
    return children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__["AppBar"], {
        position: "static",
        ...appBarProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__["Toolbar"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/root/components/navigation/SecondaryAppBar.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/root/components/navigation/SecondaryAppBar.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {}, void 0, false, {
        fileName: "[project]/root/components/navigation/SecondaryAppBar.tsx",
        lineNumber: 13,
        columnNumber: 7
    }, this);
}
}),
"[project]/root/src/collections/Queue.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Queue",
    ()=>Queue,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Event$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/Event.js [app-ssr] (ecmascript) <export * as Event>");
;
class Queue {
    get head() {
        return this._items.at(0);
    }
    _headChangedEvent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Event$3e$__["Event"].Action();
    get headChangedEvent() {
        return this._headChangedEvent;
    }
    _items = new Array();
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
}
const __TURBOPACK__default__export__ = Queue;
}),
"[project]/root/src/managers/QueueManager.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueueManager",
    ()=>QueueManager,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$collections$2f$Queue$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/collections/Queue.ts [app-ssr] (ecmascript)");
;
class QueueManager {
    _version = 0;
    get version() {
        return this._version;
    }
    get head() {
        return this._queue.head;
    }
    get headChangedEvent() {
        return this._queue.headChangedEvent;
    }
    _queue = new __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$collections$2f$Queue$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
    _active;
    constructor(){
        this.headChangedEvent.add(this.onHeadChanged.bind(this));
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
}
const __TURBOPACK__default__export__ = QueueManager;
}),
"[project]/root/src/managers/ToastQueueManager.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastQueueManager",
    ()=>ToastQueueManager,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$managers$2f$QueueManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/managers/QueueManager.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-ssr] (ecmascript)");
;
;
;
class ToastQueueManager extends __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$managers$2f$QueueManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
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
ToastQueueManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectable"])()
], ToastQueueManager);
const __TURBOPACK__default__export__ = ToastQueueManager;
}),
"[project]/root/src/di/managers/ToastQueueManagerInjector.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastQueueManagerServiceId",
    ()=>ToastQueueManagerServiceId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$managers$2f$ToastQueueManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/managers/ToastQueueManager.ts [app-ssr] (ecmascript)");
;
;
const ToastQueueManagerServiceId = Symbol.for('ToastQueueManagerServiceId');
__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bind(ToastQueueManagerServiceId).to(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$managers$2f$ToastQueueManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).inSingletonScope();
}),
"[project]/root/components/Toasts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toasts",
    ()=>Toasts,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$managers$2f$ToastQueueManagerInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/di/managers/ToastQueueManagerInjector.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$managers$2f$ToastQueueManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/managers/ToastQueueManager.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Snackbar/Snackbar.js [app-ssr] (ecmascript) <export default as Snackbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Toasts({}) {
    const toastQueueManager = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$managers$2f$ToastQueueManagerInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastQueueManagerServiceId"]);
    const [snackbar, setSnackbar] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(initializationEffect, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: snackbar
    }, void 0, false, {
        fileName: "[project]/root/components/Toasts.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
    //TURBOPACK unreachable
    ;
    function initializationEffect() {
        onHeadChanged();
        toastQueueManager.headChangedEvent.add(onHeadChanged);
        return cleanupEffect;
    }
    function cleanupEffect() {
        toastQueueManager.headChangedEvent.remove(onHeadChanged);
    }
    function onHeadChanged() {
        const snackbar = toastQueueManager.head ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__["Snackbar"], {
            ...toastQueueManager.head
        }, toastQueueManager.version, false, {
            fileName: "[project]/root/components/Toasts.tsx",
            lineNumber: 31,
            columnNumber: 9
        }, this) : undefined;
        setSnackbar(snackbar);
    }
}
const __TURBOPACK__default__export__ = Toasts;
}),
"[project]/root/src/managers/QueryClientManager.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryClientManager",
    ()=>QueryClientManager,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_metadata__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript) <export __metadata as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-ssr] (ecmascript)");
;
;
;
;
class QueryClientManager {
    _queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]();
    get queryClient() {
        return this._queryClient;
    }
    constructor(){
        const options = {
            queries: {
                staleTime: 1000 * 60 * 5
            }
        };
        this._queryClient.setDefaultOptions(options);
    }
}
QueryClientManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectable"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_metadata__as__$5f3e$__["_"])("design:type", Function),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_metadata__as__$5f3e$__["_"])("design:paramtypes", [])
], QueryClientManager);
const __TURBOPACK__default__export__ = QueryClientManager;
}),
"[project]/root/src/di/managers/QueryClientManagerInjector.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryClientManagerServiceId",
    ()=>QueryClientManagerServiceId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$managers$2f$QueryClientManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/managers/QueryClientManager.ts [app-ssr] (ecmascript)");
;
;
const QueryClientManagerServiceId = Symbol.for('QueryClientManagerServiceId');
__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bind(QueryClientManagerServiceId).to(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$managers$2f$QueryClientManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).inSingletonScope();
}),
"[project]/root/components/page/Page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$ContextMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/ContextMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$navigation$2f$PrimaryAppBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/navigation/PrimaryAppBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$navigation$2f$SecondaryAppBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/navigation/SecondaryAppBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$Toasts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/Toasts.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$managers$2f$QueryClientManagerInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/di/managers/QueryClientManagerInjector.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
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
function Page({ children, primaryAppBarProps, secondaryAppBarProps }) {
    const queryClientManager = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$managers$2f$QueryClientManagerInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientManagerServiceId"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                flexGrow: 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$navigation$2f$PrimaryAppBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    ...primaryAppBarProps
                }, void 0, false, {
                    fileName: "[project]/root/components/page/Page.tsx",
                    lineNumber: 22,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/root/components/page/Page.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
                client: queryClientManager.queryClient,
                children: children
            }, void 0, false, {
                fileName: "[project]/root/components/page/Page.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                flexGrow: 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$navigation$2f$SecondaryAppBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    ...secondaryAppBarProps
                }, void 0, false, {
                    fileName: "[project]/root/components/page/Page.tsx",
                    lineNumber: 28,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/root/components/page/Page.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$ContextMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/root/components/page/Page.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$Toasts$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/root/components/page/Page.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/root/components/page/Page.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
}),
"[project]/root/components/user/UserContext.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserContext",
    ()=>UserContext,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useUserContext",
    ()=>useUserContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const UserContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext(undefined);
function useUserContext() {
    const userContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(UserContext);
    if (!userContext) throw new Error(`Missing ${typeof UserContext}`);
    return userContext;
}
const __TURBOPACK__default__export__ = UserContext;
}),
"[project]/root/components/user/UserContextProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserContextProvider",
    ()=>UserContextProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$UserInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/di/UserInjector.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$user$2f$UserContext$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/user/UserContext.ts [app-ssr] (ecmascript)");
;
;
;
;
function UserContextProvider({ children }) {
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$UserInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserServiceId"]);
    const value = {
        user
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$user$2f$UserContext$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/root/components/user/UserContextProvider.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
const __TURBOPACK__default__export__ = UserContextProvider;
}),
"[project]/root/components/page/AuthenticatedPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthenticatedPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$UserInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/di/UserInjector.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$page$2f$Page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/page/Page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$user$2f$UserContextProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/user/UserContextProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function AuthenticatedPage({ children, ...pageProps }) {
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$UserInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserServiceId"]);
    if (!user.accountData) {
        const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
        const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
        router.replace(`/login?redirect=${pathname}`);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {}, void 0, false, {
            fileName: "[project]/root/components/page/AuthenticatedPage.tsx",
            lineNumber: 18,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$page$2f$Page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...pageProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$user$2f$UserContextProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/root/components/page/AuthenticatedPage.tsx",
            lineNumber: 22,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/root/components/page/AuthenticatedPage.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
}),
"[project]/root/src/collections/Batcher.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Batcher",
    ()=>Batcher,
    "default",
    ()=>__TURBOPACK__default__export__
]);
class Batcher {
    _onFetch;
    _time;
    _timer;
    _promiseExecutorDatasByKey = new Map();
    constructor(onFetch, time = 10){
        this._onFetch = onFetch;
        this._time = time;
    }
    async request(key) {
        const self = this;
        let promiseExecutorData = this._promiseExecutorDatasByKey.get(key);
        if (promiseExecutorData) return promiseExecutorData.promise;
        const promise = new Promise(executor);
        this.queue();
        return promise;
        //TURBOPACK unreachable
        ;
        function executor(resolve, reject) {
            const promiseExecutorData = {
                promise,
                resolve,
                reject
            };
            self._promiseExecutorDatasByKey.set(key, promiseExecutorData);
        }
    }
    queue() {
        if (this._timer) return;
        this._timer = setTimeout(this.execute.bind(this), this._time);
    }
    execute() {
        this._timer = undefined;
        this.fetch();
    }
    async fetch() {
        const promiseExecutorDatasByKey = this._promiseExecutorDatasByKey;
        this._promiseExecutorDatasByKey = new Map();
        const keys = this._promiseExecutorDatasByKey.keys();
        const valuesByKey = await this._onFetch([
            ...keys
        ]);
        valuesByKey.forEach(resolve.bind(this));
        const rejects = keys.filter((key)=>!valuesByKey.has(key));
        rejects.forEach(reject.bind(this));
        function resolve(value, key) {
            const promiseExecutorData = promiseExecutorDatasByKey.get(key);
            if (!promiseExecutorData) return;
            promiseExecutorData.resolve(value);
        }
        function reject(key) {
            const promiseExecutorData = promiseExecutorDatasByKey.get(key);
            if (!promiseExecutorData) return;
            promiseExecutorData.reject();
        }
    }
}
const __TURBOPACK__default__export__ = Batcher;
}),
"[project]/root/src/stores/ProjectStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectStore",
    ()=>ProjectStore,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$collections$2f$Batcher$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/collections/Batcher.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$managers$2f$QueryClientManagerInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/di/managers/QueryClientManagerInjector.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$services$2f$ProjectServiceInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/di/services/ProjectServiceInjector.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Project$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Project$3e$__ = __turbopack_context__.i("[project]/node_modules/@strife/common/dist/Project.data.js [app-ssr] (ecmascript) <export * as Project>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$inversify$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/inversify/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@inversifyjs/core/lib/esm/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
class ProjectStore {
    _queryClientManager = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$managers$2f$QueryClientManagerInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientManagerServiceId"]);
    _projectService = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$services$2f$ProjectServiceInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectServiceServiceId"]);
    _batcher = new __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$collections$2f$Batcher$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this.onFetch.bind(this));
    useCreateProject(createData) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
            mutationFn: ()=>this._projectService.createProject(createData),
            onSuccess: this.setProjectQueryData.bind(this)
        });
    }
    useDeleteProject(projectId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
            mutationFn: ()=>this._projectService.deleteProject(projectId),
            onSuccess: ()=>this.invalidateProjectQueryData(projectId)
        });
    }
    useGetProject(projectId) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: this.getProjectQueryKey(projectId),
            queryFn: ()=>this._batcher.request(projectId)
        });
    }
    useGetProjects(getData) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
            queryKey: this.getProjectsQueryKey(getData),
            queryFn: async ()=>{
                const projectDatas = await this._projectService.getProjects(getData);
                projectDatas.forEach(this.setProjectQueryData.bind(this));
                return projectDatas;
            }
        });
    }
    useUpdateProject(projectId, updateData) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
            mutationFn: ()=>this._projectService.updateProject(projectId, updateData),
            onSuccess: this.setProjectQueryData.bind(this)
        });
    }
    getProjectQueryKey(projectId) {
        return [
            'project',
            projectId
        ];
    }
    setProjectQueryData(projectData) {
        this._queryClientManager.queryClient.setQueryData(this.getProjectQueryKey(projectData.id), projectData);
    }
    invalidateProjectQueryData(projectId) {
        this._queryClientManager.queryClient.invalidateQueries({
            queryKey: this.getProjectQueryKey(projectId)
        });
    }
    getProjectsQueryKey(getData) {
        return [
            'projects',
            getData
        ];
    }
    async onFetch(ids) {
        const getData = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$strife$2f$common$2f$dist$2f$Project$2e$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Project$3e$__["Project"].GetSchema.parseAsync({
            ids
        });
        const projectDatas = await this._projectService.getProjects(getData);
        const projectDataEntries = projectDatas.map((projectData)=>[
                projectData.id,
                projectData
            ]);
        return new Map(projectDataEntries);
    }
}
ProjectStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inversifyjs$2f$core$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injectable"])()
], ProjectStore);
const __TURBOPACK__default__export__ = ProjectStore;
}),
"[project]/root/src/di/stores/ProjectStoreInjector.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectStoreServiceId",
    ()=>ProjectStoreServiceId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$stores$2f$ProjectStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/stores/ProjectStore.ts [app-ssr] (ecmascript)");
;
;
const ProjectStoreServiceId = Symbol.for('ProjectStoreServiceId');
__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bind(ProjectStoreServiceId).to(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$stores$2f$ProjectStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).inSingletonScope();
}),
"[project]/root/components/project/ProjectContext.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectContext",
    ()=>ProjectContext,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useProjectContext",
    ()=>useProjectContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const ProjectContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext(undefined);
function useProjectContext() {
    const projectContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(ProjectContext);
    if (!projectContext) throw new Error(`Missing ${typeof ProjectContext}`);
    return projectContext;
}
const __TURBOPACK__default__export__ = ProjectContext;
}),
"[project]/root/components/project/ProjectContextProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectContextProvider",
    ()=>ProjectContextProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$stores$2f$ProjectStoreInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/di/stores/ProjectStoreInjector.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$project$2f$ProjectContext$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/project/ProjectContext.ts [app-ssr] (ecmascript)");
;
;
;
;
function ProjectContextProvider({ projectId, children }) {
    const projectStore = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$stores$2f$ProjectStoreInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectStoreServiceId"]);
    const { data } = projectStore.useGetProject(projectId);
    const value = {
        projectData: data
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$project$2f$ProjectContext$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/root/components/project/ProjectContextProvider.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
const __TURBOPACK__default__export__ = ProjectContextProvider;
}),
"[project]/root/components/editor/views/View.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "View",
    ()=>View,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
;
;
function View({ children, ...boxProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
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
const __TURBOPACK__default__export__ = View;
}),
"[project]/root/components/editor/widgets/Widget.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Widget",
    ()=>Widget,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
;
;
function Widget({ children, ...boxProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
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
const __TURBOPACK__default__export__ = Widget;
}),
"[project]/root/components/editor/widgets/AceEditorWidget.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AceEditorWidget",
    ()=>AceEditorWidget,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$widgets$2f$Widget$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/editor/widgets/Widget.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ace$2d$builds$2f$src$2d$noconflict$2f$ace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ace-builds/src-noconflict/ace.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
;
;
;
;
;
function AceEditorWidget({ ...widgetProps }) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(initializationEffect, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$widgets$2f$Widget$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...widgetProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
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
        var editor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ace$2d$builds$2f$src$2d$noconflict$2f$ace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].edit('editor');
    }
}
const __TURBOPACK__default__export__ = AceEditorWidget;
}),
"[project]/root/components/editor/views/CodeView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeView",
    ()=>CodeView,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$views$2f$View$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/editor/views/View.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$widgets$2f$AceEditorWidget$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/editor/widgets/AceEditorWidget.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@root/components/editor/widgets/ProjectWidget'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function CodeView({ ...viewProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$views$2f$View$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        display: "flex",
        flexDirection: "row",
        ...viewProps,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectWidget, {}, void 0, false, {
                fileName: "[project]/root/components/editor/views/CodeView.tsx",
                lineNumber: 10,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$widgets$2f$AceEditorWidget$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/root/components/editor/views/CodeView.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/root/components/editor/views/CodeView.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
const __TURBOPACK__default__export__ = CodeView;
}),
"[project]/app/projects/[projectId]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectPage",
    ()=>ProjectPage,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/DependencyInjection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$services$2f$ProjectServiceInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/src/di/services/ProjectServiceInjector.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$generic$2f$EnumTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/generic/EnumTabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$page$2f$AuthenticatedPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/page/AuthenticatedPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [app-ssr] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/useMediaQuery/index.js [app-ssr] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$project$2f$ProjectContextProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/project/ProjectContextProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$views$2f$CodeView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/root/components/editor/views/CodeView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
var EditorTabs = /*#__PURE__*/ function(EditorTabs) {
    EditorTabs[EditorTabs["Code"] = 0] = "Code";
    EditorTabs[EditorTabs["Scene"] = 1] = "Scene";
    EditorTabs[EditorTabs["Play"] = 2] = "Play";
    return EditorTabs;
}(EditorTabs || {});
function ProjectPage({ params }) {
    const { projectId } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use(params);
    const projectService = __TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$DependencyInjection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$src$2f$di$2f$services$2f$ProjectServiceInjector$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectServiceServiceId"]);
    const [projectData, setProjectData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState();
    const [tab, setTab] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(0);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(initializationEffect, []);
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const isDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])(theme.breakpoints.up('md'));
    let content;
    switch(tab){
        case 0:
            content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$editor$2f$views$2f$CodeView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/projects/[projectId]/page.tsx",
                lineNumber: 37,
                columnNumber: 17
            }, this);
            break;
    }
    const primaryAppBarChildren = isDesktop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                paddingX: "32px",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "subtitle1",
                        children: projectData?.name
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[projectId]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "subtitle2",
                        children: projectData?.description
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[projectId]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/[projectId]/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                flexGrow: 1,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$generic$2f$EnumTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    type: EditorTabs,
                    value: tab,
                    onChange: onTabChange,
                    textColor: "inherit",
                    indicatorColor: "secondary",
                    centered: true
                }, void 0, false, {
                    fileName: "[project]/app/projects/[projectId]/page.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/projects/[projectId]/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/projects/[projectId]/page.tsx",
        lineNumber: 42,
        columnNumber: 7
    }, this) : undefined;
    const secondaryAppBarChildren = !isDesktop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$generic$2f$EnumTabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            type: EditorTabs,
            value: tab,
            onChange: onTabChange,
            textColor: "inherit",
            indicatorColor: "secondary",
            centered: true
        }, void 0, false, {
            fileName: "[project]/app/projects/[projectId]/page.tsx",
            lineNumber: 55,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/projects/[projectId]/page.tsx",
        lineNumber: 54,
        columnNumber: 7
    }, this) : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$page$2f$AuthenticatedPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        primaryAppBarProps: {
            children: primaryAppBarChildren
        },
        secondaryAppBarProps: {
            children: secondaryAppBarChildren,
            sx: {
                alignItems: 'center'
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$root$2f$components$2f$project$2f$ProjectContextProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            projectId: projectId,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                height: "100%",
                display: "flex",
                flexDirection: "row",
                children: content
            }, void 0, false, {
                fileName: "[project]/app/projects/[projectId]/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/projects/[projectId]/page.tsx",
            lineNumber: 60,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/projects/[projectId]/page.tsx",
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
        const projectData = await projectService.getProject(projectId);
        setProjectData(projectData);
        return projectData;
    }
}
const __TURBOPACK__default__export__ = ProjectPage;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dfcaebe6._.js.map