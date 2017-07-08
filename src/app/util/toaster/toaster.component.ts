import { Component, OnInit } from '@angular/core';
import {ToasterModule, ToasterService, ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

   public toasterService: ToasterService;
  
  public toasterConfig : ToasterConfig;

  constructor(toasterService: ToasterService) {
    this.toasterService = toasterService; 
      this.toasterConfig = new ToasterConfig({
    positionClass: 'toast-top-left',
    timeout: 100
  }); 
  }

  ngOnInit() {
  }

  public ToasterSuccess(type:string, title:string, body:string){
    return this.toasterService.popAsync(type, title, body);
  }

  public getToasterConfig(){
    return this.toasterConfig;
  }

}
