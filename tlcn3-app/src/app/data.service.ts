import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Resume, SocialType, User } from "./models";
import 'rxjs/add/operator/map';  // we need to import this now

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  // //resumé
  // private resumeSource = new BehaviorSubject<Resume>({
  //   name: "",
  //   title: "",
  //   summary: "",
  //   email: "",
  //   phone: "",
  //   pictureUrl: "",
  //   social: [],
  //   experience: [],
  //   educations: [],
  //   projects: [],
  //   skills: []
  // });
  // currentResume = this.resumeSource.asObservable();

  // sendDataResume(resume) {
  //   this.resumeSource.next(resume);
  // }
//user
  private userSource = new BehaviorSubject<User>({
    resume:{
      name: "",
      title: "",
      summary: "",
      email: "",
      phone: "",
      pictureUrl: "",
      social: [],
      experience: [],
      education: [],
      project: [],
      skill: []
    }  ,
    googleId: "",
    googleName: "",
    avatarURL: "",
    _id: ""

  });
  currentUser = this.userSource.asObservable();

  sendDataUser(user) {
    this.userSource.next(user);
  }
}
