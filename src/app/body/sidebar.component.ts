import { Component } from '@angular/core';
// import { AppGlobals } from '../app.globals';
import * as glo from '../app.globals';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'  
})

export class SidebarComponent {
  // public value_type=1;

  SetType(value:number)
  {
    // this.value_type=value;    
    // console.log(this.value_type);    
    glo.setValue(value);
  }

}

