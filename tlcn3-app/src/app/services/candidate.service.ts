import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Candidate } from "../modelv2";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CandidateService {
  domainName = environment.APIEndPoint;
  private candidateData = new Subject<Object>();

  constructor(private http: HttpClient) {}

  getCandidateData(){
    return this.candidateData.asObservable();
  }
  getCandidateSubscribtion(candidateEmail) {
    let subscribtionparams={"email":candidateEmail};
    this.http
      .post(
        this.domainName + "candidate/find-email", subscribtionparams
      )
      .subscribe(response => {
        this.candidateData.next(response);
      }, error => {});
  }
}
