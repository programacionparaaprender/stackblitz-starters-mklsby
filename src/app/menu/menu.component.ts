import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";

import { AppState } from './../app.state';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from '../models/tio';
import { ActivatedRoute, Router } from '@angular/router';



import { Location } from "@angular/common";

import { experiencia_luis, contactosjs, emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from './../app.state';

let cursosjs = [
  {
      "target":"_self",
      "class":"dropdown-item",
      "href":"#/emprender",
      "nombre":"Emprender por internet"
  },
  { 
            "target":"_blank", 
            "class":"dropdown-item", 
            "href":"https://www.instagram.com/p/CK1OWPGnd3m/",
            "nombre":"Geocercas con el lenguaje kotlin y google maps"
          },
          {
              "target":"_blank",
              "class":"dropdown-item",
              "href":"https://www.instagram.com/p/CKrHNDmn-8s/",
              "nombre":"Geocerca Ionic"
          }
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  //@ViewChild(LoginUsuariosComponent) child;

  login: Observable<Tio[]> | null;
  tio: Tio;
  nombre = '';
  email = 'zddfdfdsfd';
  password = '';
  usuariologeado = false;
  cursosjs = cursosjs;
  proyectos_realizados_luis = proyectos_realizados_luis;
  contactosjs = contactosjs;
  constructor(location: Location, private router: Router) {
    this.tio = new Tio("", "", "");
    this.login = null;
  }


  ngOnInit() {
  }

}
