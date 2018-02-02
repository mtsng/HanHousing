import { Component } from '@angular/core';
import { GoogleApiService } from '../../services/googleApi.service';
import { Marker } from '../../models/marker.model';

@Component({
  selector: 'app-findLocation',
  templateUrl: './findLocation.component.html',
  styleUrls: ['./findLocation.component.css']
})

export class FindLocationComponent {
  public lat = 51.673858;
  public lng = 7.815982;


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
