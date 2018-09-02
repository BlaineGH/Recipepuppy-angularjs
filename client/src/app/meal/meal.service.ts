import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private _http: Http) { 
  	this.setup();
  }
  setup(){
  	return this._http.get("http://www.recipepuppy.com/api/?i=pesto,lasagna&q=lasagna");
  }
}
