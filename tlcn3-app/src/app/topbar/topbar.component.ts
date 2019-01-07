import { Component, OnInit, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { AuthService } from "../services/auth.service";
import { Subscription } from "rxjs";
import { User } from "../models";

@Component({
  selector: "app-page-sidebar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"]
})
export class TopbarComponent implements OnInit, OnDestroy {
  private userIsAuthenticated = false;
  private userID: string;
  private user$: User;

  private authListenerSubs: Subscription;
  private authGetUser: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    this.authGetUser = this.authService
      .getUserByID()
      .subscribe(responseUser => {
        this.user$ = responseUser;
        console.log(responseUser);
      });
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
    this.authGetUser.unsubscribe();
  }

  onLogOut() {
    this.authService.logOut();
  }
}
