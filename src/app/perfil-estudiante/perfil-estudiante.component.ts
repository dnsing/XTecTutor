import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../Models/student.model';
import { UserService } from '../Services/login.service';

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.component.html',
  styleUrls: ['./perfil-estudiante.component.scss']
})
export class PerfilEstudianteComponent implements OnInit {
  user: Student;
  nombreEst: string;

  constructor(private router: Router,private userService: UserService) { 
  }

  ngOnInit(): void {
    this.user=this.userService.userLogged;
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
    this.router.navigateByUrl('cambioContr');
  }
}
