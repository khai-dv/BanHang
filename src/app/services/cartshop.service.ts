import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IProduct } from '../defines/product.interface';

@Injectable()
export class CartshopService {
	private apiUrl = "http://5959e6fe670ebd0011b8fa37.mockapi.io/app/cartshop" 
	
	constructor(private _httpService : Http) {}

	Search(key:string):Observable<any[]>{
		return this._httpService.get(this.apiUrl + "?search=" + key)
								.map((res:Response) => res.json())
	}

	Delete(id:number):Observable<any[]>{
		return this._httpService.delete(this.apiUrl + "/" + id)
								.map((res:Response) => res.json())
	}

}