import { Component, OnInit, Inject, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { User } from "../models";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-app-login",
  templateUrl: "./app-login.component.html",
  styleUrls: ["./app-login.component.scss"]
})
export class AppLoginComponent implements OnInit, OnDestroy {

  hide = true; //Using at hidden password
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
    private userService: UserService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSignIn(form: NgForm) {
    this.isLoading_logIn = true;
    if (form.invalid) {
      return;
    }
    this.authService.login(this.si_email, this.si_password);

    this.authSubcription = this.authService.getLoginID().subscribe(id => {
      this.userService.getUserByID(id).subscribe(user => {
        this.user$ = <User>user;
        this.dataService.sendDataUser(this.user$);
      });
    });
    this.authService.getLoadingSignIn().subscribe(status => {
      this.isLoading_logIn = status;
    });
  }

  onSignUp(form: NgForm) {
    this.isLoading_signUp = true;

    if (form.invalid) {
      return;
    }
    this.authService.createUser(
      this.su_name,
      this.su_phone,
      this.su_email,
      this.su_password
    );
    this.authService.getLoadingSignUp().subscribe(status=>{
      this.isLoading_signUp = status;
    })
    this.authService.getSignUpSuccess().subscribe(signUpSuccess=>{
      if (signUpSuccess){
        this.isLoading_signUp = false;
        //Show thong bao success ra man hinh
      }
    })
  }

  ngOnDestroy(): void {
    //avoid log out error message
    this.authSubcription.unsubscribe();
  }
}
