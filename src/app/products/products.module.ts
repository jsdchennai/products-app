import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { SharedModule } from '../shared/shared.module';
import { components } from './components';
import { containers } from './containers';

@NgModule({
  declarations: [...components, ...containers],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
