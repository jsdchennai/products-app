import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  totalLength: number = 0;

  categories: any = [];

  products: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  getProducts(query: string = '') {
    this.productService.getProducts(query).subscribe({
      next: (res) => {
        this.products = res;
        this.totalLength = this.products.length;
      },
      error: (err) => {},
    });
  }

  getCategories() {
    this.productService.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (err) => {},
    });
  }

  onSubmit(query: string = '') {
    this.productService.getProducts(query).subscribe({
      next: (res) => {
        this.products = res;
        this.totalLength = this.products.length;
      },
      error: (err) => {},
    });
  }
}
