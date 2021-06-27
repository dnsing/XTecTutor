import { Component, OnInit } from '@angular/core';
import { ApiEntradaPropiaService } from '../services/api-entrada-propia.service';

@Component({
  selector: 'app-entradaPropia',
  templateUrl: './entradaPropia.component.html',
  styleUrls: ['./entradaPropia.component.scss']
})
export class EntradaPropiaComponent implements OnInit{
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
  

  constructor(
    private apiEntradaPropia: ApiEntradaPropiaService
  ){}


  ngOnInit(): void {
    this.getEntry();
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

      console.log(this.listAutores[1])
    });
  }
}