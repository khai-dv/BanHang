import { Component } from '@angular/core';

@Component({
  selector: 'app-upper-header',
  templateUrl: './upper.header.html'
})

export class UpperComponent {
  show:boolean = false;
  call_display_About(){
      this.show = !this.show;
      if(this.show){
         this.show = !this.show;
      }
   }
}