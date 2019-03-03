import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiter-review-post',
  templateUrl: './recruiter-review-post.component.html',
  styleUrls: ['./recruiter-review-post.component.scss']
})
export class RecruiterReviewPostComponent implements OnInit {
  title = "I like it!"
  created = "March 3 2019"
  like="Working environment is very friendly";
  not_like="I was looked down on when I was here!"
  constructor() { }

  ngOnInit() {
  }

}
