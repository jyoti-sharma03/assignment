import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-ongoing-application',
  templateUrl: './ongoing-application.component.html',
  styleUrls: ['./ongoing-application.component.css']
})
export class OngoingApplicationComponent implements OnInit {
  applicationData:  Array<any> = [];
  profileDetailExpand: boolean = false;
  constructor(public commonServices: CommonService) { }

  ngOnInit(): void {
    this.applicationData = this.commonServices.userData;
  }
  expandProfileDetail(i : any){
    // this.profileDetailExpand = !this.profileDetailExpand;
    document.getElementById("profileDetail" + i)?.classList.toggle("profileExpand");
  }
  expandOptions(){
    document.getElementById("smalldesc")?.classList.toggle("expand");

}
}
