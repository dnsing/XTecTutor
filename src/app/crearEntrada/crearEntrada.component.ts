import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ApiEntradaPropiaService } from '../services/api-entrada-propia.service';
import { ApicomplementosService } from '../services/apicomplementos.service';

@Component({
  selector: 'app-crearEntrada',
  templateUrl: './crearEntrada.component.html',
  styleUrls: ['./crearEntrada.component.scss']
})
export class CrearEntradaComponent implements OnInit{
  public titulo = ''
  public abstract = ''
  public body = ''
  public visible = ''
  public vistas = 0
  public carrera = ''
  public curso = ''
  public tema = ''
  

  public listCarreras = [];
  public listCursos = [];
  public listTemas = [];

  constructor(
    private apicomplementos: ApicomplementosService,
    private apiEntradaPropia: ApiEntradaPropiaService,
  ){}

  validatingForm: FormGroup;

  ngOnInit() {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
    this.getComplementos();
  }

  getComplementos(){
    //Cursos
    this.apicomplementos.getCursos().subscribe((reply:any) => {
      console.log(reply);
      this.listCursos = reply;
    });
    //Carreras
    this.apicomplementos.getCarreras().subscribe((reply:any) => {
      
      this.listCarreras = reply;
      console.log(this.listCarreras);
    });
    //Temas
    this.apicomplementos.getTema().subscribe((reply:any) => {
      console.log(reply);
      this.listTemas = reply;
    });
  }

  getCarrera(i){
    this.carrera = this.listCarreras[i].IdCarrera;
  }

  getCurso(i){
    this.curso = this.listCursos[i].Nombre;
  }

  getTema(i){
    this.tema = this.listTemas[i].IdTema;
  }

//https://localhost:44395/api/Entrada?titulo=eltitulo&Abstract=cacaca&Body=cacacacaca&autores=carnet1,carnet2&IdCarrera=1&Curso=0&IdTema=0
//https://localhost:44395/api/Entrada?titulo=dad&Abstract=caca&Body=fafa&autores=2017&IdCarrera=carrera3&Curso=cursoY1&IdTema=carrera1 
//titulo: string, abstract: string, body: string, autores: string, IdCarrera: string, curso: string, IdTema: string
  postEntry(){
    this.titulo = (<HTMLInputElement>document.getElementById('titulo')).value;
    this.abstract = (<HTMLInputElement>document.getElementById('abstract')).value;
    this.body = (<HTMLInputElement>document.getElementById('body')).value;

    this.apiEntradaPropia.postEntry(this.titulo, this.abstract, this.body, "2017", this.carrera, this.curso, this.tema).subscribe((reply:any) => {

    });
  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }
}
