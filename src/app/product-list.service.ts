import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export interface cartItem {
  id: number;
  value: any;
  quantity: number;
}
@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  constructor(private HttpClient: HttpClient) {}
  getProducts(): Observable<any> {
    return this.HttpClient.get('https://api.escuelajs.co/api/v1/products/');
  }
  getProductDetails(id: number): Observable<any> {
    return this.HttpClient.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
  }

  counter = new BehaviorSubject(0); //to listen for updates in counter

  cartArray: Array<cartItem> = [];
}
