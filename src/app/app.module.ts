import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { ViejaComponent } from './juegos/vieja/vieja.component';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';



localStorage.setItem('URL', 'https://localhost:44382/');


  
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { MenuComponent } from './menu/menu.component';



import { EmprenderInternetComponent } from './emprender-internet/emprender-internet.component';

import { AgenciaEmpresasComponent } from './agencia-empresas/agencia-empresas.component';

import { AgenciaProfesionalesComponent } from './agencia-profesionales/agencia-profesionales.component';

import { AgenciaEmprendedoresComponent } from './agencia-emprendedores/agencia-emprendedores.component';

import { ContactoLuisComponent } from './contacto-luis/contacto-luis.component';

import { ContactoPercyComponent } from './contacto-percy/contacto-percy.component';

import { FooterComponent } from './footer/footer.component';

import { ContactoJuanComponent } from './contacto-juan/contacto-juan.component';

import { ContactoEmpresaComponent } from './contacto-empresa/contacto-empresa.component';

import { ContactoYolandaComponent } from './contacto-yolanda/contacto-yolanda.component';

import { ContactoPatriciaComponent } from './contacto-patricia/contacto-patricia.component';

import { ContactoAnaComponent } from './contacto-ana/contacto-ana.component';

import { ContactoJermanyComponent } from './contacto-jermany/contacto-jermany.component';

import { MainComponent } from './main/main.component';

import { BannerComponent } from './banner/banner.component';

import { ServiciosContactoComponent } from './servicios-contacto/servicios-contacto.component';

import { CarruselComponent } from './carrusel/carrusel.component';

import { NosotrosComponent } from './nosotros/nosotros.component';

import { ProyectosComponent } from './proyectos/proyectos.component';

import { MaestriaSanMarcosComponent } from './maestria-sanmarcos/maestria-sanmarcos.component';

import { ContadorAutomaticoComponent } from './contador-automatico/contador-automatico.component';
import { QuarkusComponent } from './quarkus/quarkus.component';
import { MenuNuevoComponent } from './menu-nuevo/menu-nuevo.component';
import { MasterAspNetComponent } from './master-aspnet/master-aspnet.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { taskReducer } from './store/tasks.reducer';
import { userReducer } from './store/users.reducer';
import { loginReducer } from './store/login.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { storageSyncMetaReducer } from 'ngrx-store-persist';
@NgModule({
  declarations: [
    SidebarComponent,
    QrCodeGeneratorComponent,
    MenuNuevoComponent,
    MasterAspNetComponent,
    ContadorAutomaticoComponent,
    QuarkusComponent,
    AppComponent,
    ViejaComponent,
    MenuComponent,
    EmprenderInternetComponent,
    AgenciaEmpresasComponent,
    AgenciaProfesionalesComponent,
    AgenciaEmprendedoresComponent,
    ContactoLuisComponent,
    ContactoPercyComponent,
    FooterComponent,
    ContactoEmpresaComponent,
    ContactoJuanComponent,
    ContactoYolandaComponent,
    ContactoPatriciaComponent,
    ContactoAnaComponent,
    ContactoJermanyComponent,
    MainComponent,
    BannerComponent,
    ServiciosContactoComponent,
    CarruselComponent,
    NosotrosComponent,
    ProyectosComponent,
    MaestriaSanMarcosComponent
  ],
  imports: [
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      
    }),
    StoreModule.forRoot({
      tasks: taskReducer,
      users: userReducer,
      login: loginReducer
    }, { 
      metaReducers: [storageSyncMetaReducer] 
    }),
  
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
