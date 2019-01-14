import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { User } from "../models";
import { Subscription } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  hide = true; //Use for hidden password
  // si_email: string = "admin@admin.com";
  // si_password: string = "1";

  si_email: string = "vietdqhcmute@gmail.com";
  si_password: string = "123";

  isLoading_logIn = false;

  authSubcription: Subscription;
  user$: User;
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  onSignIn(form: NgForm) {
    this.isLoading_logIn = true;
    if (form.invalid) {
      return;
    }

    this.authService.login(this.si_email, this.si_password);
    this.authService.getLoadingSignIn().subscribe(status => {
      this.isLoading_logIn = status;
    });
  }
}
