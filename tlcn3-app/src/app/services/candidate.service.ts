import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CandidateService {
  domainName = environment.APIEndPoint;

  constructor(private http: HttpClient) {}

  getCandidateByEmail(email) {
    return this.http.get(this.domainName + "candidate/email/"+email);
  }
}
