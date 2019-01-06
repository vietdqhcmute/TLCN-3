import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from "../models";

@Component({
  selector: "app-page-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {

  }

}
