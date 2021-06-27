
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EntradaPropiaComponent } from './entradaPropia/entradaPropia.component';
import { CrearEntradaComponent } from './crearEntrada/crearEntrada.component';
import { EditarEntradaComponent } from './editarEntrada/editarEntrada.component';
import { EntradaAlguienComponent } from './entradaAlguien/entradaAlguien.component';
import { loginComponent } from './login/login.component';



@NgModule({
  declarations: [

    loginComponent,
    HomeComponent,
    EntradaPropiaComponent,
    CrearEntradaComponent,
    EditarEntradaComponent,
    EntradaAlguienComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule, 

    RouterModule.forRoot([
      { path: '', component:loginComponent, pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'myentry', component: EntradaPropiaComponent },
      { path: 'createEntry', component: CrearEntradaComponent },
      { path: 'editEntry', component: EditarEntradaComponent},
      { path: 'othersEntry', component:EntradaAlguienComponent},
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
