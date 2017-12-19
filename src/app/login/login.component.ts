import { Component  } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [UserService, AlertService]
})

export class LoginComponent   {

    public username: string;
    public password:string;
    public users :any[];
    public usertrue :boolean;

    constructor(
        private alertService: AlertService,
        private _userService: UserService
    ) { }

    ngOnInit(): void {
        this._userService.getItems().subscribe((res:any)=>{
            this.users=res;
        },error => { this.alertService.error(error); });
    }

    CheckLogin(value: any) {
       if(this.username!="") {
            this.usertrue=false;
            if(value.username=="admin"&&value.password=="admin"){
                document.getElementById("admin").style.visibility = "visible";
                this.usertrue=true;
                this.username="admin";
                alert("Đăng nhập thành công!");
            }else{
                for (let us of this.users){
                    if (value.username==us.username&&value.password==us.password){
                        this.usertrue=true;
                        this.username=us.username;
                        alert("Đăng nhập thành công!");
                    }
                }
                if (this.usertrue==false){
                    alert("Tài khoản không tồn tại!");
                }
            }    
        }
        else{
            this.username="";
            this.password="";
        }
    }

    SystemError(){
        alert("Hệ thống đang cặp nhật!!!");
    }
}
