import {SuperHeroe} from './models/super_heroe';

let spiderman = new SuperHeroe("Peter Parker",33,false,true,false);
let batman = new SuperHeroe("Bruno Diaz",40,false,true,false);
let superman = new SuperHeroe("Clark Kent",80,false,true,true);

var listaHeroes: Array<SuperHeroe> = [];

listaHeroes.push(batman,superman,spiderman);

listaHeroes.forEach(function (value){
    console.log("Nombre: " + value.nombre + '\n' + "Edad: " + value.edad + '\n' + "Poderes: " + (value.invisible == true ? 'Invisible ' : '') + (value.superFuerza == true ? 'Super Fuerza ' : '') + (value.volar == true ? 'Vuela' : ''));
    console.log('\n');
})
