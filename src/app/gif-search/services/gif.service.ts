import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GifItem} from '../model/gif-item.entity';

/**
 * GIF Service
 * @class GifService
 * @description
 * This service is responsible for the gif search functionality.
 * It uses the Giphy API to get the gifs by word.
 * @property {HttpClient} http - The http client to make the requests.
 * @property {HttpHeaders} httpOptions - The http options to make the requests.
 * @property {string} apiKey - The Giphy API key.
 * @property {string} baseUrl - The base url for the Giphy API.
 * @method getGifsByWord - This method is responsible for getting the gifs by word.
 * @author Janiel Franz Escalante
 */
@Injectable({
  providedIn: 'root'
})
export class GifService {

  private httpOptions = { headers: new HttpHeaders ({ 'Content-Type' : 'application/json' }) };
  private http: HttpClient  = inject(HttpClient);

  private apiKey = 'MmfyhE1aaAOMjhhj9cKblhsH8QfnZGWL';
  private baseUrl: string = 'https://api.giphy.com/v1/gifs/search'

  public getGifsByWord(word: string) {
    return this.http.get(`${this.baseUrl}?api_key=${this.apiKey}&q=${word}`, this.httpOptions);
  }
}
