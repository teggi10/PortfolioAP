import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  proyectos!: Proyecto[];
  roles!: string[];
  isAdmin = false;
  constructor(private proyectoService: ProyectoService,private toastr: ToastrService
    ,private tokenService: TokenService, private router: Router,  private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProyectos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if(rol == 'ROLE_ADMIN'){
       this.isAdmin = true;
}
    })
  }

  getProyectos(){
    this.proyectoService.getProyectos().subscribe(data => {
      this.proyectos = data;
    })
  }

  public eliminarProyecto(id: number){
    alert('¿Seguro desea eliminar este proyecto?');
    this.proyectos.forEach( educacion => {
     if(educacion.id == id)
     this.proyectos.splice(this.proyectos.indexOf(educacion), 1)
   })
    this.proyectoService.borrarProyecto(id).subscribe(() => {
     this.toastr.success('El proyecto  fue eliminada con exito', 'Proyecto eliminado');
   }, (error: any) =>{
     console.log(error);
   });
}
}
