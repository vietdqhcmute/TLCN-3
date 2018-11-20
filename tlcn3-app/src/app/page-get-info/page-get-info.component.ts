import {
  Component,
  OnInit,
  ViewContainerRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MatDialogConfig,
  MAT_DIALOG_DATA
} from "@angular/material";

import { Resume, User } from "../models";
import { Experience } from "../models";
import { DataService } from "../data.service";
import { DiaExperienceComponent } from "../dia-experience/dia-experience.component";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
import { UserService } from "../user.service";

@Component({
  selector: "app-page-get-info",
  templateUrl: "./page-get-info.component.html",
  styleUrls: ["./page-get-info.component.scss"]
})
export class PageGetInfoComponent implements OnInit {
  resume$: Resume;
  user$: User;
  newExperience: Experience;
  constructor(
    private dialog: MatDialog,
    private viewContainerRef: ViewContainerRef,
    private data: DataService,
    private user: UserService
  ) {}
  ngOnInit() {
    // get data from app-main.component by subjectbehavior
    this.data.currentUser.subscribe(result => {
      this.user$ = result;
      this.resume$ = this.user$.resume;
    });
  }
  addNewExperience() {
    let newExperience: Experience = new Experience(  "Company name",  "Title",  1,  2010,  2,  2010,  false,  "Description" );

    this.resume$.experience.push(newExperience);
    this.user.updateUserByID(this.user$._id, this.user$);
  }
  openDetailExperience() {
    //openDialog
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(DiaExperienceComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.resume$.experience.push(result);
    });
  }

  //Delete
  deleteExperience(experienceID) {
    let index = this.resume$.experience.findIndex(
      index => index._id === experienceID
    );
    this.resume$.experience.splice(index, 1);
  }

  deleteEducation(educationID) {
    let index = this.resume$.experience.findIndex(
      index => index._id === educationID
    );
    this.resume$.education.splice(index, 1);
  }

  deleteProject(projectID) {
    let index = this.resume$.project.findIndex(
      index => index._id === projectID
    );
    this.resume$.project.splice(index, 1);
  }

  deleteSkill(item) {
    let index = this.resume$.skill.findIndex(
      index => index.toString() === item
    );
    this.resume$.skill.splice(index, 1);
  }
}
