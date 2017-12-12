import { Component, OnInit } from '@angular/core';

import { IProduct } from '../defines/product.interface';
import { ProductService } from '../services/product.service';
import { AppGlobals } from '../app.globals';
import * as EXL from 'ts-xlsx';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    providers: [ProductService] 
})

export class AdminComponent implements OnInit {  

  private  Url= "../assets/data/IProduct.xlsx";
  errorMessage: string;
  products: IProduct[] ;
  IMproducts: any;
  public isDisabled: boolean;

  constructor(public _productService: ProductService,
              public mygb : AppGlobals) {
                
    this.mygb.shareObj['namepage']='admin';
  }

  public ImportProducts(pdService:ProductService){
    this.isDisabled = false;
    this.ReadExcel(this._productService);
    alert(this.isDisabled);
    //this.isDisabled = fasle;
    alert(this.isDisabled);
    
  }

  public ReadExcel(pdService:ProductService){
  
    this.DeleteAll();

    this.makeFileRequest(function(result){
      //do whatever you want now with the output data
      //console.log(result);

      result.forEach(element => {
        //console.log(element.product_id);
        pdService.addItem(element).subscribe(
            //Do something
            );
      });
    });
  }
  
  DeleteAll():void{
    this._productService.getItems()
    .subscribe(products => {
      // set items to json response
      products.map(element => {
        //alert(element.product_id);
        this._productService.deleteItem("id",element.product_id)
        .subscribe(
          result => console.log(result),
          error => this.errorMessage = error
        );  
      });
  
    },
      error => this.errorMessage = <any>error);
  }

  makeFileRequest(callback){

    var oReq = new XMLHttpRequest();

    oReq.open("GET", this.Url, true);
    oReq.responseType = "arraybuffer";

    function asyncReq(callback){ 
      oReq.onload = function(e) {
        var arraybuffer = oReq.response;
      
        /* convert data to binary string */
        var data = new Uint8Array(arraybuffer);
        var arr = new Array();
        for(var i = 0; i != data.length; ++i){ 
          arr[i] = String.fromCharCode(data[i]);
          //  console.log("Data"+data[i]);
        }
        var bstr = arr.join("");
        var workbook = EXL.read(bstr, {type:"binary"});
        //console.log("Data"+bstr);
        var first_sheet_name = workbook.SheetNames[0];
          /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name]; 
        var json = EXL.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {header:0, raw:true});
        var jsonOut = JSON.stringify(json);
        
        // return getProduct(json);
        //console.log("test"+json);
        callback(json);
      }
    }
    
    oReq.send();
    asyncReq(function(result){
      //do whatever you want now with the output data
      //console.log(IMpd);
      callback(result);
    });
  }

    // makeFileRequest(url: string, params: Array<any>) {
    //   return new Promise((resolve, reject) => {

    //     function getProduct(json:any, IMproducts:Array<any>){
          
    //       json.forEach(element=>{ 
    //         //alert(element.product_id);
    //         IMproducts.push(
    //         {
    //           "product_id" : element.product_id,
    //           "product_code" : element.product_code,
    //           "product_name" : element.product_name,
    //           "price" : element.price,
    //           "product_type" : element.product_type,
    //           "imageUrl" : element.imageUrl,
    //           "product_detail" : element.product_detail
    //         });
    //       });
    //       alert("getProduct" + IMproducts.length);
    //     }

    //     var formData: any = new FormData();
    //     var xhr = new XMLHttpRequest();
  
    //     xhr.open("GET", url, true);
    //     xhr.responseType = 'arraybuffer';
  
    //     xhr.onload = function () {
    //       if (xhr.readyState === xhr.DONE) {
    //         var arraybuffer = xhr.response;
            
    //           /* convert data to binary string */
    //           var data = new Uint8Array(arraybuffer);
    //           var arr = new Array();
    //           for(var i = 0; i != data.length; ++i){ 
    //             arr[i] = String.fromCharCode(data[i]);
    //             //  console.log("Data"+data[i]);
    //           }
    //           var bstr = arr.join("");
    //           var workbook = EXL.read(bstr, {type:"binary"});
    //           //console.log("Data"+bstr);
    //           var first_sheet_name = workbook.SheetNames[0];
    //             /* Get worksheet */
    //           var worksheet = workbook.Sheets[first_sheet_name]; 
    //           var json = EXL.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {header:0, raw:true});
    //           var jsonOut = JSON.stringify(json);
    //           getProduct(json,params);
    //           debugger; 
    //           alert("params" + params.length);
    //       }
    //     };
    //     xhr.send(formData);
    //   });
    // }

  ngOnInit(): void {

  }
    
}