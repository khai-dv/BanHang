import { Component, OnInit } from '@angular/core';
import { AppGlobals } from '../app.globals';

@Component({
    selector: 'generalContent',
    templateUrl: './generalContent.component.html'
})

export class GeneralContentComponent implements OnInit {  

  constructor(public mygb: AppGlobals) {
      this.mygb.shareObj['namepage'] = 'generalContent';  
  }
  
  ngOnInit(): void {
  }
    
}