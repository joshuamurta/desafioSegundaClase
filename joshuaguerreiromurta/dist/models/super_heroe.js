"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperHeroe = void 0;
var persona_1 = require("./persona");
var SuperHeroe = /** @class */ (function (_super) {
    __extends(SuperHeroe, _super);
    function SuperHeroe(nombre, edad, invisible, superFuerza, volar) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.invisible = invisible;
        _this.superFuerza = superFuerza;
        _this.volar = volar;
        return _this;
    }
    return SuperHeroe;
}(persona_1.Persona));
exports.SuperHeroe = SuperHeroe;
