import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ProductListComponent], 
})
export class AppComponent {
  title = 'My App';
}
