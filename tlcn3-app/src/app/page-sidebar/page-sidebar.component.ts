import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-page-sidebar",
  templateUrl: "./page-sidebar.component.html",
  styleUrls: ["./page-sidebar.component.scss"]
})
export class PageSidebarComponent implements OnInit {
  userID: string = "5bf3ac143c041324e02a5dbe";
  constructor() {}

  ngOnInit() {}
}
