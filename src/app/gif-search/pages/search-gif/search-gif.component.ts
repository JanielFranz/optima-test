import {Component} from '@angular/core';
import {GifItem} from '../../model/gif-item.entity';
import {GifService} from '../../services/gif.service';
import {SearchBarComponent} from '../../components/search-bar/search-bar.component';
import {GifCardListComponent} from '../../components/gif-card-list/gif-card-list.component';

@Component({
  selector: 'app-search-gif',
  standalone: true,
  imports: [
    SearchBarComponent,
    GifCardListComponent
  ],
  templateUrl: './search-gif.component.html',
  styleUrl: './search-gif.component.css'
})
export class SearchGifComponent {


  //#region Properties
  protected gifItemList: Array<GifItem> = [];
  constructor(private gifService: GifService){}
  //#endregion

  //#region Service Methods

  searchGifByWord(word: string) : void {
    this.gifService.getGifsByWord(word).subscribe((response: any) => {
      this.gifItemList = response.data.map((gif: any) => {
        console.log(gif.id)
        return new GifItem(gif.id, gif.username, gif.images.original.url, gif.title);
      })
      console.log('gif list', this.gifItemList);
    })
  }
}
