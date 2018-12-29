import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from "../models";

@Component({
  selector: "app-page-admin",
  templateUrl: "./page-admin.component.html",
  styleUrls: ["./page-admin.component.scss"]
})
export class PageAdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {

  }

}
