import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicomplementosService {
  urlCurso: string = 'https://localhost:44395/api/Curso';
  urlCarrera: string = 'https://localhost:44395/api/Carrera';
  urlTema: string = 'https://localhost:44395/api/Tema';

  constructor(private _http: HttpClient) { }

  getCursos(){
    return this._http.get(this.urlCurso);
  }

  getCarreras(){
    return this._http.get(this.urlCarrera);
  }

  getTema(){
    return this._http.get(this.urlTema);
  }
}
