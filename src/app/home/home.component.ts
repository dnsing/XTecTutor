import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  user: any[];

  constructor(
    private apilogin: UserService
  ){}

  ngOnInit(): void {
    this.user = this.apilogin.userLogged;
    console.log(Object(this.user)["Carnet"])
  }
}
