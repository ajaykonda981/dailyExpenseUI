import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-expenses-details',
  templateUrl: './expenses-details.component.html',
  styleUrls: ['./expenses-details.component.scss']
})
export class ExpensesDetailsComponent implements OnInit {

  files= [
    {id: 0, fileName: 'googlePay_Cement.jpg'},
    {id: 1, fileName: 'phonePay_Sand.jpg'}
  ]
  constructor(
    private dialogRef: MatDialogRef<ExpensesDetailsComponent>
  ) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close()
  }

}
