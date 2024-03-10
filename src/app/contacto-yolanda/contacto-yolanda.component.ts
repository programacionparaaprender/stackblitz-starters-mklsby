import { Component, OnInit } from "@angular/core";


import { Router } from '@angular/router';



import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { ventas_madrejs, contactosjs } from './../app.state';


@Component({
  selector: 'app-contacto-yolanda',
  templateUrl: './contacto-yolanda.component.html',
  styleUrls: ['./contacto-yolanda.component.css']
})


export class ContactoYolandaComponent implements OnInit {
    ventas_madre = ventas_madrejs;
    contactosjs = contactosjs;

    constructor(private router: Router) { 
    

    }
  
    ngOnInit(): void {
    }

  
}
