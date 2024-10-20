import {Component, EventEmitter, Output} from '@angular/core';

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

  onWordEnter(word: string) {
    this.gifSearched.emit(word)
    console.log('word emmited: ', word);
  }
  //#endregion
  protected readonly HTMLInputElement = HTMLInputElement;
}
