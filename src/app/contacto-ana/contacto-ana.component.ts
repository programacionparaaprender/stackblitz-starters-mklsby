import { Component, OnInit } from "@angular/core";
import { contactosjs } from './../app.state';


@Component({
  selector: 'app-contacto-ana',
  templateUrl: './contacto-ana.component.html',
  styleUrls: ['./contacto-ana.component.css']
})


export class ContactoAnaComponent implements OnInit {
    contactosjs = contactosjs;

    constructor() { 
    

    }
  
    ngOnInit(): void {
    }

  
}
