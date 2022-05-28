import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

  proyectoForm: FormGroup;
  id!:number;
  proyecto: Proyecto = {
    id : 0,
    nombre : '',
    urlFoto: '',
    informacion: ''
  };


  constructor( private fb: FormBuilder, private router: Router, private toastr: ToastrService,
     private aRoute: ActivatedRoute, private proyectoService : ProyectoService) { 
    this.proyectoForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      urlFoto: [''],
      informacion: ['', Validators.required]
    })
    

 
  }
  
  ngOnInit(): void {
    /*this.aRoute.queryParams.pipe(filter(params => params.id)).subscribe(params => {
      this.id = params.id;
    })*/
    
    this.id = this.aRoute.snapshot.params['id'];

   this.getProyecto();
  }
 
  getProyecto(){
    this.proyectoService.getProyecto(this.id).subscribe(data => {
      this.proyecto = data;
    this.rellenarCampos(data);
    })
  }
  
  public rellenarCampos(proyecto: Proyecto){
    this.proyectoForm = this.fb.group({
      id: [proyecto.id],
      nombre: [proyecto.nombre, Validators.required],
      urlFoto: [proyecto.urlFoto],
      informacion: [proyecto.informacion, Validators.required],

    })
  }

  actualizarProyecto(){
    const proyecto: Proyecto ={
      id: 0,
      nombre : this.proyectoForm.get('nombre')?.value,
      urlFoto : this.proyectoForm.get('urlFoto')?.value,
      informacion : this.proyectoForm.get('informacion')?.value,
    }

      
      this.proyectoService.actualizarProyecto(this.id,proyecto).subscribe(() => {
        this.toastr.success('La proyecto  fue actualizado con exito', 'proyecto actualizado');
        this.router.navigate(['/portfolio'])
      }, (error: any) =>{
        console.log(error);
        this.proyectoForm.reset();
        
      }
      );
  }

}
