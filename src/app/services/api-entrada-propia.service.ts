import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reply } from '../models/reply'
import { entrada } from '../models/entrada'


const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'appliacation/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiEntradaPropiaService {
//https://localhost:44395/api/Entrada?idEntrada=123
  url: string = 'https://localhost:44395/api/Entrada?';

  constructor(private _http: HttpClient) { }

  getEntry(entryId: string){
    const httpParams = new HttpParams()
      .set('idEntrada', entryId)
    return this._http.get(this.url+httpParams);
  }
}
