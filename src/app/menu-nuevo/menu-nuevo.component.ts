import { Component, Input } from "@angular/core";


@Component({
  selector: 'app-menu-nuevo',
  templateUrl: './menu-nuevo.component.html',
  styleUrls: ['./menu-nuevo.component.css']
})
export class MenuNuevoComponent  {
  @Input() texto = 'login';
}
