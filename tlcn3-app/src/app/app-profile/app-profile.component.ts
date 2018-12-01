import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { ActivatedRoute } from "@angular/router";
import { DataService } from '../services/data.service';
import { Resume, User } from "../models";
@Component({
  selector: "app-app-profile",
  templateUrl: "./app-profile.component.html",
  styleUrls: ["./app-profile.component.scss"]
})
export class AppProfileComponent implements OnInit {
  user$: User;
  resume$: Resume;
  userByResume$: User;
  id: string;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.user$ = this.route.snapshot.data["profile"]; //Use User infomation Resolver to load data before render view
    //This line is to pass data to main component
    this.data.currentUser.subscribe(result =>{
      this.userByResume$ = result;
    });
  }
  sendData(){ //to send data to main component
    this.data.sendDataUser(this.user$);
  }
}
