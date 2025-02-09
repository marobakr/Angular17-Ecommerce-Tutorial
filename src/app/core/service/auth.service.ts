import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../apiRoot/baseUrl';
import { ILogin } from '../interfaces/http';
import { IRegister } from './../interfaces/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _httpClient: HttpClient) {}

  register(registerData: IRegister): Observable<any> {
    return this._httpClient.post(`${baseUrl}/api/users`, registerData);
  }

  login(loginUser: ILogin): Observable<any> {
    return this._httpClient.post(`${baseUrl}/api/users/auth`, loginUser);
  }
  authorized(): boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    } else return false;
  }

  logout(): Observable<any> {
    return this._httpClient.post(`${baseUrl}/api/users/logout`, {});
  }
}
