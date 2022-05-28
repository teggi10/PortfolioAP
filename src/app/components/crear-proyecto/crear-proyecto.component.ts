import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {

  proyectoForm: FormGroup;
  proyecto: Proyecto = {
    id : 0,
    nombre : '',
    urlFoto: '',
    informacion: ''
  };


  constructor( private fb: FormBuilder, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute, private proyectoService : ProyectoService) { 
    this.proyectoForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      urlFoto: [''],
      informacion: ['', Validators.required]
    })
    

 
  }
  
  ngOnInit(): void {
  }
 
  agregarProyecto(this: any){
    const proyecto: Proyecto ={
      id: 0,
      nombre : this.proyectoForm.get('nombre')?.value,
      urlFoto : this.proyectoForm.get('urlFoto')?.value,
      informacion : this.proyectoForm.get('informacion')?.value,
    }
    
    this.proyectoService.guardarProyecto(proyecto).subscribe(() => {
      this.toastr.success('La proyecto fue cargado con exito', 'proyecto cargado');
     
    },
    (error: any) =>{
      console.log(error);
      
    });

  }
}
