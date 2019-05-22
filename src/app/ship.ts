export class Ship{
    name: string;
    cargo_capacity: number;
    cost_in_credits: number;
    crew: number;
    length: number;
    manufacturer: string;
    model: string;
    pilotCount: number;
    pilots: any[]
   

    constructor(jsonShip: any){
        this.name = jsonShip.name;
        this.cargo_capacity = jsonShip.cargo_capacity;
        if(jsonShip.cost_in_credits == 'unknown'){
            this.cost_in_credits = 0;
        }else{
            this.cost_in_credits = parseInt(jsonShip.cost_in_credits);
        }
        
        
        this.crew = jsonShip.crew;
        this.length = jsonShip.length;
        this.manufacturer = jsonShip.manufacturer;
        this.model = jsonShip.model;
        this.pilotCount = jsonShip.pilots.length;
        this.pilots = jsonShip.pilots;
    }

}