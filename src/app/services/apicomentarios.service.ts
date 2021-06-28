import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApicomentariosService {
  url: string = 'https://localhost:44395/api/Comentarios?';

  constructor(private _http: HttpClient) { }

  //https://localhost:44395/api/Comentarios?IdEntrada=123&Carnet=123&Contenido=cacaacaca

  postComment(entryId: string, carnet: string, comment: string){
    const httpParams = new HttpParams()
      .set('idEntrada', entryId)
      .set('Carnet', carnet)
      .set('Contenido', comment)
      
    return this._http.get(this.url+httpParams);
  }
}
