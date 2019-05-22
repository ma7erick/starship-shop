import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: Http) { }

  url = 'http://swapi.co/api/'

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
}
