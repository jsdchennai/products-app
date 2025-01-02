import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss'],
})
export class ProductsFilterComponent {
  priceMin: number = 0;
  priceMax: number = 1000;
  step: number = 1;
  thumbLabel: boolean = true;
  value: number = 0;

  productFilterForm = new FormGroup({
    title: new FormControl(''),
    category: new FormControl(''),
    priceMax: new FormControl(''),
  });

  @Input() categories: any = [];

  @Output() submitted = new EventEmitter();

  onSearch() {
    let paramRequest: string = '';

    if (this.productFilterForm.value.title) {
      paramRequest =
        paramRequest + '&title=' + this.productFilterForm.value.title;
    }

    if (this.productFilterForm.value.category) {
      paramRequest =
        paramRequest + '&categoryId=' + this.productFilterForm.value.category;
    }

    if (this.productFilterForm.value.priceMax) {
      paramRequest =
        paramRequest +
        '&price_min=0' +
        '&price_max=' +
        this.productFilterForm.value.priceMax;
    }

    this.submitted.emit(paramRequest);
  }
}
