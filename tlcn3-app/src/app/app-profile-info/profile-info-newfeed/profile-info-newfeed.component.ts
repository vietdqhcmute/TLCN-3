import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-profile-info-newfeed',
  templateUrl: './profile-info-newfeed.component.html',
  styleUrls: ['./profile-info-newfeed.component.scss']
})
export class ProfileInfoNewfeedComponent implements OnInit {
  userName:string="Admin";
  title:string="Adminstrator at CVsensei";
  @Input() message:string;
  @Input() created:string;

  constructor() { }

  ngOnInit() {
  }

}
