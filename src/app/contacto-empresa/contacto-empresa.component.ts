import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";

import { AppState } from './../app.state';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from '../models/tio';
import { ActivatedRoute, Router } from '@angular/router';



import { Location } from "@angular/common";

import { cursosjs, experiencia_luis, contactosjs, emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from './../app.state';


@Component({
  selector: 'app-contacto-empresa',
  templateUrl: './contacto-empresa.component.html',
  styleUrls: ['./contacto-empresa.component.css']
})


export class ContactoEmpresaComponent implements OnInit {
  //@ViewChild(LoginUsuariosComponent) child;
  contactosjs = contactosjs;
  login: Observable<Tio[]> | null;
  tio: Tio;
  nombre = '';
  email = 'zddfdfdsfd';
  password = '';
  usuariologeado = false;
  cursosjs = cursosjs;
  proyectos_realizados_luis = proyectos_realizados_luis;
 
  constructor(location: Location, private router: Router) {
    this.tio = new Tio("", "", "");
    this.login = null;
  }


  ngOnInit() {
  }

}
