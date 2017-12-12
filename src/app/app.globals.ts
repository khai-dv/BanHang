import {Injectable} from '@angular/core';
interface ShareObj {
  [id: string]: any;
}

export var Type_value:number=1;

export function setValue(newValue: number) {
    Type_value = newValue;
}

 @Injectable() export class AppGlobals {
   // use this property for property binding
   shareObj: ShareObj = {};     
 }