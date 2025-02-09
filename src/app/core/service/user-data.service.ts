import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrlProduct } from '../apiRoot/baseUrl';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  userName: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('username') || ''
  );
  constructor(private _httpClient: HttpClient) {}

  getCartCount(id: string): Observable<any> {
    return this._httpClient.get(
      `https://e-commerce-serverside.vercel.app/my-cart/${id}`
    );
  }

  allProducts(): Observable<any> {
    return this._httpClient.get(`${baseUrlProduct}/products`);
  }
}
