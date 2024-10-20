import {Component, Input} from '@angular/core';
import {GifItem} from '../../model/gif-item.entity';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';

/**
 * GifCardItemComponent
 * @description
 * This component is responsible for displaying a single gif item.
 * It receives a gif item as input and displays the gif image and title.
 * @author Janiel Franz Escalante
 */
@Component({
  selector: 'app-gif-card-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardImage,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './gif-card-item.component.html',
  styleUrl: './gif-card-item.component.css'
})
export class GifCardItemComponent {
  @Input() gif!: GifItem;

}
