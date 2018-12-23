import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../services/data.service";
import { Resume, User } from "../models";
import { AuthService } from "../services/auth.service";
@Component({
  selector: "app-app-profile",
  templateUrl: "./app-profile.component.html",
  styleUrls: ["./app-profile.component.scss"]
})
export class AppProfileComponent implements OnInit {
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
