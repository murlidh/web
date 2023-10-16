import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule,
     HttpClientModule,
     TableModule,
     ButtonModule
    ],
  exports: [[ProductListComponent]],
})
export class ProductListModule {}
