module.exports = [
"[project]/app/propuestas/crear/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CrearSalida
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pocketbase$2f$dist$2f$pocketbase$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pocketbase/dist/pocketbase.es.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function CrearSalida() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pocketbase$2f$dist$2f$pocketbase$2e$es$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]("http://127.0.0.1:8090");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        Titulo_Salida: "",
        Como_Llegar: "",
        Que_Llevar: [],
        Cuanto_Dura: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setErrorMsg("");
        try {
            await pb.collection("Salidas_Alumnos").create(form);
            // 🔔 NOTIFICACIÓN EXACTAMENTE CUANDO SE CREA
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Nueva propuesta agregada correctamente!");
            // Espera 1.2 segundos y redirige
            setTimeout(()=>{
                router.push("/");
            }, 1200);
        } catch (error) {
            console.error(error);
            setErrorMsg("Error al guardar.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "bg-white p-6 rounded-lg shadow-md w-full max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold mb-4",
                        children: "Nueva Salida"
                    }, void 0, false, {
                        fileName: "[project]/app/propuestas/crear/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 mb-3 text-sm",
                        children: errorMsg
                    }, void 0, false, {
                        fileName: "[project]/app/propuestas/crear/page.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "Titulo_Salida",
                        placeholder: "Título de la salida",
                        value: form.Titulo_Salida,
                        onChange: handleChange,
                        className: "border w-full mb-3 p-2 rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/propuestas/crear/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "Como_Llegar",
                        value: form.Como_Llegar,
                        onChange: handleChange,
                        className: "border w-full mb-3 p-2 rounded",
                        required: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Seleccionar cómo llegar"
                            }, void 0, false, {
                                fileName: "[project]/app/propuestas/crear/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Independiente",
                                children: "Independiente"
                            }, void 0, false, {
                                fileName: "[project]/app/propuestas/crear/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Colectivo (Todos Juntos))",
                                children: "Colectivo (Todos Juntos)"
                            }, void 0, false, {
                                fileName: "[project]/app/propuestas/crear/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Contratar Micro",
                                children: "Contratar Micro"
                            }, void 0, false, {
                                fileName: "[project]/app/propuestas/crear/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/propuestas/crear/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block mb-2 font-semibold",
                                children: "¿Qué llevar?"
                            }, void 0, false, {
                                fileName: "[project]/app/propuestas/crear/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            [
                                "Mochila",
                                "Comida",
                                "Agua",
                                "Abrigo",
                                "Gorra",
                                "Repelente"
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            value: item,
                                            checked: form.Que_Llevar.includes(item),
                                            onChange: (e)=>{
                                                if (e.target.checked) {
                                                    setForm({
                                                        ...form,
                                                        Que_Llevar: [
                                                            ...form.Que_Llevar,
                                                            item
                                                        ]
                                                    });
                                                } else {
                                                    setForm({
                                                        ...form,
                                                        Que_Llevar: form.Que_Llevar.filter((i)=>i !== item)
                                                    });
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/propuestas/crear/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        item
                                    ]
                                }, item, true, {
                                    fileName: "[project]/app/propuestas/crear/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/propuestas/crear/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "Cuanto_Dura",
                        value: form.Cuanto_Dura,
                        onChange: handleChange,
                        className: "border w-full mb-4 p-2 rounded",
                        required: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Seleccionar duración"
                            }, void 0, false, {
                                fileName: "[project]/app/propuestas/crear/page.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "1 Hora",
                                children: "1 Hora"
                            }, void 0, false, {
                                fileName: "[project]/app/propuestas/crear/page.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "2 Horas",
                                children: "2 Horas"
                            }, void 0, false, {
                                fileName: "[project]/app/propuestas/crear/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "3 Horas",
                                children: "3 Horas"
                            }, void 0, false, {
                                fileName: "[project]/app/propuestas/crear/page.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/propuestas/crear/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "bg-black text-white px-4 py-2 rounded w-full",
                        children: loading ? "Guardando..." : "Guardar"
                    }, void 0, false, {
                        fileName: "[project]/app/propuestas/crear/page.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/propuestas/crear/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastContainer"], {}, void 0, false, {
                fileName: "[project]/app/propuestas/crear/page.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/propuestas/crear/page.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/pocketbase/dist/pocketbase.es.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncAuthStore",
    ()=>AsyncAuthStore,
    "BaseAuthStore",
    ()=>BaseAuthStore,
    "BatchService",
    ()=>BatchService,
    "ClientResponseError",
    ()=>ClientResponseError,
    "CollectionService",
    ()=>CollectionService,
    "CrudService",
    ()=>CrudService,
    "HealthService",
    ()=>HealthService,
    "LocalAuthStore",
    ()=>LocalAuthStore,
    "LogService",
    ()=>LogService,
    "RealtimeService",
    ()=>RealtimeService,
    "RecordService",
    ()=>RecordService,
    "SubBatchService",
    ()=>SubBatchService,
    "cookieParse",
    ()=>cookieParse,
    "cookieSerialize",
    ()=>cookieSerialize,
    "default",
    ()=>Client,
    "getTokenPayload",
    ()=>getTokenPayload,
    "isTokenExpired",
    ()=>isTokenExpired,
    "normalizeUnknownQueryParams",
    ()=>normalizeUnknownQueryParams,
    "serializeQueryParams",
    ()=>serializeQueryParams
]);
class ClientResponseError extends Error {
    constructor(e){
        super("ClientResponseError"), this.url = "", this.status = 0, this.response = {}, this.isAbort = !1, this.originalError = null, Object.setPrototypeOf(this, ClientResponseError.prototype), null !== e && "object" == typeof e && (this.url = "string" == typeof e.url ? e.url : "", this.status = "number" == typeof e.status ? e.status : 0, this.isAbort = !!e.isAbort, this.originalError = e.originalError, null !== e.response && "object" == typeof e.response ? this.response = e.response : null !== e.data && "object" == typeof e.data ? this.response = e.data : this.response = {}), this.originalError || e instanceof ClientResponseError || (this.originalError = e), "undefined" != typeof DOMException && e instanceof DOMException && (this.isAbort = !0), this.name = "ClientResponseError " + this.status, this.message = this.response?.message, this.message || (this.isAbort ? this.message = "The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation." : this.originalError?.cause?.message?.includes("ECONNREFUSED ::1") ? this.message = "Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21)." : this.message = "Something went wrong."), this.cause = this.originalError;
    }
    get data() {
        return this.response;
    }
    toJSON() {
        return {
            ...this
        };
    }
}
const e = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function cookieParse(e, t) {
    const s = {};
    if ("string" != typeof e) return s;
    const i = Object.assign({}, t || {}).decode || defaultDecode;
    let n = 0;
    for(; n < e.length;){
        const t = e.indexOf("=", n);
        if (-1 === t) break;
        let r = e.indexOf(";", n);
        if (-1 === r) r = e.length;
        else if (r < t) {
            n = e.lastIndexOf(";", t - 1) + 1;
            continue;
        }
        const o = e.slice(n, t).trim();
        if (void 0 === s[o]) {
            let n = e.slice(t + 1, r).trim();
            34 === n.charCodeAt(0) && (n = n.slice(1, -1));
            try {
                s[o] = i(n);
            } catch (e) {
                s[o] = n;
            }
        }
        n = r + 1;
    }
    return s;
}
function cookieSerialize(t, s, i) {
    const n = Object.assign({}, i || {}), r = n.encode || defaultEncode;
    if (!e.test(t)) throw new TypeError("argument name is invalid");
    const o = r(s);
    if (o && !e.test(o)) throw new TypeError("argument val is invalid");
    let a = t + "=" + o;
    if (null != n.maxAge) {
        const e = n.maxAge - 0;
        if (isNaN(e) || !isFinite(e)) throw new TypeError("option maxAge is invalid");
        a += "; Max-Age=" + Math.floor(e);
    }
    if (n.domain) {
        if (!e.test(n.domain)) throw new TypeError("option domain is invalid");
        a += "; Domain=" + n.domain;
    }
    if (n.path) {
        if (!e.test(n.path)) throw new TypeError("option path is invalid");
        a += "; Path=" + n.path;
    }
    if (n.expires) {
        if (!function isDate(e) {
            return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date;
        }(n.expires) || isNaN(n.expires.valueOf())) throw new TypeError("option expires is invalid");
        a += "; Expires=" + n.expires.toUTCString();
    }
    if (n.httpOnly && (a += "; HttpOnly"), n.secure && (a += "; Secure"), n.priority) {
        switch("string" == typeof n.priority ? n.priority.toLowerCase() : n.priority){
            case "low":
                a += "; Priority=Low";
                break;
            case "medium":
                a += "; Priority=Medium";
                break;
            case "high":
                a += "; Priority=High";
                break;
            default:
                throw new TypeError("option priority is invalid");
        }
    }
    if (n.sameSite) {
        switch("string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite){
            case !0:
                a += "; SameSite=Strict";
                break;
            case "lax":
                a += "; SameSite=Lax";
                break;
            case "strict":
                a += "; SameSite=Strict";
                break;
            case "none":
                a += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid");
        }
    }
    return a;
}
function defaultDecode(e) {
    return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e;
}
function defaultEncode(e) {
    return encodeURIComponent(e);
}
const t = "undefined" != typeof navigator && "ReactNative" === navigator.product || "undefined" != ("TURBOPACK compile-time value", "object") && /*TURBOPACK member replacement*/ __turbopack_context__.g.HermesInternal;
let s;
function getTokenPayload(e) {
    if (e) try {
        const t = decodeURIComponent(s(e.split(".")[1]).split("").map(function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
        return JSON.parse(t) || {};
    } catch (e) {}
    return {};
}
function isTokenExpired(e, t = 0) {
    let s = getTokenPayload(e);
    return !(Object.keys(s).length > 0 && (!s.exp || s.exp - t > Date.now() / 1e3));
}
s = "function" != typeof atob || t ? (e)=>{
    let t = String(e).replace(/=+$/, "");
    if (t.length % 4 == 1) throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    for(var s, i, n = 0, r = 0, o = ""; i = t.charAt(r++); ~i && (s = n % 4 ? 64 * s + i : i, n++ % 4) ? o += String.fromCharCode(255 & s >> (-2 * n & 6)) : 0)i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);
    return o;
} : atob;
const i = "pb_auth";
class BaseAuthStore {
    constructor(){
        this.baseToken = "", this.baseModel = null, this._onChangeCallbacks = [];
    }
    get token() {
        return this.baseToken;
    }
    get record() {
        return this.baseModel;
    }
    get model() {
        return this.baseModel;
    }
    get isValid() {
        return !isTokenExpired(this.token);
    }
    get isSuperuser() {
        let e = getTokenPayload(this.token);
        return "auth" == e.type && ("_superusers" == this.record?.collectionName || !this.record?.collectionName && "pbc_3142635823" == e.collectionId);
    }
    get isAdmin() {
        return console.warn("Please replace pb.authStore.isAdmin with pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"), this.isSuperuser;
    }
    get isAuthRecord() {
        return console.warn("Please replace pb.authStore.isAuthRecord with !pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"), "auth" == getTokenPayload(this.token).type && !this.isSuperuser;
    }
    save(e, t) {
        this.baseToken = e || "", this.baseModel = t || null, this.triggerChange();
    }
    clear() {
        this.baseToken = "", this.baseModel = null, this.triggerChange();
    }
    loadFromCookie(e, t = i) {
        const s = cookieParse(e || "")[t] || "";
        let n = {};
        try {
            n = JSON.parse(s), (null === typeof n || "object" != typeof n || Array.isArray(n)) && (n = {});
        } catch (e) {}
        this.save(n.token || "", n.record || n.model || null);
    }
    exportToCookie(e, t = i) {
        const s = {
            secure: !0,
            sameSite: !0,
            httpOnly: !0,
            path: "/"
        }, n = getTokenPayload(this.token);
        s.expires = n?.exp ? new Date(1e3 * n.exp) : new Date("1970-01-01"), e = Object.assign({}, s, e);
        const r = {
            token: this.token,
            record: this.record ? JSON.parse(JSON.stringify(this.record)) : null
        };
        let o = cookieSerialize(t, JSON.stringify(r), e);
        const a = "undefined" != typeof Blob ? new Blob([
            o
        ]).size : o.length;
        if (r.record && a > 4096) {
            r.record = {
                id: r.record?.id,
                email: r.record?.email
            };
            const s = [
                "collectionId",
                "collectionName",
                "verified"
            ];
            for(const e in this.record)s.includes(e) && (r.record[e] = this.record[e]);
            o = cookieSerialize(t, JSON.stringify(r), e);
        }
        return o;
    }
    onChange(e, t = !1) {
        return this._onChangeCallbacks.push(e), t && e(this.token, this.record), ()=>{
            for(let t = this._onChangeCallbacks.length - 1; t >= 0; t--)if (this._onChangeCallbacks[t] == e) return delete this._onChangeCallbacks[t], void this._onChangeCallbacks.splice(t, 1);
        };
    }
    triggerChange() {
        for (const e of this._onChangeCallbacks)e && e(this.token, this.record);
    }
}
class LocalAuthStore extends BaseAuthStore {
    constructor(e = "pocketbase_auth"){
        super(), this.storageFallback = {}, this.storageKey = e, this._bindStorageEvent();
    }
    get token() {
        return (this._storageGet(this.storageKey) || {}).token || "";
    }
    get record() {
        const e = this._storageGet(this.storageKey) || {};
        return e.record || e.model || null;
    }
    get model() {
        return this.record;
    }
    save(e, t) {
        this._storageSet(this.storageKey, {
            token: e,
            record: t
        }), super.save(e, t);
    }
    clear() {
        this._storageRemove(this.storageKey), super.clear();
    }
    _storageGet(e) {
        if ("undefined" != ("TURBOPACK compile-time value", "undefined") && window?.localStorage) //TURBOPACK unreachable
        ;
        return this.storageFallback[e];
    }
    _storageSet(e, t) {
        if ("undefined" != ("TURBOPACK compile-time value", "undefined") && window?.localStorage) //TURBOPACK unreachable
        ;
        else this.storageFallback[e] = t;
    }
    _storageRemove(e) {
        "undefined" != ("TURBOPACK compile-time value", "undefined") && window?.localStorage && window.localStorage?.removeItem(e), delete this.storageFallback[e];
    }
    _bindStorageEvent() {
        "undefined" != ("TURBOPACK compile-time value", "undefined") && window?.localStorage && window.addEventListener && window.addEventListener("storage", (e)=>{
            if (e.key != this.storageKey) return;
            const t = this._storageGet(this.storageKey) || {};
            super.save(t.token || "", t.record || t.model || null);
        });
    }
}
class BaseService {
    constructor(e){
        this.client = e;
    }
}
class SettingsService extends BaseService {
    async getAll(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send("/api/settings", e);
    }
    async update(e, t) {
        return t = Object.assign({
            method: "PATCH",
            body: e
        }, t), this.client.send("/api/settings", t);
    }
    async testS3(e = "storage", t) {
        return t = Object.assign({
            method: "POST",
            body: {
                filesystem: e
            }
        }, t), this.client.send("/api/settings/test/s3", t).then(()=>!0);
    }
    async testEmail(e, t, s, i) {
        return i = Object.assign({
            method: "POST",
            body: {
                email: t,
                template: s,
                collection: e
            }
        }, i), this.client.send("/api/settings/test/email", i).then(()=>!0);
    }
    async generateAppleClientSecret(e, t, s, i, n, r) {
        return r = Object.assign({
            method: "POST",
            body: {
                clientId: e,
                teamId: t,
                keyId: s,
                privateKey: i,
                duration: n
            }
        }, r), this.client.send("/api/settings/apple/generate-client-secret", r);
    }
}
const n = [
    "requestKey",
    "$cancelKey",
    "$autoCancel",
    "fetch",
    "headers",
    "body",
    "query",
    "params",
    "cache",
    "credentials",
    "headers",
    "integrity",
    "keepalive",
    "method",
    "mode",
    "redirect",
    "referrer",
    "referrerPolicy",
    "signal",
    "window"
];
function normalizeUnknownQueryParams(e) {
    if (e) {
        e.query = e.query || {};
        for(let t in e)n.includes(t) || (e.query[t] = e[t], delete e[t]);
    }
}
function serializeQueryParams(e) {
    const t = [];
    for(const s in e){
        const i = encodeURIComponent(s), n = Array.isArray(e[s]) ? e[s] : [
            e[s]
        ];
        for (let e of n)e = prepareQueryParamValue(e), null !== e && t.push(i + "=" + e);
    }
    return t.join("&");
}
function prepareQueryParamValue(e) {
    return null == e ? null : e instanceof Date ? encodeURIComponent(e.toISOString().replace("T", " ")) : "object" == typeof e ? encodeURIComponent(JSON.stringify(e)) : encodeURIComponent(e);
}
class RealtimeService extends BaseService {
    constructor(){
        super(...arguments), this.clientId = "", this.eventSource = null, this.subscriptions = {}, this.lastSentSubscriptions = [], this.maxConnectTimeout = 15e3, this.reconnectAttempts = 0, this.maxReconnectAttempts = 1 / 0, this.predefinedReconnectIntervals = [
            200,
            300,
            500,
            1e3,
            1200,
            1500,
            2e3
        ], this.pendingConnects = [];
    }
    get isConnected() {
        return !!this.eventSource && !!this.clientId && !this.pendingConnects.length;
    }
    async subscribe(e, t, s) {
        if (!e) throw new Error("topic must be set.");
        let i = e;
        if (s) {
            normalizeUnknownQueryParams(s = Object.assign({}, s));
            const e = "options=" + encodeURIComponent(JSON.stringify({
                query: s.query,
                headers: s.headers
            }));
            i += (i.includes("?") ? "&" : "?") + e;
        }
        const listener = function(e) {
            const s = e;
            let i;
            try {
                i = JSON.parse(s?.data);
            } catch  {}
            t(i || {});
        };
        return this.subscriptions[i] || (this.subscriptions[i] = []), this.subscriptions[i].push(listener), this.isConnected ? 1 === this.subscriptions[i].length ? await this.submitSubscriptions() : this.eventSource?.addEventListener(i, listener) : await this.connect(), async ()=>this.unsubscribeByTopicAndListener(e, listener);
    }
    async unsubscribe(e) {
        let t = !1;
        if (e) {
            const s = this.getSubscriptionsByTopic(e);
            for(let e in s)if (this.hasSubscriptionListeners(e)) {
                for (let t of this.subscriptions[e])this.eventSource?.removeEventListener(e, t);
                delete this.subscriptions[e], t || (t = !0);
            }
        } else this.subscriptions = {};
        this.hasSubscriptionListeners() ? t && await this.submitSubscriptions() : this.disconnect();
    }
    async unsubscribeByPrefix(e) {
        let t = !1;
        for(let s in this.subscriptions)if ((s + "?").startsWith(e)) {
            t = !0;
            for (let e of this.subscriptions[s])this.eventSource?.removeEventListener(s, e);
            delete this.subscriptions[s];
        }
        t && (this.hasSubscriptionListeners() ? await this.submitSubscriptions() : this.disconnect());
    }
    async unsubscribeByTopicAndListener(e, t) {
        let s = !1;
        const i = this.getSubscriptionsByTopic(e);
        for(let e in i){
            if (!Array.isArray(this.subscriptions[e]) || !this.subscriptions[e].length) continue;
            let i = !1;
            for(let s = this.subscriptions[e].length - 1; s >= 0; s--)this.subscriptions[e][s] === t && (i = !0, delete this.subscriptions[e][s], this.subscriptions[e].splice(s, 1), this.eventSource?.removeEventListener(e, t));
            i && (this.subscriptions[e].length || delete this.subscriptions[e], s || this.hasSubscriptionListeners(e) || (s = !0));
        }
        this.hasSubscriptionListeners() ? s && await this.submitSubscriptions() : this.disconnect();
    }
    hasSubscriptionListeners(e) {
        if (this.subscriptions = this.subscriptions || {}, e) return !!this.subscriptions[e]?.length;
        for(let e in this.subscriptions)if (this.subscriptions[e]?.length) return !0;
        return !1;
    }
    async submitSubscriptions() {
        if (this.clientId) return this.addAllSubscriptionListeners(), this.lastSentSubscriptions = this.getNonEmptySubscriptionKeys(), this.client.send("/api/realtime", {
            method: "POST",
            body: {
                clientId: this.clientId,
                subscriptions: this.lastSentSubscriptions
            },
            requestKey: this.getSubscriptionsCancelKey()
        }).catch((e)=>{
            if (!e?.isAbort) throw e;
        });
    }
    getSubscriptionsCancelKey() {
        return "realtime_" + this.clientId;
    }
    getSubscriptionsByTopic(e) {
        const t = {};
        e = e.includes("?") ? e : e + "?";
        for(let s in this.subscriptions)(s + "?").startsWith(e) && (t[s] = this.subscriptions[s]);
        return t;
    }
    getNonEmptySubscriptionKeys() {
        const e = [];
        for(let t in this.subscriptions)this.subscriptions[t].length && e.push(t);
        return e;
    }
    addAllSubscriptionListeners() {
        if (this.eventSource) {
            this.removeAllSubscriptionListeners();
            for(let e in this.subscriptions)for (let t of this.subscriptions[e])this.eventSource.addEventListener(e, t);
        }
    }
    removeAllSubscriptionListeners() {
        if (this.eventSource) for(let e in this.subscriptions)for (let t of this.subscriptions[e])this.eventSource.removeEventListener(e, t);
    }
    async connect() {
        if (!(this.reconnectAttempts > 0)) return new Promise((e, t)=>{
            this.pendingConnects.push({
                resolve: e,
                reject: t
            }), this.pendingConnects.length > 1 || this.initConnect();
        });
    }
    initConnect() {
        this.disconnect(!0), clearTimeout(this.connectTimeoutId), this.connectTimeoutId = setTimeout(()=>{
            this.connectErrorHandler(new Error("EventSource connect took too long."));
        }, this.maxConnectTimeout), this.eventSource = new EventSource(this.client.buildURL("/api/realtime")), this.eventSource.onerror = (e)=>{
            this.connectErrorHandler(new Error("Failed to establish realtime connection."));
        }, this.eventSource.addEventListener("PB_CONNECT", (e)=>{
            const t = e;
            this.clientId = t?.lastEventId, this.submitSubscriptions().then(async ()=>{
                let e = 3;
                for(; this.hasUnsentSubscriptions() && e > 0;)e--, await this.submitSubscriptions();
            }).then(()=>{
                for (let e of this.pendingConnects)e.resolve();
                this.pendingConnects = [], this.reconnectAttempts = 0, clearTimeout(this.reconnectTimeoutId), clearTimeout(this.connectTimeoutId);
                const t = this.getSubscriptionsByTopic("PB_CONNECT");
                for(let s in t)for (let i of t[s])i(e);
            }).catch((e)=>{
                this.clientId = "", this.connectErrorHandler(e);
            });
        });
    }
    hasUnsentSubscriptions() {
        const e = this.getNonEmptySubscriptionKeys();
        if (e.length != this.lastSentSubscriptions.length) return !0;
        for (const t of e)if (!this.lastSentSubscriptions.includes(t)) return !0;
        return !1;
    }
    connectErrorHandler(e) {
        if (clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), !this.clientId && !this.reconnectAttempts || this.reconnectAttempts > this.maxReconnectAttempts) {
            for (let t of this.pendingConnects)t.reject(new ClientResponseError(e));
            return this.pendingConnects = [], void this.disconnect();
        }
        this.disconnect(!0);
        const t = this.predefinedReconnectIntervals[this.reconnectAttempts] || this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length - 1];
        this.reconnectAttempts++, this.reconnectTimeoutId = setTimeout(()=>{
            this.initConnect();
        }, t);
    }
    disconnect(e = !1) {
        if (this.clientId && this.onDisconnect && this.onDisconnect(Object.keys(this.subscriptions)), clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), this.removeAllSubscriptionListeners(), this.client.cancelRequest(this.getSubscriptionsCancelKey()), this.eventSource?.close(), this.eventSource = null, this.clientId = "", !e) {
            this.reconnectAttempts = 0;
            for (let e of this.pendingConnects)e.resolve();
            this.pendingConnects = [];
        }
    }
}
class CrudService extends BaseService {
    decode(e) {
        return e;
    }
    async getFullList(e, t) {
        if ("number" == typeof e) return this._getFullList(e, t);
        let s = 500;
        return (t = Object.assign({}, e, t)).batch && (s = t.batch, delete t.batch), this._getFullList(s, t);
    }
    async getList(e = 1, t = 30, s) {
        return (s = Object.assign({
            method: "GET"
        }, s)).query = Object.assign({
            page: e,
            perPage: t
        }, s.query), this.client.send(this.baseCrudPath, s).then((e)=>(e.items = e.items?.map((e)=>this.decode(e)) || [], e));
    }
    async getFirstListItem(e, t) {
        return (t = Object.assign({
            requestKey: "one_by_filter_" + this.baseCrudPath + "_" + e
        }, t)).query = Object.assign({
            filter: e,
            skipTotal: 1
        }, t.query), this.getList(1, 1, t).then((e)=>{
            if (!e?.items?.length) throw new ClientResponseError({
                status: 404,
                response: {
                    code: 404,
                    message: "The requested resource wasn't found.",
                    data: {}
                }
            });
            return e.items[0];
        });
    }
    async getOne(e, t) {
        if (!e) throw new ClientResponseError({
            url: this.client.buildURL(this.baseCrudPath + "/"),
            status: 404,
            response: {
                code: 404,
                message: "Missing required record id.",
                data: {}
            }
        });
        return t = Object.assign({
            method: "GET"
        }, t), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e), t).then((e)=>this.decode(e));
    }
    async create(e, t) {
        return t = Object.assign({
            method: "POST",
            body: e
        }, t), this.client.send(this.baseCrudPath, t).then((e)=>this.decode(e));
    }
    async update(e, t, s) {
        return s = Object.assign({
            method: "PATCH",
            body: t
        }, s), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e), s).then((e)=>this.decode(e));
    }
    async delete(e, t) {
        return t = Object.assign({
            method: "DELETE"
        }, t), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e), t).then(()=>!0);
    }
    _getFullList(e = 500, t) {
        (t = t || {}).query = Object.assign({
            skipTotal: 1
        }, t.query);
        let s = [], request = async (i)=>this.getList(i, e || 500, t).then((e)=>{
                const t = e.items;
                return s = s.concat(t), t.length == e.perPage ? request(i + 1) : s;
            });
        return request(1);
    }
}
function normalizeLegacyOptionsArgs(e, t, s, i) {
    const n = void 0 !== i;
    return n || void 0 !== s ? n ? (console.warn(e), t.body = Object.assign({}, t.body, s), t.query = Object.assign({}, t.query, i), t) : Object.assign(t, s) : t;
}
function resetAutoRefresh(e) {
    e._resetAutoRefresh?.();
}
class RecordService extends CrudService {
    constructor(e, t){
        super(e), this.collectionIdOrName = t;
    }
    get baseCrudPath() {
        return this.baseCollectionPath + "/records";
    }
    get baseCollectionPath() {
        return "/api/collections/" + encodeURIComponent(this.collectionIdOrName);
    }
    get isSuperusers() {
        return "_superusers" == this.collectionIdOrName || "_pbc_2773867675" == this.collectionIdOrName;
    }
    async subscribe(e, t, s) {
        if (!e) throw new Error("Missing topic.");
        if (!t) throw new Error("Missing subscription callback.");
        return this.client.realtime.subscribe(this.collectionIdOrName + "/" + e, t, s);
    }
    async unsubscribe(e) {
        return e ? this.client.realtime.unsubscribe(this.collectionIdOrName + "/" + e) : this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName);
    }
    async getFullList(e, t) {
        if ("number" == typeof e) return super.getFullList(e, t);
        const s = Object.assign({}, e, t);
        return super.getFullList(s);
    }
    async getList(e = 1, t = 30, s) {
        return super.getList(e, t, s);
    }
    async getFirstListItem(e, t) {
        return super.getFirstListItem(e, t);
    }
    async getOne(e, t) {
        return super.getOne(e, t);
    }
    async create(e, t) {
        return super.create(e, t);
    }
    async update(e, t, s) {
        return super.update(e, t, s).then((e)=>{
            if (this.client.authStore.record?.id === e?.id && (this.client.authStore.record?.collectionId === this.collectionIdOrName || this.client.authStore.record?.collectionName === this.collectionIdOrName)) {
                let t = Object.assign({}, this.client.authStore.record.expand), s = Object.assign({}, this.client.authStore.record, e);
                t && (s.expand = Object.assign(t, e.expand)), this.client.authStore.save(this.client.authStore.token, s);
            }
            return e;
        });
    }
    async delete(e, t) {
        return super.delete(e, t).then((t)=>(!t || this.client.authStore.record?.id !== e || this.client.authStore.record?.collectionId !== this.collectionIdOrName && this.client.authStore.record?.collectionName !== this.collectionIdOrName || this.client.authStore.clear(), t));
    }
    authResponse(e) {
        const t = this.decode(e?.record || {});
        return this.client.authStore.save(e?.token, t), Object.assign({}, e, {
            token: e?.token || "",
            record: t
        });
    }
    async listAuthMethods(e) {
        return e = Object.assign({
            method: "GET",
            fields: "mfa,otp,password,oauth2"
        }, e), this.client.send(this.baseCollectionPath + "/auth-methods", e);
    }
    async authWithPassword(e, t, s) {
        let i;
        s = Object.assign({
            method: "POST",
            body: {
                identity: e,
                password: t
            }
        }, s), this.isSuperusers && (i = s.autoRefreshThreshold, delete s.autoRefreshThreshold, s.autoRefresh || resetAutoRefresh(this.client));
        let n = await this.client.send(this.baseCollectionPath + "/auth-with-password", s);
        return n = this.authResponse(n), i && this.isSuperusers && function registerAutoRefresh(e, t, s, i) {
            resetAutoRefresh(e);
            const n = e.beforeSend, r = e.authStore.record, o = e.authStore.onChange((t, s)=>{
                (!t || s?.id != r?.id || (s?.collectionId || r?.collectionId) && s?.collectionId != r?.collectionId) && resetAutoRefresh(e);
            });
            e._resetAutoRefresh = function() {
                o(), e.beforeSend = n, delete e._resetAutoRefresh;
            }, e.beforeSend = async (r, o)=>{
                const a = e.authStore.token;
                if (o.query?.autoRefresh) return n ? n(r, o) : {
                    url: r,
                    sendOptions: o
                };
                let c = e.authStore.isValid;
                if (c && isTokenExpired(e.authStore.token, t)) try {
                    await s();
                } catch (e) {
                    c = !1;
                }
                c || await i();
                const l = o.headers || {};
                for(let t in l)if ("authorization" == t.toLowerCase() && a == l[t] && e.authStore.token) {
                    l[t] = e.authStore.token;
                    break;
                }
                return o.headers = l, n ? n(r, o) : {
                    url: r,
                    sendOptions: o
                };
            };
        }(this.client, i, ()=>this.authRefresh({
                autoRefresh: !0
            }), ()=>this.authWithPassword(e, t, Object.assign({
                autoRefresh: !0
            }, s))), n;
    }
    async authWithOAuth2Code(e, t, s, i, n, r, o) {
        let a = {
            method: "POST",
            body: {
                provider: e,
                code: t,
                codeVerifier: s,
                redirectURL: i,
                createData: n
            }
        };
        return a = normalizeLegacyOptionsArgs("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, options?).", a, r, o), this.client.send(this.baseCollectionPath + "/auth-with-oauth2", a).then((e)=>this.authResponse(e));
    }
    authWithOAuth2(...e) {
        if (e.length > 1 || "string" == typeof e?.[0]) return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."), this.authWithOAuth2Code(e?.[0] || "", e?.[1] || "", e?.[2] || "", e?.[3] || "", e?.[4] || {}, e?.[5] || {}, e?.[6] || {});
        const t = e?.[0] || {};
        let s = null;
        t.urlCallback || (s = openBrowserPopup(void 0));
        const i = new RealtimeService(this.client);
        function cleanup() {
            s?.close(), i.unsubscribe();
        }
        const n = {}, r = t.requestKey;
        return r && (n.requestKey = r), this.listAuthMethods(n).then((e)=>{
            const n = e.oauth2.providers.find((e)=>e.name === t.provider);
            if (!n) throw new ClientResponseError(new Error(`Missing or invalid provider "${t.provider}".`));
            const o = this.client.buildURL("/api/oauth2-redirect"), a = r ? this.client.cancelControllers?.[r] : void 0;
            return a && (a.signal.onabort = ()=>{
                cleanup();
            }), new Promise(async (e, r)=>{
                try {
                    await i.subscribe("@oauth2", async (s)=>{
                        const c = i.clientId;
                        try {
                            if (!s.state || c !== s.state) throw new Error("State parameters don't match.");
                            if (s.error || !s.code) throw new Error("OAuth2 redirect error or missing code: " + s.error);
                            const i = Object.assign({}, t);
                            delete i.provider, delete i.scopes, delete i.createData, delete i.urlCallback, a?.signal?.onabort && (a.signal.onabort = null);
                            const r = await this.authWithOAuth2Code(n.name, s.code, n.codeVerifier, o, t.createData, i);
                            e(r);
                        } catch (e) {
                            r(new ClientResponseError(e));
                        }
                        cleanup();
                    });
                    const c = {
                        state: i.clientId
                    };
                    t.scopes?.length && (c.scope = t.scopes.join(" "));
                    const l = this._replaceQueryParams(n.authURL + o, c);
                    let h = t.urlCallback || function(e) {
                        s ? s.location.href = e : s = openBrowserPopup(e);
                    };
                    await h(l);
                } catch (e) {
                    cleanup(), r(new ClientResponseError(e));
                }
            });
        }).catch((e)=>{
            throw cleanup(), e;
        });
    }
    async authRefresh(e, t) {
        let s = {
            method: "POST"
        };
        return s = normalizeLegacyOptionsArgs("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).", s, e, t), this.client.send(this.baseCollectionPath + "/auth-refresh", s).then((e)=>this.authResponse(e));
    }
    async requestPasswordReset(e, t, s) {
        let i = {
            method: "POST",
            body: {
                email: e
            }
        };
        return i = normalizeLegacyOptionsArgs("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).", i, t, s), this.client.send(this.baseCollectionPath + "/request-password-reset", i).then(()=>!0);
    }
    async confirmPasswordReset(e, t, s, i, n) {
        let r = {
            method: "POST",
            body: {
                token: e,
                password: t,
                passwordConfirm: s
            }
        };
        return r = normalizeLegacyOptionsArgs("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).", r, i, n), this.client.send(this.baseCollectionPath + "/confirm-password-reset", r).then(()=>!0);
    }
    async requestVerification(e, t, s) {
        let i = {
            method: "POST",
            body: {
                email: e
            }
        };
        return i = normalizeLegacyOptionsArgs("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).", i, t, s), this.client.send(this.baseCollectionPath + "/request-verification", i).then(()=>!0);
    }
    async confirmVerification(e, t, s) {
        let i = {
            method: "POST",
            body: {
                token: e
            }
        };
        return i = normalizeLegacyOptionsArgs("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).", i, t, s), this.client.send(this.baseCollectionPath + "/confirm-verification", i).then(()=>{
            const t = getTokenPayload(e), s = this.client.authStore.record;
            return s && !s.verified && s.id === t.id && s.collectionId === t.collectionId && (s.verified = !0, this.client.authStore.save(this.client.authStore.token, s)), !0;
        });
    }
    async requestEmailChange(e, t, s) {
        let i = {
            method: "POST",
            body: {
                newEmail: e
            }
        };
        return i = normalizeLegacyOptionsArgs("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).", i, t, s), this.client.send(this.baseCollectionPath + "/request-email-change", i).then(()=>!0);
    }
    async confirmEmailChange(e, t, s, i) {
        let n = {
            method: "POST",
            body: {
                token: e,
                password: t
            }
        };
        return n = normalizeLegacyOptionsArgs("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).", n, s, i), this.client.send(this.baseCollectionPath + "/confirm-email-change", n).then(()=>{
            const t = getTokenPayload(e), s = this.client.authStore.record;
            return s && s.id === t.id && s.collectionId === t.collectionId && this.client.authStore.clear(), !0;
        });
    }
    async listExternalAuths(e, t) {
        return this.client.collection("_externalAuths").getFullList(Object.assign({}, t, {
            filter: this.client.filter("recordRef = {:id}", {
                id: e
            })
        }));
    }
    async unlinkExternalAuth(e, t, s) {
        const i = await this.client.collection("_externalAuths").getFirstListItem(this.client.filter("recordRef = {:recordId} && provider = {:provider}", {
            recordId: e,
            provider: t
        }));
        return this.client.collection("_externalAuths").delete(i.id, s).then(()=>!0);
    }
    async requestOTP(e, t) {
        return t = Object.assign({
            method: "POST",
            body: {
                email: e
            }
        }, t), this.client.send(this.baseCollectionPath + "/request-otp", t);
    }
    async authWithOTP(e, t, s) {
        return s = Object.assign({
            method: "POST",
            body: {
                otpId: e,
                password: t
            }
        }, s), this.client.send(this.baseCollectionPath + "/auth-with-otp", s).then((e)=>this.authResponse(e));
    }
    async impersonate(e, t, s) {
        (s = Object.assign({
            method: "POST",
            body: {
                duration: t
            }
        }, s)).headers = s.headers || {}, s.headers.Authorization || (s.headers.Authorization = this.client.authStore.token);
        const i = new Client(this.client.baseURL, new BaseAuthStore, this.client.lang), n = await i.send(this.baseCollectionPath + "/impersonate/" + encodeURIComponent(e), s);
        return i.authStore.save(n?.token, this.decode(n?.record || {})), i;
    }
    _replaceQueryParams(e, t = {}) {
        let s = e, i = "";
        e.indexOf("?") >= 0 && (s = e.substring(0, e.indexOf("?")), i = e.substring(e.indexOf("?") + 1));
        const n = {}, r = i.split("&");
        for (const e of r){
            if ("" == e) continue;
            const t = e.split("=");
            n[decodeURIComponent(t[0].replace(/\+/g, " "))] = decodeURIComponent((t[1] || "").replace(/\+/g, " "));
        }
        for(let e in t)t.hasOwnProperty(e) && (null == t[e] ? delete n[e] : n[e] = t[e]);
        i = "";
        for(let e in n)n.hasOwnProperty(e) && ("" != i && (i += "&"), i += encodeURIComponent(e.replace(/%20/g, "+")) + "=" + encodeURIComponent(n[e].replace(/%20/g, "+")));
        return "" != i ? s + "?" + i : s;
    }
}
function openBrowserPopup(e) {
    if ("undefined" == ("TURBOPACK compile-time value", "undefined") || !window?.open) throw new ClientResponseError(new Error("Not in a browser context - please pass a custom urlCallback function."));
    let t = 1024, s = 768, i = window.innerWidth, n = window.innerHeight;
    t = t > i ? i : t, s = s > n ? n : s;
    let r = i / 2 - t / 2, o = n / 2 - s / 2;
    return window.open(e, "popup_window", "width=" + t + ",height=" + s + ",top=" + o + ",left=" + r + ",resizable,menubar=no");
}
class CollectionService extends CrudService {
    get baseCrudPath() {
        return "/api/collections";
    }
    async import(e, t = !1, s) {
        return s = Object.assign({
            method: "PUT",
            body: {
                collections: e,
                deleteMissing: t
            }
        }, s), this.client.send(this.baseCrudPath + "/import", s).then(()=>!0);
    }
    async getScaffolds(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send(this.baseCrudPath + "/meta/scaffolds", e);
    }
    async truncate(e, t) {
        return t = Object.assign({
            method: "DELETE"
        }, t), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e) + "/truncate", t).then(()=>!0);
    }
}
class LogService extends BaseService {
    async getList(e = 1, t = 30, s) {
        return (s = Object.assign({
            method: "GET"
        }, s)).query = Object.assign({
            page: e,
            perPage: t
        }, s.query), this.client.send("/api/logs", s);
    }
    async getOne(e, t) {
        if (!e) throw new ClientResponseError({
            url: this.client.buildURL("/api/logs/"),
            status: 404,
            response: {
                code: 404,
                message: "Missing required log id.",
                data: {}
            }
        });
        return t = Object.assign({
            method: "GET"
        }, t), this.client.send("/api/logs/" + encodeURIComponent(e), t);
    }
    async getStats(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send("/api/logs/stats", e);
    }
}
class HealthService extends BaseService {
    async check(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send("/api/health", e);
    }
}
class FileService extends BaseService {
    getUrl(e, t, s = {}) {
        return console.warn("Please replace pb.files.getUrl() with pb.files.getURL()"), this.getURL(e, t, s);
    }
    getURL(e, t, s = {}) {
        if (!t || !e?.id || !e?.collectionId && !e?.collectionName) return "";
        const i = [];
        i.push("api"), i.push("files"), i.push(encodeURIComponent(e.collectionId || e.collectionName)), i.push(encodeURIComponent(e.id)), i.push(encodeURIComponent(t));
        let n = this.client.buildURL(i.join("/"));
        if (Object.keys(s).length) {
            !1 === s.download && delete s.download;
            const e = new URLSearchParams(s);
            n += (n.includes("?") ? "&" : "?") + e;
        }
        return n;
    }
    async getToken(e) {
        return e = Object.assign({
            method: "POST"
        }, e), this.client.send("/api/files/token", e).then((e)=>e?.token || "");
    }
}
class BackupService extends BaseService {
    async getFullList(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send("/api/backups", e);
    }
    async create(e, t) {
        return t = Object.assign({
            method: "POST",
            body: {
                name: e
            }
        }, t), this.client.send("/api/backups", t).then(()=>!0);
    }
    async upload(e, t) {
        return t = Object.assign({
            method: "POST",
            body: e
        }, t), this.client.send("/api/backups/upload", t).then(()=>!0);
    }
    async delete(e, t) {
        return t = Object.assign({
            method: "DELETE"
        }, t), this.client.send(`/api/backups/${encodeURIComponent(e)}`, t).then(()=>!0);
    }
    async restore(e, t) {
        return t = Object.assign({
            method: "POST"
        }, t), this.client.send(`/api/backups/${encodeURIComponent(e)}/restore`, t).then(()=>!0);
    }
    getDownloadUrl(e, t) {
        return console.warn("Please replace pb.backups.getDownloadUrl() with pb.backups.getDownloadURL()"), this.getDownloadURL(e, t);
    }
    getDownloadURL(e, t) {
        return this.client.buildURL(`/api/backups/${encodeURIComponent(t)}?token=${encodeURIComponent(e)}`);
    }
}
class CronService extends BaseService {
    async getFullList(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send("/api/crons", e);
    }
    async run(e, t) {
        return t = Object.assign({
            method: "POST"
        }, t), this.client.send(`/api/crons/${encodeURIComponent(e)}`, t).then(()=>!0);
    }
}
function isFile(e) {
    return "undefined" != typeof Blob && e instanceof Blob || "undefined" != typeof File && e instanceof File || null !== e && "object" == typeof e && e.uri && ("undefined" != typeof navigator && "ReactNative" === navigator.product || "undefined" != ("TURBOPACK compile-time value", "object") && /*TURBOPACK member replacement*/ __turbopack_context__.g.HermesInternal);
}
function isFormData(e) {
    return e && ("FormData" === e.constructor?.name || "undefined" != typeof FormData && e instanceof FormData);
}
function hasFileField(e) {
    for(const t in e){
        const s = Array.isArray(e[t]) ? e[t] : [
            e[t]
        ];
        for (const e of s)if (isFile(e)) return !0;
    }
    return !1;
}
const r = /^[\-\.\d]+$/;
function inferFormDataValue(e) {
    if ("string" != typeof e) return e;
    if ("true" == e) return !0;
    if ("false" == e) return !1;
    if (("-" === e[0] || e[0] >= "0" && e[0] <= "9") && r.test(e)) {
        let t = +e;
        if ("" + t === e) return t;
    }
    return e;
}
class BatchService extends BaseService {
    constructor(){
        super(...arguments), this.requests = [], this.subs = {};
    }
    collection(e) {
        return this.subs[e] || (this.subs[e] = new SubBatchService(this.requests, e)), this.subs[e];
    }
    async send(e) {
        const t = new FormData, s = [];
        for(let e = 0; e < this.requests.length; e++){
            const i = this.requests[e];
            if (s.push({
                method: i.method,
                url: i.url,
                headers: i.headers,
                body: i.json
            }), i.files) for(let s in i.files){
                const n = i.files[s] || [];
                for (let i of n)t.append("requests." + e + "." + s, i);
            }
        }
        return t.append("@jsonPayload", JSON.stringify({
            requests: s
        })), e = Object.assign({
            method: "POST",
            body: t
        }, e), this.client.send("/api/batch", e);
    }
}
class SubBatchService {
    constructor(e, t){
        this.requests = [], this.requests = e, this.collectionIdOrName = t;
    }
    upsert(e, t) {
        t = Object.assign({
            body: e || {}
        }, t);
        const s = {
            method: "PUT",
            url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records"
        };
        this.prepareRequest(s, t), this.requests.push(s);
    }
    create(e, t) {
        t = Object.assign({
            body: e || {}
        }, t);
        const s = {
            method: "POST",
            url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records"
        };
        this.prepareRequest(s, t), this.requests.push(s);
    }
    update(e, t, s) {
        s = Object.assign({
            body: t || {}
        }, s);
        const i = {
            method: "PATCH",
            url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records/" + encodeURIComponent(e)
        };
        this.prepareRequest(i, s), this.requests.push(i);
    }
    delete(e, t) {
        t = Object.assign({}, t);
        const s = {
            method: "DELETE",
            url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records/" + encodeURIComponent(e)
        };
        this.prepareRequest(s, t), this.requests.push(s);
    }
    prepareRequest(e, t) {
        if (normalizeUnknownQueryParams(t), e.headers = t.headers, e.json = {}, e.files = {}, void 0 !== t.query) {
            const s = serializeQueryParams(t.query);
            s && (e.url += (e.url.includes("?") ? "&" : "?") + s);
        }
        let s = t.body;
        isFormData(s) && (s = function convertFormDataToObject(e) {
            let t = {};
            return e.forEach((e, s)=>{
                if ("@jsonPayload" === s && "string" == typeof e) try {
                    let s = JSON.parse(e);
                    Object.assign(t, s);
                } catch (e) {
                    console.warn("@jsonPayload error:", e);
                }
                else void 0 !== t[s] ? (Array.isArray(t[s]) || (t[s] = [
                    t[s]
                ]), t[s].push(inferFormDataValue(e))) : t[s] = inferFormDataValue(e);
            }), t;
        }(s));
        for(const t in s){
            const i = s[t];
            if (isFile(i)) e.files[t] = e.files[t] || [], e.files[t].push(i);
            else if (Array.isArray(i)) {
                const s = [], n = [];
                for (const e of i)isFile(e) ? s.push(e) : n.push(e);
                if (s.length > 0 && s.length == i.length) {
                    e.files[t] = e.files[t] || [];
                    for (let i of s)e.files[t].push(i);
                } else if (e.json[t] = n, s.length > 0) {
                    let i = t;
                    t.startsWith("+") || t.endsWith("+") || (i += "+"), e.files[i] = e.files[i] || [];
                    for (let t of s)e.files[i].push(t);
                }
            } else e.json[t] = i;
        }
    }
}
class Client {
    get baseUrl() {
        return this.baseURL;
    }
    set baseUrl(e) {
        this.baseURL = e;
    }
    constructor(e = "/", t, s = "en-US"){
        this.cancelControllers = {}, this.recordServices = {}, this.enableAutoCancellation = !0, this.baseURL = e, this.lang = s, t ? this.authStore = t : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : this.authStore = new LocalAuthStore, this.collections = new CollectionService(this), this.files = new FileService(this), this.logs = new LogService(this), this.settings = new SettingsService(this), this.realtime = new RealtimeService(this), this.health = new HealthService(this), this.backups = new BackupService(this), this.crons = new CronService(this);
    }
    get admins() {
        return this.collection("_superusers");
    }
    createBatch() {
        return new BatchService(this);
    }
    collection(e) {
        return this.recordServices[e] || (this.recordServices[e] = new RecordService(this, e)), this.recordServices[e];
    }
    autoCancellation(e) {
        return this.enableAutoCancellation = !!e, this;
    }
    cancelRequest(e) {
        return this.cancelControllers[e] && (this.cancelControllers[e].abort(), delete this.cancelControllers[e]), this;
    }
    cancelAllRequests() {
        for(let e in this.cancelControllers)this.cancelControllers[e].abort();
        return this.cancelControllers = {}, this;
    }
    filter(e, t) {
        if (!t) return e;
        for(let s in t){
            let i = t[s];
            switch(typeof i){
                case "boolean":
                case "number":
                    i = "" + i;
                    break;
                case "string":
                    i = "'" + i.replace(/'/g, "\\'") + "'";
                    break;
                default:
                    i = null === i ? "null" : i instanceof Date ? "'" + i.toISOString().replace("T", " ") + "'" : "'" + JSON.stringify(i).replace(/'/g, "\\'") + "'";
            }
            e = e.replaceAll("{:" + s + "}", i);
        }
        return e;
    }
    getFileUrl(e, t, s = {}) {
        return console.warn("Please replace pb.getFileUrl() with pb.files.getURL()"), this.files.getURL(e, t, s);
    }
    buildUrl(e) {
        return console.warn("Please replace pb.buildUrl() with pb.buildURL()"), this.buildURL(e);
    }
    buildURL(e) {
        let t = this.baseURL;
        return "undefined" == ("TURBOPACK compile-time value", "undefined") || !window.location || t.startsWith("https://") || t.startsWith("http://") || (t = window.location.origin?.endsWith("/") ? window.location.origin.substring(0, window.location.origin.length - 1) : window.location.origin || "", this.baseURL.startsWith("/") || (t += window.location.pathname || "/", t += t.endsWith("/") ? "" : "/"), t += this.baseURL), e && (t += t.endsWith("/") ? "" : "/", t += e.startsWith("/") ? e.substring(1) : e), t;
    }
    async send(e, t) {
        t = this.initSendOptions(e, t);
        let s = this.buildURL(e);
        if (this.beforeSend) {
            const e = Object.assign({}, await this.beforeSend(s, t));
            void 0 !== e.url || void 0 !== e.options ? (s = e.url || s, t = e.options || t) : Object.keys(e).length && (t = e, console?.warn && console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."));
        }
        if (void 0 !== t.query) {
            const e = serializeQueryParams(t.query);
            e && (s += (s.includes("?") ? "&" : "?") + e), delete t.query;
        }
        "application/json" == this.getHeader(t.headers, "Content-Type") && t.body && "string" != typeof t.body && (t.body = JSON.stringify(t.body));
        return (t.fetch || fetch)(s, t).then(async (e)=>{
            let s = {};
            try {
                s = await e.json();
            } catch (e) {
                if (t.signal?.aborted || "undefined" != typeof DOMException && e instanceof DOMException) throw e;
            }
            if (this.afterSend && (s = await this.afterSend(e, s, t)), e.status >= 400) throw new ClientResponseError({
                url: e.url,
                status: e.status,
                data: s
            });
            return s;
        }).catch((e)=>{
            throw new ClientResponseError(e);
        });
    }
    initSendOptions(e, t) {
        if ((t = Object.assign({
            method: "GET"
        }, t)).body = function convertToFormDataIfNeeded(e) {
            if ("undefined" == typeof FormData || void 0 === e || "object" != typeof e || null === e || isFormData(e) || !hasFileField(e)) return e;
            const t = new FormData;
            for(const s in e){
                const i = e[s];
                if (void 0 !== i) if ("object" != typeof i || hasFileField({
                    data: i
                })) {
                    const e = Array.isArray(i) ? i : [
                        i
                    ];
                    for (let i of e)t.append(s, i);
                } else {
                    let e = {};
                    e[s] = i, t.append("@jsonPayload", JSON.stringify(e));
                }
            }
            return t;
        }(t.body), normalizeUnknownQueryParams(t), t.query = Object.assign({}, t.params, t.query), void 0 === t.requestKey && (!1 === t.$autoCancel || !1 === t.query.$autoCancel ? t.requestKey = null : (t.$cancelKey || t.query.$cancelKey) && (t.requestKey = t.$cancelKey || t.query.$cancelKey)), delete t.$autoCancel, delete t.query.$autoCancel, delete t.$cancelKey, delete t.query.$cancelKey, null !== this.getHeader(t.headers, "Content-Type") || isFormData(t.body) || (t.headers = Object.assign({}, t.headers, {
            "Content-Type": "application/json"
        })), null === this.getHeader(t.headers, "Accept-Language") && (t.headers = Object.assign({}, t.headers, {
            "Accept-Language": this.lang
        })), this.authStore.token && null === this.getHeader(t.headers, "Authorization") && (t.headers = Object.assign({}, t.headers, {
            Authorization: this.authStore.token
        })), this.enableAutoCancellation && null !== t.requestKey) {
            const s = t.requestKey || (t.method || "GET") + e;
            delete t.requestKey, this.cancelRequest(s);
            const i = new AbortController;
            this.cancelControllers[s] = i, t.signal = i.signal;
        }
        return t;
    }
    getHeader(e, t) {
        e = e || {}, t = t.toLowerCase();
        for(let s in e)if (s.toLowerCase() == t) return e[s];
        return null;
    }
}
class AsyncAuthStore extends BaseAuthStore {
    constructor(e){
        super(), this.queue = [], this.saveFunc = e.save, this.clearFunc = e.clear, this._enqueue(()=>this._loadInitial(e.initial));
    }
    save(e, t) {
        super.save(e, t);
        let s = "";
        try {
            s = JSON.stringify({
                token: e,
                record: t
            });
        } catch (e) {
            console.warn("AsyncAuthStore: failed to stringify the new state");
        }
        this._enqueue(()=>this.saveFunc(s));
    }
    clear() {
        super.clear(), this.clearFunc ? this._enqueue(()=>this.clearFunc()) : this._enqueue(()=>this.saveFunc(""));
    }
    async _loadInitial(e) {
        try {
            if (e = await e) {
                let t;
                "string" == typeof e ? t = JSON.parse(e) || {} : "object" == typeof e && (t = e), this.save(t.token || "", t.record || t.model || null);
            }
        } catch (e) {}
    }
    _enqueue(e) {
        this.queue.push(e), 1 == this.queue.length && this._dequeue();
    }
    _dequeue() {
        this.queue.length && this.queue[0]().finally(()=>{
            this.queue.shift(), this.queue.length && this._dequeue();
        });
    }
}
;
 //# sourceMappingURL=pocketbase.es.mjs.map
}),
"[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bounce",
    ()=>lt,
    "Flip",
    ()=>uo,
    "Icons",
    ()=>W,
    "Slide",
    ()=>mo,
    "ToastContainer",
    ()=>Lt,
    "Zoom",
    ()=>po,
    "collapseToast",
    ()=>Z,
    "cssTransition",
    ()=>$,
    "toast",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
"use client";
function Mt(t) {
    if (!t || typeof document == "undefined") return;
    let o = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
    e.type = "text/css", o.firstChild ? o.insertBefore(e, o.firstChild) : o.appendChild(e), e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
Mt(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
;
var L = (t)=>typeof t == "number" && !isNaN(t), N = (t)=>typeof t == "string", P = (t)=>typeof t == "function", mt = (t)=>N(t) || L(t), B = (t)=>N(t) || P(t) ? t : null, pt = (t, o)=>t === !1 || L(t) && t > 0 ? t : o, z = (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(t) || N(t) || P(t) || L(t);
;
function Z(t, o, e = 300) {
    let { scrollHeight: r, style: s } = t;
    requestAnimationFrame(()=>{
        s.minHeight = "initial", s.height = r + "px", s.transition = `all ${e}ms`, requestAnimationFrame(()=>{
            s.height = "0", s.padding = "0", s.margin = "0", setTimeout(o, e);
        });
    });
}
function $({ enter: t, exit: o, appendPosition: e = !1, collapse: r = !0, collapseDuration: s = 300 }) {
    return function({ children: a, position: d, preventExitTransition: c, done: T, nodeRef: g, isIn: v, playToast: x }) {
        let C = e ? `${t}--${d}` : t, S = e ? `${o}--${d}` : o, E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
            let f = g.current, p = C.split(" "), b = (n)=>{
                n.target === g.current && (x(), f.removeEventListener("animationend", b), f.removeEventListener("animationcancel", b), E.current === 0 && n.type !== "animationcancel" && f.classList.remove(...p));
            };
            (()=>{
                f.classList.add(...p), f.addEventListener("animationend", b), f.addEventListener("animationcancel", b);
            })();
        }, []), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            let f = g.current, p = ()=>{
                f.removeEventListener("animationend", p), r ? Z(f, T, s) : T();
            };
            v || (c ? p() : (()=>{
                E.current = 1, f.className += ` ${S}`, f.addEventListener("animationend", p);
            })());
        }, [
            v
        ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, a);
    };
}
;
function J(t, o) {
    return {
        content: tt(t.content, t.props),
        containerId: t.props.containerId,
        id: t.props.toastId,
        theme: t.props.theme,
        type: t.props.type,
        data: t.props.data || {},
        isLoading: t.props.isLoading,
        icon: t.props.icon,
        reason: t.removalReason,
        status: o
    };
}
function tt(t, o, e = !1) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(t) && !N(t.type) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(t, {
        closeToast: o.closeToast,
        toastProps: o,
        data: o.data,
        isPaused: e
    }) : P(t) ? t({
        closeToast: o.closeToast,
        toastProps: o,
        data: o.data,
        isPaused: e
    }) : t;
}
;
function yt({ closeToast: t, theme: o, ariaLabel: e = "close" }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        className: `Toastify__close-button Toastify__close-button--${o}`,
        type: "button",
        onClick: (r)=>{
            r.stopPropagation(), t(!0);
        },
        "aria-label": e
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 14 16"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    })));
}
;
;
function gt({ delay: t, isRunning: o, closeToast: e, type: r = "default", hide: s, className: l, controlledProgress: a, progress: d, rtl: c, isIn: T, theme: g }) {
    let v = s || a && d === 0, x = {
        animationDuration: `${t}ms`,
        animationPlayState: o ? "running" : "paused"
    };
    a && (x.transform = `scaleX(${d})`);
    let C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Toastify__progress-bar", a ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g}`, `Toastify__progress-bar--${r}`, {
        ["Toastify__progress-bar--rtl"]: c
    }), S = P(l) ? l({
        rtl: c,
        type: r,
        defaultClassName: C
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(C, l), E = {
        [a && d >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: a && d < 1 ? null : ()=>{
            T && e();
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "Toastify__progress-bar--wrp",
        "data-hidden": v
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${r}`
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        role: "progressbar",
        "aria-hidden": v ? "true" : "false",
        "aria-label": "notification timer",
        className: S,
        style: x,
        ...E
    }));
}
;
;
var Xt = 1, at = ()=>`${Xt++}`;
function _t(t, o, e) {
    let r = 1, s = 0, l = [], a = [], d = o, c = new Map, T = new Set, g = (i)=>(T.add(i), ()=>T.delete(i)), v = ()=>{
        a = Array.from(c.values()), T.forEach((i)=>i());
    }, x = ({ containerId: i, toastId: n, updateId: u })=>{
        let h = i ? i !== t : t !== 1, m = c.has(n) && u == null;
        return h || m;
    }, C = (i, n)=>{
        c.forEach((u)=>{
            var h;
            (n == null || n === u.props.toastId) && ((h = u.toggle) == null || h.call(u, i));
        });
    }, S = (i)=>{
        var n, u;
        (u = (n = i.props) == null ? void 0 : n.onClose) == null || u.call(n, i.removalReason), i.isActive = !1;
    }, E = (i)=>{
        if (i == null) c.forEach(S);
        else {
            let n = c.get(i);
            n && S(n);
        }
        v();
    }, f = ()=>{
        s -= l.length, l = [];
    }, p = (i)=>{
        var m, _;
        let { toastId: n, updateId: u } = i.props, h = u == null;
        i.staleId && c.delete(i.staleId), i.isActive = !0, c.set(n, i), v(), e(J(i, h ? "added" : "updated")), h && ((_ = (m = i.props).onOpen) == null || _.call(m));
    };
    return {
        id: t,
        props: d,
        observe: g,
        toggle: C,
        removeToast: E,
        toasts: c,
        clearQueue: f,
        buildToast: (i, n)=>{
            if (x(n)) return;
            let { toastId: u, updateId: h, data: m, staleId: _, delay: k } = n, M = h == null;
            M && s++;
            let A = {
                ...d,
                style: d.toastStyle,
                key: r++,
                ...Object.fromEntries(Object.entries(n).filter(([D, Y])=>Y != null)),
                toastId: u,
                updateId: h,
                data: m,
                isIn: !1,
                className: B(n.className || d.toastClassName),
                progressClassName: B(n.progressClassName || d.progressClassName),
                autoClose: n.isLoading ? !1 : pt(n.autoClose, d.autoClose),
                closeToast (D) {
                    c.get(u).removalReason = D, E(u);
                },
                deleteToast () {
                    let D = c.get(u);
                    if (D != null) {
                        if (e(J(D, "removed")), c.delete(u), s--, s < 0 && (s = 0), l.length > 0) {
                            p(l.shift());
                            return;
                        }
                        v();
                    }
                }
            };
            A.closeButton = d.closeButton, n.closeButton === !1 || z(n.closeButton) ? A.closeButton = n.closeButton : n.closeButton === !0 && (A.closeButton = z(d.closeButton) ? d.closeButton : !0);
            let R = {
                content: i,
                props: A,
                staleId: _
            };
            d.limit && d.limit > 0 && s > d.limit && M ? l.push(R) : L(k) ? setTimeout(()=>{
                p(R);
            }, k) : p(R);
        },
        setProps (i) {
            d = i;
        },
        setToggle: (i, n)=>{
            let u = c.get(i);
            u && (u.toggle = n);
        },
        isToastActive: (i)=>{
            var n;
            return (n = c.get(i)) == null ? void 0 : n.isActive;
        },
        getSnapshot: ()=>a
    };
}
var I = new Map, F = [], st = new Set, Vt = (t)=>st.forEach((o)=>o(t)), bt = ()=>I.size > 0;
function Qt() {
    F.forEach((t)=>nt(t.content, t.options)), F = [];
}
var vt = (t, { containerId: o })=>{
    var e;
    return (e = I.get(o || 1)) == null ? void 0 : e.toasts.get(t);
};
function X(t, o) {
    var r;
    if (o) return !!((r = I.get(o)) != null && r.isToastActive(t));
    let e = !1;
    return I.forEach((s)=>{
        s.isToastActive(t) && (e = !0);
    }), e;
}
function ht(t) {
    if (!bt()) {
        F = F.filter((o)=>t != null && o.options.toastId !== t);
        return;
    }
    if (t == null || mt(t)) I.forEach((o)=>{
        o.removeToast(t);
    });
    else if (t && ("containerId" in t || "id" in t)) {
        let o = I.get(t.containerId);
        o ? o.removeToast(t.id) : I.forEach((e)=>{
            e.removeToast(t.id);
        });
    }
}
var Ct = (t = {})=>{
    I.forEach((o)=>{
        o.props.limit && (!t.containerId || o.id === t.containerId) && o.clearQueue();
    });
};
function nt(t, o) {
    z(t) && (bt() || F.push({
        content: t,
        options: o
    }), I.forEach((e)=>{
        e.buildToast(t, o);
    }));
}
function xt(t) {
    var o;
    (o = I.get(t.containerId || 1)) == null || o.setToggle(t.id, t.fn);
}
function rt(t, o) {
    I.forEach((e)=>{
        (o == null || !(o != null && o.containerId) || (o == null ? void 0 : o.containerId) === e.id) && e.toggle(t, o == null ? void 0 : o.id);
    });
}
function Et(t) {
    let o = t.containerId || 1;
    return {
        subscribe (e) {
            let r = _t(o, t, Vt);
            I.set(o, r);
            let s = r.observe(e);
            return Qt(), ()=>{
                s(), I.delete(o);
            };
        },
        setProps (e) {
            var r;
            (r = I.get(o)) == null || r.setProps(e);
        },
        getSnapshot () {
            var e;
            return (e = I.get(o)) == null ? void 0 : e.getSnapshot();
        }
    };
}
function Pt(t) {
    return st.add(t), ()=>{
        st.delete(t);
    };
}
function Wt(t) {
    return t && (N(t.toastId) || L(t.toastId)) ? t.toastId : at();
}
function U(t, o) {
    return nt(t, o), o.toastId;
}
function V(t, o) {
    return {
        ...o,
        type: o && o.type || t,
        toastId: Wt(o)
    };
}
function Q(t) {
    return (o, e)=>U(o, V(t, e));
}
function y(t, o) {
    return U(t, V("default", o));
}
y.loading = (t, o)=>U(t, V("default", {
        isLoading: !0,
        autoClose: !1,
        closeOnClick: !1,
        closeButton: !1,
        draggable: !1,
        ...o
    }));
function Gt(t, { pending: o, error: e, success: r }, s) {
    let l;
    o && (l = N(o) ? y.loading(o, s) : y.loading(o.render, {
        ...s,
        ...o
    }));
    let a = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null
    }, d = (T, g, v)=>{
        if (g == null) {
            y.dismiss(l);
            return;
        }
        let x = {
            type: T,
            ...a,
            ...s,
            data: v
        }, C = N(g) ? {
            render: g
        } : g;
        return l ? y.update(l, {
            ...x,
            ...C
        }) : y(C.render, {
            ...x,
            ...C
        }), v;
    }, c = P(t) ? t() : t;
    return c.then((T)=>d("success", r, T)).catch((T)=>d("error", e, T)), c;
}
y.promise = Gt;
y.success = Q("success");
y.info = Q("info");
y.error = Q("error");
y.warning = Q("warning");
y.warn = y.warning;
y.dark = (t, o)=>U(t, V("default", {
        theme: "dark",
        ...o
    }));
function qt(t) {
    ht(t);
}
y.dismiss = qt;
y.clearWaitingQueue = Ct;
y.isActive = X;
y.update = (t, o = {})=>{
    let e = vt(t, o);
    if (e) {
        let { props: r, content: s } = e, l = {
            delay: 100,
            ...r,
            ...o,
            toastId: o.toastId || t,
            updateId: at()
        };
        l.toastId !== t && (l.staleId = t);
        let a = l.render || s;
        delete l.render, U(a, l);
    }
};
y.done = (t)=>{
    y.update(t, {
        progress: 1
    });
};
y.onChange = Pt;
y.play = (t)=>rt(!0, t);
y.pause = (t)=>rt(!1, t);
;
function It(t) {
    var a;
    let { subscribe: o, getSnapshot: e, setProps: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(Et(t)).current;
    r(t);
    let s = (a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(o, e, e)) == null ? void 0 : a.slice();
    function l(d) {
        if (!s) return [];
        let c = new Map;
        return t.newestOnTop && s.reverse(), s.forEach((T)=>{
            let { position: g } = T.props;
            c.has(g) || c.set(g, []), c.get(g).push(T);
        }), Array.from(c, (T)=>d(T[0], T[1]));
    }
    return {
        getToastToRender: l,
        isToastActive: X,
        count: s == null ? void 0 : s.length
    };
}
;
function At(t) {
    let [o, e] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), [r, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        start: 0,
        delta: 0,
        removalDistance: 0,
        canCloseOnClick: !0,
        canDrag: !1,
        didMove: !1
    }).current, { autoClose: d, pauseOnHover: c, closeToast: T, onClick: g, closeOnClick: v } = t;
    xt({
        id: t.toastId,
        containerId: t.containerId,
        fn: e
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (t.pauseOnFocusLoss) return x(), ()=>{
            C();
        };
    }, [
        t.pauseOnFocusLoss
    ]);
    function x() {
        document.hasFocus() || p(), window.addEventListener("focus", f), window.addEventListener("blur", p);
    }
    function C() {
        window.removeEventListener("focus", f), window.removeEventListener("blur", p);
    }
    function S(m) {
        if (t.draggable === !0 || t.draggable === m.pointerType) {
            b();
            let _ = l.current;
            a.canCloseOnClick = !0, a.canDrag = !0, _.style.transition = "none", t.draggableDirection === "x" ? (a.start = m.clientX, a.removalDistance = _.offsetWidth * (t.draggablePercent / 100)) : (a.start = m.clientY, a.removalDistance = _.offsetHeight * (t.draggablePercent === 80 ? t.draggablePercent * 1.5 : t.draggablePercent) / 100);
        }
    }
    function E(m) {
        let { top: _, bottom: k, left: M, right: A } = l.current.getBoundingClientRect();
        m.nativeEvent.type !== "touchend" && t.pauseOnHover && m.clientX >= M && m.clientX <= A && m.clientY >= _ && m.clientY <= k ? p() : f();
    }
    function f() {
        e(!0);
    }
    function p() {
        e(!1);
    }
    function b() {
        a.didMove = !1, document.addEventListener("pointermove", n), document.addEventListener("pointerup", u);
    }
    function i() {
        document.removeEventListener("pointermove", n), document.removeEventListener("pointerup", u);
    }
    function n(m) {
        let _ = l.current;
        if (a.canDrag && _) {
            a.didMove = !0, o && p(), t.draggableDirection === "x" ? a.delta = m.clientX - a.start : a.delta = m.clientY - a.start, a.start !== m.clientX && (a.canCloseOnClick = !1);
            let k = t.draggableDirection === "x" ? `${a.delta}px, var(--y)` : `0, calc(${a.delta}px + var(--y))`;
            _.style.transform = `translate3d(${k},0)`, _.style.opacity = `${1 - Math.abs(a.delta / a.removalDistance)}`;
        }
    }
    function u() {
        i();
        let m = l.current;
        if (a.canDrag && a.didMove && m) {
            if (a.canDrag = !1, Math.abs(a.delta) > a.removalDistance) {
                s(!0), t.closeToast(!0), t.collapseAll();
                return;
            }
            m.style.transition = "transform 0.2s, opacity 0.2s", m.style.removeProperty("transform"), m.style.removeProperty("opacity");
        }
    }
    let h = {
        onPointerDown: S,
        onPointerUp: E
    };
    return d && c && (h.onMouseEnter = p, t.stacked || (h.onMouseLeave = f)), v && (h.onClick = (m)=>{
        g && g(m), a.canCloseOnClick && T(!0);
    }), {
        playToast: f,
        pauseToast: p,
        isRunning: o,
        preventExitTransition: r,
        toastRef: l,
        eventHandlers: h
    };
}
;
var Ot = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
;
;
;
var G = ({ theme: t, type: o, isLoading: e, ...r })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${o})`,
        ...r
    });
function ao(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(G, {
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
    }));
}
function so(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(G, {
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
    }));
}
function no(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(G, {
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
    }));
}
function ro(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(G, {
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
    }));
}
function io() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "Toastify__spinner"
    });
}
var W = {
    info: so,
    warning: ao,
    success: no,
    error: ro,
    spinner: io
}, lo = (t)=>t in W;
function Nt({ theme: t, type: o, isLoading: e, icon: r }) {
    let s = null, l = {
        theme: t,
        type: o
    };
    return r === !1 || (P(r) ? s = r({
        ...l,
        isLoading: e
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(r) ? s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(r, l) : e ? s = W.spinner() : lo(o) && (s = W[o](l))), s;
}
var wt = (t)=>{
    let { isRunning: o, preventExitTransition: e, toastRef: r, eventHandlers: s, playToast: l } = At(t), { closeButton: a, children: d, autoClose: c, onClick: T, type: g, hideProgressBar: v, closeToast: x, transition: C, position: S, className: E, style: f, progressClassName: p, updateId: b, role: i, progress: n, rtl: u, toastId: h, deleteToast: m, isIn: _, isLoading: k, closeOnClick: M, theme: A, ariaLabel: R } = t, D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Toastify__toast", `Toastify__toast-theme--${A}`, `Toastify__toast--${g}`, {
        ["Toastify__toast--rtl"]: u
    }, {
        ["Toastify__toast--close-on-click"]: M
    }), Y = P(E) ? E({
        rtl: u,
        position: S,
        type: g,
        defaultClassName: D
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(D, E), ft = Nt(t), dt = !!n || !c, j = {
        closeToast: x,
        type: g,
        theme: A
    }, H = null;
    return a === !1 || (P(a) ? H = a(j) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(a) ? H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(a, j) : H = yt(j)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(C, {
        isIn: _,
        done: m,
        position: S,
        preventExitTransition: e,
        nodeRef: r,
        playToast: l
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: h,
        tabIndex: 0,
        onClick: T,
        "data-in": _,
        className: Y,
        ...s,
        style: f,
        ref: r,
        ..._ && {
            role: i,
            "aria-label": R
        }
    }, ft != null && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Toastify__toast-icon", {
            ["Toastify--animate-icon Toastify__zoom-enter"]: !k
        })
    }, ft), tt(d, t, !o), H, !t.customProgressBar && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(gt, {
        ...b && !dt ? {
            key: `p-${b}`
        } : {},
        rtl: u,
        theme: A,
        delay: c,
        isRunning: o,
        isIn: _,
        closeToast: x,
        hide: v,
        type: g,
        className: p,
        controlledProgress: dt,
        progress: n || 0
    })));
};
var K = (t, o = !1)=>({
        enter: `Toastify--animate Toastify__${t}-enter`,
        exit: `Toastify--animate Toastify__${t}-exit`,
        appendPosition: o
    }), lt = $(K("bounce", !0)), mo = $(K("slide", !0)), po = $(K("zoom")), uo = $(K("flip"));
