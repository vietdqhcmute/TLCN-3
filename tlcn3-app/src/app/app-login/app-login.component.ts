import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {
  hide=true;
  emailPattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
  // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  su_name: string;
  su_phone: string;
  su_email: string;
  su_password: string;
  su_confirm: string;
  error:string;
  constructor(public authService: AuthService) {
   }

  ngOnInit() {
  }

  onSignIn(form: NgForm){
    console.log(form.value);
  }

  onSignUp(form: NgForm){
    if (form.invalid){
      return;
    }
    this.authService.createUser(this.su_name, this.su_phone, this.su_email,this.su_password);
  }
}
