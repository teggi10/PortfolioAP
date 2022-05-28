import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones!: Educacion[];
  roles!: string[];
  isAdmin = false;
  constructor(private educacionService: EducacionService,private toastr: ToastrService
    ,private tokenService: TokenService, private router: Router,  private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEducacion();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if(rol == 'ROLE_ADMIN'){
       this.isAdmin = true;
}
    })
  }

  getEducacion(){
    this.educacionService.getEducaciones().subscribe(data => {
      this.educaciones = data;
    })
  }

  public eliminarEducacion(id: number){
    alert('¿Seguro desea eliminar esta educacion?');
    this.educaciones.forEach( educacion => {
     if(educacion.id == id)
     this.educaciones.splice(this.educaciones.indexOf(educacion), 1)
   })
    this.educacionService.borrarEducacion(id).subscribe(() => {
     this.toastr.success('LA educacion  fue eliminada con exito', 'Educacion eliminado');
     //this.router.navigate(['jugadores'],{queryParams: {id: this.idEquipo}});
   }, (error: any) =>{
     console.log(error);
   });
}

public editarEducacion(id: number){
  console.log(id);
  this.router.navigate(['/editar-educacion'],{queryParams: {id: id}});
}
}
