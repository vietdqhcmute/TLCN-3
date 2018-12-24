import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Resume, User } from "../models";
import 'rxjs/add/operator/map';  // we need to import this now

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}
//user
  private userSource = new BehaviorSubject<User>({
    resume:{
      title: "",
      summary: "",
      pictureUrl: "",
      githubURL: "",
      linkedinURL: "",
      webpageURL: "", 
      experience: [],
      education: [],
      project: [],
      skill: []
    },
    googleId: "",
    googleName: "",
    avatarURL: "",
    userName:"",
    email:"",
    password:"",
    fullName:"",
    phone:"",
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
