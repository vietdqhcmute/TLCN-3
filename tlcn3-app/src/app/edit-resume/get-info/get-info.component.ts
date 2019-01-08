import {
  Component,
  OnInit,
  ViewContainerRef,
  Inject
} from "@angular/core";
import {
  MatDialog,
  MatDialogConfig} from "@angular/material";

import { Resume, User, Education, Project } from "../../models";
import { Experience } from "../../models";
import { DataService } from "../../services/data.service";
import { DiaExperienceComponent } from "../../dialog/dia-experience/dia-experience.component";
import { UserService } from "../../services/user.service";
import { DiaEducationComponent } from "../../dialog/dia-education/dia-education.component";
import { DiaProjectComponent } from "../../dialog/dia-project/dia-project.component";
import { DiaConfirmComponent } from "../../dialog/dia-confirm/dia-confirm.component";

@Component({
  selector: "app-get-info",
  templateUrl: "./get-info.component.html",
  styleUrls: ["./get-info.component.scss"]
})
export class GetInfoComponent implements OnInit {
  resume$: Resume;
  user$: User;
  skill: Array<String>; // here to test
  constructor(
    @Inject(Window) private window: Window,
    private dialog: MatDialog,
    private viewContainerRef: ViewContainerRef,
    private data: DataService,
    private user: UserService
  ) {}
  ngOnInit() {
    // get data from edit-resume.component by subjectbehavior
    this.data.currentUser.subscribe(result => {
      this.user$ = result;
      this.resume$ = this.user$.resume;
      this.skill = this.user$.resume.skill;
    });
    this.data.currentElementID.subscribe(id => {
      this.findElement(id);
    });
  }

  //Detail is called in addNewObject
  openDetail(item: Object, type: string) {
    //config Dialog
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    //Binding data with Observable so when it change, don't need to commit to change
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
        //Add new standard object to array, then openDetail dialog immediately
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
        //Add new standard object to array, then openDetail dialog immediately
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
        //Add new standard object to array, then openDetail dialog immediately
        this.resume$.project.push(newItem);
        this.openDetail(newItem, "Project");
        break;
      }
    }
    //Finally update after add new
    this.user.updateUserByID(this.user$._id, this.user$);
  }

  addNewSkill() {
    let newSkill: String = "New Skill"; //standart skill
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

  onDeleteObject(ID, type: string) {
    //config Dialog
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.disableClose = false;
    dialogConfig.data = false;

    const dialogRef = this.dialog.open(DiaConfirmComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.deleteObjectByID(ID, type);
      }else{
        console.log("Just close dialog");
      }
    });
  }

  deleteSkill(index) {
    this.resume$.skill.splice(index, 1);
  }
  //
  confirmSkill(index, item) {
    this.resume$.skill[index] = item;
  }
  onDeleteSkill(index){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.disableClose = false;
    dialogConfig.data = false;

    const dialogRef = this.dialog.open(DiaConfirmComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.deleteSkill(index);
      }else{
        console.log("Just close dialog");
      }
    });
  }
  findElement(elementID: string) {
    this.window.document.getElementById(elementID).scrollIntoView();
  }
}
