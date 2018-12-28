import { Component, OnInit, Input } from '@angular/core';
import { User, Resume } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-page-a4-design-blue01',
  templateUrl: './page-a4-design-blue01.component.html',
  styleUrls: ['./page-a4-design-blue01.component.scss']
})
export class PageA4DesignBlue01Component implements OnInit {

  @Input() resume: Resume;
  @Input() user: User;
  
  constructor(private data: DataService) {}
  elementID$: String;
  ngOnInit() {
    console.log(this.resume);
    this.data.currentElementID.subscribe(result=>{
      this.elementID$=result;
    })
  }

  sendData(elementID){
    this.data.sendDataElementID(elementID);
  }

}
