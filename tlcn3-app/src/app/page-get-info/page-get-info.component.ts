import { Component, OnInit } from '@angular/core';
import { Resume } from '../models';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-page-get-info',
  templateUrl: './page-get-info.component.html',
  styleUrls: ['./page-get-info.component.scss']
})
export class PageGetInfoComponent implements OnInit {
  resume: Resume;

  constructor(private resumeService: ResumeService) { }
  ngOnInit() {
    //retrive resume();
  }

}
