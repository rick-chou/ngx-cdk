import { Component, OnInit } from '@angular/core';
import { RZTimeStatusChartModule } from '../time-status-chart.module';
import { marked } from 'marked';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import hljs from 'highlight.js';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { __MOCK__ } from './__MOCK__';

@Component({
  selector: 'rz-demo-time-status-chart',
  standalone: true,
  imports: [RZTimeStatusChartModule, NzTabsModule, NzCardModule],
  styles: [
    `
      ::ng-deep {
        .content .ant-tabs-nav-wrap {
          display: none !important;
        }
      }
    `,
  ],
  template: `
    <div class="overflow-y-hidden">
      <nz-tabset (nzSelectedIndexChange)="selectIndexChange($event)">
        <nz-tab nzTitle="Usage"></nz-tab>
        <nz-tab nzTitle="Demo"></nz-tab>
      </nz-tabset>
      <div class="content h-[65vh] overflow-y-scroll pr-8">
        <nz-tabset [nzSelectedIndex]="tabIdx">
          <nz-tab>
            <article class="prose prose-sm max-w-none" [innerHTML]="markdown"></article>
          </nz-tab>
          <nz-tab nzForceRender="true">
            <nz-card>
              <rz-time-status-chart [data]="data"></rz-time-status-chart>
            </nz-card>
            <div class="h-4"></div>
            <nz-card>
              <rz-time-status-chart
                [data]="data"
                [isDataZoomSelect]="false"
                [maxSize]="3"
                [options]="{
                  title: {
                    text: 'custom title'
                  }
                }"></rz-time-status-chart>
            </nz-card>
          </nz-tab>
        </nz-tabset>
      </div>
    </div>
  `,
})
export class RZDemoTimeStatusChartComponent implements OnInit {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}
  data = __MOCK__;
  markdown!: SafeHtml;
  tabIdx = 0;
  ngOnInit() {
    this.http.get(`assets/time-status-chart/demo/index.md`, { responseType: 'text' }).subscribe(res => {
      const fragment = document.createElement('div');
      fragment.innerHTML = marked.parse(res, { sanitize: false, smartypants: true });
      const codeBlocks = fragment.querySelectorAll('.language-ts');
      codeBlocks.forEach(node => {
        node.innerHTML = hljs.highlight(node.innerHTML, { language: 'typescript' }).value;
      });
      let ret = fragment.innerHTML.replace(/&gt;/g, '>');
      ret = ret.replace(/&lt;/g, '<');
      ret = ret.replace(/&quot;/g, '"');
      ret = ret.replace(/&apos;/g, "'");
      ret = ret.replace(/&amp;/g, '&');
      fragment.innerHTML = ret;
      this.markdown = this.sanitizer.bypassSecurityTrustHtml(fragment.innerHTML);
    });
  }

  selectIndexChange(idx: number) {
    this.tabIdx = idx;
  }
}
