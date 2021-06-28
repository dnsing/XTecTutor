
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EntradaPropiaComponent } from './entradaPropia/entradaPropia.component';
import { CrearEntradaComponent } from './crearEntrada/crearEntrada.component';
import { EditarEntradaComponent } from './editarEntrada/editarEntrada.component';
import { EntradaAlguienComponent } from './entradaAlguien/entradaAlguien.component';


import { loginComponent } from './login/login.component';
import { busquedaFechaComponent } from './busquedafecha/busquedafecha.component';
import { busquedaRelevanciaComponent } from './busquedaRelevancia/busquedaRelevancia.component';
import { PerfilEstudianteComponent } from './perfil-estudiante/perfil-estudiante.component';
import { cambioContrComponent } from './cambioContr/cambioContr.component';



@NgModule({
  declarations: [

    loginComponent,
    cambioContrComponent,
    HomeComponent,
    EntradaPropiaComponent,
    CrearEntradaComponent,
    EditarEntradaComponent,
    EntradaAlguienComponent,
    AppComponent,
    busquedaFechaComponent,
    busquedaRelevanciaComponent,
    PerfilEstudianteComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 

    RouterModule.forRoot([
      { path: '', component:loginComponent, pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'busquedaRelevancia', component: busquedaRelevanciaComponent },
      { path: 'busquedaFecha', component: busquedaFechaComponent },
      { path: 'perfilEstudiante', component: PerfilEstudianteComponent },
      { path: 'myEntry', component: EntradaPropiaComponent },
      { path: 'createEntry', component: CrearEntradaComponent },
      { path: 'editEntry', component: EditarEntradaComponent},
      { path: 'cambioContr', component: cambioContrComponent},
      { path: 'othersEntry', component:EntradaAlguienComponent},
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
