import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Resume, AuthUser, AuthLogin, User } from "../models";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { UserService } from "./user.service";
import { DataService } from "./data.service";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  domainName = environment.APIEndPoint;
  private token: string;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  private isAdmin = false;
  private isLoadingSignIn = new Subject<boolean>();
  private isLoadingSignUp = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private dataService: DataService,
    private userService: UserService
  ) {}

  getToken() {
    return this.token;
  }

  getIsAdmin() {
    return this.isAdmin;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getLoadingSignIn() {
    return this.isLoadingSignIn.asObservable();
  }

  getLoadingSignUp() {
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
      .subscribe(
        response => {
          const token = response.token;
          this.token = token;
          this.userService.getUserByID(response.id).subscribe(responseUser => {
            this.dataService.sendDataUser(responseUser);
            // this.user$.next(<User>responseUser);
            if (token) {
              if (email == "admin@admin.com") {
                //Admin login
                this.isAuthenticated = true;
                this.isAdmin = true;
                this.authStatusListener.next(true);
                this.router.navigate(["admin"]);
                this.isLoadingSignIn.next(true);
              } else {
                //user login
                this.isAuthenticated = true;
                this.authStatusListener.next(true);

                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                this.saveAuthData(token, tomorrow, response.id);

                this.router.navigate(["profile"]);
                this.isLoadingSignIn.next(true);
              }
            }
          });
        },
        error => {
          this.isLoadingSignIn.next(false);
        }
      );
  }

  autoAuth() {
    const authInformation = this.getAuthData();
    if (!authInformation){
      return;
    }
    const now = new Date();
    const isInFuture = authInformation.expirationDate > now;
    if (isInFuture) {
      this.token = authInformation.token;
      this.userService
        .getUserByID(authInformation.userID)
        .subscribe(responseUser => {
          this.dataService.sendDataUser(responseUser);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          this.router.navigate(["profile"]);
        });
    }
  }

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
      avatarURL: "https://nodejs-server-image.s3.amazonaws.com/1550410758086",
      fullName: userName,
      userName: userName,
      email: email,
      password: password,
      phone: phoneNumber
    };
    this.http.post(this.domainName + "signup", newUser).subscribe(
      response => {
        this.isLoadingSignUp.next(true);
      },
      error => {
        this.isLoadingSignUp.next(false);
      }
    );
  }

  logOut() {
    this.token = null;
    this.authStatusListener.next(false);
    this.isLoadingSignIn.next(false);
    this.isLoadingSignUp.next(false);
    this.clearAuthData();
  }

  private saveAuthData(token: string, expirationDate: Date, userID: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userID", userID);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userID");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userID = localStorage.getItem("userID");
    if (!token || !expirationDate || !userID) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userID: userID
    };
  }
}
