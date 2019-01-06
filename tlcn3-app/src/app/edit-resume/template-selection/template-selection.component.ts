import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from '../../services/user.service';
import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'app-template-selection',
  templateUrl: './template-selection.component.html',
  styleUrls: ['./template-selection.component.scss']
})
export class TemplateSelectionComponent implements OnInit {

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
  }

  onChangeTemplate(chooseTemp:string){
    return this.templateService.changeTemplate(chooseTemp);
  }

}
