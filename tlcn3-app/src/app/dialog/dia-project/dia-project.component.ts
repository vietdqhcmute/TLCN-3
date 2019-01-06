import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Project } from "../../models";

@Component({
  selector: "app-dia-project",
  templateUrl: "./dia-project.component.html",
  styleUrls: ["./dia-project.component.scss"]
})
export class DiaProjectComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DiaProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) {}

  ngOnInit() {}
  onClose() {
    this.dialogRef.close();
  }
  onSave() {}
}
