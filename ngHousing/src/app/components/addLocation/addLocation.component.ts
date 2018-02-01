import { Component } from '@angular/core';
import { GoogleApiService } from '../../services/googleApi.service';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-addLocation',
  templateUrl: './addLocation.component.html',
  styleUrls: ['./addLocation.component.css']
})

export class AddLocationComponent{
  public input: string;
  private location: Location = new Location();

  constructor(private api: GoogleApiService){
    this.location.lat = 47.6649281;
    this.location.lng = -122.3805198;
  }

  public submitAddress(){
    //TODO null check
    let address = this.input.replace(/\s/g, '+');
    this.api.getCoordinates(address).subscribe(
      data => {
        this.location = data.results[0].geometry.location;
        //console.log(this.location);
      });
  }
}
