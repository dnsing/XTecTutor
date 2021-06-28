
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
export class UserService {

  loginUrl: string = 'https://localhost:44395/api/Login'
  estudianteUrl:string='https://localhost:44395/api/Estudiante'
  userLogged: any = [];
  error:string;
  
  
  

  /**
   * Creates an instance of user service.
   * @param http 
   */
  constructor(private http: HttpClient) { }


  /**
   * Sets user logged
   * @param user 
   */
  setUserLogged(user: any){
    this.userLogged = user;
  }

/**
 * Modificar usuario
 * @param user a modificar
 * @param userold viejo user
 * @param img 
 */
 modifyUser(carnet:number, password:string){
    const params = new HttpParams()
    .set('carnet', carnet)
    .set('clave', password);

    
    this.http.patch(this.estudianteUrl +'?' + params.toString(),{}).subscribe(data => {
      console.log(data);
    }) 
    
  }
/**
 * Checks log in
 * @param username 
 * @returns  
 */
checkLogIn(password: string, carnet: number){
    const params = new HttpParams()
    .set('carnet', carnet)
    .set('password', password);
    
    
    return this.http.get<any>(this.loginUrl+'?' + params.toString());
  }




}