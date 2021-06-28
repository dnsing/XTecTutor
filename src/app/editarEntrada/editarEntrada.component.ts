import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { ApiEntradaPropiaService } from '../services/api-entrada-propia.service';
import { ApicomplementosService } from '../services/apicomplementos.service';
import { UserService } from '../Services/login.service';

@Component({
  selector: 'app-editarEntrada',
  templateUrl: './editarEntrada.component.html',
  styleUrls: ['./editarEntrada.component.scss']
})
export class EditarEntradaComponent implements OnInit
{
  public titulo = ''
  public abstract = ''
  public body = ''
  public carrera = ''
  public curso = ''
  public fechaCrear = ''
  public fechaMod = ''
  public idEntrada = ''
  public tema = ''
  public vistas = 0
  public calificacion = ''
  public visible = ''
  public listAutores = []
  public listComentarios = []

  public listCarreras = [];
  public listCursos = [];
  public listTemas = [];

  public user: any[];
  public listCarnet = [];
  carnets: any;
  
  constructor(
    private apiEntradaPropia: ApiEntradaPropiaService,
    private apicomplementos: ApicomplementosService,
    private apilogin: UserService,
    private router: Router
  ){
    this.idEntrada = this.router.getCurrentNavigation().extras.state.example;

  }


  validatingForm: FormGroup;

  ngOnInit() {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required),
    });
    this.getEntry();
    this.getComplementos();
    this.user = this.apilogin.userLogged;
    
  }

  getEntry(){
    this.apiEntradaPropia.getEntry(this.idEntrada).subscribe((reply:any) => {
      console.log(reply);

      this.titulo = reply.titulo;
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
      this.visible = reply.Visible;
      this.listAutores = reply.listaAutores;
      this.listComentarios = reply.listaComentario;

    });
  }

  editEntry(){
    //https://localhost:44395/api/Entrada?IdEntrada=id&titulo=eltitulo&Abstract=cacaca&Body=cacacacaca&autores=carnet1,carnet2&IdCarrera=1&Curso=0&IdTema=0&visible=true
    this.titulo = (<HTMLInputElement>document.getElementById('titulo')).value;
    this.abstract = (<HTMLInputElement>document.getElementById('abstract')).value;
    this.body = (<HTMLInputElement>document.getElementById('body')).value;

    for(let i in this.listAutores){
      this.listCarnet.push(this.listAutores[i].carnet);
    }
    for(let i in this.listCarreras){
      if (this.carrera == this.listCarreras[i].Nombre){
        this.carrera = this.listCarreras[i].IdCarrera;
      }
    }
    for(let i in this.listTemas){
      if (this.tema == this.listTemas[i].Nombre){
        this.tema = this.listTemas[i].IdTema;
      }
    }
    console.log(this.titulo)
    console.log(this.abstract)
    console.log(this.body)
    console.log(this.listCarnet.join())
    console.log(this.carrera)
    console.log(this.curso)
    console.log(this.tema)
    console.log(this.visible.toString())

    this.apiEntradaPropia.editEntry(this.idEntrada, this.titulo, this.abstract, this.body, this.listCarnet.join(), this.carrera, this.curso, this.tema, this.visible.toString()).subscribe((reply:any) => {
      console.log(reply)
  });

}
  listcarnet(listcarnet: any) {
    throw new Error('Method not implemented.');
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

deleteAutor(i){
  this.titulo = (<HTMLInputElement>document.getElementById('titulo')).value;
    this.abstract = (<HTMLInputElement>document.getElementById('abstract')).value;
    this.body = (<HTMLInputElement>document.getElementById('body')).value;
    const Carnets = [];

    for(let i in this.listAutores){
      Carnets.push(this.listAutores[i].carnet);
    }
    for(let i in this.listCarreras){
      if (this.carrera == this.listCarreras[i].Nombre){
        this.carrera = this.listCarreras[i].IdCarrera;
      }
    }
    for(let i in this.listTemas){
      if (this.tema == this.listTemas[i].Nombre){
        this.tema = this.listTemas[i].IdTema;
      }
    }
   
  console.log(Carnets)
  
  Carnets.splice(i);

  console.log(Carnets)
  this.apiEntradaPropia.editEntry(this.idEntrada, this.titulo, this.abstract, this.body, Carnets[0].toString(), this.carrera, this.curso, this.tema, this.visible.toString()).subscribe((reply:any) => {
    console.log(reply)
  });
}


  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }
}
