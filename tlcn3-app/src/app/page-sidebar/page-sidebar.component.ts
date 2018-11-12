import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-page-sidebar",
  templateUrl: "./page-sidebar.component.html",
  styleUrls: ["./page-sidebar.component.scss"]
})
export class PageSidebarComponent implements OnInit {
  userID:string= '5be90b62e7ca1b02c8c53650';
  constructor() {}

  ngOnInit() {
  }
}
