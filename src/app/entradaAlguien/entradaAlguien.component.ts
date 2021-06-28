import { Component, OnInit } from '@angular/core';
import { ApiEntradaPropiaService } from '../services/api-entrada-propia.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ApicomentariosService } from '../services/apicomentarios.service';
import { UserService } from '../Services/login.service';
import { ApicalificacionService } from '../services/apicalificacion.service';

@Component({
  selector: 'app-entradaAlguien',
  templateUrl: './entradaAlguien.component.html',
  styleUrls: ['./entradaAlguien.component.scss']
})
export class EntradaAlguienComponent implements OnInit{
  public titulo = ''
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
  public visible = ''
  public nuevaCalificacion = ''
  public listAutores = []
  public listComentarios = []
  public user: any[];


  validatingForm: FormGroup;

  constructor(
    private apiEntradaPropia: ApiEntradaPropiaService,
    private apicomentario: ApicomentariosService,
    private apilogin: UserService,
    private apicalificacion: ApicalificacionService
  ){}

  ngOnInit(): void {
    this.getEntry();
    this.user = this.apilogin.userLogged;
    console.log(Object(this.user)["Carnet"])
    console.log(this.user)
  }

  getEntry(){
    this.apiEntradaPropia.getEntry("1").subscribe((reply:any) => {
      console.log(reply);

      this.abstract = reply.Abstract;
      this.titulo = reply.Titulo
      this.body = reply.Body;
      this.carrera = reply.Carrera;
      this.curso = reply.Curso;
      this.fechaCrear = reply.FechaCrear;
      this.fechaMod = reply.FechaMod;
      this.idEntrada = reply.IdEntrada;
      this.tema = reply.Tema;
      this.vistas = reply.Vistas;
      this.visible = reply.Visible;
      this.calificacion = reply.calificacion;
      this.listAutores = reply.listaAutores;
      this.listComentarios = reply.listaComentario;
    });
  }

  setComment(){
    //https://localhost:44395/api/Comentarios?IdEntrada=123&Carnet=123&Contenido=cacaacaca
    var comment = (<HTMLInputElement>document.getElementById('comment')).value;
    console.log(comment)

    this.apicomentario.postComment('1', Object(this.user)["Carnet"], comment).subscribe((reply:any) => {
      console.log(reply)
    });
  }
  
  setRating(){
    this.apicalificacion.postRating("1", Object(this.user)["Carnet"], this.nuevaCalificacion).subscribe((reply:any) => {
      console.log(reply)
      console.log(this.nuevaCalificacion)
    });
  }
}
