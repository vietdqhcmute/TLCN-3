import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { DataService } from "../services/data.service";
import { Resume, User } from "../models";
import { AuthService } from "../services/auth.service";
import { Candidate } from "../modelv2";
import { CandidateService } from "../services/candidate.service";
@Component({
  selector: "app-app-profile",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.scss"]
})
export class ProfilePageComponent implements OnInit {
  isAuthenticated = false;
  candidate:Object;
  email: string;
  constructor(
    private candidateService: CandidateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.candidateService.getCandidateSubscribtion(params["email"]);
    });
    this.candidateService
      .getCandidateData()
      .subscribe(candidateData => {
        this.candidate = candidateData;
        console.log(this.candidate);
      }, error => {});
    // this.isAuthenticated = this.authService.getIsAuth();
    // if (this.isAuthenticated) {
    //   // this.authService.getUserAfterLogin().subscribe(responseUser => {
    //   //   console.log("responseUser: " + responseUser);
    //   //   this.user$ = responseUser;
    //   //   this.resume$ = this.user$.resume;
    //   // });
    //   this.dataService.currentUser.subscribe(result => {
    //     this.user$ = result;
    //     this.resume$ = this.user$.resume;
    //   });
    // } else {
    //   this.router.navigate(["login"]);
    // }
  }
}
