import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { Student } from '../models/student.model';
import { ApicomplementosService } from '../services/apicomplementos.service';
import { buscarRelevanciaService } from '../Services/buscar-relevancia.service';
import { UserService } from '../Services/login.service';

@Component({
  selector: 'app-busquedaRelevancia',
  templateUrl: './busquedaRelevancia.component.html',
  styleUrls: ['./busquedaRelevancia.component.scss']
})
export class busquedaRelevanciaComponent implements OnInit{

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
  constructor( private formBuilder: FormBuilder,private userService: UserService,private router: Router,private apicomplementos: ApicomplementosService, 
    private serviceBuscar: buscarRelevanciaService) {
    
  }

  ngOnInit(): void {
    this.user=this.userService.userLogged;
      this.getComplementos();
      this.fechaForm = this.formBuilder.group({
        fecha : ['', Validators.required]
    });
  }

  buscar(){
    if (this.fechaForm.invalid) {
      return;
    }
    console.log(this.idCarrera);
    console.log(this.idCurso);
    console.log(this.idTema);
    this.serviceBuscar.getEntrada(this.fechaForm.value.fecha ,this.idCarrera, this.idCurso, this.idTema).subscribe(res => {
    this.e3 = res;
    console.log(res)
  })
    this.flag=true;
  }

  verEntrada(entradaId){
    this.router.navigateByUrl('myEntry2',{ state: { example: entradaId } });
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
