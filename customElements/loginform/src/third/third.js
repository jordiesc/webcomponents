System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Third;
    return {
        setters: [],
        execute: function () {
            Third = class Third {
                constructor(mensage) {
                    this.mensage = mensage;
                }
                getMensage() {
                    return 'tercer mensege is' + this.mensage;
                }
            };
            exports_1("default", Third);
        }
    };
});
