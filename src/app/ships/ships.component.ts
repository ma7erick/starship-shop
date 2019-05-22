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
