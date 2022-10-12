import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { RZTimeStatusChartComponent } from './time-status-chart.component';

@NgModule({
  declarations: [RZTimeStatusChartComponent],
  exports: [RZTimeStatusChartComponent],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class RZTimeStatusChartModule {}
