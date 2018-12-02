import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-page-sidebar",
  templateUrl: "./page-sidebar.component.html",
  styleUrls: ["./page-sidebar.component.scss"]
})
export class PageSidebarComponent implements OnInit {
  userID: string ;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.loginId.subscribe(id=>{
      this.userID = id;
    })
  }
}
