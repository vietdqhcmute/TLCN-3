import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Resume, AuthUser, AuthLogin, User } from "../models";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { UserService } from "./user.service";
import { DataService } from "./data.service";
import { environment } from "../../environments/environment";
import { AuthenticatModel } from "../modelv2";

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

  loginOldVersion(email: string, password: string) {
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
    if (!authInformation) {
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
  //==================================================New code=================================
  createCandidate(candidateParams) {
    this.http.post(this.domainName + "sign-up", candidateParams).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
  createRecruiter(recruiterParams) {
    this.http
      .post(this.domainName + "recruiter/sign-up", recruiterParams)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
  login(loginParams) {
    this.http
      .post<{ token: string; fetcheddata: AuthenticatModel }>(
        this.domainName + "login",
        loginParams
      )
      .subscribe(
        response => {
          const token = response.token;
          const role = response.fetcheddata.role;
          const email = response.fetcheddata.email;
          if (token) {
            if (role === 1) {
              this.loginAsCandidate(email);
            } else if (role === 2) {
              this.loginAsRecruiter(email);
            } else {
              this.loginAsAdministrator(email);
            }
          }
        },
        error => {
          console.log(error);
        }
      );
  }
  private loginAsCandidate(email) {
    this.router.navigate(["profile/", email]);
  }
  private loginAsRecruiter(email) {
    this.router.navigate(["recruiter"]);
  }
  private loginAsAdministrator(email) {
    this.router.navigate(["admin"]);
  }
}
