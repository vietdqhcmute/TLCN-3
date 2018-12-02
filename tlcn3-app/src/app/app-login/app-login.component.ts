import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-app-login",
  templateUrl: "./app-login.component.html",
  styleUrls: ["./app-login.component.scss"]
})
export class AppLoginComponent implements OnInit {
  hide = true;
  si_email: string;
  si_password: string;

  su_name: string;
  su_phone: string;
  su_email: string;
  su_password: string;
  su_confirm: string;
  error: string;
  isLoading_logIn=false;
  isLoading_signUp = false;
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  onSignIn(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.login(this.si_email, this.si_password);
    this.isLoading_logIn=true;
  }

  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService
      .createUser(this.su_name, this.su_phone, this.su_email, this.su_password)
      .subscribe(response => {});
    this.isLoading_signUp=true;
  }
}
