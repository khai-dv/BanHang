import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import * as glo from '../app.globals';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'  
})

export class SidebarComponent {  
  
  SetType(value:number)
  {  
    glo.setValue(value);   
  }

}

