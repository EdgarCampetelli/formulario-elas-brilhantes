import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucessoService {

  constructor(private http:HttpClient) {}
  

  findAllSorteios(): Observable<any>{
    return this.http.get<any>(`http://mais-dev.mmtechno.com.br/api/sorteio`);
  }

  findSorteioById(id:any): Observable<any>{
    return this.http.get<any>(`http://mais-dev.mmtechno.com.br/api/sorteio/${id}`);
}
}
