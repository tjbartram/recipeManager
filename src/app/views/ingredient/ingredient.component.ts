import { Component, OnInit } from '@angular/core';
import { GenericFunctionsService } from 'src/app/service/generic-functions.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

	constructor(private genFunctions: GenericFunctionsService) { }

	ngOnInit() {
		this.genFunctions.setSelectedNav('ingredient');
	}
	buttonNewIngredientClick(event: any){
		window.open('/ingredientdetail', '_self');
	}
}
