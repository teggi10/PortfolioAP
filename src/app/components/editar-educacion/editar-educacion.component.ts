import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  educacionForm: FormGroup;
  id!:number;
  educacion: Educacion = {
    id : 0,
    nombre : '',
    fecha: '',
    institucion: '',
    informacion: ''
  };


  constructor( private fb: FormBuilder, private router: Router, private toastr: ToastrService,
     private aRoute: ActivatedRoute, private educacionService : EducacionService) { 
    this.educacionForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      fecha: [''],
      institucion: ['', Validators.required],
      informacion: ['', Validators.required]
    })
    

 
  }
  
  ngOnInit(): void {
    /*this.aRoute.queryParams.pipe(filter(params => params.id)).subscribe(params => {
      this.id = params.id;
    })*/
    
    this.id = this.aRoute.snapshot.params['id'];

   this.getEducacion();
  }
 
  getEducacion(){
    this.educacionService.getEducacion(this.id).subscribe(data => {
      this.educacion = data;
    this.rellenarCampos(data);
    })
  }
  
  public rellenarCampos(educacion: Educacion){
    this.educacionForm = this.fb.group({
      id: [educacion.id],
      nombre: [educacion.nombre, Validators.required],
      fecha: [educacion.fecha],
      institucion: [educacion.institucion, Validators.required],
      informacion: [educacion.informacion, Validators.required],

    })
  }

  agregarEducacion(this: any){
    const EDUCACION: Educacion ={
      id: 0,
      nombre : this.educacionForm.get('nombre')?.value,
      fecha : this.educacionForm.get('fecha')?.value,
      institucion : this.educacionForm.get('institucion')?.value,
      informacion : this.educacionForm.get('informacion')?.value,
    }
   
    console.log(EDUCACION);
    
    this.educacionService.guardarEducacion(EDUCACION).subscribe(() => {
      this.toastr.success('El jugador  fue cargado con exito', 'Jugador cargado');
     
    },
    (error: any) =>{
      console.log(error);
      
    });

  }
}