import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../defines/user.interface';
import { Router } from '@angular/router';
import { AppGlobals } from '../../app.globals';

@Component({
	selector: 'user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css'],
	providers: [UserService]
})
export class UserListComponent implements OnInit {

	errorMessage : string;
	users : IUser[] = [];
	user : IUser;	

	constructor(
		private _userService : UserService,
		private _routerService : Router,public mygb: AppGlobals
	) { 		
		this.mygb.shareObj['namepage'] = 'users';  
	}

	ngOnInit() {		
		this._userService.getItems()
		.subscribe(users => {
			// set items to json response
			this.users = users;
		});
	}

	private loadAllUsers() {
        
    }

}
