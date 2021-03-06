import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AppAboutComponent implements OnInit {

  vietResume={
    googleId: "9pu12wedjy0123d",
    googleName: "Do Quoc Viet",
    avatarURL: "",
    resume: {
      contact: {
        name: "Do Quoc Viet",
        title: "Student",
        phone: "(+84) 372 18 2804",
        email: "vietdqhcmute@gmail.com",
        summary: "I want to be a Web developer",
        social: [{
            network: "FACEBOOK",
            url: "https://www.facebook.com/ducky.holmes"
          },
          {
            type: "GITHUB",
            url: "https://github.com/vietdqhcmute"
          }
        ]

      },
      experience: [{
        company_name: "Amanotes",
        startDate: {
          month: 6,
          year: 2018
        },
        endDate: {
          month: 8,
          year: 2018
        },
        current: false,
        title: "Internship",
        location: "Ho Chi Minh City",
        description: ["Worked here as a backend developer Intern and QC Scrum Intern", "My first job"]
      }],

      education: [{
        school_name: "HCMUTE",
        major: "Information Technology",
        startDate: {
          month: 8,
          year: 2015
        },
        endDate: {
          month: 7,
          year: 2019
        },
        description: "Trying to graduate too",
        current: true
      }],
      project: {
        name: "Angular CV Generator",
        description: "A project that I want to develop",
        imageUrl: "",
        startDate: {
          month: 8,
          year: 2018
        },
        endDate: {
          month: 12,
          year: 2018
        }
      },
      skill: ["Japanese N4", "IELTS 7.5", "I just bluffing!"]
    }
  };



  constructor() { }

  ngOnInit() {
  }

}
