import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientDetailComponent } from './ingredientdetail.component';
import { IngredientDetailRoutingModule } from './ingredientdetail-routing.module';

@NgModule({
  declarations: [ IngredientDetailComponent ],
  imports: [
    CommonModule,
    IngredientDetailRoutingModule
  ]
})
export class IngredientDetailModule { }
