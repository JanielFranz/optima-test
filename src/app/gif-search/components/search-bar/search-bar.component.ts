import {Component, EventEmitter, Output} from '@angular/core';

/**
 * SearchBarComponent
 * @class
 * @classdesc This class is responsible for the search bar component
 * @author
 * Janiel Franz Escalante
 */
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  //#region Properties
  @Output() gifSearched = new EventEmitter<string>();

  /**
   * Handle word enter
   * @description
   * This method is responsible for handling the word enter event
   * @param word - The word to be searched
   */
  onWordEnter(word: string) {
    this.gifSearched.emit(word)
    console.log('word emmited: ', word);
  }
  //#endregion
  protected readonly HTMLInputElement = HTMLInputElement;
}
