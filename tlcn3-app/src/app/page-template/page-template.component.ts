import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss']
})
export class PageTemplateComponent implements OnInit {

  constructor(private useService: UserService) { }

  ngOnInit() {
  }

  onChangeTemplate(chooseTemp:string){
    return this.useService.changeTemplate(chooseTemp);
  }

}
