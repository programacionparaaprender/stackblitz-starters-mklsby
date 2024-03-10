import { Component, OnInit } from "@angular/core";

//import { LatLng, LatLngLiteral, PolyMouseEvent } from '../services/google-maps-types';


import { Router } from '@angular/router';

import { AppState } from './../app.state';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from '../models/tio';

import { emprender_internetjs } from './../app.state';


@Component({
  selector: 'app-maestria-sanmarcos',
  templateUrl: './maestria-sanmarcos.component.html',
  styleUrls: ['./maestria-sanmarcos.component.css']
})



export class MaestriaSanMarcosComponent implements OnInit {
  emprender_internetjs = emprender_internetjs;
  constructor( private router: Router) { 
    

  }
  
  ngOnInit(): void {
  }

  
}
