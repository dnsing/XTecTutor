import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { Student } from '../models/student.model';
import { UserService } from '../Services/login.service';
import { ApiEntradaPropiaService } from '../services/api-entrada-propia.service';
import { ApicomplementosService } from '../services/apicomplementos.service';
import { busquedaFechaService } from '../Services/busquedaFecha.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-busquedaFecha',
  templateUrl: './busquedaFecha.component.html',
  styleUrls: ['./busquedaFecha.component.scss']
})


export class busquedaFechaComponent implements OnInit{
  fechaForm: FormGroup;
  user: Student;
  nombreEst: string;
  e3:any[];
  entradas: FormGroup;
  public carrera = ''
  public curso = ''
  public tema = ''
  public cursoID= ''
  flag : boolean;
  
  public listCarreras = [];
  public listCursos = [];
  public listTemas = [];
  busquedaFech: any = [];
  idTema = 0;
  idCurso = '';
  idCarrera = 0;
  constructor(private router: Router,private userService: UserService, private ApiEntradaPropiaService: ApiEntradaPropiaService, 
    private apicomplementos: ApicomplementosService, private busquedaFechaService: busquedaFechaService,private formBuilder: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.user=this.userService.userLogged;
      this.getComplementos();
      this.fechaForm = this.formBuilder.group({
        fecha : ['', Validators.required]
    });
  }

  verEntrada(entradaId){
    this.router.navigateByUrl('myEntry2',{ state: { example: entradaId } });
  }

  buscar(){
    if (this.fechaForm.invalid) {
      return;
    }
    console.log(this.idCarrera);
    console.log(this.idCurso);
    console.log(this.idTema);
    this.busquedaFechaService.getEntrada(this.fechaForm.value.fecha ,this.idCarrera, this.idCurso, this.idTema).subscribe(res => {
    this.e3 = res;
    console.log(res)
  })
    this.flag=true;
  }

  getCarrera(i){
    this.idCarrera = this.listCarreras[i].IdCarrera;
    this.carrera = this.listCarreras[i].Nombre;
  }
  
  getCurso(i){
    console.log(this.listCursos[i]);
    this.idCurso = this.listCursos[i].IdCurso;
    this.curso = this.listCursos[i].Nombre;
  }
  
  getTema(i){
    this.idTema = this.listTemas[i].IdTema;
    this.tema = this.listTemas[i].Nombre;
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
  mostrarentrada(){ 
    console.log("cacacaacca");
    return this.flag;
   }
   onSubmit(){}
}
