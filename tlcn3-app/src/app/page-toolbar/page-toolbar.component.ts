import { Component, OnInit, Input } from '@angular/core';
import { Resume } from '../models';

@Component({
  selector: 'app-page-toolbar',
  templateUrl: './page-toolbar.component.html',
  styleUrls: ['./page-toolbar.component.scss']
})
export class PageToolbarComponent implements OnInit {
  @Input() resume: Resume;

  constructor() { }

  ngOnInit() {
  }

  onSave(){
    
  }

}
