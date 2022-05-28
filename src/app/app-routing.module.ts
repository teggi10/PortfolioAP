import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditarEducacionComponent } from './components/editar-educacion/editar-educacion.component';
import { PersonaGuardService } from './guards/persona-guard.service';
import { CrearEducacionComponent } from './components/crear-educacion/crear-educacion.component';
import { CrearExperienciaLaboralComponent } from './components/crear-experiencia-laboral/crear-experiencia-laboral.component';
import { EditarExperienciaLaboralComponent } from './components/editar-experiencia-laboral/editar-experiencia-laboral.component';
import { EditarProyectoComponent } from './components/editar-proyecto/editar-proyecto.component';
import { CrearProyectoComponent } from './components/crear-proyecto/crear-proyecto.component';


const routes : Routes = [
  
  {path: '', redirectTo: 'header', pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'editar-proyecto/:id', component: EditarProyectoComponent, canActivate : [PersonaGuardService], data: {expectedRol:['admin']}},
  {path: 'crear-proyecto', component: CrearProyectoComponent, canActivate : [PersonaGuardService], data: {expectedRol:['admin']}},
  {path: 'about', component: AboutComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'editar-educacion/:id', component: EditarEducacionComponent, canActivate : [PersonaGuardService], data: {expectedRol:['admin']}},
  {path: 'crear-educacion', component: CrearEducacionComponent, canActivate : [PersonaGuardService], data: {expectedRol:['admin']}},
  {path: 'experiencia-laboral', component: ExperienciaLaboralComponent},
  {path: 'editar-experiencia-laboral/:id', component: EditarExperienciaLaboralComponent, canActivate : [PersonaGuardService], data: {expectedRol:['admin']}},
  {path: 'crear-experiencia-laboral', component: CrearExperienciaLaboralComponent, canActivate : [PersonaGuardService], data: {expectedRol:['admin']}},
  {path: '**', component: PageNotFoundComponent}
 ]
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
