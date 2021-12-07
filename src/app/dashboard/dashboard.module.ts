import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ExpensesDashboardComponent } from './expenses-dashboard/expenses-dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DailyExpensesService } from '../_services/daily-expenses.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ExpensesDashboardComponent    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [
    DailyExpensesService
  ]
})
export class DashboardModule { }
