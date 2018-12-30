import { Component, OnInit } from "@angular/core";
import { NewfeedService } from "src/app/services/newfeed.service";
import { NewFeed } from "src/app/models";

@Component({
  selector: "app-page-admin-notification",
  templateUrl: "./page-admin-notification.component.html",
  styleUrls: ["./page-admin-notification.component.scss"]
})
export class PageAdminNotificationComponent implements OnInit {
  private newfeeds = Array<NewFeed>();
  private newfeedMess: string = "";
  private adminID = "5c26248e7012d622dca369ab";
  private isCreating =false;
  constructor(private newFeedService: NewfeedService) {}

  ngOnInit() {
    this.getAllNewFeed();
  }

  createNewFeed() {
    this.isCreating =true;
    this.newFeedService.createNewFeed(this.adminID, this.newfeedMess).subscribe(
      response => {
        this.isCreating=false;
        this.getAllNewFeed();
      },
      error => {
        this.isCreating=false;
        console.log(error);
      }
    );
  }

  getAllNewFeed() {
    this.newFeedService.getNewFeeds().subscribe(newfeedResponse => {
      this.newfeeds = newfeedResponse;
    });
  }
  deleteNewFeedByID(newfeedID) {
    this.newFeedService.deleteNewFeedByID(newfeedID).subscribe(response => {
      this.getAllNewFeed();
    });
  }
}
