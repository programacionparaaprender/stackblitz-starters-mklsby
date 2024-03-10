import { Component, OnInit } from "@angular/core";

import { serviciosjs, cursosjs, experiencia_luis, contactosjs, emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from './../app.state';


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})


export class CarruselComponent implements OnInit {
    servicios = serviciosjs;
    constructor() { 
    

    }
  
    ngOnInit(): void {
    }

  
}
