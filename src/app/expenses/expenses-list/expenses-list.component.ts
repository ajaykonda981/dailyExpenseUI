import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddExpensesComponent } from '../add-expenses/add-expenses.component';
import { DeleteExpensesComponent } from '../delete-expenses/delete-expenses.component';
import { ExpensesDetailsComponent } from '../expenses-details/expenses-details.component';

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

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Category: 'FOOD',
    Amount: 150,
    ExpenseDate: new Date(),
    
    PaymentMode: 'Cash',
    PaymentDate: new Date(),
  },
  {
    Category: 'SAND',
    Amount: 10000,
    ExpenseDate: new Date(),
    PaymentMode: 'Phone Pay',
    PaymentDate: new Date(),
  },
  {
    Category: 'CEMENT',
    Amount: 5000,
    ExpenseDate: new Date(),
    PaymentMode: 'Phone Pay',
    PaymentDate: new Date(),
  }

];

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss'],
  providers: [DatePipe]
})
export class ExpensesListComponent implements OnInit {
  displayedColumns: string[] = ['Category', 'Amount', 'ExpenseDate', 'PaymentMode', 'PaymentDate', 'Actions'];
  dataSource = ELEMENT_DATA;
  expensesData = {
    animal: 'panda',
  }
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(data: any) {
    this.dialog.open(AddExpensesComponent, {
      data: data,
      width: '850px',
      height: '650px'
    });
  }
  delete() {
    this.dialog.open(DeleteExpensesComponent, {
     // data: data,
      width: '450px'
    });
  }

  details() {
    this.dialog.open(ExpensesDetailsComponent, {
      // data: data,
       width: '850px',
       height:'400px'
     });
  }
}
