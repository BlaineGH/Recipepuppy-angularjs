import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
//Routing:
import { AppRoutingModule } from './app-routing.module';
//Services:
import { MealService } from "./meal/meal.service";
//Components:
import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';



@NgModule({
  declarations: [
    AppComponent,
    MealComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [MealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
