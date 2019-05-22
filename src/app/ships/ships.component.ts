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


  onPriceFilterChange(event){
    console.log("made it here");
    var lowerBound = this.priceLowerBound;
    var upperBound = this.priceUpperBound;
    if(upperBound == 0){
      upperBound = 1000000000001;
    }
    this.swapiService.filterShipsByPrice(lowerBound, upperBound);
    this.displayShips = this.swapiService.displayShips;
    if(this.priceLowerBound == 0){
      console.log("lower bound: " + this.priceLowerBound);

    }
    // console.log("upper bound: " + this.priceUpperBound);

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
      console.log(this.displayShips);
    })

  }

}
