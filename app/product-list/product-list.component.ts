import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[]=[];
  displayAddModel=false;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.productService.getProductList().subscribe((res) => {
     this.products=res;
    });
  }

  showModel(){
    this.displayAddModel=true;
  }
}
