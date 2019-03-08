import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { CandidateParams } from "src/app/modelv2";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  hide = true; //Use for hidden password
  candidateParams = new CandidateParams();
  isLoading_signUp = false; // use for spinner

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  onSignUp(form: NgForm){
    if (form.invalid){
      return;
    }
    this.authService.createCandidate(this.candidateParams);
  }
}
