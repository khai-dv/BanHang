import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { Http, Response } from '@angular/http';
import { IUser } from '../defines/user.interface';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [UserService, AlertService]
})
export class LoginComponent {
    username: IUser[];
    constructor(
        private router :Router,
        private alertService: AlertService,
        private _userService: UserService,
    ) { }
    CheckLogin(value: any) {
        console.log(value.username);
        console.log(value.password);
        this._userService.getItems().map(res => {
            return res.filter(item => item.username == value.username && item.username == value.password);
        }).subscribe(
            usernames => {
            this.username = usernames;
                console.log('Login!');
                this.router.navigate(['/home']);
            },
            error => { this.alertService.error(error); }
            );
    }

}