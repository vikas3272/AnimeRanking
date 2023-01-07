import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient:HttpClient) { }
  animeCartsUrl = 'https://api.jikan.moe/v4/top/anime?limit=20';
  getAnimes(){
    return this.httpclient.get(this.animeCartsUrl);
  }  
}
