import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { ExperienciaLaboralService } from 'src/app/services/experiencia-laboral.service';

@Component({
  selector: 'app-crear-experiencia-laboral',
  templateUrl: './crear-experiencia-laboral.component.html',
  styleUrls: ['./crear-experiencia-laboral.component.css']
})
export class CrearExperienciaLaboralComponent implements OnInit {

  experienciaForm: FormGroup;
  id!:number;
  experiencia: ExperienciaLaboral = {
    id : 0,
    nombre : '',
    fecha: '',
    institucion: '',
    informacion: ''
  };


  constructor( private fb: FormBuilder, private router: Router, private toastr: ToastrService,
     private aRoute: ActivatedRoute, private experienciaService : ExperienciaLaboralService) { 
    this.experienciaForm = this.fb.group({
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

  }
 
  getexperiencia(){
    this.experienciaService.getExperienciaLaboral(this.id).subscribe(data => {
      this.experiencia = data;
    this.rellenarCampos(data);
    })
  }
  
  public rellenarCampos(experiencia: ExperienciaLaboral){
    this.experienciaForm = this.fb.group({
      id: [experiencia.id],
      nombre: [experiencia.nombre, Validators.required],
      fecha: [experiencia.fecha],
      institucion: [experiencia.institucion, Validators.required],
      informacion: [experiencia.informacion, Validators.required],

    })
  }

  agregarExperienciaLaboral(this: any){
    const EXPERIENCIA: ExperienciaLaboral ={
      id: 0,
      nombre : this.experienciaForm.get('nombre')?.value,
      fecha : this.experienciaForm.get('fecha')?.value,
      institucion : this.experienciaForm.get('institucion')?.value,
      informacion : this.experienciaForm.get('informacion')?.value,
    }
   
    
    this.experienciaService.guardarExperienciaLaboral(EXPERIENCIA).subscribe(() => {
      this.toastr.success('La experiencia  fue cargado con exito', 'Experiencia cargada');
     
    },
    (error: any) =>{
      console.log(error);
      
    });

  }

}
