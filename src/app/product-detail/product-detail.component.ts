import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number | null = null; 
  product: any;  

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService  
  ) {}

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');  
      if (id) {
        this.productId = +id;  
        this.loadProduct();  
      }
    });
  }

  
  loadProduct(): void {
    if (this.productId !== null) {
      
      this.productService.getProduct(this.productId).subscribe(
        (res: any) => {
          this.product = res;  
        },
        (error: any) => {
          console.error('Error fetching product:', error);
        }
      );
    }
  }
}
