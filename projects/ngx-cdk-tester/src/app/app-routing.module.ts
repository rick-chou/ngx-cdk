import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: '/component/time-status-chart',
        pathMatch: 'full',
      },
      {
        path: 'component/time-status-chart',
        loadComponent: () =>
          import('ngx-cdk/time-status-chart/demo/index').then(mod => mod.RZDemoTimeStatusChartComponent),
        data: { name: 1 },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
