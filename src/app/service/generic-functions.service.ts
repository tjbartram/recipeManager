import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from '../../../node_modules/rxjs/operators';
import { HeaderComponent } from '../component/header/header.component';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GenericFunctionsService {
	private appHeader: HeaderComponent;

	constructor(private http: HttpClient, private toastr: ToastrService) { }

	public init(header: HeaderComponent){
		this.appHeader = header;
		console.log(this.appHeader);
	}

	public httpGET(url: string): any{
		var httpOptions = {
            
        };
		return this.http.get(url, httpOptions)
		.pipe(
			map(data => {
				return data;
			})
		);
	}
	public httpPOST(url: string, data: any): any{
		// var httpOptions = {
            
        // };
		return this.http.post(url, data)
		.pipe(
			map(data => {
				return data;
			})
		);
	}

	public showSuccess(header: string, body: string = ''){
		this.toastr.success(header, body);
	}
	public showInfo(header: string, body: string = ''){
		this.toastr.info(header, body);
	}
	public showError(header: string, body: string = ''){
		this.toastr.error(header, body);
	}
	public showWarning(header: string, body: string = ''){
		this.toastr.warning(header, body);
	}
	public setSelectedNav(navItem: string){
		this.appHeader.navHighlight(navItem);
	}
}
