import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
@Component({
  selector: "app-page-admin-dashboard",
  templateUrl: "./page-admin-dashboard.component.html",
  styleUrls: ["./page-admin-dashboard.component.scss"]
})
export class PageAdminDashboardComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;

  title = "Dash board";
  chart:any=[];
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    var ctx = document.getElementById("myChart");
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            data: [12, 19, 3, 5, 2, 3],
            borderColor: "#3cba9f",
            fill: false
          },
          {
            data: [3, 2, 5, 3, 19, 12],
            borderColor: "#ffcc00",
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
    console.log("this chart is" +this.chart);
  }
}
