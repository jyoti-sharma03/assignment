import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {

  constructor(public commonServices: CommonService) { }

  ngOnInit(): void {
  }

}
