import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiter-side-bar',
  templateUrl: './recruiter-side-bar.component.html',
  styleUrls: ['./recruiter-side-bar.component.scss']
})
export class RecruiterSideBarComponent implements OnInit {
  company_name = "Alita Battle Angle";
  image_url="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/15085461_852734018197403_764898666316745340_n.jpg?_nc_cat=104&_nc_oc=AQlDSps2E5zqQmT1oe__GkuXHtockAIG2vVdLsHCJmUZcwnbwteX-avUI8Ljtc1nlvk&_nc_ht=scontent.fsgn2-1.fna&oh=9506fe59501079552bd703ae6f21f99a&oe=5D25CF30";

  constructor() { }

  ngOnInit() {
  }

}
