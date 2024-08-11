
// charts.component.ts
import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  chartData: any;

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.chartService.getChartData().subscribe(data => {
      this.chartData = data;
      this.renderChart();
    });
  }

  renderChart(): void {
    // Logic to render your chart, e.g., using Chart.js or another library
  }
}
