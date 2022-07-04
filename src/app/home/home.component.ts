import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../models/weatherData.module';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherData?:WeatherData;

  title:string = 'Amigos Angular Weather';
  loading:boolean = false;
  defaultLocation :string = 'Kathmandu, Nepal';
  
  constructor(private weatherService: WeatherService) { }

    ngOnInit(): void {   
      this.callWeatherApi(this.defaultLocation);
     }

    callWeatherApi(searchPlace: string) {
      this.loading = true; 
      this.weatherService.getWeatherDataFromAPI(searchPlace? searchPlace : this.defaultLocation)
      .subscribe({
        next: (response) => {
          this.loading = false;
          this.weatherData = (response);
          //console.log("Response => ", this.weatherData);
        }
      });
     }
}
