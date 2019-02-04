import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  hide = true; //Use for hidden password
  su_name: string;
  su_phone: string;
  su_email: string;
  su_password: string;
  su_confirm: string;
  isLoading_signUp = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {}
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

    this.authService.getLoadingSignUp().subscribe(status => {
      //after sign up success, login
      this.isLoading_signUp = status;
      if (status) {
        this.authService.login(this.su_email, this.su_password);
        this.isLoading_signUp = false;
      }
    });
  }
}
