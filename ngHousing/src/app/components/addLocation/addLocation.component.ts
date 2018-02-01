import { Component } from '@angular/core';
import { GoogleApiService } from '../../services/googleApi.service';

@Component({
  selector: 'app-addLocation',
  templateUrl: './addLocation.component.html',
  styleUrls: ['./addLocation.component.css']
})

export class AddLocationComponent{
  public input: string;
  private result: any;

  constructor(private api: GoogleApiService){

  }

  public submitAddress(){
    //TODO null check
    let address = this.input.replace(/\s/g, '+');
    this.api.getCoordinates(address).subscribe(
      data => {
        this.result = data;
        console.log(data);
        console.log(data.results[0].geometry.location);
      });
  }
}
