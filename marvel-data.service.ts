import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MarvelDataService {

  //URL to marvel API
  private url: string = "https://gateway.marvel.com:443/v1/public";
  //user public key required to connect to the API
  private apikey: string = '3d7b85b4a5739b2d488c4c43919ffc21';

  constructor (private httpSevice: Http) {}

getCharacters(): Observable<any>{
     return this.httpSevice.get(`${this.url}characters?limit=805apikey=${this.apikey}`)
       .map(this.extractData);
}

getComics(): Observable<any>{
    return this.httpSevice.get(`${this.url}comics?limit=805apikey=${this.apikey}`)
      .map(this.extractData);
}

getCreators(): Observable<any>{
  return this.httpSevice.get(`${this.url}creators?limit=805apikey=${this.apikey}`)
    .map(this.extractData);
}

getCreatorsByComicId(id: number): Observable<any>{
  return this.httpSevice.get(`${this.url}comics/${id}/creators?limit=805apikey=${this.apikey}`)
    .map(this.extractData);
}

getComicsByCharacterId(id: number): Observable<any>{
  return this.httpSevice.get(`${this.url}characters/${id}/comics?limit=805apikey=${this.apikey}`)
    .map(this.extractData);
}

getCharacterById(id: number): Observable<any>{
  return this.httpSevice.get(`${this.url}characters/${id}?limit=805apikey=${this.apikey}`)
    .map(this.extractData);
}

getComicById(id: number): Observable<any>{
  return this.httpSevice.get(`${this.url}comics/${id}?limit=805apikey=${this.apikey}`)
    .map(this.extractData);
}

private extractData(res: any){
  let body = res.json();
  return body || {};
}
}
