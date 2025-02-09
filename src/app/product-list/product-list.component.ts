import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,  
  imports: [CommonModule],  
  template: `
    <select (change)="onCategoryChange($event)">
      <option *ngFor="let category of categories" [value]="category">{{ category }}</option>
    </select>

    <div *ngFor="let product of filteredProducts">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
    </div>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [];
  filteredProducts: any[] = [];
  selectedCategory: string = '';
  categories: string[] = ['Tous', 'Ordinateurs', 'Imprimantes', 'Téléphones'];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.selectedCategory = selectedValue;

    if (selectedValue === 'Tous') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (product) => product.category === selectedValue
      );
    }
  }
}
