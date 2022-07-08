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

  getCadastro(id:any): Observable<any> {
    return this.http.get(this.baseUrl + 'cadastros/' + id + '/',
    {headers: this.httpHeaders}
    );
  }; 

  updateCadastro(cadastro:any): Observable<any> {
    return this.http.put(this.baseUrl + 'cadastros/' + cadastro.id + '/', cadastro,
    {headers: this.httpHeaders}
    );
  }; 

  deleteCadastro(id : any) : Observable<any> {
    return this.http.delete(this.baseUrl + 'cadastros/' + id + '/',
    {headers: this.httpHeaders});
  };




}
