import { Component, OnInit, Input } from "@angular/core";
import { Resume, Experience } from "../models";

@Component({
  selector: "app-page-editor",
  templateUrl: "./page-editor.component.html",
  styleUrls: ["./page-editor.component.scss"]
})
export class PageEditorComponent implements OnInit {
  @Input() resume: Resume;
  constructor() {}

  ngOnInit() {}
  findContact(){

  }
  
}
