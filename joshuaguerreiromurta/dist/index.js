"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var super_heroe_1 = require("./models/super_heroe");
var spiderman = new super_heroe_1.SuperHeroe("Peter Parker", 33, false, true, false);
var batman = new super_heroe_1.SuperHeroe("Bruno Diaz", 40, false, true, false);
var superman = new super_heroe_1.SuperHeroe("Clark Kent", 80, false, true, true);
var listaHeroes = [];
listaHeroes.push(batman, superman, spiderman);
listaHeroes.forEach(function (value) {
    console.log("Nombre: " + value.nombre + '\n' + "Edad: " + value.edad + '\n' + "Poderes: " + (value.invisible == true ? 'Invisible ' : '') + (value.superFuerza == true ? 'Super Fuerza ' : '') + (value.volar == true ? 'Vuela' : ''));
    console.log('\n');
});
