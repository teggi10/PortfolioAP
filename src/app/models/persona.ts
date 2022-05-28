export class Persona {

    idPersona: number;
    nombre:string;
    apellido:string;
    domicilio:string;
    email:string;
    urlFoto:string;
    sobreMi:string;
    fechaNac:string;
    telefono:string;
    constructor(idPersona:number, nombre:string, apellido:string, domicilio:string, email:string, urlFoto:string, 
        sobreMi:string, fechaNac:string, telefono:string){

            this.idPersona = idPersona;
            this.nombre = nombre;
            this.apellido =apellido;
            this.domicilio = domicilio;
            this.email = email;
            this.urlFoto = urlFoto;
            this.sobreMi = sobreMi;
            this.fechaNac = fechaNac;
            this.telefono = telefono;
    }
}