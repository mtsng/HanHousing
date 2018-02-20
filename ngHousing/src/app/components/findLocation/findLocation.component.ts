import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from '../../services/googleApi.service';
import { HousingService } from '../../services/housing.service';
import { Marker } from '../../models/marker.model';
import { Location } from '../../models/location.model';
import { ApiLocation } from '../../models/api-location.model';

@Component({
  selector: 'app-findLocation',
  templateUrl: './findLocation.component.html',
  styleUrls: ['./findLocation.component.css']
})

export class FindLocationComponent implements OnInit{
  private location: Location = new Location();

  public locations: Location[] = [];
  public address;

  constructor(private housing: HousingService, private api: GoogleApiService){
    this.location.lat = 38.953989;
    this.location.lng = -77.3512858;
  }

  ngOnInit(){
    this.housing.getLocations().subscribe(
      locations => {
        this.locations = locations;
        console.log(locations);
      },
      err => {
        console.log('Error');
      });
  }

  public submitAddress(){
    //TODO null check
    //TODO unsubscribe
    let address = this.address.replace(/\s/g, '+');
    this.api.getCoordinates(address).subscribe(
      data => {
        this.location = data.results[0].geometry.location;
        //console.log(this.location);
      },
      error => {
        console.log(error);
      });
  }
}
