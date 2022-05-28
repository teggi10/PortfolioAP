export class Proyecto {

    id: number;
    nombre:string;
    urlFoto:string;
    informacion:string;
   
    constructor(id:number, nombre:string, urlFoto:string, informacion:string){

            this.id = id;
            this.nombre = nombre;
            this.urlFoto =urlFoto;
            this.informacion = informacion;           
    }
}