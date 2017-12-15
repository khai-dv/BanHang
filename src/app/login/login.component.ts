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
    public users :any[];
    public usertrue :boolean;

    constructor(
        private router :Router,
        private alertService: AlertService,
        private _userService: UserService,
        public _auth: AuthService
    ) { }

     CheckLogin(value: any) {
       if(document.getElementById('model_loggin').innerHTML=="Đăng nhập") {
            this.usertrue=false;
            for (let us of this.users){
                if (value.username==us.username&&value.password==us.password){
                    this.usertrue=true;
                    this.username=us.username;
                    alert("Sign in successful");
                    
                }
            }
            if (this.usertrue==false){
                alert("Tài khoản không tồn tại!");
            }
        }
        else{
            this.username="";
            this.password="";
        }
    }

    public AddDataForm(username: string, password:string, mode: boolean){

        if (mode==true){
            this.modal_idUname.value = username 
            this.modal_idPword.value = password
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

         this._userService.getItems().subscribe((res:any)=>{
            this.users=res;
        },error => { this.alertService.error(error); });

        this.modal_idLogin = document.getElementById('login');
        this.modal_idUname = document.getElementById('inputUsername');
        this.modal_idPword = document.getElementById('inputPassword');
    }

    signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
                  console.log(data);
                  this.user_auth=data;
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
