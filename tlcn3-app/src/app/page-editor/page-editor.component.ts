import { Component, OnInit, Input } from "@angular/core";
import { Resume } from "../models";

@Component({
  selector: "app-page-editor",
  templateUrl: "./page-editor.component.html",
  styleUrls: ["./page-editor.component.scss"]
})
export class PageEditorComponent implements OnInit {
  @Input() resume: Resume;
  constructor() {}

  ngOnInit() {
    console.log(this.resume);
  }
}
