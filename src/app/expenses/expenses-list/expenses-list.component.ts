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
  //dataSource: any = [];
  data: any = [];
  dataSource = new MatTableDataSource<any>();

  expensesData = {
    animal: 'panda',
  }
  constructor(
    public dialog: MatDialog,
    private dailyExpenseService: DailyExpensesService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.search()
  }

  openDialog(data: any) {
    let dialogRef = this.dialog.open(AddExpensesComponent, {
      data: data,
      width: '850px',
      height: '650px'
    });
    dialogRef.afterClosed().subscribe(res => {
      this.search();
      this.showSuccess('Saved Successfully.')
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

  search() {
    this.data = []
    this.dailyExpenseService.search().subscribe(dailyExpenses => {
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

  
}
