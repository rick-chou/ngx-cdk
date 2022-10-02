import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <nz-layout class="h-screen">
      <nz-header>
        <div class="logo">
          <img src="assets/logo.png" alt="" />
        </div>
        <ul nz-menu nzTheme="dark" nzMode="horizontal" class="leading-[64px]">
          <li nz-menu-item nzSelected>Component</li>
        </ul>
      </nz-header>
      <nz-content class="outer-content">
        <nz-breadcrumb>
          <nz-breadcrumb-item>Component</nz-breadcrumb-item>
          <nz-breadcrumb-item>List</nz-breadcrumb-item>
          <nz-breadcrumb-item>App</nz-breadcrumb-item>
        </nz-breadcrumb>
        <nz-layout class="py-6 !bg-white h-[75vh]">
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
        <nz-footer class="text-center">@rickzhou/ngx-cdk ©2022 Implement By Angular</nz-footer>
      </nz-content>
    </nz-layout>
  `,
  styles: [
    `
      .logo {
        width: 120px;
        height: 31px;
        display: flex;
        margin: 16px 28px 16px 0;
        float: left;
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
