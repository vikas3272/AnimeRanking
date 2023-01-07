import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display-chart',
  templateUrl: './display-chart.component.html',
  styleUrls: ['./display-chart.component.css']
})
export class DisplayChartComponent implements OnInit {
  bars: DOMRect[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
