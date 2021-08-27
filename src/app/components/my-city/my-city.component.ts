import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WeatherDat } from 'src/app/models/weather_data';

@Component({
  selector: 'my-city',
  templateUrl: './my-city.component.html',
  styleUrls: ['./my-city.component.scss']
})

export class MyCityComponent implements OnInit {
  key: string = 'ab3b3b99-9478-4e8e-ae6f-b69e9188efc7';
  data: any = undefined;
  weather: any;

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get(`http://api.airvisual.com/v2/nearest_city?key=${ this.key }`)
    .subscribe( res => {
      this.data = res;
      const weatherDat: WeatherDat = {
	city: this.data.data.city,
	state: this.data.data.state,
	country: this.data.data.country,
	hu: this.data.data.current.weather.hu,
	tp: this.data.data.current.weather.tp,
	ws: this.data.data.current.weather.ws,
	ic: this.data.data.current.weather.ic,
      }
      this.weather = weatherDat;
    });
  }

}
