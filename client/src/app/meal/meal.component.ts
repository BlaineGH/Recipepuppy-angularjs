import { Component, OnInit } from '@angular/core';
import { MealService } from "./meal.service";
//(^^^Imports^^^)

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
	// All variables I am goign to use. We can use these in the HTML because we are exporting them too.
	entreeslist= [];
	str = String;
	strCopy= [];
	theDish = {};

	//Cant have a good meal without good service.
  constructor(private _mealservice: MealService) { }

  ngOnInit() {
  	// I want to run as soon as the component is ready.
  	this.setup();
  }

    // Preloading all your JSON data,
  setup(){
  	//We are going to get all data from an API located: "../meal.service"
  	let observable = this._mealservice.setup();
  	observable.subscribe((data)=>{
  		//binding all your json data to this variable:
  		this.entreeslist = data.json().results;
  		//Looping through the data so we can grab ingredient data (setting up to convert string data into an array). 
 		for (var i = 0; i < this.entreeslist.length; i++){
 			//binding our data to a variable to make it easier to convert.(Starting conversion).
 			this.str = this.entreeslist[i].ingredients;
 			let words = this.str.split(" ");
 			this.strCopy = this.str.split(", ");
 			//(^^^End of conversion^^^ For some reason the server does not like split() in TypeScript.)
 			//Replacing the old data type (string) to the new type (array). Now We can get the count of the ingredients.
 			this.entreeslist[i].ingredients = this.strCopy;
 			//Creating a variable to compare ingredients.length
 			if (typeof ingcheck === "undefined"){
 				let ingcheck = this.entreeslist[i];
 			}
 			//Compareing ingredients.length and setting the "ingcheck" variable if the next object in the for loop has more ingredients.
 			else if (this.entreeslist[i].ingredients.length > ingcheck.ingredients.length){
 				ingcheck = this.entreeslist[i];
 				//Setting an exportable variable so we can call into the HTML to display the data.
 				this.theDish = ingcheck;
 			}
 			//In the future:Make moduler and add a searchbar that queries for you and add option to order recipes other than by the most ingredients.
 			//This is very rough, but could refine with more time. If you have suggestions or edits; please, annotate.
 		}
  	});
  }

}
