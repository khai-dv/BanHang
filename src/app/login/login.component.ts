import { Component, OnDestroy  } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { Http, Response } from '@angular/http';
import { IUser } from '../defines/user.interface';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router';
//import { AuthService, AppGlobals } from 'angular2-google-login';
import { AuthService } from "angular2-social-login";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [UserService, AlertService, AuthService]
})
export class LoginComponent implements OnDestroy  {
    user: IUser[];
    public username: string;
    public password:string;
    public user_auth;
    sub: any;

    modal_idLogin;
    modal_idUname;
    modal_idPword;

    constructor(
        private router :Router,
        private alertService: AlertService,
        private _userService: UserService,
        public _auth: AuthService
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

        if (mode==true){
            this.modal_idUname.value = username 
            this.modal_idPword.value = password
            // this.modal_idLogin.click();
        }
    }


    onSignIn(googleUser) {
        
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    ngOnInit(): void {

        this.modal_idLogin = document.getElementById('login');
        this.modal_idUname = document.getElementById('inputUsername');
        this.modal_idPword = document.getElementById('inputPassword');
    }

    signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
                  console.log(data);
                  this.user_auth=data;
                  //user data 
                  //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google) 
                }
    )
  }
 
  logout(){
    this._auth.logout().subscribe(
      (data)=>{
          console.log(data);
          this.user=null;
      }
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}