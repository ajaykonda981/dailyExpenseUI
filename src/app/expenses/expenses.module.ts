import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { DeleteExpensesComponent } from './delete-expenses/delete-expenses.component';
import { ExpensesDetailsComponent } from './expenses-details/expenses-details.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploaderService} from '../_shared/file-uploader.service';
import { HttpClientModule } from '@angular/common/http';
import { DailyExpensesService } from '../_services/daily-expenses.service';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CategoryService } from '../_services/category.service';
import { PaymentModesService } from '../_services/payment-modes.service';
@NgModule({
  declarations: [AddExpensesComponent, ExpensesListComponent, DeleteExpensesComponent, ExpensesDetailsComponent],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    ToastrModule.forRoot()
  ],
  providers: [FileUploaderService, DailyExpensesService, ToastrService, CategoryService, PaymentModesService]
})
export class ExpensesModule { }
