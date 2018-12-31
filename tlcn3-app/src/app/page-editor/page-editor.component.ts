import { Component, OnInit, Input } from "@angular/core";
import { Resume, Experience, User } from "../models";
import { DataService } from "../services/data.service";
import { UserService } from "../services/user.service";
import { TemplateService } from "../services/template.service";
import * as html2canvas from "html2canvas";
import jsPDF from "jspdf";
@Component({
  selector: "app-page-editor",
  templateUrl: "./page-editor.component.html",
  styleUrls: ["./page-editor.component.scss"]
})
export class PageEditorComponent implements OnInit {
  @Input() resume: Resume;
  @Input() user: User;

  template: String = "default";
  constructor(private templateService: TemplateService) {}

  ngOnInit() {
    this.templateService.getTemplate().subscribe(template$ => {
      this.template = template$;
    });
  }

  downloadPDF(){
    html2canvas(document.getElementById('cv-area')).then(function(canvas) {
    var img = canvas.toDataURL("image/png");
    var doc = new jsPDF('p','mm','a4');
    doc.addImage(img,'JPEG',0, 0, 210, 297);
    doc.save('My Resume.pdf');
    });
  }
}
