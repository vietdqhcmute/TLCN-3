import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http, Headers } from "@angular/http";

import { Resume, User, AuthUser, AuthLogin } from "../models";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  domainName = "http://localhost:3000/";
  private token: string;
  private loginId = new Subject<string>();
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;

  private isLoadingSignIn = new Subject<boolean>();
  private isLoadingSignUp = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}


  getToken() {
    return this.token;
  }

  getLoginID() {
    return this.loginId.asObservable();
  }

  getIsAuth() {
    return this.isAuthenticated;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getLoadingSignIn(){
    return this.isLoadingSignIn.asObservable();
  }
  getLoadingSignUp(){
    return this.isLoadingSignUp.asObservable();
  }
//----------------------------------------------------------------------------------
  login(email: string, password: string) {
    const loginData: AuthLogin = {
      email: email,
      password: password
    };
    this.http
      .post<{ token: string; id: string }>(this.domainName + "login", loginData)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        if (token) {
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          this.loginId.next(response.id);
          this.router.navigate(["profile"]);
          this.isLoadingSignIn.next(true);
        }
      }, error=>{
        this.isLoadingSignIn.next(false);
      });
  }

  createUser(userName: string, phoneNumber: string, email: string, password: string) {
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
      avatarURL: "http://localhost:3000/images/tho-7-mau.jpg",
      fullName: userName,
      userName: userName,
      email: email,
      password: password,
      phone: phoneNumber
    };
    this.http.post(this.domainName + "signup", newUser).subscribe(
      response => {
        this.login(email, password);
      },
      error => {
        this.isLoadingSignUp.next(false);
      }
    );
  }

 
  logOut() {
    this.token = null;
    this.authStatusListener.next(false);
    this.loginId.next(null);
    this.isLoadingSignIn.next(false);
    this.isLoadingSignUp.next(false);
  }
}
