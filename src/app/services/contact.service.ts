import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IContact } from '../defines/contact.interface';

@Injectable()
export class ContactService {
	
	// Get All : http://58e605d279739c1200ed3c82.mockapi.io/api/users/
	// Get one : http://58e605d279739c1200ed3c82.mockapi.io/api/users/:id
	// Post Add Item : http://58e605d279739c1200ed3c82.mockapi.io/api/users/
	// Put Edit Item : http://58e605d279739c1200ed3c82.mockapi.io/api/users/:id
	// Delete Item : http://58e605d279739c1200ed3c82.mockapi.io/api/users/:id
	//private apiUrl = 'http://59d448b95803340011fd5f25.mockapi.io/users/'
	private apiUrl = 'http://59d464da5803340011fd5f49.mockapi.io/V1/Contacts'
	
	constructor(
		private _httpService : Http
		
	) {}

	private extractData(res : Response){
		return res.json() || {}
	}

	private handleError (error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}


	addItem(product : IContact){
		let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });
		return this._httpService.post(this.apiUrl,product,options)
								.map(this.extractData)								
								.catch(this.handleError);							
	}

}