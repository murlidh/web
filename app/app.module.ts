import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductListModule } from './product-list/product-list.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    TableModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    AppRoutingModule,
    ProductListModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
