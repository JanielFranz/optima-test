import {Component, Input} from '@angular/core';
import {GifItem} from '../../model/gif-item.entity';
import {GifCardItemComponent} from '../gif-card-item/gif-card-item.component';

@Component({
  selector: 'app-gif-card-list',
  standalone: true,
  imports: [
    GifCardItemComponent
  ],
  templateUrl: './gif-card-list.component.html',
  styleUrl: './gif-card-list.component.css'
})
export class GifCardListComponent {

  //#region Properties

  @Input() gifs!: GifItem[];


  //#endregion
}
