import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-profile-info-newfeed',
  templateUrl: './app-profile-info-newfeed.component.html',
  styleUrls: ['./app-profile-info-newfeed.component.scss']
})
export class AppProfileInfoNewfeedComponent implements OnInit {
  userName:string="Admin";
  title:string="Adminstrator at CVsensei";
  @Input() message:string;
  @Input() created:Date;

  constructor() { }

  ngOnInit() {
  }

}
