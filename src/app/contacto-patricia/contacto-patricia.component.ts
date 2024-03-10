import { Component, OnInit } from "@angular/core";



import { Router } from '@angular/router';



import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { ventas_madrejs, contactosjs } from './../app.state';


@Component({
  selector: 'app-contacto-patricia',
  templateUrl: './contacto-patricia.component.html',
  styleUrls: ['./contacto-patricia.component.css']
})


export class ContactoPatriciaComponent implements OnInit {
    ventas_madre = ventas_madrejs;
    contactosjs = contactosjs;

    constructor(private router: Router) { 
    

    }
  
    ngOnInit(): void {
    }

  
}
