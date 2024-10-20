import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GifItem} from '../model/gif-item.entity';

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
