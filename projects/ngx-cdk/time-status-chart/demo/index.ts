import { Component } from '@angular/core';
import { RZTimeStatusChartModule } from '../time-status-chart.module';
import { __MOCK__ } from './__MOCK__';

@Component({
  selector: 'rz-demo-time-status-chart',
  standalone: true,
  imports: [RZTimeStatusChartModule],
  template: `
    <rz-time-status-chart [data]="data"></rz-time-status-chart>
    <rz-time-status-chart
      [data]="data"
      [isDataZoomSelect]="false"
      [maxSize]="3"
      [options]="{
        title: {
          text: 'custom title'
        }
      }"></rz-time-status-chart>
  `,
})
export class RZDemoTimeStatusChartComponent {
  data = __MOCK__;
}
