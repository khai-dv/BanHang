import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// import { IProduct } from '../defines/product.interface';
import { ICart } from '../defines/cart.interface';

@Injectable()
export class CartshopService {
	private apiUrl = "http://5959e6fe670ebd0011b8fa37.mockapi.io/app/cartshop" 

	private data:ICart[];

	constructor(private _httpService : Http) {}

	Search(key:string):Observable<any[]>{
		return this._httpService.get(this.apiUrl + "?search=" + key)
								.map((res:Response) => res.json())
	}

	Delete(id:number):Observable<any[]>{
		return this._httpService.delete(this.apiUrl + "/" + id)
								.map((res:Response) => res.json())
	}

	// '-----------------

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

	getItems() : Observable<ICart[]>{
		return this._httpService.get(this.apiUrl)
								.map(this.extractData)
								.catch(this.handleError);
	}

	getItem(id : number) : Observable<ICart>{
		return this._httpService.get(this.apiUrl  +"/" + id)
								.map(this.extractData)
								.catch(this.handleError);
	}

	addItem(cart : ICart){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this._httpService.post(this.apiUrl,cart,options)
								.map(this.extractData)								
								.catch(this.handleError);							
	}
}