import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <nz-layout class="h-screen overflow-y-hidden">
      <nz-header class="!bg-[#1976d2] flex">
        <div class="logo">
          <img src="assets/logo.png" alt="" />
        </div>
        <ul nz-menu nzTheme="dark" nzMode="horizontal" class="leading-[64px] !bg-[#1976d2]">
          <li nz-menu-item routerLink="component" nzSelected>Component</li>
        </ul>
      </nz-header>
      <nz-content class="outer-content">
        <nz-breadcrumb>
          <nz-breadcrumb-item>Component</nz-breadcrumb-item>
          <nz-breadcrumb-item>time-status-chart</nz-breadcrumb-item>
        </nz-breadcrumb>
        <nz-layout class="py-2 !bg-white h-[78vh] rounded-lg shadow-2xl">
          <nz-sider nzWidth="200px" nzTheme="light">
            <ul nz-menu nzMode="inline" class="sider-menu">
              <ul>
                <li nz-menu-item nzSelected>Time Status Chart</li>
              </ul>
            </ul>
          </nz-sider>
          <nz-content class="inner-content overflow-y-scroll">
            <router-outlet></router-outlet>
          </nz-content>
        </nz-layout>
        <nz-footer class="text-center !bg-transparent font-bold font-mono">
          📦 <a href="https://github.com/rick-chou/ngx-cdk">@rickzhou/ngx-cdk</a> ©2022 Implement By
          <a href="https://angular.io/">Angular</a> 🧡
        </nz-footer>
      </nz-content>
    </nz-layout>
  `,
  styles: [
    `
      .logo {
        width: 70px;
        display: flex;
        margin: 16px;
      }

      .outer-content {
        padding: 0 50px;
      }

      nz-breadcrumb {
        margin: 16px 0;
      }

      .sider-menu {
        height: 100%;
      }

      .inner-content {
        padding: 0 24px;
        min-height: 280px;
      }
    `,
  ],
})
export class HomeComponent {
  constructor(private router: ActivatedRoute) {
    this.router.data.subscribe(console.log);
  }
}
