"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var super_heroe_1 = require("./models/super_heroe");
var spiderman = new super_heroe_1.SuperHeroe("Peter Parker", 33, false, true, false);
console.log(spiderman.nombre);
console.log(spiderman.edad);
console.log(spiderman.superFuerza);
