import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getTrendingGifs() {
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=SY0AC7Hvmshh9ETLqISMF5D7uH10up50&limit=60&rating=pg');
  }
}
