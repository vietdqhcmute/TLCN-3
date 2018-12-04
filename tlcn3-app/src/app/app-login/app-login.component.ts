import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { User } from "../models";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";

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
  isLoading_logIn = false;
  isLoading_signUp = false;

  user$: User;
  constructor(
    public authService: AuthService,
    private userService: UserService,
    private dataService: DataService,
    router: Router
  ) {}

  ngOnInit() {}


  onSignIn(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.login(this.si_email, this.si_password);
    this.authService.getLoginID().subscribe(id => {
      this.userService.getUserByID(id).subscribe(user=>{
        this.user$= <User> user;
        this.dataService.sendDataUser(this.user$);
      })
    });
    this.isLoading_logIn = true;
  }

  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService
      .createUser(this.su_name, this.su_phone, this.su_email, this.su_password)
      .subscribe(response => {});
    this.isLoading_signUp = true;
  }
}
