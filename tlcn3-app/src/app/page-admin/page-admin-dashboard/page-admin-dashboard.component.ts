import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
import { TemplateService } from "src/app/services/template.service";
@Component({
  selector: "app-page-admin-dashboard",
  templateUrl: "./page-admin-dashboard.component.html",
  styleUrls: ["./page-admin-dashboard.component.scss"]
})
export class PageAdminDashboardComponent implements OnInit {
  @ViewChild("canvas") canvas: ElementRef;

  title = "Dash board";
  chart: any = [];
  isLoading =false;

  constructor(private templateService: TemplateService) {}

  ngOnInit() {
    this.isLoading=true;
    this.templateService.getRatioTemplateTrending().subscribe(responseRatio => {
      this.isLoading=false;
      this.createChart(
        responseRatio.defaultRate,
        responseRatio.redSideRate,
        responseRatio.blueSideRate,
        responseRatio.redTopRate,
        responseRatio.blueTopRate
      );
    });
  }
  createChart(
    defaultTemp: number,
    redSide: number,
    blueSide: number,
    redTop: number,
    blueTop: number
  ) {
    this.chart = new Chart(this.canvas.nativeElement.getContext("2d"), {
      type: "doughnut",
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Template trending"
        },
        legend: {
          position: "top"
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      },
      data: {
        datasets: [
          {
            data: [blueTop, redTop, blueSide, redSide, defaultTemp].reverse(),
            backgroundColor: [
              "#B71C1C",
              "#FF6F00",
              "#FFD740",
              "#558B2F",
              "#0277BD"
            ],
            label: "Dataset 1"
          }
        ],
        labels: [
          "Default template",
          "Red side",
          "Blue side",
          "Red top",
          "Blue top"
        ]
      }
    });
  }
}
