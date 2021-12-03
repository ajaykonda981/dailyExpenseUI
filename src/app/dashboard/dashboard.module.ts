import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ExpensesDashboardComponent } from './expenses-dashboard/expenses-dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [ExpensesDashboardComponent    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxChartsModule
  ]
})
export class DashboardModule { }
