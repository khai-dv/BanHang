import { Component } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { AppGlobals } from '../app.globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //styleUrls: ['./app.component.css']
})
export class HomeComponent {
  constructor (public mygb : AppGlobals){
    this.mygb.shareObj['namepage']='index';
  }
}
