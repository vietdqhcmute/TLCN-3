import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-admin-sidebar",
  templateUrl: "./admin-sidebar.component.html",
  styleUrls: ["./admin-sidebar.component.scss"]
})
export class AdminSidebarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onLogOut() {
    this.authService.logOut();
  }
}
