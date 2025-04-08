import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent {
  @Input() maxStars = 5; 
  @Input() rating = 0; 
  @Output() ratingChange = new EventEmitter<number>();

  stars: number[] = [];

  constructor() {
    this.stars = Array.from({ length: this.maxStars }, (_, i) => i + 1);
  }

  setRating(newRating: number) {
    this.rating = newRating;
    this.ratingChange.emit(this.rating);
  }
}
