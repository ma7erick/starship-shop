import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { map } from "rxjs/operators";
import { Ship } from '../ship';
import { Ship } from './ship';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: Http) { }

  url = 'https://swapi.co/api/'
  ships: Ship[] = [];
  displayShips: Ship = [];


  getShips(){
    try{
      return this.http.get(this.url + 'starships/').pipe(
        map(res => res.json())
      )
    }
    catch(err){
      console.log("Error getting ships from api");
    }
  }

  compareShipsLowToHigh(a: Ship, b: Ship){
    const priceA = a.price;
    const priceB = b.price;

    if(priceA < priceB){
      return -1;
    }
    else{
      return 1;
    }

  }

  sortShipsByPrice(isLowToHigh: boolean){
    
    this.displayShips.sort(this.compareShipsLowToHigh);
  }

}
