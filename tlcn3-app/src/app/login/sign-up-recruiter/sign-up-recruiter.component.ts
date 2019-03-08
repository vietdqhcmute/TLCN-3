import { Component, OnInit } from '@angular/core';
import { RecruiterParams } from 'src/app/modelv2';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up-recruiter',
  templateUrl: './sign-up-recruiter.component.html',
  styleUrls: ['./sign-up-recruiter.component.scss']
})
export class SignUpRecruiterComponent implements OnInit {
  hide =true;
  confirm: String;
  recruiterParams = new RecruiterParams();
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  onSignUp(form: NgForm){
    if (form.invalid){
      return;
    }
    this.authService.createRecruiter(this.recruiterParams);  }
}
