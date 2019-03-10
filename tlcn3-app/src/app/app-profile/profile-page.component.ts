import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { DataService } from "../services/data.service";
import { Resume, User } from "../models";
import { AuthService } from "../services/auth.service";
import { Candidate } from "../modelv2";
import { CandidateService } from "../services/candidate.service";
import { from } from "rxjs";
import { first } from "rxjs/operators";

@Component({
  selector: "app-app-profile",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.scss"]
})
export class ProfilePageComponent implements OnInit {
  isAuthenticated = false;
  email: string;
  candidate: Candidate=null;
  testEmail = "vietdqhcmute@gmail.com";
  allowEdit = false;
  constructor(
    private candidateService: CandidateService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadCandidateData(this.testEmail);
  }
  private onEditButton(){
    this.allowEdit = !this.allowEdit;
  }
  private loadCandidateData(email) {
    this.candidateService
      .getCandidateByEmail(email)
      .pipe(first())
      .subscribe(candidate => {
        this.candidate = <Candidate>candidate;
        console.log(this.candidate);
      });
  }
}
