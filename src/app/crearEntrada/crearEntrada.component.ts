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
  public carrera = 0
  public curso = ''
  

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
//titulo: string, abstract: string, body: string, autores: string, IdCarrera: string, curso: string, IdTema: string
  /*postEntry(){
    var abstract = (<HTMLInputElement>document.getElementById('abstract')).value;
    var body = (<HTMLInputElement>document.getElementById('body')).value;

    this.apiEntradaPropia.postEntry('titulo', ).subscribe((reply:any) => {

    });
  }
*/
  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }
}
