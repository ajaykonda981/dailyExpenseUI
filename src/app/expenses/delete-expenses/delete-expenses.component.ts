import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/category/add-category/add-category.component';
import { DailyExpensesService } from 'src/app/_services/daily-expenses.service';

@Component({
  selector: 'app-delete-expenses',
  templateUrl: './delete-expenses.component.html',
  styleUrls: ['./delete-expenses.component.scss']
})
export class DeleteExpensesComponent implements OnInit {
  public form: FormGroup;
  data: any;
  constructor(
    private dialogRef: MatDialogRef<DeleteExpensesComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
    private dailyExpenseService: DailyExpensesService
  ) { 
    this.data = this.dialogData;

  }

  ngOnInit(): void {
    this.buildReasonForm()
  }

  close() {
    this.dialogRef.close()
  }

  buildReasonForm() {
    this.form = this.fb.group({
      id: this.data,
      reasonForDeleting: ['', [Validators.required]]
    })
  }
  
  deleteExpense() {
    this.dailyExpenseService.delete(this.data, this.form.value.reasonForDeleting).subscribe(res => {
      console.log(res)
      this.dialogRef.close()
    })
    console.log('form value', this.form.value)
  }
}
