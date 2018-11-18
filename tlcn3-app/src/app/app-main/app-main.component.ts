import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";
import { Location } from '@angular/common';
import { Resume } from "../models";
import { DataService } from "../data.service";

@Component({
  selector: "app-app-main",
  templateUrl: "./app-main.component.html",
  styleUrls: ["./app-main.component.scss"]
})
export class AppMainComponent implements OnInit {
  resume$: Resume;
  constructor(private data: DataService) {
    
  }

  ngOnInit() {
    this.data.currentResume.subscribe(result=>{
      this.resume$=result;
    });
    console.log(this.resume$);
  }
}
