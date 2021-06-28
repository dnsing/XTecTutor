import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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


  constructor(private formB: FormBuilder, private router: Router, /*private usercambioContrService: UsercambioContrService,private StudentService:StudentService*/) { 
    this.cambioContrForm = this.formB.group({
    newPassword: [''],
    newPasswordVerify: ['']
    });
  }

  ngOnInit(): void {
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
      //this.userService.setUserLogged(this.usertoCheck);
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
