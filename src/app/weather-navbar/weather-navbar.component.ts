import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-navbar',
  templateUrl: './weather-navbar.component.html',
  styleUrls: ['./weather-navbar.component.css']
})
export class WeatherNavbarComponent implements OnInit {
  constructor() {
   }

  ngOnInit(): void {
     console.log('hello from ngOnInit()')
  }
  navTitle:string = 'Angular Weather'
}
