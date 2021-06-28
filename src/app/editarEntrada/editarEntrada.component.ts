import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ApiEntradaPropiaService } from '../services/api-entrada-propia.service';
import { ApicomplementosService } from '../services/apicomplementos.service';

@Component({
  selector: 'app-editarEntrada',
  templateUrl: './editarEntrada.component.html',
  styleUrls: ['./editarEntrada.component.scss']
})
export class EditarEntradaComponent implements OnInit
{
  public abstract = ''
  public body = ''
  public carrera = ''
  public curso = ''
  public fechaCrear = ''
  public fechaMod = ''
  public idEntrada = 0
  public tema = ''
  public vistas = 0
  public calificacion = ''
  public listAutores = []
  public listComentarios = []

  public listCarreras = [];
  public listCursos = [];
  public listTemas = [];
  
  constructor(
    private apiEntradaPropia: ApiEntradaPropiaService,
    private apicomplementos: ApicomplementosService
  ){}


  validatingForm: FormGroup;

  ngOnInit() {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required),
    });
    this.getEntry();
    this.getComplementos();
  }

  getEntry(){
    this.apiEntradaPropia.getEntry("1").subscribe((reply:any) => {
      console.log(reply);

      this.abstract = reply.Abstract;
      this.body = reply.Body;
      this.carrera = reply.Carrera;
      this.curso = reply.Curso;
      this.fechaCrear = reply.FechaCrear;
      this.fechaMod = reply.FechaMod;
      this.idEntrada = reply.IdEntrada;
      this.tema = reply.Tema;
      this.vistas = reply.Vistas;
      this.calificacion = reply.calificacion;
      this.listAutores = reply.listaAutores;
      this.listComentarios = reply.listaComentario;

    });
  }

  editEntry(){
    var abstract = (<HTMLInputElement>document.getElementById('abstract')).value;
    console.log(abstract);

    var body = (<HTMLInputElement>document.getElementById('body')).value;
    console.log(body);

    this.apiEntradaPropia.editEntry('1', 'titulo', abstract, body, '2017', '0', '0', '0','true').subscribe((reply:any) => {
      console.log(reply)
  });

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

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }
}
