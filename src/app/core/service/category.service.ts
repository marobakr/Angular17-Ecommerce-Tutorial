import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrlProducts } from '../apiRoot/baseUrl';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _HttpClient: HttpClient) {}

  getAllCategory(): Observable<any> {
    return this._HttpClient.get(`${baseUrlProducts}/category`);
  }
  getSpecificCategory(typeCategory: string): Observable<any> {
    return this._HttpClient.get(`${baseUrlProducts}/category`, {
      params: { type: typeCategory },
    });
  }
}
