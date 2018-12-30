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
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Doughnut Chart'
        },legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
					data: [45,10,5,25,15].reverse(),
					backgroundColor: ["#B71C1C","#FF6F00","#FFD740","#558B2F","#0277BD"],
					label: 'Dataset 1'
				}],
				labels: ['Default template','Red side','Blue side','Red top','Blue top']
			}
    });
  }
}
