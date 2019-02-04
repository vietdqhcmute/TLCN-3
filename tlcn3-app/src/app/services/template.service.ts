import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";
import { HttpClient } from "@angular/common/http";
import { Statistic } from "../models";
import * as html2canvas from "html2canvas";
import jsPDF from "jspdf";

@Injectable({
  providedIn: "root"
})
export class TemplateService {
  private template = new Subject<string>();
  // private domainName = "http://localhost:3000/";
  domainName = "";

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
  getRatioTemplateTrending(){
    return this.http.get<any>(this.domainName+"count/template/all");
  }

  downloadPDF(elementID){
    html2canvas(document.getElementById(elementID)).then(function(canvas) {
    var img = canvas.toDataURL("image/png");
    var doc = new jsPDF('p','mm','a4');
    doc.addImage(img,'JPEG',0, 0, 210, 297);
    doc.save('My Resume.pdf');
    });
  }
}
