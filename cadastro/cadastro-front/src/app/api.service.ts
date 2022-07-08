import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { }

  getAllCadastros(): Observable<any> {
    return this.http.get(this.baseUrl + 'cadastros/',
    {headers: this.httpHeaders}
    );
  };

  getCadastro(id:any): Observable<any> {
    return this.http.get(this.baseUrl + 'cadastros/' + id + '/',
    {headers: this.httpHeaders}
    );
  }; 
  saveNovoCadastro(cadastro:any) : Observable<any>{
    return this.http.post(this.baseUrl + 'cadastros/', cadastro,
    {headers: this.httpHeaders});
  };
}
