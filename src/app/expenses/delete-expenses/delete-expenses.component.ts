import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-expenses',
  templateUrl: './delete-expenses.component.html',
  styleUrls: ['./delete-expenses.component.scss']
})
export class DeleteExpensesComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<DeleteExpensesComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildReasonForm()
  }

  close() {
    this.dialogRef.close()
  }

  buildReasonForm() {
    this.form = this.fb.group({
      Id: 0,
      ReasonForDeleting: ['', [Validators.required]]
    })
  }
  
  deleteExpense() {
    console.log('form value', this.form.value)
  }
}
