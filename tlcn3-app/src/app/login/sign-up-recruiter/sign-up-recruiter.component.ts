import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-recruiter',
  templateUrl: './sign-up-recruiter.component.html',
  styleUrls: ['./sign-up-recruiter.component.scss']
})
export class SignUpRecruiterComponent implements OnInit {

  company_name: String;
  website: String;
  email: String;
  phone: String;
  city: String;
  su_userPassword: String;
  su_confirm: String;
  constructor() { }

  ngOnInit() {
  }

}
