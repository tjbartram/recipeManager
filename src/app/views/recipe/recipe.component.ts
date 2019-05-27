import { Component, OnInit } from '@angular/core';
import { GenericFunctionsService } from 'src/app/service/generic-functions.service';

@Component({
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(private genFunctions: GenericFunctionsService) { }

  ngOnInit() {
	  this.genFunctions.setSelectedNav('recipe');
  }

}
