import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-about',
  templateUrl: './app-about.component.html',
  styleUrls: ['./app-about.component.scss']
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

  vinhResume={
    resume: {
      contact: {
        name: "Nguyen The Vinh",
        title: "Intern Translator",
        phone: "(+84) 964 12 3143",
        email: "nguyenthevinh1997@gmail.com",
        summary: "I want to be a Japanese Translator",
        social: [{
            _id: "5bf102ad63ed1c1764973633",
            network: "FACEBOOK",
            url: "https://www.facebook.com/vinh.nguyen"
          },
          {
            _id: "5bf102ad63ed1c1764973632",
            network: "GITHUB",
            url: "https://github.com/nguyenthevinh1997"
          }
        ]
      },
      skill: [
        "Japanese N4",
        "IELTS 7.5",
        "I just bluffing!"
      ],
      experience: [{
        startDate: {
          month: 2,
          year: 2018
        },
        endDate: {
          month: 8,
          year: 2018
        },
        description: [
          "Learn Japanese as much as possible",
          "Go onsite Japan",
          "Trying to get N2 Japanese"
        ],
        _id: "5bf102ad63ed1c1764973634",
        company_name: "JTech",
        current: true,
        title: "Japanese Internship",
        location: "Ho Chi Minh City"
      }],
      education: [{
        startDate: {
          month: 8,
          year: 2015
        },
        endDate: {
          month: 7,
          year: 2019
        },
        _id: "5bf102ad63ed1c1764973635",
        school_name: "HCMUTE",
        major: "Information Technology",
        current: true
      }],
      project: [{
        startDate: {
          month: 8,
          year: 2018
        },
        endDate: {
          month: 12,
          year: 2018
        },
        _id: "5bf102ad63ed1c1764973636",
        name: "Angular CV Generator",
        description: "A project that I am a part of it",
        imageUrl: ""
      }],
      created: "2018-11-18T06:11:57.490Z"
    },
    _id: "5bf102ad63ed1c1764973631",
    googleId: "7128028350667965",
    googleName: "Nguyễn Thế Vinh",
    tokenFacebook: "EAATtbq2YL08BAB2dduBgy2Oiv3wZAlP4yPIWBj1IPnZBjk9WDeePuBqZA7imeDGxeKf4iPSxUYAj32GI0UXp5IXlySKF7ypr5tiaQJSsGcl8ZBzCZBrpZA5n04t9S92PBeZCw5yFnGoKZCs5LVHDFDVXWJZAq0UbJEqZAVow1fuUapSAZDZD",
    avatarURL: "",
    __v: 0
  };

  constructor() { }

  ngOnInit() {
  }

}
