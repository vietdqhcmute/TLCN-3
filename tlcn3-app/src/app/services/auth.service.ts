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
    };
    const newUser: AuthUser = {
      resume: newResume,
      googleId: "",
      googleName: "",
      avatarURL: "",
      userName: userName,
      email: email,
      password: password,
      fullname: "",
      phone: phoneNumber
       };
    this.http.post(this.domainName + "signup", newUser).subscribe(response=>{
      console.log(response);
    });
  }
}
