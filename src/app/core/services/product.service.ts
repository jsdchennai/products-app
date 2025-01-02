import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(query: string) {
    let url =
      ' https://api.escuelajs.co/api/v1/products?offset=0&limit=100' + query;
    return this.http.get(url);
  }

  getCategories() {
    let url = 'https://api.escuelajs.co/api/v1/categories';
    return this.http.get(url);
  }
}
