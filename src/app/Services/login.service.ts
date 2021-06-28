
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
/* modifyUser(user: User, userold : User, img : string | ArrayBuffer){
    const params = new HttpParams()
    .set('nombreusuario', userold["nombreusuario"])
    .set('password', user.password)
    .set('fname', user.fname)
    .set('mname', user.mname)
    .set('lname', user.lname)
    .set('nacionalidad', user.nationality);
    console.log(user);
    console.log(userold);
    if (img == null){
      img = "null";
    }
    console.log({'file': img.toString()});
    this.http.patch(this.BaseUrl +'?' + params.toString(),{'file': img.toString()}).subscribe(data => {
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