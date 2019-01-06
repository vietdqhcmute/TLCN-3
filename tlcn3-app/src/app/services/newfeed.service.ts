import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

import { NewFeed } from "../models";

@Injectable({
  providedIn: "root"
})
export class NewfeedService {
  domainName = "http://localhost:3000/";

  constructor(private http: HttpClient) {}
  
  createNewFeed(userID: string, message: string) {
    const newfeed: NewFeed = {
      userID: userID,
      message: message,
      created: new Date()
    };
    return this.http
      .post(this.domainName + "add/newfeed/" + userID, newfeed);
  }

  getNewFeeds() {
    return this.http.get<any>(this.domainName + "newfeed/all");
  }

  deleteNewFeedByID(newfeedID: string) {
    return this.http.delete(this.domainName + "delete/newfeed/" + newfeedID);
  }
}
