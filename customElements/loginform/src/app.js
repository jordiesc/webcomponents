System.register(["second.js", "loging/logingview.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var second_js_1, logingview_js_1, mifuncion;
    return {
        setters: [
            function (second_js_1_1) {
                second_js_1 = second_js_1_1;
            },
            function (logingview_js_1_1) {
                logingview_js_1 = logingview_js_1_1;
            }
        ],
        execute: function () {
            exports_1("mifuncion", mifuncion = function () {
                let mensage = new second_js_1.default('hola caracola');
                console.log(mensage.getMensage());
                window.customElements.define('login-form', logingview_js_1.LoginForm);
                var el = document.getElementById('MiApplicacion');
                //el!.appendChild( document.createElement('login-form'));
                el.appendChild(new logingview_js_1.LoginForm());
            });
        }
    };
});
