import { Component, OnInit, Input } from "@angular/core";
import { User } from "../models";
import { UserService } from "../services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page-toolbar",
  templateUrl: "./page-toolbar.component.html",
  styleUrls: ["./page-toolbar.component.scss"]
})
export class PageToolbarComponent implements OnInit {
  @Input() user$: User;
  id$: string;
  
  constructor(private user: UserService, route: ActivatedRoute) {
    route.params.subscribe(params => (this.id$ = params.id));
  }

  ngOnInit() {
    
  }

  onSave() {
    this.user
      .updateUserByID(this.id$, this.user$)
      .subscribe(response => console.log(response), err => console.log(err));
  }
}
