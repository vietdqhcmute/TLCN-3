import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Location } from "@angular/common";
import { AuthService } from "../services/auth.service";
import { Subscription } from "rxjs";
import { User } from "../models";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-page-sidebar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"]
})
export class TopbarComponent implements OnInit, OnDestroy {
  @Input() userIsAuthenticated:Boolean = false;
  private userID: string;
  private user$: User;

  private authListenerSubs: Subscription;
  private authGetUser: Subscription;

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    this.authGetUser = this.dataService.currentUser.subscribe(result => {
      this.user$ = result;
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
