import { Location } from '../models/location.model';
import { Contact } from '../models/contact.model';
import { ApiLocation } from '../models/api-location.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class HousingService {
  apiUrl = 'http://localhost:3000';
  housingUrl = `${this.apiUrl}/api/housing`;

  constructor(private http: HttpClient){

  }

  createLocation(location: Location, contact: Contact): Observable<any> {
    let data = this.apiConversion(location, contact);
    return this.http.post(`${this.housingUrl}`, data);
  }

  getLocation(): Observable<Location[]> {
    return this.http.get(this.housingUrl)
    .map(res => {
      return res["data"].docs as Location[];
    });
  }

  apiConversion(location: Location, contact: Contact): ApiLocation {
    let data: ApiLocation = new ApiLocation();
    data.name = contact.name;
    data.email = contact.email;
    data.phone = contact.phone;
    data.lat = location.lat;
    data.lng = location.lng;
    data.address = location.address;
    data.label = location.label;
    data.draggable = location.draggable;

    return data;
  }
}
