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
    user: IUser[];
    public username: string;
    public password:string;
    modal_idLogin;
    modal_idUname;
    modal_idPword;

    constructor(
        private router :Router,
        private alertService: AlertService,
        private _userService: UserService
    ) { }
    CheckLogin(value: any) {
        console.log(value.username);
        console.log(value.password);
        this._userService.getItems().map(res => {
            return res.filter(item => item.username == value.username && item.username == value.password);
        }).subscribe(
            user => {
            this.user = user;
                console.log('Login!');
                this.modal_idLogin.click();
                this.router.navigate(['/home']);
            },
            error => { this.alertService.error(error); }
            );
    }

    public AddDataForm(username: string, password:string, mode: boolean){

    

        console.log("AddDataForm");
        if (mode==true){
            console.log(username);
            console.log(password);
            this.modal_idUname.value = username 
            this.modal_idPword.value = password
            this.modal_idLogin.click();
        }
    }

     ngOnInit(): void {
        this.modal_idLogin = document.getElementById('login');
        this.modal_idUname = document.getElementById('inputUsername');
        this.modal_idPword = document.getElementById('inputPassword');
    }
}