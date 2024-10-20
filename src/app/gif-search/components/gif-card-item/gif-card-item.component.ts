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
