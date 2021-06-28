import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
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
  LogInForm: FormGroup;
  error: string;
  usertoCheck: any = [];


  constructor(private formB: FormBuilder, private router: Router, private userService: UserService) { 
    this.LogInForm = this.formB.group({
    userID: [''],
    password: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(formData: any){
    console.log(formData)
    this.userService.checkLogIn(formData.password, formData.userID ).subscribe(res => {
      
      this.usertoCheck = res;
      console.log(res)
      if(this.usertoCheck == 'No es estudiante ni admin'){
        this.error = 'No es estudiante ni admin';

      }else if(this.usertoCheck =='Password incorrecta Estudiante'){
        this.error ='Password incorrecta Estudiante';

      }else{
        console.log('Ingresando')
        this.userService.setUserLogged(this.usertoCheck);
        this.router.navigate(['/home']);

      }

    })
    
  }
}