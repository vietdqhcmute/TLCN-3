import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { NgForm } from '@angular/forms';


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
  constructor() {
   }

  ngOnInit() {
  }

  onSignIn(form: NgForm){
    console.log(form.value);
  }

  onSignUp(form: NgForm){
    console.log(form.value);
  }
}
