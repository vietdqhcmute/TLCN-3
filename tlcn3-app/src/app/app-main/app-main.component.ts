import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { Location } from '@angular/common';
import { Resume, User } from "../models";
import { DataService } from "../services/data.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-app-main",
  templateUrl: "./app-main.component.html",
  styleUrls: ["./app-main.component.scss"]
})
export class AppMainComponent implements OnInit {
  resume$: Resume; // resume$ is part of user$, just create new variable in order to make it easy to read
  user$: User;
  isAuthenticated:boolean= false;
  constructor(private dataService: DataService, private authService: AuthService, private router: Router) {
    
  }

  ngOnInit() {
    this.isAuthenticated= this.authService.getIsAuth();
    if(this.isAuthenticated){
      this.dataService.currentUser.subscribe(result=>{
        this.user$=result;
        this.resume$=this.user$.resume;
      });
    }else{
      this.router.navigate(['login']);
    }

  }
}
