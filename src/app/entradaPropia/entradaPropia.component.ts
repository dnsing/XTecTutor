import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiEntradaPropiaService } from '../services/api-entrada-propia.service';
import { UserService } from '../services/login.service';

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
  public idEntrada = ''
  public tema = ''
  public vistas = 0
  public calificacion = ''
  public listAutores = []
  public listComentarios = []

  public user: any[];
  

  constructor(
    private apiEntradaPropia: ApiEntradaPropiaService,
    private apilogin: UserService,
    private router: Router
  ){
    this.idEntrada =this.router.getCurrentNavigation().extras.state.example;

  }


  ngOnInit(): void {
    this.getEntry();
    this.user = this.apilogin.userLogged;
  }

  getEntry(){
    this.apiEntradaPropia.getEntry(this.idEntrada).subscribe((reply:any) => {
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
}