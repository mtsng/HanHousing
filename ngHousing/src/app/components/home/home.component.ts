import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent{
  title: string = 'My first AGM Project';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
