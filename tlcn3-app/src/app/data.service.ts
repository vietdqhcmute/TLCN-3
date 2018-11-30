import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Resume, User } from "./models";
import 'rxjs/add/operator/map';  // we need to import this now

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}
//user
  private userSource = new BehaviorSubject<User>({
    resume:{
      name: "",
      title: "",
      summary: "",
      email: "",
      phone: "",
      pictureUrl: "",
      githubURL: "",
      linkedinURL: "",
      webpageURL: "", 
      experience: [],
      education: [],
      project: [],
      skill: []
    }  ,
    userName:"",
    password:"",
    googleId: "",
    googleName: "",
    avatarURL: "",
    _id: ""

  });
  currentUser = this.userSource.asObservable();

  sendDataUser(user) {
    this.userSource.next(user);
  }

  private elementIDSource = new Subject<string>(); //as Observable
  currentElementID = this.elementIDSource.asObservable();
  sendDataElementID(elementID){
    this.elementIDSource.next(elementID);
  }
}
