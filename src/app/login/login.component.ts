import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';

//import { UserLoginService } from '../services/user-login.service';
//import { StudentCourseService } from './../Student/student-services/student-course.service';
//import { StudentService } from './../Student/student-services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent implements OnInit {
  hidePassword= true;

  userType: number = 1; 
  LogInForm: FormGroup;
  error: string;


  constructor(private formB: FormBuilder, private router: Router, /*private userLoginService: UserLoginService,private StudentService:StudentService*/) { 
    this.LogInForm = this.formB.group({
    userID: [''],
    password: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(formData: any){
  }

  logIn(){
    this.router.navigateByUrl('home');
  }
}
