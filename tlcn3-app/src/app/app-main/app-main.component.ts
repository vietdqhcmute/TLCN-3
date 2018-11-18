import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";
import { Location } from '@angular/common';
import { Resume, User } from "../models";
import { DataService } from "../data.service";

@Component({
  selector: "app-app-main",
  templateUrl: "./app-main.component.html",
  styleUrls: ["./app-main.component.scss"]
})
export class AppMainComponent implements OnInit {
  resume$: Resume;
  user$: User;
  constructor(private data: DataService) {
    
  }

  ngOnInit() {
    this.data.currentUser.subscribe(result=>{
      this.user$=result;
      this.resume$=this.user$.resume;
    });
  }
}
