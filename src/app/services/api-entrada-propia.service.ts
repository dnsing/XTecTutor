import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


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
  

  editEntry(entryId: string,  titulo: string, abstract: string, body: string, autores: string, IdCarrera: number, curso: string, idTema: number, visible: string){
    const httpParams = new HttpParams()
      .set('IdEntrada', entryId)
      .set('titulo', titulo)
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
  postEntry(titulo: string, abstract: string, body: string, autores: string, IdCarrera: number, curso: string, IdTema: number){
    const httpParams = new HttpParams()
      .set('titulo', titulo)
      .set('Abstract', abstract)
      .set('Body', body)
      .set('autores', autores)
      .set('IdCarrera', IdCarrera)
      .set('Curso', curso)
      .set('IdTema', IdTema)

    return this._http.post(this.url+httpParams, {});
  }
}
