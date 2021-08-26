import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { WeatherDat } from '../../models/weather_data';

@Component({
  selector: 'major-cities-list',
  templateUrl: './major-cities.component.html',
  styleUrls: ['./major-cities.component.scss']
})
export class MajorCitiesComponent implements OnInit {
  data: any = undefined;
  cities: Array<any> = [];
  citiesLink: Array<string> = [
    `https://api.airvisual.com/v2/city?city=Tokyo&state=Tokyo&country=Japan&key=${ environment.key }`,
    `http://api.airvisual.com/v2/city?city=Los%20Angeles&state=California&country=USA&key=${ environment.key }`,
    `https://api.airvisual.com/v2/city?city=Mexico%20City&state=Mexico%20City&country=Mexico&key=${ environment.key }`,
    `https://api.airvisual.com/v2/city?city=Dhaka&state=Dhaka&country=Bangladesh&key=${ environment.key }`,
    `https://api.airvisual.com/v2/city?city=Shanghai&state=Shanghai&country=China&key=${ environment.key }`,
    `https://api.airvisual.com/v2/city?city=Lagos&state=Lagos&country=Nigeria&key=${ environment.key }`,
    `https://api.airvisual.com/v2/city?city=Quilmes&state=Buenos%20Aires&country=Argentina&key=${ environment.key }`,
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
