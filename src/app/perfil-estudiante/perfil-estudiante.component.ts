import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntradaPropiaComponent } from '../entradaPropia/entradaPropia.component';
import { Student } from '../Models/student.model';
import { ApiEntradaPropiaService } from '../services/api-entrada-propia.service';
import { UserService } from '../Services/login.service';

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.component.html',
  styleUrls: ['./perfil-estudiante.component.scss']
})
export class PerfilEstudianteComponent implements OnInit {
  user: Student;
  nombreEst: string;
  e3:any[];

  constructor(private router: Router,private userService: UserService, private ApiEntradaPropiaService: ApiEntradaPropiaService) { 
    
  }

  ngOnInit(): void {
    this.user=this.userService.userLogged;
    this.ApiEntradaPropiaService.getIdByCarnet(this.user.Carnet).subscribe(d=>
      {
        this.e3=d ; console.log(d)
      });
  }
  carnet(){
    console.log(this.user.Carnet)
    return 'Carnet: '+this.user.Carnet;
  }
  correo(){
    console.log(this.user.Correo)
    return 'Correo: '+this.user.Correo;
  }
  nombreEstudiante(){
    this.nombreEst= this.user.Nombre+' '+this.user.Apellido+' '+this.user.Apellido2
    console.log(this.nombreEst)
    return 'Estudiante: '+this.nombreEst;
  }


  cambioContr(){
    this.router.navigateByUrl('cambioContr',{ state: { example: this.user.Carnet } });
  }
  verEntrada(entradaId){
    this.router.navigateByUrl('myEntry2',{ state: { example: entradaId } });
  }
  editarEntrada(entradaId){
    console.log(entradaId)
    this.router.navigateByUrl('editEntry',{ state: { example: entradaId } });
  }
}
