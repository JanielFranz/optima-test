import {Component} from '@angular/core';
import {GifItem} from '../../model/gif-item.entity';
import {GifService} from '../../services/gif.service';
import {SearchBarComponent} from '../../components/search-bar/search-bar.component';
import {GifCardListComponent} from '../../components/gif-card-list/gif-card-list.component';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {MatButton} from '@angular/material/button';

/**
 * SearchGifComponent
 * This component is the main component for the gif search page.
 * @description
 * This component is responsible for the search gif page.
 * It contains the search bar and the gif card list components.
 * It also contains the history of the searched words.
 * @author Janiel Franz Escalante
 */
@Component({
  selector: 'app-search-gif',
  standalone: true,
  imports: [
    SearchBarComponent,
    GifCardListComponent,
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    MatButton
  ],
  templateUrl: './search-gif.component.html',
  styleUrl: './search-gif.component.css'
})
export class SearchGifComponent {
  //#region Properties
  protected wordList: Array<string> = [];
  protected gifItemList: Array<GifItem> = [];
  constructor(private gifService: GifService){}
  //#endregion

  //#region Service Methods
  /**
   * searchGifByWord
   * @description
   * This method is responsible for searching the gifs by word.
   * It uses the gif service to get the gifs by word.
   * @param word
   */
  searchGifByWord(word: string) : void {
    this.gifService.getGifsByWord(word).subscribe((response: any) => {
      this.gifItemList = response.data.map((gif: any) => {
        console.log(gif.id)
        return new GifItem(gif.id, gif.username, gif.images.original.url, gif.title);
      })
      console.log('gif list', this.gifItemList);
    })
  }
  //#endregion

  //#region EventHandlers

  /**
   * onSearchWord
   * @description
   * This method is the event handler for the search word event.
   * It is called when the search bar component emits the search word event.
   * @param word
   * @author Janiel Franz Escalante
   */
  onSearchWord(word: string) : void {
    this.searchGifByWord(word);
    if(word && !this.wordList.includes(word)){
      this.wordList.push(word);
      //refresh the list
      this.wordList = [...this.wordList];
    }
  }
}
