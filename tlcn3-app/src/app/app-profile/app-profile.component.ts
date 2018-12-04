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
    private data: DataService,
    private auth: AuthService,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    this.data.currentUser.subscribe(result=>{
      this.user$=result;
      this.resume$= this.user$.resume;
      console.log(this.user$);
    })
  }

}
