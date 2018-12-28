import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from "../models";

@Component({
  selector: "app-page-admin",
  templateUrl: "./page-admin.component.html",
  styleUrls: ["./page-admin.component.scss"]
})
export class PageAdminComponent implements OnInit {
  constructor(private userService: UserService) {}
  private users = Array<User>();

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(userArray => {
      this.users = userArray;
      console.log(userArray);
    });
  }
  deleteUserByID(userID) {
    console.log("delete "+userID);
  }
}
