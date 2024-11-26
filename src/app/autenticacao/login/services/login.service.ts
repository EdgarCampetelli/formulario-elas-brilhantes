import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../models/login.module";




@Injectable()
export class LoginService {

  private readonly PATH : string ='pessoa-evento';

  constructor(private http:HttpClient){}

  logar(login: any): Observable<any> {
    return this.http.put( 'http://mais-dev.mmtechno.com.br/api/' + this.PATH + '/3', login)
  }
  
}