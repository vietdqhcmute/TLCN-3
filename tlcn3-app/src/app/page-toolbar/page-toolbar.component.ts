import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models';

@Component({
  selector: 'app-page-toolbar',
  templateUrl: './page-toolbar.component.html',
  styleUrls: ['./page-toolbar.component.scss']
})
export class PageToolbarComponent implements OnInit {
  @Input() user$: User;

  constructor() { }

  ngOnInit() {
  }

  onSave(){
    
  }

}
