import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Experience } from "../models";

@Component({
  selector: "app-dia-experience",
  templateUrl: "./dia-experience.component.html",
  styleUrls: ["./dia-experience.component.scss"]
})
export class DiaExperienceComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DiaExperienceComponent>, @Inject(MAT_DIALOG_DATA) public data: Experience) {
  }
    
  ngOnInit() {
    
  }

  onClose() {
    this.dialogRef.close();
  }
}
