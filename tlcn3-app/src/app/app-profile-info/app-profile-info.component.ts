import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-app-profile-info',
  templateUrl: './app-profile-info.component.html',
  styleUrls: ['./app-profile-info.component.scss']
})
export class AppProfileInfoComponent implements OnInit {
  @Input() user$: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

    };
}
