import { Component, OnInit } from "@angular/core";
import { contactosjs } from './../app.state';


@Component({
  selector: 'app-contacto-jermany',
  templateUrl: './contacto-jermany.component.html',
  styleUrls: ['./contacto-jermany.component.css']
})


export class ContactoJermanyComponent implements OnInit {
    contactosjs = contactosjs;

    constructor() { 
    

    }
  
    ngOnInit(): void {
    }

  
}
