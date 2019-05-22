export class Ship{
    name: string;
    cargo_capacity: number;
    cost_in_credits: number;
    crew: number;
    length: number;
    manufacturer: string;
    model: string;
    pilotCount: number;

    // constructor(name: string, cargo_capacity: number, cost_in_credits: number, crew: number, length: number, manufacturer: string, model: string){
    //     this.name = name;
    //     this.cargo_capacity = cargo_capacity;
    //     this.cost_in_credits = cost_in_credits;
    //     this.crew = crew;
    //     this.length = length;
    //     this.manufacturer = manufacturer;
    //     this.model = model;
    // }

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
    }

}