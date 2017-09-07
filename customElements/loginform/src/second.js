System.register(["third/third"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var third_1, Second;
    return {
        setters: [
            function (third_1_1) {
                third_1 = third_1_1;
            }
        ],
        execute: function () {
            Second = class Second {
                constructor(mensage) {
                    this.msg = '';
                    this.msg = mensage;
                }
                getMensage() {
                    let msgfinal = 'my message is ' + this.msg;
                    return new third_1.default("mi tercer mensage").getMensage() + msgfinal;
                }
            };
            exports_1("default", Second);
        }
    };
});
