import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { DemoComponents, DemoModules } from './demo.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...DemoModules,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    ...DemoComponents,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
