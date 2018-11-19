import {
  Component,
  OnInit,
  ViewContainerRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { MatDialog, MatDialogRef, MatDialogConfig } from "@angular/material";

import { Resume, User } from "../models";
import { ResumeService } from "../resume.service";
import { Experience } from "../models";
import { DataService } from "../data.service";
import { DiaExperienceComponent } from "../dia-experience/dia-experience.component";

@Component({
  selector: "app-page-get-info",
  templateUrl: "./page-get-info.component.html",
  styleUrls: ["./page-get-info.component.scss"]
})
export class PageGetInfoComponent implements OnInit {
  resume$: Resume;
  user$: User;
  constructor(
    private dialog: MatDialog,
    private viewContainerRef: ViewContainerRef,
    public resumeService: ResumeService,
    private data: DataService
  ) {}
  ngOnInit() {
    // get data from app-main.component by subjectbehavior
    this.data.currentUser.subscribe(result => {
      this.user$ = result;
      this.resume$ = this.user$.resume;
    });
  }
  addNewExperience() {
    //openDialog
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;

    dialogConfig.data = {};

    this.dialog.open(DiaExperienceComponent, dialogConfig);
  }

  deleteExperience(experienceID) {
    this.resume$.experience.forEach(e => {
      if (e._id === experienceID) {
        this.resume$.experience.pop();
      }
    });
  }

  deleteEducation(educationID) {
    console.log(this.resume$.education);
    this.resume$.education.forEach(e => {
      if (e._id === educationID) {
        this.resume$.education.pop();
      }
    });
  }

  deleteProject(projectID) {
    this.resume$.project.forEach(e => {
      if (e._id === projectID) {
        this.resume$.project.pop();
      }
    });
  }

  deleteSkill(){

  }
}
