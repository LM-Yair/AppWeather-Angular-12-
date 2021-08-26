export class WeatherDat {
  city: string;
  state: string;
  country: string;
  hu: number;
  tp: number;
  ws: number;
  ic: string;

  constructor ( _city:string, _state:string, _country:string, _hu:number, _tp:number, _ws:number, _ic:string ){ 
		 this.city = _city;
		 this.state = _state;
		 this.country = _country;
		 this.hu = _hu;
		 this.tp = _tp;
		 this.ws = _ws;
		 this.ic = _ic;
	       }
}
