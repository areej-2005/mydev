import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  
  getProducts(): Observable<any[]> {
    return of([
      { id: 1, name: 'Laptop 1', description: 'Description 1', category: 'Ordinateurs' },
      { id: 2, name: 'Printer 1', description: 'Description 2', category: 'Imprimantes' },
      { id: 3, name: 'Laptop 2', description: 'Description 3', category: 'Ordinateurs' },
      { id: 4, name: 'Printer 2', description: 'Description 4', category: 'Imprimantes' },
      { id: 5, name: 'Téléphone 1', description: 'Description 5', category: 'Téléphones'},
    ]);
  }

  
  getProduct(id: number): Observable<any> {
    const products = [
      { id: 1, name: 'Laptop 1', description: 'Description 1', category: 'Ordinateurs' },
      { id: 2, name: 'Printer 1', description: 'Description 2', category: 'Imprimantes' },
      { id: 3, name: 'Laptop 2', description: 'Description 3', category: 'Ordinateurs' },
      { id: 4, name: 'Printer 2', description: 'Description 4', category: 'Imprimantes' },
      { id: 5, name: 'Téléphone 1', description: 'Description 5', category: 'Téléphones'},
    ];
    const product = products.find(p => p.id === id);
    return of(product);  
  }
}
