export class Pilot{
    name: string;
    birth_year: string;
    mass: string;
    height: string;
    gender: string;
   
   

    constructor(jsonPilot: any){
        this.name = jsonPilot.name;
        this.birth_year = jsonPilot.birth_year;
        this.mass = jsonPilot.mass;
        this.height = jsonPilot.height;
        this.gender = jsonPilot.gener;
    }

}