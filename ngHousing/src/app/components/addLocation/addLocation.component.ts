import { Component } from '@angular/core';
import { GoogleApiService } from '../../services/googleApi.service';
import { Location } from '../../models/location.model';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-addLocation',
  templateUrl: './addLocation.component.html',
  styleUrls: ['./addLocation.component.css']
})

export class AddLocationComponent{
  public address: string;
  private location: Location = new Location();
  public contact: Contact;

  constructor(private api: GoogleApiService){
    this.location.lat = 47.6649281;
    this.location.lng = -122.3805198;
    this.contact = new Contact();
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
