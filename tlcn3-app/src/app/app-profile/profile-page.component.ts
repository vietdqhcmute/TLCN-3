import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../services/data.service";
import { Resume, User } from "../models";
import { AuthService } from "../services/auth.service";
@Component({
  selector: "app-app-profile",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.scss"]
})
export class ProfilePageComponent implements OnInit {
  user$: User;
  resume$: Resume;
  userByResume$: User;
  isAuthenticated = false;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.getIsAuth();
    if (this.isAuthenticated) {
      this.dataService.currentUser.subscribe(result => {
        this.user$ = result;
        this.resume$ = this.user$.resume;
      });
    }else{
      this.router.navigate(['login']);
    }

  }
}
