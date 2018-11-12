import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-app-profile",
  templateUrl: "./app-profile.component.html",
  styleUrls: ["./app-profile.component.scss"]
})
export class AppProfileComponent implements OnInit {
  user$: Object;
  id: string;
  constructor(private user: UserService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.user$ = params.id;
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.user$ = this.route.snapshot.data["profile"]; //Use Resolver
    console.log(this.user$);
  }
}
