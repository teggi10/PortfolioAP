import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { ExperienciaLaboralService } from 'src/app/services/experiencia-laboral.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  experienciasLaborales! : ExperienciaLaboral[];
  roles!: string[];
  isAdmin = false;
  constructor(private experienciaLaboralService : ExperienciaLaboralService,private toastr: ToastrService
    ,private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getExperienciasLaborales();
    this.roles = this.tokenService.getAuthorities();
        this.roles.forEach(rol => {
      if(rol == 'ROLE_ADMIN'){
       this.isAdmin = true;
}
    })
  }

  getExperienciasLaborales(){
    this.experienciaLaboralService.getExperienciasLaborales().subscribe(data => {
      this.experienciasLaborales = data;
    })
  }

  public eliminarExperienciaLaboral(id: number){
    alert('¿Seguro desea eliminar esta experiencia?');
    this.experienciasLaborales.forEach( experiencia => {
     if(experiencia.id == id)
     this.experienciasLaborales.splice(this.experienciasLaborales.indexOf(experiencia), 1)
   })
    this.experienciaLaboralService.borrarExperienciaLaboral(id).subscribe(() => {
     this.toastr.success('La experiencia  fue eliminado con exito', 'Experiencia eliminado');
     //this.router.navigate(['jugadores'],{queryParams: {id: this.idEquipo}});
   }, (error: any) =>{
     console.log(error);
   });
}
}
