import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private template = new Subject<string>();

  constructor() { }
  
  getTemplate(){
    return this.template.asObservable();
  }

  changeTemplate(chooseTemp:string){
    this.template.next(chooseTemp);
  }
}
