import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { User } from "../models";
import { Subscription } from "rxjs";
import { LoginData } from "../modelv2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  hide = true; //Use for hidden password
  isLoading_logIn = false;
  loginParams = new LoginData();

  authSubcription: Subscription;
  user$: User;
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  onSignIn( form: NgForm){
    if (form.invalid){
      return;
    }
    this.authService.login(this.loginParams);
  }

  // onSignIn(form: NgForm) {
  //   this.isLoading_logIn = true;
  //   if (form.invalid) {
  //     return;
  //   }

  //   this.authService.login(this.si_email, this.si_password);
  //   this.authService.getLoadingSignIn().subscribe(status => {
  //     this.isLoading_logIn = status;
  //   });
  // }
}
