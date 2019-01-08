import { Component, OnInit, Input } from '@angular/core';
import { Resume, User } from '../../models';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-page-a4-design-blue',
  templateUrl: './page-a4-design-blue.component.html',
  styleUrls: ['./page-a4-design-blue.component.scss']
})
export class PageA4DesignBlueComponent implements OnInit {
  @Input() resume: Resume;
  @Input() user: User;
  
  constructor(private data: DataService) {}
  elementID$: String;
  ngOnInit() {
    this.data.currentElementID.subscribe(result=>{
      this.elementID$=result;
    })
  }

  sendData(elementID){
    this.data.sendDataElementID(elementID);
  }
}
