import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Experience } from "../models";
import { v4 as uuid } from 'uuid';

@Component({
  selector: "app-dia-experience",
  templateUrl: "./dia-experience.component.html",
  styleUrls: ["./dia-experience.component.scss"]
})
export class DiaExperienceComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DiaExperienceComponent>, @Inject(MAT_DIALOG_DATA) public data: Experience) {
  }
    
  ngOnInit() {
    this.data._id = uuid();     
    this.data.company_name= "";
    this.data.title = "";
    this.data.current = false;
    this.data.startMonth = null;
    this.data.startYear = null;
    this.data.endMonth = null;
    this.data.endYear = null;
    this.data.description = "";
    console.log(this.data);
  }
  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
