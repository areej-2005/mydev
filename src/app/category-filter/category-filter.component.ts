import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
})
export class CategoryFilterComponent {
  categories: string[] = ['Ordinateurs', 'Imprimantes'];

  @Output() categoryChange = new EventEmitter<string>();

  onCategorySelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.categoryChange.emit(selectElement.value);
  }
}
