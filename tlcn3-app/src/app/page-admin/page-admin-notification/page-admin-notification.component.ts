import { Component, OnInit } from '@angular/core';
import { NewfeedService } from 'src/app/services/newfeed.service';
import { NewFeed } from 'src/app/models';

@Component({
  selector: 'app-page-admin-notification',
  templateUrl: './page-admin-notification.component.html',
  styleUrls: ['./page-admin-notification.component.scss']
})
export class PageAdminNotificationComponent implements OnInit {
  private newfeeds = Array<NewFeed>();
  constructor(private newFeedService: NewfeedService) { }

  ngOnInit() {
    this.getAllNewFeed();
  }

  getAllNewFeed(){
    this.newFeedService.getNewFeeds().subscribe(newfeedResponse=>{
      console.log(newfeedResponse);
      this.newfeeds = newfeedResponse;
    });
  }
  deleteNewFeedByID(newfeedID){
    this.newFeedService.deleteNewFeedByID(newfeedID).subscribe(response=>{
      this.getAllNewFeed();
    });
  }
}
