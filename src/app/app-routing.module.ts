import { NgModule, ɵloadQueryList } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RecipeComponent } from './views/recipe/recipe.component';
import { IngredientComponent } from './views/ingredient/ingredient.component';
// const routes: Routes = [
// 	{
// 		path: '',
// 		redirectTo: 'home',
// 		pathMatch: 'full',
// 	},
// 	{
// 		path: '',
// 		data: {
// 			title: 'Home'
// 		},
// 		children: [
// 			{
// 				path: 'home',
// 				loadChildren: './views/home/home.module#HomeModule'
// 			},
// 			{
// 				path: 'recipe',
// 				loadChildren: './views/recipe/recipe.module#RecipeModule'
// 			},
// 			{
// 				path: 'ingredient',
// 				loadChildren: './views/ingredient/ingredient.module#IngredientModule'
// 			}
// 		]
// 	}
// ];

const routes: Routes = [
	{
		path: '',
		loadChildren: './views/home/home.module#HomeModule'
	},
	{
		path: 'home',
		// component: HomeComponent,
		loadChildren: './views/home/home.module#HomeModule'
	},
	{
		path: 'recipe',
		// component: RecipeComponent,
		loadChildren: './views/recipe/recipe.module#RecipeModule'
	},
	{
		path: 'ingredient',
		// component: IngredientComponent,
		loadChildren: './views/ingredient/ingredient.module#IngredientModule'
	},
	{
		path: 'ingredientdetail',
		loadChildren: './views/ingredient/ingredientdetail/ingredientdetail.module#IngredientDetailModule'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


