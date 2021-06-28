import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reply } from '../models/reply'
import { entrada } from '../models/entrada'

@Injectable({
  providedIn: 'root'
})
export class ApiEntradaPropiaService {
  url: string = 'https://localhost:44395/api/Entrada?';

  constructor(private _http: HttpClient) { }

  getEntry(entryId: string){
    const httpParams = new HttpParams()
      .set('idEntrada', entryId)
    return this._http.get(this.url+httpParams);
  }

  getIdByCarnet(carnet: number){
    const httpParams = new HttpParams()
      .set('carnet', carnet)
    return this._http.get<any[]>(this.url+httpParams);
  }
  

  editEntry(entryId: string,  abstract: string, body: string, autores: string, IdCarrera: string, curso: string, idTema: string, visible: string){
    const httpParams = new HttpParams()
      .set('IdEntrada', entryId)
      .set('Abstract', abstract)      
      .set('Body', body)
      .set('autores', autores)
      .set('IdCarrera', IdCarrera)
      .set('Curso', curso)
      .set('IdTema', idTema)
      .set('visible', visible)
    return this._http.patch(this.url+httpParams, {});
  }

//https://localhost:44395/api/Entrada?titulo=eltitulo&Abstract=cacaca&Body=cacacacaca&autores=carnet1,carnet2&IdCarrera=1&Curso=0&IdTema=0
  postEntry(titulo: string, abstract: string, body: string, autores: string, IdCarrera: string, curso: string, IdTema: string){
    const httpParams = new HttpParams()
      .set('titulo', titulo)
      .set('Abstract', abstract)
      .set('Body', body)
      .set('autores', autores)
      .set('IdCarrera', IdCarrera)
      .set('Curso', curso)

    return this._http.post(this.url+httpParams, {});
  }
}
