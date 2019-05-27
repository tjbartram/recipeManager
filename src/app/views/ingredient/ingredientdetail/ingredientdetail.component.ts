import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericFunctionsService } from 'src/app/service/generic-functions.service';
import { ActivatedRoute } from '@angular/router';
import { settings } from '../../../../environments/environment';
import { Ingredient } from 'src/app/model/ingredient';
@Component({
	templateUrl: './ingredientdetail.component.html',
	styleUrls: ['./ingredientdetail.component.scss']
})
export class IngredientDetailComponent implements OnInit {

	@ViewChild('inputName') inputName: HTMLInputElement;
	@ViewChild('textareaDescription') textareaDescription: HTMLTextAreaElement;

	private vn_ingredientID: number = null;
	private vo_ingredient: Ingredient;
	public vt_header: string = 'New Ingredient';

	constructor(private genFunctions: GenericFunctionsService, private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.genFunctions.setSelectedNav('ingredient');
	}
	ngAfterViewInit(){
		this.activatedRoute.queryParams.subscribe(params => {
			if(params["pk_id"] != null){
				this.vn_ingredientID = +params["pk_id"];
				this.getIngredient();
			}
		});
	}

	getIngredient(){
		var url = settings.baseURL + 'ingredients?pk_id=' + this.vn_ingredientID;
		this.genFunctions.httpGET(url)
			.subscribe(
				data => {
					console.log(data);
					this.vo_ingredient = data.response[0];
					this.inputName["nativeElement"].value = this.vo_ingredient.s_name;
					this.textareaDescription["nativeElement"].value = this.vo_ingredient.s_description;
				},
				error => {
					this.genFunctions.showError("Error!");
					console.log(error);
				}
			);
	}
	postIngredient(){
		if(this.inputName["nativeElement"].value != ''){
			if(this.textareaDescription["nativeElement"].value != ''){
				var url = settings.baseURL + 'ingredients';
				var postObj: Ingredient = new Ingredient();
				if(this.vn_ingredientID != null)
					postObj.pk_id = this.vn_ingredientID;
				postObj.s_name = this.inputName["nativeElement"].value;
				postObj.s_description = this.textareaDescription["nativeElement"].value;
				console.log(postObj);
				this.genFunctions.httpPOST(url, postObj)
					.subscribe(
						data => {
							console.log(data);
							this.genFunctions.showSuccess("Ingridient " + postObj.s_name + " saved!");
						},
						error => {
							console.log(error);
							this.genFunctions.showError("Error!");
						}
					);

			}else{
				this.genFunctions.showWarning("Please enter a Description");
			}
		}else{
			this.genFunctions.showWarning("Please enter a Name!");
		}
	}
	buttonSaveClick(event: any){
		this.postIngredient();
	}


}