var _o = {
    position: "top-right",
    transition: lt,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
    "aria-label": "Notifications Alt+T",
    hotKeys: (t)=>t.altKey && t.code === "KeyT"
};
function Lt(t) {
    let o = {
        ..._o,
        ...t
    }, e = t.stacked, [r, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!0), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), { getToastToRender: a, isToastActive: d, count: c } = It(o), { className: T, style: g, rtl: v, containerId: x, hotKeys: C } = o;
    function S(f) {
        let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Toastify__toast-container", `Toastify__toast-container--${f}`, {
            ["Toastify__toast-container--rtl"]: v
        });
        return P(T) ? T({
            position: f,
            rtl: v,
            defaultClassName: p
        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(p, B(T));
    }
    function E() {
        e && (s(!0), y.play());
    }
    return Ot(()=>{
        var f;
        if (e) {
            let p = l.current.querySelectorAll('[data-in="true"]'), b = 12, i = (f = o.position) == null ? void 0 : f.includes("top"), n = 0, u = 0;
            Array.from(p).reverse().forEach((h, m)=>{
                let _ = h;
                _.classList.add("Toastify__toast--stacked"), m > 0 && (_.dataset.collapsed = `${r}`), _.dataset.pos || (_.dataset.pos = i ? "top" : "bot");
                let k = n * (r ? .2 : 1) + (r ? 0 : b * m);
                _.style.setProperty("--y", `${i ? k : k * -1}px`), _.style.setProperty("--g", `${b}`), _.style.setProperty("--s", `${1 - (r ? u : 0)}`), n += _.offsetHeight, u += .025;
            });
        }
    }, [
        r,
        c,
        e
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function f(p) {
            var i;
            let b = l.current;
            C(p) && ((i = b.querySelector('[tabIndex="0"]')) == null || i.focus(), s(!1), y.pause()), p.key === "Escape" && (document.activeElement === b || b != null && b.contains(document.activeElement)) && (s(!0), y.play());
        }
        return document.addEventListener("keydown", f), ()=>{
            document.removeEventListener("keydown", f);
        };
    }, [
        C
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("section", {
        ref: l,
        className: "Toastify",
        id: x,
        onMouseEnter: ()=>{
            e && (s(!1), y.pause());
        },
        onMouseLeave: E,
        "aria-live": "polite",
        "aria-atomic": "false",
        "aria-relevant": "additions text",
        "aria-label": o["aria-label"]
    }, a((f, p)=>{
        let b = p.length ? {
            ...g
        } : {
            ...g,
            pointerEvents: "none"
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            tabIndex: -1,
            className: S(f),
            "data-stacked": e,
            style: b,
            key: `c-${f}`
        }, p.map(({ content: i, props: n })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(wt, {
                ...n,
                stacked: e,
                collapseAll: E,
                isIn: d(n.toastId, n.containerId),
                key: `t-${n.key}`
            }, i)));
    }));
}
;
 //# sourceMappingURL=index.mjs.map
}),
];

//# sourceMappingURL=_67b46367._.js.map