import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-frame',
  templateUrl: './job-frame.component.html',
  styleUrls: ['./job-frame.component.scss']
})
export class JobFrameComponent implements OnInit {

  title="2 Java Web Dev up to $2200 (JavaScript)";
  city = "Ho Chi Minh"
  created = "7 hour ago"
  constructor() { }

  ngOnInit() {
  }

}
