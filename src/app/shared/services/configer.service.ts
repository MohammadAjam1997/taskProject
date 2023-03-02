import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}
@Injectable({
  providedIn: 'root'
})
export class ConfigerService {
  constructor(@Inject("BASE_URL") public baseUrl: string, public http: HttpClient) { }

  url = '';
  configUrl = '';


  getcurrencyWithID(id:any) {
    return this.http.get<any>(`${this.baseUrl}/api/Currency/GetAllCurrency/:id?id=${id}`);
  }
  getAllData() {
    return this.http.get<any>(this.url);
  }
  getConfigApiformCurrency() {

    return this.http.get<any>(this.configUrl);
  }
  getLanguageApiformLanguage() {
   
    return this.http.get<any>(`${this.baseUrl}/api/Language/getAllLangs`)
  }
}
