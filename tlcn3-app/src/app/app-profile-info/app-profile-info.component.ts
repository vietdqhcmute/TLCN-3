import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models';

@Component({
  selector: 'app-app-profile-info',
  templateUrl: './app-profile-info.component.html',
  styleUrls: ['./app-profile-info.component.scss']
})
export class AppProfileInfoComponent implements OnInit {
  @Input() user$: User;
  constructor() { }

  ngOnInit() {
  }

}
