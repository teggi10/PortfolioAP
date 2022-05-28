import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  persona!: Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersona();
  }

  getPersona(){
    this.personaService.getPersona(1).subscribe(data => {
 this.persona = data;

    })
  }
}
