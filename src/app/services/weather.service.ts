import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weatherData.module';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
   url = 'https://community-open-weather-map.p.rapidapi.com/weather'
   options = {
    method: 'GET',
    params: {
      q: 'Kathmnadu,Nepal',
      lat: '0',
      lon: '0',
      callback: 'test',
      id: '2172797',
      lang: 'null',
      units: 'metric',
      mode: 'json'
    },
    headers: {
      'X-RapidAPI-Key': environment.XRapidAPIKey,
      'X-RapidAPI-Host': environment.XRapidAPIHost
    }
  };

  constructor(private http:HttpClient) { 
     // HttpClient injection, make http field private.
  }

  getWeatherDataFromAPI(place :string):Observable<WeatherData> {
    this.options.params.q = place? place: this.options.params.q
    return this.http.get<WeatherData>(this.url, {
      headers: new HttpHeaders()
        .set('X-RapidAPI-Host',this.options.headers['X-RapidAPI-Host'])
        .set('X-RapidAPI-Key', this.options.headers['X-RapidAPI-Key']),
        params: new HttpParams()
               .set('q', this.options.params.q)
               .set('units', this.options.params.units)
               .set('mode', this.options.params.mode)
    });
  }

}
