import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path:'home',component:AppComponent },
  {path:'product',component:ProductListComponent},
  {path:'test', component: TestComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
