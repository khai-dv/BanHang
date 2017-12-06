import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'  
})

export class SidebarComponent {  
  
  constructor(private router: Router) {}

  public gotoSearch_SP(value:number)
  {  
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "itemsearch": value,
      }
    };
    this.router.navigate(["typeProduct"], navigationExtras); 
  }

}

