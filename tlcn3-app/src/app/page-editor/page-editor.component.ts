import { Component, OnInit, Input } from "@angular/core";
import { Resume, Experience } from "../models";

@Component({
  selector: "app-page-editor",
  templateUrl: "./page-editor.component.html",
  styleUrls: ["./page-editor.component.scss"]
})
export class PageEditorComponent implements OnInit {
  @Input() resume: Resume;
  experiences: Array<Experience>;
  constructor() {}

  ngOnInit() {
    //Copy resume.experience --> experiences
    // this.experiences = this.resume.experience.map(e => {
    //   return e;
    // });
  }

}
