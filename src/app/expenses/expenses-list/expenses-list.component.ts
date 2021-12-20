import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { AddExpensesComponent } from '../add-expenses/add-expenses.component';
import { DeleteExpensesComponent } from '../delete-expenses/delete-expenses.component';
import { ExpensesDetailsComponent } from '../expenses-details/expenses-details.component';
import { DailyExpensesService} from '../../_services/daily-expenses.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentModesService } from 'src/app/_services/payment-modes.service';
import { FormBuilder, FormGroup } from '@angular/forms';
export interface PeriodicElement {
  Category: string;
  Amount: number;
  ExpenseDate: Date;
  Comments?: string;
  PaymentMode: string;
  PaymentDate: Date;
  TransactionPicture?: string;
  CreatedBy?: string;
  CreatedDate?: Date;
}

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss'],
  providers: [DatePipe]
})
export class ExpensesListComponent implements OnInit {
  displayedColumns: string[] = ['id','category', 'amount', 'expensesDate', 'paymentMode', 'paymentDate', 'Actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  data: any = [];
  dataSource = new MatTableDataSource<any>();
  categories: any = [];
  paymentModes: any = []
  expensesData = {
    animal: 'panda',
  }
  collapsableFilters = false;
  public form: FormGroup;
  maxDate:string  = new Date().toISOString().split('T')[0]
  constructor(
    public dialog: MatDialog,
    private dailyExpenseService: DailyExpensesService,
    private toastrService: ToastrService,
    private categoryService: CategoryService,
    private paymentModeService: PaymentModesService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.search();
    this.getCategories();
    this.getPaymentModes();
    this.buildFormFilters();
  }

  openDialog(data: any) {
    let dialogRef = this.dialog.open(AddExpensesComponent, {
      data: data,
      width: '850px',
      height: '650px'
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res && res === 'Saved') {
        this.search();
        this.showSuccess('Saved Successfully.')
      }
    })
  }
  delete(id: number) {
    
   let dialogRef =  this.dialog.open(DeleteExpensesComponent, {
      data: id,
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(res => {
      this.search();
      this.showSuccess('Deleted Successfully.')
    })
  }

  details(data) {
    this.dialog.open(ExpensesDetailsComponent, {
       data: data,
       width: '850px',
       height:'400px'
     });
  }

  search(filters: any = []) {
    this.data = []
    this.dailyExpenseService.search(filters).subscribe(dailyExpenses => {
      console.log(dailyExpenses)
      this.data = dailyExpenses;
      this.dataSource = new MatTableDataSource<any>(this.data);
      this.dataSource.paginator = this.paginator;
    })
  }

  getById(id: number) {
    //console.log('row is', row)
    this.dailyExpenseService.getByid(id).subscribe(dailyExpense => {
      console.log(dailyExpense);
      this.details(dailyExpense)
    })
  }

  showSuccess(msg: string) {
    this.toastrService.success(msg)
  }

  getCategories() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories
    })
  }

  getPaymentModes() {
    this.paymentModeService.getAll().subscribe(paymentModes => {
      this.paymentModes = paymentModes
    })
  }

  collapseFilters() {
    this.collapsableFilters = !this.collapsableFilters;
  }

  buildFormFilters() {
    this.form = this.fb.group({
      category: [0, ],
      fromExpensesDate: ['', ],
      paymentMode:[0, ],
      toExpensesDate: ['', ]
    })
  }
  
  applyFilters() {
      this.search([this.form.value]);
  }
}
