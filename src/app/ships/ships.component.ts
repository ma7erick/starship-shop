import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Ship } from '../ship';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  constructor(private swapiService: SwapiService) { }

  ships: Ship[] = [];
  displayShips: Ship[] = [];
  priceLowerBound: number;
  priceUpperBound: number;
  isLowToHigh: boolean;
  query: string;
  selectedShip: Ship;


  onPriceFilterChange(){
    var lowerBound = this.priceLowerBound;
    var upperBound = this.priceUpperBound;
    if(upperBound == 0 || upperBound == undefined){
      upperBound = 1000000000001;
    }
    if(lowerBound == undefined){
      lowerBound = 0;
    }
    this.swapiService.filterShipsByPrice(lowerBound, upperBound);
    this.displayShips = this.swapiService.displayShips;
    if(this.priceLowerBound == 0){

    }

  }

  sortChanged(){
    this.swapiService.sortShipsByPrice(this.isLowToHigh);
    this.displayShips = this.swapiService.displayShips;
  }

  searchClicked(){
    this.swapiService.filterShipsBySearchQuery(this.query);
    this.displayShips = this.swapiService.displayShips;
  }

  viewShip(ship: Ship){
    this.selectedShip = ship;
    console.log(this.selectedShip.pilots);
    this.swapiService.getPilot

  }
  

  ngOnInit() {
    this.swapiService.getShips()
    .subscribe((res) =>{
      var jsonShips = res['results'];
      for(var i = 0; i < jsonShips.length; i++){
        var jsonShip = jsonShips[i];
        var ship = new Ship(jsonShip);
        this.ships.push(ship);
      }
      this.displayShips = this.ships;
      this.swapiService.ships = this.ships;
      this.swapiService.displayShips = this.ships;

      console.log(this.displayShips);
    })

  }

}
