import { Component, OnInit, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { AuthService } from "../services/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-page-sidebar",
  templateUrl: "./page-sidebar.component.html",
  styleUrls: ["./page-sidebar.component.scss"]
})
export class PageSidebarComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  userID: string;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
  
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated=>{
        this.userIsAuthenticated=isAuthenticated;
      });
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  onLogOut(){
    this.authService.logOut();
  }
}
