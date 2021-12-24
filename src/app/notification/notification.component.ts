import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications:  Array<any> = [];
  constructor(public commonServices: CommonService) { }

  ngOnInit(): void {
    this.notifications = this.commonServices.notifications;
  }
  expandNotification(){
    console.log("test")
    document.getElementById("smalldescNotification")?.classList.toggle("expand");

}
}
