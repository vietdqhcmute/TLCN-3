import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from '../services/user.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss']
})
export class PageTemplateComponent implements OnInit {

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
  }

  onChangeTemplate(chooseTemp:string){
    return this.templateService.changeTemplate(chooseTemp);
  }

}
