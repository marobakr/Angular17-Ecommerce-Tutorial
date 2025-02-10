import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _httpClient: HttpClient) {}
  getCartCount(id: string): Observable<any> {
    return this._httpClient.get(
      `https://e-commerce-serverside.vercel.app/my-cart/${id}`
    );
  }
}
