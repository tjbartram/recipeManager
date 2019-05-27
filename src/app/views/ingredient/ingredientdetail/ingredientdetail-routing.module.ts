import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientDetailComponent } from './ingredientdetail.component';

const routes: Routes = [
	{
		path: '',
		component: IngredientDetailComponent,
		data: {
		  title: 'IngredientDetail'
		}
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientDetailRoutingModule { }
