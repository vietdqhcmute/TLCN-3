import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { User } from "../models";
import { DataService } from "../services/data.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  hide = true; //Use for hidden password
  // si_email: string = "admin@admin.com";
  // si_password: string = "1";

  si_email: string = "vietdqhcmute@gmail.com";
  si_password: string = "123";

  su_name: string;
  su_phone: string;
  su_email: string;
  su_password: string;
  su_confirm: string;

  isLoading_logIn = false;
  isLoading_signUp = false;

  authSubcription: Subscription;
  user$: User;
  constructor(
    public authService: AuthService,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  onSignIn(form: NgForm) {
    this.isLoading_logIn = true;
    if (form.invalid) {
      return;
    }

    this.authService.login(this.si_email, this.si_password);
    this.authSubcription = this.authService.getLoadingSignIn().subscribe(status => {
      this.isLoading_logIn = status;
    });
  }

  onSignUp(form: NgForm) {
    this.isLoading_signUp = true; // this variable is for spinner

    if (form.invalid) {
      return;
    }
    this.authService.createUser(
      this.su_name,
      this.su_phone,
      this.su_email,
      this.su_password
    );

    this.authSubcription = this.authService.getLoadingSignUp().subscribe(status => {
      //after sign up success, login
      this.isLoading_signUp = status;
      if (status) {
        this.authService.login(this.su_email, this.su_password);
        //  = this.authService.getUserAfterLogin()
        //   .subscribe(responseUser => {
        //     this.user$ = responseUser;
        //     this.dataService.sendDataUser(responseUser);
        //   });
        this.isLoading_signUp = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.authSubcription.unsubscribe();
  }
}
