import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { debounce, uniqueId } from 'lodash-es';
import * as echarts from 'echarts';
import deepmerge from 'deepmerge';

import {
  COLORS,
  format_time_status_chart_tooltip,
  MAX_Y_SIZE,
  TimeStatusChartData,
  timestampToDateString,
} from './utils';

@Component({
  selector: 'rz-time-status-chart',
  template: `<div [id]="id" [style.height]="height" [style.width]="width"></div>`,
})
export class RZTimeStatusChartComponent implements OnChanges, OnDestroy {
  @Input() data: TimeStatusChartData[] = [];
  @Input() options: echarts.EChartsOption = {};
  @Input() colors: string[] = COLORS;
  @Input() isDataZoomSelect = true;
  @Input() min!: number;
  @Input() max!: number;
  @Input() height = '400px';
  @Input() width = '100%';
  @Input() maxSize = MAX_Y_SIZE;
  @Input() dateFormatPattern!: string;
  @Output() onInit = new EventEmitter<echarts.ECharts>();
  public id = uniqueId('rz-time-status-chart');
  private yAxis!: string[];
  private chartInstance!: echarts.ECharts;

  ngOnChanges(): void {
    this.data?.length && this.renderChart();
    window.addEventListener('resize', this.resize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('keydown', this.bindHotKey);
  }

  private resize = debounce(() => {
    this.chartInstance && this.chartInstance.resize();
  }, 800);

  private bindHotKey = (event: KeyboardEvent) => {
    if (event.key === 'z') {
      this.chartInstance.dispatchAction({
        type: 'takeGlobalCursor',
        key: 'dataZoomSelect',
        dataZoomSelectActive: !this.isDataZoomSelect,
      });
      this.isDataZoomSelect = !this.isDataZoomSelect;
    }
    if (event.key === 'r') {
      this.chartInstance.dispatchAction({
        type: 'restore',
      });
      this.chartInstance.dispatchAction({
        type: 'takeGlobalCursor',
        key: 'dataZoomSelect',
        dataZoomSelectActive: this.isDataZoomSelect,
      });
    }
  };

  private renderChart(): void {
    setTimeout(() => {
      const result: { itemStyle: { color: string }; name: string; value: [number, number, number, boolean] }[] = [];
      var chartDom = document.getElementById(this.id) as HTMLDivElement;
      if (chartDom) {
        echarts.dispose(chartDom);
        const yAxisSet = new Set<string>();
        this.data.forEach(x => {
          yAxisSet.add(x.state);
        });
        this.yAxis = Array.from(yAxisSet);
        const yAxisColorConfig: { [key in string]: string } = {};
        this.yAxis.forEach((item, idx) => {
          yAxisColorConfig[item] = this.colors[idx % this.colors.length];
        });
        this.data.forEach(item => {
          result.push({
            itemStyle: {
              color: yAxisColorConfig[item.state],
            },
            name: item.state,
            value: [this.yAxis.indexOf(item.state), item.startTime, item.endTime, item.infer as boolean],
          });
        });
        const _option: echarts.EChartsOption = {
          tooltip: {
            formatter: params => format_time_status_chart_tooltip(params, this.dateFormatPattern),
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none',
              },
              restore: {},
              saveAsImage: {},
            },
            right: this.yAxis.length > this.maxSize ? 80 : 40,
          },
          dataZoom: [
            {
              type: 'slider',
              filterMode: 'weakFilter',
              showDataShadow: false,
              endValue: this.min,
              startValue: this.max,
              bottom: 10,
              labelFormatter: function (value: number) {
                return timestampToDateString(value, 'HH:mm:ss');
              },
            },
            {
              type: 'slider',
              yAxisIndex: 0,
              filterMode: 'weakFilter',
              right: 20,
              show: this.yAxis.length > this.maxSize,
              end: ((this.maxSize - 1) / this.yAxis.length) * 100,
              showDetail: false,
              brushSelect: false,
            },
          ],
          grid: {
            left: 10,
            right: this.yAxis.length > this.maxSize ? 80 : 40,
            top: 30,
            bottom: 50,
            containLabel: true,
          },
          xAxis: {
            type: 'time',
            min: this.min,
            max: this.max,
            axisLabel: {
              showMinLabel: true,
              showMaxLabel: true,
              formatter: (value: number) => {
                return timestampToDateString(value, 'HH:mm:ss');
              },
            },
            splitNumber: 5,
            splitLine: {
              interval: 0,
              show: true,
              lineStyle: {
                type: 'dashed',
              },
            },
          },
          yAxis: {
            // @ts-ignore
            type: 'category',
            data: this.yAxis,
            axisLabel: {
              rotate: -20,
              // @ts-ignore
              overflow: 'truncate',
              width: 100,
            },
            triggerEvent: true,
          },
          series: [
            {
              type: 'custom',
              renderItem: function (params: any, api: any) {
                const categoryIndex = api.value(0);
                const isInfer = api.value(3);
                const start = api.coord([api.value(1), categoryIndex]);
                const end = api.coord([api.value(2), categoryIndex]);
                const height = api.size([0, 1])[1];

                return {
                  type: 'rect',
                  shape: echarts.graphic.clipRectByRect(
                    {
                      x: start[0],
                      y: start[1] - height / 10,
                      width: end[0] - start[0],
                      height: height / 5,
                    },
                    {
                      x: params.coordSys.x,
                      y: params.coordSys.y,
                      width: params.coordSys.width,
                      height: params.coordSys.height,
                    }
                  ),
                  style: {
                    fill: api.visual('color'),
                    fillOpacity: isInfer ? 0.2 : 1,
                    stroke: isInfer ? '#fff' : 'transparent',
                    strokeOpacity: 0.8,
                    shadowColor: '#ccc',
                    shadowBlur: 10,
                    lineWidth: 2,
                    lineDash: 'dashed',
                  },
                };
              },
              encode: {
                x: [1, 2],
                y: 0,
              },
              data: result,
            },
          ],
        };
        this.chartInstance = echarts.init(chartDom);
        this.chartInstance.setOption(deepmerge(_option, this.options));
        this.onInit.emit(this.chartInstance);
        if (this.isDataZoomSelect) {
          this.chartInstance.dispatchAction({
            type: 'takeGlobalCursor',
            key: 'dataZoomSelect',
            dataZoomSelectActive: true,
          });
        }
        this.chartInstance.on('mouseover', params => {
          if (params.componentType === 'yAxis') {
            let offsetX = params.event!.offsetX + 10;
            let offsetY = params.event!.offsetY + 10;
            this.chartInstance.setOption({
              tooltip: {
                formatter: params.value,
                alwaysShowContent: true,
              },
            });
            this.chartInstance.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: 0,
              position: [offsetX, offsetY],
            });
          }
        });
        this.chartInstance.on('mouseout', params => {
          if (params.componentType === 'yAxis') {
            this.chartInstance.setOption({
              tooltip: {
                formatter: params.value,
                alwaysShowContent: false,
              },
            });
          }
        });
        window.removeEventListener('keydown', this.bindHotKey);
        window.addEventListener('keydown', this.bindHotKey);
      }
    });
  }
}
