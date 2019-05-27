import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericFunctionsService } from './service/generic-functions.service';
import { HeaderComponent } from './component/header/header.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	@ViewChild('appHeader') appHeader: HeaderComponent;

	constructor(private genFunctions: GenericFunctionsService){

	}
	title = 'recipeManager';
	ngOnInit(){
		var url = 'http://192.168.0.137:8080';
		// this.genFunctions.httpGET(url)
		// 	.subscribe(
		// 		data => {
		// 			console.log(data);
		// 		},
		// 		error => {
		// 			console.log(error);
		// 		}
		// 	);
	}
	ngAfterViewInit(){
		this.genFunctions.init(this.appHeader);
	}
}
