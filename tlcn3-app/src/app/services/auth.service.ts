import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http, Headers } from "@angular/http";

import { Resume, User, AuthUser } from "../models";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  domainName = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  createUser(
    userName: string,
    phoneNumber: string,
    email: string,
    password: string
  ) {
    const newResume: Resume = {
      name: "",
      title: "",
      summary: "",
      email: email,
      phone: phoneNumber,
      pictureUrl: "",
      githubURL: "",
      linkedinURL: "",
      webpageURL: "",
      experience: [],
      education: [],
      project: [],
      skill: []
    };
    const newUser: AuthUser = {
      resume: newResume,
      googleId: "",
      googleName: "",
      userName: userName,
      password: password,
      avatarURL: ""
       };
    this.http.post(this.domainName + "signup", newUser).subscribe(response=>{
      console.log(response);
    });
  }
}
