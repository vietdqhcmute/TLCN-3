import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Resume, SocialType } from "./models";
import 'rxjs/add/operator/map';  // we need to import this now

@Injectable({
  providedIn: "root"
})
export class DataService {
  //resumé
  private resumeSource = new BehaviorSubject<Resume>({
    name: "",
    title: "",
    summary: "",
    email: "",
    phone: "",
    pictureUrl: "",
    social: [],
    experience: [],
    educations: [],
    projects: [],
    skills: []
  });
  currentResume = this.resumeSource.asObservable();
  constructor() {}

  sendDataResume(resume) {
    this.resumeSource.next(resume);
  }
}
