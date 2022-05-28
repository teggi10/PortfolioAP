import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { AppRoutingModule } from './app-routing.module';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { CrearEducacionComponent } from './components/crear-educacion/crear-educacion.component';
import { EditarEducacionComponent } from './components/editar-educacion/editar-educacion.component';
import { EditarExperienciaLaboralComponent } from './components/editar-experiencia-laboral/editar-experiencia-laboral.component';
import { CrearExperienciaLaboralComponent } from './components/crear-experiencia-laboral/crear-experiencia-laboral.component';
import { CrearProyectoComponent } from './components/crear-proyecto/crear-proyecto.component';
import { EditarProyectoComponent } from './components/editar-proyecto/editar-proyecto.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    PortfolioComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    PageNotFoundComponent,
    EducacionComponent,
    ExperienciaLaboralComponent,
    CrearEducacionComponent,
    EditarEducacionComponent,
    EditarExperienciaLaboralComponent,
    CrearExperienciaLaboralComponent,
    CrearProyectoComponent,
    EditarProyectoComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
