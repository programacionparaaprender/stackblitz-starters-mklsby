import { Component, OnInit } from "@angular/core";

//import { LatLng, LatLngLiteral, PolyMouseEvent } from '../services/google-maps-types';

import { Router } from '@angular/router';

import { AppState } from './../app.state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from '../models/tio';


import { emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from './../app.state';


@Component({
  selector: 'app-agencia-emprendedores',
  templateUrl: './agencia-emprendedores.component.html',
  styleUrls: ['./agencia-emprendedores.component.css']
})


export class AgenciaEmprendedoresComponent implements OnInit {
  emprender_internetjs = emprender_internetjs;
  constructor(private router: Router) { 
    

  }
  
  ngOnInit(): void {
  }

  
}
