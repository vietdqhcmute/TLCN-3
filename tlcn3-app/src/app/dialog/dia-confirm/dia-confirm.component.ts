import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dia-confirm',
  templateUrl: './dia-confirm.component.html',
  styleUrls: ['./dia-confirm.component.scss']
})
export class DiaConfirmComponent implements OnInit {
  confirmMessage: string ="Do you want to delete";
  constructor(
    private dialogRef: MatDialogRef<DiaConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: boolean
  ) { }

  ngOnInit() {
  }

}
