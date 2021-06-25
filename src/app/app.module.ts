
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EntradaPropiaComponent } from './entradaPropia/entradaPropia.component';
import { CrearEntradaComponent } from './crearEntrada/crearEntrada.component';

@NgModule({
  declarations: [
    HomeComponent,
    EntradaPropiaComponent,
    CrearEntradaComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'myentry', component: EntradaPropiaComponent },
      { path: 'createEntry', component: CrearEntradaComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
