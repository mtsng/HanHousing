import { Component } from '@angular/core';
import { Key } from '../../API_KEY';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-addLocation',
  templateUrl: './addLocation.component.html',
  styleUrls: ['./addLocation.component.css']
})

export class AddLocationComponent{
  public input: string;
  private url: string = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  private result: any;
  private key: string = '&key=' + Key.api_key;

  constructor(private http: HttpClient){

  }

  public submitAddress(){
    //TODO null check
    let address = this.input.replace(/\s/g, '+');
    this.getCoordinates(address).subscribe(
      data => {
        this.result = data;
        console.log(data);
        console.log(data.results[0].geometry.location);
      });
  }

  public getCoordinates(address: string){
    return this.http.get(this.url + address + this.key);
  }
}
