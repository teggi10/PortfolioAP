import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  persona!: Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersona();
    console.log(this.persona);
  }

  getPersona(){
    this.personaService.getPersonas().subscribe(data => {
 this.persona = data[0];
    })
  }

}
