import {Component, Input} from '@angular/core';
import {GifItem} from '../../model/gif-item.entity';
import {GifCardItemComponent} from '../gif-card-item/gif-card-item.component';

/**
 * GifCardListComponent
 * @description
 * This component is responsible for displaying a list of gif cards
 * @author Janiel Franz Escalante
 */
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
