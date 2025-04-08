import { Component } from '@angular/core';
import { StarRatingComponent } from './star-rating/star-rating.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Angular Standalone App';
  userRating = 3;

  onRatingChange(newRating: number) {
    this.userRating = newRating;
  }
}
