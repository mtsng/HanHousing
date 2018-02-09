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
  public lat = 51.673858;
  public lng = 7.815982;

  public locations: Location[] = [];

  constructor(private housing: HousingService){
    
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

  public markers: Marker[] = [
    {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  }
  ];
}
