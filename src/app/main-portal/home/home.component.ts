import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonDataService } from 'src/app/shared-portal/JsonService/json-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private JsonService:JsonDataService,
    private Router : Router
  ) { 
  this.getDataFromservice();
  }

  DataComeFromJson :any=[];


  ngOnInit(): void {
  }


  getDataFromservice(){
    this.DataComeFromJson = this.JsonService.getjsonData();
  }

  goToCartPage(Id:any){
   
 
    // this.nonvolatile.setDataTolocalStorage(Id)
    // this._messanger.sendMessageFromMyData(Id)
    this.Router.navigate(['cart']);
   
   
  }

}
