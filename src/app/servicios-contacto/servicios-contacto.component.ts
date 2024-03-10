import { Component, OnInit } from "@angular/core";

import { serviciosjs, cursosjs, experiencia_luis, contactosjs, emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from './../app.state';


@Component({
  selector: 'app-servicios-contacto',
  templateUrl: './servicios-contacto.component.html',
  styleUrls: ['./servicios-contacto.component.css']
})


export class ServiciosContactoComponent implements OnInit {
    servicios:any = serviciosjs;
    constructor() { 
    

    }
  
    ngOnInit(): void {
    }

  
}
