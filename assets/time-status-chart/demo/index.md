# time-status-chart

> This component is useful when you need to represent a change in state over time

## Basic Use

```ts
import { Component } from '@angular/core';
import { RZTimeStatusChartModule } from '@rickzhou/ngx-cdk/time-status-chart';
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
```

### data
```ts
export const __MOCK__ = [
  {
    startTime: 1663267496944,
    endTime: 1663284111602,
    state: 'state-a',
  },
  {
    startTime: 1663273743276,
    endTime: 1663290205725,
    state: 'state-b',
  },
  {
    startTime: 1663277293717,
    endTime: 1663277339521,
    state: 'state-c',
  },
  {
    startTime: 1663277960399,
    endTime: 1663277963268,
    state: 'state-c',
  },
  {
    startTime: 1663278725300,
    endTime: 1663278757151,
    state: 'state-c',
  },
  {
    startTime: 1663278874422,
    endTime: 1663283843646,
    state: 'state-c',
  },
  {
    startTime: 1663283870580,
    endTime: 1663290205725,
    state: 'state-c',
  },
  {
    startTime: 1663279160393,
    endTime: 1663280305178,
    state: 'state-d-long-long-long',
  },
];
```

## API

**TimeStatusChartData**

```ts
export interface TimeStatusChartData {
  startTime: number;
  endTime: number;
  state: string;
  infer?: boolean;
}
```

| Property            | Description                   | Type                            | Default                   |
| ------------------- | ----------------------------- | ------------------------------- | ------------------------- |
| `data`              | Chart source data             | `TimeStatusChartData[]`         | -                         |
| `options`           | Echarts option                | `echarts.EChartsOption`         | -                         |
| `colors`            | Chart item color              | `string[]`                      | `['#fac858']`             |
| `isDataZoomSelect`  | Is data zoom select on        | `boolean`                       | `true`                    |
| `min`               | Chart xAxis min value         | `number`                        | -                         |
| `max`               | Chart xAxis max value         | `number`                        | -                         |
| `height`            | Chart height                  | `string`                        | `400px`                   |
| `width`             | Chart width                   | `string`                        | `100%`                    |
| `maxSize`           | When to turn on big data mode | `number`                        | `10`                      |
| `dateFormatPattern` | Data format                   | `string`                        | `MM/DD/YYYY HH:mm:ss:SSS` |
| `(onInit)`          | Callback for when chart init  | `EventEmitter<echarts.ECharts>` | -                         |

