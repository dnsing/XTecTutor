import { Component, OnInit } from '@angular/core';
import { ApiEntradaPropiaService } from '../services/api-entrada-propia.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ApicomentariosService } from '../services/apicomentarios.service';

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
  public listAutores = []
  public listComentarios = []

  validatingForm: FormGroup;

  constructor(
    private apiEntradaPropia: ApiEntradaPropiaService,
    private apicomentario: ApicomentariosService
  ){}

  ngOnInit(): void {
    this.getEntry();
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

    this.apicomentario.postComment('1','2017',comment);
  }
  //calificar FALTA
}
