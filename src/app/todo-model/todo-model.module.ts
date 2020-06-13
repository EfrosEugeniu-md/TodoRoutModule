import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductRepository} from './product.repository';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductRepository,
  ]
})
export class TodoModelModule {
}
