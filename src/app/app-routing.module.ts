import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ViejaComponent } from './juegos/vieja/vieja.component';






import { EmprenderInternetComponent } from './emprender-internet/emprender-internet.component';

import { AgenciaEmpresasComponent } from './agencia-empresas/agencia-empresas.component';


import { AgenciaProfesionalesComponent } from './agencia-profesionales/agencia-profesionales.component';

import { AgenciaEmprendedoresComponent } from './agencia-emprendedores/agencia-emprendedores.component';

import { ContactoLuisComponent } from './contacto-luis/contacto-luis.component';

import { ContactoPercyComponent } from './contacto-percy/contacto-percy.component';

import { ContactoEmpresaComponent } from './contacto-empresa/contacto-empresa.component';

import { ContactoJuanComponent } from './contacto-juan/contacto-juan.component';

import { ContactoYolandaComponent } from './contacto-yolanda/contacto-yolanda.component';

import { ContactoPatriciaComponent } from './contacto-patricia/contacto-patricia.component';

import { ContactoAnaComponent } from './contacto-ana/contacto-ana.component';


import { ContactoJermanyComponent } from './contacto-jermany/contacto-jermany.component';

import { MainComponent } from './main/main.component';

import { MaestriaSanMarcosComponent } from './maestria-sanmarcos/maestria-sanmarcos.component';


import { ContadorAutomaticoComponent } from './contador-automatico/contador-automatico.component';
import { QuarkusComponent } from './quarkus/quarkus.component';
import { LegsComponent } from './applications/views/legs/legs.component';
import { ArmsComponent } from './applications/views/arms/arms.component';
import { MasterAspNetComponent } from './master-aspnet/master-aspnet.component';
import { Tio } from './models/tio'

var usuario: Tio = {
  id: 1,
  nombre: "error",
  password: "123456",
  email: "error@gmail.com"
}


const routes: Routes = [
  { path: '' , component: MainComponent},
  { path: 'masteraspnet' , component: MasterAspNetComponent},
  { path: 'maestria-sanmarcos' , component: MaestriaSanMarcosComponent},

  {path: 'contador' , component: ContadorAutomaticoComponent},
  {path: 'quarkus' , component: QuarkusComponent},
  {path: 'legs' , component: LegsComponent},
  {path: 'arms' , component: ArmsComponent},
  {path: 'agencia_empresas' , component: AgenciaEmpresasComponent},
  {path: 'agencia_profesionales' , component: AgenciaProfesionalesComponent},
  {path: 'agencia_emprendedores' , component: AgenciaEmprendedoresComponent},

  {path: 'emprender' , component: EmprenderInternetComponent},

  {path: 'contacto_luis' , component: ContactoLuisComponent},
  {path: 'contacto_percy' , component: ContactoPercyComponent},
  {path: 'contacto_juan' , component: ContactoJuanComponent},
  {path: 'contacto_yolanda' , component: ContactoYolandaComponent},
  {path: 'contacto_patricia' , component: ContactoPatriciaComponent},
  {path: 'contacto_ana' , component: ContactoAnaComponent},
  {path: 'contacto_jermany' , component: ContactoJermanyComponent},
  {path: 'contacto_empresa' , component: ContactoEmpresaComponent},

  
  {
    path: 'vieja' , component: ViejaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
