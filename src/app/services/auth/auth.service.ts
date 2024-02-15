import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURLNuevo = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  postLogin(request: any) {
    let assign = `${this.apiURLNuevo}/api/login`
    return this.http.post<any>(assign, request)
  }
  isAuth():boolean{
    const token = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }
}
