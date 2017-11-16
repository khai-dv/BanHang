import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';
import { AppGlobals } from '../app.globals';
import { LoginComponent } from '../login/index';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    providers: [UserService, AlertService] ,
})

export class RegisterComponent {  

    @ViewChild(LoginComponent) loginref: LoginComponent;

    model: any = {};
    loading = false;
 
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        public mygb : AppGlobals) {
            this.mygb.shareObj['namepage']='register';
        }
 
    register() {
        this.loading = true;
        this.userService.addItem(this.model)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.alertService.success('Registration successful', true);
                    alert("Registration successful");
                    this.mygb.shareObj['login']='success';
                    console.log(this.model.username);
                    console.log(this.model.password);
                    //this.loginref.AddDataForm(this.model.username,this.model.password,true);
                    this.mygb.shareObj['namepage']='index';
                    this.router.navigate(['/home']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}