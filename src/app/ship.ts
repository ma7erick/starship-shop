export class Ship{
    name: string;
    cargo_capacity: number;
    cost_in_credits: number;
    crew: number;
    length: number;
    manufacturer: string;
    model: string;

    constructor(name: string, cargo_capacity: number, cost_in_credits: number, crew: number, length: number, manufacturer: string, model: string){
        this.name = name;
        this.cargo_capacity = cargo_capacity;
        this.cost_in_credits = cost_in_credits;
        this.crew = crew;
        this.length = length;
        this.manufacturer = manufacturer;
        this.model = model;
    }

}