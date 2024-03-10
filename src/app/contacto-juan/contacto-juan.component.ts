import { Component, OnInit } from "@angular/core";



import { Router } from '@angular/router';

import { AppState } from './../app.state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { experiencia_luis, contactosjs, emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from './../app.state';


@Component({
  selector: 'app-contacto-juan',
  templateUrl: './contacto-juan.component.html',
  styleUrls: ['./contacto-juan.component.css']
})


export class ContactoJuanComponent implements OnInit {
    emprender_internetjs = emprender_internetjs;
    contactosjs = contactosjs;
    trabajo_grado_luis = trabajo_grado_luis;
    experiencia_luis = experiencia_luis;
    proyectos_realizados_luis = proyectos_realizados_luis;
    proyectos = proyectos;
    tecnologia:[] = [];
    constructor(private router: Router) { 
    

    }
  
    ngOnInit(): void {
    }

  
}
