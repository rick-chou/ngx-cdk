import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./hero.component').then(mod => mod.HeroComponent),
  },
  {
    path: 'component',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'time-status-chart',
        pathMatch: 'full',
      },
      {
        path: 'time-status-chart',
        loadComponent: () =>
          import('ngx-cdk/time-status-chart/demo/index').then(mod => mod.RZDemoTimeStatusChartComponent),
        data: { name: 1 },
      },
    ],
  },
  {
    path: 'test',
    loadComponent: () => import('./test.component').then(mod => mod.TestComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
