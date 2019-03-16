import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Candidate } from "../modelv2";
import { CandidateService } from "../services/candidate.service";
import { from } from "rxjs";
import { first } from "rxjs/operators";

@Component({
  selector: "app-candidate",
  templateUrl: "./candidate.component.html",
  styleUrls: ["./candidate.component.scss"]
})
export class CandidateComponent implements OnInit {
  isAuthenticated = false;
  email: string;
  candidate: Candidate=null;
  testEmail = "vietdqhcmute@gmail.com";
  allowEdit = false;
  defaultImageURL = "../../assets/tho-bay-mau-28.png"
  constructor(
    private candidateService: CandidateService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadCandidateData(this.testEmail);
  }
  private onEditButton(){
    if (this.allowEdit){
      this.candidateService.updateCandidateByID(this.candidate._id,this.candidate).subscribe(response=>{
        console.log("Done!");
      },error=>{
        console.log("Error!");
      });
    }
    this.allowEdit = !this.allowEdit;
  }
  private loadCandidateData(email) {
    this.candidateService
      .getCandidateByEmail(email)
      .pipe(first())
      .subscribe(candidate => {
        this.candidate = <Candidate>candidate;
      });
  }
}
