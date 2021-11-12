import {Persona} from "./persona";
import {Habilidades} from "./habilidades";

export class SuperHeroe extends Persona implements Habilidades{

    invisible: boolean;
    superFuerza: boolean;
    volar: boolean;

    constructor( nombre: string, edad: number, invisible: boolean, superFuerza: boolean, volar: boolean) {
        super(nombre, edad);
        this.invisible = invisible;
        this.superFuerza = superFuerza;
        this.volar = volar;
    }



}