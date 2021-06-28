import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';

//import { UsercambioContrService } from '../services/user-cambioContr.service';
//import { StudentCourseService } from './../Student/student-services/student-course.service';
//import { StudentService } from './../Student/student-services/student.service';

@Component({
  selector: 'app-cambioContr',
  templateUrl: './cambioContr.component.html',
  styleUrls: ['./cambioContr.component.scss']
})
export class cambioContrComponent implements OnInit {
  hideNewPassword= true;
  hideNewPasswordVerify= true;

  userType: number = 1; 
  cambioContrForm: FormGroup;
  error: string;


  constructor(private formB: FormBuilder, private router: Router, /*private usercambioContrService: UsercambioContrService,private StudentService:StudentService*/) { 
    this.cambioContrForm = this.formB.group({
    userID: [''],
    password: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(formData: any){
  }

  cambioContr(estado){

    if (estado){
      this.router.navigateByUrl('perfilEstudiante');
    }else{
      this.router.navigateByUrl('perfilEstudiante');
    }
    
    
  }
}
