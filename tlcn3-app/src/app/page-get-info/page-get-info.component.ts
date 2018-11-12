import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

import { Resume } from '../models';
import { ResumeService } from '../resume.service';
import { Experience } from '../models';

@Component({
  selector: 'app-page-get-info',
  templateUrl: './page-get-info.component.html',
  styleUrls: ['./page-get-info.component.scss']
})
export class PageGetInfoComponent implements OnInit {
  resume: Resume;

  constructor(private dialog: MatDialog, private viewContainerRef: ViewContainerRef, public resumeService: ResumeService) { }
  ngOnInit() {
    //retrive resume();
  }
  addNewExperience(){
    const config = new MatDialogConfig();
    config.width = '75vw';

    const dialogRef = this.dialog.open(ExperienceDialog, config);
    
  }
}


//Add new Experience dialog
@Component({

}) 
export class ExperienceDialog implements OnInit{
  public experience: Experience;
  public years: Array<number>;
  public months: Array<string>;
  public editMode: boolean;
  constructor(public dialogRef: MatDialogRef<ExperienceDialog>, private resumeService: ResumeService) {
    
  }
  ngOnInit(){};
}