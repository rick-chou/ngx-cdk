import * as moment from 'moment';

/**
 *
 * @param timestamp
 * @param pattern
 * @default pattern MM/DD/YYYY HH:mm:ss:SSS
 */
export const timestampToDateString = (timestamp: number, pattern = 'MM/DD/YYYY HH:mm:ss:SSS'): string => {
  return moment.utc(timestamp).format(pattern);
};

export const format_time_status_chart_tooltip = (params: any, dataPattern?: string) => {
  return `
    <div style="margin: 0px 0 0; line-height: 1">
      <div style="margin: 0px 0 0; line-height: 1">
        <div style="font-size: 14px; color: #666; font-weight: 400; line-height: 1">${params.name}</div>
        <div style="margin: 10px 0 0; line-height: 1">
          <div style="margin: 0px 0 0; line-height: 1">
            <div style="margin: 0px 0 0; line-height: 1">
              ${params.marker}
              <span style="font-size: 14px; color: #666; font-weight: 400; margin-left: 2px"></span>
              <span style="float: right; margin-left: 20px; font-size: 14px; color: #666; font-weight: 900">
                ${timestampToDateString(params.value[1], dataPattern)} ~ 
                ${timestampToDateString(params.value[2], dataPattern)}
              </span>
              <div style="clear: both"></div>
            </div>
            <div style="clear: both"></div>
          </div>
          <div style="clear: both"></div>
        </div>
        <div style="clear: both"></div>
      </div>
    </div>
  `;
};

export const MAX_Y_SIZE = 10;
export const COLORS = ['#fac858'];

export interface TimeStatusChartData {
  startTime: number;
  endTime: number;
  state: string;
  infer?: boolean;
}
