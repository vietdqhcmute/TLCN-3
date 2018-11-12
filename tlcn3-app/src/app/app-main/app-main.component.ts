import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";
import { Location } from '@angular/common';

@Component({
  selector: "app-app-main",
  templateUrl: "./app-main.component.html",
  styleUrls: ["./app-main.component.scss"]
})
export class AppMainComponent implements OnInit {
  user$: Object;
  editMode: Boolean;
  constructor(private route: ActivatedRoute, private user: UserService, location: Location) {
    this.route.params.subscribe(param => {
      this.user$ = param.id;
    });
  }

  ngOnInit() {
      this.user$ = this.route.snapshot.data["profile"]; //Use User infomation Resolver to load data before render view
      console.log(this.user$);
  }
}
