import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent {
  title="XTECTutor";
  home= "http://localhost:4200/home"
  router: any;

  singIn(){
    return true;
  }
}
