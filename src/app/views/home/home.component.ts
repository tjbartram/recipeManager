import { Component, OnInit } from '@angular/core';
import { GenericFunctionsService } from 'src/app/service/generic-functions.service';

@Component({
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(private genFunctions: GenericFunctionsService) { }

	ngOnInit() {
		this.genFunctions.setSelectedNav('home');
	}

}
