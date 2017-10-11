import { Component } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { AppGlobals } from './app.globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (public mygb : AppGlobals){
    this.mygb.shareObj['namepage']='index';
  }
}
