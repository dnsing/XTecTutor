import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { HttpClient, HttpParams } from '@angular/common/http'
import { stringify } from 'querystring';
/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
// Servicio de usuario
export class busquedaFechaService {

  busquedaFechUrl: string = 'https://localhost:44395/api/BusquedasFecha'
  estudianteUrl:string='https://localhost:44395/api/Estudiante'
  userLogged: any = [];
  error:string;
  
  
  

  /**
   * Creates an instance of user service.
   * @param http 
   */
  constructor(private http: HttpClient) { }

getEntrada(fecha: string,idCarrera: number, codigoCurso:string,idTema: number ){

    const params = new HttpParams()
    .set('fecha', fecha)
    .set('carrera', idCarrera)
    .set('curso', codigoCurso)
    .set('tema', idTema);
    
    
    return this.http.get<any>(this.busquedaFechUrl+'?' + params.toString());
  }
}