import { Component, OnInit } from "@angular/core";

//import { LatLng, LatLngLiteral, PolyMouseEvent } from '../services/google-maps-types';


import { Router } from '@angular/router';

import { AppState } from './../app.state';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from '../models/tio';


import { emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from './../app.state';


@Component({
  selector: 'app-agencia-empresas',
  templateUrl: './agencia-empresas.component.html',
  styleUrls: ['./agencia-empresas.component.css']
})


export class AgenciaEmpresasComponent implements OnInit {
    emprender_internetjs = emprender_internetjs;

  trabajo_grado_luis = trabajo_grado_luis;
    proyectos_realizados_luis = proyectos_realizados_luis;
    proyectos = proyectos;
    tecnologia:Array<any>;

  constructor(private router: Router) { 
    
    this.tecnologia = [];
  }
  
  obtenerDetalleTrabajoGrado(id:number): void{
    console.log('obtenerDetalleTrabajoGrado')
    var proyecto:any;
    for(let proyecto2 of this.trabajo_grado_luis){
            if(proyecto2.id == id){
                    proyecto = proyecto2;
            }
    }
    this.tecnologia = proyecto.tecnologia;
  }

  obtenerDetalle(id:number): void{
    console.log('obtenerDetalle')
    var proyecto:any;
    for(let proyecto2 of this.proyectos_realizados_luis){
            if(proyecto2.id == id){
                    proyecto = proyecto2;
            }
    }
    this.tecnologia = proyecto.tecnologia;
    
};

  
  ngOnInit(): void {
  }

  
}
