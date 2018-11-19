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
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

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
    let index = this.resume$.experience.findIndex(index => index._id === experienceID);
    this.resume$.experience.splice(index,1);
  }

  deleteEducation(educationID) {
    let index = this.resume$.experience.findIndex(index => index._id === educationID );
    this.resume$.education.splice(index,1);
  }

  deleteProject(projectID) {
    let index = this.resume$.project.findIndex(index => index._id === projectID );
    this.resume$.project.splice(index,1);
  }

  deleteSkill(item){
    let index = this.resume$.skill.findIndex(index => index.toString() === item );
    this.resume$.skill.splice(index,1);
  }
}
