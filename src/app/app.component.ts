import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SearchGifComponent} from './gif-search/pages/search-gif/search-gif.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchGifComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-optima';
}
