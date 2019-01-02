import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models';

@Component({
  selector: 'app-page-admin-user-manager',
  templateUrl: './page-admin-user-manager.component.html',
  styleUrls: ['./page-admin-user-manager.component.scss']
})
export class PageAdminUserManagerComponent implements OnInit {
  constructor(private userService: UserService) {}
  private users = Array<User>();
  private isGettingUser:boolean=true;
  searchText:string ="";
  ngOnInit() {
    this.isGettingUser=true;
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(userArray => {
      this.isGettingUser =false;
      this.users = userArray;
    });
  }
  deleteUserByID(userID) {
    this.userService.deleteUserByID(userID).subscribe(response=>{
      this.getAllUsers();
    })
  }
}