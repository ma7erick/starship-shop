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


  onPriceFilterChange(){
    console.log("lower bound: " + this.priceLowerBound);
    console.log("Upper bound: " + this.priceUpperBound);


    console.log("made it here");
    var lowerBound = this.priceLowerBound;
    var upperBound = this.priceUpperBound;
    if(upperBound == 0 || upperBound == undefined){
      upperBound = 1000000000001;
    }
    if(lowerBound == undefined){
      lowerBound = 0;
    }
    this.swapiService.filterShipsByPrice(lowerBound, upperBound);
    console.log(this.swapiService.displayShips);
    this.displayShips = this.swapiService.displayShips;
    if(this.priceLowerBound == 0){

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
      this.swapiService.ships = this.ships;
      console.log(this.displayShips);
    })

  }

}
