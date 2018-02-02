import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import { Key } from '../API_KEY';

@Injectable()
export class GoogleApiService {
  private url: string = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  private key: string = '&key=' + Key.api_key;

  constructor(private http: HttpClient){

  }

  public getCoordinates(address: string): Observable<any>{
    return this.http.get(this.url + address + this.key);
  }
}
