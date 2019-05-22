import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { map } from "rxjs/operators";
import { Ship } from './ship';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: Http) { }

  url = 'https://swapi.co/api/'
  ships: Ship[] = [];
  displayShips: Ship[] = [];


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
    const priceA = a.cost_in_credits;
    const priceB = b.cost_in_credits;

    if(priceA < priceB){
      return -1;
    }
    else{
      return 1;
    }
  }

  compareShipsHighToLow(a: Ship, b: Ship){
    const priceA = a.cost_in_credits;
    const priceB = b.cost_in_credits;

    if(priceA < priceB){
      return 1;
    }
    else{
      return -1;
    }
  }

  sortShipsByPrice(isLowToHigh: boolean){
    if(isLowToHigh){
      this.displayShips.sort(this.compareShipsLowToHigh);
    }
    else{
      this.displayShips.sort(this.compareShipsHighToLow);
    }
  }

  filterShipsByPrice(lowerBound: number, upperBound: number){
    this.displayShips = [];
    for(var i = 0; i < this.ships.length; i++){
      var ship = this.ships[i];
      if(ship.cost_in_credits > lowerBound && ship.cost_in_credits < upperBound){
        this.displayShips.push(ship);
      }
    }
  }

  resetDisplayShips(){
    this.displayShips = this.ships;
  }

}
