import { Component, OnInit, Input } from "@angular/core";
import { Resume, User } from "../../models";
import { TemplateService } from "../../services/template.service";

@Component({
  selector: "app-page-a4-preview",
  templateUrl: "./a4-preview.component.html",
  styleUrls: ["./a4-preview.component.scss"]
})
export class A4PreviewComponent implements OnInit {
  @Input() resume: Resume;
  @Input() user: User;

  template: String = "default";
  constructor(private templateService: TemplateService) {}

  ngOnInit() {
    this.templateService.getTemplate().subscribe(template$ => {
      this.template = template$;
    });
  }
}
