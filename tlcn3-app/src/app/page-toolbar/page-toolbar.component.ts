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
  isLoading_update: boolean = false;

  constructor(private user: UserService, route: ActivatedRoute) {
    route.params.subscribe(params => (this.id$ = params.id));
  }

  ngOnInit() {}

  onSave() {
    this.isLoading_update = true;
    this.user
      .updateUserByID(this.id$, this.user$)
      .subscribe(response => {
        this.isLoading_update= false;
      }, err => console.log(err));
  }
}
