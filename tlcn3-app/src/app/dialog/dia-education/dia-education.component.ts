import { Component, OnInit, Inject } from "@angular/core";
import { Education } from "../../models";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-dia-education",
  templateUrl: "./dia-education.component.html",
  styleUrls: ["./dia-education.component.scss"]
})
export class DiaEducationComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DiaEducationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Education
  ) {}

  ngOnInit() {}

  onClose() {
    this.dialogRef.close();
  }
  onSave() {}
}
