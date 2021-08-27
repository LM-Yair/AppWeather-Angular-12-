import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WeatherDat } from '../../models/weather_data';

@Component({
  selector: 'major-cities-list',
  templateUrl: './major-cities.component.html',
  styleUrls: ['./major-cities.component.scss']
})
export class MajorCitiesComponent implements OnInit {
  key: string = 'ab3b3b99-9478-4e8e-ae6f-b69e9188efc7';
  data: any = undefined;
  cities: Array<any> = [];
  citiesLink: Array<string> = [
    `https://api.airvisual.com/v2/city?city=Tokyo&state=Tokyo&country=Japan&key=${ this.key }`,
    `http://api.airvisual.com/v2/city?city=Los%20Angeles&state=California&country=USA&key=${ this.key }`,
    `https://api.airvisual.com/v2/city?city=Mexico%20City&state=Mexico%20City&country=Mexico&key=${ this.key }`,
    `https://api.airvisual.com/v2/city?city=Dhaka&state=Dhaka&country=Bangladesh&key=${ this.key }`,
    `https://api.airvisual.com/v2/city?city=Shanghai&state=Shanghai&country=China&key=${ this.key }`,
    `https://api.airvisual.com/v2/city?city=Lagos&state=Lagos&country=Nigeria&key=${ this.key }`,
    `https://api.airvisual.com/v2/city?city=Quilmes&state=Buenos%20Aires&country=Argentina&key=${ this.key }`,
  ];

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.citiesLink.forEach( link => {
      this.http.get( link ).subscribe( res =>{
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
	this.cities.push( weatherDat );
      });
    });
  }

}
