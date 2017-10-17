import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppGlobals } from '../app.globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
  
})

export class HeaderComponent {

  itemsearch: string;

  constructor(private router: Router) {}
  
  public gotoSearch() {
        if (!!this.itemsearch){
          let navigationExtras: NavigationExtras = {
              queryParams: {
                  "itemsearch": this.itemsearch,
              }
          };
          this.router.navigate(["search"], navigationExtras);
        }
        else{
            this.router.navigate(['home']);
        }
    }
}