import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.component.html',
  styleUrls: ['./perfil-estudiante.component.scss']
})
export class PerfilEstudianteComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }
  cambioContr(){
    this.router.navigateByUrl('myEntry2');
  }
}
