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

import { Resume, User, Education, Project } from "../models";
import { Experience } from "../models";
import { DataService } from "../data.service";
import { DiaExperienceComponent } from "../dia-experience/dia-experience.component";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
import { UserService } from "../user.service";
import { DiaEducationComponent } from "../dia-education/dia-education.component";
import { DiaProjectComponent } from "../dia-project/dia-project.component";

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
  //Detail is called in addNewObject
  openDetail(item: Object, type: string) {
    //config Dialog
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    //Binding data
    dialogConfig.data = item;
    //Open dialog
    switch (type) {
      case "Experience": {
        const dialogRef = this.dialog.open(
          DiaExperienceComponent,
          dialogConfig
        );
        //after close dialog
        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
        });
        break;
      }

      case "Education": {
        const dialogRef = this.dialog.open(DiaEducationComponent, dialogConfig);
        //after close dialog
        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
        });
        break;
      }

      case "Project": {
        const dialogRef = this.dialog.open(DiaProjectComponent, dialogConfig);
        //after close dialog
        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
        });
        break;
      }
    }
  }
  //Adding
  addNewObject(type: string) {
    switch (type) {
      case "Experience": {
        let newItem: Experience = new Experience(
          "Company name",
          "Title",
          1,
          2010,
          2,
          2010,
          false,
          "Description"
        );
        this.resume$.experience.push(newItem);
        this.openDetail(newItem, "Experience");
        break;
      }

      case "Education": {
        let newItem: Education = new Education(
          "School name",
          "Major",
          1,
          2010,
          2,
          2010,
          false,
          "degree"
        );

        this.resume$.education.push(newItem);
        this.openDetail(newItem, "Education");
        break;
      }

      case "Project": {
        let newItem: Project = new Project(
          "Project Name",
          "Description",
          1,
          2010,
          2,
          2010,
          false,
          "imageURL",
          "webURL"
        );

        this.resume$.project.push(newItem);
        this.openDetail(newItem, "Project");
        break;
      }
    }
    //Finally
    this.user.updateUserByID(this.user$._id, this.user$);
  }
  addNewSkill() {
    let newSkill: string = "New Skill";
    this.resume$.skill.push(newSkill);
  }

  //Deleting
  deleteObjectByID(ID, type: string) {
    switch (type) {
      case "Experience": {
        let index = this.resume$.experience.findIndex(
          index => index._id === ID
        );
        this.resume$.experience.splice(index, 1);
        break;
      }

      case "Education": {
        let index = this.resume$.education.findIndex(index => index._id === ID);
        this.resume$.education.splice(index, 1);
        break;
      }

      case "Project": {
        let index = this.resume$.project.findIndex(index => index._id === ID);
        this.resume$.project.splice(index, 1);
        break;
      }
    }
  }

  deleteSkill(item) {
    let index = this.resume$.skill.findIndex(
      skill => skill.toString() === item
    );
    this.resume$.skill.splice(index, 1);
  }
  //
}
