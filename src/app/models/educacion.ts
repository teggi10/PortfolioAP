export class Educacion {

    id: number;
    nombre:string;
    fecha:string;
    institucion:string;
    informacion:string;
   
    constructor(id:number, nombre:string, fecha:string, institucion:string, informacion:string){

            this.id = id;
            this.nombre = nombre;
            this.fecha =fecha;
            this.institucion = institucion;
            this.informacion = informacion;           
    }
}