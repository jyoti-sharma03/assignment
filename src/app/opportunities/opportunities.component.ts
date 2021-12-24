import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {
  opportData: Array<any> = [];
  selectedNavType: any = '1';
  opportNavType = {
    'Elgible' : '1',
    'hot' : '2',
    'new' : '3'
}
  constructor(public commonService: CommonService) { }

  ngOnInit() {
    this.opportData = this.commonService.userData;
  }
  toggleOpportunities(type: string) {
    this.opportData = [];
  if(type == this.opportNavType.Elgible){
   this.selectedNavType = '1';
   this.opportData = this.commonService.userData;
  }
  else if(type == this.opportNavType.hot){
    this.selectedNavType = '2';
    this.commonService.userData.forEach(e =>{
      let hotDeal = e.hot_deal;
      if(hotDeal){
        this.opportData.push(e);
      }
    })
   }
   else if(type == this.opportNavType.new){
    this.selectedNavType = '3';
    this.commonService.userData.forEach(e =>{
      let newDeal = e.new;
      if(newDeal){
        this.opportData.push(e);
      }
    })
   }
  }
  expandOpportunities(){
    document.getElementById("smalldescOpport")?.classList.toggle("expand");

}
}
