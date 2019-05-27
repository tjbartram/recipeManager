import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericFunctionsService } from 'src/app/service/generic-functions.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@ViewChild('inputSearch') inputSearch: HTMLInputElement;
	@ViewChild('navItemHome') navItemHome: HTMLLIElement;
	@ViewChild('navItemRecipe') navItemRecipe: HTMLLIElement;
	@ViewChild('navItemIngredient') navItemIngredient: HTMLLIElement;
	
	private vb_initComplete: boolean = false;
	private vt_updateNav: string = '';
	constructor(private genFunctions: GenericFunctionsService) { }

	ngOnInit() {
	}
	ngAfterViewInit(){
		this.vb_initComplete = true;
		if(this.vt_updateNav != ''){
            this.navHighlight(this.vt_updateNav);
        }
	}

  	buttonSearchClick(event: any){
		console.log(this.inputSearch["nativeElement"].value);
	};


    navHighlight(vt_navItem: string){
        if(!this.vb_initComplete){
            this.vt_updateNav = vt_navItem;
        }else{
			this.navItemHome["nativeElement"].setAttribute("class", "nav-item");
			this.navItemIngredient["nativeElement"].setAttribute("class", "nav-item");
			this.navItemRecipe["nativeElement"].setAttribute("class", "nav-item");
			switch(vt_navItem){
				case 'home': {
					this.navItemHome["nativeElement"].setAttribute("class", "nav-item active");
					break;
				}
				case 'recipe': {
					this.navItemRecipe["nativeElement"].setAttribute("class", "nav-item active");
					break;
				}
				case 'ingredient': {
					this.navItemIngredient["nativeElement"].setAttribute("class", "nav-item active");
					break;
				}
			}
        }

    }


}
