import { Component, OnInit } from "@angular/core";



import { Router } from '@angular/router';

import { AppState } from './../app.state';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from '../models/tio';

import { emprender_internetjs } from './../app.state';


@Component({
  selector: 'app-emprender-internet',
  templateUrl: './emprender-internet.component.html',
  styleUrls: ['./emprender-internet.component.css']
})



export class EmprenderInternetComponent implements OnInit {
  emprender_internetjs = emprender_internetjs;
  constructor( private router: Router) { 
    

  }
  
  ngOnInit(): void {
  }

  
}
