import { Component } from '@angular/core';
import { AppGlobals } from '../app.globals';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})

export class AboutUsComponent {
  constructor (public mygb : AppGlobals){
    this.mygb.shareObj['namepage']='about';
  }
}