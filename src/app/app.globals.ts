import {Injectable} from '@angular/core';
interface ShareObj {
  [id: string]: any;
}

 @Injectable() export class AppGlobals {
   // use this property for property binding
   shareObj: ShareObj = {};
 }

