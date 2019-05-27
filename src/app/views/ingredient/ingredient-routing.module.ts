import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientComponent } from './ingredient.component';

const routes: Routes = [
	{
		path: '',
		component: IngredientComponent,
		data: {
		  title: 'Ingredients'
		}
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientRoutingModule { }
