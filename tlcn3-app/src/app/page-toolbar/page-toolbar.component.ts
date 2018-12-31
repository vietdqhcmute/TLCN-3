import { Component, OnInit, Input } from "@angular/core";
import { User } from "../models";
import { UserService } from "../services/user.service";
import { ActivatedRoute } from "@angular/router";
import { TemplateService } from "../services/template.service";

@Component({
  selector: "app-page-toolbar",
  templateUrl: "./page-toolbar.component.html",
  styleUrls: ["./page-toolbar.component.scss"]
})
export class PageToolbarComponent implements OnInit {
  @Input() user$: User;
  id$: string;
  isLoading_update: boolean = false;
  isDownloading: boolean = false;

  template: string;
  constructor(
    private user: UserService,
    route: ActivatedRoute,
    private templateService: TemplateService
  ) {
    route.params.subscribe(params => (this.id$ = params.id));
  }

  ngOnInit() {
    this.template = "default";
    this.templateService.getTemplate().subscribe(template$ => {
      this.template = template$;
    });
  }

  onSave() {
    this.isLoading_update = true;
    this.user.updateUserByID(this.id$, this.user$).subscribe(
      response => {
        this.isLoading_update = false;
      },
      err => console.log(err)
    );
  }

  onDownload() {
    this.isDownloading = true;
    this.templateService
      .postTemplateStatistic(this.id$, this.template)
      .subscribe(response => {
        this.isDownloading=false;
      },error=>{
        this.isDownloading = false;
        console.log(error);
      });
  }
}
