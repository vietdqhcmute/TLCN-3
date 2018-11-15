import { Component, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-dia-experience",
  templateUrl: "./dia-experience.component.html",
  styleUrls: ["./dia-experience.component.scss"]
})
export class DiaExperienceComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DiaExperienceComponent>) {}

  ngOnInit() {}
  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
