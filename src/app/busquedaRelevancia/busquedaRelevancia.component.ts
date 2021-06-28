import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-busquedaRelevancia',
  templateUrl: './busquedaRelevancia.component.html',
  styleUrls: ['./busquedaRelevancia.component.scss']
})
export class busquedaRelevanciaComponent implements OnInit{
  listCatalogo:string[];
  listAutor:string[];
  listFechaCreado:string[];
  listFechaModificada:string[];
  listTitulo:string[];
  listVistas:string[];
  listComentarios:string[];
  listCalificacion:string[];
  listE=[];
  e1:string[];
  e2:string[];
  e3:string[];
  entradas: FormGroup;

  constructor( private formBuilder: FormBuilder,private router: Router) {
    this.listCatalogo= [];
    this.listAutor= [];
    this.listFechaCreado= [];
    this.listFechaModificada=[];
    this.listTitulo=[];
    this.listVistas=[];
    this.listComentarios=[];
    this.listCalificacion=[];
    this.e1=["titulo","fechCrea","fechaMod","vistas","coment","relevancia","calif","carrera, curso, tema"];
    this.e2=["titulo","fechCrea","fechaMod","vistas","coment","relevancia","calif","carrera"];
    this.e3=["titulo","fechCrea","fechaMod","vistas","coment","relevancia","calif","carrera, curso"];
    this.listE=[this.e1,this.e2,this.e3]
  }
  ngOnInit(): void {
  }

  verEntrada(){
    this.router.navigateByUrl('othersEntry');
  }


}
