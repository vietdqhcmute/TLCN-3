import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";
import { HttpClient } from "@angular/common/http";
import { Statistic } from "../models";

@Injectable({
  providedIn: "root"
})
export class TemplateService {
  private template = new Subject<string>();
  private domainName = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getTemplate() {
    return this.template.asObservable();
  }

  changeTemplate(chooseTemp: string) {
    this.template.next(chooseTemp);
  }

  postTemplateStatistic(userID: string, chooseTemp: string) {
    const statistic: Statistic = {
      userID: userID,
      template: chooseTemp,
      created: new Date()
    };
    return this.http.post(
      this.domainName + "add/template/" + userID,
      statistic
    );
  }
}
