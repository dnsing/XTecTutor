import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicalificacionService {

  url: string = 'https://localhost:44395/api/Calificacion?';

  constructor(private _http: HttpClient) { }

  //https://localhost:44395/api/Calificacion?IdEntrada=123&Carnet=123&Calificacion=1
  postRating(entryId: string, carnet: string, calificacion: string,){
    const httpParams = new HttpParams()
      .set('idEntrada', entryId)
      .set('Carnet', carnet)
      .set('Calificacion', calificacion)
    return this._http.post(this.url+httpParams, []);

  }
}
