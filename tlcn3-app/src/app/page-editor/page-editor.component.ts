import { Component, OnInit, Input } from "@angular/core";
import { Resume, Experience, User } from "../models";
import { DataService } from "../services/data.service";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-page-editor",
  templateUrl: "./page-editor.component.html",
  styleUrls: ["./page-editor.component.scss"]
})
export class PageEditorComponent implements OnInit {
  @Input() resume: Resume;
  @Input() user: User;

  template: String = "design-blue-01";
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getTemplate().subscribe(template$ => {
      this.template = template$;
    });
  }
}
