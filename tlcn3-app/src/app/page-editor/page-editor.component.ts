import { Component, OnInit, Input } from "@angular/core";
import { Resume, Experience } from "../models";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-page-editor",
  templateUrl: "./page-editor.component.html",
  styleUrls: ["./page-editor.component.scss"]
})
export class PageEditorComponent implements OnInit {
  @Input() resume: Resume;
  constructor(private data: DataService) {}
  elementID$: String;
  ngOnInit() {
    this.data.currentElementID.subscribe(result=>{
      this.elementID$=result;
    })
  }

  sendData(elementID){
    this.data.sendDataElementID(elementID);
  }
  
}
