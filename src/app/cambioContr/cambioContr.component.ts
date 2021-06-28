import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../Models/student.model';
import { UserService } from '../Services/login.service';

@Component({
  selector: 'app-cambioContr',
  templateUrl: './cambioContr.component.html',
  styleUrls: ['./cambioContr.component.scss']
})
export class cambioContrComponent implements OnInit {
  hideNewPassword= true;
  hideNewPasswordVerify= true;

  cambioContrForm: FormGroup;
  error: string;
  verError: boolean;
  user: Student;


  constructor(private formB: FormBuilder, private router: Router, private UserService: UserService) { 
    this.cambioContrForm = this.formB.group({
    newPassword: [''],
    newPasswordVerify: ['']
    });
  }

  ngOnInit(): void {
    this.user=this.UserService.userLogged;
  }

  onSubmit(formData: any){
    console.log(formData)
    if((formData.newPassword == '') || (formData.newPasswordVerify == '')){
      this.error = 'Ambos espacios deben estar completados';
      this.verError=true;

    }else if( formData.newPassword != formData.newPasswordVerify){
      this.error ='Error.Las contraseñas no son iguales';
      this.verError=true;

    }else{
      console.log('Cambio de contraseña')
      this.UserService.modifyUser(this.user.Carnet, formData.newPassword);
      this.router.navigate(['/perfilEstudiante']);
      this.verError=false;

    }
  }

  cambioContr(estado){

    if (estado){
      this.router.navigateByUrl('perfilEstudiante');
    }else{
      this.router.navigateByUrl('perfilEstudiante');
    }
     
  }
  mostrarError(){ 
    return this.verError;
   }

   mostrarErrores(){
     return this.error;
   }
}
