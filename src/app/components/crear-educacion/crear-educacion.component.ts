import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-crear-educacion',
  templateUrl: './crear-educacion.component.html',
  styleUrls: ['./crear-educacion.component.css']
})
export class CrearEducacionComponent implements OnInit {

  educacionForm: FormGroup;
  educacion: Educacion = {
    id : 0,
    nombre : '',
    fecha: '',
    institucion: '',
    informacion: ''
  };


  constructor( private fb: FormBuilder, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute, private educacionService : EducacionService) { 
    this.educacionForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      fecha: [''],
      institucion: ['', Validators.required],
      informacion: ['', Validators.required]
    })
    

 
  }
  
  ngOnInit(): void {
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
      this.toastr.success('La educacion fue cargado con exito', 'Educacion cargado');
     
    },
    (error: any) =>{
      console.log(error);
      
    });

  }
}
