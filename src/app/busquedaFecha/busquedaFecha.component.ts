import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { Student } from '../models/student.model';
import { UserService } from '../Services/login.service';
import { ApiEntradaPropiaService } from '../services/api-entrada-propia.service';
import { ApicomplementosService } from '../services/apicomplementos.service';
import { busquedaFechaService } from '../Services/busquedaFecha.service';


@Component({
  selector: 'app-busquedaFecha',
  templateUrl: './busquedaFecha.component.html',
  styleUrls: ['./busquedaFecha.component.scss']
})
export class busquedaFechaComponent implements OnInit{
  user: Student;
  nombreEst: string;
  e3:any[];
  entradas: FormGroup;
  public carrera = ''
  public curso = ''
  public tema = ''
  public cursoID= ''
  public flag=false
  
  public listCarreras = [];
  public listCursos = [];
  public listTemas = [];
  busquedaFech: any = [];
  constructor(private router: Router,private userService: UserService, private ApiEntradaPropiaService: ApiEntradaPropiaService, 
    private apicomplementos: ApicomplementosService, private busquedaFechaService: busquedaFechaService) { 
    
  }

  ngOnInit(): void {
    this.user=this.userService.userLogged;
    this.ApiEntradaPropiaService.getIdByCarnet(this.user.Carnet).subscribe(d=>
      {this.e3=d ; console.log(d)});
      this.getComplementos();
  }

  verEntrada(entradaId){
    this.router.navigateByUrl('myEntry2',{ state: { example: entradaId } });
  }

  buscar(){
    this.busquedaFechaService.getEntrada("02/02/2022" ,parseInt(this.carrera), this.cursoID, parseInt(this.tema)).subscribe(res => {
    this.e3 = res;console.log(res)
    

  })
    this.flag=true;
  }

  getCarrera(i){
    this.carrera = this.listCarreras[i].IdCarrera;
  }
  
  getCurso(i){
    this.curso = this.listCursos[i].Nombre;
    this.cursoID = this.listCursos[i].IdCurso;
  }
  
  getTema(i){
    this.tema = this.listTemas[i].IdTema;
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
  mostrarentradas(){ 
    return this.flag;
   }
}
