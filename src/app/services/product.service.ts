import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IProduct } from '../defines/product.interface';

@Injectable()
export class ProductService {
	
	// Get All : http://58e605d279739c1200ed3c82.mockapi.io/api/users/
	// Get one : http://58e605d279739c1200ed3c82.mockapi.io/api/users/:id
	// Post Add Item : http://58e605d279739c1200ed3c82.mockapi.io/api/users/
	// Put Edit Item : http://58e605d279739c1200ed3c82.mockapi.io/api/users/:id
	// Delete Item : http://58e605d279739c1200ed3c82.mockapi.io/api/users/:id
	//private apiUrl = 'http://59d448b95803340011fd5f25.mockapi.io/products/'	
	// private apiUrl = "http://59d464da5803340011fd5f49.mockapi.io/V1/Products" //<- Luan- Test
	// private apiUrl = "http://59d448b95803340011fd5f25.mockapi.io/products" //<- Thang- Test

	private apiUrl = "http://59df404db11b290012f17b88.mockapi.io/products" 

	headers: Headers;
    options: RequestOptions;

	private data:IProduct[];
	constructor(private _httpService : Http) {
		this.headers = new Headers({ 'Content-Type': 'application/json', 
		'Accept': 'q=0.8;application/json;q=0.9' });
		this.options = new RequestOptions({ headers: this.headers });
	}

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

	getItems() : Observable<IProduct[]>{
		return this._httpService.get(this.apiUrl)
								.map(this.extractData)
								.catch(this.handleError);
	}

	getItem(id : number) : Observable<IProduct>{
		return this._httpService.get(this.apiUrl  +"/" + id)
								.map(this.extractData)
								.catch(this.handleError);
	}

	addItem(product : IProduct){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this._httpService.post(this.apiUrl,product,options)
								.map(this.extractData)								
								.catch(this.handleError);							
	}

	// addItem(product : IProduct): Observable<IProduct>{
	// 	let headers = new Headers({ 'Content-Type': 'application/json' });
    // 	let options = new RequestOptions({ headers: headers });
	// 	return this._httpService.post(this.apiUrl,product,options)
	// 							.map(this.extractData)								
	// 							.catch(this.handleError);							
	// }

	editItem(id : number, product : IProduct){
		let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });
		return this._httpService.put(this.apiUrl +"/" + id,product,options)
								.map(this.extractData)
								.catch(this.handleError);		
	}

	deleteItem(key: string, val: number){
		// alert(this.apiUrl + "/?" + key + "=" + val);
		return this._httpService.delete(this.apiUrl + "/" + val, this.options)
								.map(this.extractData)
								.catch(this.handleError);
	}

	addInfo(product : IProduct){
		let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });
		return this._httpService.post(this.apiUrl,product,options)
								.map(this.extractData)
								.catch(this.handleError);
	}

	Search(key:string):Observable<any[]>{
		return this._httpService.get(this.apiUrl + "?search" + key)
								.map((res:Response)=>res.json())
	}
}