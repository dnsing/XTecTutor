import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../Models/admin.model';
import { Student } from '../Models/student.model';

import { UserService } from '../Services/login.service';
//import { StudentCourseService } from './../Student/student-services/student-course.service';
//import { StudentService } from './../Student/student-services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent implements OnInit {
  hidePassword= true;

 user: Student;
  admin: Admin; 
  LogInForm: FormGroup;
  error: string;
  usertoCheck: any = [];
  verError: boolean;



  constructor(private formB: FormBuilder, private router: Router, private userService: UserService) { 
    this.LogInForm = this.formB.group({
    userID: [''],
    password: ['']
    });
  }

  ngOnInit(): void {
    this.user=this.userService.userLogged;
  }

  onSubmit(formData: any){
    console.log(formData)
    this.userService.checkLogIn(formData.password, formData.userID ).subscribe(res => {
      
      this.usertoCheck = res;
      console.log(res)
      if(this.usertoCheck == 'No es estudiante ni admin'){
        this.error = 'No es estudiante ni admin';
        this.verError=true;

      }else if(this.usertoCheck =='Password incorrecta Estudiante'){
        this.error ='Password incorrecta Estudiante';
        this.verError=true;

      }else if(this.usertoCheck['Apellido2'] != null){
        console.log('Ingresando estudiante')
        this.userService.setUserLogged(this.usertoCheck);
        this.router.navigate(['/home']);
        this.verError=false;
      }else{
        console.log('Ingresando admin')
        this.userService.setUserLogged(this.usertoCheck);
        this.router.navigate(['/adminHome']);
        this.verError=false;
      }

    })
    
  }
  mostrarError(){ 
    return this.verError;
   }

   mostrarErrores(){
     return this.error;
   }
}